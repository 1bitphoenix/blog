webpackJsonp([0xf4966f9beec7],{755:function(e,t){e.exports={data:{post:{id:"/home/brute4s99/DEV/repos/blog/content/posts/2019-04-10--gitflow/index.md absPath of file >>> MarkdownRemark",html:'<p>The commonly known work flow for git is as follows:-</p>\n<blockquote>\n<ol>\n<li>Make a fork of the target project.</li>\n<li><strong>Clone the fork</strong> to your local dev machine.</li>\n<li>Set a remote for <strong>upstream</strong>.</li>\n</ol>\n</blockquote>\n<p>Contact the project team, introduce yourself and ask questions related to the project. Read more about this <a href="https://google.github.io/gsocguides/student/making-first-contact">here</a>. <strong>This is super important!</strong></p>\n<blockquote>\n<ol start="4">\n<li>\n<p>Test the project yourself.</p>\n</li>\n<li>\n<p>Look for any issues or bugs/ something to fix in the project.</p>\n</li>\n<li>\n<p>This step should be performed everytime when you are about to make a new branch, or want to update the master branch of your fork. Perform the following two commands to update master branch of the fork:-</p>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">  git fetch upstream\n  git merge upstram/master\n  *resolve the conflicts, if any*</code></pre>\n      </div>\n</li>\n</ol>\n</blockquote>\n<p>It’s always a good idea to make a different (feature) branch for every feature/ issue/ bug you work on. While this keeps all your diverse efforts in one single folder, it maintains them completely separate from each other. This way, you don’t have to worry about anything but just the branch name! Keep memorable and simple branch names.</p>\n<blockquote>\n<ol start="6">\n<li>\n<p>Make a new branch titled something relevant to the thing you wish to fix, say XYZ.</p>\n</li>\n<li>\n<p>Make the fix, push it to  <strong>origin</strong>  (i.e your fork) remote, as the XYZ feature branch.</p>\n</li>\n<li>\n<p>Make a Pull/Merge Request.</p>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">  1. Wait for review.\n  2. Make necessary fixes.\n  3. Repeat from step 8.1 while not approved by every reviewer.</code></pre>\n      </div>\n</li>\n</ol>\n</blockquote>\n<p>Most probably, you will now be asked to <strong>rebase</strong> your branch. It just means to perform a couple of commands that will replay all your commits on the new, latest stuff from <code class="language-text">upstream/master</code>.</p>\n<blockquote>\n<ol start="8">\n<li>\n<p>Perform the following two commands to rebase your XYZ feature branch:-</p>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">  git fetch upstram\n  git rebase upstream/master\n  *resolve the conflicts, if any*</code></pre>\n      </div>\n</li>\n</ol>\n</blockquote>\n<h2>The Stash</h2>\n<p>Many times you might want to start working on some other feature right away! In such cases usually you would have some uncommitted files in your current branch.</p>\n<p>This usually happens in the face of release date deadlines. The git-stash can save your uncommitted changes on a stack like data structure. This is done by the command:-</p>\n<blockquote>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">      git stash\n      *your current working branch will be clean now, i.e there will be no uncommitted changes left*</code></pre>\n      </div>\n</blockquote>\n<p>Don’t worry! They are in the stash, safe and sound.\nYou can save multiple sets of uncommitted changes in the stash by using <code class="language-text">git stash</code> every now and then. To see the list of all such sets of uncommitted changes, use the following command:-</p>\n<blockquote>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">      git stash list</code></pre>\n      </div>\n</blockquote>\n<p>Just perform this command to get the most recently stashed changes back in your current working branch:-</p>\n<blockquote>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">      git stash apply\n      *yes, you have the freedom to use `git stash` at one branch, and then checkout another branch and do `git stash apply`. It will work.</code></pre>\n      </div>\n</blockquote>\n<p>If you wish to retrieve any other set, refer to the index of stash, for example:-</p>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">stash@{0}: WIP on telephony_unknown: 7df58d0d SVN_SILENT made messages (.desktop file) - always resolve ours\nstash@{1}: WIP on master: 7df58d0d SVN_SILENT made messages (.desktop file) - always resolve ours\nstash@{2}: WIP on timestamp: 9ec0d04f SVN_SILENT made messages (.desktop file) - always resolve ours\n(END)</code></pre>\n      </div>\n<blockquote>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">      git stash apply stash@\\{1\\}\n      *this will apply the set of changes in index 1 i.e stash@{1} to the current working branch</code></pre>\n      </div>\n</blockquote>\n<p>This should be enough to get you going with the adventures of git. Don’t fret to play with this great tool!</p>\n<p>signing off now; later! :)</p>\n<p align=\'center\'> <font size=3> Stay safe and make the internet a healthier place! </font></p>',htmlAst:{type:"root",children:[{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"The commonly known work flow for git is as follows:-"}]},{type:"text",value:"\n"},{type:"element",tagName:"blockquote",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"ol",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"Make a fork of the target project."}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"Clone the fork"}]},{type:"text",value:" to your local dev machine."}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"Set a remote for "},{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"upstream"}]},{type:"text",value:"."}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Contact the project team, introduce yourself and ask questions related to the project. Read more about this "},{type:"element",tagName:"a",properties:{href:"https://google.github.io/gsocguides/student/making-first-contact"},children:[{type:"text",value:"here"}]},{type:"text",value:". "},{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"This is super important!"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"blockquote",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"ol",properties:{start:4},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Test the project yourself."}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Look for any issues or bugs/ something to fix in the project."}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"This step should be performed everytime when you are about to make a new branch, or want to update the master branch of your fork. Perform the following two commands to update master branch of the fork:-"}]},{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"],dataLanguage:"text"},children:[{type:"text",value:"\n      "},{type:"element",tagName:"pre",properties:{className:["language-text"]},children:[{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"  git fetch upstream\n  git merge upstram/master\n  *resolve the conflicts, if any*"}]}]},{type:"text",value:"\n      "}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"It’s always a good idea to make a different (feature) branch for every feature/ issue/ bug you work on. While this keeps all your diverse efforts in one single folder, it maintains them completely separate from each other. This way, you don’t have to worry about anything but just the branch name! Keep memorable and simple branch names."}]},{type:"text",value:"\n"},{type:"element",tagName:"blockquote",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"ol",properties:{start:6},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Make a new branch titled something relevant to the thing you wish to fix, say XYZ."}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Make the fix, push it to  "},{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"origin"}]},{type:"text",value:"  (i.e your fork) remote, as the XYZ feature branch."}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Make a Pull/Merge Request."}]},{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"],dataLanguage:"text"},children:[{type:"text",value:"\n      "},{type:"element",tagName:"pre",properties:{className:["language-text"]},children:[{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"  1. Wait for review.\n  2. Make necessary fixes.\n  3. Repeat from step 8.1 while not approved by every reviewer."}]}]},{type:"text",value:"\n      "}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Most probably, you will now be asked to "},{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"rebase"}]},{type:"text",value:" your branch. It just means to perform a couple of commands that will replay all your commits on the new, latest stuff from "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"upstream/master"}]},{type:"text",value:"."}]},{type:"text",value:"\n"},{type:"element",tagName:"blockquote",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"ol",properties:{start:8},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Perform the following two commands to rebase your XYZ feature branch:-"}]},{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"],dataLanguage:"text"},children:[{type:"text",value:"\n      "},{type:"element",tagName:"pre",properties:{className:["language-text"]},children:[{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"  git fetch upstram\n  git rebase upstream/master\n  *resolve the conflicts, if any*"}]}]},{type:"text",value:"\n      "}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"The Stash"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Many times you might want to start working on some other feature right away! In such cases usually you would have some uncommitted files in your current branch."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"This usually happens in the face of release date deadlines. The git-stash can save your uncommitted changes on a stack like data structure. This is done by the command:-"}]},{type:"text",value:"\n"},{type:"element",tagName:"blockquote",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"],dataLanguage:"text"},children:[{type:"text",value:"\n      "},{type:"element",tagName:"pre",properties:{className:["language-text"]},children:[{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"      git stash\n      *your current working branch will be clean now, i.e there will be no uncommitted changes left*"}]}]},{type:"text",value:"\n      "}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Don’t worry! They are in the stash, safe and sound.\nYou can save multiple sets of uncommitted changes in the stash by using "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"git stash"}]},{type:"text",value:" every now and then. To see the list of all such sets of uncommitted changes, use the following command:-"}]},{type:"text",value:"\n"},{type:"element",tagName:"blockquote",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"],dataLanguage:"text"},children:[{type:"text",value:"\n      "},{type:"element",tagName:"pre",properties:{className:["language-text"]},children:[{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"      git stash list"}]}]},{type:"text",value:"\n      "}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Just perform this command to get the most recently stashed changes back in your current working branch:-"}]},{type:"text",value:"\n"},{type:"element",tagName:"blockquote",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"],dataLanguage:"text"},children:[{type:"text",value:"\n      "},{type:"element",tagName:"pre",properties:{className:["language-text"]},children:[{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"      git stash apply\n      *yes, you have the freedom to use `git stash` at one branch, and then checkout another branch and do `git stash apply`. It will work."}]}]},{type:"text",value:"\n      "}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"If you wish to retrieve any other set, refer to the index of stash, for example:-"}]},{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"],dataLanguage:"text"},children:[{type:"text",value:"\n      "},{type:"element",tagName:"pre",properties:{className:["language-text"]},children:[{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"stash@{0}: WIP on telephony_unknown: 7df58d0d SVN_SILENT made messages (.desktop file) - always resolve ours\nstash@{1}: WIP on master: 7df58d0d SVN_SILENT made messages (.desktop file) - always resolve ours\nstash@{2}: WIP on timestamp: 9ec0d04f SVN_SILENT made messages (.desktop file) - always resolve ours\n(END)"}]}]},{type:"text",value:"\n      "}]},{type:"text",value:"\n"},{type:"element",tagName:"blockquote",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"],dataLanguage:"text"},children:[{type:"text",value:"\n      "},{type:"element",tagName:"pre",properties:{className:["language-text"]},children:[{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"      git stash apply stash@\\{1\\}\n      *this will apply the set of changes in index 1 i.e stash@{1} to the current working branch"}]}]},{type:"text",value:"\n      "}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"This should be enough to get you going with the adventures of git. Don’t fret to play with this great tool!"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"signing off now; later! :)"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{align:"center"},children:[{type:"text",value:" "},{type:"element",tagName:"font",properties:{size:3},children:[{type:"text",value:" Stay safe and make the internet a healthier place! "}]}]}],data:{quirksMode:!1}},fields:{slug:"/gitflow/",prefix:"2019-04-10"},frontmatter:{title:"the git flow",subTitle:"let's talk collaboration!",cover:{childImageSharp:{resize:{src:"/static/cover-297bb6da05150ac184f477b46d22f74e-160fa.png"}}}}},author:{id:"/home/brute4s99/DEV/repos/blog/content/parts/author.md absPath of file >>> MarkdownRemark",html:"<p>I am an engineering undergraduate, in my 3rd year of B.Tech. I like to play with technologies and share my experiences with the almighty internet!</p>"},footnote:{id:"/home/brute4s99/DEV/repos/blog/content/parts/footnote.md absPath of file >>> MarkdownRemark",html:'<ul>\n<li>modded on Arch 🐧 Linux with 💙 by <a href="https://github.com/brute4s99">Piyush Aggarwal</a> | based on a GatsbyJS starter by <a href="https://github.com/greglobinski">Greg Lobinski</a></li>\n</ul>'}},pathContext:{slug:"/gitflow/"}}}});
//# sourceMappingURL=path---gitflow-d55770452483b0a88805.js.map