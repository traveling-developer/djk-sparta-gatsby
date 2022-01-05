"use strict";(self.webpackChunkdjk_sparta_noris=self.webpackChunkdjk_sparta_noris||[]).push([[607],{5510:function(e,t,a){a.d(t,{Z:function(){return f}});var n=a(7462),r=a(3366),o=a(7294),i=a(5505),s=a(9408),d=a(8348),c=a(7761),u=a(8416);function l(e){return(0,u.Z)("MuiCardContent",e)}(0,a(2194).Z)("MuiCardContent",["root"]);var m=a(5893),p=["className","component"],v=(0,d.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:function(e,t){return t.root}})((function(){return{padding:16,"&:last-child":{paddingBottom:24}}})),f=o.forwardRef((function(e,t){var a=(0,c.Z)({props:e,name:"MuiCardContent"}),o=a.className,d=a.component,u=void 0===d?"div":d,f=(0,r.Z)(a,p),Z=(0,n.Z)({},a,{component:u}),h=function(e){var t=e.classes;return(0,s.Z)({root:["root"]},l,t)}(Z);return(0,m.jsx)(v,(0,n.Z)({as:u,className:(0,i.Z)(h.root,o),ownerState:Z,ref:t},f))}))},5234:function(e,t,a){a.d(t,{Z:function(){return C}});var n=a(4942),r=a(3366),o=a(7462),i=a(7294),s=a(5505),d=a(9408),c=a(9308),u=a(7761),l=a(8348),m=a(8416);function p(e){return(0,m.Z)("MuiCardHeader",e)}var v=(0,a(2194).Z)("MuiCardHeader",["root","avatar","action","content","title","subheader"]),f=a(5893),Z=["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"],h=(0,l.ZP)("div",{name:"MuiCardHeader",slot:"Root",overridesResolver:function(e,t){var a;return(0,o.Z)((a={},(0,n.Z)(a,"& .".concat(v.title),t.title),(0,n.Z)(a,"& .".concat(v.subheader),t.subheader),a),t.root)}})({display:"flex",alignItems:"center",padding:16}),g=(0,l.ZP)("div",{name:"MuiCardHeader",slot:"Avatar",overridesResolver:function(e,t){return t.avatar}})({display:"flex",flex:"0 0 auto",marginRight:16}),x=(0,l.ZP)("div",{name:"MuiCardHeader",slot:"Action",overridesResolver:function(e,t){return t.action}})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),b=(0,l.ZP)("div",{name:"MuiCardHeader",slot:"Content",overridesResolver:function(e,t){return t.content}})({flex:"1 1 auto"}),C=i.forwardRef((function(e,t){var a=(0,u.Z)({props:e,name:"MuiCardHeader"}),n=a.action,i=a.avatar,l=a.className,m=a.component,v=void 0===m?"div":m,C=a.disableTypography,y=void 0!==C&&C,M=a.subheader,w=a.subheaderTypographyProps,k=a.title,N=a.titleTypographyProps,R=(0,r.Z)(a,Z),W=(0,o.Z)({},a,{component:v,disableTypography:y}),S=function(e){var t=e.classes;return(0,d.Z)({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},p,t)}(W),j=k;null==j||j.type===c.Z||y||(j=(0,f.jsx)(c.Z,(0,o.Z)({variant:i?"body2":"h5",className:S.title,component:"span",display:"block"},N,{children:j})));var P=M;return null==P||P.type===c.Z||y||(P=(0,f.jsx)(c.Z,(0,o.Z)({variant:i?"body2":"body1",className:S.subheader,color:"text.secondary",component:"span",display:"block"},w,{children:P}))),(0,f.jsxs)(h,(0,o.Z)({className:(0,s.Z)(S.root,l),as:v,ref:t,ownerState:W},R,{children:[i&&(0,f.jsx)(g,{className:S.avatar,ownerState:W,children:i}),(0,f.jsxs)(b,{className:S.content,ownerState:W,children:[j,P]}),n&&(0,f.jsx)(x,{className:S.action,ownerState:W,children:n})]}))}))},7221:function(e,t,a){a.d(t,{Z:function(){return h}});var n=a(3366),r=a(7462),o=a(7294),i=a(5505),s=a(9408),d=a(7761),c=a(8348),u=a(8416);function l(e){return(0,u.Z)("MuiCardMedia",e)}(0,a(2194).Z)("MuiCardMedia",["root","media","img"]);var m=a(5893),p=["children","className","component","image","src","style"],v=(0,c.ZP)("div",{name:"MuiCardMedia",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState,n=a.isMediaComponent,r=a.isImageComponent;return[t.root,n&&t.media,r&&t.img]}})((function(e){var t=e.ownerState;return(0,r.Z)({display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},t.isMediaComponent&&{width:"100%"},t.isImageComponent&&{objectFit:"cover"})})),f=["video","audio","picture","iframe","img"],Z=["picture","img"],h=o.forwardRef((function(e,t){var a=(0,d.Z)({props:e,name:"MuiCardMedia"}),o=a.children,c=a.className,u=a.component,h=void 0===u?"div":u,g=a.image,x=a.src,b=a.style,C=(0,n.Z)(a,p),y=-1!==f.indexOf(h),M=!y&&g?(0,r.Z)({backgroundImage:'url("'.concat(g,'")')},b):b,w=(0,r.Z)({},a,{component:h,isMediaComponent:y,isImageComponent:-1!==Z.indexOf(h)}),k=function(e){var t=e.classes,a={root:["root",e.isMediaComponent&&"media",e.isImageComponent&&"img"]};return(0,s.Z)(a,l,t)}(w);return(0,m.jsx)(v,(0,r.Z)({className:(0,i.Z)(k.root,c),as:h,role:!y&&g?"img":void 0,ref:t,style:M,ownerState:w,src:y?g||x:void 0},C,{children:o}))}))},5616:function(e,t,a){a.d(t,{Z:function(){return h}});var n=a(4942),r=a(3366),o=a(7462),i=a(7294),s=a(5505),d=a(9408),c=a(7761),u=a(8348),l=a(8416);function m(e){return(0,l.Z)("MuiContainer",e)}(0,a(2194).Z)("MuiContainer",["root","disableGutters","fixed","maxWidthXs","maxWidthSm","maxWidthMd","maxWidthLg","maxWidthXl"]);var p=a(9240),v=a(5893),f=["className","component","disableGutters","fixed","maxWidth"],Z=(0,u.ZP)("div",{name:"MuiContainer",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[t.root,t["maxWidth".concat((0,p.Z)(String(a.maxWidth)))],a.fixed&&t.fixed,a.disableGutters&&t.disableGutters]}})((function(e){var t=e.theme,a=e.ownerState;return(0,o.Z)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!a.disableGutters&&(0,n.Z)({paddingLeft:t.spacing(2),paddingRight:t.spacing(2)},t.breakpoints.up("sm"),{paddingLeft:t.spacing(3),paddingRight:t.spacing(3)}))}),(function(e){var t=e.theme;return e.ownerState.fixed&&Object.keys(t.breakpoints.values).reduce((function(e,a){var n=t.breakpoints.values[a];return 0!==n&&(e[t.breakpoints.up(a)]={maxWidth:"".concat(n).concat(t.breakpoints.unit)}),e}),{})}),(function(e){var t=e.theme,a=e.ownerState;return(0,o.Z)({},"xs"===a.maxWidth&&(0,n.Z)({},t.breakpoints.up("xs"),{maxWidth:Math.max(t.breakpoints.values.xs,444)}),a.maxWidth&&"xs"!==a.maxWidth&&(0,n.Z)({},t.breakpoints.up(a.maxWidth),{maxWidth:"".concat(t.breakpoints.values[a.maxWidth]).concat(t.breakpoints.unit)}))})),h=i.forwardRef((function(e,t){var a=(0,c.Z)({props:e,name:"MuiContainer"}),n=a.className,i=a.component,u=void 0===i?"div":i,l=a.disableGutters,h=void 0!==l&&l,g=a.fixed,x=void 0!==g&&g,b=a.maxWidth,C=void 0===b?"lg":b,y=(0,r.Z)(a,f),M=(0,o.Z)({},a,{component:u,disableGutters:h,fixed:x,maxWidth:C}),w=function(e){var t=e.classes,a=e.fixed,n=e.disableGutters,r=e.maxWidth,o={root:["root",r&&"maxWidth".concat((0,p.Z)(String(r))),a&&"fixed",n&&"disableGutters"]};return(0,d.Z)(o,m,t)}(M);return(0,v.jsx)(Z,(0,o.Z)({as:u,ownerState:M,className:(0,s.Z)(w.root,n),ref:t},y))}))},9914:function(e,t,a){a.r(t),a.d(t,{default:function(){return l}});var n=a(5616),r=a(664),o=a(7221),i=a(5234),s=a(5510),d=a(6911),c=a(7294),u=a(1849);function l(e){var t=e.data.allContentfulNews.nodes[0],a=e.data.image.childImageSharp.fluid;return c.createElement(u.Z,{pageTitle:t.title},c.createElement(n.Z,{maxWidth:"lg",className:"newsContainer"},c.createElement(r.Z,{className:"overview-card",elevation:3},c.createElement(o.Z,{className:"newsImage"},c.createElement(d.Z,{className:"imageHeader",fluid:a,alt:"Default Image",placeholder:"blurred"})),c.createElement(i.Z,{className:"overview-card-title",title:t.title,disableTypography:!0}),c.createElement(s.Z,{className:"overview-card-content"},t.content.content))))}}}]);
//# sourceMappingURL=component---src-pages-news-contentful-news-id-js-ae5e2ffc99731fe4267a.js.map