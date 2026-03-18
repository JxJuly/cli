import path from 'path';

import fs from 'fs-extra';

import type { GenerateTask } from '../types';

const content = `import { defineConfig, globalIgnores } from 'eslint/config';
import { recommended } from '@july_cm/eslint-config';

export default defineConfig([
  globalIgnores(['**/node_modules/', '.git/', '/dist/']),
  recommended,
]);
`;

export const generateEslintConfigTask: GenerateTask = async (config) => {
  const eslintConfigPath = path.resolve(config.projectDir, 'eslint.config.js');

  try {
    await fs.writeFile(eslintConfigPath, content, { flag: 'wx' });
  } catch (error: any) {
    if (error.code === 'EEXIST') {
      return;
    }
    throw error;
  }
};
