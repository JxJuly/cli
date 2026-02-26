import { input, select } from '@inquirer/prompts';
import { UserInputs } from './types';

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
    choices: [
      {
        name: 'Node Library',
        value: 'node-library',
      },
      {
        name: 'React Components',
        value: 'react-components',
      },
    ],
  });

  return {
    folderName,
    packageName,
    template,
  };
};