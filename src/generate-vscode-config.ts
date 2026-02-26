import path from "path";
import { Config } from "./types";
import fs from 'fs-extra';

export const generateVscodeConfig = async (config: Config) => {
  const vscodeSettings = {
    "editor.tabSize": 2,
    "editor.insertSpaces": true,
    "editor.detectIndentation": false,
    "editor.defaultFormatter": "dbaeumer.vscode-eslint",
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": "explicit"
    },
    "eslint.validate": ["json", "jsonc", "javascript", "javascriptreact", "typescript", "typescriptreact", "css"],
    "files.associations": {
      "*.css": "tailwindcss"
    },
    "cSpell.words": [
      "trae",
      "vercel"
    ]
  }
  const vscodeConfigDir = path.resolve(config.projectDir, '.vscode');
  await fs.ensureDir(vscodeConfigDir);
  const vscodeSettingsJsonPath = path.resolve(config.projectDir, '.vscode/settings.json');
  await fs.writeJson(vscodeSettingsJsonPath, vscodeSettings, { spaces: 2 });
}