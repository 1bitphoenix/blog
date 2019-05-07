webpackJsonp([0xb94f03cec94a],{758:function(e,t){e.exports={data:{post:{id:"/home/brute4s99/DEV/repos/blog/content/posts/2019-02-03--muli_booting/index.md absPath of file >>> MarkdownRemark",html:'<h2>INTRODUCTION</h2>\n<p>I am an Arch Linux user by day, but recently I needed constant access to Windows 10 OS to develop <a href="https://duckduckgo.com/?q=kde+connec">KDE Connect</a> - an awesome project by some smart-working developers from across the globe, for Windows.</p>\n<p>While working with the team, I also had to install Ubuntu to test a new release for the Ubuntu users.</p>\n<blockquote>\n<p>All this boils down to a system that already contains Arch Linux, to house Windows 10 and Ubuntu along, on a 500GB hard disk.</p>\n<p>I have also mentioned a rookie mistake in this blog post, so do take it with a pinch of salt.</p>\n</blockquote>\n<h3>CHALLENGE 1: One storage device, many partitions</h3>\n<blockquote>\n<p>The thing is, there are many partitions required to have such a system, and legacy partitioning systems allow for just 4 at max. Enter UEFI, that allows any number of partitions on a single storage device.</p>\n</blockquote>\n<p align="center"><font color="green" size="3">STATUS:\n \n Arch Linux `OK`\n ;<font color="cyan"> Ubuntu `TO_BE_INSTALLED`</font>\n ;<font color="cyan"> Windows `TO_BE_INSTALLED`</font>\n </font></p>\n<h3>CHALLENGE 2: Getting Windows 10 media to boot in UEFI mode</h3>\n<blockquote>\n<p>For this, I used Rufus to create my installation media, and supplied the latest Windows ISO recieved from the Media Creation Tool provided by Microsoft.</p>\n</blockquote>\n<p>Luckily, Windows installed itself nicely <strong>along</strong> with Arch Linux, and I was able to dual boot just fine after the installation, with GRUB2 from Arch Linux.</p>\n<p align="center"><font color="green" size="4">STATUS:\n \n Arch Linux `OK`\n ;<font color="cyan"> Ubuntu `TO_BE_INSTALLED`</font>\n ; Windows `OK`\n </font></p>\n<h2>TRIPLE BOOT TIME!</h2>\n<p>I went for <a href="https://wiki.ubuntu.com/BionicBeaver/ReleaseNotes">Ubuntu 18.04 LTS</a> here because it was the latest edition with <a href="https://wiki.ubuntu.com/LTS">LTS</a>.</p>\n<blockquote>\n<p>I simply installed it on a separate <code class="language-text">ext4</code> partition at the end of my HDD (using that <code class="language-text">something else</code> option).</p>\n</blockquote>\n<p>I’m not sure what happened here, but it <em>might</em> have did something to my prior GRUB config managed by Arch Linux.</p>\n<p>On next boot, the GRUB settings of Arch Linux showed up, which had options for Windows and Arch Linux.(no Ubuntu OS here)</p>\n<h3>CHALLENGE 3: Get Ubuntu OS to boot</h3>\n<p>Then I went ahead and booted into Arch to run a <code class="language-text">grub-mkconfig -o /boot/grub/grub.cfg</code>, because it didn’t know about Ubuntu OS.\nAfter I rebooted the system, Ubuntu’s GRUB config greeted me, that did not have Arch Linux as a boot option. </p>\n<blockquote>\n<p>I lost access to Arch Linux now. I was not happy, to say the least.</p>\n</blockquote>\n<p align="center"><font color="green" size="4">STATUS:\n \n <font color="red">Arch Linux `NOT_BOOTING`</font>\n ; Ubuntu `OK`\n ; Windows `OK`\n </font></p>\n<h3>CHALLENGE 4: Get Arch Linux to boot</h3>\n<blockquote>\n<p>Next, I tried running the same <code class="language-text">grub-mkconfig -o /boot/grub/grub.cfg</code> in Ubuntu OS.</p>\n<p>I got options for Arch Linux then, but they didn’t work for me (poor Arch support in Ubuntu 18.04?).</p>\n<p>Then I fired off an Arch Linux Live USB and decided to try to get GRUB reinstalled from my Arch Linux installation.</p>\n</blockquote>\n<ul>\n<li>re-formatted the <code class="language-text">/dev/sda1</code> (EFI) partition.</li>\n<li><code class="language-text">arch-chroot</code>ed into my Arch installation and force-reinstalled all my arch linux packages by my previous post.(to get linux firmware images in <code class="language-text">/boot</code>). </li>\n</ul>\n<blockquote>\n<p>I could’ve done it by reinstalling just the firmware too, as <code class="language-text">&lt;Namarggon&gt;</code> on <code class="language-text">#archlinux</code> (IRC) suggested.</p>\n</blockquote>\n<ul>\n<li>ran <code class="language-text">grub-install</code> and <code class="language-text">grub-mkconfig</code> commands from my GitHub gist - <a href="https://gist.github.com/brute4s99/d22508c05868e7eca578580e5ea86829">ARCH COMMANDS</a></li>\n<li>ran <code class="language-text">genfstab</code> command from that GitHub gist. </li>\n</ul>\n<blockquote>\n<p>(kudos to <code class="language-text">&lt;GreyShade&gt;</code> and <code class="language-text">&lt;iovec&gt;</code> for helping me out on this one!)</p>\n</blockquote>\n<p align=\'center\'> I have access to my Arch Linux and Ubuntu now.</p>\n<p align="center"><font color="green" size="4">STATUS:\n Arch Linux `OK`\n ; Ubuntu `OK`\n ;  <font color="red">Windows `NOT_BOOTING`</font>\n </font></p>\n<p align="center">UPDATE: </p>\n<blockquote>\n<p>took a couple of commands: <code class="language-text">bootrec /fixmbr</code> and <code class="language-text">bootrec /rebuildBCD</code> from a Windows OS Installation Media. They installed the new EFI files in the EFI partition, and I finally had access to all three systems! \\o/</p>\n</blockquote>\n<p align="center"><font color="green" size="4">STATUS:\n Arch Linux `OK`\n ; Ubuntu `OK`\n ;  Windows `OK`\n </font></p>\n<h2>CONCLUSION</h2>\n<p>I obviously should not have removed the EFI partition, since that step increased the work needed to set up other OSes.\nIf you happen to find any other weak links or better procedure, please do share it with me over the mail or twitter!</p>\n<p align=\'center\'> <font size=3> Stay safe and make the internet a healthier place! </font></p>',htmlAst:{type:"root",children:[{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"INTRODUCTION"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"I am an Arch Linux user by day, but recently I needed constant access to Windows 10 OS to develop "},{type:"element",tagName:"a",properties:{href:"https://duckduckgo.com/?q=kde+connec"},children:[{type:"text",value:"KDE Connect"}]},{type:"text",value:" - an awesome project by some smart-working developers from across the globe, for Windows."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"While working with the team, I also had to install Ubuntu to test a new release for the Ubuntu users."}]},{type:"text",value:"\n"},{type:"element",tagName:"blockquote",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"All this boils down to a system that already contains Arch Linux, to house Windows 10 and Ubuntu along, on a 500GB hard disk."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"I have also mentioned a rookie mistake in this blog post, so do take it with a pinch of salt."}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"CHALLENGE 1: One storage device, many partitions"}]},{type:"text",value:"\n"},{type:"element",tagName:"blockquote",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"The thing is, there are many partitions required to have such a system, and legacy partitioning systems allow for just 4 at max. Enter UEFI, that allows any number of partitions on a single storage device."}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{align:"center"},children:[{type:"element",tagName:"font",properties:{color:"green",size:3},children:[{type:"text",value:"STATUS:\n \n Arch Linux `OK`\n ;"},{type:"element",tagName:"font",properties:{color:"cyan"},children:[{type:"text",value:" Ubuntu `TO_BE_INSTALLED`"}]},{type:"text",value:"\n ;"},{type:"element",tagName:"font",properties:{color:"cyan"},children:[{type:"text",value:" Windows `TO_BE_INSTALLED`"}]},{type:"text",value:"\n "}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"CHALLENGE 2: Getting Windows 10 media to boot in UEFI mode"}]},{type:"text",value:"\n"},{type:"element",tagName:"blockquote",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"For this, I used Rufus to create my installation media, and supplied the latest Windows ISO recieved from the Media Creation Tool provided by Microsoft."}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Luckily, Windows installed itself nicely "},{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"along"}]},{type:"text",value:" with Arch Linux, and I was able to dual boot just fine after the installation, with GRUB2 from Arch Linux."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{align:"center"},children:[{type:"element",tagName:"font",properties:{color:"green",size:4},children:[{type:"text",value:"STATUS:\n \n Arch Linux `OK`\n ;"},{type:"element",tagName:"font",properties:{color:"cyan"},children:[{type:"text",value:" Ubuntu `TO_BE_INSTALLED`"}]},{type:"text",value:"\n ; Windows `OK`\n "}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"TRIPLE BOOT TIME!"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"I went for "},{type:"element",tagName:"a",properties:{href:"https://wiki.ubuntu.com/BionicBeaver/ReleaseNotes"},children:[{type:"text",value:"Ubuntu 18.04 LTS"}]},{type:"text",value:" here because it was the latest edition with "},{type:"element",tagName:"a",properties:{href:"https://wiki.ubuntu.com/LTS"},children:[{type:"text",value:"LTS"}]},{type:"text",value:"."}]},{type:"text",value:"\n"},{type:"element",tagName:"blockquote",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"I simply installed it on a separate "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"ext4"}]},{type:"text",value:" partition at the end of my HDD (using that "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"something else"}]},{type:"text",value:" option)."}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"I’m not sure what happened here, but it "},{type:"element",tagName:"em",properties:{},children:[{type:"text",value:"might"}]},{type:"text",value:" have did something to my prior GRUB config managed by Arch Linux."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"On next boot, the GRUB settings of Arch Linux showed up, which had options for Windows and Arch Linux.(no Ubuntu OS here)"}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"CHALLENGE 3: Get Ubuntu OS to boot"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Then I went ahead and booted into Arch to run a "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"grub-mkconfig -o /boot/grub/grub.cfg"}]},{type:"text",value:", because it didn’t know about Ubuntu OS.\nAfter I rebooted the system, Ubuntu’s GRUB config greeted me, that did not have Arch Linux as a boot option. "}]},{type:"text",value:"\n"},{type:"element",tagName:"blockquote",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"I lost access to Arch Linux now. I was not happy, to say the least."}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{align:"center"},children:[{type:"element",tagName:"font",properties:{color:"green",size:4},children:[{type:"text",value:"STATUS:\n \n "},{type:"element",tagName:"font",properties:{color:"red"},children:[{type:"text",value:"Arch Linux `NOT_BOOTING`"}]},{type:"text",value:"\n ; Ubuntu `OK`\n ; Windows `OK`\n "}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"CHALLENGE 4: Get Arch Linux to boot"}]},{type:"text",value:"\n"},{type:"element",tagName:"blockquote",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Next, I tried running the same "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"grub-mkconfig -o /boot/grub/grub.cfg"}]},{type:"text",value:" in Ubuntu OS."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"I got options for Arch Linux then, but they didn’t work for me (poor Arch support in Ubuntu 18.04?)."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Then I fired off an Arch Linux Live USB and decided to try to get GRUB reinstalled from my Arch Linux installation."}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"re-formatted the "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"/dev/sda1"}]},{type:"text",value:" (EFI) partition."}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"arch-chroot"}]},{type:"text",value:"ed into my Arch installation and force-reinstalled all my arch linux packages by my previous post.(to get linux firmware images in "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"/boot"}]},{type:"text",value:"). "}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"blockquote",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"I could’ve done it by reinstalling just the firmware too, as "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"<Namarggon>"}]},{type:"text",value:" on "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"#archlinux"}]},{type:"text",value:" (IRC) suggested."}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"ran "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"grub-install"}]},{type:"text",value:" and "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"grub-mkconfig"}]},{type:"text",value:" commands from my GitHub gist - "},{type:"element",tagName:"a",properties:{href:"https://gist.github.com/brute4s99/d22508c05868e7eca578580e5ea86829"},children:[{type:"text",value:"ARCH COMMANDS"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"ran "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"genfstab"}]},{type:"text",value:" command from that GitHub gist. "}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"blockquote",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"(kudos to "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"<GreyShade>"}]},{type:"text",value:" and "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"<iovec>"}]},{type:"text",value:" for helping me out on this one!)"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{align:"center"},children:[{type:"text",value:" I have access to my Arch Linux and Ubuntu now."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{align:"center"},children:[{type:"element",tagName:"font",properties:{color:"green",size:4},children:[{type:"text",value:"STATUS:\n Arch Linux `OK`\n ; Ubuntu `OK`\n ;  "},{type:"element",tagName:"font",properties:{color:"red"},children:[{type:"text",value:"Windows `NOT_BOOTING`"}]},{type:"text",value:"\n "}]}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{align:"center"},children:[{type:"text",value:"UPDATE: "}]},{type:"text",value:"\n"},{type:"element",tagName:"blockquote",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"took a couple of commands: "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"bootrec /fixmbr"}]},{type:"text",value:" and "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"bootrec /rebuildBCD"}]},{type:"text",value:" from a Windows OS Installation Media. They installed the new EFI files in the EFI partition, and I finally had access to all three systems! \\o/"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{align:"center"},children:[{type:"element",tagName:"font",properties:{color:"green",size:4},children:[{type:"text",value:"STATUS:\n Arch Linux `OK`\n ; Ubuntu `OK`\n ;  Windows `OK`\n "}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"CONCLUSION"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"I obviously should not have removed the EFI partition, since that step increased the work needed to set up other OSes.\nIf you happen to find any other weak links or better procedure, please do share it with me over the mail or twitter!"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{align:"center"},children:[{type:"text",value:" "},{type:"element",tagName:"font",properties:{size:3},children:[{type:"text",value:" Stay safe and make the internet a healthier place! "}]}]}],data:{quirksMode:!1}},fields:{slug:"/muli_booting/",prefix:"2019-02-03"},frontmatter:{title:"Multi-booting",subTitle:"at its best",cover:{childImageSharp:{resize:{src:"/static/cover-b5b7c48ac3ab6350523e06503d5113f6-160fa.png"}}}}},author:{id:"/home/brute4s99/DEV/repos/blog/content/parts/author.md absPath of file >>> MarkdownRemark",html:"<p>I am an engineering undergraduate, in my 3rd year of B.Tech. I like to play with technologies and share my experiences with the almighty internet!</p>"},footnote:{id:"/home/brute4s99/DEV/repos/blog/content/parts/footnote.md absPath of file >>> MarkdownRemark",html:'<ul>\n<li>personalised with 💙 by <a href="https://github.com/brute4s99">Piyush Aggarwal</a> | based on a GatsbyJS starter by <a href="https://github.com/greglobinski">Greg Lobinski</a></li>\n</ul>'}},pathContext:{slug:"/muli_booting/"}}}});
//# sourceMappingURL=path---muli-booting-7b7a188645b6afefe445.js.map