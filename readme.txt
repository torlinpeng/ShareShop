git init 变成git可以管理的目录
git add readme.txt 把readme.txt 文件添加到暂存区  可以添加多个文件
git commit -m "wrote a readme file"  把暂存区的文件提交到仓库 -m 后面是备注
git status  查看目录当前状态  
git diff  head --   readme.txt 查看文件和版本库的差别
git log   可以查看提交历史。
git log --pretty=online  查看日志会比较简洁
git reset --hard head^  退回上一个版本   上上个就是head^^
git reset --hard 3628164  指定回到哪个版本  可以是未来的 也可以是以前的 版本号不需要写全
git reflog 记录每一次命令
git checkout -- readme.txt  撤销修改
git rm test.txt  删除文件
git commit -m "remove test.txt" 从版本库中删除
git checkout -- test.txt  恢复rm test.txt   删除的文件 或手动删除的
ssh-keygen -t res -c "583359028@qq.com" 创建SSH Key 创建后可以再用户注目礼找到.ssh 目录
里面有id_rsa和is_rsa.pub两个文件，这两个就是SSH Key的秘钥对，id_rsa是私钥，只能自己知道。id_rsa.pub是公钥，可以告诉任何人
git remote add origin git@github.com:583359028/lingyun.git   583359028是github账户名lingyun是github的仓库名 关联两个仓库 也可以推送  在github仓库那需要吧公钥放进key里。origin是远程库名
git push -u origin master 把本地库的内容推送到远程库并且关联起来  master 是分支的名字 这是第一链接要加-u 之后可以直接  git push origin master 
git clone git@github.com:583359028/lingyun.git   从github克隆一个远程库下来
git merge dev 合并分支dev
git checkout -b dev 创建分支 dev  并且切换到dev分支 
git checkout master 切换到分支master
git branch -d dev  删除dev分支
git branch  查看当前有几个分支 *代表所在的分支
git branch dev  创建分支dev
git log --graph --pretty=oneline --abbrev-commit 查看分支的合并情况
git merge --no-ff -m "merge with no-ff" dev  用普通模式合并分支，合并后的历史有分支，能看出曾经做合并，而fast forward 就看不出来曾经做过合并
git stash 储藏工作区
git stash list 查看储藏的工作区
git stash apply stash@{0} 恢复工作区，但stash的内容不删除 需要用git stash drop来删除 stash@{0}指定要恢复的工作区
git stash pop 恢复的同事把stash储藏的内容也删了
git branch -D feature-vulcan 强行删除分支
git remote 查看远程仓库信息
git remote -v 显示更详细的信息
git push origin div   推送分支div到远程仓库
git clone git@github.com:583359028/lingyun.git  583359028是github账号lingyun仓库名
git checkout -b div origin/div   当从远程库copy下来的时候默认情况下只能看到master分支，要copy其他分支就用这个  origin 代表默认的仓库名
git branch --set-upstream div origin/div 设置div和origin/div的链接
git pull 抓取最新的提交
git tag v1.0 设置标签为v1.0
git tag  查看所有标签
git show v1.  查看标签信息
git tag -a v0.1 -m "version 0.1 released" 3628164  用-a 指定标签名 -m指定文字说明 数字是版本号
git tag -s v0.2 -m "signed version 0.2 rekeased" fec145a 用私钥签名一个标签，要使用pgp签名，要安装gpg(gnupg)如果没找到gpg或者没有gpg秘钥对，就会报错
git tag -d v0.1  删除标签 标签都是在存储在本地 不会推送到远程，打错的标签可以在本地完全删除
git push origin v1.0 这是把标签推送到远程
git push origin --tags 一次性推送全部尚未推送到远程的本地标签
git tag -d v0.9 要删除原称的标枪 需先在本地删除标枪在
git push origin :refs/tags/v0.9  远程的标签就删除了
.gitignore  在git目录下创建这个文件里面可以填想忽略的文件 每次 git status就不会提示了 记得提交这个文件
git add -f app.class  强制添加被忽略的文件
git check-ignore 检查第几行写的忽略文件
git config --global alias.st status  设置别名 也就等于设置快捷键 敲git st 等同于 git status
git config --global alias.co checkout 
git config --global alias.ci commit 
git config --global alias.br branch    设置简写的方式 
cat .gitconfig 当前用户的Git配置文件










