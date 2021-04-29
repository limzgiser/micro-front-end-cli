import {CommandConstructor} from "commander";
 
import addPage from "./actions/addPage";

export default function (Command: CommandConstructor) {
  const generate = new Command('add');
 
  generate
    .command('p <name>')
    .description('添加一个组件')
    .action(addPage);

  return generate;
}