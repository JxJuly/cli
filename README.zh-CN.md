# @july_cm/cli

[English](README.md) | [简体中文](README.zh-CN.md)

一个用于快速创建预配置 Node.js/TypeScript 项目的 CLI 工具。

## 特性

- 🚀 交互式项目脚手架，带有提示
- 📦 多个项目模板（Node 库、React 组件）
- ⚙️ 预配置的 TypeScript、ESLint 和 VSCode 设置
- 🎨 一致的代码格式化和 linting 规则
- 📝 自动生成配置文件

## 使用

使用 npx 创建新项目：

```bash
npx @july_cm/cli
```

CLI 将引导你完成以下步骤：

1. **项目文件夹名称**：输入项目文件夹的名称
2. **包名称**：输入 npm 包名称（默认为文件夹名称）
3. **模板选择**：从可用模板中选择：
   - **Node Library**：用于创建 Node.js 库
   - **React Components**：用于创建 React 组件库

## 生成的项目结构

运行 CLI 后，你的项目将包含：

```
my-project/
├── .vscode/
│   └── settings.json       # VSCode 编辑器设置
├── src/                    # 源代码目录
├── .gitignore              # Git 忽略规则
├── eslint.config.js        # ESLint 配置
├── package.json            # 包清单
└── tsconfig.json           # TypeScript 配置
```

## 生成的配置

### TypeScript 配置

生成的 `tsconfig.json` 包括：
- 启用严格模式
- ES 模块互操作性
- 跳过库检查以加快构建速度

### ESLint 配置

使用 `@july_cm/eslint-config` 的推荐设置，确保代码质量一致。

### VSCode 设置

预配置的编辑器设置：
- 2 空格缩进
- 使用 ESLint 保存时自动格式化
- 多种文件类型的 ESLint 验证
- Tailwind CSS 支持

## 下一步

项目生成后，安装依赖：

```bash
cd <你的项目名称>
pnpm install
```

## 开发

此 CLI 使用以下技术构建：
- **TypeScript** - 类型安全的开发
- **tsx** - TypeScript 执行
- **@inquirer/prompts** - 交互式命令行提示
- **fs-extra** - 增强的文件系统操作

## 许可证

ISC

---

**注意**：请确保系统上安装了 Node.js 18+ 版本。
