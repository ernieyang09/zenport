(this.webpackJsonpzenport=this.webpackJsonpzenport||[]).push([[0],{157:function(e,a,n){e.exports=n(327)},162:function(e,a,n){},327:function(e,a,n){"use strict";n.r(a);var t=n(0),r=n.n(t),l=n(14),i=n.n(l),u=(n(162),n(335)),c=n(11),o=n(23);function s(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function d(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?s(n,!0).forEach((function(a){Object(o.a)(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(n).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}var m="".concat("UI","/PREVSTEP"),b="".concat("UI","/NEXTSTEP"),f=function(e){return e.ui},v={step:0},p=function(){return{type:m}},h=function(){return{type:b}},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d({},v),a=arguments.length>1?arguments[1]:void 0;switch(a.type){case m:return d({},e,{step:e.step-1});case b:return d({},e,{step:e.step+1});default:return e}},O=function(){var e=Object(c.c)(f).step;return r.a.createElement(u.a,{current:e,small:!0},r.a.createElement(u.a.Item,{title:"Step1"}),r.a.createElement(u.a.Item,{title:"Step2"}),r.a.createElement(u.a.Item,{title:"Step3"}),r.a.createElement(u.a.Item,{title:"Step4"}))},y=n(16),j=n(333),g=n(334),P=n(44);function M(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function k(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?M(n,!0).forEach((function(a){Object(o.a)(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):M(n).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}var w="".concat("FORM","/SETMEAL"),S="".concat("FORM","/SETRESTAURANT"),D="".concat("FORM","/SETORDER"),C={meal:null,number:1,restaurant:null,orders:[{key:0,dish:null,quantity:1}]},z=function(e){return e.form},B=function(e){return{type:S,payload:e}},T=function(e){return{type:D,payload:e}},R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k({},C),a=arguments.length>1?arguments[1]:void 0;switch(a.type){case w:case S:case D:return k({},e,{},a.payload);default:return e}},V=n(91),x=n(94);function _(){var e=Object(V.a)(["\n  color: red;\n  margin: 3px 0;\n"]);return _=function(){return e},e}function I(){var e=Object(V.a)(["\n  display: flex;\n  justify-content: space-between;\n  margin-top: 15px;\n"]);return I=function(){return e},e}var N=x.a.div(I()),X=x.a.p(_()),q=function(){var e=Object(c.b)(),a=Object(c.c)(z),n=a.meal,l=a.number,i=Object(t.useState)(n),u=Object(y.a)(i,2),o=u[0],s=u[1],d=Object(t.useState)(l),m=Object(y.a)(d,2),b=m[0],f=m[1],v=Object(t.useState)({meal:!0,number:!0}),p=Object(y.a)(v,2),E=p[0],O=p[1];return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("div",null,"Please select a meal"),r.a.createElement("div",null,r.a.createElement(j.a,{data:[{label:"breakfast",value:"breakfast"},{label:"lunch",value:"lunch"},{label:"dinner",value:"dinner"}],searchable:!1,value:o,onChange:function(e){s(e)}})),!E.meal&&r.a.createElement(X,null,"Please select a meal")),r.a.createElement("div",null,r.a.createElement("div",null,"Please Enter Number of people"),r.a.createElement("div",null,r.a.createElement(g.a,{value:b,min:1,onChange:function(e){f(e)}})),!E.number&&r.a.createElement("div",null,"Please input the number")),r.a.createElement(N,null,r.a.createElement("div",null),r.a.createElement(P.a,{onClick:function(){(function(){var e=null!==o,a=0!==b;return O({meal:e,number:a}),e&&a})()&&(e({type:w,payload:{meal:o,number:b}}),e(h()))}},"NEXT")))},F=n(37),Q=[{id:1,name:"Chicken Burger",restaurant:"Mc Donalds",availableMeals:["lunch","dinner"]},{id:2,name:"Ham Burger",restaurant:"Mc Donalds",availableMeals:["lunch","dinner"]},{id:3,name:"Cheese Burger",restaurant:"Mc Donalds",availableMeals:["lunch","dinner"]},{id:4,name:"Fries",restaurant:"Mc Donalds",availableMeals:["lunch","dinner"]},{id:5,name:"Egg Muffin",restaurant:"Mc Donalds",availableMeals:["breakfast"]},{id:6,name:"Burrito",restaurant:"Taco Bell",availableMeals:["lunch","dinner"]},{id:7,name:"Tacos",restaurant:"Taco Bell",availableMeals:["lunch","dinner"]},{id:8,name:"Quesadilla",restaurant:"Taco Bell",availableMeals:["lunch","dinner"]},{id:9,name:"Steak",restaurant:"BBQ Hut",availableMeals:["dinner"]},{id:10,name:"Yakitori",restaurant:"BBQ Hut",availableMeals:["dinner"]},{id:11,name:"Nankotsu",restaurant:"BBQ Hut",availableMeals:["dinner"]},{id:12,name:"Piman",restaurant:"BBQ Hut",availableMeals:["dinner"]},{id:13,name:"Vegan Bento",restaurant:"Vege Deli",availableMeals:["lunch"]},{id:14,name:"Coleslaw Sandwich",restaurant:"Vege Deli",availableMeals:["breakfast"]},{id:15,name:"Grilled Sandwich",restaurant:"Vege Deli",availableMeals:["breakfast"]},{id:16,name:"Veg. Salad",restaurant:"Vege Deli",availableMeals:["lunch","dinner"]},{id:17,name:"Fruit Salad",restaurant:"Vege Deli",availableMeals:["lunch","dinner"]},{id:18,name:"Corn Soup",restaurant:"Vege Deli",availableMeals:["lunch","dinner"]},{id:19,name:"Tomato Soup",restaurant:"Vege Deli",availableMeals:["lunch","dinner"]},{id:20,name:"Minestrone Soup",restaurant:"Vege Deli",availableMeals:["lunch","dinner"]},{id:21,name:"Pepperoni Pizza",restaurant:"Pizzeria",availableMeals:["lunch","dinner"]},{id:22,name:"Pepperoni Pizza",restaurant:"Pizzeria",availableMeals:["lunch","dinner"]},{id:23,name:"Hawaiian Pizza",restaurant:"Pizzeria",availableMeals:["lunch","dinner"]},{id:24,name:"Seafood Pizza",restaurant:"Pizzeria",availableMeals:["lunch","dinner"]},{id:25,name:"Deep Dish Pizza",restaurant:"Pizzeria",availableMeals:["dinner"]},{id:26,name:"Chow Mein",restaurant:"Panda Express",availableMeals:["lunch","dinner"]},{id:27,name:"Mapo Tofu",restaurant:"Panda Express",availableMeals:["lunch","dinner"]},{id:28,name:"Kung Pao",restaurant:"Panda Express",availableMeals:["lunch","dinner"]},{id:29,name:"Wontons",restaurant:"Panda Express",availableMeals:["lunch","dinner"]},{id:30,name:"Garlic Bread",restaurant:"Olive Garden",availableMeals:["breakfast","lunch","dinner"]},{id:31,name:"Ravioli",restaurant:"Olive Garden",availableMeals:["lunch","dinner"]},{id:32,name:"Rigatoni Spaghetti",restaurant:"Olive Garden",availableMeals:["lunch","dinner"]},{id:33,name:"Fettucine Pasta",restaurant:"Olive Garden",availableMeals:["lunch","dinner"]}],G=function(e){return e.dishes},H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q;arguments.length>1&&arguments[1];return e},U=function(){var e=Object(c.c)(z),a=e.meal,n=e.restaurant,l=Object(t.useCallback)((function(e){var n=G(e).filter((function(e){return e.availableMeals.some((function(e){return e===a}))})).map((function(e){return e.restaurant}));return Object(F.a)(new Set(n))}),[a]),i=Object(c.c)(l),u=Object(t.useState)(n),o=Object(y.a)(u,2),s=o[0],d=o[1],m=Object(t.useState)({restaurant:!0}),b=Object(y.a)(m,2),f=b[0],v=b[1],E=Object(c.b)();return r.a.createElement("div",null,r.a.createElement("div",null,"Please select a restaurant"),r.a.createElement("div",null,r.a.createElement(j.a,{data:i.map((function(e){return{label:e,value:e}})),searchable:!1,value:s,onChange:function(e){d(e)}})),!f.restaurant&&r.a.createElement(X,null,"Please select a restaurant"),r.a.createElement(N,null,r.a.createElement(P.a,{onClick:function(){E(B({restaurant:s})),E(p())}},"PREV"),r.a.createElement(P.a,{"data-test-id":"next",onClick:function(){(function(){var e=null!==s;return v({restaurant:e}),e})()&&(E(B({restaurant:s})),E(h()))}},"NEXT")))};function A(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function L(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?A(n,!0).forEach((function(a){Object(o.a)(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):A(n).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}var W=function(){var e=Object(c.c)(z),a=e.number,n=e.restaurant,l=e.orders,i=Object(t.useCallback)((function(e){return G(e).filter((function(e){return e.restaurant===n})).map((function(e){return{id:e.id,name:e.name}}))}),[n]),u=Object(c.c)(i),s=Object(t.useState)(l),d=Object(y.a)(s,2),m=d[0],b=d[1],f=Object(t.useState)({}),v=Object(y.a)(f,2),E=v[0],O=v[1],j=Object(t.useRef)(m.length-1),g=Object(c.b)(),M=function(){return r.a.createElement(P.a,{onClick:function(){b([].concat(Object(F.a)(m),[{key:++j.current,dish:null,quantity:1}]))}},"Add")},k=function(e){var a=e.id;return r.a.createElement(P.a,{onClick:function(){b(m.filter((function(e){return e.key!==a})))}},"Del")},w=function(e){return function(a){var n=!0,t=!1,r=void 0;try{for(var l,i=m[Symbol.iterator]();!(n=(l=i.next()).done);n=!0){var u=l.value;if(u.key===e){u.quantity=parseInt(a);break}}}catch(c){t=!0,r=c}finally{try{n||null==i.return||i.return()}finally{if(t)throw r}}b(Object(F.a)(m))}};return r.a.createElement("div",null,r.a.createElement("div",null,m.map((function(e,a){return r.a.createElement(Z,{key:e.key,dishes:u,order:e,onChangeOrder:(n=e.key,function(e){var a=!0,t=!1,r=void 0;try{for(var l,i=m[Symbol.iterator]();!(a=(l=i.next()).done);a=!0){var u=l.value;if(u.key===n){u.dish=e;break}}}catch(c){t=!0,r=c}finally{try{a||null==i.return||i.return()}finally{if(t)throw r}}b(Object(F.a)(m))}),onChangeQuantity:w(e.key),ControlBtn:a===m.length-1?r.a.createElement(M,null):r.a.createElement(k,{id:e.key}),err:E[e.key]});var n}))),E.number&&r.a.createElement(X,null,E.number),r.a.createElement(N,null,r.a.createElement(P.a,{onClick:function(){g(T({orders:m})),g(p())}},"PREV"),r.a.createElement(P.a,{onClick:function(){(function(){var e=new Map([[null,[]]]),n=0;m.forEach((function(a){a.dish?e.has(a.dish.id)?e.get(a.dish.id).push(a.key):e.set(a.dish.id,[a.key]):e.get(null).push(a.key),n+=a.quantity}));var t={},r=!0,l=!1,i=void 0;try{for(var u,c=e.entries()[Symbol.iterator]();!(r=(u=c.next()).done);r=!0){var s=u.value,d=Object(y.a)(s,2),b=d[0],f=d[1];null===b?t=f.reduce((function(e,a){return L({},e,Object(o.a)({},a,"Please select a dish"))}),t):f.length>1&&(t=f.reduce((function(e,a){return L({},e,Object(o.a)({},a,"Can't select the same dish"))}),t))}}catch(v){l=!0,i=v}finally{try{r||null==c.return||c.return()}finally{if(l)throw i}}return n<a&&(t.number="You need more food"),O(t),!Object.keys(t).length})()&&(g(T({orders:m})),g(h()))}},"NEXT")))},Y=n(337),J=n(336),K=function(){var e=Object(c.c)(z),a=e.meal,n=e.number,t=e.restaurant,l=e.orders,i=Object(c.b)();return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(Y.a,{header:"Order Confirm",bordered:!0},r.a.createElement("p",null,"meal:",a),r.a.createElement("p",null,"number:",n),r.a.createElement("p",null,"restaurant:",t),r.a.createElement("p",null,"orders:"),r.a.createElement(Y.a,null,l.map((function(e){return r.a.createElement("p",{key:e.key},"".concat(e.dish.name," - ").concat(e.quantity))}))))),r.a.createElement(N,null,r.a.createElement(P.a,{onClick:function(){i(p())}},"PREV"),r.a.createElement(P.a,{onClick:function(){console.log("Your order is here.",{meal:a,number:n,restaurant:t,orders:l}),J.a.success({title:"success",description:r.a.createElement("div",null,"Please checck your console log")})}},"SUBMIT")))},$=function(e){return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(O,null)),r.a.createElement("div",null,e.children))},Z=function(e){var a=e.dishes,n=e.order,t=e.onChangeOrder,l=e.onChangeQuantity,i=e.err,u=e.ControlBtn;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,"Please select a meal"),r.a.createElement("div",null,r.a.createElement(j.a,{data:a.map((function(e){return{label:e.name,value:e}})),searchable:!1,value:n.dish,onChange:t})),i&&r.a.createElement(X,null,i),r.a.createElement("div",null,"Please select quantity"),r.a.createElement("div",null,r.a.createElement(g.a,{min:1,max:10,value:n.quantity,onChange:l})),u)},ee=(n(326),function(){var e=Object(c.c)(f).step;return r.a.createElement($,null,function(e){switch(e){case 0:return r.a.createElement(q,null);case 1:return r.a.createElement(U,null);case 2:return r.a.createElement(W,null);case 3:return r.a.createElement(K,null);default:return null}}(e))}),ae=n(62),ne=Object(ae.a)({dishes:H,ui:E,form:R});var te=function(){return Object(ae.b)(ne,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var re=te();i.a.render(r.a.createElement(c.a.Provider,{value:re},r.a.createElement(ee,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[157,1,2]]]);
//# sourceMappingURL=main.6a457a9c.chunk.js.map