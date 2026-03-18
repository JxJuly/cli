import path from 'path';
import { fileURLToPath } from 'url';

import { logger } from '@july_cm/logger';

import { ExecuteTasks } from './execute-tasks';
import { getUserInput } from './get-user-input';
import {
  createProjectDirTask,
  initGitTask,
  generateVscodeConfigTask,
  generatePackageJsonTask,
  generateEslintConfigTask,
  generateTsConfigTask,
} from './tasks';
import { AdditionalFeatureType, type Config } from './types';

export const __filename = fileURLToPath(import.meta.url);
export const __dirname = path.dirname(__filename);

const main = async () => {
  /** 获取用户输入 */
  const userInputs = await getUserInput();
  const config: Config = {
    ...userInputs,
    cwd: process.cwd(),
    projectDir: path.resolve(process.cwd(), userInputs.folderName),
    cliDir: path.resolve(__dirname, '../'),
  };

  const tasks = new ExecuteTasks([createProjectDirTask, generatePackageJsonTask, generateTsConfigTask]);

  if (config.features[AdditionalFeatureType.VscodeConfig]) {
    tasks.push(generateVscodeConfigTask);
  }
  if (config.features[AdditionalFeatureType.GitInit]) {
    tasks.push(initGitTask);
  }
  if (config.features[AdditionalFeatureType.ESLintConfig]) {
    tasks.push(generateEslintConfigTask);
  }

  logger.success(
    `Generate completed. Please run the following commands:\ncd ${userInputs.folderName} && pnpm install`
  );
};

main().catch((error) => {
  if (error instanceof Error && error.name === 'ExitPromptError') {
    logger.info('Until next time!');
  } else {
    throw error;
  }
});
