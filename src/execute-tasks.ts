import { logger } from '@july_cm/logger';

import type { Config, GenerateTask } from './types';

export class ExecuteTasks {
  tasks: GenerateTask[] = [];
  constructor(tasks: GenerateTask[]) {
    this.tasks = tasks;
  }

  push(task: GenerateTask) {
    this.tasks.push(task);
  }

  async execute(config: Config) {
    const sumCount = this.tasks.length;
    const step = logger.start('Generating project files...');
    for (const task of this.tasks) {
      const index = this.tasks.indexOf(task);
      const progress = `${index + 1}/${sumCount}`;
      step.update(`[${progress}] Generating project files...`);
      await task(config);
    }
  }
}
