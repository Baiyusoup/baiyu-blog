---
title: Git命令笔记
date: 2021-03-22
categories:
 - 前端工程化
author: 青菜白玉汤
tags:
 - Git
---
## Git的结构

- 本地库：每个版本提交到的地方
- 暂存区：临时存储的方法（*还没打算提交，先保存一下*）
- 工作区：我们写代码的地方

## Git命令

```shell
# 查看工作区有哪些文件没有提交
git status
```

 ###  签名  

```shell
# 仅在该本地库下有效
git config
# 全局有效
git config --Global

## 1. 设置提交人的名称
git config user.name xxx

## 2. 设置提交人的邮箱
git config user.email xxx

# 提交时，所使用的签名 本地库 > 全局
```

### 创建仓库

```shell
# 1. 初始化仓库，即在本地创建一个git仓库，会在当前目录下生成一个.git文件夹
git init

# 2. 从远程拉取一个仓库到本地，该命令也会在本地创建一个git仓库
git clone 克隆远程仓库本地
```

### 提交

```shell
# 1. 将在工作区中新建或修改的部分提交到暂存区
git add [file]

# 2. 把暂存区的文件提交到仓库
git commit [file]

# 2.1 提交的时候无需进入vim编写提交信息
git commit -m "xxxx" [file]
```

### 撤销  

```shell
# 1. 把文件从暂存区中撤回，即撤回git add的操作
git rm --cached [file] 
```

### 修改  

```shell
# 在本地修改已经提交过的文件后，使用该命令提交修改内容，该命令相当于git add和git commit
# 注意该命令用于已经被git追踪的文件
# 新创建的和从暂存区退回来的文件都是未追踪的，可以在窗口看见 “Untracked files”，
git commit -a -m "xxxx" [file]
```

### 查看提交日志  

```shell
# 1. 一行显示一次提交日志
git log --pretty=oneline

# 2. 一行显示一次提交日志，和1的区别在于左边的哈希id显示长度变短
git log --oneline

# 3. 一行显示一次提交日志，和2的区在于多显示了HEAD@{num}信息，这个信息用于版本回退。
#    HEAD@{num}里的num是显示这个提交是第几个版本
git reflog
```

![在这里插入图片描述](https://img-blog.csdnimg.cn/20200727201600178.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzQxNjE0OQ==,size_16,color_FFFFFF,t_70)

*HEAD -> master 表示当前正处于哪个版本*  

### 版本回退和前进  

```shell
# 1. 基于索引值(即左边黄色的那些哈希串)进行版本回退/前进
git reset --hard 12ae662

# 2. 只能后退，有多少个^，就会回退几个版本，不推荐使用
git reset --hard HEAD^

# 3. 也是只能后退，~后面是数字是多少就回退多少个版本
git reset --hard HEAD~2

# reset的参数意义
## 在本地库移动HEAD指针，同时重置暂存区和工作区，即文件里的内容会变成HEAD所在版本的内容
git reset --hard
 
## 在本地库移动HEAD指针，同时重置暂存区
git reset --mixed

## 仅在本地库移动HEAD指针
git reset --soft
```

*通过版本回退/前进的命令，我们将会看到HEAD->master随着命令而移动着*  

### 删除文件

删除文件的操作是在工作区删除文件后，使用git add 和 git commit。这个删除操作也会产生一个版本。    

### 删除文件找回

找回删除文件的操作是使用版本回退

```shell
# 1. 找回已经提交到本地库的被删除文件
git reset --hard xxxx

# 2. 找回已经提交到暂存区的被删除文件
git reset --hard HEAD
```

### 比较文件差异  

```shell
# 1. 比较暂存区和工作区的文件差异
git diff [file] 

# 2. 比较本地库上一次提交记录和工作区的文件差异
git diff HEAD [file]

# 3. 比较本地库第num次提交记录和工作区的文件差异
git diff HEAD~num [file]
```

### 分支

```shell
# 1. 查看本地仓库有多少个分支
git branch -v

# 2. 创建新分支
git branch xxx

# 3. 切换到xxx分支
git checkout xxx

# 3.1 创建新xxx分支并切换到新xxx分支上
git checkout -b xxx

# 4. 合并xxx分支到当前分支
git merge xxx
```

### 冲突

合并分支时，在文件中的同一个地方，两个分支的内容不同，git无法决定如何取舍，需要我们手动解决。我们在执行git merge xxx命令时，发生冲突的标志是这样的：
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200727211428735.png)

 解决冲突的步骤：

1. 用vim进入到文件中，会看到冲突的地方
   ![在这里插入图片描述](https://img-blog.csdnimg.cn/20200727211841165.png)
   可以看到，红框里的是当前分支提交的新内容，白框是要合并的分支提交的内容，这两个分支在同一个地方的内容不一样。
2. 删除<<<HEAD、===== 和 >>>> dev，这些符号，然后根据你的决定修改这块冲突的地方，当然你也可以不修改，“ hii ” 和 “ ihi "都要。退出vim
3. 使用命令git commit -a -m "xxx"，**注意这个命令后面不跟文件名**

### 拉取远程仓库到本地

远程仓库一般都是在GitHub或Gitee上

```shell
# 克隆远程仓库到本地
git clone url # 远程仓库的url
```

### 给远程仓库起别名

```shell
# 查看本地库有哪些地址别名
git remote -v

# 给远程仓库起别名
git remote add origin url #远程仓库的url
```

起别名的原因是为了在push和fetch的时候不需要写那么一长串的url

### 推送到远程仓库

```shell
# 使用别名推送到指定远程仓库，git push url 要推送的分支
git push origin master
```

### 获取远程仓库最新的内容

```shell
git fetch orgin/url
```

### 跨团队开发  

1. 在github上fork项目到自己的GitHub账号
2. pull到自己的本地库
3. 添加/修改功能完毕
4. push到自己的那个远程仓库
5. 再github上点击new pull request，页面跳转后再点击create pull requst填写好自己完善的地方的相关信息
6. 再点击create pull request，就ok了

### 邀请成员 

因为提交的人如果不是该项目的成员的话，要经历上面`跨团队开发`的步骤。  
该项目的成员只需要修改后push即可。  

### 练习git的网站  

[Learn Git Branching](https:/