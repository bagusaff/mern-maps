(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{33:function(e,t,a){e.exports=a(45)},38:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(29),c=a.n(l),o=(a(38),a(13)),u=a(9),i=a.n(u),s=a(11),m=a(10),p=a(17),d=a(47),b=a(48),h=(a(26),"localhost"===window.location.hostname?"http://localhost:5000":"https://travel.now.sh");a(27).config();function f(){return g.apply(this,arguments)}function g(){return(g=Object(s.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(h,"/api/address"));case 2:return t=e.sent,e.abrupt("return",t.json());case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function E(e){return x.apply(this,arguments)}function x(){return(x=Object(s.a)(i.a.mark((function e(t){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(h,"/api/address"),{method:"POST",headers:{"content-type":"application/json","x-api-key":"".concat("tekajea2017")},body:JSON.stringify(t)});case 2:return a=e.sent,e.abrupt("return",a.json());case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var y=a(31),v=a(46);a(27).config();var j=function(e){var t=e.location,a=e.onClose,l=Object(n.useState)(!1),c=Object(m.a)(l,2),o=c[0],u=c[1],p=Object(n.useState)(""),d=Object(m.a)(p,2),h=d[0],f=d[1],g=Object(y.a)(),x=g.register,j=g.handleSubmit,k=(g.getValues,function(){var e=Object(s.a)(i.a.mark((function e(n){var r,l,c,o,s,m,p;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=document.querySelector('input[type="file"]'),l=r.files,void 0===n.files&&null===n.files&&""===n.files){e.next=18;break}return u(!0),(c=new FormData).append("file",l[0]),c.append("upload_preset","khrnwn24"),o={method:"POST",body:c},e.next=9,fetch("https://api.cloudinary.com/v1_1/".concat("petatkj","/image/upload"),o);case 9:return s=e.sent,e.next=12,s.json();case 12:m=e.sent,p=m.secure_url,n.image=p,u(!1),e.next=19;break;case 18:n.image="";case 19:return e.prev=19,u(!0),n.latitude=t.latitude,n.longitude=t.longitude,e.next=25,E(n);case 25:e.sent,a(),e.next=34;break;case 29:e.prev=29,e.t0=e.catch(19),console.log(e.t0),f(e.t0.message),u(!1);case 34:case"end":return e.stop()}}),e,null,[[19,29]])})));return function(t){return e.apply(this,arguments)}}());return r.a.createElement(v.a,{onSubmit:j(k),className:"entry-form"},h?r.a.createElement("h3",{className:"error"},h," "):null,r.a.createElement(v.a.Group,{controlId:"formAbsen"},r.a.createElement(v.a.Label,null,"Absen"),r.a.createElement(v.a.Control,{type:"number",min:"0",max:"32",name:"absen",ref:x,required:!0}),r.a.createElement(v.a.Text,{className:"text-muted"},"Nomor absen kamu dulu waktu di kelas.")),r.a.createElement(v.a.Group,{controlId:"formDeskripsi"},r.a.createElement(v.a.Label,null,"Petunjuk Arah"),r.a.createElement(v.a.Control,{as:"textarea",rows:3,placeholder:"petunjuk arah",name:"description",ref:x})),r.a.createElement(v.a.Group,null,r.a.createElement(v.a.File,{name:"image",type:"file",label:"Foto Rumah",ref:x})),r.a.createElement(b.a,{type:"submit",disabled:o},o?"Memproses...":"Tambahkan alamat rumah"))},k=function(){var e=Object(n.useState)([]),t=Object(m.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)({}),c=Object(m.a)(l,2),u=c[0],h=c[1],g=Object(n.useState)(null),E=Object(m.a)(g,2),x=E[0],y=E[1],v=Object(n.useState)({width:"100vw",height:"100vh",latitude:-7.7915842,longitude:110.339104,zoom:10}),k=Object(m.a)(v,2),w=k[0],O=k[1],C=function(){var e=Object(s.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f();case 2:t=e.sent,r(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){C()}),[]);return n.createElement(p.c,Object.assign({},w,{mapStyle:"mapbox://styles/bagusamrullah/ckfgrpsh52apl19p8iq4zqhcb",mapboxApiAccessToken:"pk.eyJ1IjoiYmFndXNhbXJ1bGxhaCIsImEiOiJja2ZncWQ3NnAwMTVlMnhxdDdnbjNuMjNtIn0.4dwMZgrC2JzZnd9xd39Qbg",onViewportChange:function(e){return O(e)},onDblClick:function(e){var t=Object(m.a)(e.lngLat,2),a=t[0],n=t[1];y({latitude:n,longitude:a})}}),a.map((function(e){return n.createElement(n.Fragment,{key:e._id},n.createElement(p.a,{latitude:e.latitude,longitude:e.longitude},n.createElement("div",{onClick:function(){return h(Object(o.a)({},e._id,!0))}},n.createElement("svg",{className:"marker yellow",style:{height:"".concat(2*w.zoom,"px"),width:"".concat(2*w.zoom,"px")},version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 512 512"},n.createElement("g",null,n.createElement("g",null,n.createElement("path",{d:"M256,0C153.755,0,70.573,83.182,70.573,185.426c0,126.888,165.939,313.167,173.004,321.035\r c6.636,7.391,18.222,7.378,24.846,0c7.065-7.868,173.004-194.147,173.004-321.035C441.425,83.182,358.244,0,256,0z M256,278.719\r c-51.442,0-93.292-41.851-93.292-93.293S204.559,92.134,256,92.134s93.291,41.851,93.291,93.293S307.441,278.719,256,278.719z"})))),n.createElement("p",{className:"number"},e.absen))),u[e._id]?n.createElement(p.b,{latitude:e.latitude,longitude:e.longitude,closeButton:!1,closeOnClick:!1,dynamicPosition:!0,onClose:function(){return h({})},anchor:"top"},n.createElement("div",null,n.createElement(d.a,{style:{width:"18rem"}},n.createElement("button",{className:"mapboxgl-popup-close-button",type:"button"},"\xd7"),e.image&&n.createElement(d.a.Img,{variant:"top",src:e.image,alt:e.absen}),n.createElement(d.a.Body,null,n.createElement(d.a.Title,null,n.createElement("b",null,e.absen)),n.createElement(d.a.Text,null,e.description),n.createElement(b.a,{variant:"primary",target:"_blank",href:"https://maps.google.com?q="+e.latitude+","+e.longitude},"Open Google Maps")))),n.createElement("p",{className:"credit"},"Made by bagus amrullah with",n.createElement("span",{role:"img","aria-label":"love"},"\u2764\ufe0f"))):null)})),x?n.createElement(n.Fragment,null,n.createElement(p.a,{latitude:x.latitude,longitude:x.longitude},n.createElement("div",null,n.createElement("svg",{className:"marker red",style:{height:"".concat(3*w.zoom,"px"),width:"".concat(3*w.zoom,"px")},version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 512 512"},n.createElement("g",null,n.createElement("g",null,n.createElement("path",{d:"M256,0C153.755,0,70.573,83.182,70.573,185.426c0,126.888,165.939,313.167,173.004,321.035\r c6.636,7.391,18.222,7.378,24.846,0c7.065-7.868,173.004-194.147,173.004-321.035C441.425,83.182,358.244,0,256,0z M256,278.719\r c-51.442,0-93.292-41.851-93.292-93.293S204.559,92.134,256,92.134s93.291,41.851,93.291,93.293S307.441,278.719,256,278.719z"})))))),n.createElement(p.b,{latitude:x.latitude,longitude:x.longitude,closeButton:!0,closeOnClick:!1,dynamicPosition:!0,onClose:function(){return y(null)},anchor:"top"},n.createElement("div",{className:"popup"},n.createElement(j,{onClose:function(){y(null),C()},location:x})))):null)};c.a.render(r.a.createElement(k,null),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.6f3116bb.chunk.js.map