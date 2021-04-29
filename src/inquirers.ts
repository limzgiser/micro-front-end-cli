const installQues = {
  type: 'confirm',
  name: 'install',
  default: false,
  message: '是否安装依赖？'
}

const pkgToolQues = {
  type: 'list',
  name: 'pkgTool',
  choices: ['npm', 'yarn'],
  default: 'npm',
  message: 'npm or yarn ？'
}

const comTypeQues = {
  type: 'list',
  name: 'comType',
  choices: ['vue', 'react','angular'],
  default: 'vue',
  message: 'vue or react or  angular？'
}

export { installQues, pkgToolQues, comTypeQues };
