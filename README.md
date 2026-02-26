# @july_cm/cli

[English](README.md) | [简体中文](README.zh-CN.md)

A CLI tool to quickly scaffold new Node.js/TypeScript projects with pre-configured settings.

## Features

- 🚀 Interactive project scaffolding with prompts
- 📦 Multiple project templates (Node Library, React Components)
- ⚙️ Pre-configured TypeScript, ESLint, and VSCode settings
- 🎨 Consistent code formatting and linting rules
- 📝 Automatic generation of configuration files

## Usage

Use npx to create a new project:

```bash
npx @july_cm/cli
```

The CLI will guide you through the following steps:

1. **Project folder name**: Enter the name of your project folder
2. **Package name**: Enter the npm package name (defaults to folder name)
3. **Template selection**: Choose from available templates:
   - **Node Library**: For creating Node.js libraries
   - **React Components**: For creating React component libraries

## Generated Project Structure

After running the CLI, your project will include:

```
my-project/
├── .vscode/
│   └── settings.json       # VSCode editor settings
├── src/                    # Source code directory
├── .gitignore              # Git ignore rules
├── eslint.config.js        # ESLint configuration
├── package.json            # Package manifest
└── tsconfig.json           # TypeScript configuration
```

## Generated Configurations

### TypeScript Configuration

The generated `tsconfig.json` includes:
- Strict mode enabled
- ES module interoperability
- Skip library checks for faster builds

### ESLint Configuration

Uses `@july_cm/eslint-config` with recommended settings for consistent code quality.

### VSCode Settings

Pre-configured editor settings:
- 2-space indentation
- Auto-format on save with ESLint
- ESLint validation for multiple file types
- Tailwind CSS support

## Next Steps

After project generation, install dependencies:

```bash
cd <your-project-name>
pnpm install
```

## Development

This CLI is built with:
- **TypeScript** - Type-safe development
- **tsx** - TypeScript execution
- **@inquirer/prompts** - Interactive command-line prompts
- **fs-extra** - Enhanced file system operations

## License

ISC

---

**Note**: Make sure to have Node.js 18+ installed on your system.
