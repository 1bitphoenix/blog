webpackJsonp([72316915199843],{750:function(e,t){e.exports={data:{post:{id:"/home/brute4s99/DEV/repos/blog/content/posts/2019-02-03--arch/index.md absPath of file >>> MarkdownRemark",html:'<p align="center">\n  <a class="gatsby-resp-image-link" href="/static/arch-6b158701388a39fbbd5733312eef6146-f190c.png" style="display: block" target="_blank" rel="noopener">\n  \n  <span class="gatsby-resp-image-wrapper" style="position: relative; display: block; ; max-width: 800px; margin-left: auto; margin-right: auto;">\n    <span class="gatsby-resp-image-background-image" style="padding-bottom: 66.5625%; position: relative; bottom: 0; left: 0; background-image: url(&apos;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAAsSAAALEgHS3X78AAADaElEQVQ4y2WTy28bVRTGB1xY8A/g8EiatImfY489HtvjmfF4ZvyYiePEryRu5CgPOUnTByFtaSMoRFl00YJ4blDYhA1CqhASkhUhgSpAQixaCaGyKCsEApUWUUEToPH4fsyMFCmoZ3Ou7r3fT/d85x7KyIoYLQio6BJG8jJKhQzqpRypGArJy0mM6SqZbYya01XFPDaaNq07pJhXMWaoRM9KRJMFCIko0gKLMO0BpasCCgoPQ+OhSSykRJhwjJfwsRDyMtdtNbKYKiVRlPwoKzQmjLjZrOZIqaAinWRJyO8h6VQEYpJGKDgIKpuOo5gToQgRMIGjpP+ZJ4n3aC+mKpo5XeZREDwwJHqzWVYn6jp/bTgdwrDoRTnHdTOSiGiYJkkugrj1gFgkCCqvJFDIxC1gFGHfgAV0o6iw5mJDhsIN/NYYkVTqQLxwcnqtqoswxACqhkgkPomcqhA9n4WY4kHJPAOZD0NXk5aHiuWn2F1uashw/X8tz1TDNuSI+4lDx5ulQ/vQTz764EyzPgwt6TXHS1miyDIxCjnIkgBKTScQ8g8gydKW2Qq5cOqYWdcjGC9KLVusJoYeB+CAvvy8/YiVHrXXn26327b3taLcsUonYioFJkSDkngWR/qeQt/TbghcoPv8vI4xLXLTgrhs4XtvvezA3ry87uTdnfvOvnUuvf36ZWRFhtTKZRJj42BZDlSM8SEcGAJDe8hcQ99bmMygZqSu2KJ48LDri+13qfVzsw7su2+vU/uvtfJj17/56tbK4iSmJie6TJghPp8PVCQ0aMEGcfjZHrK6VLfKjWFhujJni063xl0HG/Jg7wH1x7171OalJbt06vavP3189f3XcPbcWkfJaMRvAwf7e9Df6wbPMeT8iXp3OMNgbXVp3Ono6TnX5hsvHmRS3W6XuvX9DcfHv3fvb11rb+HiKxsdwyiBDloesmEvItYP17MieWl1ppuKerCy2Bi1BSfmaq6rW5ceAv5+5xen4//+s7N+4+s2nltZ3ZNkjXiGrEnhokHrQ/ohpTiyPF8jEhfAxoVW0RacPzX1v5L34/bPPzjA3T/vnvnsw1fRWjjeicaSpK+3zwbSkNMp8AmWTFY0a36juLJxcsQWXDw78xDQNE3qzo83HeDezt2V7XeWMDs730kIGdLT48Z//JqNROOicKMAAAAASUVORK5CYII=&apos;); background-size: cover; display: block;">\n      <img class="gatsby-resp-image-image" style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px transparent;" alt="Arch" title="" src="/static/arch-6b158701388a39fbbd5733312eef6146-48538.png" srcset="/static/arch-6b158701388a39fbbd5733312eef6146-bed0f.png 200w,\n/static/arch-6b158701388a39fbbd5733312eef6146-5fd34.png 400w,\n/static/arch-6b158701388a39fbbd5733312eef6146-48538.png 800w,\n/static/arch-6b158701388a39fbbd5733312eef6146-f190c.png 960w" sizes="(max-width: 800px) 100vw, 800px">\n    </span>\n  </span>\n  \n  </a>\n    <br>\n<font size="2">Arch</font></p>\n<ol>\n<li>I had a system with Arch Linux, until I needed Windows 10 for some Windows development.</li>\n<li>Then I installed Windows 10 UEFI with the help of Rufus in creating my installation media.</li>\n<li>Then I had a dual-bootable system with Arch Linux and Windows 10.</li>\n<li>Later on, I needed a Ubuntu based OS for some testing puposes. I decided to triple boot.</li>\n<li>I went for Zorin OS 12.4 CORE, it’s a beautiful distro, you must check it out!</li>\n<li>I simply installed it on a separate <code class="language-text">ext4</code> partition at the end of my HDD (using that <code class="language-text">something else</code> option).</li>\n</ol>\n<blockquote>\n<p>it <em>might</em> have did something to my prior GRUB config of Arch Linux.</p>\n</blockquote>\n<ol start="7">\n<li>Arch’s GRUB settings loaded on next boot, which had options for Windows and Arch Linux.(no Zorin OS here)</li>\n<li>Then I went ahead and booted into Arch to run a <code class="language-text">grub-mkconfig -o /boot/grub/grub.cfg</code>, because it didn’t know about Zorin OS.</li>\n<li>After I rebooted the sys, Zorin’s GRUB config greeted me. <em>WTH? I lost access to Arch Linux now!</em>.</li>\n<li>Then I tried running the same <code class="language-text">grub-mkconfig -o /boot/grub/grub.cfg</code> in Zorin OS.</li>\n<li>I got options for Arch then, but they didn’t work (poor Arch support in Ubuntu 16.04 maybe?).</li>\n<li>I decided I NEED my Arch before anything else!</li>\n<li>I went ahead and fired off a Live Arch USB.</li>\n</ol>\n<h2>SOLUTION</h2>\n<ul>\n<li>re-formatted the /dev/sda1 (EFI) partition.</li>\n<li><code class="language-text">arch-chroot</code>ed into my Arch installation and force-reinstalled all my arch packages by my previous post.(to get linux <code class="language-text">img</code>s in /boot). I could’ve done it by reinstalling just the firmware too, as <Namarggon> on #archlinux (IRC) suggested.</li>\n<li>ran grub-install and grub-mkconfig commands from my GitHub gist. (ARCH COMMANDS)</li>\n<li>ran genfstab command from my GitHub gist. (kudos to <GreyShade> and <iovec> for helping me out on this one!)</li>\n</ul>\n<p align=\'center\'> Hola! I\'m back with my Arch Linux and Zorin.</p>\n<blockquote>\n<p>Now I’m left with putting in some effort to get my Windows 10 back.</p>\n</blockquote>\n<p align="center">UPDATE: </p>\n<blockquote>\n<p>took a couple of commands: <code class="language-text">bootrec /fixmbr</code> and <code class="language-text">bootrec /rebuildBCD</code> from a windows installation media. They installed the new EFI files in the EFI partition automagically!</p>\n</blockquote>\n<p align=\'center\'> <font size=3> Stay safe and make the internet a healthier place! </font></p>',htmlAst:{type:"root",children:[{type:"element",tagName:"p",properties:{align:"center"},children:[{type:"text",value:"\n  "},{type:"element",tagName:"a",properties:{className:["gatsby-resp-image-link"],href:"/static/arch-6b158701388a39fbbd5733312eef6146-f190c.png",style:"display: block",target:"_blank",rel:["noopener"]},children:[{type:"text",value:"\n  \n  "},{type:"element",tagName:"span",properties:{className:["gatsby-resp-image-wrapper"],style:"position: relative; display: block; ; max-width: 800px; margin-left: auto; margin-right: auto;"},children:[{type:"text",value:"\n    "},{type:"element",tagName:"span",properties:{className:["gatsby-resp-image-background-image"],style:"padding-bottom: 66.5625%; position: relative; bottom: 0; left: 0; background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAAsSAAALEgHS3X78AAADaElEQVQ4y2WTy28bVRTGB1xY8A/g8EiatImfY489HtvjmfF4ZvyYiePEryRu5CgPOUnTByFtaSMoRFl00YJ4blDYhA1CqhASkhUhgSpAQixaCaGyKCsEApUWUUEToPH4fsyMFCmoZ3Ou7r3fT/d85x7KyIoYLQio6BJG8jJKhQzqpRypGArJy0mM6SqZbYya01XFPDaaNq07pJhXMWaoRM9KRJMFCIko0gKLMO0BpasCCgoPQ+OhSSykRJhwjJfwsRDyMtdtNbKYKiVRlPwoKzQmjLjZrOZIqaAinWRJyO8h6VQEYpJGKDgIKpuOo5gToQgRMIGjpP+ZJ4n3aC+mKpo5XeZREDwwJHqzWVYn6jp/bTgdwrDoRTnHdTOSiGiYJkkugrj1gFgkCCqvJFDIxC1gFGHfgAV0o6iw5mJDhsIN/NYYkVTqQLxwcnqtqoswxACqhkgkPomcqhA9n4WY4kHJPAOZD0NXk5aHiuWn2F1uashw/X8tz1TDNuSI+4lDx5ulQ/vQTz764EyzPgwt6TXHS1miyDIxCjnIkgBKTScQ8g8gydKW2Qq5cOqYWdcjGC9KLVusJoYeB+CAvvy8/YiVHrXXn26327b3taLcsUonYioFJkSDkngWR/qeQt/TbghcoPv8vI4xLXLTgrhs4XtvvezA3ry87uTdnfvOvnUuvf36ZWRFhtTKZRJj42BZDlSM8SEcGAJDe8hcQ99bmMygZqSu2KJ48LDri+13qfVzsw7su2+vU/uvtfJj17/56tbK4iSmJie6TJghPp8PVCQ0aMEGcfjZHrK6VLfKjWFhujJni063xl0HG/Jg7wH1x7171OalJbt06vavP3189f3XcPbcWkfJaMRvAwf7e9Df6wbPMeT8iXp3OMNgbXVp3Ono6TnX5hsvHmRS3W6XuvX9DcfHv3fvb11rb+HiKxsdwyiBDloesmEvItYP17MieWl1ppuKerCy2Bi1BSfmaq6rW5ceAv5+5xen4//+s7N+4+s2nltZ3ZNkjXiGrEnhokHrQ/ohpTiyPF8jEhfAxoVW0RacPzX1v5L34/bPPzjA3T/vnvnsw1fRWjjeicaSpK+3zwbSkNMp8AmWTFY0a36juLJxcsQWXDw78xDQNE3qzo83HeDezt2V7XeWMDs730kIGdLT48Z//JqNROOicKMAAAAASUVORK5CYII='); background-size: cover; display: block;"},children:[{type:"text",value:"\n      "},{type:"element",tagName:"img",properties:{className:["gatsby-resp-image-image"],style:"width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px transparent;",alt:"Arch",title:"",src:"/static/arch-6b158701388a39fbbd5733312eef6146-48538.png",srcSet:["/static/arch-6b158701388a39fbbd5733312eef6146-bed0f.png 200w","/static/arch-6b158701388a39fbbd5733312eef6146-5fd34.png 400w","/static/arch-6b158701388a39fbbd5733312eef6146-48538.png 800w","/static/arch-6b158701388a39fbbd5733312eef6146-f190c.png 960w"],sizes:["(max-width:","800px)","100vw,","800px"]},children:[]},{type:"text",value:"\n    "}]},{type:"text",value:"\n  "}]},{type:"text",value:"\n  \n  "}]},{type:"text",value:"\n    "},{type:"element",tagName:"br",properties:{},children:[]},{type:"text",value:"\n"},{type:"element",tagName:"font",properties:{size:2},children:[{type:"text",value:"Arch"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"ol",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"I had a system with Arch Linux, until I needed Windows 10 for some Windows development."}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"Then I installed Windows 10 UEFI with the help of Rufus in creating my installation media."}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"Then I had a dual-bootable system with Arch Linux and Windows 10."}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"Later on, I needed a Ubuntu based OS for some testing puposes. I decided to triple boot."}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"I went for Zorin OS 12.4 CORE, it’s a beautiful distro, you must check it out!"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"I simply installed it on a separate "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"ext4"}]},{type:"text",value:" partition at the end of my HDD (using that "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"something else"}]},{type:"text",value:" option)."}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"blockquote",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"it "},{type:"element",tagName:"em",properties:{},children:[{type:"text",value:"might"}]},{type:"text",value:" have did something to my prior GRUB config of Arch Linux."}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"ol",properties:{start:7},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"Arch’s GRUB settings loaded on next boot, which had options for Windows and Arch Linux.(no Zorin OS here)"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"Then I went ahead and booted into Arch to run a "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"grub-mkconfig -o /boot/grub/grub.cfg"}]},{type:"text",value:", because it didn’t know about Zorin OS."}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"After I rebooted the sys, Zorin’s GRUB config greeted me. "},{type:"element",tagName:"em",properties:{},children:[{type:"text",value:"WTH? I lost access to Arch Linux now!"}]},{type:"text",value:"."}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"Then I tried running the same "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"grub-mkconfig -o /boot/grub/grub.cfg"}]},{type:"text",value:" in Zorin OS."}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"I got options for Arch then, but they didn’t work (poor Arch support in Ubuntu 16.04 maybe?)."}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"I decided I NEED my Arch before anything else!"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"I went ahead and fired off a Live Arch USB."}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"SOLUTION"}]},{type:"text",value:"\n"},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"re-formatted the /dev/sda1 (EFI) partition."}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"arch-chroot"}]},{type:"text",value:"ed into my Arch installation and force-reinstalled all my arch packages by my previous post.(to get linux "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"img"}]},{type:"text",value:"s in /boot). I could’ve done it by reinstalling just the firmware too, as "},{type:"element",tagName:"namarggon",properties:{},children:[{type:"text",value:" on #archlinux (IRC) suggested."}]}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"ran grub-install and grub-mkconfig commands from my GitHub gist. (ARCH COMMANDS)"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"ran genfstab command from my GitHub gist. (kudos to "},{type:"element",tagName:"greyshade",properties:{},children:[{type:"text",value:" and "},{type:"element",tagName:"iovec",properties:{},children:[{type:"text",value:" for helping me out on this one!)"}]}]}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{align:"center"},children:[{type:"text",value:" Hola! I'm back with my Arch Linux and Zorin."}]},{type:"text",value:"\n"},{type:"element",tagName:"blockquote",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Now I’m left with putting in some effort to get my Windows 10 back."}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{align:"center"},children:[{type:"text",value:"UPDATE: "}]},{type:"text",value:"\n"},{type:"element",tagName:"blockquote",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"took a couple of commands: "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"bootrec /fixmbr"}]},{type:"text",value:" and "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"bootrec /rebuildBCD"}]},{type:"text",value:" from a windows installation media. They installed the new EFI files in the EFI partition automagically!"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{align:"center"},children:[{type:"text",value:" "},{type:"element",tagName:"font",properties:{size:3},children:[{type:"text",value:" Stay safe and make the internet a healthier place! "}]}]}],data:{quirksMode:!1}},fields:{slug:"/arch/",prefix:"2019-02-03"},frontmatter:{title:"Recovering your Arch from hell- again",subTitle:"multi-boots ahoy!",cover:{childImageSharp:{resize:{src:"/static/cover-b5b7c48ac3ab6350523e06503d5113f6-160fa.png"}}}}},author:{id:"/home/brute4s99/DEV/repos/blog/content/parts/author.md absPath of file >>> MarkdownRemark",html:"<p>I’m currently learning more about programming practices and AI/ML/DL</p>"},footnote:{id:"/home/brute4s99/DEV/repos/blog/content/parts/footnote.md absPath of file >>> MarkdownRemark",html:'<ul>\n<li>based on a GatsbyJS starter by <a href="https://github.com/greglobinski">Greg Lobinski</a> |\nModded on Arch 🐧 Linux with 💙 by <a href="https://github.com/brute4s99">Piyush Aggarwal</a> |\nGatsbyJS, ReactJs, CSS inside!</li>\n</ul>'}},pathContext:{slug:"/arch/"}}}});
//# sourceMappingURL=path---arch-7aa18851b4fe7f1af1c7.js.map