import path from "path";
import { Config } from "./types";
import fs from 'fs-extra';

export const generateTsConfig = async (config: Config) => {
  const tsConfigPath = path.resolve(config.projectDir, 'tsconfig.json');
  const tsConfig = {
    "compilerOptions": {
      "esModuleInterop": true,
      "strict": true,
      "skipLibCheck": true
    },
    "include": [
      "src/**/*"
    ]
  }
  await fs.writeJson(tsConfigPath, tsConfig, { spaces: 2 });
}