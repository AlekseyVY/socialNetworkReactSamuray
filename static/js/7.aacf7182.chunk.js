(this["webpackJsonptestjs-soc"]=this["webpackJsonptestjs-soc"]||[]).push([[7],{227:function(e,n,t){"use strict";t.d(n,"a",(function(){return g}));var r=t(3),a=t(4),s=t(54),c=t(55),o=t(57),i=t(56),u=t(8),l=t(0),p=t(29),f=function(e){return{isAuth:e.authReducer.isAuth}},g=function(e){var n=function(n){Object(o.a)(l,n);var t=Object(i.a)(l);function l(){return Object(s.a)(this,l),t.apply(this,arguments)}return Object(c.a)(l,[{key:"render",value:function(){return this.props.isAuth?Object(a.jsx)(e,Object(r.a)({},this.props)):Object(a.jsx)(u.a,{to:"/login"})}}]),l}(l.Component);return Object(p.b)(f)(n)}},228:function(e,n,t){"use strict";n.a=t.p+"static/media/main-prof.b552d7c1.jpg"},294:function(e,n,t){e.exports={container:"user_container__1SO53",avatar_container:"user_avatar_container__1l8Am",avatar:"user_avatar__1hoW9",user_info_container_left:"user_user_info_container_left__EGCmc",user_info_container:"user_user_info_container__1ZBWR",lesser_container:"user_lesser_container__ZaPwt",notActivePage:"user_notActivePage__1JrCX",activePage:"user_activePage__3NZ93"}},295:function(e,n,t){e.exports={container:"UsersContainer_container__2UD5L",selectedPage:"UsersContainer_selectedPage__2LeMf",numbers:"UsersContainer_numbers__vh4-u"}},296:function(e,n,t){e.exports={notActivePage:"pageNumber_notActivePage__2AOu6",activePage:"pageNumber_activePage__3FQCD"}},309:function(e,n,t){"use strict";t.r(n);var r=t(4),a=t(54),s=t(55),c=t(57),o=t(56),i=t(294),u=t.n(i),l=t(228),p=t(40),f=function(e){var n=e.user,t=e.followU,a=e.followingProcess;return Object(r.jsxs)("div",{className:u.a.container,children:[Object(r.jsxs)("div",{className:u.a.avatar_container,children:[Object(r.jsx)("img",{className:u.a.avatar,src:n.photos.small||l.a,alt:"Avatar"}),n.followed?Object(r.jsx)("button",{className:u.a.activePage,onClick:function(){return t(!1,n.id)},children:"unfollow"}):Object(r.jsx)("button",{disabled:a.some((function(e){return e===n.id})),className:u.a.notActivePage,onClick:function(){return t(!0,n.id)},children:"follow"})]}),Object(r.jsx)(p.b,{className:u.a.user_info_container,to:"/profile/".concat(n.id),children:Object(r.jsxs)("div",{className:u.a.lesser_container,children:[Object(r.jsxs)("div",{children:[Object(r.jsx)("strong",{children:"Full Name:"})," ",n.name]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("strong",{children:"Status:"})," ",n.status||"No status"]})]})})]})},g=t(0),h=t(295),j=t.n(h),d=t(296),_=t.n(d),v=function(e){var n=e.page,t=e.currentPage,a=e.onPageChanged;return Object(r.jsx)("div",{className:_.a.page,children:t===n?Object(r.jsx)("button",{onClick:function(e){return a(n)},className:_.a.activePage,children:n}):Object(r.jsx)("button",{onClick:function(e){return a(n)},className:_.a.notActivePage,children:n})})},b=t(38),O=t(29),m=t(74),P=t(227),x=t(18);function C(e,n){return e===n}function w(e,n,t){if(null===n||null===t||n.length!==t.length)return!1;for(var r=n.length,a=0;a<r;a++)if(!e(n[a],t[a]))return!1;return!0}function y(e){var n=Array.isArray(e[0])?e[0]:e;if(!n.every((function(e){return"function"===typeof e}))){var t=n.map((function(e){return typeof e})).join(", ");throw new Error("Selector creators expect all input-selectors to be functions, instead received the following types: ["+t+"]")}return n}var A=function(e){for(var n=arguments.length,t=Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];return function(){for(var n=arguments.length,r=Array(n),a=0;a<n;a++)r[a]=arguments[a];var s=0,c=r.pop(),o=y(r),i=e.apply(void 0,[function(){return s++,c.apply(null,arguments)}].concat(t)),u=e((function(){for(var e=[],n=o.length,t=0;t<n;t++)e.push(o[t].apply(null,arguments));return i.apply(null,e)}));return u.resultFunc=c,u.dependencies=o,u.recomputations=function(){return s},u.resetRecomputations=function(){return s=0},u}}((function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:C,t=null,r=null;return function(){return w(n,t,arguments)||(r=e.apply(null,arguments)),t=arguments,r}}));var N=function(e){return e.userReducer.users},k=A(N,(function(e){return e.filter((function(e){return!0}))})),U=function(e){return e.userReducer.pageSize},F=function(e){return e.userReducer.currentPage},R=function(e){return e.userReducer.followingProcess},S=function(e){Object(c.a)(t,e);var n=Object(o.a)(t);function t(){var e;Object(a.a)(this,t);for(var r=arguments.length,s=new Array(r),c=0;c<r;c++)s[c]=arguments[c];return(e=n.call.apply(n,[this].concat(s))).pages=[1,2,3,4,5],e.onPageChanged=function(n){e.props.pageChange(n,e.props.currentPage,e.props.pageSize),n>=e.pages[e.pages.length-1]?(e.pages.push(n+1),e.pages.shift()):n<=e.pages[0]&&n>1&&(e.pages.unshift(n-1),e.pages.pop())},e}return Object(s.a)(t,[{key:"componentDidMount",value:function(){this.props.getUsersThunkCreator(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){var e=this,n=this.pages;return Object(r.jsx)("div",{className:j.a.container,children:this.props.isFetching?Object(r.jsx)(b.a,{}):Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{className:j.a.numbers,children:n.map((function(n,t){return Object(r.jsx)(v,{onPageChanged:e.onPageChanged,currentPage:e.props.currentPage,page:n},t)}))}),this.props.users.map((function(n){return Object(r.jsx)(f,{followingProcess:e.props.followingProcess,followU:e.props.getFollow,user:n},n.id)}))]})})}}]),t}(g.Component);n.default=Object(x.d)(Object(O.b)((function(e){return{users:k(e),pageSize:U(e),currentPage:F(e),followingProcess:R(e)}}),{getUsersThunkCreator:m.c,getFollow:m.b,pageChange:m.d}),P.a)(S)}}]);
//# sourceMappingURL=7.aacf7182.chunk.js.map