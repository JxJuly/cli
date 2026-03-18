import { confirm } from '@inquirer/prompts';
import { logger, symbols } from '@july_cm/logger';
import fs from 'fs-extra';

import type { GenerateTask } from '../types';

export const createProjectDirTask: GenerateTask = async (config) => {
  if (
    fs.existsSync(config.projectDir) &&
    !(await confirm({
      message: `${symbols.warning} Directory "${config.folderName}" already exists. Continue and overwrite?`,
      default: false,
    }))
  ) {
    logger.info('Operation cancelled');
    process.exit(1);
  }
  await fs.mkdir(config.projectDir, { recursive: true });
};
