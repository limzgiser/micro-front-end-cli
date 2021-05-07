#! /usr/bin/env node

require('./dist/index');

//  指定用node执行脚本文件
// /usr/bin/env 告诉系统可以在PATH目录中查找, 配置 #!/usr/bin/env node , 就是解决了不同的用户node路径不同的问题，可以让系统动态的去查找node来执行你的脚本文件
