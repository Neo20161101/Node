(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{127:function(e,t,n){"use strict";n(153);var a,o,c,r=n(92),l=(n(100),n(14)),s=n(28),i=n(41),u=n(44),p=n(42),m=n(45),d=(n(104),n(23)),h=n(1),b=n.n(h),f=n(19),g=n(66),E=n(10),y=(n(157),n(50)),j=(n(245),n(71)),k=n(129),O=n.n(k),v=(d.a.Header,d.a.Sider),w=(d.a.Content,j.b.SubMenu),M=Object(f.b)("store")(a=Object(f.c)(a=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(u.a)(this,Object(p.a)(t).call(this,e))).state={SelectedKey:["/tacos"]},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentWillMount",value:function(){var e=window.location.pathname;this.setState({SelectedKey:[e]})}},{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.state.SelectedKey,t=this.props,n=t.collapsed,a=t.routers;return b.a.createElement(v,{breakpoint:"sm",trigger:null,collapsible:!0,collapsed:n,onBreakpoint:function(e){console.log(e)}},b.a.createElement("div",{className:"logo"},b.a.createElement("img",{src:O.a,alt:"logo"}),"\u540e\u53f0\u7ba1\u7406"),b.a.createElement(j.b,{theme:"dark",mode:"inline",defaultSelectedKeys:e},function e(t){return t.map(function(t){return t.routes?b.a.createElement(w,{key:t.path,title:b.a.createElement("span",null,b.a.createElement(l.a,{type:t.icon}),b.a.createElement("span",null,t.name))},e(t.routes)):t.hideInMenu?null:b.a.createElement(j.b.Item,{key:t.path},b.a.createElement(g.b,{to:t.path},b.a.createElement(l.a,{type:t.icon}),b.a.createElement("span",null,t.name)))})}(a)))}}]),t}(h.Component))||a)||a,C=Object(f.b)("store")(o=Object(f.c)(o=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentWillMount",value:function(){}},{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return b.a.createElement("div",{className:"App"},b.a.createElement("header",null,b.a.createElement("div",null,"404")))}}]),t}(h.Component))||o)||o,I=n(133),S=n.n(I)()(),x=d.a.Header,z=(d.a.Sider,d.a.Content),L=Object(f.b)("store")(c=Object(f.c)(c=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(u.a)(this,Object(p.a)(t).call(this,e))).onCollapsedToggleClick=function(){n.setState({collapsed:!n.state.collapsed})},n.state={loggedIn:e.store.loggedIn,collapsed:!1,Menu:[{path:"/login",name:"Login",icon:"user",hideInMenu:!0},{path:"/tacos",name:"tacos",icon:"user"}]},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentWillMount",value:function(){}},{key:"componentDidMount",value:function(){var e=this;(0,this.props.store.fetchTest)().then(function(t){200==t.code?(e.props.store.loggedIn=!0,S.push(y.a[1].path),e.setState({loggedIn:!0,Menu:y.a})):(e.props.store.loggedIn=!1,S.push("/login"),e.setState({loggedIn:!1}))})}},{key:"render",value:function(){var e=this,t=this.state,n=t.loggedIn,a=t.collapsed,o=t.Menu;return console.log("loggedIn,",y.a),b.a.createElement(f.a,this.props,b.a.createElement(g.a,null,b.a.createElement(E.b,{path:"/",render:function(){return n?b.a.createElement(d.a,{id:"components-layout-demo-custom-trigger"},b.a.createElement(M,{routers:o,collapsed:a})," ",b.a.createElement(d.a,null,b.a.createElement(x,{style:{background:"#fff",padding:0}},b.a.createElement(l.a,{className:"trigger",type:a?"menu-unfold":"menu-fold",onClick:e.onCollapsedToggleClick})),b.a.createElement(z,{style:{margin:"24px 16px",padding:24,background:"#fff",minHeight:280}},b.a.createElement(h.Suspense,{fallback:b.a.createElement(r.a,{tip:"Loading..."}," ")},b.a.createElement(E.d,null,b.a.createElement(E.a,{exact:!0,from:"/",to:o[1].path}),y.a.map(function(e){return e.hideInMenu?null:b.a.createElement(E.b,{key:e.path,exact:!0,path:e.path,component:e.component})}),b.a.createElement(E.b,{component:C})))))):b.a.createElement(h.Suspense,{fallback:b.a.createElement(r.a,{tip:"Loading..."}," ")},b.a.createElement(E.d,null,b.a.createElement(E.a,{exact:!0,from:"/",to:"/login"}),b.a.createElement(E.b,{path:"/login",component:y.a[0].component}),b.a.createElement(E.b,{component:C}),"404444"))}})))}}]),t}(h.Component))||c)||c;t.a=L},129:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},147:function(e,t,n){e.exports=n(244)},152:function(e,t,n){},157:function(e,t,n){},244:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),c=n(6),r=n.n(c),l=(n(152),n(127));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var s=n(28),i=n(8),u=n(93),p=n.n(u),m=(n(224),n(57)),d=n(135),h=n(120),b=n.n(h),f=(n(19),"http://localhost:3000/");function g(e,t,n){return E.apply(this,arguments)}function E(){return(E=Object(d.a)(p.a.mark(function e(t,n,a){return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b()({method:n,url:t,baseURL:f,data:a,headers:{"X-Requested-With":"XMLHttpRequest",Accept:"*/*",ApiKey:"88d85d8a6b9d4e409e817dca1c2cd1fb"}}).then(function(e){if(console.log("response:",e,this),e.status>=200||e.status<=304)return e.data;m.a.warning({message:e.message||e.msg,description:e.statusText,onClick:function(){console.log(e)}})}).catch(function(e){return console.error("error:",e),e.response?m.a.error({message:e.message,description:e.response.statusText,onClick:function(){console.log(e.response)}}):e.request?m.a.error({message:"\u5df2\u53d1\u51fa\u8bf7\u6c42\uff0c\u672a\u6536\u5230\u7b54\u590d\uff01",description:e.request.statusText,onClick:function(){console.log(e.request)}}):m.a.error({message:e.message,description:e.stack,onClick:function(){console.log(e)}}),{status:500}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}))).apply(this,arguments)}var y=function e(){Object(s.a)(this,e),this.id=Math.random(),this.title="app\u5168\u5c40",this.loggedIn=!1,this.sad=!0,this.fetchPro=function(e){return new Promise(function(e,t){e({code:200})})},this.fetchTest=function(e){return g("/users/test","post",e)},this.fetchLogin=function(e){return g("/users/login","post",e)}};Object(i.g)(y,{title:i.l,collapsed:i.l,fetchLogin:i.d,fetchPro:i.d});var j=new y;r.a.render(o.a.createElement(l.a,{store:j}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},50:function(e,t,n){"use strict";var a=n(1);Object(a.lazy)(function(){return Promise.all([n.e(1),n.e(5),n.e(7)]).then(n.bind(null,246))});t.a=[{path:"/login",name:"Login",icon:"user",hideInMenu:!0,component:Object(a.lazy)(function(){return Promise.all([n.e(1),n.e(6)]).then(n.bind(null,248))})},{path:"/tacos",name:"tacos",icon:"home",component:Object(a.lazy)(function(){return n.e(8).then(n.bind(null,247))})},{path:"/tac",name:"tac",icon:"user",routes:[{path:"/tac/bus",name:"/tac/bus",icon:"user",component:Object(a.lazy)(function(){return n.e(0).then(n.bind(null,62))}),routes:[{path:"/tac/bus/bus2",name:"/tac/bus/bus2",icon:"user",component:Object(a.lazy)(function(){return n.e(0).then(n.bind(null,62))})},{path:"/tac/bus/bus3",name:"/tac/bus/bus3",icon:"user",component:Object(a.lazy)(function(){return n.e(0).then(n.bind(null,62))})}]},{path:"/tac/cart",name:"/tac/Cart",icon:"user",component:Object(a.lazy)(function(){return n.e(0).then(n.bind(null,62))})}]},{path:"/about",name:"About",icon:"user",component:Object(a.lazy)(function(){return n.e(0).then(n.bind(null,62))})}]}},[[147,3,4]]]);
//# sourceMappingURL=main.f9ff1b2b.chunk.js.map