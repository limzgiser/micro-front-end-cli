"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.comTypeQues = exports.pkgToolQues = exports.installQues = void 0;
const installQues = {
    type: 'confirm',
    name: 'install',
    default: false,
    message: '是否安装依赖？'
};
exports.installQues = installQues;
const pkgToolQues = {
    type: 'list',
    name: 'pkgTool',
    choices: ['npm', 'yarn'],
    default: 'npm',
    message: 'npm or yarn ？'
};
exports.pkgToolQues = pkgToolQues;
const comTypeQues = {
    type: 'list',
    name: 'comType',
    choices: ['vue', 'react', 'angular'],
    default: 'vue',
    message: 'vue or react or  angular？'
};
exports.comTypeQues = comTypeQues;
