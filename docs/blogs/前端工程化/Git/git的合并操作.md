---
title: Git的合并
date: 2021-08-22
categories:
 - 前端工程化
tags:
 - Git
---

## merge
假设现在从master分支上，创建了一个feat1分支，再feat1分支那里有了新了提交。
`场景一`：

此时我们回到master分支并进行了一些commit，再执行`git merge feat1`，则master分支会产生一个merge的commit，并且master的HEAD指针会指向这个commit上。

`场景二`：

回到master分支的时候，没有新的commit，那么执行这个合并命令时，只是将master的HEAD指针移动到feat1分支的最新的那个commit上，但是如果在这种情况下添加`--no-off`参数，那么结果和第一种情况一样。

推荐使用`--no-off`参数，因为如果在master上面出现了事故，需要回退到上一格版本的时候，如果不使用`--no-off`，那么就有可能回退到的版本不是在master进行commit的，而是feat1分支上的commit，因此这种快进合并的方式会导致feat1的commit合并进了master里面。

## rebase
从master分支创建一个feat分支，然后在这个feat分支上进行了一个commit。切回master分支，然后在进行了一些commit，然后再切换feat分支，执行`git rebase master`，然后master新提交的那几个commit就会合并进行feat分支，然后feat分支的历史记录就像是从master分支的最新的commit那创建来的。

## stash
