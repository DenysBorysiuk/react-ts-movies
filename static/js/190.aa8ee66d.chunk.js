"use strict";(self.webpackChunkreact_ts_movies=self.webpackChunkreact_ts_movies||[]).push([[190],{5190:function(n,e,r){r.r(e),r.d(e,{default:function(){return T}});var t,a,i,c,s,o,u=r(4165),l=r(5861),p=r(9439),d=r(2791),f=r(7689),x=r(4390),h=r(168),v=r(6444),g=r(1087),Z=v.ZP.div(t||(t=(0,h.Z)(["\n  display: flex;\n  justify-content: center;\n  margin-bottom: 40px;\n  gap: 60px;\n  text-align: left;\n"]))),m=v.ZP.div(a||(a=(0,h.Z)(["\n  border-radius: 5px;\n  overflow: hidden;\n  width: 400px;\n  height: 550px;\n"]))),w=v.ZP.div(i||(i=(0,h.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  width: 500px;\n"]))),j=(0,v.ZP)(g.OL)(c||(c=(0,h.Z)(["\n  color: black;\n  font-weight: 500;\n\n  &.active {\n    color: orangered;\n  }\n"]))),b=v.ZP.span(s||(s=(0,h.Z)(["\n  display: inline-block;\n  padding: 2px;\n  color: white;\n  background-color: orangered;\n  border-radius: 5px;\n"]))),k=r(184),y=function(n){var e=n.movie,r=e.poster_path,t=e.original_title,a=e.vote_average,i=e.overview,c=e.genres,s=e.release_date;return(0,k.jsxs)(Z,{children:[(0,k.jsx)(m,{children:(0,k.jsx)("img",{src:r?"https://image.tmdb.org/t/p/w500".concat(r):"https://via.placeholder.com/400x550.png?text=".concat(t),alt:t})}),(0,k.jsxs)(w,{children:[(0,k.jsxs)("h2",{children:[t," (",s.slice(0,4),")"]}),(0,k.jsxs)("p",{children:["User Score: ",(0,k.jsxs)(b,{children:[(10*a).toFixed(),"%"]})]}),(0,k.jsx)("h3",{children:"Overview"}),(0,k.jsx)("p",{children:i}),(0,k.jsx)("h3",{children:"Genres"}),(0,k.jsx)("p",{children:c.map((function(n){return"".concat(n.name,", ")}))}),(0,k.jsx)("h3",{children:"Additional information"}),(0,k.jsxs)("ul",{children:[(0,k.jsx)("li",{children:(0,k.jsx)(j,{to:"cast",children:"Cast"})}),(0,k.jsx)("li",{children:(0,k.jsx)(j,{to:"reviews",children:"Reviews"})})]})]})]})},P=r(8617),_=(0,v.ZP)(g.rU)(o||(o=(0,h.Z)(["\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  padding: 8px 0;\n  margin-bottom: 30px;\n  color: black;\n  text-decoration: none;\n  font-weight: 500;\n  text-transform: uppercase;\n\n  :hover {\n    color: orangered;\n  }\n"]))),C=function(n){var e=n.to,r=n.children;return(0,k.jsxs)(_,{to:e,children:[(0,k.jsx)(P.jTe,{size:"24"}),r]})},O=r(9014),T=function(){var n,e,r=(0,f.UO)().movieId,t=(0,d.useState)(null),a=(0,p.Z)(t,2),i=a[0],c=a[1],s=(0,f.TH)(),o=(0,d.useRef)(null!==(n=null===(e=s.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/");return(0,d.useEffect)((function(){var n=new AbortController,e=n.signal,t=function(){var n=(0,l.Z)((0,u.Z)().mark((function n(){var t;return(0,u.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,x.TP)(r,e);case 3:t=n.sent,c(t),n.next=12;break;case 7:if(n.prev=7,n.t0=n.catch(0),"CanceledError"!==n.t0.name){n.next=11;break}return n.abrupt("return");case 11:O.ZP.error("Oops, something went wrong");case 12:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}();return t(),function(){n.abort()}}),[r]),(0,k.jsxs)("main",{children:[(0,k.jsx)(C,{to:o.current,children:"Back to products"}),i&&(0,k.jsx)(y,{movie:i}),(0,k.jsx)(d.Suspense,{fallback:(0,k.jsx)("div",{children:"Loading..."}),children:(0,k.jsx)(f.j3,{})})]})}},4390:function(n,e,r){r.d(e,{Df:function(){return c},TP:function(){return s},qF:function(){return o},tx:function(){return l},zv:function(){return u}});var t=r(4165),a=r(5861),i=r(1243);i.Z.defaults.baseURL="https://api.themoviedb.org/3",i.Z.defaults.params={api_key:"b60c32a6f6f2663f6a35c755ff35b4cc"};var c=function(){var n=(0,a.Z)((0,t.Z)().mark((function n(e){var r;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/trending/movie/day",{signal:e});case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),s=function(){var n=(0,a.Z)((0,t.Z)().mark((function n(e,r){var a;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/movie/".concat(e),{signal:r});case 2:return a=n.sent,n.abrupt("return",a.data);case 4:case"end":return n.stop()}}),n)})));return function(e,r){return n.apply(this,arguments)}}(),o=function(){var n=(0,a.Z)((0,t.Z)().mark((function n(e,r){var a;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/search/movie?query=".concat(e),{signal:r});case 2:return a=n.sent,n.abrupt("return",a.data);case 4:case"end":return n.stop()}}),n)})));return function(e,r){return n.apply(this,arguments)}}(),u=function(){var n=(0,a.Z)((0,t.Z)().mark((function n(e,r){var a;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/movie/".concat(e,"/credits"),{signal:r});case 2:return a=n.sent,n.abrupt("return",a.data);case 4:case"end":return n.stop()}}),n)})));return function(e,r){return n.apply(this,arguments)}}(),l=function(){var n=(0,a.Z)((0,t.Z)().mark((function n(e,r){var a;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/movie/".concat(e,"/reviews"),{signal:r});case 2:return a=n.sent,n.abrupt("return",a.data);case 4:case"end":return n.stop()}}),n)})));return function(e,r){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=190.aa8ee66d.chunk.js.map