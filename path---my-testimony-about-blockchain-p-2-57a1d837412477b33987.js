webpackJsonp([0xe35f76713ab],{755:function(e,t){e.exports={data:{post:{id:"/home/brute4s99/DEV/repos/blogOG/content/posts/2018-07-17--my_testimony_about_blockchain_p2/index.md absPath of file >>> MarkdownRemark",html:'<h3>They’ll what ?</h3>\n<p>They’ll fork off of the network.</p>\n<p>A byproduct of distributed consensus, forks happen anytime two miners find a block at nearly the same time. The ambiguity is resolved when subsequent blocks are added to one, making it the longest chain, while the other block gets “orphaned” (or abandoned) by the network.</p>\n<p>But forks also can be willingly introduced to the network. This occurs when developers seek to change the rules the software uses to decide whether a transaction is valid or not. Forks can be classified into two- hard and soft forks; both have different implications for the network and ecosystem.</p>\n<p>Hard forks are a permanent divergence in the the block chain, commonly occurs when non-upgraded nodes can’t validate blocks created by upgraded nodes that follow newer consensus rules.</p>\n<p>Soft forks are a temporary divergence in the block chain caused by non-upgraded nodes not following new consensus rules</p>\n<p>Miners can add blocks to the blockchain so long as every other node on the network agrees that their block fits the consensus rules and accepts it.</p>\n<h3>The Block Header</h3>\n<p>So what do these miners do exactly? They hash the block header. It is 80 bytes of data that will ultimately be hashed.</p>\n<p>The header contains this info:</p>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Byte Size</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>Version</td>\n<td>4</td>\n<td>Block version number</td>\n</tr>\n<tr>\n<td>Previous Hash</td>\n<td>32</td>\n<td>This is the previous block header</td>\n</tr>\n<tr>\n<td>Merkle Root</td>\n<td>32</td>\n<td>The hash based on all of the transactions in the block</td>\n</tr>\n<tr>\n<td>Time</td>\n<td>4</td>\n<td>Current time stamp as seconds (unix format)</td>\n</tr>\n<tr>\n<td>Bits</td>\n<td>4</td>\n<td>Target value in compact form</td>\n</tr>\n<tr>\n<td>Nonce</td>\n<td>4</td>\n<td>User adjusted value starting from 0</td>\n</tr>\n</tbody>\n</table>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/genesis-0bda9e75380eaa14878242e627d8c28c-231f4.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 800px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 56.470588235294116%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAAA7EAAAOxAGVKw4bAAACDUlEQVQoz21QzWsTQRTfqxQ/KBQ8FHryoDRpqBgIOfkXGEyy1UoFD4X+DV4kxqgoggWxXksa27QHgyBKkaQBMYrQJBbU0FC1msRudnd2Z/Z7dmec3URR8cePx5v33m/eBzd++e6phcWTC4tjs7eP8jeO8bkj6dzhZHZ05uZIMjty/vqhRGaUz43P3Zm4cu/E/P3j8w8mbj0fyzw9e63AlWofnrzaKVa2i9VGsdpc22quVurMWQ/85c13hXI9X24UtpqMK+X6cqW58vrj2pvWi+1djlLqYQdbOiUuHcDDPinxfdehxLMpZXR+WUwGdYQjhOq6IYqiipBpWo6DJaAI/b7vYyzLQIVI0w2oacinzl7Muq6HMfY7m6YJIXRdFwcAEAlAsGzLDUKuR3Y6cn1fbHyX6x1F0m1K/NYs6YsN0wAADMTMKsH3tm17nucv4ZGNT+KjxkGt1X6/91WB6mDoodgM8LuzwsZAyHEcNxCzzrVv8O2X3st2a7PVagOFBvcYii3rbzEAbC03AMtijzT25Wq7U/rc3djr7araP2IG0w/5yxCIoGkaQcXwrP8FW4qDUBcEqds9ECUgiUAUwY+e0BckUVQYZVn9k0BWNWQYhmUYJkIaN3vpajx+MRpNxGKpeDQxPXXuTISPnU5HIhciIX46lJwMp0JhPjyVDoVS0ehcNrOUz5ceLhVXHz/7CfpwIF9Y0QybAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px transparent;"\n        alt="genesis"\n        title=""\n        src="/static/genesis-0bda9e75380eaa14878242e627d8c28c-48538.png"\n        srcset="/static/genesis-0bda9e75380eaa14878242e627d8c28c-bed0f.png 200w,\n/static/genesis-0bda9e75380eaa14878242e627d8c28c-5fd34.png 400w,\n/static/genesis-0bda9e75380eaa14878242e627d8c28c-48538.png 800w,\n/static/genesis-0bda9e75380eaa14878242e627d8c28c-b70ec.png 1200w,\n/static/genesis-0bda9e75380eaa14878242e627d8c28c-231f4.png 1360w"\n        sizes="(max-width: 800px) 100vw, 800px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p align=\'center\'>A snap of the latest block at Bitcoin blockchain at the time of writing.</a></p>\n<h2>How would the consensus deem a mined block as accepted?</h2>\n<p>See the <strong>Bits</strong> part ? It is the Integer (Base 10) representation of the <em>target</em> that is to be achieved by the miners. The <em>target</em> is the 256 bit hash sum of the block header. It is the MAXIMUM value acceptable by the consensus for the hash.</p>\n<h3>MAXIMUM value?</h3>\n<p>I thought you’d never ask! See the <strong>nonce</strong> part in the block header? Yup, miners need to start all the way from 0 (some may try to skip values, completely up to miner) to the number that when used in the block header, yields a hash sum below the target. See the nonce in the latest block image? The miner who successfully relayed this value to the nodes received the price money ie 12.5 BTC! That’s a lot of work and indeed a lot of bucks!</p>\n<p>People buy special hardware (recent scarcity of GPUs? Curse those miners) and even computers specially built for this purpose! Ever heard of <a href="https://www.trymining.com/pages/asic-vs-gpu">ASICs</a>?</p>\n<p>As it stands, mining on your won, on your single PC is almost dead. The process of finding blocks is now so crowded and the difficulty of finding a block so high that it would take over an year to generate any coins on an average high-end gaming system. While you could simply set a machine aside and have it run the algorithms endlessly, the energy cost and equipment degradation and breakdown will eventually cost more than the actual bitcoins are worth.</p>\n<p><strong>Pooled mining</strong>, however, is far more lucrative. Using a service  you can split the work among a ground of people. Using this equation:</p>\n<blockquote>\n<p>(12.5 BTC + block fees – 2% fee) * (shares found by user’s workers) / (total shares in current round)</p>\n</blockquote>\n<p>Putting it simply, it is basically how the system works. You work for shares in a block and when complete you get a percentage of the block reward based on the number of workers alongside you. More the people in pool, higher the chances of rewards.</p>\n<h2>Types of Blockchains in use</h2>\n<p>Any blockchain can be classified into any one of these categories-</p>\n<h3>Public Blockchain</h3>\n<p>The most basic of all blockchain concepts. This is the blockchain everyone uses out there.</p>\n<p>The most basic features of this bockchain are –</p>\n<blockquote>\n<p>Anyone can run a BTC/LTC full node and start mining.<br>\nAnyone can make transactions on the BTC/LTC chain.<br>\nAnyone can review/audit the blockchain in a Blockchain explorer.</p>\n</blockquote>\n<p>Example: <a href="http://bitcoin.org/">Bitcoin</a>, <a href="https://litecoin.org/">Litecoin</a> etc.</p>\n<h3>Private Blockchain</h3>\n<p>Private blockchain as its name suggests is a private property of an individual or an organization. Unlike public blockchain, here there is actually someone in charge who looks after important things such as read/write or whom to selectively give access to read or vice versa. Here the consensus is achieved on the whims of the central authority who can give mining rights to anyone or not at all!</p>\n<p>Example: <a href="https://www.multichain.com/">Bankchain</a></p>\n<h3>Consortium Blockchain</h3>\n<p>This type of blockchain tries to remove the sole autonomy which gets vested in just one entity by using private blockchains.</p>\n<p>So here you have multiple authorities instead of just one. Basically, you have a group of companies or representative individuals coming together and making decisions for the benefit of the whole network. Such groups are also called consortiums or a federation; ergo the name <strong>consortium</strong> or <strong>federated blockchain</strong>.</p>\n<p>For example, let’s suppose you have a consortium of world’s top 20 financial institutes out of which you could decide that if a transaction or block is voted/verified by more than 15 institutions, only then does it get added to the blockchain.</p>\n<p>Example: <a href="https://www.r3.com/">r3</a>, <a href="http://energyweb.org/">EWF</a></p>\n<p>In fact, the idea that cryptographic keys and shared ledgers can incentivize users to secure and formalize digital relationships has imaginations running wild. Everyone from governments to IT firms to banks is seeking to build this transaction layer.</p>\n<p>Authentication and authorization, vital to digital transactions, are established as a result of the configuration of blockchain technology. The idea can be applied to any need for a trustworthy system of record.</p>',htmlAst:{type:"root",children:[{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"They’ll what ?"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"They’ll fork off of the network."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"A byproduct of distributed consensus, forks happen anytime two miners find a block at nearly the same time. The ambiguity is resolved when subsequent blocks are added to one, making it the longest chain, while the other block gets “orphaned” (or abandoned) by the network."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"But forks also can be willingly introduced to the network. This occurs when developers seek to change the rules the software uses to decide whether a transaction is valid or not. Forks can be classified into two- hard and soft forks; both have different implications for the network and ecosystem."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Hard forks are a permanent divergence in the the block chain, commonly occurs when non-upgraded nodes can’t validate blocks created by upgraded nodes that follow newer consensus rules."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Soft forks are a temporary divergence in the block chain caused by non-upgraded nodes not following new consensus rules"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Miners can add blocks to the blockchain so long as every other node on the network agrees that their block fits the consensus rules and accepts it."}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"The Block Header"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"So what do these miners do exactly? They hash the block header. It is 80 bytes of data that will ultimately be hashed."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"The header contains this info:"}]},{type:"text",value:"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"},{type:"element",tagName:"table",properties:{},children:[{type:"element",tagName:"thead",properties:{},children:[{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"th",properties:{},children:[{type:"text",value:"Name"}]},{type:"element",tagName:"th",properties:{},children:[{type:"text",value:"Byte Size"}]},{type:"element",tagName:"th",properties:{},children:[{type:"text",value:"Description"}]}]}]},{type:"element",tagName:"tbody",properties:{},children:[{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"Version"}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"4"}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"Block version number"}]}]},{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"Previous Hash"}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"32"}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"This is the previous block header"}]}]},{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"Merkle Root"}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"32"}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"The hash based on all of the transactions in the block"}]}]},{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"Time"}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"4"}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"Current time stamp as seconds (unix format)"}]}]},{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"Bits"}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"4"}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"Target value in compact form"}]}]},{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"Nonce"}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"4"}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"User adjusted value starting from 0"}]}]}]}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"\n  "},{type:"element",tagName:"a",properties:{className:["gatsby-resp-image-link"],href:"/static/genesis-0bda9e75380eaa14878242e627d8c28c-231f4.png",style:"display: block",target:"_blank",rel:["noopener"]},children:[{type:"text",value:"\n  \n  "},{type:"element",tagName:"span",properties:{className:["gatsby-resp-image-wrapper"],style:"position: relative; display: block; ; max-width: 800px; margin-left: auto; margin-right: auto;"},children:[{type:"text",value:"\n    "},{type:"element",tagName:"span",properties:{className:["gatsby-resp-image-background-image"],style:"padding-bottom: 56.470588235294116%; position: relative; bottom: 0; left: 0; background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAAA7EAAAOxAGVKw4bAAACDUlEQVQoz21QzWsTQRTfqxQ/KBQ8FHryoDRpqBgIOfkXGEyy1UoFD4X+DV4kxqgoggWxXksa27QHgyBKkaQBMYrQJBbU0FC1msRudnd2Z/Z7dmec3URR8cePx5v33m/eBzd++e6phcWTC4tjs7eP8jeO8bkj6dzhZHZ05uZIMjty/vqhRGaUz43P3Zm4cu/E/P3j8w8mbj0fyzw9e63AlWofnrzaKVa2i9VGsdpc22quVurMWQ/85c13hXI9X24UtpqMK+X6cqW58vrj2pvWi+1djlLqYQdbOiUuHcDDPinxfdehxLMpZXR+WUwGdYQjhOq6IYqiipBpWo6DJaAI/b7vYyzLQIVI0w2oacinzl7Muq6HMfY7m6YJIXRdFwcAEAlAsGzLDUKuR3Y6cn1fbHyX6x1F0m1K/NYs6YsN0wAADMTMKsH3tm17nucv4ZGNT+KjxkGt1X6/91WB6mDoodgM8LuzwsZAyHEcNxCzzrVv8O2X3st2a7PVagOFBvcYii3rbzEAbC03AMtijzT25Wq7U/rc3djr7araP2IG0w/5yxCIoGkaQcXwrP8FW4qDUBcEqds9ECUgiUAUwY+e0BckUVQYZVn9k0BWNWQYhmUYJkIaN3vpajx+MRpNxGKpeDQxPXXuTISPnU5HIhciIX46lJwMp0JhPjyVDoVS0ehcNrOUz5ceLhVXHz/7CfpwIF9Y0QybAAAAAElFTkSuQmCC'); background-size: cover; display: block;"},children:[{type:"text",value:"\n      "},{type:"element",tagName:"img",properties:{className:["gatsby-resp-image-image"],style:"width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px transparent;",alt:"genesis",title:"",src:"/static/genesis-0bda9e75380eaa14878242e627d8c28c-48538.png",srcSet:["/static/genesis-0bda9e75380eaa14878242e627d8c28c-bed0f.png 200w","/static/genesis-0bda9e75380eaa14878242e627d8c28c-5fd34.png 400w","/static/genesis-0bda9e75380eaa14878242e627d8c28c-48538.png 800w","/static/genesis-0bda9e75380eaa14878242e627d8c28c-b70ec.png 1200w","/static/genesis-0bda9e75380eaa14878242e627d8c28c-231f4.png 1360w"],sizes:["(max-width:","800px)","100vw,","800px"]},children:[]},{type:"text",value:"\n    "}]},{type:"text",value:"\n  "}]},{type:"text",value:"\n  \n  "}]},{type:"text",value:"\n    "}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{align:"center"},children:[{type:"text",value:"A snap of the latest block at Bitcoin blockchain at the time of writing."}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"How would the consensus deem a mined block as accepted?"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"See the "},{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"Bits"}]},{type:"text",value:" part ? It is the Integer (Base 10) representation of the "},{type:"element",tagName:"em",properties:{},children:[{type:"text",value:"target"}]},{type:"text",value:" that is to be achieved by the miners. The "},{type:"element",tagName:"em",properties:{},children:[{type:"text",value:"target"}]},{type:"text",value:" is the 256 bit hash sum of the block header. It is the MAXIMUM value acceptable by the consensus for the hash."}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"MAXIMUM value?"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"I thought you’d never ask! See the "},{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"nonce"}]},{type:"text",value:" part in the block header? Yup, miners need to start all the way from 0 (some may try to skip values, completely up to miner) to the number that when used in the block header, yields a hash sum below the target. See the nonce in the latest block image? The miner who successfully relayed this value to the nodes received the price money ie 12.5 BTC! That’s a lot of work and indeed a lot of bucks!"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"People buy special hardware (recent scarcity of GPUs? Curse those miners) and even computers specially built for this purpose! Ever heard of "},{type:"element",tagName:"a",properties:{href:"https://www.trymining.com/pages/asic-vs-gpu"},children:[{type:"text",value:"ASICs"}]},{type:"text",value:"?"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"As it stands, mining on your won, on your single PC is almost dead. The process of finding blocks is now so crowded and the difficulty of finding a block so high that it would take over an year to generate any coins on an average high-end gaming system. While you could simply set a machine aside and have it run the algorithms endlessly, the energy cost and equipment degradation and breakdown will eventually cost more than the actual bitcoins are worth."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"Pooled mining"}]},{type:"text",value:", however, is far more lucrative. Using a service  you can split the work among a ground of people. Using this equation:"}]},{type:"text",value:"\n"},{type:"element",tagName:"blockquote",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"(12.5 BTC + block fees – 2% fee) * (shares found by user’s workers) / (total shares in current round)"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Putting it simply, it is basically how the system works. You work for shares in a block and when complete you get a percentage of the block reward based on the number of workers alongside you. More the people in pool, higher the chances of rewards."}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Types of Blockchains in use"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Any blockchain can be classified into any one of these categories-"}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Public Blockchain"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"The most basic of all blockchain concepts. This is the blockchain everyone uses out there."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"The most basic features of this bockchain are –"}]},{type:"text",value:"\n"},{type:"element",tagName:"blockquote",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Anyone can run a BTC/LTC full node and start mining."},{type:"element",tagName:"br",properties:{},children:[]},{type:"text",value:"\nAnyone can make transactions on the BTC/LTC chain."},{type:"element",tagName:"br",properties:{},children:[]},{type:"text",value:"\nAnyone can review/audit the blockchain in a Blockchain explorer."}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Example: "},{type:"element",tagName:"a",properties:{href:"http://bitcoin.org/"},children:[{type:"text",value:"Bitcoin"}]},{type:"text",value:", "},{type:"element",tagName:"a",properties:{href:"https://litecoin.org/"},children:[{type:"text",value:"Litecoin"}]},{type:"text",value:" etc."}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Private Blockchain"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Private blockchain as its name suggests is a private property of an individual or an organization. Unlike public blockchain, here there is actually someone in charge who looks after important things such as read/write or whom to selectively give access to read or vice versa. Here the consensus is achieved on the whims of the central authority who can give mining rights to anyone or not at all!"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Example: "},{type:"element",tagName:"a",properties:{href:"https://www.multichain.com/"},children:[{type:"text",value:"Bankchain"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Consortium Blockchain"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"This type of blockchain tries to remove the sole autonomy which gets vested in just one entity by using private blockchains."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"So here you have multiple authorities instead of just one. Basically, you have a group of companies or representative individuals coming together and making decisions for the benefit of the whole network. Such groups are also called consortiums or a federation; ergo the name "},{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"consortium"}]},{type:"text",value:" or "},{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"federated blockchain"}]},{type:"text",value:"."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"For example, let’s suppose you have a consortium of world’s top 20 financial institutes out of which you could decide that if a transaction or block is voted/verified by more than 15 institutions, only then does it get added to the blockchain."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Example: "},{type:"element",tagName:"a",properties:{href:"https://www.r3.com/"},children:[{type:"text",value:"r3"}]},{type:"text",value:", "},{type:"element",tagName:"a",properties:{href:"http://energyweb.org/"},children:[{type:"text",value:"EWF"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"In fact, the idea that cryptographic keys and shared ledgers can incentivize users to secure and formalize digital relationships has imaginations running wild. Everyone from governments to IT firms to banks is seeking to build this transaction layer."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Authentication and authorization, vital to digital transactions, are established as a result of the configuration of blockchain technology. The idea can be applied to any need for a trustworthy system of record."}]}],data:{quirksMode:!1}},fields:{slug:"/my_testimony_about_blockchain_p2/",prefix:"2018-07-17"},frontmatter:{title:"My Testimony about Blockchain - Part 2",subTitle:"from Genesis block to blockchain and everything in between!",cover:{childImageSharp:{resize:{src:"/static/cover-0a42be4ad5d5b398e3ac890bbc3f6baf-ada8c.jpg"}}}}},author:{id:"/home/brute4s99/DEV/repos/blogOG/content/parts/author.md absPath of file >>> MarkdownRemark",html:"<p>I’m currently learning more about programming practices and AI/ML/DL</p>"},footnote:{id:"/home/brute4s99/DEV/repos/blogOG/content/parts/footnote.md absPath of file >>> MarkdownRemark",html:'<ul>\n<li>based on a GatsbyJS starter by <a href="https://github.com/greglobinski">Greg Lobinski</a> |\nModded on Arch 🐧 Linux with 💙 by <a href="https://github.com/brute4s99">Piyush Aggarwal</a> |\nGatsbyJS, ReactJs, CSS inside!</li>\n</ul>'}},pathContext:{slug:"/my_testimony_about_blockchain_p2/"}}}});
//# sourceMappingURL=path---my-testimony-about-blockchain-p-2-57a1d837412477b33987.js.map