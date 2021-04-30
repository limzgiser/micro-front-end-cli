import { Command } from 'commander';
import create from "./actions/create";
import childCommand from "./childCommand";
const program = new Command('mfc');
program.version('0.0.1')

program
  .usage('create <projectName> [options]')
  .command('create <projectName>')
  .description('创建项目')
  .option('-a --appType [value]', '选择应用类型：主应用(main)|子(child)')
  .option('-t --frameType [value]', '选择框架类型：vue|react|angular')
  .option('-i --install', '是否自动安装依赖', false)
  .option('-pt --pkg-tool [value]', 'npm or yarn?')
  .action(create);
  program.addCommand(childCommand(Command));
program.parse(process.argv)
 
