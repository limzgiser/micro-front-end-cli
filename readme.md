##### create
```text
// 基本用法
vmc create myProject

//  选择应用类型,主应用(main)或子应用(child)!
-a --appType [value]

// 选择应用框架！
-t --frameType [value]

// 如果自动安装依赖，选择包管理工具，npm(默认) or yarn
-pt, --pkg-tool [npm|yarn]
```

**add**
###### add c
新增一个组件
```text
// 基本用法
vmc add c compA // 将生成 src/components/compA.vue

// 也可指定tsx
vmc add c compA --tsx // 将生成 src/components/compA.tsx

// 指定目录
vmc add c a/b/c/compA // 将生成 src/a/b/c/compA.vue

```

##### 其它命令
```text
// 查看版本
vmc -V

// 查看帮助信息
vmc -h

vmc add -h

vmc add c -h
...

```