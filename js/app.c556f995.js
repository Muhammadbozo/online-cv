(function(t){function e(e){for(var r,i,s=e[0],l=e[1],d=e[2],u=0,m=[];u<s.length;u++)i=s[u],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&m.push(n[i][0]),n[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);c&&c(e);while(m.length)m.shift()();return o.push.apply(o,d||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],r=!0,s=1;s<a.length;s++){var l=a[s];0!==n[l]&&(r=!1)}r&&(o.splice(e--,1),t=i(i.s=a[0]))}return t}var r={},n={app:0},o=[];function i(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=r,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(a,r,function(e){return t[e]}.bind(null,r));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var d=0;d<s.length;d++)e(s[d]);var c=l;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var r=a("64a9"),n=a.n(r);n.a},5589:function(t,e,a){t.exports=a.p+"img/hover2.ba9c32cc.jpg"},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var r=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("navbar"),a("transition",{attrs:{name:"slide",mode:"out-in"}},[a("router-view")],1)],1)},o=[],i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",[r("b-card",{attrs:{overlay:"","img-src":a("8742"),"img-height":"700","img-alt":"Card Image","text-variant":"white"}},[r("div",{staticClass:"container",staticStyle:{opacity:"1"}},[r("b-jumbotron",{staticClass:"bg-transparent p-3 rounded-lg border border-dark text-center text-dark",staticStyle:{"margin-top":"100px"},attrs:{"text-variant":"black"},scopedSlots:t._u([{key:"header",fn:function(){return[t._v("Muhammad "),r("br"),t._v("\n            Osman")]},proxy:!0},{key:"lead",fn:function(){return[t._v("\n            Hi there, I'm a 22 year old BSC IT Student.\n            "),r("br"),t._v("\n            I created this cv using Node js and it is hosted on Heroku.\n            I put my cv online for your viewing pleasure.\n          ")]},proxy:!0}])},[r("hr",{staticClass:"my-4"}),r("div",{directives:[{name:"b-hover",rawName:"v-b-hover",value:t.handleHover,expression:"handleHover"}]},[r("span",{staticClass:"ml-2"},[r("b-button",{staticClass:"rounded-lg border border-dark ",staticStyle:{border:"5px"},attrs:{variant:"dark",href:"/about"}},[r("router-link",{attrs:{to:"/about"}},[t._v("About")])],1)],1)])])],1)])],1)])},s=[],l={},d=l,c=a("2877"),u=Object(c["a"])(d,i,s,!1,null,null,null),m=u.exports,v=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",[r("b-card",{attrs:{overlay:"","img-src":a("f642"),"img-height":"700","img-alt":"Card Image"}},[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-8 "},[r("b-card",{style:t.myStyle,attrs:{title:"ABOUT ME"}},[r("b-card-text",[t._v("\n                I’m an IT guy who loves building mobile and web\n                applications.I enjoy seeing myself do magic with code and the\n                reactions of the people. Most importantly, I'm always eager to learn new\n                languages/frameworks. I'm originally Potchefstroom. One of my\n                favourite things to do in the world is going to the beach and\n                being surrounded by water.I enjoy hiking occassionally. I also\n                enjoy Travelling, although I haven't YET seen much of the\n                world. Overall I’m passionate about technology and excited\n                about the future.\n              ")]),r("b-card-text",[t._v("Contact Details "),r("br"),r("br"),t._v("\n\n                Muhammadosman924@gmail.com "),r("br"),t._v("\n                You can also contact me on any of the social media links at\n                the bottom")]),r("a",{staticClass:"card-link",attrs:{href:"#"}},[r("router-link",{attrs:{to:"/resume"}},[t._v("VIEW RESUME")])],1)],1)],1),r("div",{staticClass:"col-4"},[r("div",{style:t.myStyle2},[r("b-avatar",{attrs:{size:"10rem"}})],1)])])])])],1)])},y=[],h={data:function(){return{myStyle:{marginTop:"150px",backgroundColor:"#ffffff00"},myStyle2:{marginTop:"150px",marginLeft:"60px"}}}},b=h,p=Object(c["a"])(b,v,y,!1,null,null,null),g=p.exports,f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"fixed-top",style:t.myStyle},[a("b-nav",{attrs:{pills:"",align:"center",sticky:""}},[a("b-nav-item",{staticClass:"bg-transparent rounded-lg border border-dark text-center text-dark",style:t.myStyle2},[a("router-link",{style:t.myStyle3,attrs:{to:"/"}},[t._v("HOME")])],1),a("b-nav-item",{staticClass:"bg-transparent rounded-lg border border-dark text-center text-dark",style:t.myStyle2},[a("router-link",{style:t.myStyle3,attrs:{to:"/about"}},[t._v("ABOUT")])],1),a("b-nav-item",{staticClass:"bg-transparent rounded-lg border border-dark text-center text-dark",style:t.myStyle2},[a("router-link",{style:t.myStyle3,attrs:{to:"/resume"}},[t._v("RESUME")])],1),a("b-nav-item",{staticClass:"bg-transparent rounded-lg border border-dark text-center text-dark",style:t.myStyle2},[a("router-link",{style:t.myStyle3,attrs:{to:"/projects"}},[t._v("PROJECTS")])],1),a("b-nav-item",{staticClass:"bg-transparent rounded-lg border border-dark text-center text-dark",style:t.myStyle2},[a("router-link",{style:t.myStyle3,attrs:{to:"/about"}},[t._v("CONTACT ME")])],1)],1)],1)},x=[],w={data:function(){return{myStyle:{backgroundColor:"#2F4F4F",paddingTop:"10px",paddingBottom:"10px"},myStyle2:{marginRight:"10px"},myStyle3:{color:"white"}}}},C=w,k=Object(c["a"])(C,f,x,!1,null,null,null),S=k.exports,I={components:{Masthead:m,About:g,Navbar:S}},_=I,O=(a("034f"),Object(c["a"])(_,n,o,!1,null,null,null)),j=O.exports,T=a("8c4f"),H=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-4"},[a("div",{style:t.myStyle2},[a("h2",[t._v("EDUCATION")])])]),a("div",{staticClass:"col-8"},[a("div",[a("b-card",{staticClass:"border border-white",style:t.myStyle,attrs:{title:"Card title","sub-title":"Card subtitle"}},[a("b-card-text",[t._v("\n\n              North West university  BSC IT and informatics \n              Student •2017-2020 I learnt a lot during this degree so I\n              won't even try to name everything. I will just list the\n              languages/tools I used. Java; Python; C & C++; SQL; Nodejs;\n               \n              My University experience, My first year at varsity was very challenging. In\n              fact, I even had 2 \"first years\". I spent most of my 1st first\n              year being overwhelmed by the environment, the workload and by\n              the fact that it felt like I was the only one in my class that\n              hadn't done any programming in high school. At some point, I\n              even felt that maybe Tech wasn't for me and that the university\n              had made a mistake accepting me to study BSC IT.\n              However, towards the end of the year, the more I met people who\n              felt the same way I did, the more 'normal' I felt, and the more\n              I was able to overcome my anxieties and perform better in my\n              academics. I had a lot of ups and downs at university, but it was one of the best\n              experiences and learning curves in my life.\n\n            ")]),a("b-card-text",[t._v("A second paragraph of text in the card.")])],1)],1)])]),a("hr"),a("div",{staticClass:"row"},[a("div",{staticClass:"col-4"},[a("div",{style:t.myStyle3},[a("h2",[t._v("WORK")])])]),a("div",{staticClass:"col-8"},[a("div",[a("b-card",{staticClass:"border border-white",attrs:{title:"Card title","sub-title":"Card subtitle"}},[a("b-card-text",[t._v("\n              Not having too much work experience in the IT field , I basically have only practical experience \n             from the work done in University. I do however plan on taking short courses on websites such as udemy,Youtube \n             for the betterment and preperation of my future employment.\n\n            ")]),a("b-card-text",[t._v("A second paragraph of text in the card.")])],1)],1)])]),a("hr"),a("div",{staticClass:"row"},[a("div",{staticClass:"col-4"},[a("div",{style:t.myStyle3},[a("h2",[t._v("SKILLS")])])]),a("div",{staticClass:"col-8"},[a("div",[a("b-card",{staticClass:"border border-white",attrs:{title:"Card title","sub-title":"Card subtitle"}},[a("b-card-text",[t._v("\n               I’m a IT guy who loves building mobile and web\n                applications. I enjoy working with the full technology stack,\n                from front to backend and everything inbetween. More\n                especially, I enjoy seeing myself do magic with code and the\n                reactions of the people I'm working with when they see my\n                work. Most importantly, I'm always eager to learn new\n                languages/frameworks. I'm originally from Potchefstroom. One of my\n                favourite things to do in the world is going to the beach and\n                being surrounded by water.I enjoy hiking,I also\n                enjoy Travelling, although I haven't YET seen much of the\n                world. Overall I’m passionate about technology and excited\n                about the future.\n\n            ")]),a("b-card-text",[t._v("A second paragraph of text in the card.")])],1)],1)])]),a("div",{staticClass:"text-center"},[a("b-button",{staticClass:"rounded-lg border border-dark ",staticStyle:{border:"5px"},attrs:{variant:"dark",href:"/about"}},[a("router-link",{style:t.myStyle4,attrs:{to:"/projects"}},[t._v("Check out my portfolio")])],1)],1)])])},E=[],M={data:function(){return{myStyle:{marginTop:"150px",backgroundColor:"#ffffff00"},myStyle2:{marginTop:"170px"},myStyle3:{marginTop:"20px"},myStyle4:{color:"white"}}}},P=M,A=Object(c["a"])(P,H,E,!1,null,null,null),N=A.exports,R=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col"},[r("div",{directives:[{name:"b-hover",rawName:"v-b-hover",value:t.handleHover1,expression:"handleHover1"}],staticClass:"border rounded ",style:t.myStyle},[t.isHovered1?r("b-card",{staticClass:"text-center",attrs:{overlay:"","text-variant":"dark","img-src":a("5589"),"img-alt":"Card Image","img-height":"250",title:"Project 1","sub-title":"Made with VueJS"}},[r("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.my-modal",modifiers:{"my-modal":!0}}],style:t.myStyle2,attrs:{variant:"outline-warning",size:"lg"}},[t._v("Learn More")])],1):r("b-card",{staticClass:"text-center",staticStyle:{opacity:"0.7"},attrs:{overlay:"","text-variant":"black","img-src":"https://picsum.photos/900/250/?image=3","img-height":"250","img-alt":"Card Image"}},[r("div",[r("h2",{style:t.myStyle3},[t._v("PROJECT 1")])])]),r("b-modal",{attrs:{id:"my-modal",size:"lg","ok-only":"","ok-title":"Close","ok-variant":"warning"},scopedSlots:t._u([{key:"modal-title",fn:function(){return[t._v("\n              PROJECT1\n            ")]},proxy:!0}])},[r("div",{staticClass:"d-block text-center"},[r("b-img",{attrs:{src:"https://picsum.photos/1024/400/?image=41",fluid:"",alt:"Responsive image"}})],1),r("hr"),r("div",[r("div",[r("b-card",{attrs:{title:"Card title","sub-title":"Card subtitle"}},[r("b-card-text",[t._v("\n                    Some quick example text to build on the\n                    "),r("em",[t._v("card title")]),t._v(" and make up the bulk of the card's\n                    content.\n                  ")]),r("b-card-text",[t._v("A second paragraph of text in the card.")]),r("a",{staticClass:"card-link",attrs:{href:"#"}},[t._v("VISIT PAGE")])],1)],1)])])],1)]),r("div",{staticClass:"col"},[r("div",{directives:[{name:"b-hover",rawName:"v-b-hover",value:t.handleHover2,expression:"handleHover2"}],staticClass:"border rounded ",style:t.myStyle},[t.isHovered2?r("b-card",{staticClass:"text-center",attrs:{overlay:"","text-variant":"dark","img-src":a("5589"),"img-alt":"Card Image","img-height":"250",title:"Image Overlay","sub-title":"Subtitle"}},[r("b-button",{style:t.myStyle2,attrs:{variant:"warning",size:"lg"}},[t._v("Warning")])],1):r("b-card",{attrs:{overlay:"","text-variant":"white","img-src":"https://picsum.photos/900/250/?image=3","img-height":"250","img-alt":"Card Image",title:"Image Overlay","sub-title":"Subtitle"}},[r("b-card-text",[t._v("\n              Some quick example text to build on the card and make up the\n              bulk of the card's content.\n            ")])],1)],1)]),r("div",{staticClass:"col"},[r("div",{directives:[{name:"b-hover",rawName:"v-b-hover",value:t.handleHover3,expression:"handleHover3"}],staticClass:"border rounded ",style:t.myStyle},[t.isHovered3?r("b-card",{staticClass:"text-center",attrs:{overlay:"","text-variant":"dark","img-src":a("5589"),"img-alt":"Card Image","img-height":"250",title:"Image Overlay","sub-title":"Subtitle"}},[r("b-button",{style:t.myStyle2,attrs:{variant:"warning",size:"lg"}},[t._v("Warning")])],1):r("b-card",{attrs:{overlay:"","text-variant":"white","img-src":"https://picsum.photos/900/250/?image=3","img-height":"250","img-alt":"Card Image",title:"Image Overlay","sub-title":"Subtitle"}},[r("b-card-text",[t._v("\n              Some quick example text to build on the card and make up the\n              bulk of the card's content.\n            ")])],1)],1)])])])])},J=[],U={data:function(){return{isHovered1:!1,isHovered2:!1,isHovered3:!1,myStyle:{marginTop:"150px"},myStyle2:{marginTop:"50px"},myStyle3:{marginTop:"80px",color:"white"}}},methods:{handleHover1:function(t){this.isHovered1=t},handleHover2:function(t){this.isHovered2=t},handleHover3:function(t){this.isHovered3=t}}},$=U,B=Object(c["a"])($,R,J,!1,null,null,null),z=B.exports;r["default"].use(T["a"]);var L=new T["a"]({mode:"history",base:"/",routes:[{path:"/",name:"masthead",component:m},{path:"/about",name:"about",component:g},{path:"/resume",name:"resume",component:N},{path:"/projects",name:"project",component:z},{path:"/contact",name:"contact",component:Contact}]}),W=a("2f62");r["default"].use(W["a"]);var Y=new W["a"].Store({state:{},mutations:{},actions:{}}),q=(a("4989"),a("ab8b"),a("f9e3"),a("2dd8"),a("5f5b")),F=a("b1e0"),V=a("f13c"),D=a.n(V);r["default"].use(q["a"]),r["default"].use(F["a"]),r["default"].use(D.a),r["default"].use(T["a"]),r["default"].config.productionTip=!1,new r["default"]({router:L,store:Y,render:function(t){return t(j)}}).$mount("#app")},"64a9":function(t,e,a){},8742:function(t,e,a){t.exports=a.p+"img/Masthead.3518d52f.jpg"},f642:function(t,e,a){t.exports=a.p+"img/About.0fcac097.jpg"}});
//# sourceMappingURL=app.c556f995.js.map