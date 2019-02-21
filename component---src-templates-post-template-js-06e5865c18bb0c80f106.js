webpackJsonp([0xb48ce3051dcc],{182:function(e,t,n){"use strict";function r(e){var t=e.alt,n=e.children,r=e.childrenClassName,o=e.classes,f=e.className,d=e.component,c=e.imgProps,p=e.sizes,m=e.src,h=e.srcSet,g=(0,u.default)(e,["alt","children","childrenClassName","classes","className","component","imgProps","sizes","src","srcSet"]),y=(0,l.default)(o.root,(0,i.default)({},o.colorDefault,n&&!m&&!h),f),b=null;if(m||h)b=s.default.createElement("img",(0,a.default)({alt:t,src:m,srcSet:h,sizes:p,className:o.img},c));else if(r&&s.default.isValidElement(n)){var v=(0,l.default)(r,n.props.className);b=s.default.cloneElement(n,{className:v})}else b=n;return s.default.createElement(d,(0,a.default)({className:y},g),b)}var o=n(3);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var a=o(n(4)),i=o(n(12)),u=o(n(6)),s=o(n(1)),l=(o(n(2)),o(n(5))),f=o(n(16)),d=function(e){return{root:{position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(20),borderRadius:"50%",overflow:"hidden",userSelect:"none"},colorDefault:{color:e.palette.background.default,backgroundColor:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[600]},img:{width:"100%",height:"100%",textAlign:"center",objectFit:"cover"}}};t.styles=d,r.propTypes={},r.defaultProps={component:"div"};var c=(0,f.default)(d,{name:"MuiAvatar"})(r);t.default=c},183:function(e,t,n){"use strict";var r=n(3);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o.default}});var o=r(n(182))},703:function(e,t){},965:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function s(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function l(e,t){var n=t.onNewComment,r=t.language,o=s(t,["onNewComment","language"]);for(var a in o)e.page[a]=o[a];e.language=r,n&&(e.callbacks={onNewComment:[n]})}Object.defineProperty(t,"__esModule",{value:!0});var f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},d=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(1),p=r(c),m=n(2),h=r(m),g=["shortname","identifier","title","url","category_id","onNewComment","language"],y=!1,b=function(e){function t(){return a(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u(t,e),d(t,[{key:"componentDidMount",value:function(){this.loadDisqus()}},{key:"componentDidUpdate",value:function(){this.loadDisqus()}},{key:"shouldComponentUpdate",value:function(e,t){return e.identifier!==this.props.identifier}},{key:"render",value:function(){var e=this,t=Object.keys(this.props).reduce(function(t,n){return g.some(function(e){return e===n})?t:f({},t,o({},n,e.props[n]))},{});return p.default.createElement("div",t,p.default.createElement("div",{id:"disqus_thread"}))}},{key:"addDisqusScript",value:function(){if(!y){var e=this.disqus=document.createElement("script"),t=document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0];e.async=!0,e.type="text/javascript",e.src="//"+this.props.shortname+".disqus.com/embed.js",t.appendChild(e),y=!0}}},{key:"loadDisqus",value:function(){var e=this,t={};g.forEach(function(n){"shortname"!==n&&e.props[n]&&(t[n]=e.props[n])}),"undefined"!=typeof DISQUS?DISQUS.reset({reload:!0,config:function(){l(this,t),this.page.url=this.page.url.replace(/#/,"")+"#!newthread"}}):(window.disqus_config=function(){l(this,t)},this.addDisqusScript())}}]),t}(p.default.Component);b.displayName="DisqusThread",b.propTypes={id:h.default.string,shortname:h.default.string.isRequired,identifier:h.default.string,title:h.default.string,url:h.default.string,category_id:h.default.string,onNewComment:h.default.func,language:h.default.string},b.defaultProps={url:"undefined"==typeof window?null:window.location.href},t.default=b},966:function(e,t,n){"use strict";e.exports=n(965)},568:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=n(1),a=r(o),i=n(2),u=r(i),s=n(136),l=r(s),f=n(572),d=r(f),c=n(204),p=r(c),m=n(571),h=r(m),g=function(e){var t=e.post,n=e.author,r=e.slug,o=((t||{}).frontmatter,((t||{}).frontmatter||{}).title),i=((t||{}).frontmatter||{}).subTitle,u=((t||{}).fields||{}).prefix,s=(t||{}).html;(t||{}).htmlAst;return a.default.createElement(l.default,null,a.default.createElement(d.default,{title:o,subTitle:i,date:u}),a.default.createElement(p.default,{html:s}),a.default.createElement(h.default,{author:n,post:t,slug:r}))};g.propTypes={post:u.default.object.isRequired,author:u.default.object.isRequired,slug:u.default.string.isRequired},t.default=g,e.exports=t.default},569:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=n(1),a=r(o),i=n(2),u=r(i),s=n(9),l=r(s),f=n(183),d=r(f),c=n(47),p=r(c),m=n(176),h=r(m),g=function(e){var t,n;return{author:(t={margin:"3em 0 0",padding:"3em 0 0",borderTop:"1px solid #ddd",display:"flex",flexDirection:"column",alignItems:"center","& a":{color:e.base.colors.link}},t["@media (min-width: "+e.mediaQueryTresholds.M+"px)"]={flexDirection:"row",justifyContent:"center"},t),avatar:(n={margin:"0 1em 1em",borderRadius:"75% 65%",width:"60px",height:"60px",border:"1px solid #ddd",flexShrink:0},n["@media (min-width: "+e.mediaQueryTresholds.M+"px)"]={margin:"0 1em 0"},n),box:{display:"flex",flexDirction:"column",minHeight:"50px",alignItems:"center"}}},y=function(e){var t=e.classes,n=e.author;return a.default.createElement("div",{className:t.author},a.default.createElement(d.default,{src:h.default,className:t.avatar,alt:p.default.authorName}),a.default.createElement("div",{className:t.box,dangerouslySetInnerHTML:{__html:n.html}}))};y.propTypes={classes:u.default.object.isRequired,author:u.default.object.isRequired},t.default=(0,l.default)(g)(y),e.exports=t.default},570:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=n(966),a=r(o),i=n(1),u=r(i),s=n(2),l=r(s),f=n(9),d=r(f),c=n(47),p=r(c);n(99);var m=function(e){return{postComments:{margin:"3em 0 0",padding:"3em 0 0",borderTop:"1px solid #ddd"}}},h=function(e){var t=e.classes,n=e.slug,r=e.post;return u.default.createElement("div",{id:"post-comments",className:t.postComments},u.default.createElement(a.default,{shortname:"brute4s99",identifier:r.title,title:r.title,url:""+p.default.siteUrl+n,category_id:r.category_id}))};h.propTypes={classes:l.default.object.isRequired,post:l.default.object.isRequired,slug:l.default.string.isRequired,theme:l.default.object.isRequired},t.default=(0,d.default)(m)(h),e.exports=t.default},571:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=n(1),a=r(o),i=n(2),u=r(i),s=n(9),l=r(s),f=n(208),d=r(f),c=n(569),p=r(c),m=n(570),h=r(m);n(99);var g=function(e){return{footer:{color:e.main.colors.footer,fontSize:e.main.fonts.footer.size+"em",lineHeight:e.main.fonts.footer.lineHeight,"& p":{margin:0}}}},y=(0,d.default)(function(){return new Promise(function(e){n.e(1,function(t){e(n(573))})}).then(function(e){return e}).catch(function(e){})}),b=function(e){var t=e.classes,n=e.author,r=e.post,o=e.slug;return a.default.createElement("footer",{className:t.footer},a.default.createElement(y,{post:r,slug:o}),a.default.createElement(p.default,{author:n}),a.default.createElement(h.default,{post:r,slug:o}))};b.propTypes={classes:u.default.object.isRequired,author:u.default.object.isRequired,post:u.default.object.isRequired,slug:u.default.string.isRequired},t.default=(0,l.default)(g)(b),e.exports=t.default},572:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=n(1),a=r(o),i=n(2),u=r(i),s=n(9),l=r(s),f=function(e){var t,n;return{header:{margin:"0 0 3em"},title:(t={color:e.main.colors.title,fontSize:e.main.fonts.title.size+"em",letterSpacing:"-0.04em",fontWeight:e.main.fonts.title.weight,lineHeight:e.main.fonts.title.lineHeight,margin:"0 0 0.4em"},t["@media (min-width: "+e.mediaQueryTresholds.M+"px)"]={fontSize:e.main.fonts.title.sizeM+"em"},t["@media (min-width: "+e.mediaQueryTresholds.L+"px)"]={fontSize:e.main.fonts.title.sizeL+"em",letterSpacing:"-0.05em"},t),subTitle:(n={color:e.main.colors.subTitle,fontSize:e.main.fonts.subTitle.size+"em",lineHeight:e.main.fonts.subTitle.lineHeight,fontWeight:e.main.fonts.subTitle.weight},n["@media (min-width: "+e.mediaQueryTresholds.M+"px)"]={fontSize:e.main.fonts.subTitle.sizeM+"em"},n["@media (min-width: "+e.mediaQueryTresholds.L+"px)"]={fontSize:e.main.fonts.subTitle.sizeL+"em"},n),meta:{fontSize:e.main.fonts.meta.size+"em",fontWeight:e.main.fonts.meta.weight,color:e.main.colors.meta}}},d=function(e){function t(e){var t=new Date(e).toUTCString(),n=t.split(" ").slice(0,4).join(" ");return n}var n=e.classes,r=e.title,o=e.subTitle,i=e.date;return a.default.createElement("header",{className:n.header},a.default.createElement("h1",{className:n.title},r),a.default.createElement("h2",{className:n.subTitle},o),a.default.createElement("div",{className:n.meta},t(i)))};d.propTypes={classes:u.default.object.isRequired,title:u.default.string.isRequired,subTitle:u.default.string,date:u.default.string.isRequired},t.default=(0,l.default)(f)(d),e.exports=t.default},574:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=n(568);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r(o).default}}),e.exports=t.default},207:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function u(e,t){var n=function(n){function r(){var e,t,i;o(this,r);for(var u=arguments.length,s=Array(u),l=0;l<u;l++)s[l]=arguments[l];return e=t=a(this,n.call.apply(n,[this].concat(s))),t.state={Component:null},i=e,a(t,i)}return i(r,n),r.prototype.componentDidMount=function(){var t=this;this.state.Component||e().then(function(e){t.setState({Component:e})})},r.prototype.render=function(){var e=this.state.Component;return e?l.default.createElement(e,this.props):t?t:l.default.createElement("div",null,"Loading...")},r}(l.default.Component);return n}t.__esModule=!0,t.default=u;var s=n(1),l=r(s);e.exports=t.default},208:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=n(207);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r(o).default}}),e.exports=t.default},176:function(e,t,n){e.exports=n.p+"static/avatar.af847138.jpg"},591:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.postQuery=void 0;var u=n(1),s=r(u),l=n(2),f=r(l),d=n(137),c=r(d),p=n(34),m=n(31),h=n(54),g=n(574),y=r(g),b=n(311),v=r(b),_=n(206),w=r(_);n(99),n(703);var j=function(e){function t(){var n,r,i;o(this,t);for(var u=arguments.length,s=Array(u),l=0;l<u;l++)s[l]=arguments[l];return n=r=a(this,e.call.apply(e,[this].concat(s))),r.moveNavigatorAside=h.moveNavigatorAside.bind(r),i=n,a(r,i)}return i(t,e),t.prototype.componentDidMount=function(){"is-featured"===this.props.navigatorPosition&&this.moveNavigatorAside()},t.prototype.render=function(){var e=this.props,t=e.data,n=e.pathContext;return s.default.createElement(c.default,null,s.default.createElement(y.default,{post:t.post,slug:n.slug,author:t.author}),s.default.createElement(v.default,{footnote:t.footnote}),s.default.createElement(w.default,{data:t.post}))},t}(s.default.Component);j.propTypes={data:f.default.object.isRequired,pathContext:f.default.object.isRequired,navigatorPosition:f.default.string.isRequired,setNavigatorPosition:f.default.func.isRequired,isWideScreen:f.default.bool.isRequired};var x=function(e,t){return{navigatorPosition:e.navigatorPosition,isWideScreen:e.isWideScreen}},E={setNavigatorPosition:m.setNavigatorPosition,setNavigatorShape:m.setNavigatorShape};t.default=(0,p.connect)(x,E)(j);t.postQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-templates-post-template-js-06e5865c18bb0c80f106.js.map