"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[677],{3677:function(n,t,e){e.r(t),e.d(t,{default:function(){return T}});var r=e(2791),i=e(3433),a=e(4942),o=e(3366),c=e(7462),u=e(3733),s=e(1184),l=e(8519),p=e(4419),f=e(6934),d=e(1402),m=e(3967);var v=r.createContext(),x=e(5878),h=e(7225);function g(n){return(0,h.Z)("MuiGrid",n)}var b=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],w=(0,x.Z)("MuiGrid",["root","container","item","zeroMinWidth"].concat((0,i.Z)([0,1,2,3,4,5,6,7,8,9,10].map((function(n){return"spacing-xs-".concat(n)}))),(0,i.Z)(["column-reverse","column","row-reverse","row"].map((function(n){return"direction-xs-".concat(n)}))),(0,i.Z)(["nowrap","wrap-reverse","wrap"].map((function(n){return"wrap-xs-".concat(n)}))),(0,i.Z)(b.map((function(n){return"grid-xs-".concat(n)}))),(0,i.Z)(b.map((function(n){return"grid-sm-".concat(n)}))),(0,i.Z)(b.map((function(n){return"grid-md-".concat(n)}))),(0,i.Z)(b.map((function(n){return"grid-lg-".concat(n)}))),(0,i.Z)(b.map((function(n){return"grid-xl-".concat(n)}))))),Z=e(184),k=["className","columns","columnSpacing","component","container","direction","item","rowSpacing","spacing","wrap","zeroMinWidth"];function S(n){var t=parseFloat(n);return"".concat(t).concat(String(n).replace(String(t),"")||"px")}function j(n){var t=n.breakpoints,e=n.values,r="";Object.keys(e).forEach((function(n){""===r&&0!==e[n]&&(r=n)}));var i=Object.keys(t).sort((function(n,e){return t[n]-t[e]}));return i.slice(0,i.indexOf(r))}var y=(0,f.ZP)("div",{name:"MuiGrid",slot:"Root",overridesResolver:function(n,t){var e=n.ownerState,r=e.container,a=e.direction,o=e.item,c=e.spacing,u=e.wrap,s=e.zeroMinWidth,l=e.breakpoints,p=[];r&&(p=function(n,t){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!n||n<=0)return[];if("string"===typeof n&&!Number.isNaN(Number(n))||"number"===typeof n)return[e["spacing-xs-".concat(String(n))]];var r=[];return t.forEach((function(t){var i=n[t];Number(i)>0&&r.push(e["spacing-".concat(t,"-").concat(String(i))])})),r}(c,l,t));var f=[];return l.forEach((function(n){var r=e[n];r&&f.push(t["grid-".concat(n,"-").concat(String(r))])})),[t.root,r&&t.container,o&&t.item,s&&t.zeroMinWidth].concat((0,i.Z)(p),["row"!==a&&t["direction-xs-".concat(String(a))],"wrap"!==u&&t["wrap-xs-".concat(String(u))]],f)}})((function(n){var t=n.ownerState;return(0,c.Z)({boxSizing:"border-box"},t.container&&{display:"flex",flexWrap:"wrap",width:"100%"},t.item&&{margin:0},t.zeroMinWidth&&{minWidth:0},"wrap"!==t.wrap&&{flexWrap:t.wrap})}),(function(n){var t=n.theme,e=n.ownerState,r=(0,s.P$)({values:e.direction,breakpoints:t.breakpoints.values});return(0,s.k9)({theme:t},r,(function(n){var t={flexDirection:n};return 0===n.indexOf("column")&&(t["& > .".concat(w.item)]={maxWidth:"none"}),t}))}),(function(n){var t=n.theme,e=n.ownerState,r=e.container,i=e.rowSpacing,o={};if(r&&0!==i){var c,u=(0,s.P$)({values:i,breakpoints:t.breakpoints.values});"object"===typeof u&&(c=j({breakpoints:t.breakpoints.values,values:u})),o=(0,s.k9)({theme:t},u,(function(n,e){var r,i=t.spacing(n);return"0px"!==i?(0,a.Z)({marginTop:"-".concat(S(i))},"& > .".concat(w.item),{paddingTop:S(i)}):null!=(r=c)&&r.includes(e)?{}:(0,a.Z)({marginTop:0},"& > .".concat(w.item),{paddingTop:0})}))}return o}),(function(n){var t=n.theme,e=n.ownerState,r=e.container,i=e.columnSpacing,o={};if(r&&0!==i){var c,u=(0,s.P$)({values:i,breakpoints:t.breakpoints.values});"object"===typeof u&&(c=j({breakpoints:t.breakpoints.values,values:u})),o=(0,s.k9)({theme:t},u,(function(n,e){var r,i=t.spacing(n);return"0px"!==i?(0,a.Z)({width:"calc(100% + ".concat(S(i),")"),marginLeft:"-".concat(S(i))},"& > .".concat(w.item),{paddingLeft:S(i)}):null!=(r=c)&&r.includes(e)?{}:(0,a.Z)({width:"100%",marginLeft:0},"& > .".concat(w.item),{paddingLeft:0})}))}return o}),(function(n){var t,e=n.theme,r=n.ownerState;return e.breakpoints.keys.reduce((function(n,i){var a={};if(r[i]&&(t=r[i]),!t)return n;if(!0===t)a={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if("auto"===t)a={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{var o=(0,s.P$)({values:r.columns,breakpoints:e.breakpoints.values}),u="object"===typeof o?o[i]:o;if(void 0===u||null===u)return n;var l="".concat(Math.round(t/u*1e8)/1e6,"%"),p={};if(r.container&&r.item&&0!==r.columnSpacing){var f=e.spacing(r.columnSpacing);if("0px"!==f){var d="calc(".concat(l," + ").concat(S(f),")");p={flexBasis:d,maxWidth:d}}}a=(0,c.Z)({flexBasis:l,flexGrow:0,maxWidth:l},p)}return 0===e.breakpoints.values[i]?Object.assign(n,a):n[e.breakpoints.up(i)]=a,n}),{})}));var W=function(n){var t=n.classes,e=n.container,r=n.direction,a=n.item,o=n.spacing,c=n.wrap,u=n.zeroMinWidth,s=n.breakpoints,l=[];e&&(l=function(n,t){if(!n||n<=0)return[];if("string"===typeof n&&!Number.isNaN(Number(n))||"number"===typeof n)return["spacing-xs-".concat(String(n))];var e=[];return t.forEach((function(t){var r=n[t];if(Number(r)>0){var i="spacing-".concat(t,"-").concat(String(r));e.push(i)}})),e}(o,s));var f=[];s.forEach((function(t){var e=n[t];e&&f.push("grid-".concat(t,"-").concat(String(e)))}));var d={root:["root",e&&"container",a&&"item",u&&"zeroMinWidth"].concat((0,i.Z)(l),["row"!==r&&"direction-xs-".concat(String(r)),"wrap"!==c&&"wrap-xs-".concat(String(c))],f)};return(0,p.Z)(d,g,t)},N=r.forwardRef((function(n,t){var e=(0,d.Z)({props:n,name:"MuiGrid"}),i=(0,m.Z)().breakpoints,a=(0,l.Z)(e),s=a.className,p=a.columns,f=a.columnSpacing,x=a.component,h=void 0===x?"div":x,g=a.container,b=void 0!==g&&g,w=a.direction,S=void 0===w?"row":w,j=a.item,N=void 0!==j&&j,M=a.rowSpacing,C=a.spacing,z=void 0===C?0:C,G=a.wrap,P=void 0===G?"wrap":G,E=a.zeroMinWidth,D=void 0!==E&&E,O=(0,o.Z)(a,k),B=M||z,I=f||z,L=r.useContext(v),T=b?p||12:L,$={},_=(0,c.Z)({},O);i.keys.forEach((function(n){null!=O[n]&&($[n]=O[n],delete _[n])}));var F=(0,c.Z)({},a,{columns:T,container:b,direction:S,item:N,rowSpacing:B,columnSpacing:I,wrap:P,zeroMinWidth:D,spacing:z},$,{breakpoints:i.keys}),R=W(F);return(0,Z.jsx)(v.Provider,{value:T,children:(0,Z.jsx)(y,(0,c.Z)({ownerState:F,className:(0,u.Z)(R.root,s),as:h,ref:t},_))})})),M=N,C=e(5527),z=e(890),G=e(9434),P=e(3661),E=function(n){var t=n.contact,e=n.onDeleteContact;return(0,Z.jsxs)("li",{children:[t.name,": ",t.number,(0,Z.jsx)("button",{onClick:function(){return e(t.id)},children:"Delete"})]})};var D=function(){var n=(0,G.I0)(),t=(0,G.v9)(P.DI);return(0,r.useEffect)((function(){n((0,P.yF)())}),[n]),(0,Z.jsx)("ul",{children:t.map((function(t){return(0,Z.jsx)(E,{contact:t,onDeleteContact:function(){return e=t.id,void n((0,P.GK)(e));var e}},t.id)}))})},O=e(9439);var B=function(){var n=(0,G.I0)(),t=(0,r.useState)(""),e=(0,O.Z)(t,2),i=e[0],a=e[1],o=(0,r.useState)(""),c=(0,O.Z)(o,2),u=c[0],s=c[1];return(0,Z.jsxs)("form",{onSubmit:function(t){t.preventDefault(),i&&u?(n((0,P.uK)({name:i,number:u})),a(""),s("")):alert("Please fill in all fields")},children:[(0,Z.jsxs)("label",{children:["Name:",(0,Z.jsx)("input",{type:"text",value:i,onChange:function(n){a(n.target.value)}})]}),(0,Z.jsxs)("label",{children:["Number:",(0,Z.jsx)("input",{type:"text",value:u,onChange:function(n){s(n.target.value)}})]}),(0,Z.jsx)("button",{type:"submit",children:"Add Contact"})]})},I=function(n){return n.contacts.filter},L=function(){var n=(0,G.v9)(I),t=(0,G.I0)();return(0,Z.jsxs)("label",{children:["Find contacts by name",(0,Z.jsx)("input",{type:"text",value:n,onChange:function(n){t((0,P.a8)(n.target.value))}})]})},T=function(){return(0,Z.jsxs)(M,{container:!0,spacing:2,children:[(0,Z.jsx)(M,{item:!0,xs:12,children:(0,Z.jsx)(C.Z,{children:(0,Z.jsx)(z.Z,{variant:"h4",align:"center",children:"Phonebook"})})}),(0,Z.jsx)(M,{item:!0,xs:12,children:(0,Z.jsx)(C.Z,{children:(0,Z.jsx)(B,{})})}),(0,Z.jsx)(M,{item:!0,xs:12,children:(0,Z.jsx)(C.Z,{children:(0,Z.jsx)(L,{})})}),(0,Z.jsx)(M,{item:!0,xs:12,children:(0,Z.jsx)(C.Z,{children:(0,Z.jsx)(D,{})})})]})}},3967:function(n,t,e){e.d(t,{Z:function(){return o}});e(2791);var r=e(3459),i=e(4591),a=e(988);function o(){var n=(0,r.Z)(i.Z);return n[a.Z]||n}}}]);
//# sourceMappingURL=677.b3469bb7.chunk.js.map