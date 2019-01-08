webpackJsonp([0x91b2a69c3585],{804:function(e,t){e.exports={data:{post:{id:"/home/brute4s99/DEV/repos/blog/content/posts/2018-09-03--mix_os/index.md absPath of file >>> MarkdownRemark",html:'<h1>PROLOGUE</h1>\n<p>While setting up Dev environment on my CAIRO-STATION (desktop computer at my home), I realized I could not install Linux on that, since the system will be used by all family members. My best bet would have been a VM or some sort of Containerization. Then I recalled my early development days, and realized both of these are inferior to <a href="https://www.howtogeek.com/249966/how-to-install-and-use-the-linux-bash-shell-on-windows-10/">Windows Subsystem For Linux (WSL)</a></p>\n<p>When I first discovered WSL as an optional feature in Windows 8.1, I was busy jumping between playing Just Cause 2 (a really great Open-World game, you <a href="https://www.youtube.com/watch?v=oTXqYg_S4Ps">MUST</a> check it out!) and studying for XII “Board Exams”. I had a slight taste of Linux back then, enough to perform the most basic functions- ls, cd, and <strong>screenfetch</strong> (my favorite).</p>\n<p>Then, last year I saw Microsoft announce 3 more Linux flavors for WSL incoming at <a href="https://techcrunch.com/2017/05/11/microsofts-bash-on-windows-10-goes-beyond-ubuntu-and-gets-support-for-fedora-and-suse-too/">Build Developer Conference</a>, all I understood was more screenfetch outputs to bask in!</p>\n<h1>Motivation</h1>\n<p>Today, after an year of experience and two incredibly knowledgeable months at <a href="https://mindretfarc.wordpress.com/2018/07/10/dgplug/">DGPLUG</a>, ideas have become more <strong>achievable</strong>.</p>\n<p>Today, an idea struck my mind-</p>\n<blockquote>\n<p>Developers can finally use Ubuntu through command line interface, great! If they could also use <strong>GUI</strong> apps fired from within the Ubuntu bash CLI, ah that would have been lovely.</p>\n</blockquote>\n<p>Ever since I <a href="https://brute4s99.gitlab.io/arch_zero_to_one/">installed Arch Linux</a> on my system over days of research, I came to appreciate all the nit-bits and procedures involved in installing an OS and everything that a proprietary-software user believes <em>should</em> come with it.</p>\n<p>Since now I possessed the knowledge I needed to pull this off, I fired up my home PC and I was ready to hack!</p>\n<h1>Baby Steps</h1>\n<ol>\n<li>Got <a href="https://www.microsoft.com/en-us/p/ubuntu-1804/9n9tngvndl3q?activetab=pivot%3aoverviewtab">Ubuntu 18.04</a> from windows store.</li>\n<li><a href="https://docs.microsoft.com/en-us/windows/wsl/install-win10">Turned ON WSL</a> for my system.</li>\n<li>Updated all packages and installed screenfetch.</li>\n</ol>\n<h1>The New Part</h1>\n<p>The <strong>X Server</strong> handles outputs to the GUI, and a variable DISPLAY needs to point to the X Server. This was done by the command DISPLAY=:0. To avoid running it manually everytime, I appended it to my shell by the command: <code class="language-text">echo &#39;DISPLAY=:0&#39; &gt;&gt; ~/.zshrc</code>.</p>\n<p>Now, all that I needed was an X Server that serves well!</p>\n<p>My first attempt at X-Server for Windows was XMing, but unfortunately it couldn’t be detected by the WSL.\n\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/xmingnotdetected-f2735741060badc3480ef7ae2705d8d4-cbca2.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 487px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 16.427104722792606%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAADCAIAAAAcOLh5AAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAUUlEQVQI15XOSw6AIAwAUVoKwViwLX5I6P3P6cK9xrefZAIUyEQC0AkrQvhFp1Rfj1nOJbec6JESIsYYv2Ix2ZWtbWqiNq5hZu6uqswM8PZyAxZRA5OG/feLAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px transparent;"\n        alt="XMINGnotDetected"\n        title=""\n        src="/static/xmingnotdetected-f2735741060badc3480ef7ae2705d8d4-cbca2.png"\n        srcset="/static/xmingnotdetected-f2735741060badc3480ef7ae2705d8d4-2bbb6.png 200w,\n/static/xmingnotdetected-f2735741060badc3480ef7ae2705d8d4-b5c84.png 400w,\n/static/xmingnotdetected-f2735741060badc3480ef7ae2705d8d4-cbca2.png 487w"\n        sizes="(max-width: 487px) 100vw, 487px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p align=\'center\'>X Server could not be found by WSL</p>\n<p>Next up, I tried another procedure which goes as follows :-</p>\n<ol>\n<li>WSL opens up a TCP type port 2222 for SSHing.  </li>\n<li>I SSH through PuTTY and enable X11 Forwarding inside it.</li>\n<li>The X Server used was still Xming.</li>\n</ol>\n<p>The result is in the following photograph.\n\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/xmingdetected-ea70a90367317e446b9a7b7062339c87-2c531.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 611px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 66.93944353518822%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAIAAAAmMtkJAAAACXBIWXMAAA7DAAAOwwHHb6hkAAABJklEQVQoz2Ng5Gbi4WAWYmZkZ2QgGYjJiAvLCAoJ8Qnx8/Pw8vADSR4eLi4uPj4+IMnLyysgIMDNwyPAzw9kMzExoWjm5uRmZmJmZmZhYWUFYhYwAPJZWaFsOAMIGBnJcB6dADs7k7mlsJUtn6UNr7kVr7U9n4goK1CcgJMhXpKS5jt3pebmw7Krd4ou3Sx88qba21cdKM7MjFc3JDDl5eV+/vz+9+//v3///fz5+////+HhwWDNzIQ1y8nJfP36Cajn379/v3+DNIeFBRGrWVZW+suXj0A9u3fvfvbsGZARHOxPrGZ5edmvXz8D9dy9e/fHjx+k2Qx09pev7378+Pbr1w+IE8LCAglrhgA2NlZ9Ax1DQz19fR19fV0TE0MBAX54XCADAHWGZHCsCS60AAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px transparent;"\n        alt="XMingDetected"\n        title=""\n        src="/static/xmingdetected-ea70a90367317e446b9a7b7062339c87-2c531.png"\n        srcset="/static/xmingdetected-ea70a90367317e446b9a7b7062339c87-be3b0.png 200w,\n/static/xmingdetected-ea70a90367317e446b9a7b7062339c87-7724c.png 400w,\n/static/xmingdetected-ea70a90367317e446b9a7b7062339c87-2c531.png 611w"\n        sizes="(max-width: 611px) 100vw, 611px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p align=\'center\'>Some Progress!</p>\n<p>There still were problems with this set up- Latency. It seems obvious that I am SSHing into my own system, which is not wise. So, now I decided to get a better terminal application and get this show on road!</p>\n<p>So, this time, I installed <a href="https://conemu.github.io/">ConEmu</a>. For those who are having a hard time shifting from Linux to the Command Prompt or Powershell, this is a relief. ConEmu is extremely customizable and rock-solid!</p>\n<p>Also, I changed my X Server to <a href="https://mobaxterm.mobatek.net/">MobaXterm</a>, which does a far better and simpler job at handling X Server and related tasks(Servers,Tunneling,Packages,File System )</p>\n<h1>Final Set Up</h1>\n<p>The MobaXTerm X Server starts at Log In, and firing up ConEmu gives me a Ubuntu CLI.</p>\n<h1>Testing</h1>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/xmingdetected1-fb8f884edd935d202a49e12bca2bf064-eaeb9.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 800px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 56.199999999999996%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAAA7DAAAOwwHHb6hkAAACGUlEQVQoz31RzW/ScBguTC9m82ZM9A8w6r+gZ09yWEzUqRsDTRa/M+Y8isbRJTvsAHElGvAgX6mkDrbgNsUMB9VsKRllNNSVbRZY8FAKLVA+2vorfi3O+OS5/N68z/s+v+eFbt25/fCBZWxs9C+OWu6Pj1sYKvWtmJfE6upnfH4uvLS48G5p4W0kHHwdQFEfBOmg/dDptGpvb1+ZExoNKRgMvniOvHQ7vB4ngjzz+Txsnt2iKehAz8EzZ4/0XzpuuHDM0H900HRi+MapLk8PmU/GEnBhdw3D5gIBbyjkxzCv3+//EI2qqipLDahHr39suTL/auKNyzqLzRR3SZ5nOH6zLuU3MrEZ5BFBxJrNJsdx29tfc7mtarVaqVSAuNVqa+LFEKaKglzlVUWVZbXT+UlZVkBTrSba7fD09BMYfmqz2axWq8vlAvV2qwXp9bo4HtcmdTSoe6AoiizLQEzTWYpiSHKHojYBgIvu5q44kVgBD6AE3eo+1OtiMrm6vk6k02QmQ5JkimFye8Xx/4gFgbfbbQ7HhNM5hSBTk5Ow2+3+Y/vH5na7DUwqv/DbuSTV8vkiyxZYcB+2UCqVBFEAHwIpaifF8YQWPcjqH9CmcFyZIIhsNkvTXwDLZV7r78jQ4b5D5w3nTNevDRovDxkvDpsGzOarZvPAyIjx7r2b+KdlIokvx96jqCcSwWZDaDgc/LgSTW8QqdTad51H3m6y4/5BAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px transparent;"\n        alt="XMingDetected"\n        title=""\n        src="/static/xmingdetected1-fb8f884edd935d202a49e12bca2bf064-48538.png"\n        srcset="/static/xmingdetected1-fb8f884edd935d202a49e12bca2bf064-bed0f.png 200w,\n/static/xmingdetected1-fb8f884edd935d202a49e12bca2bf064-5fd34.png 400w,\n/static/xmingdetected1-fb8f884edd935d202a49e12bca2bf064-48538.png 800w,\n/static/xmingdetected1-fb8f884edd935d202a49e12bca2bf064-eaeb9.png 1000w"\n        sizes="(max-width: 800px) 100vw, 800px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p align=\'center\'>Mozilla Firefox</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/xmingdetected2-4443b8ebe546dd77f96b6df47f875273-eaeb9.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 800px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 56.199999999999996%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAB1ElEQVQoz2PIycstKS4uxAD5+QVZWXmtrR093X2dHd1dHd3dXb09PRN6uvqAIr09vb293QwMTAy4ACcXi72jvoOLkbGpor6BrJ6BrLK6iJIyn6ISj5S0oLiYOAMvLxcnCwpgY2MF6jS3UOrqDqird9u8ve7arUXXbsy/dnPB5WtzLlyedfPuwuzcUDExKQZmZiZGVAuZmECO0dTUSE9NCg3y27xm7f/////9+/cfDH7/+vv/3//q6lpBQUEGRkY0vUDNIBF9HdW8jOjoCN+taxb9///n3/+//8Hoz5/fQLKqqpyPjx+LZoiIspJsamJ4ZLjvlnXLgBb+/fvn37+/f//9+/37N5CurCjDrhlis4aGSkFeSnJC+KE928Ca/0Kc/efPHyBZW1uNSzPIzzY2VnPnzpwzZ/r6dav37duzd+9uINqzd//23fsOHNiflBgvKiqKRTPcfk5OTkNDQzV1DSVlFWUVVWVlFQU1HTk1PXkFBWUVFQUFRQY8gIWZWU9bU1NVRUNZSUNZGYjUFBVUFWSV5KSV5WRlpSRA8czNzcbJxcrBxcLJxcTFw8bDC0SsQsI8ElLihkFJqj6J8m4xCm7R8m6R4vZB4naBEg7BUo4hah4RAEY/vgJa9O/gAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px transparent;"\n        alt="XMingDetected2"\n        title=""\n        src="/static/xmingdetected2-4443b8ebe546dd77f96b6df47f875273-48538.png"\n        srcset="/static/xmingdetected2-4443b8ebe546dd77f96b6df47f875273-bed0f.png 200w,\n/static/xmingdetected2-4443b8ebe546dd77f96b6df47f875273-5fd34.png 400w,\n/static/xmingdetected2-4443b8ebe546dd77f96b6df47f875273-48538.png 800w,\n/static/xmingdetected2-4443b8ebe546dd77f96b6df47f875273-eaeb9.png 1000w"\n        sizes="(max-width: 800px) 100vw, 800px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p align=\'center\'>VS Code</p>\n<p>I also followed a blog post by Nick Janetakis on <a href="https://nickjanetakis.com/blog/setting-up-docker-for-windows-and-wsl-to-work-flawlessly">setting up Docker to work with WSL flawlessly</a>!</p>\n<p>The setup he used was my inspiration for the post, and I hope it would serve me well for my oncoming endeavors!</p>',htmlAst:{type:"root",children:[{type:"element",tagName:"h1",properties:{},children:[{type:"text",value:"PROLOGUE"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"While setting up Dev environment on my CAIRO-STATION (desktop computer at my home), I realized I could not install Linux on that, since the system will be used by all family members. My best bet would have been a VM or some sort of Containerization. Then I recalled my early development days, and realized both of these are inferior to "},{type:"element",tagName:"a",properties:{href:"https://www.howtogeek.com/249966/how-to-install-and-use-the-linux-bash-shell-on-windows-10/"},children:[{type:"text",value:"Windows Subsystem For Linux (WSL)"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"When I first discovered WSL as an optional feature in Windows 8.1, I was busy jumping between playing Just Cause 2 (a really great Open-World game, you "},{type:"element",tagName:"a",properties:{href:"https://www.youtube.com/watch?v=oTXqYg_S4Ps"},children:[{type:"text",value:"MUST"}]},{type:"text",value:" check it out!) and studying for XII “Board Exams”. I had a slight taste of Linux back then, enough to perform the most basic functions- ls, cd, and "},{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"screenfetch"}]},{type:"text",value:" (my favorite)."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Then, last year I saw Microsoft announce 3 more Linux flavors for WSL incoming at "},{type:"element",tagName:"a",properties:{href:"https://techcrunch.com/2017/05/11/microsofts-bash-on-windows-10-goes-beyond-ubuntu-and-gets-support-for-fedora-and-suse-too/"},children:[{type:"text",value:"Build Developer Conference"}]},{type:"text",value:", all I understood was more screenfetch outputs to bask in!"}]},{type:"text",value:"\n"},{type:"element",tagName:"h1",properties:{},children:[{type:"text",value:"Motivation"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Today, after an year of experience and two incredibly knowledgeable months at "},{type:"element",tagName:"a",properties:{href:"https://mindretfarc.wordpress.com/2018/07/10/dgplug/"},children:[{type:"text",value:"DGPLUG"}]},{type:"text",value:", ideas have become more "},{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"achievable"}]},{type:"text",value:"."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Today, an idea struck my mind-"}]},{type:"text",value:"\n"},{type:"element",tagName:"blockquote",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Developers can finally use Ubuntu through command line interface, great! If they could also use "},{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"GUI"}]},{type:"text",value:" apps fired from within the Ubuntu bash CLI, ah that would have been lovely."}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Ever since I "},{type:"element",tagName:"a",properties:{href:"https://brute4s99.gitlab.io/arch_zero_to_one/"},children:[{type:"text",value:"installed Arch Linux"}]},{type:"text",value:" on my system over days of research, I came to appreciate all the nit-bits and procedures involved in installing an OS and everything that a proprietary-software user believes "},{type:"element",tagName:"em",properties:{},children:[{type:"text",value:"should"}]},{type:"text",value:" come with it."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Since now I possessed the knowledge I needed to pull this off, I fired up my home PC and I was ready to hack!"}]},{type:"text",value:"\n"},{type:"element",tagName:"h1",properties:{},children:[{type:"text",value:"Baby Steps"}]},{type:"text",value:"\n"},{type:"element",tagName:"ol",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"Got "},{type:"element",tagName:"a",properties:{href:"https://www.microsoft.com/en-us/p/ubuntu-1804/9n9tngvndl3q?activetab=pivot%3aoverviewtab"},children:[{type:"text",value:"Ubuntu 18.04"}]},{type:"text",value:" from windows store."}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"a",properties:{href:"https://docs.microsoft.com/en-us/windows/wsl/install-win10"},children:[{type:"text",value:"Turned ON WSL"}]},{type:"text",value:" for my system."}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"Updated all packages and installed screenfetch."}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"h1",properties:{},children:[{type:"text",value:"The New Part"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"The "},{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"X Server"}]},{type:"text",value:" handles outputs to the GUI, and a variable DISPLAY needs to point to the X Server. This was done by the command DISPLAY=:0. To avoid running it manually everytime, I appended it to my shell by the command: "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"echo 'DISPLAY=:0' >> ~/.zshrc"}]},{type:"text",value:"."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Now, all that I needed was an X Server that serves well!"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"My first attempt at X-Server for Windows was XMing, but unfortunately it couldn’t be detected by the WSL.\n\n  "},{type:"element",tagName:"a",properties:{className:["gatsby-resp-image-link"],href:"/static/xmingnotdetected-f2735741060badc3480ef7ae2705d8d4-cbca2.png",style:"display: block",target:"_blank",rel:["noopener"]},children:[{type:"text",value:"\n  \n  "},{type:"element",tagName:"span",properties:{className:["gatsby-resp-image-wrapper"],style:"position: relative; display: block; ; max-width: 487px; margin-left: auto; margin-right: auto;"},children:[{type:"text",value:"\n    "},{type:"element",tagName:"span",properties:{className:["gatsby-resp-image-background-image"],style:"padding-bottom: 16.427104722792606%; position: relative; bottom: 0; left: 0; background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAADCAIAAAAcOLh5AAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAUUlEQVQI15XOSw6AIAwAUVoKwViwLX5I6P3P6cK9xrefZAIUyEQC0AkrQvhFp1Rfj1nOJbec6JESIsYYv2Ix2ZWtbWqiNq5hZu6uqswM8PZyAxZRA5OG/feLAAAAAElFTkSuQmCC'); background-size: cover; display: block;"},children:[{type:"text",value:"\n      "},{type:"element",tagName:"img",properties:{className:["gatsby-resp-image-image"],style:"width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px transparent;",alt:"XMINGnotDetected",title:"",src:"/static/xmingnotdetected-f2735741060badc3480ef7ae2705d8d4-cbca2.png",srcSet:["/static/xmingnotdetected-f2735741060badc3480ef7ae2705d8d4-2bbb6.png 200w","/static/xmingnotdetected-f2735741060badc3480ef7ae2705d8d4-b5c84.png 400w","/static/xmingnotdetected-f2735741060badc3480ef7ae2705d8d4-cbca2.png 487w"],sizes:["(max-width:","487px)","100vw,","487px"]},children:[]},{type:"text",value:"\n    "}]},{type:"text",value:"\n  "}]},{type:"text",value:"\n  \n  "}]},{type:"text",value:"\n    "}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{align:"center"},children:[{type:"text",value:"X Server could not be found by WSL"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Next up, I tried another procedure which goes as follows :-"}]},{type:"text",value:"\n"},{type:"element",tagName:"ol",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"WSL opens up a TCP type port 2222 for SSHing.  "}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"I SSH through PuTTY and enable X11 Forwarding inside it."}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"The X Server used was still Xming."}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"The result is in the following photograph.\n\n  "},{type:"element",tagName:"a",properties:{className:["gatsby-resp-image-link"],href:"/static/xmingdetected-ea70a90367317e446b9a7b7062339c87-2c531.png",style:"display: block",target:"_blank",rel:["noopener"]},children:[{type:"text",value:"\n  \n  "},{type:"element",tagName:"span",properties:{className:["gatsby-resp-image-wrapper"],style:"position: relative; display: block; ; max-width: 611px; margin-left: auto; margin-right: auto;"},children:[{type:"text",value:"\n    "},{type:"element",tagName:"span",properties:{className:["gatsby-resp-image-background-image"],style:"padding-bottom: 66.93944353518822%; position: relative; bottom: 0; left: 0; background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAIAAAAmMtkJAAAACXBIWXMAAA7DAAAOwwHHb6hkAAABJklEQVQoz2Ng5Gbi4WAWYmZkZ2QgGYjJiAvLCAoJ8Qnx8/Pw8vADSR4eLi4uPj4+IMnLyysgIMDNwyPAzw9kMzExoWjm5uRmZmJmZmZhYWUFYhYwAPJZWaFsOAMIGBnJcB6dADs7k7mlsJUtn6UNr7kVr7U9n4goK1CcgJMhXpKS5jt3pebmw7Krd4ou3Sx88qba21cdKM7MjFc3JDDl5eV+/vz+9+//v3///fz5+////+HhwWDNzIQ1y8nJfP36Cajn379/v3+DNIeFBRGrWVZW+suXj0A9u3fvfvbsGZARHOxPrGZ5edmvXz8D9dy9e/fHjx+k2Qx09pev7378+Pbr1w+IE8LCAglrhgA2NlZ9Ax1DQz19fR19fV0TE0MBAX54XCADAHWGZHCsCS60AAAAAElFTkSuQmCC'); background-size: cover; display: block;"},children:[{type:"text",value:"\n      "},{type:"element",tagName:"img",properties:{className:["gatsby-resp-image-image"],style:"width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px transparent;",alt:"XMingDetected",title:"",src:"/static/xmingdetected-ea70a90367317e446b9a7b7062339c87-2c531.png",srcSet:["/static/xmingdetected-ea70a90367317e446b9a7b7062339c87-be3b0.png 200w","/static/xmingdetected-ea70a90367317e446b9a7b7062339c87-7724c.png 400w","/static/xmingdetected-ea70a90367317e446b9a7b7062339c87-2c531.png 611w"],sizes:["(max-width:","611px)","100vw,","611px"]},children:[]},{type:"text",value:"\n    "}]},{type:"text",value:"\n  "}]},{type:"text",value:"\n  \n  "}]},{type:"text",value:"\n    "}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{align:"center"},children:[{type:"text",value:"Some Progress!"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"There still were problems with this set up- Latency. It seems obvious that I am SSHing into my own system, which is not wise. So, now I decided to get a better terminal application and get this show on road!"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"So, this time, I installed "},{type:"element",tagName:"a",properties:{href:"https://conemu.github.io/"},children:[{type:"text",value:"ConEmu"}]},{type:"text",value:". For those who are having a hard time shifting from Linux to the Command Prompt or Powershell, this is a relief. ConEmu is extremely customizable and rock-solid!"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Also, I changed my X Server to "},{type:"element",tagName:"a",properties:{href:"https://mobaxterm.mobatek.net/"},children:[{type:"text",value:"MobaXterm"}]},{type:"text",value:", which does a far better and simpler job at handling X Server and related tasks(Servers,Tunneling,Packages,File System )"}]},{type:"text",value:"\n"},{type:"element",tagName:"h1",properties:{},children:[{type:"text",value:"Final Set Up"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"The MobaXTerm X Server starts at Log In, and firing up ConEmu gives me a Ubuntu CLI."}]},{type:"text",value:"\n"},{type:"element",tagName:"h1",properties:{},children:[{type:"text",value:"Testing"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"\n  "},{type:"element",tagName:"a",properties:{className:["gatsby-resp-image-link"],href:"/static/xmingdetected1-fb8f884edd935d202a49e12bca2bf064-eaeb9.png",style:"display: block",target:"_blank",rel:["noopener"]},children:[{type:"text",value:"\n  \n  "},{type:"element",tagName:"span",properties:{className:["gatsby-resp-image-wrapper"],style:"position: relative; display: block; ; max-width: 800px; margin-left: auto; margin-right: auto;"},children:[{type:"text",value:"\n    "},{type:"element",tagName:"span",properties:{className:["gatsby-resp-image-background-image"],style:"padding-bottom: 56.199999999999996%; position: relative; bottom: 0; left: 0; background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAAA7DAAAOwwHHb6hkAAACGUlEQVQoz31RzW/ScBguTC9m82ZM9A8w6r+gZ09yWEzUqRsDTRa/M+Y8isbRJTvsAHElGvAgX6mkDrbgNsUMB9VsKRllNNSVbRZY8FAKLVA+2vorfi3O+OS5/N68z/s+v+eFbt25/fCBZWxs9C+OWu6Pj1sYKvWtmJfE6upnfH4uvLS48G5p4W0kHHwdQFEfBOmg/dDptGpvb1+ZExoNKRgMvniOvHQ7vB4ngjzz+Txsnt2iKehAz8EzZ4/0XzpuuHDM0H900HRi+MapLk8PmU/GEnBhdw3D5gIBbyjkxzCv3+//EI2qqipLDahHr39suTL/auKNyzqLzRR3SZ5nOH6zLuU3MrEZ5BFBxJrNJsdx29tfc7mtarVaqVSAuNVqa+LFEKaKglzlVUWVZbXT+UlZVkBTrSba7fD09BMYfmqz2axWq8vlAvV2qwXp9bo4HtcmdTSoe6AoiizLQEzTWYpiSHKHojYBgIvu5q44kVgBD6AE3eo+1OtiMrm6vk6k02QmQ5JkimFye8Xx/4gFgbfbbQ7HhNM5hSBTk5Ow2+3+Y/vH5na7DUwqv/DbuSTV8vkiyxZYcB+2UCqVBFEAHwIpaifF8YQWPcjqH9CmcFyZIIhsNkvTXwDLZV7r78jQ4b5D5w3nTNevDRovDxkvDpsGzOarZvPAyIjx7r2b+KdlIokvx96jqCcSwWZDaDgc/LgSTW8QqdTad51H3m6y4/5BAAAAAElFTkSuQmCC'); background-size: cover; display: block;"},children:[{type:"text",value:"\n      "},{type:"element",tagName:"img",properties:{className:["gatsby-resp-image-image"],style:"width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px transparent;",alt:"XMingDetected",title:"",src:"/static/xmingdetected1-fb8f884edd935d202a49e12bca2bf064-48538.png",srcSet:["/static/xmingdetected1-fb8f884edd935d202a49e12bca2bf064-bed0f.png 200w","/static/xmingdetected1-fb8f884edd935d202a49e12bca2bf064-5fd34.png 400w","/static/xmingdetected1-fb8f884edd935d202a49e12bca2bf064-48538.png 800w","/static/xmingdetected1-fb8f884edd935d202a49e12bca2bf064-eaeb9.png 1000w"],sizes:["(max-width:","800px)","100vw,","800px"]},children:[]},{type:"text",value:"\n    "}]},{type:"text",value:"\n  "}]},{type:"text",value:"\n  \n  "}]},{type:"text",value:"\n    "}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{align:"center"},children:[{type:"text",value:"Mozilla Firefox"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"\n  "},{type:"element",tagName:"a",properties:{className:["gatsby-resp-image-link"],href:"/static/xmingdetected2-4443b8ebe546dd77f96b6df47f875273-eaeb9.png",style:"display: block",target:"_blank",rel:["noopener"]},children:[{type:"text",value:"\n  \n  "},{type:"element",tagName:"span",properties:{className:["gatsby-resp-image-wrapper"],style:"position: relative; display: block; ; max-width: 800px; margin-left: auto; margin-right: auto;"},children:[{type:"text",value:"\n    "},{type:"element",tagName:"span",properties:{className:["gatsby-resp-image-background-image"],style:"padding-bottom: 56.199999999999996%; position: relative; bottom: 0; left: 0; background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAB1ElEQVQoz2PIycstKS4uxAD5+QVZWXmtrR093X2dHd1dHd3dXb09PRN6uvqAIr09vb293QwMTAy4ACcXi72jvoOLkbGpor6BrJ6BrLK6iJIyn6ISj5S0oLiYOAMvLxcnCwpgY2MF6jS3UOrqDqird9u8ve7arUXXbsy/dnPB5WtzLlyedfPuwuzcUDExKQZmZiZGVAuZmECO0dTUSE9NCg3y27xm7f/////9+/cfDH7/+vv/3//q6lpBQUEGRkY0vUDNIBF9HdW8jOjoCN+taxb9///n3/+//8Hoz5/fQLKqqpyPjx+LZoiIspJsamJ4ZLjvlnXLgBb+/fvn37+/f//9+/37N5CurCjDrhlis4aGSkFeSnJC+KE928Ca/0Kc/efPHyBZW1uNSzPIzzY2VnPnzpwzZ/r6dav37duzd+9uINqzd//23fsOHNiflBgvKiqKRTPcfk5OTkNDQzV1DSVlFWUVVWVlFQU1HTk1PXkFBWUVFQUFRQY8gIWZWU9bU1NVRUNZSUNZGYjUFBVUFWSV5KSV5WRlpSRA8czNzcbJxcrBxcLJxcTFw8bDC0SsQsI8ElLihkFJqj6J8m4xCm7R8m6R4vZB4naBEg7BUo4hah4RAEY/vgJa9O/gAAAAAElFTkSuQmCC'); background-size: cover; display: block;"},children:[{type:"text",value:"\n      "},{type:"element",tagName:"img",properties:{className:["gatsby-resp-image-image"],style:"width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px transparent;",alt:"XMingDetected2",title:"",src:"/static/xmingdetected2-4443b8ebe546dd77f96b6df47f875273-48538.png",srcSet:["/static/xmingdetected2-4443b8ebe546dd77f96b6df47f875273-bed0f.png 200w","/static/xmingdetected2-4443b8ebe546dd77f96b6df47f875273-5fd34.png 400w","/static/xmingdetected2-4443b8ebe546dd77f96b6df47f875273-48538.png 800w","/static/xmingdetected2-4443b8ebe546dd77f96b6df47f875273-eaeb9.png 1000w"],sizes:["(max-width:","800px)","100vw,","800px"]},children:[]},{type:"text",value:"\n    "}]},{type:"text",value:"\n  "}]},{type:"text",value:"\n  \n  "}]},{type:"text",value:"\n    "}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{align:"center"},children:[{type:"text",value:"VS Code"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"I also followed a blog post by Nick Janetakis on "},{type:"element",tagName:"a",properties:{href:"https://nickjanetakis.com/blog/setting-up-docker-for-windows-and-wsl-to-work-flawlessly"},children:[{type:"text",value:"setting up Docker to work with WSL flawlessly"}]},{type:"text",value:"!"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"The setup he used was my inspiration for the post, and I hope it would serve me well for my oncoming endeavors!"}]}],data:{quirksMode:!1}},fields:{slug:"/mix_os/",prefix:"2018-09-03"},frontmatter:{title:"Blurred Lines",subTitle:"Linux? Windows? I'd say, everything at once!",cover:{childImageSharp:{resize:{src:"/static/cover-1de38b65c79d21f82041b9a9d7121e8c-ada8c.jpg"}}}}},author:{id:"/home/brute4s99/DEV/repos/blog/content/parts/author.md absPath of file >>> MarkdownRemark",html:"<p><strong>Piyush Aggarwal</strong> wrote this article. He expects you to comment your thoughts below.\nLet them reach him!</p>"},footnote:{id:"/home/brute4s99/DEV/repos/blog/content/parts/footnote.md absPath of file >>> MarkdownRemark",html:'<ul>\n<li>based on a GatsbyJS starter by <a href="https://github.com/greglobinski">Greg Lobinski</a> |\nModded on Arch 🐧 Linux with 💙 by <a href="https://github.com/brute4s99">Piyush Aggarwal</a> |\nGatsbyJS, ReactJs, CSS inside!</li>\n</ul>'},site:{siteMetadata:{facebook:{appId:"201681520611805"}}}},pathContext:{slug:"/mix_os/"}}}});
//# sourceMappingURL=path---mix-os-c23ccb58f3a394bfbdb7.js.map