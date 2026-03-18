export enum TemplateType {
  NodeLibrary = 'node-library',
  ReactComponentLibrary = 'react-component-library',
}

export enum AdditionalFeatureType {
  ESLintConfig = 'eslint-config',
  VscodeConfig = 'vscode-config',
  GitInit = 'git-init',
  GithubPublishAction = 'github-publish-action',
}

export interface UserInputs {
  folderName: string;
  packageName: string;
  template: TemplateType;
  features: Record<AdditionalFeatureType, boolean | undefined>;
}

export interface Config extends UserInputs {
  cwd: string;
  projectDir: string;
  cliDir: string;
}

export type GenerateTask = (config: Config) => Promise<void> | void;
