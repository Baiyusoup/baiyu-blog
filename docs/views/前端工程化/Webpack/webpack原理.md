---
title: webpack原理
date: 2020-04-26
categories:
 - 前端工程化
author: 青菜白玉汤
tags:
 - webpack
---

## 工作流程
webpack的工作流程是一个串行的过程：
- 初始化阶段
  1. 读取配置文件，将各个配置项拷贝到options对象中，并加载用户配置plugin，然后生成一个compiler编译对象

- 编译构建阶段
  1. 初始化完成后，调用compiler对象的run方法来真正启动webpack的编译构建阶段
  2. compile开始编译
  3. make从入口文件开始分析模块及其依赖的模块，创建这些模块对象
  4. build-module 构建模块

- 输出阶段
  1. seal输出资源
  2. emit输出，根据output的配置将内容输出到指定路径和文件名


在上述过程中，webpack会在特定的时间点广播出特定的事件，插件基于这些事件见机行事


待完成...