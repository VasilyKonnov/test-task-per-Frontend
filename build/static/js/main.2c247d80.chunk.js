(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{179:function(e,t,n){},180:function(e,t,n){},213:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(16),s=n.n(c),o=(n(179),n(180),n(28)),i=n(22),l=n(23),u=n(241),j=n(263),b=n(244),d=n(247),h=n(248),O=n(124),x=n.n(O),m=n(264),f=n(249),p=n(246),g=n(69),v=n.n(g),T=n(123),y=n.n(T),F=n(53),w=n.n(F),S=n(2),C=Object(u.a)((function(e){return Object(j.a)({root:{flexGrow:1,backgroundColor:"#34A5DD"},toolbar:{padding:"0"},logo:{flexGrow:1,textDecoration:"none",fontWeight:700,color:"#ffffff",textTransform:"uppercase",display:"inline-flex"},wraper:{padding:"10px",display:"flex",flexDirection:"column",width:"170px"},button:{width:"100%",textTransform:"initial",justifyContent:"left"},link:{textDecoration:"none"}})}));function E(e){var t=C(),n=Object(a.useState)(null),r=Object(l.a)(n,2),c=r[0],s=r[1],i=function(){s(null)},u=Boolean(c);return Object(S.jsx)(b.a,{position:"static",className:t.root,children:Object(S.jsx)(p.a,{children:Object(S.jsxs)(d.a,{className:t.toolbar,children:[Object(S.jsxs)(o.c,{to:"/",className:t.logo,title:"\u041f\u0435\u0440\u0435\u0439\u043a\u0438 \u043d\u0430 \u0433\u043b\u0430\u0432\u043d\u0443\u044e",children:["SoccerStat ",Object(S.jsx)(y.a,{})]}),Object(S.jsxs)("div",{className:"desctop-menu",children:[Object(S.jsxs)(o.c,{exact:!0,activeClassName:"active",to:"/",children:[Object(S.jsx)(v.a,{})," ",Object(S.jsx)("span",{children:"\u041b\u0438\u0433\u0438"})]}),Object(S.jsxs)(o.c,{exact:!0,activeClassName:"active",to:"/comands-list",children:[Object(S.jsx)(w.a,{})," ",Object(S.jsx)("span",{children:"\u041a\u043e\u043c\u0430\u043d\u0434\u044b"})]})]}),Object(S.jsxs)("div",{className:"mobile-menu",children:[Object(S.jsx)(h.a,{onClick:function(e){s(e.currentTarget)},color:"inherit",children:Object(S.jsx)(x.a,{})}),Object(S.jsx)(m.a,{open:u,anchorEl:c,onClose:i,anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"},children:Object(S.jsxs)("div",{className:t.wraper,children:[Object(S.jsx)(o.c,{exact:!0,activeClassName:"active",className:t.link,to:"/",children:Object(S.jsx)(f.a,{className:t.button,onClick:i,startIcon:Object(S.jsx)(v.a,{}),children:Object(S.jsx)("span",{children:"\u041b\u0438\u0433\u0438"})})}),Object(S.jsx)(o.c,{exact:!0,activeClassName:"active",className:t.link,to:"/comands-list",children:Object(S.jsx)(f.a,{className:t.button,onClick:i,startIcon:Object(S.jsx)(w.a,{}),children:Object(S.jsx)("span",{children:"\u041a\u043e\u043c\u0430\u043d\u0434\u044b"})})})]})})]})]})})})}var N=function(e){return Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(E,{}),Object(S.jsx)(p.a,{children:e.children})]})},k=n(29),D=n.n(k),L=n(85),M="https://api.football-data.org/v2/competitions",A="https://api.football-data.org/v2/teams",_="0d5df8c05978490ea0958129ea7986b4",R="?plan=TIER_ONE",I=function(){var e=Object(L.a)(D.a.mark((function e(){var t;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(M).concat(R),{method:"GET",headers:{"X-Auth-Token":_}}).then((function(e){return e.json()})).then((function(e){return e})).then((function(e){return e.competitions.map((function(e){return{id:e.id,name:e.name}}))}));case 2:return t=e.sent,e.next=5,t;case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),G=function(){var e=Object(L.a)(D.a.mark((function e(t,n,a,r){var c,s,o,i;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c="https://api.football-data.org/v2/teams",t&&(c=t),s="",o="",a&&(s="?season=".concat(a)),r&&(o="?dateFrom=".concat(r.dateFrom,"&dateTo=").concat(r.dateTo)),e.next=8,fetch("".concat(c,"/").concat(n,"/matches").concat(s).concat(o),{method:"GET",headers:{"X-Auth-Token":_}}).then((function(e){return e.json()})).then((function(e){return e}));case 8:return i=e.sent,e.next=11,i;case 11:return e.abrupt("return",e.sent);case 12:case"end":return e.stop()}}),e)})));return function(t,n,a,r){return e.apply(this,arguments)}}(),U=function(){var e=Object(L.a)(D.a.mark((function e(){var t;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(A).concat(R),{method:"GET",headers:{"X-Auth-Token":_}}).then((function(e){return e.json()})).then((function(e){return e})).then((function(e){return e.teams.map((function(e){return{id:e.id,founded:e.founded,name:e.name,crestUrl:e.crestUrl,clubColors:e.clubColors}}))}));case 2:return t=e.sent,e.next=5,t;case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Y=n(250),V=function(){return Object(S.jsx)("div",{style:{textAlign:"center",marginTop:"100px",width:"100%"},children:Object(S.jsx)(Y.a,{})})},B=n(6),z=n(254),W=n(256),H=n(251),P=n(253),q=n(255),X=n(252),J=n(215),Q=Object(B.a)((function(e){return Object(j.a)({head:{backgroundColor:"rgba(255,27,26, .6)",color:e.palette.common.black},body:{fontSize:14}})}))(H.a),K=Object(B.a)((function(e){return Object(j.a)({root:{"&:nth-of-type(odd)":{backgroundColor:"rgba(245,245,245, .2)"}}})}))(X.a),Z=Object(u.a)({table:{minWidth:700}});var $=function(e){var t=e.dataTable,n=Z();return Object(S.jsx)(P.a,{component:J.a,className:"table-matches",children:Object(S.jsxs)(z.a,{className:n.table,"aria-label":"customized table",children:[Object(S.jsx)(q.a,{children:Object(S.jsxs)(X.a,{children:[Object(S.jsx)(Q,{children:"Away team"}),Object(S.jsx)(Q,{children:"Home team"}),Object(S.jsx)(Q,{align:"right",children:"Winner"}),Object(S.jsx)(Q,{align:"right",children:"Start date"}),Object(S.jsx)(Q,{align:"right",children:"End date"}),Object(S.jsx)(Q,{align:"right",children:"Status"})]})}),Object(S.jsx)(W.a,{children:t?t.map((function(e){return Object(S.jsxs)(K,{children:[Object(S.jsx)(Q,{component:"th",scope:"row",children:e.awayTeam}),Object(S.jsx)(Q,{component:"th",scope:"row",children:e.homeTeam}),Object(S.jsx)(Q,{align:"right",children:e.winner}),Object(S.jsx)(Q,{align:"right",children:e.startDate}),Object(S.jsx)(Q,{align:"right",children:e.endDate}),Object(S.jsx)(Q,{align:"right",children:e.status})]},e.id)})):Object(S.jsx)("h1",{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..."})})]})})},ee=n(265),te=n(267),ne=n(257),ae=n(261),re=n(34),ce="SHOW_LOADER",se="HIDE_LOADER",oe="FETCH_LEAGUES",ie="REQUEST_LEAGUES",le="FETCH_TEAMS",ue="REQUEST_TEAMS",je="GET_ERROR_MESSAGE",be="NULLIFY_ERROR_MESSAGE",de="GET_YEAR_SEASON",he="NULLIFY_YEAR_SEASON",Oe="GET_DATE_FROM_TO",xe="NULLIFY_DATE_FROM_TO";function me(){return{type:ce}}function fe(){return{type:se}}function pe(e){return{type:oe,payload:e}}function ge(){return{type:he}}function ve(e){return{type:Oe,payload:e}}function Te(){return{type:xe}}function ye(e){return{type:le,payload:e}}function Fe(){return{type:be}}var we=Object(u.a)((function(e){return Object(j.a)({formControl:{marginBottom:e.spacing(3),width:"50%",color:"#34A5DD"}})})),Se=function(e){var t,n=[];for(t=2021;t>=e;t--)n.push(t);return n};var Ce=Object(re.b)((function(e){return{season:e.leagues.season}}),(function(e){return{getYearSeason:function(t){return e({type:de,payload:t})},nullifyDateFromTo:function(){return e(Te())}}}))((function(e){var t=e.getYearSeason,n=e.season,a=e.startValue,r=(e.nullifyDateFromTo,we());return Object(S.jsxs)(ne.a,{className:r.formControl,children:[Object(S.jsx)(ee.a,{className:"custom-inputLabel",id:"controlled-open-select-label",children:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0433\u043e\u0434"}),Object(S.jsxs)(ae.a,{labelId:"controlled-open-select-label",id:"controlled-open-select",value:a.length?a:n,onChange:function(e){t(e.target.value)},children:[Object(S.jsx)(te.a,{value:"",children:Object(S.jsx)("em",{children:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0433\u043e\u0434"})}),Se(2016).map((function(e,t){return Object(S.jsx)(te.a,{className:"select-data",value:e,children:Object(S.jsx)(o.b,{className:"select-data--link",to:"?season=".concat(e),children:e})},t)}))]})]})})),Ee=n(126),Ne=n(27),ke=n(260);function De(e){var t=new Date(e),n=""+(t.getMonth()+1),a=""+t.getDate(),r=t.getFullYear();return n.length<2&&(n="0"+n),a.length<2&&(a="0"+a),[r,n,a].join("-")}var Le=Object(re.b)((function(e){return{dateFromTo:e.leagues.dateFromTo}}),(function(e){return{getDateFromTo:function(t){return e(ve(t))},nullifyDateFromTo:function(){return e(Te())}}}))((function(e){var t=e.getDateFromTo,n=e.starDateFromTo,r=new Date,c=new Date;n.dateTo&&n.dateFrom&&(r=new Date(n.dateFrom),c=new Date(n.dateTo));var s=Object(a.useState)(r),o=Object(l.a)(s,2),i=o[0],u=o[1],j=Object(a.useState)(c),b=Object(l.a)(j,2),d=b[0],h=b[1];return Object(a.useEffect)((function(){var e=De(i),n=De(d);"NaN-NaN-NaN"!==e&&"NaN-NaN-NaN"!==n&&void 0!==e&&void 0!==n&&t({dateFrom:e,dateTo:n})}),[i,d,n.dateTo,n.dateFrom,t]),Object(S.jsx)(Ne.a,{utils:Ee.a,children:Object(S.jsxs)("div",{className:"date-pickers-wrap",children:[Object(S.jsx)(ke.a,{autoOk:!0,variant:"inline",label:"date from",format:"yyyy-MM-dd",value:i,InputAdornmentProps:{position:"start"},onChange:function(e){return u(e)}}),Object(S.jsx)(ke.a,{autoOk:!0,variant:"inline",label:"date to",format:"yyyy-MM-dd",value:d,InputAdornmentProps:{position:"start"},onChange:function(e){return h(e)}})]})})})),Me=Object(re.b)((function(e){return{loading:e.app.loading,season:e.leagues.season,errorMessage:e.leagues.errorMessage,dateFromTo:e.leagues.dateFromTo}}),(function(e){return{getErrorMessage:function(t){return e({type:je,payload:t})},nullifyErrorMessage:function(){return e(Fe())},nullifyYearSeason:function(){return e(ge())},getDateFromTo:function(t){return e(ve(t))},nullifyDateFromTo:function(){return e(Te())}}}))((function(e){var t=e.season,n=e.getErrorMessage,r=e.nullifyErrorMessage,c=e.errorMessage,s=e.nullifyYearSeason,o=e.dateFromTo,u=e.url,j=Object(a.useState)(""),b=Object(l.a)(j,2),d=b[0],h=b[1],O=Object(a.useState)(""),x=Object(l.a)(O,2),m=x[0],p=x[1],g=Object(a.useState)(""),T=Object(l.a)(g,2),y=T[0],F=T[1],C=Object(a.useState)(""),E=Object(l.a)(C,2),N=E[0],k=E[1],D=Object(a.useState)(""),L=Object(l.a)(D,2),_=L[0],R=L[1],I=Object(a.useState)({dateFrom:"",dateTo:""}),U=Object(l.a)(I,2),Y=U[0],B=U[1],z=Object(i.f)(),W=function(e,t,a){var c="";t&&(c=t);var s="";a&&(s=a);try{G(u,e,c,s).then((function(e){if(e.message)return n(e.message);var t=e.matches.map((function(e){return{id:e.id,awayTeam:e.awayTeam.name,homeTeam:e.homeTeam.name,winner:e.score.winner,startDate:e.season.startDate,endDate:e.season.endDate,status:e.status}}));r(),h(t),u===M&&p(e.competition.name),F(e.count)}))}catch(o){console.log(o)}};return Object(a.useEffect)((function(){R(""),B({dateFrom:"",dateTo:""});var e="";u===M&&(e=z.location.pathname.substr(9)),u===A&&(e=z.location.pathname.substr(7)),k(e);var n="",a={dateFrom:"",dateTo:""};B({dateFrom:"",dateTo:""}),R(""),"season"===z.location.search.substr(1,6)&&(n=z.location.search.substr(-4),R(z.location.search.substr(-4))),"dateFrom"===z.location.search.substr(1,8)&&(a={dateFrom:z.location.search.substr(10,10),dateTo:z.location.search.substr(-10)},B({dateFrom:z.location.search.substr(10,10),dateTo:z.location.search.substr(-10)})),e&&a.dateFrom.length&&a.dateTo.length?W(e,null,a):e&&n?W(e,n):e&&t?W(e,t):e&&W(e)}),[t,o]),d||c?Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)("h1",{children:Object(S.jsxs)(S.Fragment,{children:[u===M?Object(S.jsx)(v.a,{}):Object(S.jsx)(w.a,{}),Object(S.jsxs)("span",{children:[m||"","  ",c?0:y," \u043c\u0430\u0442\u0447\u0435\u0439"]})]})}),u===M?Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(Ce,{startValue:_||""}),Object(S.jsx)("h3",{style:{marginTop:"0"},children:"\u0438\u043b\u0438"})]}):null,Object(S.jsx)(Le,{starDateFromTo:Y.dateFrom.length&&Y.dateTo.length?Y:""}),Object(S.jsx)(f.a,{className:"search-matches",onClick:function(){return function(e,t){s(),B({dateFrom:"",dateTo:""}),z.push("?dateFrom=".concat(t.dateFrom,"&dateTo=").concat(t.dateTo)),W(e,null,t)}(N,o)},children:"\u0424\u0438\u043b\u044c\u0442\u0440 \u043f\u043e \u0434\u0430\u0442\u0435 (\u0441, \u043f\u043e)"}),c?Object(S.jsx)("h1",{style:{marginTop:"50px"},children:c}):Object(S.jsx)($,{dataTable:d})]}):Object(S.jsx)(V,{})})),Ae=function(e){return Object(S.jsx)(Me,{url:M})},_e=function(e){return Object(S.jsx)(Me,{url:A})};var Re=function(e){var t=e.highlightText,n=e.children,a=e.backgroundColor,r=void 0===a?"yellow":a,c=e.color,s={backgroundColor:r,color:void 0===c?"inherit":c};if(null===n)return Object(S.jsx)(S.Fragment,{});var o=n,i=n.toString().toLowerCase().indexOf(t.toString().toLowerCase()),l=i+t.length,u=n.toString().substring(i,l),j=n.slice(0,i),b=n.slice(l,n.length-1);return t.toLowerCase()===u&&(o=Object(S.jsxs)(S.Fragment,{children:[j,Object(S.jsx)("span",{style:s,children:u}),b]})),Object(S.jsx)(S.Fragment,{children:o})},Ie=function(e){var t=e.id,n=e.searchValue,a=e.index,r=e.name;return Object(S.jsx)(o.b,{to:"/leagues/".concat(t),children:Object(S.jsxs)(J.a,{className:"ItemLeagues",elevation:0,children:[Object(S.jsx)("span",{style:{fontSize:"10px"},children:Object(S.jsxs)(Re,{highlightText:n,children:["id \u041b\u0438\u0433\u0438 - "+t," "]})}),Object(S.jsx)("br",{}),Object(S.jsx)("span",{children:Object(S.jsx)(Re,{highlightText:n,children:a+"."})}),Object(S.jsx)("span",{children:Object(S.jsx)(Re,{highlightText:n,children:" "+r})})]})})},Ge=function(){return Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)("h1",{style:{marginTop:"50px"},children:"\u0412\u043d\u0438\u043c\u0430\u043d\u0438\u0435!"}),Object(S.jsx)("p",{children:"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a, \u043e\u0431\u043e\u0432\u0438\u0442\u0435 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443 \u0441\u043e\u0447\u0435\u0442\u0430\u043d\u0438\u0435\u043c \u043a\u043b\u0430\u0432\u0438\u0448 CTRL+Shift+R"}),Object(S.jsx)("p",{children:"\u0415\u0441\u043b\u0438 \u043a\u043e\u043d\u0442\u0435\u043d \u043d\u0435 \u043f\u0440\u043e\u0433\u0440\u0443\u0437\u0438\u0442\u0441\u044f \u043f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u043f\u0435\u0440\u0435\u0439\u0442\u0438 \u043d\u0430 \u0434\u0440\u0443\u0433\u0443\u044e \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443 \u0438 \u0432\u0435\u0440\u043d\u0443\u0442\u0441\u044f \u043d\u0430 \u044d\u0442\u0443."}),Object(S.jsx)("p",{children:"\u042d\u0442\u043e \u043f\u0440\u043e\u0438\u0441\u0445\u043e\u0434\u0438\u0442 \u0438\u0437-\u0437\u0430 \u0431\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u043e\u0433\u043e Api"})]})},Ue=n(146),Ye=n.n(Ue),Ve=n(153),Be=n(145),ze=n.n(Be),We=Object(u.a)((function(e){return Object(j.a)({root:{padding:"2px 4px",display:"flex",alignItems:"center",width:"500px",maxWidth:"100%",marginBottom:"30px"},input:{marginLeft:e.spacing(1),flex:1},iconButton:{padding:10},divider:{height:28,margin:4}})}));function He(e){var t=e.handleSearchValue,n=e.searchText,a=We();return Object(S.jsxs)(J.a,{component:"form",className:a.root,onSubmit:function(e){return e.preventDefault()},children:[Object(S.jsx)(Ve.a,{className:a.input,placeholder:"\u041f\u043e\u0438\u0441\u043a \u043f\u043e \u0442\u0435\u043a\u0441\u0442\u0443",inputProps:{"aria-label":"\u041f\u043e\u0438\u0441\u043a \u043f\u043e \u0442\u0435\u043a\u0441\u0442\u0443"},onChange:t}),Object(S.jsx)(h.a,{onClick:n,type:"submit",className:a.iconButton,"aria-label":"search",children:Object(S.jsx)(ze.a,{})})]})}var Pe=function(){return Object(S.jsx)("h1",{style:{marginTop:"50px"},children:"\u041d\u0438 \u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0448\u043b\u043e\u0441\u044c, \u043f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0434\u0440\u0443\u0433\u043e\u0439 \u0437\u0430\u043f\u0440\u043e\u0441..."})},qe=Object(re.b)((function(e){return{leagues:e.leagues.leagues,errorMessage:e.leagues.errorMessage,loading:e.app.loading,season:e.leagues.season}}),(function(e){return{requestLeagues:function(){return e({type:ie})}}}))((function(e){var t=e.leagues,n=e.loading,r=e.requestLeagues,c=e.errorMessage,s=Object(a.useState)(""),o=Object(l.a)(s,2),i=o[0],u=o[1],j=Object(a.useState)([]),b=Object(l.a)(j,2),d=b[0],h=b[1],O=Object(a.useState)([]),x=Object(l.a)(O,2),m=x[0],f=x[1],p=function(){var e=d.filter((function(e){var t=e.id.toString().toLowerCase().indexOf(i.toLowerCase()),n=e.name.toLowerCase().indexOf(i.toLowerCase());return-1!==t||-1!==n}));f(e)};return Object(a.useEffect)((function(){r()}),[]),Object(a.useEffect)((function(){f(t),h(t)}),[t]),c?Object(S.jsx)("h2",{style:{marginTop:"50px"},children:c}):n?Object(S.jsx)(V,{}):t.length?Object(S.jsxs)("div",{className:"content",children:[Object(S.jsxs)("h1",{children:[Object(S.jsx)(Ye.a,{})," \u0421\u043f\u0438\u0441\u043e\u043a \u041b\u0438\u0433"]}),Object(S.jsx)(He,{handleSearchValue:function(e){u(e.target.value),i.length>1?p():f(d)},searchText:p}),m.length?m.map((function(e,t){return Object(S.jsx)(Ie,{searchValue:i,id:e.id,index:t+1,name:e.name},e.id)})):Object(S.jsx)(Pe,{})]}):Object(S.jsx)(Ge,{})})),Xe=Object(B.a)((function(e){return Object(j.a)({head:{backgroundColor:"rgba(52,165,221, .6)",color:e.palette.common.black},body:{fontSize:14}})}))(H.a),Je=Object(B.a)((function(e){return Object(j.a)({root:{"&:nth-of-type(odd)":{backgroundColor:"rgba(245,245,245, .2)"}}})}))(X.a),Qe=Object(u.a)({table:{minWidth:700}});var Ke=function(e){var t=Object(i.f)(),n=e.dataTable,a=e.searchValue,r=Qe();return Object(S.jsx)(P.a,{component:J.a,style:{marginBottom:"50px"},children:Object(S.jsxs)(z.a,{className:r.table,"aria-label":"customized table",children:[Object(S.jsx)(q.a,{children:Object(S.jsxs)(X.a,{children:[Object(S.jsx)(Xe,{children:"Name"}),Object(S.jsx)(Xe,{children:"\u0413\u043e\u0434 \u043e\u0441\u043d\u043e\u0432\u0430\u043d\u0438\u044f"}),Object(S.jsx)(Xe,{children:"id"}),Object(S.jsx)(Xe,{children:"Club/Colors"}),Object(S.jsx)(Xe,{children:"Logo team"})]})}),Object(S.jsx)(W.a,{children:n?n.map((function(e){return Object(S.jsxs)(Je,{className:"link-team",onClick:function(){return t.push("/teams/".concat(e.id))},children:[Object(S.jsx)(Xe,{component:"th",scope:"row",children:Object(S.jsx)(Re,{highlightText:a,children:e.name})}),Object(S.jsx)(Xe,{component:"th",scope:"row",children:e.founded}),Object(S.jsx)(Xe,{component:"th",scope:"row",children:e.id}),Object(S.jsx)(Xe,{children:Object(S.jsx)(Re,{highlightText:a,children:e.clubColors})}),Object(S.jsx)(Xe,{children:Object(S.jsx)("img",{src:e.crestUrl,style:{maxWidth:"30px"}})})]},e.id)})):Object(S.jsx)("h1",{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..."})})]})})},Ze=Object(re.b)((function(e){return{teams:e.leagues.teams,errorMessage:e.leagues.errorMessage,loading:e.app.loading,season:e.leagues.season}}),(function(e){return{requestTeams:function(){return e({type:ue})}}}))((function(e){var t=e.teams,n=e.loading,r=e.requestTeams,c=e.errorMessage,s=Object(a.useState)(""),o=Object(l.a)(s,2),i=o[0],u=o[1],j=Object(a.useState)([]),b=Object(l.a)(j,2),d=b[0],h=b[1],O=Object(a.useState)([]),x=Object(l.a)(O,2),m=x[0],f=x[1],p=function(){var e=d.filter((function(e){var t=e.name.toLowerCase().indexOf(i.toLowerCase()),n=e.clubColors.toLowerCase().indexOf(i.toLowerCase());return-1!==t||-1!==n}));f(e)};return Object(a.useEffect)((function(){r()}),[]),Object(a.useEffect)((function(){f(t),h(t)}),[t]),c?Object(S.jsx)("h2",{style:{marginTop:"50px"},children:c}):n?Object(S.jsx)(V,{}):t.length?Object(S.jsxs)(S.Fragment,{children:[Object(S.jsxs)("h1",{children:[Object(S.jsx)(w.a,{})," \u0421\u043f\u0438\u0441\u043e\u043a \u043a\u043e\u043c\u0430\u043d\u0434"]}),Object(S.jsx)(He,{searchText:p,handleSearchValue:function(e){u(e.target.value),i.length>1?p():f(d)}}),m.length?Object(S.jsx)(Ke,{searchValue:i,dataTable:m}):Object(S.jsx)(Pe,{})]}):Object(S.jsx)(Ge,{})}));var $e=function(e){return Object(S.jsx)(o.a,{basename:"/test-task-per-Frontend",children:Object(S.jsx)(N,{children:Object(S.jsxs)(i.c,{children:[Object(S.jsx)(i.a,{path:"/leagues",component:Ae}),Object(S.jsx)(i.a,{path:"/leagues/:id",component:Ae}),Object(S.jsx)(i.a,{path:"/leagues/:id/matches?season=:season",component:Ae}),Object(S.jsx)(i.a,{path:"/comands-list",component:Ze}),Object(S.jsx)(i.a,{path:"/comands",component:_e}),Object(S.jsx)(i.a,{path:"/teams/:id",component:_e}),Object(S.jsx)(i.a,{path:"/",component:qe})]})})})},et=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,269)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),c(e),s(e)}))},tt=n(43),nt=n(147),at=n(20),rt={loading:!0,alert:null},ct=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:rt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ce:return Object(at.a)(Object(at.a)({},e),{},{loading:!0});case se:return Object(at.a)(Object(at.a)({},e),{},{loading:!1});default:return e}},st={leagues:[],teams:[],errorMessage:"",season:"",dateFromTo:{}},ot=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:st,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case oe:return Object(at.a)(Object(at.a)({},e),{},{leagues:t.payload});case le:return Object(at.a)(Object(at.a)({},e),{},{teams:t.payload});case de:return Object(at.a)(Object(at.a)({},e),{},{season:t.payload});case he:return Object(at.a)(Object(at.a)({},e),{},{season:""});case Oe:return Object(at.a)(Object(at.a)({},e),{},{dateFromTo:t.payload});case xe:return Object(at.a)(Object(at.a)({},e),{},{dateFromTo:""});case je:return Object(at.a)(Object(at.a)({},e),{},{errorMessage:t.payload});case be:return Object(at.a)(Object(at.a)({},e),{},{errorMessage:""});default:return e}},it=Object(tt.c)({leagues:ot,app:ct}),lt=n(148),ut=n(24),jt=D.a.mark(ht),bt=D.a.mark(Ot),dt=D.a.mark(xt);function ht(){var e;return D.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(ut.b)(ge());case 3:return t.next=5,Object(ut.b)(Te());case 5:return t.next=7,Object(ut.b)(Fe());case 7:return t.next=9,Object(ut.b)(me());case 9:return t.next=11,Object(ut.a)(I);case 11:return e=t.sent,t.next=14,Object(ut.b)(pe(e));case 14:return t.next=16,Object(ut.b)(fe());case 16:t.next=23;break;case 18:return t.prev=18,t.t0=t.catch(0),console.log(t.t0),t.next=23,Object(ut.b)(fe());case 23:case"end":return t.stop()}}),jt,null,[[0,18]])}function Ot(){var e;return D.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(ut.b)(ge());case 3:return t.next=5,Object(ut.b)(Te());case 5:return t.next=7,Object(ut.b)(Fe());case 7:return t.next=9,Object(ut.b)(me());case 9:return t.next=11,Object(ut.a)(U);case 11:return e=t.sent,t.next=14,Object(ut.b)(ye(e));case 14:return t.next=16,Object(ut.b)(fe());case 16:t.next=23;break;case 18:return t.prev=18,t.t0=t.catch(0),console.log(t.t0),t.next=23,Object(ut.b)(fe());case 23:case"end":return t.stop()}}),bt,null,[[0,18]])}function xt(){return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ut.c)(ie,ht);case 2:return e.next=4,Object(ut.c)(ue,Ot);case 4:case"end":return e.stop()}}),dt)}var mt=Object(lt.a)(),ft=Object(tt.e)(it,Object(tt.a)(nt.a,mt));mt.run(xt);var pt=Object(S.jsx)(re.a,{store:ft,children:Object(S.jsx)(r.a.StrictMode,{children:Object(S.jsx)($e,{})})});s.a.render(pt,document.getElementById("root")),et()}},[[213,1,2]]]);
//# sourceMappingURL=main.2c247d80.chunk.js.map