import { execa } from 'execa';

import { generateGitIgnore } from './generate-gitignore';

import type { GenerateTask } from '../../types';

async function hasGit() {
  try {
    await execa('git', ['--version']);
    return true;
  } catch {
    return false;
  }
}

export const initGitTask: GenerateTask = async (config) => {
  if (!(await hasGit())) {
    return;
  }
  await execa('git', ['init'], { cwd: config.projectDir });

  await generateGitIgnore(config);
};
