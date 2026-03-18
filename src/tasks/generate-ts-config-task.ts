import path from 'path';

import fs from 'fs-extra';
import { merge } from 'lodash-es';

import { TemplateType, type GenerateTask } from '../types';

const common = {
  compilerOptions: {
    esModuleInterop: true,
    strict: true,
    skipLibCheck: true,
  },
  include: ['src/**/*'],
};

const react = {
  compilerOptions: {
    jsx: 'react-jsx',
  },
};

export const generateTsConfigTask: GenerateTask = async (config) => {
  const tsConfigPath = path.resolve(config.projectDir, 'tsconfig.json');
  const configs = [];
  if (config.template === TemplateType.ReactComponentLibrary) {
    configs.push(react);
  }
  const content = merge(common, ...configs);
  try {
    await fs.writeJson(tsConfigPath, content, { spaces: 2, flag: 'wx' });
  } catch (error: any) {
    if (error.code === 'EEXIST') {
      return;
    }
    throw error;
  }
};
