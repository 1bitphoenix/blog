webpackJsonp([36777216120515],{761:function(e,t){e.exports={data:{post:{id:"/home/brute4s99/DEV/repos/blog/content/posts/2019-01-09--recovering_your_arch_from_hell/index.md absPath of file >>> MarkdownRemark",html:'<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/arch-883766e41cd8922a799fde936a7a4e7d-aafac.jpg"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 800px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 75%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAPABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAgAD/8QAFgEBAQEAAAAAAAAAAAAAAAAAAAEC/9oADAMBAAIQAxAAAAEaB5u0I//EABoQAQACAwEAAAAAAAAAAAAAAAEAAgMRIRL/2gAIAQEAAQUC9sL3AyROa5XEM//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8BP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8BP//EABgQAQEBAQEAAAAAAAAAAAAAAAAhQQER/9oACAEBAAY/AkWI8zV6/8QAGhABAAMBAQEAAAAAAAAAAAAAAQARMSFBUf/aAAgBAQABPyF6/H17cxZGPXVjRYuPu/CDALbaYFajP//aAAwDAQACAAMAAAAQOD//xAAVEQEBAAAAAAAAAAAAAAAAAAAQEf/aAAgBAwEBPxCn/8QAFhEAAwAAAAAAAAAAAAAAAAAAARAR/9oACAECAQE/EIV//8QAGxABAQEBAAMBAAAAAAAAAAAAASERADFBgcH/2gAIAQEAAT8QMi02rl3iuxz7+PQddigj2aZOA1QOC1iKy+EPXJUJoG9//9k=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px transparent;"\n        alt="Rebuilding an Arch"\n        title=""\n        src="/static/arch-883766e41cd8922a799fde936a7a4e7d-78f2b.jpg"\n        srcset="/static/arch-883766e41cd8922a799fde936a7a4e7d-dce19.jpg 200w,\n/static/arch-883766e41cd8922a799fde936a7a4e7d-c1413.jpg 400w,\n/static/arch-883766e41cd8922a799fde936a7a4e7d-78f2b.jpg 800w,\n/static/arch-883766e41cd8922a799fde936a7a4e7d-ab4c4.jpg 1200w,\n/static/arch-883766e41cd8922a799fde936a7a4e7d-bc99b.jpg 1600w,\n/static/arch-883766e41cd8922a799fde936a7a4e7d-34a60.jpg 2400w,\n/static/arch-883766e41cd8922a799fde936a7a4e7d-aafac.jpg 4000w"\n        sizes="(max-width: 800px) 100vw, 800px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p align=\'center\' ><font size=3> easier than it looks</font></p>\n<h2>PROBLEM</h2>\n<p>Not clear, but looks like misconfigured packages after multiple installations, uninstallations and re-installations of packages and Desktop Environments</p>\n<h2>PROLOGUE</h2>\n<p>So today I had problems that caused KDE Plasma to <em>not acknowledge</em> my laptop as a laptop.\nIn other words, my Arch was on the edge of collapse.</p>\n<h2>BABY STEPS</h2>\n<p>So, I tried reinstalling all the packages of my installation in one command, like so</p>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text"># pacman -Qenq | sudo pacman -S -</code></pre>\n      </div>\n<p>But as you can see the post hasn’t ended here, it didn’t pan out.</p>\n<h2>SOLUTION</h2>\n<p>After hours of help at #archlinux and #kde-plasma, I found <a href="https://bbs.archlinux.org/viewtopic.php?id=193174">this Forum page</a> that gave me just the right instructions!</p>\n<ol>\n<li>\n<p>First up, I removed all the orphaned/unused packages rotting away in my system.</p>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text"># pacman -Rns $(pacman -Qtdq)</code></pre>\n      </div>\n</li>\n<li>\n<p>next, I <strong>force-reinstalled</strong> all the packages I had in my installation.</p>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text"># pacman -Qqen &gt; pkglist.txt\n# pacman --force -S $(&lt; pkglist.txt)</code></pre>\n      </div>\n</li>\n</ol>\n<h2>EPILOGUE</h2>\n<p>Now my installation is sweet as candy with no loss of any personal configs, and everything is perfect again! </p>\n<p align=\'center\'> 😄 🎉 </p>',htmlAst:{type:"root",children:[{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"\n  "},{type:"element",tagName:"a",properties:{className:["gatsby-resp-image-link"],href:"/static/arch-883766e41cd8922a799fde936a7a4e7d-aafac.jpg",style:"display: block",target:"_blank",rel:["noopener"]},children:[{type:"text",value:"\n  \n  "},{type:"element",tagName:"span",properties:{className:["gatsby-resp-image-wrapper"],style:"position: relative; display: block; ; max-width: 800px; margin-left: auto; margin-right: auto;"},children:[{type:"text",value:"\n    "},{type:"element",tagName:"span",properties:{className:["gatsby-resp-image-background-image"],style:"padding-bottom: 75%; position: relative; bottom: 0; left: 0; background-image: url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAPABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAgAD/8QAFgEBAQEAAAAAAAAAAAAAAAAAAAEC/9oADAMBAAIQAxAAAAEaB5u0I//EABoQAQACAwEAAAAAAAAAAAAAAAEAAgMRIRL/2gAIAQEAAQUC9sL3AyROa5XEM//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8BP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8BP//EABgQAQEBAQEAAAAAAAAAAAAAAAAhQQER/9oACAEBAAY/AkWI8zV6/8QAGhABAAMBAQEAAAAAAAAAAAAAAQARMSFBUf/aAAgBAQABPyF6/H17cxZGPXVjRYuPu/CDALbaYFajP//aAAwDAQACAAMAAAAQOD//xAAVEQEBAAAAAAAAAAAAAAAAAAAQEf/aAAgBAwEBPxCn/8QAFhEAAwAAAAAAAAAAAAAAAAAAARAR/9oACAECAQE/EIV//8QAGxABAQEBAAMBAAAAAAAAAAAAASERADFBgcH/2gAIAQEAAT8QMi02rl3iuxz7+PQddigj2aZOA1QOC1iKy+EPXJUJoG9//9k='); background-size: cover; display: block;"},children:[{type:"text",value:"\n      "},{type:"element",tagName:"img",properties:{className:["gatsby-resp-image-image"],style:"width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px transparent;",alt:"Rebuilding an Arch",title:"",src:"/static/arch-883766e41cd8922a799fde936a7a4e7d-78f2b.jpg",srcSet:["/static/arch-883766e41cd8922a799fde936a7a4e7d-dce19.jpg 200w","/static/arch-883766e41cd8922a799fde936a7a4e7d-c1413.jpg 400w","/static/arch-883766e41cd8922a799fde936a7a4e7d-78f2b.jpg 800w","/static/arch-883766e41cd8922a799fde936a7a4e7d-ab4c4.jpg 1200w","/static/arch-883766e41cd8922a799fde936a7a4e7d-bc99b.jpg 1600w","/static/arch-883766e41cd8922a799fde936a7a4e7d-34a60.jpg 2400w","/static/arch-883766e41cd8922a799fde936a7a4e7d-aafac.jpg 4000w"],sizes:["(max-width:","800px)","100vw,","800px"]},children:[]},{type:"text",value:"\n    "}]},{type:"text",value:"\n  "}]},{type:"text",value:"\n  \n  "}]},{type:"text",value:"\n    "}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{align:"center"},children:[{type:"element",tagName:"font",properties:{size:3},children:[{type:"text",value:" easier than it looks"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"PROBLEM"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Not clear, but looks like misconfigured packages after multiple installations, uninstallations and re-installations of packages and Desktop Environments"}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"PROLOGUE"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"So today I had problems that caused KDE Plasma to "},{type:"element",tagName:"em",properties:{},children:[{type:"text",value:"not acknowledge"}]},{type:"text",value:" my laptop as a laptop.\nIn other words, my Arch was on the edge of collapse."}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"BABY STEPS"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"So, I tried reinstalling all the packages of my installation in one command, like so"}]},{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"],dataLanguage:"text"},children:[{type:"text",value:"\n      "},{type:"element",tagName:"pre",properties:{className:["language-text"]},children:[{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"# pacman -Qenq | sudo pacman -S -"}]}]},{type:"text",value:"\n      "}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"But as you can see the post hasn’t ended here, it didn’t pan out."}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"SOLUTION"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"After hours of help at #archlinux and #kde-plasma, I found "},{type:"element",tagName:"a",properties:{href:"https://bbs.archlinux.org/viewtopic.php?id=193174"},children:[{type:"text",value:"this Forum page"}]},{type:"text",value:" that gave me just the right instructions!"}]},{type:"text",value:"\n"},{type:"element",tagName:"ol",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"First up, I removed all the orphaned/unused packages rotting away in my system."}]},{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"],dataLanguage:"text"},children:[{type:"text",value:"\n      "},{type:"element",tagName:"pre",properties:{className:["language-text"]},children:[{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"# pacman -Rns $(pacman -Qtdq)"}]}]},{type:"text",value:"\n      "}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"next, I "},{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"force-reinstalled"}]},{type:"text",value:" all the packages I had in my installation."}]},{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"],dataLanguage:"text"},children:[{type:"text",value:"\n      "},{type:"element",tagName:"pre",properties:{className:["language-text"]},children:[{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"# pacman -Qqen > pkglist.txt\n# pacman --force -S $(< pkglist.txt)"}]}]},{type:"text",value:"\n      "}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"EPILOGUE"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Now my installation is sweet as candy with no loss of any personal configs, and everything is perfect again! "}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{align:"center"},children:[{type:"text",value:" 😄 🎉 "}]}],data:{quirksMode:!1}},fields:{slug:"/recovering_your_arch_from_hell/",prefix:"2019-01-09"},frontmatter:{title:"recovering Arch from hell",subTitle:"Keep playing around with those packages!",cover:{childImageSharp:{resize:{src:"/static/arch-883766e41cd8922a799fde936a7a4e7d-ada8c.jpg"}}}}},author:{id:"/home/brute4s99/DEV/repos/blog/content/parts/author.md absPath of file >>> MarkdownRemark",html:"<p>I am an engineering undergraduate, in my 3rd year of B.Tech in Computer Science. I like to play with technologies and share my experiences with the almighty internet!</p>"},footnote:{id:"/home/brute4s99/DEV/repos/blog/content/parts/footnote.md absPath of file >>> MarkdownRemark",html:'<ul>\n<li>personalised with 💙 by <a href="https://github.com/brute4s99">Piyush Aggarwal</a> | based on a GatsbyJS starter by <a href="https://github.com/greglobinski">Greg Lobinski</a></li>\n</ul>'}},pathContext:{slug:"/recovering_your_arch_from_hell/"}}}});
//# sourceMappingURL=path---recovering-your-arch-from-hell-60eef4d634c2cd17838b.js.map