import { Config } from "./types";
import fs from 'fs-extra';

import { confirm } from '@inquirer/prompts';

export const createFolder = async (config: Config) => {
  if (fs.existsSync(config.projectDir) && !await confirm({
    message: `⚠️  Directory "${config.folderName}" already exists. Continue and overwrite?`,
    default: false,
  })) {
    console.log('✖ Operation cancelled');
    process.exit(1);
  }
  await fs.mkdir(config.projectDir, { recursive: true });
};