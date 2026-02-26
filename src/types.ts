export interface UserInputs {
  folderName: string;
  packageName: string;
  template: string;
}

export interface Config extends UserInputs {
  cwd: string;
  projectDir: string;
  cliDir: string;
}
