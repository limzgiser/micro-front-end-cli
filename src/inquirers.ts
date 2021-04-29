const installQues = {
  type: 'confirm',
  name: 'install',
  default: false,
  message: '是否安装依赖？'
}
const appTypeQues = {
  type: 'list',
  name: 'appType',
  choices: ['main', 'child'],
  default: 'npm',
  message: '选择应用类型,主应用(main)或子应用(child)!'
}
const frameTypeQues = {
  type: 'list',
  name: 'frameType',
  choices: ['vue', 'react', 'angular'],
  default: 'npm',
  message: '选择应用框架！'
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
  choices: ['vue', 'react', 'angular'],
  default: 'vue',
  message: 'vue or react or  angular？'
}

export { frameTypeQues, appTypeQues, installQues, pkgToolQues, comTypeQues };
