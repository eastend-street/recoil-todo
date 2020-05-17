(this["webpackJsonprecoil-todo"]=this["webpackJsonprecoil-todo"]||[]).push([[0],{22:function(n,e,t){n.exports=t(54)},53:function(n,e,t){},54:function(n,e,t){"use strict";t.r(e);var r=t(0),o=t.n(r),a=t(9),i=t.n(a),c=t(3),u=t(2),l=t(1);function s(){var n=Object(u.a)(["\n  body {\n    margin: 0;\n    padding: 0;\n    font-family: 'Roboto', sans-serif;\n    background-color: #eee;\n  }\n\n  a {\n    text-decoration: none;\n    color: inherit;\n    &:focus,\n    &:hover,\n    &:visited,\n    &:link,\n    &:active {\n      text-decoration: none;\n    }\n    &:hover {\n      opacity: 0.7;\n      transition: 0.5s;\n    }\n  }\n"]);return s=function(){return n},n}var m=Object(l.b)(s()),d={colors:{},fonts:["Roboto","sans-serif"],fontSizes:{small:"1rem",medium:"2rem",large:"3rem"},breakpoints:{xxxs:400,xxs:500,xs:600,xsm:750,sm:960,md:1280,lg:1960}},f=function(n){var e=n.children;return o.a.createElement(l.a,{theme:d},e)},b=Object(c.atom)({key:"TodoListState",default:[{id:1,name:"Buy tomato",isDone:!1},{id:2,name:"Pay rent",isDone:!0},{id:3,name:"Clean kitchen",isDone:!1},{id:4,name:"Sent email to Dave",isDone:!1},{id:5,name:"Physics assignment",isDone:!1}]}),v=t(12),g=t(21);function h(){var n=Object(u.a)(["\n  margin: 0 1rem;\n  background-color: transparent;\n  border: none;\n  display: block;\n  font-size: 1rem;\n  outline: none;\n  padding: 0;\n  width: 100%;\n"]);return h=function(){return n},n}function p(){var n=Object(u.a)(["\n  background-color: ",";\n  border: 0.05rem solid #e0e0e0;\n  border-radius: 50%;\n  font-size: 1rem;\n  outline: none;\n  padding: 0.7rem;\n\n  &:hover {\n    cursor: pointer;\n    opacity: 0.7;\n    transition: 0.3s;\n  }\n"]);return p=function(){return n},n}function k(){var n=Object(u.a)(["\n  border-top: 0.05rem solid #e0e0e0;\n  display: flex;\n  padding: 0.5rem 1rem;\n  &:hover {\n    background-color: rgba(196, 196, 196, 0.1);\n  }\n\n  &:focus-within {\n    background-color: #fff;;\n  }\n\n  &:last-child {\n    border-bottom: 0.05rem solid #e0e0e0;\n  }\n"]);return k=function(){return n},n}var j=l.c.div(k()),O=l.c.button(p(),(function(n){return n.isDone?"#25aaf5":"#fff"})),E=l.c.input(h()),x=function(n){var e=n.id,t=n.name,a=n.isDone,i=Object(r.useState)(t),u=Object(g.a)(i,2),l=u[0],s=u[1],m=Object(c.useSetRecoilState)(b);return o.a.createElement(j,null,o.a.createElement(O,{isDone:a,onClick:function(){m((function(n){return n.map((function(n){return n.id===e?Object(v.a)({},n,{isDone:!n.isDone}):n}))}))}}),o.a.createElement(E,{value:l,onChange:function(n){return t=n.target.value,s(t),void m((function(n){return n.map((function(n){return n.id===e?Object(v.a)({},n,{name:l}):n}))}));var t}}))};function y(){var n=Object(u.a)(["\n  margin: 1rem 0;\n"]);return y=function(){return n},n}var w=l.c.div(y()),D=function(){var n=Object(c.useRecoilValue)(b);return o.a.createElement(w,null,n.map((function(n){return o.a.createElement(x,Object.assign({},n,{key:n.id}))})))},S=t(20);function R(){var n=Object(u.a)(["\n  background-color: #25aaf5;\n  border: none;\n  border-radius: 0.2rem;\n  color: #fff;\n  display: block;\n  font-size: 1rem;\n  margin: 0 auto;\n  outline: none;\n  padding: 0.5rem 0;\n  width: 50%;\n\n  &:hover {\n    cursor: pointer;\n    opacity: 0.7;\n    transition: 0.3s;\n  }\n"]);return R=function(){return n},n}var z=l.c.button(R()),C=function(){var n=Object(c.useSetRecoilState)(b);return o.a.createElement(z,{onClick:function(){n((function(n){return[].concat(Object(S.a)(n),[{id:n.length+1,name:"",isDone:!1}])}))}},"Add Task")};function B(){var n=Object(u.a)(["\n  font-size: 1.5rem;\n  font-weight: bold;\n  margin-bottom: 1rem;\n  text-align: center;\n"]);return B=function(){return n},n}function T(){var n=Object(u.a)(["\n  background-color: #fff;\n  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.25);\n  min-height: 30rem;\n  margin: 3rem auto 0;\n  padding: 2rem 0;\n  width: 25rem;\n"]);return T=function(){return n},n}var J=l.c.div(T()),P=l.c.div(B()),W=function(){return o.a.createElement(J,null,o.a.createElement(P,null,"Recoil Todo"),o.a.createElement(D,null),o.a.createElement(C,null))},A=function(){return o.a.createElement(c.RecoilRoot,null,o.a.createElement(f,null,o.a.createElement(m,null),o.a.createElement(W,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(53);i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(A,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[22,1,2]]]);
//# sourceMappingURL=main.7cc22aed.chunk.js.map