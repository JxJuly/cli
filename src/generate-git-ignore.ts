import path from "path";
import { Config } from "./types"
import fs from 'fs-extra';

export const generateGitIgnore = async (config: Config) => {
  await fs.copyFile(path.resolve(config.cliDir, '.gitignore'), path.resolve(config.projectDir, '.gitignore'));
}