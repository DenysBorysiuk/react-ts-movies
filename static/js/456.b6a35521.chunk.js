"use strict";(self.webpackChunkreact_ts_movies=self.webpackChunkreact_ts_movies||[]).push([[456],{5456:function(n,r,t){t.r(r),t.d(r,{default:function(){return _}});var e,a,c,u,i,s,o=t(4165),p=t(5861),f=t(9439),d=t(2791),x=t(7689),v=t(7080),h=t(168),l=t(3081),Z=l.Z.ul(e||(e=(0,h.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n"]))),g=l.Z.li(a||(a=(0,h.Z)(["\n  border-radius: 5px;\n  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),\n    1px 4px 6px rgba(0, 0, 0, 0.16);\n  text-align: center;\n"]))),m=l.Z.div(c||(c=(0,h.Z)(["\n  border-radius: 5px;\n  overflow: hidden;\n  width: 150px;\n  height: 150px;\n"]))),w=l.Z.div(u||(u=(0,h.Z)(["\n  padding: 4px;\n  width: 142px;\n"]))),b=l.Z.h2(i||(i=(0,h.Z)(["\n  font-size: 12px;\n  margin-bottom: 4px;\n"]))),k=l.Z.p(s||(s=(0,h.Z)(["\n  font-size: 12px;\n"]))),y=t(1306),j=t(184),_=function(){var n=(0,d.useState)([]),r=(0,f.Z)(n,2),t=r[0],e=r[1],a=(0,x.UO)().movieId;return(0,d.useEffect)((function(){if(a){var n=new AbortController,r=n.signal,t=function(){var n=(0,p.Z)((0,o.Z)().mark((function n(){var t;return(0,o.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,v.zv)(a,r);case 3:t=n.sent,e(t.cast),n.next=12;break;case 7:if(n.prev=7,n.t0=n.catch(0),"CanceledError"!==n.t0.name){n.next=11;break}return n.abrupt("return");case 11:y.ZP.error("Oops, something went wrong");case 12:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}();return t(),function(){n.abort()}}}),[a]),(null===t||void 0===t?void 0:t.length)>0?(0,j.jsx)(Z,{children:t.map((function(n){var r=n.cast_id,t=n.name,e=n.character,a=n.profile_path;return(0,j.jsxs)(g,{children:[(0,j.jsx)(m,{children:(0,j.jsx)("img",{src:a?"https://image.tmdb.org/t/p/w500".concat(a):"https://via.placeholder.com/150x150.png?text=No+photo",alt:t})}),(0,j.jsxs)(w,{children:[(0,j.jsx)(b,{children:t}),(0,j.jsx)(k,{children:e})]})]},r)}))}):(0,j.jsx)("p",{children:"We don`t have cast for this movie"})}},7080:function(n,r,t){t.d(r,{Df:function(){return u},TP:function(){return i},qF:function(){return s},tx:function(){return p},zv:function(){return o}});var e=t(4165),a=t(5861),c=t(1243);c.Z.defaults.baseURL="https://api.themoviedb.org/3",c.Z.defaults.params={api_key:"b60c32a6f6f2663f6a35c755ff35b4cc"};var u=function(){var n=(0,a.Z)((0,e.Z)().mark((function n(r,t,a){var u;return(0,e.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/trending/movie/".concat(r,"?page=").concat(t),{signal:a});case 2:return u=n.sent,n.abrupt("return",u.data);case 4:case"end":return n.stop()}}),n)})));return function(r,t,e){return n.apply(this,arguments)}}(),i=function(){var n=(0,a.Z)((0,e.Z)().mark((function n(r,t){var a;return(0,e.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/movie/".concat(r),{signal:t});case 2:return a=n.sent,n.abrupt("return",a.data);case 4:case"end":return n.stop()}}),n)})));return function(r,t){return n.apply(this,arguments)}}(),s=function(){var n=(0,a.Z)((0,e.Z)().mark((function n(r,t,a){var u;return(0,e.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/search/movie?query=".concat(r,"&page=").concat(t),{signal:a});case 2:return u=n.sent,n.abrupt("return",u.data);case 4:case"end":return n.stop()}}),n)})));return function(r,t,e){return n.apply(this,arguments)}}(),o=function(){var n=(0,a.Z)((0,e.Z)().mark((function n(r,t){var a;return(0,e.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/movie/".concat(r,"/credits"),{signal:t});case 2:return a=n.sent,n.abrupt("return",a.data);case 4:case"end":return n.stop()}}),n)})));return function(r,t){return n.apply(this,arguments)}}(),p=function(){var n=(0,a.Z)((0,e.Z)().mark((function n(r,t){var a;return(0,e.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/movie/".concat(r,"/reviews"),{signal:t});case 2:return a=n.sent,n.abrupt("return",a.data);case 4:case"end":return n.stop()}}),n)})));return function(r,t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=456.b6a35521.chunk.js.map