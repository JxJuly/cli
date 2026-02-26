import { getUserInput } from './get-user-input';
import { Config } from './types';
import { createFolder } from './create-fold';
import path from 'path';
import { generatePackageJson } from './generate-package-json';
import { generateVscodeConfig } from './generate-vscode-config';
import { generateGitIgnore } from './generate-git-ignore';
import { generateTsConfig } from './generate-ts-config';
import { generateEslintConfig } from './generate-eslint-config';
import { fileURLToPath } from 'url';

export const __filename = fileURLToPath(import.meta.url)
export const __dirname = path.dirname(__filename)

const main = async () => {
  /** 获取用户输入 */
  const userInputs = await getUserInput();
  const config: Config = {
    ...userInputs,
    cwd: process.cwd(),
    projectDir: path.resolve(process.cwd(), userInputs.folderName),
    cliDir: path.resolve(__dirname, '../'),
  }

  /** 创建项目文件夹 */
  await createFolder(config);

  /** 生成 package.json */
  await generatePackageJson(config);

  /** 生成 .vscode/settings.json */
  await generateVscodeConfig(config);

  /** 生成 .gitignore */
  await generateGitIgnore(config);

  /** 生成 tsconfig.json */
  await generateTsConfig(config);

  /** 生成 eslint.config.js */
  await generateEslintConfig(config);

  console.log('Generate completed. Please run the following commands:\n');
  console.log(`cd ${userInputs.folderName} && pnpm install`);
};

main().catch(error => {
  if (error instanceof Error && error.name === 'ExitPromptError') {
    console.log('👋 Until next time!')
  } else {
    throw error;
  }
});