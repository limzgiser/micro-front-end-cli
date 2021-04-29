import template from "art-template";
import {join} from "path";
import {outputFileSync, readdirSync} from "fs-extra";
import chalk from "chalk";
import inquirer from "inquirer";
import {comTypeQues} from "../inquirers";

export default async function (name: string) {
  try {
    const { comType } = await inquirer.prompt([comTypeQues]);
    const tplPath = join(__dirname, '../../templates/componentTpl', comType);
    const files = readdirSync(tplPath);
    files.forEach(file => {
      const content = template(tplPath + '/' + file, { name });
      const dest = `src/pages/${name}/${file}`;
      outputFileSync(dest, content);
    });
    console.log(chalk.green('创建成功>>', comType));
  } catch (e) {
    console.log(chalk.red('创建失败'));
    throw e;
  }
}
