(function(e){function t(t){for(var a,s,o=t[0],u=t[1],i=t[2],d=0,b=[];d<o.length;d++)s=o[d],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&b.push(r[s][0]),r[s]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(e[a]=u[a]);l&&l(t);while(b.length)b.shift()();return c.push.apply(c,i||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],a=!0,o=1;o<n.length;o++){var u=n[o];0!==r[u]&&(a=!1)}a&&(c.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},r={app:0},c=[];function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=t,o=o.slice();for(var i=0;i<o.length;i++)t(o[i]);var l=u;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1430:function(e,t,n){"use strict";n("59cd")},5421:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("f9e3");var a=n("bc3a"),r=n.n(a),c=n("7a23"),s={id:"app"},o={class:"main container"};function u(e,t,n,a,r,u){var i=Object(c["A"])("NavBar"),l=Object(c["A"])("router-view");return Object(c["t"])(),Object(c["g"])("div",s,[Object(c["j"])(i),Object(c["h"])("div",o,[Object(c["j"])(l)])])}var i=function(e){return Object(c["w"])("data-v-9ea10fbc"),e=e(),Object(c["u"])(),e},l={class:"navbar navbar-expand-md navbar-dark bg-dark"},d={class:"container"},b=i((function(){return Object(c["h"])("a",{class:"navbar-brand",href:"/"},"FastAPI + Vue",-1)})),f=i((function(){return Object(c["h"])("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarCollapse","aria-controls":"navbarCollapse","aria-expanded":"false","aria-label":"Toggle navigation"},[Object(c["h"])("span",{class:"navbar-toggler-icon"})],-1)})),p={class:"collapse navbar-collapse",id:"navbarCollapse"},h={key:0,class:"navbar-nav me-auto mb-2 mb-md-0"},m={class:"nav-item"},O=Object(c["i"])("Home"),y={class:"nav-item"},j=Object(c["i"])("Board"),g={class:"nav-item"},v=Object(c["i"])("My Profile"),w={class:"nav-item"},_={key:1,class:"navbar-nav me-auto mb-2 mb-md-0"},D={class:"nav-item"},k=Object(c["i"])("Home"),x={class:"nav-item"},R=Object(c["i"])("Register"),M={class:"nav-item"},C=Object(c["i"])("Log In");function T(e,t,n,a,r,s){var o=Object(c["A"])("router-link");return Object(c["t"])(),Object(c["g"])("header",null,[Object(c["h"])("nav",l,[Object(c["h"])("div",d,[b,f,Object(c["h"])("div",p,[s.isLoggedIn?(Object(c["t"])(),Object(c["g"])("ul",h,[Object(c["h"])("li",m,[Object(c["j"])(o,{class:"nav-link",to:"/"},{default:Object(c["H"])((function(){return[O]})),_:1})]),Object(c["h"])("li",y,[Object(c["j"])(o,{class:"nav-link",to:"/board"},{default:Object(c["H"])((function(){return[j]})),_:1})]),Object(c["h"])("li",g,[Object(c["j"])(o,{class:"nav-link",to:"/profile"},{default:Object(c["H"])((function(){return[v]})),_:1})]),Object(c["h"])("li",w,[Object(c["h"])("a",{class:"nav-link",onClick:t[0]||(t[0]=function(){return s.logout&&s.logout.apply(s,arguments)})},"Log Out")])])):(Object(c["t"])(),Object(c["g"])("ul",_,[Object(c["h"])("li",D,[Object(c["j"])(o,{class:"nav-link",to:"/"},{default:Object(c["H"])((function(){return[k]})),_:1})]),Object(c["h"])("li",x,[Object(c["j"])(o,{class:"nav-link",to:"/register"},{default:Object(c["H"])((function(){return[R]})),_:1})]),Object(c["h"])("li",M,[Object(c["j"])(o,{class:"nav-link",to:"/login"},{default:Object(c["H"])((function(){return[C]})),_:1})])]))])])])])}var A=n("1da1"),S=(n("96cf"),{name:"NavBar",computed:{isLoggedIn:function(){return this.$store.getters.isAuthenticated}},methods:{logout:function(){var e=this;return Object(A["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("logOut");case 2:e.$router.push("/login");case 3:case"end":return t.stop()}}),t)})))()}}}),I=(n("1430"),n("6b0d")),Y=n.n(I);const P=Y()(S,[["render",T],["__scopeId","data-v-9ea10fbc"]]);var U=P,L={components:{NavBar:U}};n("f49f");const H=Y()(L,[["render",u]]);var $=H,V=n("6c02"),B=Object(c["h"])("p",null,"This site is built with FastAPI and Vue.",-1),z={key:0,id:"logout"},F=Object(c["h"])("p",{id:"logout"},[Object(c["i"])("Click "),Object(c["h"])("a",{href:"/board"},"here"),Object(c["i"])(" to view days.")],-1),N=[F],E={key:1},Z=Object(c["h"])("span",null,[Object(c["h"])("a",{href:"/register"},"Register")],-1),J=Object(c["h"])("span",null," or ",-1),q=Object(c["h"])("span",null,[Object(c["h"])("a",{href:"/login"},"Log In")],-1),G=[Z,J,q];function K(e,t,n,a,r,s){return Object(c["t"])(),Object(c["g"])("section",null,[B,s.isLoggedIn?(Object(c["t"])(),Object(c["g"])("div",z,N)):(Object(c["t"])(),Object(c["g"])("p",E,G))])}var Q={name:"Home",computed:{isLoggedIn:function(){return this.$store.getters.isAuthenticated}}};const W=Y()(Q,[["render",K]]);var X=W,ee=(n("b0c0"),{class:"mb-3"}),te=Object(c["h"])("label",{for:"name",class:"form-label"},"Username:",-1),ne={class:"mb-3"},ae=Object(c["h"])("label",{for:"password",class:"form-label"},"Password:",-1),re=Object(c["h"])("button",{type:"submit",class:"btn btn-primary"},"Submit",-1);function ce(e,t,n,a,r,s){return Object(c["t"])(),Object(c["g"])("section",null,[Object(c["h"])("form",{onSubmit:t[2]||(t[2]=Object(c["J"])((function(){return s.submit&&s.submit.apply(s,arguments)}),["prevent"]))},[Object(c["h"])("div",ee,[te,Object(c["I"])(Object(c["h"])("input",{type:"text",name:"name","onUpdate:modelValue":t[0]||(t[0]=function(e){return r.user.name=e}),class:"form-control"},null,512),[[c["F"],r.user.name]])]),Object(c["h"])("div",ne,[ae,Object(c["I"])(Object(c["h"])("input",{type:"password",name:"password","onUpdate:modelValue":t[1]||(t[1]=function(e){return r.user.password=e}),class:"form-control"},null,512),[[c["F"],r.user.password]])]),re],32)])}var se=n("5530"),oe=n("5502"),ue={name:"Register",data:function(){return{user:{name:"",password:""}}},methods:Object(se["a"])(Object(se["a"])({},Object(oe["b"])(["register"])),{},{submit:function(){var e=this;return Object(A["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.register(e.user);case 3:e.$router.push("/board"),t.next=9;break;case 6:throw t.prev=6,t.t0=t["catch"](0),"Username already exists. Please try again.";case 9:case"end":return t.stop()}}),t,null,[[0,6]])})))()}})};const ie=Y()(ue,[["render",ce]]);var le=ie,de={class:"mb-3"},be=Object(c["h"])("label",{for:"user",class:"form-label"},"Username:",-1),fe={class:"mb-3"},pe=Object(c["h"])("label",{for:"password",class:"form-label"},"Password:",-1),he=Object(c["h"])("button",{type:"submit",class:"btn btn-primary"},"Submit",-1);function me(e,t,n,a,r,s){return Object(c["t"])(),Object(c["g"])("section",null,[Object(c["h"])("form",{onSubmit:t[2]||(t[2]=Object(c["J"])((function(){return s.submit&&s.submit.apply(s,arguments)}),["prevent"]))},[Object(c["h"])("div",de,[be,Object(c["I"])(Object(c["h"])("input",{type:"text",name:"username","onUpdate:modelValue":t[0]||(t[0]=function(e){return r.form.username=e}),class:"form-control"},null,512),[[c["F"],r.form.username]])]),Object(c["h"])("div",fe,[pe,Object(c["I"])(Object(c["h"])("input",{type:"password",name:"password","onUpdate:modelValue":t[1]||(t[1]=function(e){return r.form.password=e}),class:"form-control"},null,512),[[c["F"],r.form.password]])]),he],32)])}var Oe={name:"Login",data:function(){return{form:{username:"",password:""}}},methods:Object(se["a"])(Object(se["a"])({},Object(oe["b"])(["logIn"])),{},{submit:function(){var e=this;return Object(A["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=new FormData,n.append("username",e.form.username),n.append("password",e.form.password),t.next=5,e.logIn(n);case 5:e.$router.push("/board");case 6:case"end":return t.stop()}}),t)})))()}})};const ye=Y()(Oe,[["render",me]]);var je=ye,ge=Object(c["h"])("h1",null,"Your Profile",-1),ve=Object(c["h"])("hr",null,null,-1),we=Object(c["h"])("br",null,null,-1),_e=Object(c["h"])("strong",null,"Id:",-1),De=Object(c["i"])(),ke=Object(c["h"])("strong",null,"Username:",-1),xe=Object(c["i"])();function Re(e,t,n,a,r,s){return Object(c["t"])(),Object(c["g"])("section",null,[ge,ve,we,Object(c["h"])("div",null,[Object(c["h"])("p",null,[_e,De,Object(c["h"])("span",null,Object(c["C"])(e.user?e.user.id:""),1)]),Object(c["h"])("p",null,[ke,xe,Object(c["h"])("span",null,Object(c["C"])(e.user?e.user.name:""),1)])])])}var Me={name:"Profile",created:function(){var e=Object(A["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.$store.dispatch("viewMe");case 3:e.next=10;break;case 5:return e.prev=5,e.t0=e["catch"](0),console.error(e.t0),e.next=10,this.$router.push("/login");case 10:case"end":return e.stop()}}),e,this,[[0,5]])})));function t(){return e.apply(this,arguments)}return t}(),computed:Object(se["a"])({},Object(oe["c"])({user:"stateUser",token:"stateToken"}))};const Ce=Y()(Me,[["render",Re]]);var Te=Ce,Ae=function(e){return Object(c["w"])("data-v-2632ee8a"),e=e(),Object(c["u"])(),e},Se={id:"training_day_types"},Ie={key:0},Ye={id:"schedule"},Pe={class:"schedule"},Ue=Ae((function(){return Object(c["h"])("br",null,null,-1)})),Le=Ae((function(){return Object(c["h"])("br",null,null,-1)})),He=Ae((function(){return Object(c["h"])("br",null,null,-1)})),$e={key:0,class:"modal"},Ve=["value"],Be=Ae((function(){return Object(c["h"])("br",null,null,-1)})),ze=["value"],Fe={class:"form-floating"},Ne=Ae((function(){return Object(c["h"])("label",{for:"floatingTextarea2"},"Коментарий",-1)})),Ee={class:"modal-footer"};function Ze(e,t,n,a,r,s){var o,u,i,l=Object(c["A"])("BoardDayCell");return Object(c["t"])(),Object(c["g"])(c["a"],null,[Object(c["h"])("div",null,[Object(c["h"])("section",null,[Object(c["h"])("div",Se,[r.training_day_types_label?(Object(c["t"])(),Object(c["g"])("span",Ie,Object(c["C"])(r.training_day_types_label),1)):Object(c["f"])("",!0)]),Object(c["h"])("div",Ye,[Object(c["h"])("table",Pe,[Object(c["h"])("thead",null,[Object(c["h"])("tr",null,[(Object(c["t"])(!0),Object(c["g"])(c["a"],null,Object(c["z"])(r.header,(function(e){return Object(c["t"])(),Object(c["g"])("th",{key:e},Object(c["C"])(e),1)})),128))])]),Object(c["h"])("tbody",null,[(Object(c["t"])(!0),Object(c["g"])(c["a"],null,Object(c["z"])(r.weeks,(function(t){return Object(c["t"])(),Object(c["g"])("tr",{key:t},[(Object(c["t"])(!0),Object(c["g"])(c["a"],null,Object(c["z"])(t,(function(t){return Object(c["t"])(),Object(c["g"])("td",{key:t,class:Object(c["p"])({scheduled:s.isScheduled(t.format("YYYY-MM-DD"))})},[Object(c["h"])("span",null,Object(c["C"])(t.format("DD MMM")),1),Ue,Object(c["h"])("p",null,[Object(c["j"])(l,{day:t,day_data:e.days[t.format("YYYY-MM-DD")],add_handler:s.onAddClick,del_handler:s.onDelClick},null,8,["day","day_data","add_handler","del_handler"])])],2)})),128))])})),128))])])])]),Le,He]),(Object(c["t"])(),Object(c["e"])(c["b"],{to:"body"},[r.openAddDayModal?(Object(c["t"])(),Object(c["g"])("div",$e,[Object(c["h"])("p",null,"Дата: "+Object(c["C"])(r.addDayData.day.format("dd DD MMM")),1),Object(c["I"])(Object(c["h"])("select",{"onUpdate:modelValue":t[0]||(t[0]=function(e){return r.addDayData.training_day_type=e}),class:"form-select form-select-lg mb-3","aria-label":"Тип треннировки"},[(Object(c["t"])(!0),Object(c["g"])(c["a"],null,Object(c["z"])(e.training_day_types,(function(e){return Object(c["t"])(),Object(c["g"])("option",{value:e,key:e.id},Object(c["C"])(e.name),9,Ve)})),128))],512),[[c["E"],r.addDayData.training_day_type]]),Be,null!==(o=r.addDayData)&&void 0!==o&&null!==(u=o.training_day_type)&&void 0!==u&&null!==(i=u.details)&&void 0!==i&&i.subtypes?Object(c["I"])((Object(c["t"])(),Object(c["g"])("select",{key:0,"onUpdate:modelValue":t[1]||(t[1]=function(e){return r.addDayData.training_day_subtype=e}),class:"form-select form-select-sm"},[(Object(c["t"])(!0),Object(c["g"])(c["a"],null,Object(c["z"])(r.addDayData.training_day_type.details.subtypes,(function(e){return Object(c["t"])(),Object(c["g"])("option",{value:e,key:e.id},Object(c["C"])(e.name),9,ze)})),128))],512)),[[c["E"],r.addDayData.training_day_subtype]]):Object(c["f"])("",!0),Object(c["h"])("div",Fe,[Object(c["I"])(Object(c["h"])("textarea",{"onUpdate:modelValue":t[2]||(t[2]=function(e){return r.addDayData.comment=e}),class:"form-control",placeholder:"Leave a comment here",id:"floatingTextarea2",style:{height:"100px"}},null,512),[[c["F"],r.addDayData.comment]]),Ne]),Object(c["h"])("div",Ee,[Object(c["h"])("button",{onClick:t[3]||(t[3]=function(){return s.closeAddDay&&s.closeAddDay.apply(s,arguments)}),class:"btn btn-outline-secondary"},"Закрыть"),Object(c["h"])("button",{onClick:t[4]||(t[4]=function(){return s.createDay&&s.createDay.apply(s,arguments)}),style:{align:"right"},class:"btn btn-primary"},"Отправить")])])):Object(c["f"])("",!0)]))],64)}var Je=n("b85c"),qe=(n("e9c4"),n("4e82"),n("d3b7"),n("3ca3"),n("ddb0"),n("a15b"),n("d81d"),n("99af"),n("e56d")),Ge=function(e){return Object(c["w"])("data-v-1457dce4"),e=e(),Object(c["u"])(),e},Ke={key:0},Qe=Ge((function(){return Object(c["h"])("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-trash3",viewBox:"0 0 16 16"},[Object(c["h"])("path",{d:"M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"})],-1)})),We=[Qe],Xe=Ge((function(){return Object(c["h"])("i",{class:"bi bi-plus-square"},[Object(c["h"])("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-plus-square",viewBox:"0 0 16 16"},[Object(c["h"])("path",{d:"M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"}),Object(c["h"])("path",{d:"M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"})])],-1)})),et=[Xe];function tt(e,t,n,a,r,s){return n.day_data?(Object(c["t"])(),Object(c["g"])("div",Ke,[Object(c["h"])("span",null,[Object(c["i"])(Object(c["C"])(s.render_day(n.day_data))+" ",1),Object(c["h"])("i",{class:"bi bi-trash3",onClick:t[0]||(t[0]=function(e){return s.onDayDelClick(e,n.day)})},We),Object(c["h"])("p",null,Object(c["C"])(s.render_comment(n.day_data)),1)])])):(Object(c["t"])(),Object(c["g"])("span",{key:1,onClick:t[1]||(t[1]=function(e){return s.onDayAddClick(e,n.day)})},et))}n("4de4");var nt={name:"BoardDayCell",props:["day","day_data","add_handler","del_handler"],created:function(){var e=Object(A["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}(),methods:{onDayDelClick:function(e,t){var n=this;return Object(A["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,n.del_handler(t);case 2:case"end":return e.stop()}}),e)})))()},onDayAddClick:function(e,t){var n=this;return Object(A["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,n.add_handler(t);case 2:case"end":return e.stop()}}),e)})))()},render_comment:function(e){return e.map((function(e){var t,n="";return null!==(t=e.details)&&void 0!==t&&t.comment&&(n=e.details.comment),n})).join(",")},render_day:function(e){return e.map((function(e){var t;if(null!==(t=e.details)&&void 0!==t&&t.subtype_id){var n=e.training_day_type.details.subtypes.filter((function(t){return t.id===e.details.subtype_id}))[0];if(n)return"".concat(e.training_day_type.name,"(").concat(n.name,")")}return"".concat(e.training_day_type.name)})).join(",")}}};n("e1b8");const at=Y()(nt,[["render",tt],["__scopeId","data-v-1457dce4"]]);var rt=at,ct=function(e){return qe(e).locale("ru")},st=function(){for(var e=ct().startOf("week"),t=ct().endOf("week"),n=[],a=e;a<=t;a.add(1,"days"))n.push(a.format("dd"));return n},ot=function(e,t){for(var n=[],a=e;a<=t;a.add(1,"day"))n.push(a.clone());return n},ut={name:"Board",components:{BoardDayCell:rt},methods:{prettify:function(e){return JSON.stringify(e,null,2)},getPrevDay:function(e){var t=[];for(var n in this.days)n<e&&t.push(n);t.sort();var a=t[t.length-1];return a?this.days[a]:null},getLastEx:function(e){if(e)return e[e.length-1]},getNextTrainingDayType:function(e,t){var n;if(!t)return null;var a=t.training_day_type.id,r=e&&e.details?e.details.subtype_id:null,c=null,s=null;for(var o in this.training_day_types)if(this.training_day_types[o].id===a){c=+o;break}if(null===c)return null;s=c>=this.training_day_types.length-1?0:+c+1;var u=this.training_day_types[s];if(null!==u&&void 0!==u&&null!==(n=u.details)&&void 0!==n&&n.subtypes){var i=null,l=null,d=this.training_day_types[s].details.subtypes;for(var b in this.training_day_types)if(d[b].id===r){i=b;break}return l=i>=d.length-1?0:+i+1,{type:u,subtype:d[l]}}return{type:u}},onDelClick:function(e){var t=this;return Object(A["a"])(regeneratorRuntime.mark((function n(){var a,r,c,s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:a=[],r=Object(Je["a"])(t.days[e.format("YYYY-MM-DD")]);try{for(r.s();!(c=r.n()).done;)s=c.value,a.push(t.$store.dispatch("deleteDay",s.date))}catch(o){r.e(o)}finally{r.f()}return n.next=5,Promise.all(a);case 5:return n.next=7,t.$store.dispatch("getDays");case 7:case"end":return n.stop()}}),n)})))()},onAddClick:function(e){var t=this;return Object(A["a"])(regeneratorRuntime.mark((function n(){var a,r,c;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:a=t.getLastEx(t.getPrevDay(e.format("YYYY-MM-DD"))),r=t.getLastEx(t.getPrevDay(ct(null===a||void 0===a?void 0:a.date).format("YYYY-MM-DD"))),c=t.getNextTrainingDayType(r,a),t.addDayData={day:e,training_day_type:null===c||void 0===c?void 0:c.type,training_day_subtype:null===c||void 0===c?void 0:c.subtype},t.openAddDayModal=!0;case 5:case"end":return n.stop()}}),n)})))()},isScheduled:function(e){return!!this.schedule.dates[e]},closeAddDay:function(){var e=this;return Object(A["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.openAddDayModal=!1,e.addDayData=null;case 2:case"end":return t.stop()}}),t)})))()},createDay:function(){var e=this;return Object(A["a"])(regeneratorRuntime.mark((function t(){var n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n={},e.addDayData.comment&&(n.comment=e.addDayData.comment),e.addDayData.training_day_subtype&&(n.subtype_id=e.addDayData.training_day_subtype.id),a={date:e.addDayData.day,training_day_type_id:e.addDayData.training_day_type.id,details:n},e.$store.dispatch("createDay",a),e.openAddDayModal=!1,e.addDayData=null;case 7:case"end":return t.stop()}}),t)})))()}},created:function(){var e=Object(A["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.$store.commit("setRange",{from_date:ct().startOf("week").add(-7,"day"),to_date:ct().endOf("week").add(7,"day")});case 3:return e.next=5,Promise.all([this.$store.dispatch("getDays"),this.$store.dispatch("getSchedule"),this.$store.dispatch("getTrainigDayTypes")]);case 5:this.training_day_types_label=this.training_day_types.map((function(e){var t;if(null!==e&&void 0!==e&&null!==(t=e.details)&&void 0!==t&&t.subtypes){var n=e.details.subtypes.map((function(e){return e.name})).join(", ");return"".concat(e.name,"(").concat(n,")")}return e.name})).join(", "),e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,this,[[0,8]])})));function t(){return e.apply(this,arguments)}return t}(),data:function(){return{openAddDayModal:!1,addDayData:null,training_day_types_label:"",start:10,header:st(),week:ot(ct().startOf("week"),ct().endOf("week")),weeks:[ot(ct().startOf("week").add(-7,"day"),ct().endOf("week").add(-7,"day")),ot(ct().startOf("week"),ct().endOf("week")),ot(ct().startOf("week").add(7,"day"),ct().endOf("week").add(7,"day"))],date_start:ct().startOf("week").add(-7,"day"),date_end:ct().endOf("week").add(7,"day"),form:{title:"",content:""}}},computed:Object(se["a"])({},Object(oe["c"])({days:"stateDays",day:"stateDay",training_day_types:"stateTrainingDayTypes",schedule:"stateSchedule"}))};n("8d63");const it=Y()(ut,[["render",Ze],["__scopeId","data-v-2632ee8a"]]);var lt=it,dt=[{path:"/",name:"Home",component:X},{path:"/register",name:"Register",component:le},{path:"/login",name:"Login",component:je},{path:"/profile",name:"Profile",component:Te},{path:"/board",name:"Board",component:lt}],bt=Object(V["a"])({history:Object(V["b"])("/"),routes:dt}),ft=bt,pt=n("0e44"),ht=n("8468"),mt=function(e){return qe(e).locale("ru")},Ot={from_date:null,to_date:null,training_day_types:null,schedule:null,days:null,day:null},yt={stateDays:function(e){return e.days},stateDay:function(e){return e.day},stateTrainingDayTypes:function(e){return e.training_day_types},stateSchedule:function(e){return e.schedule},stateDaysRange:function(e){return{from_date:e.from_date,to_date:e.to_date}}},jt={createDay:function(e,t){return Object(A["a"])(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=e.dispatch,n.next=3,r.a.post("day/",t);case 3:return n.next=5,a("getDays");case 5:case"end":return n.stop()}}),n)})))()},getDays:function(e){return Object(A["a"])(regeneratorRuntime.mark((function t(){var n,a,c,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,a=e.getters,t.next=3,r.a.get("days/",{params:{from_date:a.stateDaysRange.from_date.toISOString(),to_date:a.stateDaysRange.to_date.toISOString()}});case 3:c=t.sent,s=c.data,n("setDays",s);case 6:case"end":return t.stop()}}),t)})))()},getSchedule:function(e){return Object(A["a"])(regeneratorRuntime.mark((function t(){var n,a,c,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,a=e.getters,t.next=3,r.a.get("schedule/",{params:{from_date:a.stateDaysRange.from_date.toISOString(),to_date:a.stateDaysRange.to_date.toISOString()}});case 3:c=t.sent,s=c.data,n("setSchedule",s);case 6:case"end":return t.stop()}}),t)})))()},getTrainigDayTypes:function(e){return Object(A["a"])(regeneratorRuntime.mark((function t(){var n,a,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,r.a.get("training_day_types/");case 3:a=t.sent,c=a.data,n("setTrainigDayTypes",c);case 6:case"end":return t.stop()}}),t)})))()},viewDay:function(e,t){return Object(A["a"])(regeneratorRuntime.mark((function n(){var a,c,s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=e.commit,n.next=3,r.a.get("day/".concat(t));case 3:c=n.sent,s=c.data,a("setDay",s);case 6:case"end":return n.stop()}}),n)})))()},updateDay:function(e,t){return Object(A["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return Object(ht["a"])(e),n.next=3,r.a.patch("day/".concat(t.id),t.form);case 3:case"end":return n.stop()}}),n)})))()},deleteDay:function(e,t){return Object(A["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return Object(ht["a"])(e),n.next=3,r.a.delete("day/".concat(t,"/"));case 3:case"end":return n.stop()}}),n)})))()}},gt={setSchedule:function(e,t){var n,a={},r=Object(Je["a"])(t);try{for(r.s();!(n=r.n()).done;){var c,s=n.value,o=Object(Je["a"])(s.dates);try{for(o.s();!(c=o.n()).done;){var u=c.value;a[u]=!0}}catch(i){o.e(i)}finally{o.f()}}}catch(i){r.e(i)}finally{r.f()}e.schedule={schedules:t,dates:a}},setTrainigDayTypes:function(e,t){e.training_day_types=t},setRange:function(e,t){var n=t.from_date,a=t.to_date;e.from_date=n,e.to_date=a},setDays:function(e,t){var n,a={},r=Object(Je["a"])(t);try{for(r.s();!(n=r.n()).done;){var c=n.value,s=mt(c.date).startOf("day").format("YYYY-MM-DD");void 0===a[s]&&(a[s]=[]),a[s].push(c)}}catch(o){r.e(o)}finally{r.f()}e.days=a},setDay:function(e,t){e.day=t}},vt={state:Ot,getters:yt,actions:jt,mutations:gt},wt={user:null,token:null},_t={isAuthenticated:function(e){return!!e.token},stateUser:function(e){return e.user},stateToken:function(e){return e.token}},Dt={register:function(e,t){return Object(A["a"])(regeneratorRuntime.mark((function n(){var a,c,s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=e.commit,n.next=3,r.a.post("sign-up",t);case 3:return c=n.sent,s=c.data,n.next=7,a("setUser",s);case 7:return n.next=9,a("setToken","bearer ".concat(s.token.access_token));case 9:case"end":return n.stop()}}),n)})))()},logIn:function(e,t){return Object(A["a"])(regeneratorRuntime.mark((function n(){var a,c,s,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=e.dispatch,c=e.commit,n.next=3,r.a.post("auth",t);case 3:return s=n.sent,o=s.data,n.next=7,c("setToken","bearer ".concat(o.access_token));case 7:return n.next=9,a("viewMe");case 9:case"end":return n.stop()}}),n)})))()},viewMe:function(e){return Object(A["a"])(regeneratorRuntime.mark((function t(){var n,a,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.prev=1,t.next=4,r.a.get("users/me");case 4:return a=t.sent,c=a.data,t.next=8,n("setUser",c);case 8:t.next=14;break;case 10:t.prev=10,t.t0=t["catch"](1),r.a.defaults.headers.common=null,n("logout",null);case 14:case"end":return t.stop()}}),t,null,[[1,10]])})))()},logOut:function(e){return Object(A["a"])(regeneratorRuntime.mark((function t(){var n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n=e.commit,a=null,r.a.defaults.headers.common=null,n("logout",a);case 4:case"end":return t.stop()}}),t)})))()}},kt={setUser:function(e,t){e.user=t},setToken:function(e,t){e.token=t},logout:function(e,t){e.user=t,this.commit("setToken",null)}},xt={state:wt,getters:_t,actions:Dt,mutations:kt},Rt=new oe["a"].Store({modules:{notes:vt,users:xt},plugins:[Object(pt["a"])()]});r.a.defaults.withCredentials=!0,r.a.defaults.baseURL="/";var Mt=Object(c["d"])($).use(ft);Mt.use(Rt),r.a.interceptors.request.use((function(e){var t=Rt.state.users.token;return t?e.headers.Authorization=t:delete e.headers.Authorization,e})),Mt.mount("#app")},"59cd":function(e,t,n){},6206:function(e,t,n){},"8d63":function(e,t,n){"use strict";n("9938")},9938:function(e,t,n){},e1b8:function(e,t,n){"use strict";n("6206")},e515:function(e,t,n){var a={"./ru":"0785","./ru.js":"0785"};function r(e){var t=c(e);return n(t)}function c(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=c,e.exports=r,r.id="e515"},f49f:function(e,t,n){"use strict";n("5421")}});
//# sourceMappingURL=app.9f47bc7d.js.map