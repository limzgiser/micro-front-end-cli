import template from "art-template";
import { join } from "path";
import { outputFileSync } from "fs-extra";
import { kebabCase } from "lodash";
import chalk from "chalk";

export default function (name: string, options: { tsx: boolean; }) {
  let basePath = 'components';
  let trueName = name;
  const data = name.split('/');
  if (data.length > 1) {
    trueName = data.pop()!;
    basePath = data.join('/');
  }
  let suffix = '.vue';
  if (options.tsx) {
    suffix = '.tsx';
  }
  try {
    const content = template(
      join(__dirname, '../../templates', 'component' + suffix),
      { name: trueName, rootCls: kebabCase(trueName) }
    );
    const dest = `src/${basePath}/${trueName}${suffix}`;
    outputFileSync(dest, content);
    console.log(chalk.green('创建成功>>', dest));
  } catch (e) {
    console.log(chalk.red('创建失败'));
    throw e;
  }
}
