(this["webpackJsonpnotes-app"]=this["webpackJsonpnotes-app"]||[]).push([[0],{39:function(e,t,n){e.exports=n(49)},49:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),c=n(8),r=n.n(c),o=n(14),i=n(18);var u=function(){return l.a.createElement("header",null,l.a.createElement("h1",null,"My Notepad"))},m=n(31),s=n.n(m),f=n(64);var E=function(e){return l.a.createElement("div",{className:"note"},l.a.createElement("h1",null,e.title),l.a.createElement("p",null,e.content),l.a.createElement(f.a,{onClick:function(){e.onDelete(e.id)},"aria-label":"delete"},l.a.createElement(s.a,{fontSize:"small"})))},p=n(7),d=n(32),v=n(34),b=n(67),h=n(69),j=n(68),O=n(33),k=n.n(O),y=n(66);var C=function(e){var t=Object(v.a)({palette:{primary:y.a}}),n=Object(a.useState)(!1),c=Object(i.a)(n,2),r=c[0],o=c[1],u=Object(a.useState)({title:"",content:""}),m=Object(i.a)(u,2),s=m[0],f=m[1];function E(e){var t=e.target,n=t.name,a=t.value;f((function(e){return Object(d.a)({},e,Object(p.a)({},n,a))}))}return l.a.createElement("div",null,l.a.createElement("form",{className:"create-note"},r&&l.a.createElement("input",{onChange:E,name:"title",placeholder:"Title",value:s.title}),l.a.createElement("textarea",{onChange:E,onClick:function(){o(!0)},name:"content",placeholder:"Write here...",rows:r?3:1,value:s.content}),l.a.createElement(b.a,{theme:t},l.a.createElement(h.a,{in:r},l.a.createElement(j.a,{size:"small",color:"primary",type:"submit",onClick:function(t){e.onAdd(s),f({title:"",content:""}),t.preventDefault()}},l.a.createElement(k.a,null))))))};var g=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),n=t[0],c=t[1];function r(e){setTimeout((function(){c((function(t){return t.filter((function(t,n){return n!==e}))}))}),300)}return l.a.createElement("div",null,l.a.createElement(u,null),l.a.createElement("div",{className:"notes-collection"},l.a.createElement(C,{onAdd:function(e){c((function(t){return[].concat(Object(o.a)(t),[e])}))}}),n.map((function(e,t){return l.a.createElement(E,{title:e.title,content:e.content,key:t,id:t,onDelete:r})}))))};r.a.render(l.a.createElement(g,null),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.b37320d0.chunk.js.map