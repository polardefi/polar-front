(this["webpackJsonpgoose-frontend"]=this["webpackJsonpgoose-frontend"]||[]).push([[13],{695:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return le}));var c=n(12),r=n(51),a=n(0),i=n(2),s=n(38),u=n(171),o=n(176),j=n(4),b=n.n(j),l=n(15),f=n(21),O=n(66),d=n(666),p=n(672),x=n(16),h=n(13),m=n.n(h),v=n(32),g=n(40),w=n(73),k=n(671),z=n(130),S=function(){var e=Object(a.useState)([]),t=Object(f.a)(e,2),n=t[0],c=t[1],r=Object(O.m)().account,i=Object(z.a)().fastRefresh;return Object(a.useEffect)((function(){r&&function(){var e=Object(l.a)(b.a.mark((function e(){var t,n,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=k.a.map((function(e){return{address:Object(g.d)(),name:"pendingPASTA",params:[e.pid,r]}})),e.next=3,Object(v.a)(w,t);case 3:n=e.sent,a=k.a.map((function(e,t){return Object(x.a)(Object(x.a)({},e),{},{balance:new m.a(n[t])})})),c(a);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[r,i]),n},y=n(673),P=n(681),R=function(e){var t=e.value,n=e.decimals,r=e.fontSize,i=void 0===r?"40px":r,u=e.prefix,o=Object(P.useCountUp)({start:0,end:t,duration:1,separator:",",decimals:void 0!==n?n:t<0?4:t>1e5?0:3}),j=o.countUp,b=o.update,l=Object(a.useRef)(b);return Object(a.useEffect)((function(){l.current(t)}),[t,l]),Object(c.jsxs)(s.z,{bold:!0,fontSize:i,children:[u,j]})},A=function(e){var t=e.earningsSum,n=Object(u.a)();return Object(O.m)().account?Object(c.jsx)(R,{value:t}):Object(c.jsx)(s.z,{color:"textDisabled",style:{lineHeight:"60px"},children:n(298,"Locked")})},L=function(e){var t=e.cakeBalance,n=Object(u.a)();return Object(O.m)().account?Object(c.jsx)(R,{value:t,fontSize:"24px"}):Object(c.jsx)(s.z,{color:"textDisabled",style:{lineHeight:"36px"},children:n(298,"Locked")})},T=function(){var e=Object(a.useState)([]),t=Object(f.a)(e,2),n=t[0],c=t[1],r=Object(O.m)().account,i=Object(z.a)().fastRefresh;return Object(a.useEffect)((function(){r&&function(){var e=Object(l.a)(b.a.mark((function e(){var t,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=k.a.map((function(e){return{address:Object(g.d)(),name:"pendingPASTA",params:[e.pid,r]}})),e.next=3,Object(v.a)(w,t);case 3:n=e.sent,c(n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[r,i]),n},C=n(109),E=n(269),F=n(85),N=n(674),B=function(e){var t=Object(a.useState)(new m.a(0)),n=Object(f.a)(t,2),c=n[0],r=n[1],i=Object(O.m)(),s=i.account,u=i.ethereum,o=Object(z.a)().fastRefresh;return Object(a.useEffect)((function(){s&&u&&function(){var t=Object(l.a)(b.a.mark((function t(){var n;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(N.b)(u,e,s);case 2:n=t.sent,r(new m.a(n));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()()}),[s,u,e,o]),c},H=n(662);function $(){var e=Object(r.a)(["\n  margin-top: 24px;\n"]);return $=function(){return e},e}function D(){var e=Object(r.a)(["\n  color: ",";\n  font-size: 14px;\n"]);return D=function(){return e},e}function Q(){var e=Object(r.a)(["\n  margin-bottom: 16px;\n"]);return Q=function(){return e},e}function W(){var e=Object(r.a)(["\n  margin-bottom: 16px;\n"]);return W=function(){return e},e}function J(){var e=Object(r.a)(["\nbackground-image: url('/images/cake-bg.svg');\nbackground-repeat: no-repeat;\n  background-position: top right;\n  min-height: 376px;\n"]);return J=function(){return e},e}var U=Object(i.e)(s.f)(J()),V=i.e.div(W()),G=i.e.img(Q()),M=i.e.div(D(),(function(e){return e.theme.colors.textSubtle})),Y=i.e.div($()),q=function(){var e=Object(a.useState)(!1),t=Object(f.a)(e,2),n=t[0],r=t[1],i=Object(O.m)().account,o=Object(u.a)(),j=S(),x=Object(H.a)(B(Object(g.a)())),h=Object(C.f)().toNumber(),m=T().reduce((function(e,t){return e+new d.a(t).div(new d.a(10).pow(18)).toNumber()}),0),v=j.filter((function(e){return e.balance.toNumber()>0})),w=Object(p.a)(v.map((function(e){return e.pid}))).onReward,k=Object(a.useCallback)(Object(l.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r(!0),e.prev=1,e.next=4,w();case 4:e.next=8;break;case 6:e.prev=6,e.t0=e.catch(1);case 8:return e.prev=8,r(!1),e.finish(8);case 11:case"end":return e.stop()}}),e,null,[[1,6,8,11]])}))),[w]);return Object(c.jsx)(U,{children:Object(c.jsxs)(s.g,{children:[Object(c.jsx)(s.l,{size:"xl",mb:"24px",children:o(542,"Farms & Staking")}),Object(c.jsx)(G,{src:"/images/cake.svg",alt:"/images/cake.svg",width:64,height:64}),Object(c.jsxs)(V,{children:[Object(c.jsx)(M,{children:o(1002,"POLAR to Harvest")}),Object(c.jsx)(A,{earningsSum:m}),Object(c.jsxs)(M,{children:["~$",(h*m).toFixed(2)]})]}),Object(c.jsxs)(V,{children:[Object(c.jsx)(M,{children:o(1003,"POLAR in Wallet")}),Object(c.jsx)(L,{cakeBalance:x}),Object(c.jsxs)(M,{children:["~$",(h*x).toFixed(2)]})]}),Object(c.jsx)(Y,{children:i?Object(c.jsx)(s.d,{id:"harvest-all",disabled:v.length<=0||n,onClick:k,fullWidth:!0,children:n?o(1004,"Collecting POLAR"):o(999,"Harvest all (".concat(v.length,")"))}):Object(c.jsx)(y.a,{fullWidth:!0})})]})})};function I(){var e=Object(r.a)(["\n  align-items: center;\n  display: flex;\n  font-size: 14px;\n  justify-content: space-between;\n  margin-bottom: 8px;\n"]);return I=function(){return e},e}function K(){var e=Object(r.a)(["\n  margin-left: auto;\n  margin-right: auto;\n"]);return K=function(){return e},e}var X=Object(i.e)(s.f)(K()),Z=i.e.div(I()),_=function(){var e=Object(u.a)(),t=function(){var e=Object(z.a)().slowRefresh,t=Object(a.useState)(),n=Object(f.a)(t,2),c=n[0],r=n[1];return Object(a.useEffect)((function(){function e(){return(e=Object(l.a)(b.a.mark((function e(){var t,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(F.a)(E,Object(g.a)()),e.next=3,t.methods.totalSupply().call();case 3:n=e.sent,r(new m.a(n));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[e]),c}(),n=function(e){var t=Object(a.useState)(new m.a(0)),n=Object(f.a)(t,2),c=n[0],r=n[1],i=Object(z.a)().slowRefresh;return Object(a.useEffect)((function(){!function(){var e=Object(l.a)(b.a.mark((function e(){var t,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(F.a)(E,Object(g.a)()),e.next=3,t.methods.balanceOf("0x000000000000000000000000000000000000dEaD").call();case 3:n=e.sent,r(new m.a(n));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[e,i]),c}(Object(g.a)()),r=Object(C.c)(),i=Object(C.f)(),o=t?t.minus(n):new d.a(0),j=Object(H.a)(o),O=i.times(o),p=0;return r&&r[0]&&r[0].pastaPerBlock&&(p=new d.a(r[0].pastaPerBlock).div(new d.a(10).pow(18)).toNumber()),Object(c.jsx)(X,{children:Object(c.jsxs)(s.g,{children:[Object(c.jsx)(s.l,{size:"xl",mb:"24px",children:e(5646546,"Polar Stats")}),Object(c.jsxs)(Z,{children:[Object(c.jsx)(s.z,{fontSize:"14px",children:e(876743,"Total POLAR Supply")}),j&&Object(c.jsx)(R,{fontSize:"14px",value:j,decimals:0})]}),Object(c.jsxs)(Z,{children:[Object(c.jsx)(s.z,{fontSize:"14px",children:e(999,"Market Cap")}),Object(c.jsx)(R,{fontSize:"14px",value:Object(H.a)(O),decimals:0,prefix:"$"})]}),Object(c.jsxs)(Z,{children:[Object(c.jsx)(s.z,{fontSize:"14px",children:e(4261655,"Total POLAR Burned")}),Object(c.jsx)(R,{fontSize:"14px",value:Object(H.a)(n),decimals:0})]}),Object(c.jsxs)(Z,{children:[Object(c.jsx)(s.z,{fontSize:"14px",children:e(54545611111,"New POLAR/block")}),Object(c.jsx)(s.z,{bold:!0,fontSize:"14px",children:p})]})]})})};function ee(){var e=Object(r.a)(["\n  align-items: center;\n  display: flex;\n  flex: 1;\n"]);return ee=function(){return e},e}var te=Object(i.e)(s.f)(ee()),ne=function(){var e=Object(u.a)(),t=Object(C.g)();return Object(c.jsx)(te,{children:Object(c.jsxs)(s.g,{children:[Object(c.jsx)(s.l,{size:"lg",mb:"24px",children:e(999,"Total Value Locked (TVL)")}),Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(R,{value:t.toNumber(),prefix:"$",decimals:2}),Object(c.jsx)(s.z,{color:"textSubtle",children:e(999,"Across all Farms and Pools")})]})]})})},ce=n(692);function re(){var e=Object(r.a)(["\n  align-items: center;\n  display: flex;\n  font-size: 14px;\n  justify-content: space-between;\n  margin-bottom: 8px;\n"]);return re=function(){return e},e}function ae(){var e=Object(r.a)(["\n  margin-left: auto;\n  margin-right: auto;\n"]);return ae=function(){return e},e}var ie=Object(i.e)(s.f)(ae()),se=(i.e.div(re()),function(){var e=Object(u.a)();return Object(c.jsx)(ie,{children:Object(c.jsxs)(s.g,{children:[Object(c.jsx)(s.l,{size:"xl",mb:"24px",children:e(10003,"Announcements")}),Object(c.jsx)(ce.a,{dataSource:{sourceType:"profile",screenName:"polardefi"},options:{height:"300",chrome:"noheader, nofooter",width:"400"}})]})})});function ue(){var e=Object(r.a)(["\n  align-items: stretch;\n  justify-content: stretch;\n  margin-bottom: 48px;\n\n  & > div {\n    grid-column: span 6;\n    width: 100%;\n  }\n\n  "," {\n    & > div {\n      grid-column: span 8;\n    }\n  }\n\n  "," {\n    & > div {\n      grid-column: span 6;\n    }\n  }\n"]);return ue=function(){return e},e}function oe(){var e=Object(r.a)(["\n  align-items: center;\n  background-repeat: no-repeat;\n  background-position: top center;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  margin: auto;\n  margin-bottom: 32px;\n  padding-top: 116px;\n  text-align: center;\n\n  "," {\n    background-image: url('/images/pan-bg2.svg'), url('/images/pan-bg.svg');\n    background-position: left center, right center;\n    height: 165px;\n    padding-top: 0;\n  }\n"]);return oe=function(){return e},e}var je=i.e.div(oe(),(function(e){return e.theme.mediaQueries.lg})),be=Object(i.e)(s.b)(ue(),(function(e){return e.theme.mediaQueries.sm}),(function(e){return e.theme.mediaQueries.lg})),le=function(){var e=Object(u.a)();return Object(c.jsxs)(o.a,{children:[Object(c.jsxs)(je,{children:[Object(c.jsx)(s.l,{as:"h1",size:"xl",mb:"24px",color:"#83a6a8",children:e(1e3,"Polar Finance")}),Object(c.jsx)(s.z,{children:e(1001,"The Coldest 3rd Generation Yield Farm on Binance Smart Chain.")})]}),Object(c.jsx)("div",{children:Object(c.jsxs)(be,{children:[Object(c.jsx)(q,{}),Object(c.jsx)(se,{}),Object(c.jsx)(_,{}),Object(c.jsx)(ne,{})]})})]})}}}]);
//# sourceMappingURL=13.71bbfd03.chunk.js.map