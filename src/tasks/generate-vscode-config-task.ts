import path from 'path';

import fs from 'fs-extra';
import { merge } from 'lodash-es';

import { AdditionalFeatureType } from '../types';

import type { GenerateTask } from '../types';

const common = {
  'editor.tabSize': 2,
  'editor.insertSpaces': true,
  'editor.detectIndentation': false,
  'files.associations': {
    '*.css': 'tailwindcss',
  },
  'cSpell.words': ['trae', 'vercel'],
};

const eslint = {
  'editor.defaultFormatter': 'dbaeumer.vscode-eslint',
  'editor.codeActionsOnSave': {
    'source.fixAll.eslint': 'explicit',
  },
  'eslint.validate': [
    'json',
    'jsonc',
    'javascript',
    'javascriptreact',
    'typescript',
    'typescriptreact',
    'css',
  ],
};

export const generateVscodeConfigTask: GenerateTask = async (config) => {
  if (!config.features[AdditionalFeatureType.VscodeConfig]) {
    return;
  }

  const vscodeSettingsJsonPath = path.resolve(config.projectDir, '.vscode/settings.json');
  if (fs.existsSync(vscodeSettingsJsonPath)) {
    return;
  }
  const configs: any[] = [];
  if (config.features[AdditionalFeatureType.ESLintConfig]) {
    configs.push(eslint);
  }
  const content = merge(common, ...configs);
  const vscodeConfigDir = path.resolve(config.projectDir, '.vscode');
  await fs.ensureDir(vscodeConfigDir);
  await fs.writeJson(vscodeSettingsJsonPath, content, { spaces: 2 });
};
