(this["webpackJsonptestjs-soc"]=this["webpackJsonptestjs-soc"]||[]).push([[1],{222:function(e,t,n){"use strict";n.r(t);var r=n(4),a=n(0),c=n.n(a),u=n(39),s=n.n(u),i=n(54),o=n(55),p=n(57),f=n(56),d=n(49),l=n.n(d),b=n(8),j=function(e){return Object(r.jsx)(r.Fragment,{children:"News"})},O=function(e){return Object(r.jsx)(r.Fragment,{children:"Music"})},h=function(e){return Object(r.jsx)(r.Fragment,{children:"Settings"})},g=n(29),m=n(18),v=n(2),w=n.n(v),x=n(7),y=n(3),_=n(9),S="SET_INITIALIZED",T={initialised:!1},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S:return Object(y.a)(Object(y.a)({},e),{},{initialised:t.data});default:return e}},I=n(38),k=function(e){return Object(r.jsx)(a.Suspense,{fallback:Object(r.jsx)("div",{children:Object(r.jsx)(I.a,{})}),children:e})},F=c.a.lazy((function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,307))})),A=c.a.lazy((function(){return n.e(6).then(n.bind(null,308))})),C=c.a.lazy((function(){return n.e(7).then(n.bind(null,309))})),N=c.a.lazy((function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,306))})),R=c.a.lazy((function(){return n.e(9).then(n.bind(null,310))})),U=c.a.lazy((function(){return Promise.all([n.e(0),n.e(8)]).then(n.bind(null,311))})),G=function(e){Object(p.a)(n,e);var t=Object(f.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.props.initThunk()}},{key:"render",value:function(){return this.props.initialised?Object(r.jsxs)("div",{className:l.a.app_wrapper,children:[k(Object(r.jsx)(R,{})),k(Object(r.jsx)(A,{})),Object(r.jsxs)("div",{className:l.a.container,children:[Object(r.jsx)(b.b,{path:"/dialogs",render:function(){return k(Object(r.jsx)(F,{}))}}),Object(r.jsx)(b.b,{path:"/profile/:userId?",render:function(){return k(Object(r.jsx)(N,{}))}}),Object(r.jsx)(b.b,{path:"/users",render:function(){return k(Object(r.jsx)(C,{}))}}),Object(r.jsx)(b.b,{path:"/news",component:j}),Object(r.jsx)(b.b,{path:"/music",component:O}),Object(r.jsx)(b.b,{path:"/settings",component:h}),Object(r.jsx)(b.b,{path:"/login",render:function(){return k(Object(r.jsx)(U,{}))}})]})]}):Object(r.jsx)(I.a,{})}}]),n}(a.Component),L=Object(m.d)(b.f,Object(g.b)((function(e){return{initialised:e.appReducer.initialised}}),{initThunk:function(){return function(){var e=Object(x.a)(w.a.mark((function e(t){var n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.a.auth();case 2:return n=e.sent,e.next=5,Promise.all([n]);case 5:t({type:"SET_INITIALIZED",data:!0});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}))(G),P={sideBar:{friends:[{name:"Aleksey"},{name:"Kirill"},{name:"Valera"}]}},D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P;return e},H=n(31),z=n(73),M=n(74),W=n(59),B=n(84),K=n(80),J=Object(m.c)({profileReducer:H.a,messageReducer:z.b,sideBarReducer:D,userReducer:M.a,authReducer:W.b,form:K.a,appReducer:E}),V=Object(m.e)(J,Object(m.a)(B.a)),Z=n(40);s.a.render(Object(r.jsx)(Z.a,{children:Object(r.jsx)(g.a,{store:V,children:Object(r.jsx)(L,{})})}),document.getElementById("root"))},31:function(e,t,n){"use strict";n.d(t,"c",(function(){return h})),n.d(t,"b",(function(){return g})),n.d(t,"e",(function(){return m})),n.d(t,"d",(function(){return v}));var r=n(2),a=n.n(r),c=n(7),u=n(20),s=n(3),i=n(9),o="ADD_POST",p="SET_USER_PROFILE",f="SET_ISFETCHING",d="SET_USER_ID",l="SET_STATUS",b={posts:[{id:1,message:"This is my first generic post",likesCount:0},{id:2,message:"This is my second generic post",likesCount:45}],profile:null,isFetching:!1,userId:null,status:""},j=function(e){return{type:"SET_USER_PROFILE",data:e}},O=function(){return{type:f}},h=function(e){return function(t){t(function(e){return{type:o,data:e}}(e))}},g=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.getStatus(e);case 2:r=t.sent,n({type:l,data:r});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},m=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.updateStatus(e);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:14529;return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(O()),t.next=3,i.b.getProfile(e);case 3:r=t.sent,n(O()),n(j(r));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case o:var n={id:e.posts.length+1,message:t.data,likesCount:0};return Object(s.a)(Object(s.a)({},e),{},{posts:[].concat(Object(u.a)(e.posts),[n])});case p:return Object(s.a)(Object(s.a)({},e),{},{profile:t.data});case f:return Object(s.a)(Object(s.a)({},e),{},{isFetching:!e.isFetching});case d:return Object(s.a)(Object(s.a)({},e),{},{userId:t.data});case l:return Object(s.a)(Object(s.a)({},e),{},{status:t.data});default:return e}}},38:function(e,t,n){"use strict";var r=n(4),a=n(83),c=n.n(a),u=n.p+"static/media/Bean Eater.559cdd74.gif";t.a=function(){return Object(r.jsx)("img",{className:c.a.loader,src:u,alt:"loader"})}},49:function(e,t,n){e.exports={app_wrapper:"App_app_wrapper__2dKyp",container:"App_container__2Wyv0"}},59:function(e,t,n){"use strict";n.d(t,"c",(function(){return g})),n.d(t,"d",(function(){return m})),n.d(t,"a",(function(){return v}));var r=n(2),a=n.n(r),c=n(7),u=n(3),s=n(9),i=n(41),o=n(31),p="SET_USER_DATA",f="IS_FETCHING",d="LOGOUT",l="LOGIN",b="SET_AUTH",j={userId:null,email:null,login:null,password:null,rememberMe:!1,isAuth:!1,isFetching:!1},O=function(e,t,n){return{type:"SET_USER_DATA",data:{userId:e,email:t,login:n}}},h=function(e,t,n){return{type:"LOGIN",data:{login:e,password:t,rememberMe:n}}},g=function(e,t,n){return function(){var r=Object(c.a)(a.a.mark((function r(c){var u,p;return a.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return c(h(e,t,n)),r.next=3,s.a.login(e,t,n);case 3:0===(u=r.sent).resultCode?(c(v()),c(Object(o.d)(u.data.userId))):(p=Object(i.a)("login",{_error:u.messages}),c(p));case 5:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()},m=function(){return function(){var e=Object(c.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.logout();case 2:0===e.sent.resultCode&&t({type:"LOGOUT"});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},v=function(){return function(){var e=Object(c.a)(a.a.mark((function e(t){var n,r,c,u,i;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"IS_FETCHING"}),e.next=3,s.a.auth();case 3:0===(n=e.sent).resultCode&&(r=n.data,c=r.id,u=r.email,i=r.login,t(O(c,u,i))),t({type:"IS_FETCHING"});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return Object(u.a)(Object(u.a)({},e),{},{isAuth:!0});case p:return Object(u.a)(Object(u.a)(Object(u.a)({},e),t.data),{},{isAuth:!0});case f:return Object(u.a)(Object(u.a)({},e),{},{isFetching:!e.isFetching});case d:return Object(u.a)(Object(u.a)({},e),{},{userId:null,email:null,login:null,isAuth:!1});case l:return Object(u.a)(Object(u.a)({},e),{},{login:t.data.login,password:t.data.password,rememberMe:t.data.rememberMe});default:return e}}},73:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var r=n(2),a=n.n(r),c=n(7),u=n(20),s=n(3),i="ADD_DIALOG",o={messageData:[{id:1,message:"generic message number one"},{id:2,message:"generic message number two"},{id:3,message:"generic message number three"},{id:4,message:"generic message number four"},{id:5,message:"generic message number five"}],dialogs:[{id:1,name:"Aleksey"},{id:2,name:"Kirill"},{id:3,name:"Valera"},{id:4,name:"BoevoyWertolet"},{id:5,name:"Ololosh"}]},p=function(e){return{type:"ADD_DIALOG",data:e}},f=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n(p(e));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case i:var n={id:e.messageData.length+1,message:t.data};return Object(s.a)(Object(s.a)({},e),{},{messageData:[].concat(Object(u.a)(e.messageData),[n])});default:return e}}},74:function(e,t,n){"use strict";n.d(t,"c",(function(){return v})),n.d(t,"b",(function(){return w})),n.d(t,"d",(function(){return x}));var r=n(2),a=n.n(r),c=n(7),u=n(20),s=n(3),i=n(9),o="FOLLOW",p="SET_USERS",f="SET_CURRENT_PAGE",d="SET_TOTAL_COUNT",l="SET_ISFETCHING",b="FOLLOWING_IN_PROGRESS",j={users:[],pageSize:5,totalUserCount:0,currentPage:1,isFetching:!1,followingProcess:[]},O=function(e){return{type:"FOLLOW",data:e}},h=function(e){return{type:"SET_USERS",data:e}},g=function(e){return{type:"SET_CURRENT_PAGE",data:e}},m=function(e,t){return{type:"FOLLOWING_IN_PROGRESS",data:{status:e,id:t}}},v=function(e,t){return function(){var n=Object(c.a)(a.a.mark((function n(r){var c;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r({type:"SET_ISFETCHING"}),n.next=3,i.c.getUsers(e,t);case 3:c=n.sent,r({type:"SET_ISFETCHING"}),r(h(c.items)),r({type:"SET_TOTAL_COUNT",data:c.totalCount});case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},w=function(e,t){return function(){var n=Object(c.a)(a.a.mark((function n(r){return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r(m(e,t)),!0!==e){n.next=8;break}return n.next=4,i.c.followUser(t);case 4:0===n.sent.resultCode&&(r(m(e,t)),r(O(t))),n.next=12;break;case 8:return n.next=10,i.c.unFollowUser(t);case 10:0===n.sent.resultCode&&(r(m(e,t)),r(O(t)));case 12:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},x=function(e,t,n){return function(){var r=Object(c.a)(a.a.mark((function r(c){var u;return a.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return c({type:"SET_ISFETCHING"}),c(g(e)),r.next=4,i.c.getUsers(t,n);case 4:u=r.sent,c({type:"SET_ISFETCHING"}),c(h(u.items));case 7:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case o:return Object(s.a)(Object(s.a)({},e),{},{users:e.users.map((function(e){return e.id===t.data?Object(s.a)(Object(s.a)({},e),{},{followed:!e.followed}):e}))});case p:return Object(s.a)(Object(s.a)({},e),{},{users:Object(u.a)(t.data)});case f:return Object(s.a)(Object(s.a)({},e),{},{currentPage:t.data});case d:return Object(s.a)(Object(s.a)({},e),{},{totalUserCount:t.data});case l:return Object(s.a)(Object(s.a)({},e),{},{isFetching:!e.isFetching});case b:return Object(s.a)(Object(s.a)({},e),{},{followingProcess:t.data.status?[].concat(Object(u.a)(e.followingProcess),[t.data.id]):Object(u.a)(e.followingProcess.filter((function(e){return t.data.id!==e})))});default:return e}}},83:function(e,t,n){e.exports={loader:"preloader_loader__1OwT_"}},9:function(e,t,n){"use strict";n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return p}));var r=n(2),a=n.n(r),c=n(7),u=n(82),s=n.n(u).a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"9e0ae487-73ea-4784-9bfc-7104c0689bd4"}}),i={getUsers:function(){var e=Object(c.a)(a.a.mark((function e(){var t,n,r,c=arguments;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=c.length>0&&void 0!==c[0]?c[0]:1,n=c.length>1&&void 0!==c[1]?c[1]:5,e.next=4,s.get("users?page=".concat(t,"&count=").concat(n));case 4:return r=e.sent,e.abrupt("return",r.data);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),followUser:function(){var e=Object(c.a)(a.a.mark((function e(t){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.post("follow/".concat(t),{});case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),unFollowUser:function(){var e=Object(c.a)(a.a.mark((function e(t){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.delete("follow/".concat(t));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},o={auth:function(){var e=Object(c.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("auth/me");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),login:function(){var e=Object(c.a)(a.a.mark((function e(t,n,r){var c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.post("auth/login",{email:t,password:n,rememberMe:r});case 2:return c=e.sent,e.abrupt("return",c.data);case 4:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),logout:function(){var e=Object(c.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.delete("auth/login");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},p={getProfile:function(){var e=Object(c.a)(a.a.mark((function e(){var t,n,r=arguments;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:14529,e.next=3,s.get("profile/".concat(t));case 3:return n=e.sent,e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),getStatus:function(){var e=Object(c.a)(a.a.mark((function e(){var t,n,r=arguments;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:14529,e.next=3,s.get("profile/status/".concat(t));case 3:return n=e.sent,e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),updateStatus:function(){var e=Object(c.a)(a.a.mark((function e(t){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.put("profile/status",{status:t});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}},[[222,2,3]]]);
//# sourceMappingURL=main.f65088e6.chunk.js.map