(function(t){function e(e){for(var i,c,s=e[0],o=e[1],l=e[2],d=0,f=[];d<s.length;d++)c=s[d],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&f.push(r[c][0]),r[c]=0;for(i in o)Object.prototype.hasOwnProperty.call(o,i)&&(t[i]=o[i]);u&&u(e);while(f.length)f.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],i=!0,s=1;s<n.length;s++){var o=n[s];0!==r[o]&&(i=!1)}i&&(a.splice(e--,1),t=c(c.s=n[0]))}return t}var i={},r={app:0},a=[];function c(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=t,c.c=i,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)c.d(n,i,function(e){return t[e]}.bind(null,i));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],o=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=o;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"4ffd":function(t,e,n){t.exports=n.p+"img/logo.c09f3b8c.png"},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},a=[],c=(n("034f"),n("2877")),s={},o=Object(c["a"])(s,r,a,!1,null,null,null),l=o.exports,u=(n("7db0"),n("d3b7"),n("fb6a"),n("8c4f")),d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Navbar"),n("Background")],1)},f=[],m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-fluid d-flex justify-content-between align-items-center pe-5",staticStyle:{position:"sticky",top:"0","background-color":"white",height:"7vh","z-index":"98"}},[t._m(0),n("router-link",{staticStyle:{"font-size":"18px","text-decoration":"none",color:"black"},attrs:{to:"/"}},[n("b",[t._v("HOME")])]),t._m(1),t._m(2),t._m(3)],1)},p=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"d-flex align-items-baseline"},[i("div",{staticStyle:{width:"20%"}},[i("img",{attrs:{src:n("4ffd"),alt:"",width:"100%"}})]),i("div",{staticStyle:{width:"40%"}},[i("h5",{staticStyle:{"font-family":"GatwickBold",color:"#c34234"}},[t._v(" THE FUJI KITCHEN ")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{"font-size":"18px"}},[n("b",[t._v("ABOUT")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{"font-size":"18px"}},[n("b",[t._v("FOOD")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{"font-size":"18px"}},[n("b",[t._v("MY ACCOUNT")])])}],v={name:"Navbar"},h=v,b=Object(c["a"])(h,m,p,!1,null,null,null),g=b.exports,y=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"d-flex align-items-center justify-content-center",staticStyle:{height:"93vh",width:"100vw","background-color":"red"}},[i("img",{staticStyle:{position:"fixed"},attrs:{src:n("dc97"),alt:"",width:"100%",height:"100%"}}),i("div",{staticClass:"d-flex flex-column align-items-center justify-content-evenly",staticStyle:{width:"50%",height:"50%","background-color":"black",position:"absolute","z-index":"99",opacity:"0.9"}},[t._m(0),i("router-link",{staticStyle:{"text-decoration":"none",color:"white"},attrs:{to:"/menu"}},[i("button",{staticClass:"btn btn-danger"},[i("b",[t._v("Browse Our Menu")])])])],1)])},w=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-center text-white"},[n("h1",{staticStyle:{"font-family":"'Allan', cursive","font-size":"60px"}},[t._v(" AUTHENTIC JAPANESE CUISINE ")]),n("h1",{staticStyle:{"font-family":"'Allan', cursive","font-size":"50px"}},[t._v(" -- SINCE 2022 -- ")])])}],x={name:"Background"},_=x,j=Object(c["a"])(_,y,w,!1,null,null,null),S=j.exports,C={name:"Home",components:{Navbar:g,Background:S}},k=C,O=(n("cccb"),Object(c["a"])(k,d,f,!1,null,null,null)),E=O.exports,$=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Navbar"),n("div",{staticClass:"text-white d-flex justify-content-center align-items-center mb-5 pt-2",style:[{"background-color":"black",height:"8vh"},t.cart.length>0?{width:"70vw","justify-content":"left !important","padding-left":"20px"}:{width:"100vw"}],attrs:{id:"header"}},[t._m(0)]),0==t.items.length?n("div",{staticClass:"spinner-border",staticStyle:{position:"absolute",left:"50%",top:"50%"},attrs:{role:"status"}},[n("span",{staticClass:"visually-hidden"},[t._v("Loading...")])]):n("div",{staticClass:"d-flex justify-content-center align-items-center",style:[t.cart.length>0?{width:"70vw"}:""],attrs:{id:"menuSection"}},[n("div",{staticClass:"d-flex flex-wrap; justify-content-between",staticStyle:{width:"100%"}},[n("div",{staticClass:"row"},t._l(t.items,(function(e,i){return n("div",{key:e.id,staticClass:"col-3 d-flex flex-column align-items-center"},[n("b-card",{staticClass:"mb-4 p-5",staticStyle:{width:"22rem",height:"22rem"},attrs:{id:"menuItem",title:e.name,"img-src":e.image_url,"img-top":""},on:{click:function(e){return t.$bvModal.show(t.itemModal+i)}}}),n("b-modal",{attrs:{id:t.itemModal+i,"hide-footer":""}},[n("div",{staticClass:"d-flex flex-column align-items-center"},[n("b-card",{staticClass:"mb-4 text-center",staticStyle:{width:"18rem",border:"0","background-color":"black",color:"white"},attrs:{title:e.name,"img-src":e.image_url,"img-top":""}},[n("b-card-text",{staticClass:"text-center",staticStyle:{"font-family":"Nexa","font-weight":"lighter"}},[n("p",[t._v("Servings: "+t._s(e.description.servings))]),n("p",[t._v(" Calories per serving: "+t._s(e.description.calories)+" kcal ")]),n("p",[t._v("Protein per serving: "+t._s(e.description.protein)+"g")]),n("p",[t._v("Fat per serving: "+t._s(e.description.fat)+"g")])])],1),n("div",{staticClass:"d-flex justify-content-between mb-4",staticStyle:{width:"80%"}},[n("p",[t._v("Price")]),n("p",[t._v("$"+t._s(e.price))])]),n("div",{staticClass:"w-100 d-flex justify-content-center align-items-center"},[n("form",{attrs:{action:"api/cart",method:"POST",id:"cartForm"},on:{submit:function(n){return t.addToCart(e.id,n)}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.id,expression:"item.id"}],attrs:{type:"text",name:"item_id",hidden:""},domProps:{value:e.id},on:{input:function(n){n.target.composing||t.$set(e,"id",n.target.value)}}}),n("input",{attrs:{type:"text",name:"quantity",value:"1",hidden:""}}),n("input",{directives:[{name:"model",rawName:"v-model",value:e.price,expression:"item.price"}],attrs:{type:"text",name:"subtotal",hidden:""},domProps:{value:e.price},on:{input:function(n){n.target.composing||t.$set(e,"price",n.target.value)}}}),n("input",{staticClass:"btn btn-danger",staticStyle:{"font-weight":"bold"},attrs:{type:"submit",value:"Add to Cart"}})])])],1)])],1)})),0)])]),n("div",{directives:[{name:"show",rawName:"v-show",value:t.cart.length>0,expression:"cart.length > 0"}],staticStyle:{position:"fixed",height:"100vh",width:"29vw","background-color":"#c34234",right:"0",bottom:"0",color:"white"}},[n("div",{staticClass:"d-flex flex-column p-3",staticStyle:{position:"absolute",width:"100%",height:"100%",top:"7%"}},[t._m(1),n("div",{staticClass:"mb-5",staticStyle:{height:"70%",width:"100%"}},t._l(t.cart,(function(e){return n("div",{key:e.id,staticClass:"d-flex justify-content-between align-items-baseline w-100"},[n("div",{staticStyle:{width:"30%"}},[n("h6",[n("b",[t._v(t._s(t.getItemName(e.item_id)))])])]),n("div",[n("h6",{staticStyle:{color:"#d1d1d1"}},[t._v(" $ "+t._s(parseFloat(e.subtotal).toFixed(2))+" ")])]),n("div",{staticClass:"d-flex align-items-baseline justify-content-between",staticStyle:{width:"30%"}},[n("i",{class:[e.quantity>=2?"fa-solid fa-minus":"fa-solid fa-trash-can"],on:{click:function(n){return t.updateQty(e.id,"subtract")}}}),n("p",[n("b",[t._v(t._s(e.quantity))])]),n("i",{staticClass:"fa-solid fa-plus",on:{click:function(n){return t.updateQty(e.id,"add")}}})])])})),0),n("div",{staticClass:"d-flex flex-column justify-content-between",staticStyle:{height:"10%",width:"100%"}},[n("div",{staticClass:"d-flex justify-content-between align-items-center w-100"},[t._m(2),n("div",{staticStyle:{color:"#d1d1d1"}},[t._v(" $ "+t._s(parseFloat(t.getTotal()).toFixed(2))+" ")])]),n("div",{staticClass:"d-flex justify-content-between align-items-center w-100"},[t._m(3),n("div",{staticStyle:{color:"#d1d1d1"}},[n("b",[t._v("$ "+t._s((.12*t.getTotal()+t.getTotal()).toFixed(2)))])])])])])])],1)},T=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h1",{staticStyle:{"font-family":"Nexa"}},[n("b",[t._v("Food Menu")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"w-100 text-center mb-3 mt-2"},[n("h4",[n("b",[t._v("Your Order")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("b",[t._v("Subtotal:")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("b",[t._v("Total (incl. VAT):")])])}],M=n("1da1"),N=(n("b0c0"),n("96cf"),n("d4ec")),P=n("bee2"),I="api/food",F=function(){function t(){Object(N["a"])(this,t)}return Object(P["a"])(t,null,[{key:"getItems",value:function(){var t=Object(M["a"])(regeneratorRuntime.mark((function t(){var e,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch(I);case 2:return e=t.sent,t.next=5,e.json();case 5:return n=t.sent,t.abrupt("return",n);case 7:case"end":return t.stop()}}),t)})));function e(){return t.apply(this,arguments)}return e}()}]),t}(),R=F,A=n("53ca"),B=(n("e9c4"),"api/cart"),z=function(){function t(){Object(N["a"])(this,t)}return Object(P["a"])(t,null,[{key:"getCart",value:function(){var t=Object(M["a"])(regeneratorRuntime.mark((function t(){var e,n,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch(B);case 2:return e=t.sent,t.next=5,e.json();case 5:return n=t.sent,"object"==Object(A["a"])(n)&&(i=[],i.push(n)),t.abrupt("return",n);case 8:case"end":return t.stop()}}),t)})));function e(){return t.apply(this,arguments)}return e}()},{key:"updateQty",value:function(){var t=Object(M["a"])(regeneratorRuntime.mark((function t(e,n){var i,r,a,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return i={operation:n},t.next=3,fetch(B+"/"+e,{headers:{"Content-Type":"application/json"},method:"PUT",body:JSON.stringify(i)});case 3:return r=t.sent,t.next=6,r.json();case 6:return a=t.sent,"object"==Object(A["a"])(a)&&(c=[],c.push(a)),t.abrupt("return",a);case 9:case"end":return t.stop()}}),t)})));function e(e,n){return t.apply(this,arguments)}return e}()}]),t}(),H=z,U={name:"Menu",components:{Navbar:g,Background:S},data:function(){return{items:[],item:{},cart:[],itemModal:"itemModal"}},created:function(){var t=this;return Object(M["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,R.getItems();case 2:return t.items=e.sent,console.log(t.items),e.next=6,H.getCart();case 6:t.cart=e.sent,console.log(t.cart);case 8:case"end":return e.stop()}}),e)})))()},methods:{triggerModal:function(t){var e=new bootstrap.Modal(document.getElementById("itemModal".concat(t)),{keyboard:!1});e.show()},getItemName:function(t){for(var e=0;e<this.items.length;e++)if(this.items[e].id==t)return this.items[e].name},getTotal:function(){for(var t=0,e=0;e<this.cart.length;e++)t+=parseFloat(this.cart[e].subtotal);return t},addToCart:function(t,e){var n=this;return Object(M["a"])(regeneratorRuntime.mark((function i(){var r,a,c;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:r=document.getElementById("cartForm"),e.preventDefault(),a=!0,c=0;case 4:if(!(c<n.cart.length)){i.next=14;break}if(t!==n.cart[c].item_id){i.next=10;break}return a=!1,i.abrupt("break",14);case 10:a=!0;case 11:c++,i.next=4;break;case 14:a?r.submit():window.location.href="menu/";case 15:case"end":return i.stop()}}),i)})))()},updateQty:function(t,e){var n=this;return Object(M["a"])(regeneratorRuntime.mark((function i(){return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return i.next=2,H.updateQty(t,e);case 2:n.cart=i.sent;case 3:case"end":return i.stop()}}),i)})))()}}},J=U,Q=(n("f2d1"),Object(c["a"])(J,$,T,!1,null,null,null)),q=Q.exports;i["default"].use(u["a"]);var D=[{path:"/",name:"Home",component:E,meta:{title:"Home"}},{path:"/menu",name:"Menu",component:q,meta:{title:"Menu"}}],Y=new u["a"]({mode:"history",base:"/",routes:D});Y.beforeEach((function(t,e,n){var i=t.matched.slice().reverse().find((function(t){return t.meta&&t.meta.title}));i&&(document.title=i.meta.title),n()}));var G=Y,K=n("5f5b"),L=n("b1e0");n("f9e3"),n("2dd8");i["default"].config.productionTip=!1,i["default"].use(K["a"]),i["default"].use(L["a"]),new i["default"]({router:G,render:function(t){return t(l)}}).$mount("#app")},"5ced":function(t,e,n){},7726:function(t,e,n){},"85ec":function(t,e,n){},cccb:function(t,e,n){"use strict";n("5ced")},dc97:function(t,e,n){t.exports=n.p+"img/bg.448c931d.png"},f2d1:function(t,e,n){"use strict";n("7726")}});
//# sourceMappingURL=app.af4cbe6f.js.map