import { Command } from 'commander';
import create from "./actions/create";
import childCommand from "./childCommand";
const program = new Command('mfc');
program.version('0.0.1')

program
  .usage('create <projectName> [options]')
  .command('create <projectName>')
  .description('创建项目')
  .option('-t --tool [value]', '选择构建工具：webpack|gulp', 'webpack')
  .option('-i --install', '是否自动安装依赖', false)
  .option('-pt --pkg-tool [value]', 'npm or yarn?')
  .action(create);
  // program.addCommand(childCommand(Command));
program.parse(process.argv)
 
