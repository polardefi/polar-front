(this["webpackJsonpgoose-frontend"]=this["webpackJsonpgoose-frontend"]||[]).push([[12],{694:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return un}));var r=t(12),c=t(16),a=t(21),o=t(0),i=t.n(o),s=t(29),u=t(56),l=t(13),b=t.n(l),j=t(66),d=t(38),x=t(666);x.a.config({EXPONENTIAL_AT:1e3,DECIMAL_PLACES:80});new x.a(1);var O=new x.a(10512e3),p=t(51),f=t(2);function m(){var e=Object(p.a)(["\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  & > * {\n    min-width: 280px;\n    max-width: 31.5%;\n    width: 100%;\n    margin: 0 8px;\n    margin-bottom: 32px;\n  }\n"]);return m=function(){return e},e}var h=f.e.div(m()),k=t(176),v=t(109),g=t(130),y=t(129),S=t(20),w=t(171);function C(){var e=Object(p.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n\n  svg {\n    fill: ",";\n  }\n"]);return C=function(){return e},e}var T=f.e.div(C(),(function(e){return e.theme.colors.primary})),A=function(e){var n=e.onClick,t=e.expanded;return Object(r.jsxs)(T,{"aria-label":"Hide or show expandable content",role:"button",onClick:function(){return n()},children:[Object(r.jsx)(d.z,{color:"primary",bold:!0,children:t?"Hide":"Details"}),t?Object(r.jsx)(d.i,{}):Object(r.jsx)(d.h,{})]})};A.defaultProps={expanded:!1};var z=A,P=function(e){var n=e.quoteTokenAdresses,t=e.quoteTokenSymbol,r=e.tokenAddresses,c="BNB"===t?"ETH":n[56],a=r[56];return"".concat(c,"/").concat(a)};function D(){var e=Object(p.a)(["\n  text-decoration: none;\n  font-weight: normal;\n  color: ",";\n  display: flex;\n  align-items: center;\n\n  svg {\n    padding-left: 4px;\n    height: 18px;\n    width: auto;\n    fill: ",";\n  }\n"]);return D=function(){return e},e}function B(){var e=Object(p.a)(["\n  margin-top: 24px;\n"]);return B=function(){return e},e}var L=f.e.div(B()),q=Object(f.e)(d.p)(D(),(function(e){return e.theme.colors.text}),(function(e){return e.theme.colors.primary})),I=function(e){var n=e.isTokenOnly,t=e.bscScanAddress,c=e.removed,a=e.totalValueFormated,o=e.lpLabel,i=e.quoteTokenAdresses,s=e.quoteTokenSymbol,u=e.tokenAddresses,l=Object(w.a)(),b=P({quoteTokenAdresses:i,quoteTokenSymbol:s,tokenAddresses:u});return Object(r.jsxs)(L,{children:[Object(r.jsxs)(d.k,{justifyContent:"space-between",children:[Object(r.jsxs)(d.z,{children:[l(316,"Stake"),":"]}),Object(r.jsx)(q,{href:n?"https://exchange.polardefi.com/#/swap/".concat(u[56]):"https://exchange.polardefi.com/#/add/".concat(b),children:o})]}),!c&&Object(r.jsxs)(d.k,{justifyContent:"space-between",children:[Object(r.jsxs)(d.z,{children:[l(23,"Total Liquidity"),":"]}),Object(r.jsx)(d.z,{children:a})]}),Object(r.jsx)(d.k,{justifyContent:"flex-start",children:Object(r.jsx)(d.o,{external:!0,href:t,bold:!1,children:l(356,"View on BscScan")})})]})},F=function(){return Object(r.jsx)(d.y,{variant:"success",outline:!0,startIcon:Object(r.jsx)(d.B,{}),children:"No Fees"})};function E(){var e=Object(p.a)(["\n  margin-left: 4px;\n"]);return E=function(){return e},e}function N(){var e=Object(p.a)(["\n  svg {\n    margin-right: 0.25rem;\n  }\n"]);return N=function(){return e},e}var R=Object(f.e)(d.k)(N()),M=Object(f.e)(d.y)(E()),G=function(e){var n=e.lpLabel,t=e.multiplier,c=(e.risk,e.farmImage),a=e.tokenSymbol,o=e.depositFee;return Object(r.jsxs)(R,{justifyContent:"space-between",alignItems:"center",mb:"12px",children:[Object(r.jsx)(d.n,{src:"/images/farms/".concat(c,".svg"),alt:a,width:64,height:64}),Object(r.jsxs)(d.k,{flexDirection:"column",alignItems:"flex-end",children:[Object(r.jsx)(d.l,{mb:"4px",children:n}),Object(r.jsxs)(d.k,{justifyContent:"center",children:[0===o?Object(r.jsx)(F,{}):null,Object(r.jsx)(M,{variant:"secondary",children:t})]})]})]})},Q=t(4),W=t.n(Q),H=t(15),U=t(674),V=t(673),X=(t(669),t(667)),J=t(668),$=function(e){var n=Object(u.b)(),t=Object(j.m)().account,r=Object(J.c)();return{onStake:Object(o.useCallback)(function(){var c=Object(H.a)(W.a.mark((function c(a){var o;return W.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Object(X.i)(r,e,a,t);case 2:o=c.sent,n(Object(y.a)(t)),console.info(o);case 5:case"end":return c.stop()}}),c)})));return function(e){return c.apply(this,arguments)}}(),[t,n,r,e])}},_=function(e){var n=Object(u.b)(),t=Object(j.m)().account,r=Object(J.c)();return{onUnstake:Object(o.useCallback)(function(){var c=Object(H.a)(W.a.mark((function c(a){var o;return W.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Object(X.j)(r,e,a,t);case 2:o=c.sent,n(Object(y.a)(t)),console.info(o);case 5:case"end":return c.stop()}}),c)})));return function(e){return c.apply(this,arguments)}}(),[t,n,r,e])}},K=t(662);function Y(){var e=Object(p.a)(["\n  height: ","px;\n  width: ","px;\n"]);return Y=function(){return e},e}var Z=f.e.div(Y(),(function(e){return e.size}),(function(e){return e.size})),ee=function(e){var n,t=e.size,c=void 0===t?"md":t,a=Object(o.useContext)(f.a).spacing;switch(c){case"lg":n=a[6];break;case"sm":n=a[2];break;case"md":default:n=a[4]}return Object(r.jsx)(Z,{size:n})};function ne(){var e=Object(p.a)(["\n  flex: 1;\n  text-align: center;\n"]);return ne=function(){return e},e}function te(){var e=Object(p.a)(["\n  align-items: center;\n  background-color: ","00;\n  display: flex;\n  margin: 0;\n  padding: ","px;\n"]);return te=function(){return e},e}var re=f.e.div(te(),(function(e){return e.theme.colors.primaryDark}),(function(e){return e.theme.spacing[4]})),ce=f.e.div(ne()),ae=function(e){var n=e.children,t=i.a.Children.toArray(n).length;return Object(r.jsx)(re,{children:i.a.Children.map(n,(function(e,n){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(ce,{children:e}),n<t-1&&Object(r.jsx)(ee,{})]})}))})};function oe(){var e=Object(p.a)(["\n  width: 100%;\n  background: none;\n  border: 0;\n  color: ",";\n  font-size: 18px;\n  flex: 1;\n  height: 56px;\n  margin: 0;\n  padding: 0;\n  outline: none;\n"]);return oe=function(){return e},e}function ie(){var e=Object(p.a)(["\n  align-items: center;\n  background-color: ",";\n  border-radius: ",";\n  display: flex;\n  height: 72px;\n  padding: 0 ","px;\n"]);return ie=function(){return e},e}var se=f.e.div(ie(),(function(e){return e.theme.colors.input}),(function(e){return e.theme.radii.default}),(function(e){return e.theme.spacing[3]})),ue=f.e.input(oe(),(function(e){return e.theme.colors.primary})),le=function(e){var n=e.endAdornment,t=e.onChange,c=e.placeholder,a=e.startAdornment,o=e.value;return Object(r.jsxs)(se,{children:[!!a&&a,Object(r.jsx)(ue,{placeholder:c,value:o,onChange:t}),!!n&&n]})};function be(){var e=Object(p.a)(["\n  color: ",";\n  font-weight: 700;\n"]);return be=function(){return e},e}function je(){var e=Object(p.a)(["\n  align-items: center;\n  color: ",";\n  display: flex;\n  font-size: 14px;\n  font-weight: 700;\n  height: 44px;\n  justify-content: flex-end;\n"]);return je=function(){return e},e}function de(){var e=Object(p.a)(["\n  align-items: center;\n  display: flex;\n"]);return de=function(){return e},e}function xe(){var e=Object(p.a)(["\n  width: ","px;\n"]);return xe=function(){return e},e}function Oe(){var e=Object(p.a)([""]);return Oe=function(){return e},e}var pe=f.e.div(Oe()),fe=f.e.div(xe(),(function(e){return e.theme.spacing[3]})),me=f.e.div(de()),he=f.e.div(je(),(function(e){return e.theme.colors.primary})),ke=f.e.span(be(),(function(e){return e.theme.colors.primary})),ve=function(e){var n=e.max,t=e.symbol,c=e.onChange,a=e.onSelectMax,o=e.value,i=e.depositFeeBP,s=void 0===i?0:i,u=Object(w.a)();return Object(r.jsxs)(pe,{children:[Object(r.jsxs)(he,{children:[n.toLocaleString()," ",t," ",u(526,"Available")]}),Object(r.jsx)(le,{endAdornment:Object(r.jsxs)(me,{children:[Object(r.jsx)(ke,{children:t}),Object(r.jsx)(fe,{}),Object(r.jsx)("div",{children:Object(r.jsx)(d.d,{size:"sm",onClick:a,children:u(452,"Max")})})]}),onChange:c,placeholder:"0",value:o}),s>0?Object(r.jsxs)(he,{children:[u(10001,"Deposit Fee"),": ",new x.a(o||0).times(s/1e4).toString()," ",t]}):null]})},ge=function(e){var n=e.max,t=e.onConfirm,c=e.onDismiss,i=e.tokenName,s=void 0===i?"":i,u=e.depositFeeBP,l=void 0===u?0:u,b=Object(o.useState)(""),j=Object(a.a)(b,2),x=j[0],O=j[1],p=Object(o.useState)(!1),f=Object(a.a)(p,2),m=f[0],h=f[1],k=Object(w.a)(),v=Object(o.useMemo)((function(){return Object(K.b)(n)}),[n]),g=Object(o.useCallback)((function(e){O(e.currentTarget.value)}),[O]),y=Object(o.useCallback)((function(){O(v)}),[v,O]);return Object(r.jsxs)(d.t,{title:"".concat(k(316,"Deposit")," ").concat(s," Tokens"),onDismiss:c,children:[Object(r.jsx)(ve,{value:x,onSelectMax:y,onChange:g,max:v,symbol:s,depositFeeBP:l}),Object(r.jsxs)(ae,{children:[Object(r.jsx)(d.d,{variant:"secondary",onClick:c,children:k(462,"Cancel")}),Object(r.jsx)(d.d,{disabled:m,onClick:Object(H.a)(W.a.mark((function e(){return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return h(!0),e.next=3,t(x);case 3:h(!1),c();case 5:case"end":return e.stop()}}),e)}))),children:m?k(488,"Pending Confirmation"):k(464,"Confirm")})]})]})},ye=function(e){var n=e.onConfirm,t=e.onDismiss,c=e.max,i=e.tokenName,s=void 0===i?"":i,u=Object(o.useState)(""),l=Object(a.a)(u,2),b=l[0],j=l[1],x=Object(o.useState)(!1),O=Object(a.a)(x,2),p=O[0],f=O[1],m=Object(w.a)(),h=Object(o.useMemo)((function(){return Object(K.b)(c)}),[c]),k=Object(o.useCallback)((function(e){j(e.currentTarget.value)}),[j]),v=Object(o.useCallback)((function(){j(h)}),[h,j]);return Object(r.jsxs)(d.t,{title:"Withdraw ".concat(s),onDismiss:t,children:[Object(r.jsx)(ve,{onSelectMax:v,onChange:k,value:b,max:h,symbol:s}),Object(r.jsxs)(ae,{children:[Object(r.jsx)(d.d,{variant:"secondary",onClick:t,children:m(462,"Cancel")}),Object(r.jsx)(d.d,{disabled:p,onClick:Object(H.a)(W.a.mark((function e(){return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return f(!0),e.next=3,n(b);case 3:f(!1),t();case 5:case"end":return e.stop()}}),e)}))),children:p?m(488,"Pending Confirmation"):m(464,"Confirm")})]})]})};function Se(){var e=Object(p.a)(["\n  display: flex;\n  svg {\n    width: 20px;\n  }\n"]);return Se=function(){return e},e}var we=f.e.div(Se()),Ce=function(e){var n=e.stakedBalance,t=e.tokenBalance,c=e.tokenName,o=e.pid,i=e.depositFeeBP,s=Object(w.a)(),u=$(o).onStake,l=_(o).onUnstake,b=Object(K.a)(n),j=b.toLocaleString(),x=Object(d.E)(Object(r.jsx)(ge,{max:t,onConfirm:u,tokenName:c,depositFeeBP:i})),O=Object(a.a)(x,1)[0],p=Object(d.E)(Object(r.jsx)(ye,{max:n,onConfirm:l,tokenName:c})),f=Object(a.a)(p,1)[0];return Object(r.jsxs)(d.k,{justifyContent:"space-between",alignItems:"center",children:[Object(r.jsx)(d.l,{color:0===b?"textDisabled":"text",children:j}),0===b?Object(r.jsx)(d.d,{onClick:O,children:s(999,"Stake")}):Object(r.jsxs)(we,{children:[Object(r.jsx)(d.m,{variant:"tertiary",onClick:f,mr:"6px",children:Object(r.jsx)(d.s,{color:"primary"})}),Object(r.jsx)(d.m,{variant:"tertiary",onClick:O,children:Object(r.jsx)(d.a,{color:"primary"})})]})]})},Te=t(672);function Ae(){var e=Object(p.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-direction: column;\n"]);return Ae=function(){return e},e}var ze=f.e.div(Ae()),Pe=function(e){var n=e.earnings,t=e.pid,c=Object(w.a)(),i=Object(o.useState)(!1),s=Object(a.a)(i,2),u=s[0],l=s[1],b=Object(Te.b)(t).onReward,j=$(t).onStake,x=Object(K.a)(n),O=x.toLocaleString();return Object(r.jsxs)(d.k,{mb:"8px",justifyContent:"space-between",alignItems:"center",children:[Object(r.jsx)(d.l,{color:0===x?"textDisabled":"text",children:O}),Object(r.jsxs)(ze,{children:[5===t?Object(r.jsx)(d.d,{disabled:0===x||u,size:"sm",variant:"secondary",marginBottom:"15px",onClick:Object(H.a)(W.a.mark((function e(){return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l(!0),e.next=3,j(x.toString());case 3:l(!1);case 4:case"end":return e.stop()}}),e)}))),children:c(999,"Compound")}):null,Object(r.jsx)(d.d,{disabled:0===x||u,onClick:Object(H.a)(W.a.mark((function e(){return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l(!0),e.next=3,b();case 3:l(!1);case 4:case"end":return e.stop()}}),e)}))),children:c(999,"Harvest")})]})]})};function De(){var e=Object(p.a)(["\n  padding-top: 16px;\n"]);return De=function(){return e},e}var Be=f.e.div(De()),Le=function(e){var n=e.farm,t=e.ethereum,c=e.account,i=Object(w.a)(),s=Object(o.useState)(!1),l=Object(a.a)(s,2),b=l[0],x=l[1],O=Object(v.a)(n.pid),p=O.pid,f=O.lpAddresses,m=O.tokenAddresses,h=O.isTokenOnly,k=O.depositFeeBP,g=Object(v.b)(p),S=g.allowance,C=g.tokenBalance,T=g.stakedBalance,A=g.earnings,z=f[56],P=m[56],D=n.lpSymbol.toUpperCase(),B=c&&S&&S.isGreaterThan(0),L=function(e){var n=Object(u.b)(),t=Object(j.m)().account,r=Object(J.c)();return{onApprove:Object(o.useCallback)(Object(H.a)(W.a.mark((function c(){var a;return W.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,c.next=3,Object(X.a)(e,r,t);case 3:return a=c.sent,n(Object(y.a)(t)),c.abrupt("return",a);case 8:return c.prev=8,c.t0=c.catch(0),c.abrupt("return",!1);case 11:case"end":return c.stop()}}),c,null,[[0,8]])}))),[t,n,e,r])}}(Object(o.useMemo)((function(){return h?Object(U.a)(t,P):Object(U.a)(t,z)}),[t,z,P,h])).onApprove,q=Object(o.useCallback)(Object(H.a)(W.a.mark((function e(){return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,x(!0),e.next=4,L();case 4:x(!1),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),[L]);return Object(r.jsxs)(Be,{children:[Object(r.jsxs)(d.k,{children:[Object(r.jsx)(d.z,{bold:!0,textTransform:"uppercase",color:"secondary",fontSize:"12px",pr:"3px",children:"POLAR"}),Object(r.jsx)(d.z,{bold:!0,textTransform:"uppercase",color:"textSubtle",fontSize:"12px",children:i(999,"Earned")})]}),Object(r.jsx)(Pe,{earnings:A,pid:p}),Object(r.jsxs)(d.k,{children:[Object(r.jsx)(d.z,{bold:!0,textTransform:"uppercase",color:"secondary",fontSize:"12px",pr:"3px",children:D}),Object(r.jsx)(d.z,{bold:!0,textTransform:"uppercase",color:"textSubtle",fontSize:"12px",children:i(999,"Staked")})]}),c?B?Object(r.jsx)(Ce,{stakedBalance:T,tokenBalance:C,tokenName:D,pid:p,depositFeeBP:k}):Object(r.jsx)(d.d,{mt:"8px",fullWidth:!0,disabled:b,onClick:q,children:i(999,"Approve Contract")}):Object(r.jsx)(V.a,{mt:"8px",fullWidth:!0})]})},qe=function(e){var n,t=e.numberOfDays,r=e.farmApy/100,c=t/365,a=1e3/e.cakePrice,o=a*Math.pow(1+r/365,365*c);return n=o-a,Math.round(100*n)/100},Ie=function(e){return(e.amountEarned/e.amountInvested*100).toFixed(2)};function Fe(){var e=Object(p.a)(["\n  max-width: 320px;\n  margin-bottom: 28px;\n"]);return Fe=function(){return e},e}function Ee(){var e=Object(p.a)(["\n  margin-bottom: '10px';\n"]);return Ee=function(){return e},e}function Ne(){var e=Object(p.a)(["\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-rows: repeat(4, auto);\n  margin-bottom: 24px;\n"]);return Ne=function(){return e},e}var Re=f.e.div(Ne()),Me=f.e.div(Ee()),Ge=Object(f.e)(d.z)(Fe()),Qe=function(e){var n=e.onDismiss,t=e.lpLabel,c=e.quoteTokenAdresses,a=e.quoteTokenSymbol,o=e.tokenAddresses,i=e.cakePrice,s=e.apy,u=Object(w.a)(),l=P({quoteTokenAdresses:c,quoteTokenSymbol:a,tokenAddresses:o}),j=s.times(new b.a(100)).toNumber(),x=1e3/i.toNumber(),O=qe({numberOfDays:1,farmApy:j,cakePrice:i}),p=qe({numberOfDays:7,farmApy:j,cakePrice:i}),f=qe({numberOfDays:30,farmApy:j,cakePrice:i}),m=qe({numberOfDays:365,farmApy:j,cakePrice:i});return Object(r.jsxs)(d.t,{title:"ROI",onDismiss:n,children:[Object(r.jsxs)(Re,{children:[Object(r.jsx)(Me,{children:Object(r.jsx)(d.z,{fontSize:"12px",bold:!0,color:"textSubtle",textTransform:"uppercase",mb:"20px",children:u(999,"Timeframe")})}),Object(r.jsx)(Me,{children:Object(r.jsx)(d.z,{fontSize:"12px",bold:!0,color:"textSubtle",textTransform:"uppercase",mb:"20px",children:u(999,"ROI")})}),Object(r.jsx)(Me,{children:Object(r.jsx)(d.z,{fontSize:"12px",bold:!0,color:"textSubtle",textTransform:"uppercase",mb:"20px",children:u(999,"POLAR per $1000")})}),Object(r.jsx)(Me,{children:Object(r.jsx)(d.z,{children:"1d"})}),Object(r.jsx)(Me,{children:Object(r.jsxs)(d.z,{children:[Ie({amountEarned:O,amountInvested:x}),"%"]})}),Object(r.jsx)(Me,{children:Object(r.jsx)(d.z,{children:O})}),Object(r.jsx)(Me,{children:Object(r.jsx)(d.z,{children:"7d"})}),Object(r.jsx)(Me,{children:Object(r.jsxs)(d.z,{children:[Ie({amountEarned:p,amountInvested:x}),"%"]})}),Object(r.jsx)(Me,{children:Object(r.jsx)(d.z,{children:p})}),Object(r.jsx)(Me,{children:Object(r.jsx)(d.z,{children:"30d"})}),Object(r.jsx)(Me,{children:Object(r.jsxs)(d.z,{children:[Ie({amountEarned:f,amountInvested:x}),"%"]})}),Object(r.jsx)(Me,{children:Object(r.jsx)(d.z,{children:f})}),Object(r.jsx)(Me,{children:Object(r.jsx)(d.z,{children:"365d(APY)"})}),Object(r.jsx)(Me,{children:Object(r.jsxs)(d.z,{children:[Ie({amountEarned:m,amountInvested:x}),"%"]})}),Object(r.jsx)(Me,{children:Object(r.jsx)(d.z,{children:m})})]}),Object(r.jsx)(Ge,{fontSize:"12px",color:"textSubtle",children:u(999,"Calculated based on current rates. Compounding once daily. Rates are estimates provided for your convenience only, and by no means represent guaranteed returns.")}),Object(r.jsx)(d.k,{justifyContent:"center",children:Object(r.jsxs)(d.p,{href:"https://exchange.pancakeswap.finance/#/add/".concat(l),children:[u(999,"Get")," ",t]})})]})},We=function(e){var n=e.lpLabel,t=e.quoteTokenAdresses,c=e.quoteTokenSymbol,o=e.tokenAddresses,i=e.cakePrice,s=e.apy,u=Object(d.E)(Object(r.jsx)(Qe,{lpLabel:n,quoteTokenAdresses:t,quoteTokenSymbol:c,tokenAddresses:o,cakePrice:i,apy:s})),l=Object(a.a)(u,1)[0];return Object(r.jsx)(d.m,{onClick:l,variant:"text",size:"sm",ml:"4px",children:Object(r.jsx)(d.e,{})})};function He(){var e=Object(p.a)(["\n  height: ",";\n  overflow: hidden;\n"]);return He=function(){return e},e}function Ue(){var e=Object(p.a)(["\n  background-color: ",";\n  height: 1px;\n  margin: 28px auto;\n  width: 100%;\n"]);return Ue=function(){return e},e}function Ve(){var e=Object(p.a)(["\n  align-self: baseline;\n  background: ",";\n  border-radius: 32px;\n  box-shadow: 0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05);\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  padding: 24px;\n  position: relative;\n  text-align: center;\n"]);return Ve=function(){return e},e}function Xe(){var e=Object(p.a)(["\n  background: linear-gradient(45deg,\n  rgba(255, 0, 0, 1) 0%,\n  rgba(255, 154, 0, 1) 10%,\n  rgba(208, 222, 33, 1) 20%,\n  rgba(79, 220, 74, 1) 30%,\n  rgba(63, 218, 216, 1) 40%,\n  rgba(47, 201, 226, 1) 50%,\n  rgba(28, 127, 238, 1) 60%,\n  rgba(95, 21, 242, 1) 70%,\n  rgba(186, 12, 248, 1) 80%,\n  rgba(251, 7, 217, 1) 90%,\n  rgba(255, 0, 0, 1) 100%);\n  background-size: 300% 300%;\n  animation: "," 2s linear infinite;\n  border-radius: 16px;\n  filter: blur(6px);\n  position: absolute;\n  top: -2px;\n  right: -2px;\n  bottom: -2px;\n  left: -2px;\n  z-index: -1;\n"]);return Xe=function(){return e},e}function Je(){var e=Object(p.a)(["\n  0% {\n    background-position: 0% 50%;\n  }\n  50% {\n    background-position: 100% 50%;\n  }\n  100% {\n    background-position: 0% 50%;\n  }\n"]);return Je=function(){return e},e}var $e=Object(f.f)(Je()),_e=f.e.div(Xe(),$e),Ke=f.e.div(Ve(),(function(e){return e.theme.card.background})),Ye=f.e.div(Ue(),(function(e){return e.theme.colors.borderColor})),Ze=f.e.div(He(),(function(e){return e.expanded?"100%":"0px"})),en=function(e){var n=e.farm,t=e.removed,c=e.cakePrice,i=e.bnbPrice,s=e.ethereum,u=e.account,l=Object(w.a)(),j=Object(o.useState)(!1),x=Object(a.a)(j,2),O=x[0],p=x[1],f=n.lpSymbol.split(" ")[0].toLowerCase(),m=Object(o.useMemo)((function(){return n.lpTotalInQuoteToken?n.quoteTokenSymbol===S.b.BNB?i.times(n.lpTotalInQuoteToken):n.quoteTokenSymbol===S.b.CAKE?c.times(n.lpTotalInQuoteToken):n.lpTotalInQuoteToken:null}),[i,c,n.lpTotalInQuoteToken,n.quoteTokenSymbol]),h=m?"$".concat(Number(m).toLocaleString(void 0,{maximumFractionDigits:0})):"-",k=n.lpSymbol,v=n.apy&&n.apy.times(new b.a(100)).toNumber().toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}),g=n.quoteTokenAdresses,y=n.quoteTokenSymbol,C=n.tokenAddresses,T=n.risk;return Object(r.jsxs)(Ke,{children:["POLAR"===n.tokenSymbol&&Object(r.jsx)(_e,{}),Object(r.jsx)(G,{lpLabel:k,multiplier:n.multiplier,risk:T,depositFee:n.depositFeeBP,farmImage:f,tokenSymbol:n.tokenSymbol}),!t&&Object(r.jsxs)(d.k,{justifyContent:"space-between",alignItems:"center",children:[Object(r.jsxs)(d.z,{children:[l(352,"APR"),":"]}),Object(r.jsx)(d.z,{bold:!0,style:{display:"flex",alignItems:"center"},children:n.apy?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(We,{lpLabel:k,quoteTokenAdresses:g,quoteTokenSymbol:y,tokenAddresses:C,cakePrice:c,apy:n.apy}),v,"%"]}):Object(r.jsx)(d.w,{height:24,width:80})})]}),Object(r.jsxs)(d.k,{justifyContent:"space-between",children:[Object(r.jsxs)(d.z,{children:[l(318,"Earn"),":"]}),Object(r.jsx)(d.z,{bold:!0,children:"POLAR"})]}),Object(r.jsxs)(d.k,{justifyContent:"space-between",children:[Object(r.jsxs)(d.z,{style:{fontSize:"24px"},children:[l(10001,"Deposit Fee"),":"]}),Object(r.jsxs)(d.z,{bold:!0,style:{fontSize:"24px"},children:[n.depositFeeBP/100,"%"]})]}),Object(r.jsx)(Le,{farm:n,ethereum:s,account:u}),Object(r.jsx)(Ye,{}),Object(r.jsx)(z,{onClick:function(){return p(!O)},expanded:O}),Object(r.jsx)(Ze,{expanded:O,children:Object(r.jsx)(I,{removed:t,isTokenOnly:n.isTokenOnly,bscScanAddress:n.isTokenOnly?"https://bscscan.com/token/".concat(n.tokenAddresses[56]):"https://bscscan.com/token/".concat(n.lpAddresses[56]),totalValueFormated:h,lpLabel:k,quoteTokenAdresses:g,quoteTokenSymbol:y,tokenAddresses:C})})]})};function nn(){var e=Object(p.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-right: 32px;\n\n  "," {\n    margin-left: 8px;\n  }\n"]);return nn=function(){return e},e}function tn(){var e=Object(p.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 32px;\n"]);return tn=function(){return e},e}var rn=function(e){var n=e.stakedOnly,t=e.setStakedOnly,c=Object(s.g)(),i=(c.url,c.isExact,Object(w.a)()),u=Object(o.useState)(0),l=Object(a.a)(u,2);l[0],l[1];return Object(r.jsx)(cn,{children:Object(r.jsxs)(an,{children:[Object(r.jsx)(d.A,{checked:n,onChange:function(){return t(!n)}}),Object(r.jsxs)(d.z,{children:[" ",i(699,"Staked only")]})]})})},cn=f.e.div(tn()),an=f.e.div(nn(),d.z);function on(){var e=Object(p.a)(["\n  background-color: ",";\n  height: 1px;\n  margin: 0 auto 32px;\n  width: 100%;\n"]);return on=function(){return e},e}var sn=f.e.div(on(),(function(e){return e.theme.colors.textSubtle})),un=function(e){var n=Object(s.g)().path,t=Object(w.a)(),i=Object(v.c)(),l=Object(v.f)(),x=Object(v.e)(),p=Object(j.m)(),f=p.account,m=p.ethereum,C=e.tokenMode,T=Object(u.b)(),A=Object(g.a)().fastRefresh;Object(o.useEffect)((function(){f&&T(Object(y.a)(f))}),[f,T,A]);var z=Object(o.useState)(!1),P=Object(a.a)(z,2),D=P[0],B=P[1],L=i.filter((function(e){return!!e.isTokenOnly===!!C&&"0X"!==e.multiplier})),q=(i.filter((function(e){return!!e.isTokenOnly===!!C&&"0X"===e.multiplier})),L.filter((function(e){return e.userData&&new b.a(e.userData.stakedBalance).isGreaterThan(0)}))),I=L.filter((function(e){return e.lpSymbol.startsWith("POLAR")})),F=L.filter((function(e){return e.lpSymbol.includes("BUSD")})),E=L.filter((function(e){return e.lpSymbol.includes("BNB")})),N=F.filter((function(e){return e.userData&&new b.a(e.userData.stakedBalance).isGreaterThan(0)})),R=E.filter((function(e){return e.userData&&new b.a(e.userData.stakedBalance).isGreaterThan(0)})),M=I.filter((function(e){return e.userData&&new b.a(e.userData.stakedBalance).isGreaterThan(0)})),G=Object(o.useCallback)((function(e,n){return e.map((function(e){var n=new b.a(e.polarPerBlock||1).times(new b.a(e.poolWeight)).div(new b.a(10).pow(18)).times(O),t=n.div(12),r=l.times(n);e.quoteTokenSymbol===S.b.POLAR&&(r=l.times(t));var a=new b.a(e.lpTotalInQuoteToken||0);return e.quoteTokenSymbol===S.b.BNB&&(a=a.times(x)),a.comparedTo(0)>0&&(r=r.div(a)),Object(c.a)(Object(c.a)({},e),{},{apy:r})})).map((function(e){return Object(r.jsx)(en,{farm:e,removed:n,bnbPrice:x,cakePrice:l,ethereum:m,account:f},e.pid)}))}),[x,f,l,m]);return Object(r.jsxs)(k.a,{children:[Object(r.jsx)(d.l,{as:"h1",size:"lg",color:"primary",mb:"50px",style:{textAlign:"center"},children:C?t(99999991,"Stake tokens to earn POLAR"):t(9999999999,"Stake LP tokens to earn POLAR")}),Object(r.jsx)(d.l,{as:"h2",color:"#83a6a8",mb:"50px",style:{textAlign:"center"},children:t(54564654,"Deposit Fee will be used to buyback POLAR")}),Object(r.jsx)(rn,{stakedOnly:D,setStakedOnly:B}),Object(r.jsxs)("div",{children:[Object(r.jsx)(sn,{}),Object(r.jsxs)(h,{children:[Object(r.jsx)(s.a,{exact:!0,path:"".concat(n),children:G(D?q:L,!1)}),Object(r.jsx)(s.a,{exact:!0,path:"".concat(n,"/polar"),children:G(D?M:I,!1)}),Object(r.jsx)(s.a,{exact:!0,path:"".concat(n,"/busd"),children:G(D?N:F,!1)}),Object(r.jsx)(s.a,{exact:!0,path:"".concat(n,"/bnb"),children:G(D?R:E,!1)})]})]}),Object(r.jsx)(d.n,{src:"/images/staking.svg",alt:"illustration",width:1300,height:587,responsive:!0})]})}}}]);
//# sourceMappingURL=12.ba4b502f.chunk.js.map