"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const commander_1 = require("commander");
const create_1 = tslib_1.__importDefault(require("./actions/create"));
const program = new commander_1.Command('mfc');
program.version('0.0.1');
program
    .usage('create <projectName> [options]')
    .command('create <projectName>')
    .description('创建项目')
    .option('-t --tool [value]', '选择构建工具：webpack|gulp', 'webpack')
    .option('-i --install', '是否自动安装依赖', false)
    .option('-pt --pkg-tool [value]', 'npm or yarn?')
    .action(create_1.default);
// program.addCommand(childCommand(Command));
program.parse(process.argv);
