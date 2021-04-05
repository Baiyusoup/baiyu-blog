(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{536:function(s,t,a){"use strict";a.r(t);var n=a(22),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"git的结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git的结构"}},[s._v("#")]),s._v(" Git的结构")]),s._v(" "),a("ul",[a("li",[s._v("本地库：每个版本提交到的地方")]),s._v(" "),a("li",[s._v("暂存区：临时存储的方法（"),a("em",[s._v("还没打算提交，先保存一下")]),s._v("）")]),s._v(" "),a("li",[s._v("工作区：我们写代码的地方")])]),s._v(" "),a("h2",{attrs:{id:"git命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git命令"}},[s._v("#")]),s._v(" Git命令")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看工作区有哪些文件没有提交")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" status\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h3",{attrs:{id:"签名"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#签名"}},[s._v("#")]),s._v(" 签名")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 仅在该本地库下有效")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 全局有效")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --Global\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 1. 设置提交人的名称")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config user.name xxx\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 2. 设置提交人的邮箱")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config user.email xxx\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 提交时，所使用的签名 本地库 > 全局")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("h3",{attrs:{id:"创建仓库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建仓库"}},[s._v("#")]),s._v(" 创建仓库")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 1. 初始化仓库，即在本地创建一个git仓库，会在当前目录下生成一个.git文件夹")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" init\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 2. 从远程拉取一个仓库到本地，该命令也会在本地创建一个git仓库")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone 克隆远程仓库本地\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h3",{attrs:{id:"提交"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#提交"}},[s._v("#")]),s._v(" 提交")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 1. 将在工作区中新建或修改的部分提交到暂存区")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("file"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 2. 把暂存区的文件提交到仓库")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("file"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 2.1 提交的时候无需进入vim编写提交信息")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit -m "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"xxxx"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("file"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("h3",{attrs:{id:"撤销"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#撤销"}},[s._v("#")]),s._v(" 撤销")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 1. 把文件从暂存区中撤回，即撤回git add的操作")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" --cached "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("file"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h3",{attrs:{id:"修改"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修改"}},[s._v("#")]),s._v(" 修改")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 在本地修改已经提交过的文件后，使用该命令提交修改内容，该命令相当于git add和git commit")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 注意该命令用于已经被git追踪的文件")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 新创建的和从暂存区退回来的文件都是未追踪的，可以在窗口看见 “Untracked files”，")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit -a -m "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"xxxx"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("file"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h3",{attrs:{id:"查看提交日志"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看提交日志"}},[s._v("#")]),s._v(" 查看提交日志")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 1. 一行显示一次提交日志")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" log --pretty"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("oneline\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 2. 一行显示一次提交日志，和1的区别在于左边的哈希id显示长度变短")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" log --oneline\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 3. 一行显示一次提交日志，和2的区在于多显示了HEAD@{num}信息，这个信息用于版本回退。")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#    HEAD@{num}里的num是显示这个提交是第几个版本")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" reflog\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200727201600178.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzQxNjE0OQ==,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}})]),s._v(" "),a("p",[a("em",[s._v("HEAD -> master 表示当前正处于哪个版本")])]),s._v(" "),a("h3",{attrs:{id:"版本回退和前进"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#版本回退和前进"}},[s._v("#")]),s._v(" 版本回退和前进")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 1. 基于索引值(即左边黄色的那些哈希串)进行版本回退/前进")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" reset --hard 12ae662\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 2. 只能后退，有多少个^，就会回退几个版本，不推荐使用")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" reset --hard HEAD^\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 3. 也是只能后退，~后面是数字是多少就回退多少个版本")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" reset --hard HEAD~2\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# reset的参数意义")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 在本地库移动HEAD指针，同时重置暂存区和工作区，即文件里的内容会变成HEAD所在版本的内容")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" reset --hard\n \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 在本地库移动HEAD指针，同时重置暂存区")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" reset --mixed\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 仅在本地库移动HEAD指针")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" reset --soft\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br")])]),a("p",[a("em",[s._v("通过版本回退/前进的命令，我们将会看到HEAD->master随着命令而移动着")])]),s._v(" "),a("h3",{attrs:{id:"删除文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#删除文件"}},[s._v("#")]),s._v(" 删除文件")]),s._v(" "),a("p",[s._v("删除文件的操作是在工作区删除文件后，使用git add 和 git commit。这个删除操作也会产生一个版本。")]),s._v(" "),a("h3",{attrs:{id:"删除文件找回"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#删除文件找回"}},[s._v("#")]),s._v(" 删除文件找回")]),s._v(" "),a("p",[s._v("找回删除文件的操作是使用版本回退")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 1. 找回已经提交到本地库的被删除文件")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" reset --hard xxxx\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 2. 找回已经提交到暂存区的被删除文件")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" reset --hard HEAD\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h3",{attrs:{id:"比较文件差异"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#比较文件差异"}},[s._v("#")]),s._v(" 比较文件差异")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 1. 比较暂存区和工作区的文件差异")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("diff")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("file"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" \n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 2. 比较本地库上一次提交记录和工作区的文件差异")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("diff")]),s._v(" HEAD "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("file"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 3. 比较本地库第num次提交记录和工作区的文件差异")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("diff")]),s._v(" HEAD~num "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("file"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("h3",{attrs:{id:"分支"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分支"}},[s._v("#")]),s._v(" 分支")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 1. 查看本地仓库有多少个分支")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch -v\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 2. 创建新分支")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch xxx\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 3. 切换到xxx分支")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout xxx\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 3.1 创建新xxx分支并切换到新xxx分支上")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout -b xxx\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 4. 合并xxx分支到当前分支")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" merge xxx\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])]),a("h3",{attrs:{id:"冲突"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#冲突"}},[s._v("#")]),s._v(" 冲突")]),s._v(" "),a("p",[s._v("合并分支时，在文件中的同一个地方，两个分支的内容不同，git无法决定如何取舍，需要我们手动解决。我们在执行git merge xxx命令时，发生冲突的标志是这样的：\n"),a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200727211428735.png",alt:"在这里插入图片描述"}})]),s._v(" "),a("p",[s._v("解决冲突的步骤：")]),s._v(" "),a("ol",[a("li",[s._v("用vim进入到文件中，会看到冲突的地方\n"),a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200727211841165.png",alt:"在这里插入图片描述"}}),s._v("\n可以看到，红框里的是当前分支提交的新内容，白框是要合并的分支提交的内容，这两个分支在同一个地方的内容不一样。")]),s._v(" "),a("li",[s._v('删除<<<HEAD、===== 和 >>>> dev，这些符号，然后根据你的决定修改这块冲突的地方，当然你也可以不修改，“ hii ” 和 “ ihi "都要。退出vim')]),s._v(" "),a("li",[s._v('使用命令git commit -a -m "xxx"，'),a("strong",[s._v("注意这个命令后面不跟文件名")])])]),s._v(" "),a("h3",{attrs:{id:"拉取远程仓库到本地"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#拉取远程仓库到本地"}},[s._v("#")]),s._v(" 拉取远程仓库到本地")]),s._v(" "),a("p",[s._v("远程仓库一般都是在GitHub或Gitee上")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 克隆远程仓库到本地")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone url "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 远程仓库的url")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h3",{attrs:{id:"给远程仓库起别名"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#给远程仓库起别名"}},[s._v("#")]),s._v(" 给远程仓库起别名")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看本地库有哪些地址别名")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" remote -v\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 给远程仓库起别名")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" remote "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" origin url "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#远程仓库的url")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("起别名的原因是为了在push和fetch的时候不需要写那么一长串的url")]),s._v(" "),a("h3",{attrs:{id:"推送到远程仓库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#推送到远程仓库"}},[s._v("#")]),s._v(" 推送到远程仓库")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 使用别名推送到指定远程仓库，git push url 要推送的分支")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push origin master\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h3",{attrs:{id:"获取远程仓库最新的内容"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#获取远程仓库最新的内容"}},[s._v("#")]),s._v(" 获取远程仓库最新的内容")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" fetch orgin/url\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"跨团队开发"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#跨团队开发"}},[s._v("#")]),s._v(" 跨团队开发")]),s._v(" "),a("ol",[a("li",[s._v("在github上fork项目到自己的GitHub账号")]),s._v(" "),a("li",[s._v("pull到自己的本地库")]),s._v(" "),a("li",[s._v("添加/修改功能完毕")]),s._v(" "),a("li",[s._v("push到自己的那个远程仓库")]),s._v(" "),a("li",[s._v("再github上点击new pull request，页面跳转后再点击create pull requst填写好自己完善的地方的相关信息")]),s._v(" "),a("li",[s._v("再点击create pull request，就ok了")])]),s._v(" "),a("h3",{attrs:{id:"邀请成员"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#邀请成员"}},[s._v("#")]),s._v(" 邀请成员")]),s._v(" "),a("p",[s._v("因为提交的人如果不是该项目的成员的话，要经历上面"),a("code",[s._v("跨团队开发")]),s._v("的步骤。"),a("br"),s._v("\n该项目的成员只需要修改后push即可。")]),s._v(" "),a("h3",{attrs:{id:"练习git的网站"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#练习git的网站"}},[s._v("#")]),s._v(" 练习git的网站")]),s._v(" "),a("p",[s._v("[Learn Git Branching](https:/")])])}),[],!1,null,null,null);t.default=e.exports}}]);