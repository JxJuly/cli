import { input, select, checkbox } from '@inquirer/prompts';

import { TemplateType, AdditionalFeatureType } from './types';

import type { UserInputs } from './types';

const templates = [
  {
    name: 'Node Library',
    value: TemplateType.NodeLibrary,
  },
  {
    name: 'React Component Library',
    value: TemplateType.ReactComponentLibrary,
  },
];
const additionalFeatures = [
  {
    name: 'ESLint config',
    value: AdditionalFeatureType.ESLintConfig,
  },
  {
    name: 'Github publish action',
    value: AdditionalFeatureType.GithubPublishAction,
  },
  {
    name: 'Git init',
    value: AdditionalFeatureType.GitInit,
  },
  {
    name: 'Vscode config',
    value: AdditionalFeatureType.VscodeConfig,
  },
];

export const getUserInput = async (): Promise<UserInputs> => {
  const folderName = await input({
    message: 'Project folder name:',
    default: 'my-project',
    required: true,
  });

  const packageName = await input({
    message: 'Package name:',
    default: folderName,
    required: true,
  });

  const template = await select({
    message: 'Select template:',
    choices: templates,
  });

  const features = await checkbox({
    message: 'Select additional features:',
    choices: additionalFeatures,
  });

  return {
    folderName,
    packageName,
    template,
    features: Object.fromEntries(features.map((feature) => [feature, true])) as Record<
      AdditionalFeatureType,
      boolean | undefined
    >,
  };
};
