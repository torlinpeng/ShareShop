git init ���git���Թ����Ŀ¼
git add readme.txt ��readme.txt �ļ���ӵ��ݴ���  ������Ӷ���ļ�
git commit -m "wrote a readme file"  ���ݴ������ļ��ύ���ֿ� -m �����Ǳ�ע
git status  �鿴Ŀ¼��ǰ״̬  
git diff  head --   readme.txt �鿴�ļ��Ͱ汾��Ĳ��
git log   ���Բ鿴�ύ��ʷ��
git log --pretty=online  �鿴��־��Ƚϼ��
git reset --hard head^  �˻���һ���汾   ���ϸ�����head^^
git reset --hard 3628164  ָ���ص��ĸ��汾  ������δ���� Ҳ��������ǰ�� �汾�Ų���Ҫдȫ
git reflog ��¼ÿһ������
git checkout -- readme.txt  �����޸�
git rm test.txt  ɾ���ļ�
git commit -m "remove test.txt" �Ӱ汾����ɾ��
git checkout -- test.txt  �ָ�rm test.txt   ɾ�����ļ� ���ֶ�ɾ����
ssh-keygen -t res -c "583359028@qq.com" ����SSH Key ������������û�עĿ���ҵ�.ssh Ŀ¼
������id_rsa��is_rsa.pub�����ļ�������������SSH Key����Կ�ԣ�id_rsa��˽Կ��ֻ���Լ�֪����id_rsa.pub�ǹ�Կ�����Ը����κ���
git remote add origin git@github.com:583359028/lingyun.git   583359028��github�˻���lingyun��github�Ĳֿ��� ���������ֿ� Ҳ��������  ��github�ֿ�����Ҫ�ɹ�Կ�Ž�key�origin��Զ�̿���
git push -u origin master �ѱ��ؿ���������͵�Զ�̿Ⲣ�ҹ�������  master �Ƿ�֧������ ���ǵ�һ����Ҫ��-u ֮�����ֱ��  git push origin master 
git clone git@github.com:583359028/lingyun.git   ��github��¡һ��Զ�̿�����
git merge dev �ϲ���֧dev
git checkout -b dev ������֧ dev  �����л���dev��֧ 
git checkout master �л�����֧master
git branch -d dev  ɾ��dev��֧
git branch  �鿴��ǰ�м�����֧ *�������ڵķ�֧
git branch dev  ������֧dev
git log --graph --pretty=oneline --abbrev-commit �鿴��֧�ĺϲ����
git merge --no-ff -m "merge with no-ff" dev  ����ͨģʽ�ϲ���֧���ϲ������ʷ�з�֧���ܿ����������ϲ�����fast forward �Ϳ����������������ϲ�
git stash ���ع�����
git stash list �鿴���صĹ�����
git stash apply stash@{0} �ָ�����������stash�����ݲ�ɾ�� ��Ҫ��git stash drop��ɾ�� stash@{0}ָ��Ҫ�ָ��Ĺ�����
git stash pop �ָ���ͬ�°�stash���ص�����Ҳɾ��
git branch -D feature-vulcan ǿ��ɾ����֧
git remote �鿴Զ�ֿ̲���Ϣ
git remote -v ��ʾ����ϸ����Ϣ
git push origin div   ���ͷ�֧div��Զ�ֿ̲�
git clone git@github.com:583359028/lingyun.git  583359028��github�˺�lingyun�ֿ���
git checkout -b div origin/div   ����Զ�̿�copy������ʱ��Ĭ�������ֻ�ܿ���master��֧��Ҫcopy������֧�������  origin ����Ĭ�ϵĲֿ���
git branch --set-upstream div origin/div ����div��origin/div������
git pull ץȡ���µ��ύ
git tag v1.0 ���ñ�ǩΪv1.0
git tag  �鿴���б�ǩ
git show v1.  �鿴��ǩ��Ϣ
git tag -a v0.1 -m "version 0.1 released" 3628164  ��-a ָ����ǩ�� -mָ������˵�� �����ǰ汾��
git tag -s v0.2 -m "signed version 0.2 rekeased" fec145a ��˽Կǩ��һ����ǩ��Ҫʹ��pgpǩ����Ҫ��װgpg(gnupg)���û�ҵ�gpg����û��gpg��Կ�ԣ��ͻᱨ��
git tag -d v0.1  ɾ����ǩ ��ǩ�����ڴ洢�ڱ��� �������͵�Զ�̣����ı�ǩ�����ڱ�����ȫɾ��
git push origin v1.0 ���ǰѱ�ǩ���͵�Զ��
git push origin --tags һ��������ȫ����δ���͵�Զ�̵ı��ر�ǩ
git tag -d v0.9 Ҫɾ��ԭ�Ƶı�ǹ �����ڱ���ɾ����ǹ��
git push origin :refs/tags/v0.9  Զ�̵ı�ǩ��ɾ����
.gitignore  ��gitĿ¼�´�������ļ��������������Ե��ļ� ÿ�� git status�Ͳ�����ʾ�� �ǵ��ύ����ļ�
git add -f app.class  ǿ����ӱ����Ե��ļ�
git check-ignore ���ڼ���д�ĺ����ļ�
git config --global alias.st status  ���ñ��� Ҳ�͵������ÿ�ݼ� ��git st ��ͬ�� git status
git config --global alias.co checkout 
git config --global alias.ci commit 
git config --global alias.br branch    ���ü�д�ķ�ʽ 
cat .gitconfig ��ǰ�û���Git�����ļ�










