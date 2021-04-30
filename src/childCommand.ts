import { CommandConstructor } from "commander";

import addComponent from "./actions/addComponent";

export default function (Command: CommandConstructor) {
  const generate = new Command('add');
  generate
    .command('c <name>')
    .description('添加一个组件')
    .option('--tsx', 'Is tsx', false)
    .action(addComponent);

  return generate;
}
