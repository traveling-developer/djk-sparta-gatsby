"use strict";(self.webpackChunkdjk_sparta_noris=self.webpackChunkdjk_sparta_noris||[]).push([[865],{7644:function(e,a,t){var i=t(7462),n=t(5987),r=t(7294),s=t(5505),o=t(4621),l=r.forwardRef((function(e,a){var t=e.classes,o=e.className,l=e.component,c=void 0===l?"div":l,d=(0,n.Z)(e,["classes","className","component"]);return r.createElement(c,(0,i.Z)({className:(0,s.Z)(t.root,o),ref:a},d))}));a.Z=(0,o.Z)({root:{padding:16,"&:last-child":{paddingBottom:24}}},{name:"MuiCardContent"})(l)},5823:function(e,a,t){var i=t(7462),n=t(5987),r=t(7294),s=t(5505),o=t(4621),l=t(453),c=r.forwardRef((function(e,a){var t=e.action,o=e.avatar,c=e.classes,d=e.className,m=e.component,p=void 0===m?"div":m,u=e.disableTypography,g=void 0!==u&&u,v=e.subheader,f=e.subheaderTypographyProps,h=e.title,b=e.titleTypographyProps,Z=(0,n.Z)(e,["action","avatar","classes","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"]),x=h;null==x||x.type===l.Z||g||(x=r.createElement(l.Z,(0,i.Z)({variant:o?"body2":"h5",className:c.title,component:"span",display:"block"},b),x));var k=v;return null==k||k.type===l.Z||g||(k=r.createElement(l.Z,(0,i.Z)({variant:o?"body2":"body1",className:c.subheader,color:"textSecondary",component:"span",display:"block"},f),k)),r.createElement(p,(0,i.Z)({className:(0,s.Z)(c.root,d),ref:a},Z),o&&r.createElement("div",{className:c.avatar},o),r.createElement("div",{className:c.content},x,k),t&&r.createElement("div",{className:c.action},t))}));a.Z=(0,o.Z)({root:{display:"flex",alignItems:"center",padding:16},avatar:{flex:"0 0 auto",marginRight:16},action:{flex:"0 0 auto",alignSelf:"flex-start",marginTop:-8,marginRight:-8},content:{flex:"1 1 auto"},title:{},subheader:{}},{name:"MuiCardHeader"})(c)},5148:function(e,a,t){var i=t(7462),n=t(5987),r=t(7294),s=t(5505),o=t(4621),l=["video","audio","picture","iframe","img"],c=r.forwardRef((function(e,a){var t=e.children,o=e.classes,c=e.className,d=e.component,m=void 0===d?"div":d,p=e.image,u=e.src,g=e.style,v=(0,n.Z)(e,["children","classes","className","component","image","src","style"]),f=-1!==l.indexOf(m),h=!f&&p?(0,i.Z)({backgroundImage:'url("'.concat(p,'")')},g):g;return r.createElement(m,(0,i.Z)({className:(0,s.Z)(o.root,c,f&&o.media,-1!=="picture img".indexOf(m)&&o.img),ref:a,style:h,src:f?p||u:void 0},v),t)}));a.Z=(0,o.Z)({root:{display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},media:{width:"100%"},img:{objectFit:"cover"}},{name:"MuiCardMedia"})(c)},1293:function(e,a,t){var i=t(7462),n=t(5987),r=t(4942),s=t(7294),o=t(5505),l=t(4621),c=t(1664),d=s.forwardRef((function(e,a){var t=e.classes,r=e.className,l=e.component,d=void 0===l?"div":l,m=e.disableGutters,p=void 0!==m&&m,u=e.fixed,g=void 0!==u&&u,v=e.maxWidth,f=void 0===v?"lg":v,h=(0,n.Z)(e,["classes","className","component","disableGutters","fixed","maxWidth"]);return s.createElement(d,(0,i.Z)({className:(0,o.Z)(t.root,r,g&&t.fixed,p&&t.disableGutters,!1!==f&&t["maxWidth".concat((0,c.Z)(String(f)))]),ref:a},h))}));a.Z=(0,l.Z)((function(e){return{root:(0,r.Z)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",paddingLeft:e.spacing(2),paddingRight:e.spacing(2),display:"block"},e.breakpoints.up("sm"),{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}),disableGutters:{paddingLeft:0,paddingRight:0},fixed:Object.keys(e.breakpoints.values).reduce((function(a,t){var i=e.breakpoints.values[t];return 0!==i&&(a[e.breakpoints.up(t)]={maxWidth:i}),a}),{}),maxWidthXs:(0,r.Z)({},e.breakpoints.up("xs"),{maxWidth:Math.max(e.breakpoints.values.xs,444)}),maxWidthSm:(0,r.Z)({},e.breakpoints.up("sm"),{maxWidth:e.breakpoints.values.sm}),maxWidthMd:(0,r.Z)({},e.breakpoints.up("md"),{maxWidth:e.breakpoints.values.md}),maxWidthLg:(0,r.Z)({},e.breakpoints.up("lg"),{maxWidth:e.breakpoints.values.lg}),maxWidthXl:(0,r.Z)({},e.breakpoints.up("xl"),{maxWidth:e.breakpoints.values.xl})}}),{name:"MuiContainer"})(d)},7124:function(e,a,t){t.r(a),t.d(a,{default:function(){return m}});var i=t(1293),n=t(5420),r=t(5148),s=t(5823),o=t(7644),l=t(6911),c=t(7294),d=t(3539);function m(e){var a=e.data.allContentfulNews.nodes[0],t=e.data.image.childImageSharp.fluid;return c.createElement(d.Z,{pageTitle:a.title},c.createElement(i.Z,{maxWidth:"lg",className:"newsContainer"},c.createElement(n.Z,{className:"overview-card",elevation:3},c.createElement(r.Z,{className:"newsImage"},c.createElement(l.Z,{className:"imageHeader",fluid:t,alt:"Default Image",placeholder:"blurred"})),c.createElement(s.Z,{className:"overview-card-title",title:a.title,disableTypography:!0}),c.createElement(o.Z,{className:"overview-card-content"},a.content.content))))}}}]);
//# sourceMappingURL=component---src-pages-news-contentful-news-contentfulid-js-e72cd1ef39efd37024c3.js.map