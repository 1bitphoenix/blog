webpackJsonp([0x72da89c591df],{749:function(e,t){e.exports={data:{post:{id:"/home/brute4s99/DEV/repos/blog/content/posts/2019-01-26--breaking_free/index.md absPath of file >>> MarkdownRemark",html:'<!-- <p align=\'center\'><img src="cover.jpg" alt="PRIVACY"><br>\n<font size=2> Free as in freedom!</font></p> -->\n<h2>INTRODUCTION</h2>\n<p>When I started using this static blog, little did I know of all the trackers that came with the blog.</p>\n<h2>How does browser tracking work?</h2>\n<p>When you visit a website, third-party trackers (cookies, pixel tags, etc) get stored on your computer.</p>\n<p>How many trackers exist in any given website depends on how many the website owner has decided to include. Some websites will have well over 60 trackers, belonging to a multitude of companies, while others might have only one - perhaps to track visitor numbers, or see where these visitors are coming from, or to enable a certain functionality. Some might have none at all. </p>\n<p>Not all trackers are necessarily tied to companies tracking your browsing habits - but when you <strong>accept cookies</strong>, you’re saying <code class="language-text">ok</code> to <em>all</em> the trackers that are there - including those feeding information back to companies.</p>\n<h2>What is being collected and Why?</h2>\n<p>Trackers collect information about which websites you’re visiting, as well as information about your devices.</p>\n<p>One tracker might be there to give the website owner insight into her website traffic, but the rest belong to <strong>companies whose primary goal is to build up a profile of who you are</strong>: how old you are, where you live, what you read, and what you’re interested in.\nThis information can then be packaged and sold to others: advertisers, other companies, or governments.</p>\n<p>The companies tracking you are unrelated to the website you’re visiting. Called <strong>data brokers</strong>, they tend to have stock-market sounding names like DoubleClick, ComScore, and cXense (though DoubleClick is actually owned by Google). Their entire business is built on the selling of “customer data”.</p>\n<p>They are also joined by more well-known companies. Some of these are even visible: Google’s red G+ button, for example, is a tracker;  Facebook’s “like” thumb is a tracker; and Twitter’s little blue bird is also a tracker.</p>\n<h2>Why does it affect me?</h2>\n<p>Data companies and advertisers also know which articles you read and which ones you skip, which videos you watch, and which ones you stop after 5 seconds; which promotional emails you read, and which ones you send to your Trash folder without opening; what you like on Facebook, what you retweet, what you heart on Instagram. </p>\n<p>When you put all these things together, as data miners do, you end up with your own unique online fingerprint — which immediately identifies you, with all your likes and dislikes and personal traits</p>\n<p>And that’s potentially very bad news, because once they know exactly who you are and what makes you tick, companies and advertisers can:</p>\n<ul>\n<li><strong>spam you with finely-tuned, targeted ad campaigns</strong> that follow you around the web</li>\n<li>potentially <strong>jack up their prices for you</strong>, because <em>nice affluent location you got there, Brenda</em>. For example. </li>\n<li><strong>invade your privacy</strong> and chip away at your anonymity online, which nobody likes. </li>\n</ul>\n<!-- ![web trackers](web_trackers.jpg) -->\n<h2>Tracking mechanisms</h2>\n<h3>Cookies</h3>\n<p>Cookies are the most widely known method to identify a user. They use <strong>small pieces of data (each limited to 4 KB) placed in a browser storage by the web server</strong>. When a user visits a website for the first time, a cookie file with a unique user identifier (could be randomly generated) is stored on the user’s computer.</p>\n<p>Subsequent visits to the Facebook page do not require you to login, because your details will be remembered by the browser through a cookie stored during your first login.</p>\n<h3>Browser fingerprinting</h3>\n<p>Browser fingerprinting is a highly accurate way to identify and track users whenever they go online. The information collected is quite comprehensive, and often includes the browser type and version, operating system and version, screen resolution, supported fonts, plugins, time zone, language and font preferences, and even hardware configurations.</p>\n<p>These identifiers may seem generic and not at all personally identifying. But, <strong>typically only one in several million people have exactly the same specifications as you</strong>.</p>\n<h3>Web beacons</h3>\n<p><strong>Web beacons are very small, usually invisible objects embedded into a web page or email.</strong> Web beacons are also referred to as “web bugs,” which also go by the names “tags,” “page tags,” “tracking bugs,” “pixel trackers,” or “pixel gifs.”</p>\n<p>In their simplest form, they are tiny clear images, often the size of a single pixel. <strong>They download as an image when the web page is loaded, or the email is opened, making a call to a remote server for the image.</strong> The server call alerts the company that their email has just been opened or their web page visited.\nThis is why you should not display images in emails from senders you do not trust.</p>\n<p>Web beacons are also used by online advertisers who embed them into their ads so they can independently track how often their ads are being displayed.</p>\n<h2>The Anonymization Myth</h2>\n<p>Most companies claim that they don’t identify you by name when they hand over a profile of you - but what does that really mean, when <strong>you can be identified easily through all the other information included</strong>?</p>\n<p>Here’s a <a href="https://tdwi.org/articles/2018/09/04/dwt-all-anonymization-myth.aspx">good read on anonymization</a>.</p>\n<h2>Protecting your-<strong>self</strong></h2>\n<p>While companies (sometimes) allow users to take away their data off the company servers (for eg: <a href="https://takeout.google.com/settings/takeout">Google TakeOut</a> and <a href="https://www.facebook.com/help/1701730696756992/">Facebook</a>), one can never be sure if that is the real deal or not. Companies might be still be retaining derivatives or seemingly “anonymous” attributes from user data. As such, it’s always a better move to restrain giving away information as much as possible. Some ways are discussed below.</p>\n<ol>\n<li>\n<p>Use browser add-ons.</p>\n<blockquote>\n<p>Many add-ons like <a href="https://www.eff.org/privacybadger">Privacy Badger</a> from <a href="https://www.eff.org">EFF</a> allow for users to take a look at all the third party trackers enabled by the website’s owner, and disable them.</p>\n</blockquote>\n</li>\n<li>\n<p>Use <a href="https://www.torproject.org/">Tor</a> or a VPN.</p>\n<blockquote>\n<p>If you connect to the Tor anonymizing system, or use Tor’s browser, your ISP will only know that you have connected to Tor; from there it loses the data trail. Of course the downside to this is that your browsing will be slower.</p>\n<p>Be aware, your unencrypted traffic to websites outside the Tor network passes through a complete stranger’s exit node: the person running the exit node can watch what you’re doing. All you’ve done is move from your ISP snooping on you to an exit node admin watching you. On the other hand, you’ll cycle through different exit nodes, so it’s harder to be identified and tracked by websites outside the Tor network.</p>\n</blockquote>\n<blockquote>\n<p>A virtual private network is an alternative that will work for lots of people, especially if your work has a VPN service that you can use for free. This again will cut off your ISP’s ability to see what you are doing.</p>\n<p><strong>But</strong> do some research on your VPN provider. Do NOT use a free VPN provider because they face even stronger financial temptations to sell your information. If you use a VPN, you are effectively giving that company the same level of insight into your online life as your ISP. So pay for one, and check out their policies on what they do with the data they build on you.</p>\n</blockquote>\n</li>\n<li>\n<p>Use a different search engine.</p>\n<blockquote>\n<p>Google offers a wonderful service, but everything you type in its search box is logged and connected to you in as many ways as possible. It is then sold on.</p>\n<p>So why not use a different search engine? <a href="https://duck.co/help/desktop/adding-duckduckgo-to-your-browser">DuckDuckGo</a> is an awesome search engine with NO user data logging.This Qoura answer tells more about <a href="https://duck.co/help/company/advertising-and-affiliates">features of DuckDuckGo</a>.</p>\n</blockquote>\n</li>\n</ol>\n<h2>Getting rid of some trackers from your site</h2>\n<ol>\n<li>\n<p><code class="language-text">ajax.cloudflare.com</code> </p>\n<blockquote>\n<p>inherent on website’s hosted by Cloudflare’s DNS.</p>\n</blockquote>\n</li>\n<li>\n<p><code class="language-text">graph.facebook.com</code></p>\n<blockquote>\n<p>active when Facebook’s developer services (for eg: FB Comments plugin) are loading on a webpage.</p>\n</blockquote>\n</li>\n<li>\n<p><code class="language-text">clients6.google.com</code></p>\n<blockquote>\n<p>active when webpages directly call Google servers for Javascript codes.</p>\n</blockquote>\n</li>\n<li>\n<p><code class="language-text">fonts.gstatic.com</code></p>\n<blockquote>\n<p>active when Google fonts are called for CSS scripts.</p>\n</blockquote>\n</li>\n<li>\n<p><code class="language-text">www.linkedin.com</code></p>\n<blockquote>\n<p>active when there are links to linkedin in the webpage.</p>\n</blockquote>\n</li>\n</ol>\n<h2>Tracking the trackers</h2>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/lightbeam-1fdfb5677533396590d134f0fb556663-437b4.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 800px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 74.94824016563147%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAIAAABr+ngCAAAACXBIWXMAAAsSAAALEgHS3X78AAACoklEQVQoz2NgYWY2MTNbvHK1mqqqto4OMzOzp6enn59fVFSUjIwMIyMjUMTb29vMzIyBgQHIZWJiYkAGvLy86mpqIiIiLCwsTk5OlZWV5eXlra2tYWFh3Nzc/AICkVFRSUlJHBwcQMWioqKcnJwQg0A6dXR0gObx8fEBhUxMTJqamvbu3TtnzhxLSyshAf7+yZNnLFzEyc4OlAW6RUZaWkhICGqtra1tYmJSYUF+dFSUkqIi0CqgCzdsWN/e3i4rI5ORmhoTG6urpwdRrKympmdqyszIyMPDIygoyCAnJycuIZGbnVVRXhERGQ10qoGBQUpKSn5BQUJs7KxJk7Jy87w8PYFOBXqKjZ2dlYNDWICvqrTQw8MT4XMRUTFndy9vL6/s7OyysrLq6uqEhMQdu3fPnTdPX19PVlZWXl5eS1MTqFJcXCzI309DA8Rm4OLiCgwMBAaJtZVVfl5+XV1dVlYWkNvV1TV/3rwjp8/n5hesW78uPj5eTV0NbhkowIBAQUEhPz+vo6Pz+rUr69au9fcPCA4OAgbY8uXLOzs76xubli9Zemz/gdT0NEVFRaB6JjCAahYWFk5MTGxoaIiJiVFXVwcGIdAhN27cmDt3rr6+vr29nZ+vb3RkVHZOjoqKCsJOOAB6yc7OTkpKChiN9vb2QGe3tbV1dHT4+/u7ubkBkwA7O7ukpCQDLgD0OTDOgdr27Nnj4OBgZWXl4eGhpKQEZLi6ukLSAhZtEGcAdfr4+AA9GR0dDfQbMGKAxgFTY0RExIH9+4EJw8jQMDYmBt3ZEA4/P39CQkJpaSkwbcPTsKebW0hwcEVFpYWFhaKCfG11NZCB3eVA/VpaWsBkAwlSIGluZqapqQlMc5BwBnobGLpYwgwrUNfQACVDmAPR9AAA3NCs8gGM4TkAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px transparent;"\n        alt="image"\n        title=""\n        src="/static/lightbeam-1fdfb5677533396590d134f0fb556663-48538.png"\n        srcset="/static/lightbeam-1fdfb5677533396590d134f0fb556663-bed0f.png 200w,\n/static/lightbeam-1fdfb5677533396590d134f0fb556663-5fd34.png 400w,\n/static/lightbeam-1fdfb5677533396590d134f0fb556663-48538.png 800w,\n/static/lightbeam-1fdfb5677533396590d134f0fb556663-437b4.png 966w"\n        sizes="(max-width: 800px) 100vw, 800px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p> Lightbeam from <a href="https://www.mozilla.org/">Mozilla</a> is privacy browser extension helps you discover who’s tracking you online while you browse the web. </p>\n<p> You can get it <a href="https://addons.mozilla.org/en-US/firefox/addon/lightbeam/">here</a>.</p>\n<h2>Some links</h2>\n<ul>\n<li>\n<p><a href="https://www.theatlantic.com/technology/archive/2018/12/facebooks-failures-and-also-its-problems-leaking-data/578599/">Facebook’s data exchange</a></p>\n</li>\n<li>\n<p><a href="randomwalker.info/publications/webtap-chapter.pdf">The WebTAP Project</a></p>\n</li>\n<li>\n<p><a href="www.franziroesner.com/pdf/webtracking-NSDI2012.pdf">Third-party tracking on the web</a></p>\n</li>\n<li>\n<p><a href="https://learning.mozilla.org/en-US/activities/privacy-basics/">Mozilla Privacy Basics</a></p>\n<p align=\'center\'> <font size=3> Stay safe and make the internet a healthier place! </font></p>\n</li>\n</ul>',htmlAst:{type:"root",children:[{type:"comment",value:' <p align=\'center\'><img src="cover.jpg" alt="PRIVACY"><br>\n<font size=2> Free as in freedom!</font></p> '},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"INTRODUCTION"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"When I started using this static blog, little did I know of all the trackers that came with the blog."}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"How does browser tracking work?"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"When you visit a website, third-party trackers (cookies, pixel tags, etc) get stored on your computer."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"How many trackers exist in any given website depends on how many the website owner has decided to include. Some websites will have well over 60 trackers, belonging to a multitude of companies, while others might have only one - perhaps to track visitor numbers, or see where these visitors are coming from, or to enable a certain functionality. Some might have none at all. "}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Not all trackers are necessarily tied to companies tracking your browsing habits - but when you "},{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"accept cookies"}]},{type:"text",value:", you’re saying "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"ok"}]},{type:"text",value:" to "},{type:"element",tagName:"em",properties:{},children:[{type:"text",value:"all"}]},{type:"text",value:" the trackers that are there - including those feeding information back to companies."}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"What is being collected and Why?"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Trackers collect information about which websites you’re visiting, as well as information about your devices."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"One tracker might be there to give the website owner insight into her website traffic, but the rest belong to "},{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"companies whose primary goal is to build up a profile of who you are"}]},{type:"text",value:": how old you are, where you live, what you read, and what you’re interested in.\nThis information can then be packaged and sold to others: advertisers, other companies, or governments."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"The companies tracking you are unrelated to the website you’re visiting. Called "},{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"data brokers"}]},{type:"text",value:", they tend to have stock-market sounding names like DoubleClick, ComScore, and cXense (though DoubleClick is actually owned by Google). Their entire business is built on the selling of “customer data”."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"They are also joined by more well-known companies. Some of these are even visible: Google’s red G+ button, for example, is a tracker;  Facebook’s “like” thumb is a tracker; and Twitter’s little blue bird is also a tracker."}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Why does it affect me?"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Data companies and advertisers also know which articles you read and which ones you skip, which videos you watch, and which ones you stop after 5 seconds; which promotional emails you read, and which ones you send to your Trash folder without opening; what you like on Facebook, what you retweet, what you heart on Instagram. "}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"When you put all these things together, as data miners do, you end up with your own unique online fingerprint — which immediately identifies you, with all your likes and dislikes and personal traits"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"And that’s potentially very bad news, because once they know exactly who you are and what makes you tick, companies and advertisers can:"}]},{type:"text",value:"\n"},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"spam you with finely-tuned, targeted ad campaigns"}]},{type:"text",value:" that follow you around the web"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"potentially "},{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"jack up their prices for you"}]},{type:"text",value:", because "},{type:"element",tagName:"em",properties:{},children:[{type:"text",value:"nice affluent location you got there, Brenda"}]},{type:"text",value:". For example. "}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"invade your privacy"}]},{type:"text",value:" and chip away at your anonymity online, which nobody likes. "}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"comment",value:" ![web trackers](web_trackers.jpg) "},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Tracking mechanisms"}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Cookies"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Cookies are the most widely known method to identify a user. They use "},{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"small pieces of data (each limited to 4 KB) placed in a browser storage by the web server"}]},{type:"text",value:". When a user visits a website for the first time, a cookie file with a unique user identifier (could be randomly generated) is stored on the user’s computer."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Subsequent visits to the Facebook page do not require you to login, because your details will be remembered by the browser through a cookie stored during your first login."}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Browser fingerprinting"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Browser fingerprinting is a highly accurate way to identify and track users whenever they go online. The information collected is quite comprehensive, and often includes the browser type and version, operating system and version, screen resolution, supported fonts, plugins, time zone, language and font preferences, and even hardware configurations."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"These identifiers may seem generic and not at all personally identifying. But, "},{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"typically only one in several million people have exactly the same specifications as you"}]},{type:"text",value:"."}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Web beacons"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"Web beacons are very small, usually invisible objects embedded into a web page or email."}]},{type:"text",value:" Web beacons are also referred to as “web bugs,” which also go by the names “tags,” “page tags,” “tracking bugs,” “pixel trackers,” or “pixel gifs.”"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"In their simplest form, they are tiny clear images, often the size of a single pixel. "},{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"They download as an image when the web page is loaded, or the email is opened, making a call to a remote server for the image."}]},{type:"text",value:" The server call alerts the company that their email has just been opened or their web page visited.\nThis is why you should not display images in emails from senders you do not trust."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Web beacons are also used by online advertisers who embed them into their ads so they can independently track how often their ads are being displayed."}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"The Anonymization Myth"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Most companies claim that they don’t identify you by name when they hand over a profile of you - but what does that really mean, when "},{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"you can be identified easily through all the other information included"}]},{type:"text",value:"?"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Here’s a "},{type:"element",tagName:"a",properties:{href:"https://tdwi.org/articles/2018/09/04/dwt-all-anonymization-myth.aspx"},children:[{type:"text",value:"good read on anonymization"}]},{type:"text",value:"."}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Protecting your-"},{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"self"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"While companies (sometimes) allow users to take away their data off the company servers (for eg: "},{type:"element",tagName:"a",properties:{href:"https://takeout.google.com/settings/takeout"},children:[{type:"text",value:"Google TakeOut"}]},{type:"text",value:" and "},{type:"element",tagName:"a",properties:{href:"https://www.facebook.com/help/1701730696756992/"},children:[{type:"text",value:"Facebook"}]},{type:"text",value:"), one can never be sure if that is the real deal or not. Companies might be still be retaining derivatives or seemingly “anonymous” attributes from user data. As such, it’s always a better move to restrain giving away information as much as possible. Some ways are discussed below."}]},{type:"text",value:"\n"},{type:"element",tagName:"ol",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Use browser add-ons."}]},{type:"text",value:"\n"},{type:"element",tagName:"blockquote",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Many add-ons like "},{type:"element",tagName:"a",properties:{href:"https://www.eff.org/privacybadger"},children:[{type:"text",value:"Privacy Badger"}]},{type:"text",value:" from "},{type:"element",tagName:"a",properties:{href:"https://www.eff.org"},children:[{type:"text",value:"EFF"}]},{type:"text",value:" allow for users to take a look at all the third party trackers enabled by the website’s owner, and disable them."}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Use "},{type:"element",tagName:"a",properties:{href:"https://www.torproject.org/"},children:[{type:"text",value:"Tor"}]},{type:"text",value:" or a VPN."}]},{type:"text",value:"\n"},{type:"element",tagName:"blockquote",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"If you connect to the Tor anonymizing system, or use Tor’s browser, your ISP will only know that you have connected to Tor; from there it loses the data trail. Of course the downside to this is that your browsing will be slower."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Be aware, your unencrypted traffic to websites outside the Tor network passes through a complete stranger’s exit node: the person running the exit node can watch what you’re doing. All you’ve done is move from your ISP snooping on you to an exit node admin watching you. On the other hand, you’ll cycle through different exit nodes, so it’s harder to be identified and tracked by websites outside the Tor network."}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"blockquote",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"A virtual private network is an alternative that will work for lots of people, especially if your work has a VPN service that you can use for free. This again will cut off your ISP’s ability to see what you are doing."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"But"}]},{type:"text",value:" do some research on your VPN provider. Do NOT use a free VPN provider because they face even stronger financial temptations to sell your information. If you use a VPN, you are effectively giving that company the same level of insight into your online life as your ISP. So pay for one, and check out their policies on what they do with the data they build on you."}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Use a different search engine."}]},{type:"text",value:"\n"},{type:"element",tagName:"blockquote",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Google offers a wonderful service, but everything you type in its search box is logged and connected to you in as many ways as possible. It is then sold on."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"So why not use a different search engine? "},{type:"element",tagName:"a",properties:{href:"https://duck.co/help/desktop/adding-duckduckgo-to-your-browser"},children:[{type:"text",value:"DuckDuckGo"}]},{type:"text",value:" is an awesome search engine with NO user data logging.This Qoura answer tells more about "},{type:"element",tagName:"a",properties:{href:"https://duck.co/help/company/advertising-and-affiliates"},children:[{type:"text",value:"features of DuckDuckGo"}]},{type:"text",value:"."}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Getting rid of some trackers from your site"}]},{type:"text",value:"\n"},{type:"element",tagName:"ol",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"ajax.cloudflare.com"}]},{type:"text",value:" "}]},{type:"text",value:"\n"},{type:"element",tagName:"blockquote",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"inherent on website’s hosted by Cloudflare’s DNS."}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"graph.facebook.com"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"blockquote",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"active when Facebook’s developer services (for eg: FB Comments plugin) are loading on a webpage."}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"clients6.google.com"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"blockquote",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"active when webpages directly call Google servers for Javascript codes."}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"fonts.gstatic.com"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"blockquote",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"active when Google fonts are called for CSS scripts."}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"www.linkedin.com"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"blockquote",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"active when there are links to linkedin in the webpage."}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{
type:"text",value:"Tracking the trackers"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"\n  "},{type:"element",tagName:"a",properties:{className:["gatsby-resp-image-link"],href:"/static/lightbeam-1fdfb5677533396590d134f0fb556663-437b4.png",style:"display: block",target:"_blank",rel:["noopener"]},children:[{type:"text",value:"\n  \n  "},{type:"element",tagName:"span",properties:{className:["gatsby-resp-image-wrapper"],style:"position: relative; display: block; ; max-width: 800px; margin-left: auto; margin-right: auto;"},children:[{type:"text",value:"\n    "},{type:"element",tagName:"span",properties:{className:["gatsby-resp-image-background-image"],style:"padding-bottom: 74.94824016563147%; position: relative; bottom: 0; left: 0; background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAIAAABr+ngCAAAACXBIWXMAAAsSAAALEgHS3X78AAACoklEQVQoz2NgYWY2MTNbvHK1mqqqto4OMzOzp6enn59fVFSUjIwMIyMjUMTb29vMzIyBgQHIZWJiYkAGvLy86mpqIiIiLCwsTk5OlZWV5eXlra2tYWFh3Nzc/AICkVFRSUlJHBwcQMWioqKcnJwQg0A6dXR0gObx8fEBhUxMTJqamvbu3TtnzhxLSyshAf7+yZNnLFzEyc4OlAW6RUZaWkhICGqtra1tYmJSYUF+dFSUkqIi0CqgCzdsWN/e3i4rI5ORmhoTG6urpwdRrKympmdqyszIyMPDIygoyCAnJycuIZGbnVVRXhERGQ10qoGBQUpKSn5BQUJs7KxJk7Jy87w8PYFOBXqKjZ2dlYNDWICvqrTQw8MT4XMRUTFndy9vL6/s7OyysrLq6uqEhMQdu3fPnTdPX19PVlZWXl5eS1MTqFJcXCzI309DA8Rm4OLiCgwMBAaJtZVVfl5+XV1dVlYWkNvV1TV/3rwjp8/n5hesW78uPj5eTV0NbhkowIBAQUEhPz+vo6Pz+rUr69au9fcPCA4OAgbY8uXLOzs76xubli9Zemz/gdT0NEVFRaB6JjCAahYWFk5MTGxoaIiJiVFXVwcGIdAhN27cmDt3rr6+vr29nZ+vb3RkVHZOjoqKCsJOOAB6yc7OTkpKChiN9vb2QGe3tbV1dHT4+/u7ubkBkwA7O7ukpCQDLgD0OTDOgdr27Nnj4OBgZWXl4eGhpKQEZLi6ukLSAhZtEGcAdfr4+AA9GR0dDfQbMGKAxgFTY0RExIH9+4EJw8jQMDYmBt3ZEA4/P39CQkJpaSkwbcPTsKebW0hwcEVFpYWFhaKCfG11NZCB3eVA/VpaWsBkAwlSIGluZqapqQlMc5BwBnobGLpYwgwrUNfQACVDmAPR9AAA3NCs8gGM4TkAAAAASUVORK5CYII='); background-size: cover; display: block;"},children:[{type:"text",value:"\n      "},{type:"element",tagName:"img",properties:{className:["gatsby-resp-image-image"],style:"width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px transparent;",alt:"image",title:"",src:"/static/lightbeam-1fdfb5677533396590d134f0fb556663-48538.png",srcSet:["/static/lightbeam-1fdfb5677533396590d134f0fb556663-bed0f.png 200w","/static/lightbeam-1fdfb5677533396590d134f0fb556663-5fd34.png 400w","/static/lightbeam-1fdfb5677533396590d134f0fb556663-48538.png 800w","/static/lightbeam-1fdfb5677533396590d134f0fb556663-437b4.png 966w"],sizes:["(max-width:","800px)","100vw,","800px"]},children:[]},{type:"text",value:"\n    "}]},{type:"text",value:"\n  "}]},{type:"text",value:"\n  \n  "}]},{type:"text",value:"\n    "}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:" Lightbeam from "},{type:"element",tagName:"a",properties:{href:"https://www.mozilla.org/"},children:[{type:"text",value:"Mozilla"}]},{type:"text",value:" is privacy browser extension helps you discover who’s tracking you online while you browse the web. "}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:" You can get it "},{type:"element",tagName:"a",properties:{href:"https://addons.mozilla.org/en-US/firefox/addon/lightbeam/"},children:[{type:"text",value:"here"}]},{type:"text",value:"."}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Some links"}]},{type:"text",value:"\n"},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"a",properties:{href:"https://www.theatlantic.com/technology/archive/2018/12/facebooks-failures-and-also-its-problems-leaking-data/578599/"},children:[{type:"text",value:"Facebook’s data exchange"}]}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"a",properties:{href:"randomwalker.info/publications/webtap-chapter.pdf"},children:[{type:"text",value:"The WebTAP Project"}]}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"a",properties:{href:"www.franziroesner.com/pdf/webtracking-NSDI2012.pdf"},children:[{type:"text",value:"Third-party tracking on the web"}]}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"a",properties:{href:"https://learning.mozilla.org/en-US/activities/privacy-basics/"},children:[{type:"text",value:"Mozilla Privacy Basics"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{align:"center"},children:[{type:"text",value:" "},{type:"element",tagName:"font",properties:{size:3},children:[{type:"text",value:" Stay safe and make the internet a healthier place! "}]}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"}]}],data:{quirksMode:!1}},fields:{slug:"/breaking_free/",prefix:"2019-01-26"},frontmatter:{title:"Breaking Free",subTitle:"no more trackers",cover:{childImageSharp:{resize:{src:"/static/cover-3f22873c66b6ce15b823ecf3742f5dd9-160fa.png"}}}}},author:{id:"/home/brute4s99/DEV/repos/blog/content/parts/author.md absPath of file >>> MarkdownRemark",html:"<p>I’m currently learning more about programming practices and AI/ML/DL</p>"},footnote:{id:"/home/brute4s99/DEV/repos/blog/content/parts/footnote.md absPath of file >>> MarkdownRemark",html:'<ul>\n<li>based on a GatsbyJS starter by <a href="https://github.com/greglobinski">Greg Lobinski</a> |\nModded on Arch 🐧 Linux with 💙 by <a href="https://github.com/brute4s99">Piyush Aggarwal</a> |\nGatsbyJS, ReactJs, CSS inside!</li>\n</ul>'}},pathContext:{slug:"/breaking_free/"}}}});
//# sourceMappingURL=path---breaking-free-728569ac09d52ff0d22a.js.map