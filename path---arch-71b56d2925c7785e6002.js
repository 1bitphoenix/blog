webpackJsonp([72316915199843],{750:function(e,t){e.exports={data:{post:{id:"/home/brute4s99/DEV/repos/blog/content/posts/2018-07-23--arch/index.md absPath of file >>> MarkdownRemark",html:'<blockquote>\n<p>Simplicity is the ultimate sophistication.<br>\n-Leonardo da Vinci</p>\n</blockquote>\n<p>After eons of self-doubt and mixed opinion, I finally decided to get Arch Linux up and running in my laptop!</p>\n<h2><strong>How it all began?</strong></h2>\n<p>My mentors at IRC insisted upon switching over to latest Linux distros. The reason was implicit: to work with packages having latest features. My IRC friends at <a href="https://brute4s99.gitlab.io/dgplug/">#dgplug</a> suggested me a few flavors to choose from- latest Ubuntu build, latest Fedora build, or a rolling release distribution.</p>\n<h2>What’s a Rolling Release?</h2>\n<p>A rolling release is a type of <a href="https://en.wikipedia.org/wiki/Rolling_distribution">linux distribution model</a> in which instead of releasing major updates to the entire operating system after a scheduled period of time, a rolling release operating system can be changed at the application level, whenever a change is pushed by <a href="https://en.wikipedia.org/wiki/Upstream_(software_development)">upstream</a>.</p>\n<p>There are a couple of rolling release models – semi-rolling and full rolling – and the difference is in how and what packages are pushed out to users as they become available.</p>\n<p>A semi-rolling distribution, such as <a href="https://www.chakralinux.org/">Chakra Linux</a> and <a href="https://www.pclinuxos.com/">PCLinuxOS</a>, classifies some packages to be upgraded through a fixed release system (usually the base operating system) in order to maintain stability.</p>\n<p>A full rolling release, such as Gentoo, Arch, OpenSUSE Tumbleweed, and Microsoft Windows 10, pushes out updates to the base operating system and other applications very frequently – sometimes as often as every few hours!</p>\n<h2>Why switch?</h2>\n<p>The main benefit to a rolling release model is the ability for the end user to use the newest features the developer has enabled. For example, one of the newer features of the Linux kernel, introduced with the 4.0 update, was the ability to update the kernel without restarting your computer. In a rolling release distribution, as soon as this update was tested and marked as working by the development team, it could then be pushed out to the user of the distribution, enabling all future updates to the kernel to occur without computer restarts.</p>\n<h2>What’s new?</h2>\n<p>For ubuntu users, it’s the same thing as if you come to Linux from Windows; there is a learning curve.</p>\n<p>An excerpt from the <a href="https://wiki.archlinux.org/index.php/Arch_Linux#Principles">Arch Wiki</a> states thus:-</p>\n<blockquote>\n<p>Arch Linux is a general-purpose distribution. Upon installation, only a command-line environment is provided: rather than tearing out unneeded and unwanted packages, the user is offered the ability to build a custom system by choosing among thousands of high-quality packages provided in the <a href="https://wiki.archlinux.org/index.php/Official_repositories">official repositories</a> for the <a href="https://en.wikipedia.org/wiki/x86-64">x86-64</a> architecture.</p>\n</blockquote>\n<p>Oh, and one more thing- none of the proprietary softwares/packages/drivers come with the base installation. <a href="https://en.wikipedia.org/wiki/Proprietary_software">Read more about them here</a>.</p>\n<p>If you still think you can steer clear off the proprietary softwares , <a href="https://bbs.archlinux.org/viewtopic.php?id=87170">think again</a>, and <a href="https://www.reddit.com/r/archlinux/comments/56zcuf/what_proprietary_commercial_software_do_you_use/">one more time</a>.</p>\n<p>Theory’s over.</p>\n<h2>Baby Steps</h2>\n<p>A few pointers before we start the installation:-</p>\n<ol>\n<li>The installation requires a working internet connection. So, I had a wired ethernet connection ready at my disposal.  A WiFi module that’s NOT with a Broadcomm Chipset would be just as fine. Since I have the Broadcomm Chipset, I switched to wired connection for the time being.</li>\n<li>Once I’ll get the installation done, all I’ll have is a bare-bones installation with a log-in shell. You must absolutely be comfortable with the terminal, as almost no graphical utility comes out of the box.</li>\n</ol>\n<p>I grabbed a USB and prepped it with this <a href="https://www.archlinux.org/download/">Arch Linux img</a>. First thing after booting from the USB – I connected to the internet.</p>\n<blockquote>\n<p>In case you have <strong>Broadcomm chipset in your WiFi</strong>, follow <a href="https://wiki.archlinux.org/index.php/Broadcom_wireless">this</a>. You need the driver firmware for the Broadcomm chipset to get it working on your laptop, since it’s proprietary.</p>\n</blockquote>\n<h2>Connecting to the Internet</h2>\n<h3>Connecting to internet via Ethernet</h3>\n<p>Just Plug n Play, you’re good to go!</p>\n<h3>Connecting to internet via WiFi</h3>\n<p>1.Create a profile for your wifi in there</p>\n<p><code class="language-text"># wifi-menu</code></p>\n<p>2.Connect to the profile you set by</p>\n<p><code class="language-text"># netctl start &lt;profile_name&gt;</code></p>\n<p>3.If you want to enable it to connect automatically at startup</p>\n<p><code class="language-text"># netctl enable &lt;profile_name&gt;</code></p>\n<h3>Connecting to internet via Android USB tethering</h3>\n<p>1.List all your DHCP interfaces that are now available</p>\n<p><code class="language-text">$ ls /sys/class/net</code></p>\n<p>2.Connect to the new inteface provided by Arch for your USB tethered device!</p>\n<p><code class="language-text"># dhcpcd &lt;enp....something_profile_name&gt;</code></p>\n<p>Check if you’re online :    <code class="language-text">$ ping -c3 google.com</code></p>\n<hr>\n<p>There are many good tutorials out there, <a href="https://duckduckgo.com/?q=install+arch+linux+uefi">follow any one of these</a>.</p>\n<p>Now that Arch was installed, I booted up the system and got connected to the internet again.</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/tty-66a6207e4eb6f9c44ef9332283c58262-8715f.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 800px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 60.264900662251655%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAIAAADtbgqsAAAACXBIWXMAAA7EAAAOxAGVKw4bAAABB0lEQVQoz5VS26qDMBCMJiaaRFFz0aiNl2Of+9b//7QzFUrhcKQ4LMsGMrs7wxJjjNZaSllVVVEU5BLWeQmuA7Oua+Q8zy+QZcVVRROAkPRAgmAs4RzFN3YKFuHWcmNeLyHs4zHd702MOeQURfq1hZrnct9RUCnd8znHCA08y4QQnHPG2CmTKsXXVew7Uwrbmm3rvQ/DUJZllmVw8ZwMtctCsDMixmtuE10S7wmlL5+8T7ROjoZ/cLJzziSjwNu/9MLg5ee23aYQgvPeWuus9d63bYvLgVpkKIdn/5PHcYI3zrlxHIdhaNq27/umadACx4d2XdedXh4+hQP4igwaxiJj5kfLCX4BvcQSOnveAVYAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px transparent;"\n        alt="image"\n        title=""\n        src="/static/tty-66a6207e4eb6f9c44ef9332283c58262-48538.png"\n        srcset="/static/tty-66a6207e4eb6f9c44ef9332283c58262-bed0f.png 200w,\n/static/tty-66a6207e4eb6f9c44ef9332283c58262-5fd34.png 400w,\n/static/tty-66a6207e4eb6f9c44ef9332283c58262-48538.png 800w,\n/static/tty-66a6207e4eb6f9c44ef9332283c58262-8715f.png 1057w"\n        sizes="(max-width: 800px) 100vw, 800px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>Now that I was online, I set up a GUI !</p>\n<h2>Installing a GUI</h2>\n<p>So the first thing I decided to get for the Arch was GUI! It’s a quite simple procedure, you need a display manager, and a Desktop Environment to interact to the X server.</p>\n<blockquote>\n<h2>X Server</h2>\n<p>X is an application that manages one or more graphics displays and one or more input devices (keyboard, mouse, etc.) connected to the computer.<br>\nIt works as a server and can run on the local computer or on another computer on the network. Services can communicate with the X server to display graphical interfaces and receive input from the user.</p>\n</blockquote>\n<p>My choice:  <code class="language-text"># pacman -S sddm plasma</code></p>\n<h4>IMPO ! Install a terminal before rebooting to GUI !</h4>\n<p><code class="language-text"># pacman -S konsole</code></p>\n<h2>Configuring terminal</h2>\n<p>Sources + References:-</p>\n<ol>\n<li><a href="http://jilles.me/badassify-your-terminal-and-shell/">http://jilles.me/badassify-your-terminal-and-shell/</a></li>\n</ol>\n<h3>Configuring weechat</h3>\n<p>Sources + References:-</p>\n<ol>\n<li><a href="https://alexjj.com/blog/2016/9/setting-up-weechat/">https://alexjj.com/blog/2016/9/setting-up-weechat/</a></li>\n<li><a href="https://wiki.archlinux.org/index.php/WeeChat">https://wiki.archlinux.org/index.php/WeeChat</a></li>\n</ol>\n<p>Surfing through some sites also got me through a good command that would be of much help to most!</p>\n<p><code class="language-text">/mouse enable</code>  # In case you’d like to use the mouse in weechat</p>\n<p><code class="language-text">/redraw</code>          # A saviour for guys SSH-ing to any <a href="https://en.wikipedia.org/wiki/ZNC">ZNC</a></p>\n<h2>You can’t find the packages through pacman?</h2>\n<p>Enter AUR : the <a href="https://wiki.archlinux.org/index.php/Arch_User_Repository">Arch User Repository</a></p>\n<p>Suppose I have to get a package that cannot be found by pacman. I will try to find it at <a href="https://aur.archlinux.org/">AUR home page</a>.</p>\n<p>for eg : <a href="https://aur.archlinux.org/packages/ngrok/">ngrok</a>. Now, after reading description, I know this is the package I was looking for. So, now I will see how I can acquire the package.</p>\n<p>Here I can see two ways to acquire the package- by git clone (preferred), or by downloading the <strong>tarball</strong>.</p>\n<p>It gives me one file : PKGBUILD . These <strong>PKGBUILD</strong>s can be built into installable packages using makepkg , then installed using pacman .</p>\n<blockquote>\n<h2>Fakeroot</h2>\n<p>Imagine that you are a developer/package maintainer, etc. working on a remote server. You want to update the contents of a package and rebuild it, download and customize a kernel from kernel.org and build it, etc. While trying to do those things, you’ll find out that some steps require you to have <strong>root</strong> rights (<strong>UID</strong> and <strong>GID</strong> 0) for different reasons (security, overlooked permissions, etc). But it is not possible to get <strong>root</strong> rights, since you are working on a remote machine (and many other users have the same problem as you). This is what exactly <strong>fakeroot</strong> does: it pretends an effective <strong>UID</strong> and <strong>GID</strong> of 0 to the environment which requires them.<br>\nP.S:-</p>\n<ul>\n<li>UID: User ID</li>\n<li>GID: Group ID</li>\n</ul>\n</blockquote>\n<p>The git clone method is preferred since you can then update the package by simply git pull.</p>\n<h2>Why so much fuss ?</h2>\n<p>You can always try out <a href="https://wiki.archlinux.org/index.php/AUR_helpers">AUR helpers</a>. I set up <a href="https://aur.archlinux.org/packages/yay/">yay</a> in my configuration, since it also shows DIFFs when installing new/upgrading packages through AURs.</p>\n<blockquote>\n<h2>Why would you want to read DIFFs?</h2>\n<p>Essentially, it’s a shell script,(so it can possibly have mailicious / dangerous content, so look before you leap) but since it’s ran as fakeroot, there is some level of security albeit. Still, we shouldn’t try and push our luck.</p>\n</blockquote>\n<p>So after all this, I successfully set up Arch Linux, WiFi, Desktop Environment, Terminal and Weechat in my laptop! Next was installing basic software packages and fine tuning the GUI to my personal tastes.</p>\n<p>Firefox Developer Edition – For Web Browsing</p>\n<p>tor-browser – For private internet access</p>\n<p>Konsole – Terminal</p>\n<p>Deepin Music Player – Music Player</p>\n<p>Gwenview – Image viewer and editing solution</p>\n<p>Steam – for Games</p>\n<p>Kontact – for updates on calendar events</p>\n<p>VLC – Video player\nThe end result</p>\n<p><img src="final.png" alt="image"></p>\n<p align=\'center\'> beautiful, isn’t it?</p>\n<p>Setting up a personal Arch Linux machine taught me many things about the core Linux system, how exactly the system is set up during installation and how different utilities orchestrate to form my complete workstation ready to build beautiful code and software!</p>',htmlAst:{type:"root",children:[{type:"element",tagName:"blockquote",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Simplicity is the ultimate sophistication."},{type:"element",tagName:"br",properties:{},children:[]},{type:"text",value:"\n-Leonardo da Vinci"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"After eons of self-doubt and mixed opinion, I finally decided to get Arch Linux up and running in my laptop!"}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"How it all began?"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"My mentors at IRC insisted upon switching over to latest Linux distros. The reason was implicit: to work with packages having latest features. My IRC friends at "},{type:"element",tagName:"a",properties:{href:"https://brute4s99.gitlab.io/dgplug/"},children:[{type:"text",value:"#dgplug"}]},{type:"text",value:" suggested me a few flavors to choose from- latest Ubuntu build, latest Fedora build, or a rolling release distribution."}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"What’s a Rolling Release?"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"A rolling release is a type of "},{type:"element",tagName:"a",properties:{href:"https://en.wikipedia.org/wiki/Rolling_distribution"},children:[{type:"text",value:"linux distribution model"}]},{type:"text",value:" in which instead of releasing major updates to the entire operating system after a scheduled period of time, a rolling release operating system can be changed at the application level, whenever a change is pushed by "},{type:"element",tagName:"a",properties:{href:"https://en.wikipedia.org/wiki/Upstream_(software_development)"},children:[{type:"text",value:"upstream"}]},{type:"text",value:"."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"There are a couple of rolling release models – semi-rolling and full rolling – and the difference is in how and what packages are pushed out to users as they become available."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"A semi-rolling distribution, such as "},{type:"element",tagName:"a",properties:{href:"https://www.chakralinux.org/"},children:[{type:"text",value:"Chakra Linux"}]},{type:"text",value:" and "},{type:"element",tagName:"a",properties:{href:"https://www.pclinuxos.com/"},children:[{type:"text",value:"PCLinuxOS"}]},{type:"text",value:", classifies some packages to be upgraded through a fixed release system (usually the base operating system) in order to maintain stability."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"A full rolling release, such as Gentoo, Arch, OpenSUSE Tumbleweed, and Microsoft Windows 10, pushes out updates to the base operating system and other applications very frequently – sometimes as often as every few hours!"}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Why switch?"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"The main benefit to a rolling release model is the ability for the end user to use the newest features the developer has enabled. For example, one of the newer features of the Linux kernel, introduced with the 4.0 update, was the ability to update the kernel without restarting your computer. In a rolling release distribution, as soon as this update was tested and marked as working by the development team, it could then be pushed out to the user of the distribution, enabling all future updates to the kernel to occur without computer restarts."}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"What’s new?"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"For ubuntu users, it’s the same thing as if you come to Linux from Windows; there is a learning curve."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"An excerpt from the "},{type:"element",tagName:"a",properties:{href:"https://wiki.archlinux.org/index.php/Arch_Linux#Principles"},children:[{type:"text",value:"Arch Wiki"}]},{type:"text",value:" states thus:-"}]},{type:"text",value:"\n"},{type:"element",tagName:"blockquote",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Arch Linux is a general-purpose distribution. Upon installation, only a command-line environment is provided: rather than tearing out unneeded and unwanted packages, the user is offered the ability to build a custom system by choosing among thousands of high-quality packages provided in the "},{type:"element",tagName:"a",properties:{href:"https://wiki.archlinux.org/index.php/Official_repositories"},children:[{type:"text",value:"official repositories"}]},{type:"text",value:" for the "},{type:"element",tagName:"a",properties:{href:"https://en.wikipedia.org/wiki/x86-64"},children:[{type:"text",value:"x86-64"}]},{type:"text",value:" architecture."}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Oh, and one more thing- none of the proprietary softwares/packages/drivers come with the base installation. "},{type:"element",tagName:"a",properties:{href:"https://en.wikipedia.org/wiki/Proprietary_software"},children:[{type:"text",value:"Read more about them here"}]},{type:"text",value:"."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"If you still think you can steer clear off the proprietary softwares , "},{type:"element",tagName:"a",properties:{href:"https://bbs.archlinux.org/viewtopic.php?id=87170"},children:[{type:"text",value:"think again"}]},{type:"text",value:", and "},{type:"element",tagName:"a",properties:{href:"https://www.reddit.com/r/archlinux/comments/56zcuf/what_proprietary_commercial_software_do_you_use/"},children:[{type:"text",value:"one more time"}]},{type:"text",value:"."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Theory’s over."}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Baby Steps"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"A few pointers before we start the installation:-"}]},{type:"text",value:"\n"},{type:"element",tagName:"ol",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"The installation requires a working internet connection. So, I had a wired ethernet connection ready at my disposal.  A WiFi module that’s NOT with a Broadcomm Chipset would be just as fine. Since I have the Broadcomm Chipset, I switched to wired connection for the time being."}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"Once I’ll get the installation done, all I’ll have is a bare-bones installation with a log-in shell. You must absolutely be comfortable with the terminal, as almost no graphical utility comes out of the box."}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"I grabbed a USB and prepped it with this "},{type:"element",tagName:"a",properties:{href:"https://www.archlinux.org/download/"},children:[{type:"text",value:"Arch Linux img"}]},{type:"text",value:". First thing after booting from the USB – I connected to the internet."}]},{type:"text",value:"\n"},{type:"element",tagName:"blockquote",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"In case you have "},{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"Broadcomm chipset in your WiFi"}]},{type:"text",value:", follow "},{type:"element",tagName:"a",properties:{href:"https://wiki.archlinux.org/index.php/Broadcom_wireless"},children:[{type:"text",value:"this"}]},{type:"text",value:". You need the driver firmware for the Broadcomm chipset to get it working on your laptop, since it’s proprietary."}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Connecting to the Internet"}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Connecting to internet via Ethernet"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Just Plug n Play, you’re good to go!"}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Connecting to internet via WiFi"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"1.Create a profile for your wifi in there"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"# wifi-menu"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"2.Connect to the profile you set by"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"# netctl start <profile_name>"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"3.If you want to enable it to connect automatically at startup"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"# netctl enable <profile_name>"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Connecting to internet via Android USB tethering"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"1.List all your DHCP interfaces that are now available"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"$ ls /sys/class/net"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"2.Connect to the new inteface provided by Arch for your USB tethered device!"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"# dhcpcd <enp....something_profile_name>"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Check if you’re online :    "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"$ ping -c3 google.com"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"hr",properties:{},children:[]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"There are many good tutorials out there, "},{type:"element",tagName:"a",properties:{href:"https://duckduckgo.com/?q=install+arch+linux+uefi"},children:[{type:"text",value:"follow any one of these"}]},{type:"text",value:"."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Now that Arch was installed, I booted up the system and got connected to the internet again."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"\n  "},{type:"element",tagName:"a",properties:{className:["gatsby-resp-image-link"],href:"/static/tty-66a6207e4eb6f9c44ef9332283c58262-8715f.png",style:"display: block",target:"_blank",rel:["noopener"]},children:[{type:"text",value:"\n  \n  "},{type:"element",tagName:"span",properties:{className:["gatsby-resp-image-wrapper"],style:"position: relative; display: block; ; max-width: 800px; margin-left: auto; margin-right: auto;"},children:[{type:"text",value:"\n    "},{type:"element",tagName:"span",properties:{className:["gatsby-resp-image-background-image"],style:"padding-bottom: 60.264900662251655%; position: relative; bottom: 0; left: 0; background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAIAAADtbgqsAAAACXBIWXMAAA7EAAAOxAGVKw4bAAABB0lEQVQoz5VS26qDMBCMJiaaRFFz0aiNl2Of+9b//7QzFUrhcKQ4LMsGMrs7wxJjjNZaSllVVVEU5BLWeQmuA7Oua+Q8zy+QZcVVRROAkPRAgmAs4RzFN3YKFuHWcmNeLyHs4zHd702MOeQURfq1hZrnct9RUCnd8znHCA08y4QQnHPG2CmTKsXXVew7Uwrbmm3rvQ/DUJZllmVw8ZwMtctCsDMixmtuE10S7wmlL5+8T7ROjoZ/cLJzziSjwNu/9MLg5ee23aYQgvPeWuus9d63bYvLgVpkKIdn/5PHcYI3zrlxHIdhaNq27/umadACx4d2XdedXh4+hQP4igwaxiJj5kfLCX4BvcQSOnveAVYAAAAASUVORK5CYII='); background-size: cover; display: block;"},children:[{type:"text",value:"\n      "},{type:"element",tagName:"img",properties:{className:["gatsby-resp-image-image"],style:"width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px transparent;",alt:"image",title:"",src:"/static/tty-66a6207e4eb6f9c44ef9332283c58262-48538.png",srcSet:["/static/tty-66a6207e4eb6f9c44ef9332283c58262-bed0f.png 200w","/static/tty-66a6207e4eb6f9c44ef9332283c58262-5fd34.png 400w","/static/tty-66a6207e4eb6f9c44ef9332283c58262-48538.png 800w","/static/tty-66a6207e4eb6f9c44ef9332283c58262-8715f.png 1057w"],sizes:["(max-width:","800px)","100vw,","800px"]},children:[]},{type:"text",value:"\n    "}]},{type:"text",value:"\n  "}]},{type:"text",value:"\n  \n  "}]},{type:"text",value:"\n    "}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Now that I was online, I set up a GUI !"}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Installing a GUI"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"So the first thing I decided to get for the Arch was GUI! It’s a quite simple procedure, you need a display manager, and a Desktop Environment to interact to the X server."}]},{type:"text",value:"\n"},{type:"element",tagName:"blockquote",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"X Server"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"X is an application that manages one or more graphics displays and one or more input devices (keyboard, mouse, etc.) connected to the computer."},{type:"element",tagName:"br",properties:{},children:[]},{type:"text",value:"\nIt works as a server and can run on the local computer or on another computer on the network. Services can communicate with the X server to display graphical interfaces and receive input from the user."}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"My choice:  "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"# pacman -S sddm plasma"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"IMPO ! Install a terminal before rebooting to GUI !"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"# pacman -S konsole"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Configuring terminal"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Sources + References:-"}]},{type:"text",value:"\n"},{type:"element",tagName:"ol",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"a",properties:{href:"http://jilles.me/badassify-your-terminal-and-shell/"},children:[{type:"text",value:"http://jilles.me/badassify-your-terminal-and-shell/"}]}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Configuring weechat"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Sources + References:-"}]},{type:"text",value:"\n"},{type:"element",tagName:"ol",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"a",properties:{href:"https://alexjj.com/blog/2016/9/setting-up-weechat/"},children:[{type:"text",value:"https://alexjj.com/blog/2016/9/setting-up-weechat/"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"a",properties:{href:"https://wiki.archlinux.org/index.php/WeeChat"},children:[{type:"text",value:"https://wiki.archlinux.org/index.php/WeeChat"}]}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Surfing through some sites also got me through a good command that would be of much help to most!"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"/mouse enable"}]},{type:"text",value:"  # In case you’d like to use the mouse in weechat"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"/redraw"}]},{type:"text",value:"          # A saviour for guys SSH-ing to any "},{type:"element",tagName:"a",properties:{href:"https://en.wikipedia.org/wiki/ZNC"},children:[{type:"text",value:"ZNC"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"You can’t find the packages through pacman?"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Enter AUR : the "},{type:"element",tagName:"a",properties:{href:"https://wiki.archlinux.org/index.php/Arch_User_Repository"},children:[{type:"text",value:"Arch User Repository"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Suppose I have to get a package that cannot be found by pacman. I will try to find it at "
},{type:"element",tagName:"a",properties:{href:"https://aur.archlinux.org/"},children:[{type:"text",value:"AUR home page"}]},{type:"text",value:"."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"for eg : "},{type:"element",tagName:"a",properties:{href:"https://aur.archlinux.org/packages/ngrok/"},children:[{type:"text",value:"ngrok"}]},{type:"text",value:". Now, after reading description, I know this is the package I was looking for. So, now I will see how I can acquire the package."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Here I can see two ways to acquire the package- by git clone (preferred), or by downloading the "},{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"tarball"}]},{type:"text",value:"."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"It gives me one file : PKGBUILD . These "},{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"PKGBUILD"}]},{type:"text",value:"s can be built into installable packages using makepkg , then installed using pacman ."}]},{type:"text",value:"\n"},{type:"element",tagName:"blockquote",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Fakeroot"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Imagine that you are a developer/package maintainer, etc. working on a remote server. You want to update the contents of a package and rebuild it, download and customize a kernel from kernel.org and build it, etc. While trying to do those things, you’ll find out that some steps require you to have "},{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"root"}]},{type:"text",value:" rights ("},{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"UID"}]},{type:"text",value:" and "},{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"GID"}]},{type:"text",value:" 0) for different reasons (security, overlooked permissions, etc). But it is not possible to get "},{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"root"}]},{type:"text",value:" rights, since you are working on a remote machine (and many other users have the same problem as you). This is what exactly "},{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"fakeroot"}]},{type:"text",value:" does: it pretends an effective "},{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"UID"}]},{type:"text",value:" and "},{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"GID"}]},{type:"text",value:" of 0 to the environment which requires them."},{type:"element",tagName:"br",properties:{},children:[]},{type:"text",value:"\nP.S:-"}]},{type:"text",value:"\n"},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"UID: User ID"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"GID: Group ID"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"The git clone method is preferred since you can then update the package by simply git pull."}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Why so much fuss ?"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"You can always try out "},{type:"element",tagName:"a",properties:{href:"https://wiki.archlinux.org/index.php/AUR_helpers"},children:[{type:"text",value:"AUR helpers"}]},{type:"text",value:". I set up "},{type:"element",tagName:"a",properties:{href:"https://aur.archlinux.org/packages/yay/"},children:[{type:"text",value:"yay"}]},{type:"text",value:" in my configuration, since it also shows DIFFs when installing new/upgrading packages through AURs."}]},{type:"text",value:"\n"},{type:"element",tagName:"blockquote",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Why would you want to read DIFFs?"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Essentially, it’s a shell script,(so it can possibly have mailicious / dangerous content, so look before you leap) but since it’s ran as fakeroot, there is some level of security albeit. Still, we shouldn’t try and push our luck."}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"So after all this, I successfully set up Arch Linux, WiFi, Desktop Environment, Terminal and Weechat in my laptop! Next was installing basic software packages and fine tuning the GUI to my personal tastes."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Firefox Developer Edition – For Web Browsing"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"tor-browser – For private internet access"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Konsole – Terminal"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Deepin Music Player – Music Player"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Gwenview – Image viewer and editing solution"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Steam – for Games"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Kontact – for updates on calendar events"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"VLC – Video player\nThe end result"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"img",properties:{src:"final.png",alt:"image"},children:[]}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{align:"center"},children:[{type:"text",value:" beautiful, isn’t it?"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Setting up a personal Arch Linux machine taught me many things about the core Linux system, how exactly the system is set up during installation and how different utilities orchestrate to form my complete workstation ready to build beautiful code and software!"}]}],data:{quirksMode:!1}},fields:{slug:"/arch/",prefix:"2018-07-23"},frontmatter:{title:"Arch",subTitle:"Zero to One",cover:{childImageSharp:{resize:{src:"/static/cover-5bd5a9091666956a85c91dcd83a9ee04-ada8c.jpg"}}}}},author:{id:"/home/brute4s99/DEV/repos/blog/content/parts/author.md absPath of file >>> MarkdownRemark",html:"<p>I am an engineering undergraduate, in my 3rd year of B.Tech in Computer Science. I like to play with technologies and share my experiences with the almighty internet!</p>"},footnote:{id:"/home/brute4s99/DEV/repos/blog/content/parts/footnote.md absPath of file >>> MarkdownRemark",html:'<ul>\n<li>personalised with 💙 by <a href="https://github.com/brute4s99">Piyush Aggarwal</a> | based on a GatsbyJS starter by <a href="https://github.com/greglobinski">Greg Lobinski</a></li>\n</ul>'}},pathContext:{slug:"/arch/"}}}});
//# sourceMappingURL=path---arch-71b56d2925c7785e6002.js.map