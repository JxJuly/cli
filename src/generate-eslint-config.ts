import path from "path";
import { Config } from "./types";
import fs from 'fs-extra';
export const generateEslintConfig = async (config: Config) => {
  const eslintConfigPath = path.resolve(config.projectDir, 'eslint.config.js');
  const eslintConfig = `import { recommended } from '@july_cm/eslint-config';

export default recommended;\n`
  await fs.writeFile(eslintConfigPath, eslintConfig);
}