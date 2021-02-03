(this["webpackJsonpnba-team-compare"]=this["webpackJsonpnba-team-compare"]||[]).push([[0],{231:function(e,t,a){"use strict";a.r(t);var n=a(1);a(94),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var r=a(46),c=a(18),s=a(0),i=a.n(s),o=a(14),l=a(28),u=a(70),d=function(e){var t="";return e.forEach((function(e){t+="&player_ids[]=".concat(e.id)})),t},j=function(e,t){var a=null;return t.forEach((function(t){t.player_id===e&&(a=t)})),a},b=function(e){switch(e){case"ast":return"Assists";case"blk":return"Blocks";case"dreb":return"Defensive Rebounds";case"fg3_pct":return"3 Point %";case"fg3a":return"3 Point Attempts";case"fg3m":return"3 Point Makes";case"fg_pct":return"Field Goal %";case"fga":return"Field Goal Attempts";case"fgm":return"Field Goal Makes";case"ft_pct":return"Free Throw %";case"fta":return"Free Throw Attempts";case"ftm":return"Free Throw Makes";case"oreb":return"Offensive Rebounds";case"pf":return"Personal Fouls";case"pts":return"Points";case"reb":return"Rebounds";case"stl":return"Steals";case"turnover":return"Turnovers";default:return e}},f=["pts","fg3_pct","fg3a","fg3m","fg_pct","fga","fgm","ft_pct","fta","ftm","ast","blk","stl","reb","dreb","oreb","pf","turnover"],p=a(19),h=a(45),O=a(20),m=a(26),v=a(24),g=a(25),x=a(11),y=a(27),_=function(e){return{type:"REMOVE_PLAYER",id:e}},E=function(e){return{type:"GET_SEASON_AVERAGES",searchString:e}},S=function(e){return{type:"REMOVE_PLAYER_STAT",id:e}},A=function(e){var t,a=e.player,r=e.stats,c=e.shootingStats,s=e.removePlayer,i=h[a.team.abbreviation],o={tooltips:{callbacks:{label:function(e,t){var a=0===e.index?100*r["".concat(c,"_pct")]:100-100*r["".concat(c,"_pct")];return"".concat(t.labels[e.index],": ").concat(t.datasets[0].data[e.index]," of ").concat(r["".concat(c,"a")]," (").concat(Math.round(a),"%)")}}}};return Object(n.jsx)(m.a,{xs:12,md:6,children:Object(n.jsxs)("div",(t={className:"div"},Object(p.a)(t,"className","doughnut-card ".concat(r?"":"no-stats")),Object(p.a)(t,"children",[Object(n.jsx)(g.a,{icon:y.a,onClick:function(){s(a.id),S(a.id)}}),Object(n.jsxs)("div",{className:"player-info",children:[r?Object(n.jsx)("h2",{children:"".concat(a.first_name," ").concat(a.last_name)}):Object(n.jsxs)("div",{className:"info-name-logo-container",children:[Object(n.jsx)("h2",{children:"".concat(a.first_name," ").concat(a.last_name)}),Object(n.jsx)(i,{})]}),Object(n.jsxs)("span",{children:[a.team.city," ",a.team.name]}),r&&Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("span",{children:function(e){switch(e[0]){case"C":return"Center";case"F":return"Forward";case"G":return"Guard";default:return e}}(a.position)}),Object(n.jsxs)("span",{children:[a.height_feet,"' ",a.height_inches,'"']})]})]}),r?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("div",{className:"icon",children:Object(n.jsx)(i,{})}),Object(n.jsx)(v.Doughnut,{data:function(){var e=[Object(O.getMainColor)(a.team.abbreviation).hex,Object(O.getSecondaryColor)(a.team.abbreviation).hex],t=r["".concat(c,"a")],n=r["".concat(c,"m")],s=[n,t-n];return{labels:["Made","Miss"],datasets:[{data:s,backgroundColor:e}]}}(),options:o,legend:{display:!1}})]}):Object(n.jsxs)("div",{className:"didnt-play",children:["".concat(a.first_name," ").concat(a.last_name)," hasn't played this season."]})]),t))})},w={removePlayer:_,removePlayerStats:S},T=A=Object(x.b)((function(e,t){return{player:t.player,stats:t.stats,isOffenseStats:t.isOffenseStats}}),w)(A),C=a(47),k=function(e){var t=e.players,a=e.getSeasonAverages,r=e.seasonAverages,i=Object(s.useState)("ft"),u=Object(c.a)(i,2),b=u[0],f=u[1];return Object(s.useEffect)((function(){var e=d(t);a(e)}),[JSON.stringify(t)]),Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("div",{id:"radar-btn-container",children:[Object(n.jsxs)(l.a,{size:"lg",children:[Object(n.jsx)(o.a,{onClick:function(){return f("ft")},variant:"".concat("ft"===b?"primary":"outline-primary"),children:"Free Throw %"}),Object(n.jsx)(o.a,{onClick:function(){return f("fg")},variant:"".concat("fg"===b?"primary":"outline-primary"),children:"Field Goal %"}),Object(n.jsx)(o.a,{onClick:function(){return f("fg3")},variant:"".concat("fg3"===b?"primary":"outline-primary"),children:"3 Point %"})]}),Object(n.jsx)("span",{className:"season-astrisk",children:"*All stats are from the 2020-2021 season"})]}),Object(n.jsx)(C.a,{children:r&&t.map((function(e,t){return Object(n.jsx)(T,{player:e,stats:j(e.id,r),shootingStats:b},"pie-card-".concat(t))}))})]})},R={getSeasonAverages:E},P=k=Object(x.b)((function(e){return{players:e.players.data,seasonAverages:e.stats.seasonAverages}}),R)(k),L=function(e){var t=e.displayCount,a=e.getPlayer,r=e.getPlayers,c=e.players;return Object(n.jsxs)("div",{id:"search-bar",children:[Object(n.jsx)("input",{id:"search-input",placeholder:"Search for Player (ex: Lebron james)",onChange:function(e){return r(e.target.value,t)}}),c&&Object(n.jsx)("ul",{children:c.map((function(e,t){return Object(n.jsx)("li",{onClick:function(){a(e.id),document.getElementById("search-input").value=""},children:"".concat(e.first_name," ").concat(e.last_name," - ").concat(e.team.abbreviation)},"player-".concat(t))}))})]})},N={getPlayer:function(e){return{type:"GET_PLAYER",id:e}},getPlayers:function(e,t){return{type:"GET_PLAYERS",value:e,paginationCount:t}}},G=L=Object(x.b)((function(e,t){return{players:e.search.players,displayCount:t.displayCount}}),N)(L),F=function(e){var t=e.player,a=e.removePlayer,r=Object(O.getMainColor)(t.team.abbreviation).hex,c=Object(O.getSecondaryColor)(t.team.abbreviation).hex;return Object(n.jsxs)("div",{className:"player-pill",style:{backgroundColor:r,color:c},onClick:function(){a(t.id),S(t.id)},children:["".concat(t.first_name," ").concat(t.last_name),Object(n.jsx)("span",{style:{color:c},children:Object(n.jsx)(g.a,{icon:y.a})})]})},I={removePlayer:_,removePlayerStats:S},M=F=Object(x.b)((function(e,t){return{player:t.player}}),I)(F),V=function(e){var t=e.players;return Object(n.jsxs)("div",{id:"header",children:[Object(n.jsx)("h1",{children:"NBA COMPARE"}),Object(n.jsxs)("div",{id:"search-container",children:[t.map((function(e,t){return Object(n.jsx)(M,{player:e},"player-pill-".concat(t))})),Object(n.jsx)(G,{displayCount:10})]})]})},Y=V=Object(x.b)((function(e){return{players:e.players.data}}),null)(V),B=a(53),J=a(89),z=a(88),D=a.n(z),W=function(e){var t=e.players,a=e.stats,r=e.stat,c={tooltips:{callbacks:{title:function(){return b(r)},label:function(e,t){return"".concat(t.datasets[e.datasetIndex].label,": ").concat(t.datasets[e.datasetIndex].data[e.index]).concat("pct"===r.slice(r.length-3)?"%":"")}}}};return Object(n.jsx)(m.a,{xs:12,children:Object(n.jsx)(v.Line,{data:{labels:["1","2","3","4","5","6","7","8","9","10"],datasets:t.map((function(e){var t="".concat(e.first_name," ").concat(e.last_name),n=j(e.id,a).games.map((function(e){return e[r]})),c=D()();return{label:t,data:n,fill:!1,backgroundColor:c,borderColor:c}}))},options:c})})},U=function(e){var t=e.clearLastTenStats,a=e.players,r=e.getLastTenGamesStats,i=e.lastTen,o=Object(s.useState)("pts"),l=Object(c.a)(o,2),u=l[0],d=l[1];return Object(s.useEffect)((function(){t(),a.forEach((function(e){r(e)}))}),[JSON.stringify(a)]),Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("div",{id:"radar-btn-container",children:[Object(n.jsx)(J.a,{id:"dropdown-basic-button",title:b(u),children:f.map((function(e,t){return Object(n.jsx)(B.a.Item,{onClick:function(){return d(e)},children:b(e)},"stat-dropdown-".concat(t))}))}),Object(n.jsx)("span",{className:"season-astrisk",children:"*All stats are from the 2020-2021 season"})]}),i.length===a.length&&Object(n.jsx)(W,{players:a,stats:i,stat:u})]})},H={getLastTenGamesStats:function(e){return{type:"GET_LAST_TEN_STATS",player:e}},clearLastTenStats:function(){return{type:"CLEAR_LAST_TEN_STATS"}}},Z=U=Object(x.b)((function(e){return{players:e.players.data,lastTen:e.stats.lastTen}}),H)(U),$=function(e){var t,a=e.player,r=e.stats,c=e.isOffenseStats,s=e.removePlayer,i=h[a.team.abbreviation],o={scale:{ticks:{beginAtZero:!0}},tooltips:{callbacks:{title:function(){},label:function(e,t){var a=t.labels[e.index];return t=t.datasets[0].data[e.index],c?"".concat(a,": ").concat(Math.round(t),"%"):"".concat(a,": ").concat(t)}}}};return Object(n.jsx)(m.a,{xs:12,md:6,children:Object(n.jsxs)("div",(t={className:"div"},Object(p.a)(t,"className","radar-card ".concat(r?"":"no-stats")),Object(p.a)(t,"children",[Object(n.jsx)(g.a,{icon:y.a,onClick:function(){s(a.id),S(a.id)}}),Object(n.jsxs)("div",{className:"player-info",children:[Object(n.jsxs)("div",{className:"info-name-logo-container",children:[Object(n.jsx)("h2",{children:"".concat(a.first_name," ").concat(a.last_name)}),Object(n.jsx)(i,{})]}),Object(n.jsxs)("span",{children:[a.team.city," ",a.team.name]}),r&&Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("span",{children:function(e){switch(e[0]){case"C":return"Center";case"F":return"Forward";case"G":return"Guard";default:return e}}(a.position)}),Object(n.jsxs)("span",{children:[a.height_feet,"' ",a.height_inches,'"']})]})]}),r?Object(n.jsx)(v.Radar,{data:function(){var e=Object(O.getMainColor)(a.team.abbreviation).rgb,t="rgba(".concat(e[0],", ").concat(e[1],", ").concat(e[2],", 0.3)"),n="rgba(".concat(e[0],", ").concat(e[1],", ").concat(e[2],", 1)"),s=r.ast,i=r.blk,o=r.fg_pct,l=r.fg3_pct,u=r.ft_pct,d=r.reb,j=r.stl,b=r.turnover,f=c?[100*o,100*l,100*u]:[s,i,d,j,b];return{labels:c?["Field Goal %","3 Point %","Free Throw %"]:["Assists","Blocks","Rebounds","Steals","Turnovers"],datasets:[{data:f,backgroundColor:t,borderColor:n,borderWidth:1}]}}(),options:o,legend:{display:!1}}):Object(n.jsxs)("div",{className:"didnt-play",children:["".concat(a.first_name," ").concat(a.last_name)," hasn't played this season."]})]),t))})},q={removePlayer:_,removePlayerStats:S},K=$=Object(x.b)((function(e,t){return{player:t.player,stats:t.stats,isOffenseStats:t.isOffenseStats}}),q)($),Q=function(e){var t=e.players,a=e.getSeasonAverages,r=e.seasonAverages,i=Object(s.useState)(!0),u=Object(c.a)(i,2),b=u[0],f=u[1];return Object(s.useEffect)((function(){var e=d(t);a(e)}),[JSON.stringify(t)]),Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("div",{id:"radar-btn-container",children:[Object(n.jsxs)(l.a,{size:"lg",children:[Object(n.jsx)(o.a,{onClick:function(){return f(!0)},variant:"".concat(b?"primary":"outline-primary"),children:"Offensive Stats"}),Object(n.jsx)(o.a,{onClick:function(){return f(!1)},variant:"".concat(b?"outline-primary":"primary"),children:"Defensive Stats"})]}),Object(n.jsx)("span",{className:"season-astrisk",children:"*All stats are from the 2020-2021 season"})]}),Object(n.jsx)(C.a,{children:r&&t.map((function(e,t){return Object(n.jsx)(K,{player:e,stats:j(e.id,r),isOffenseStats:b},"radar-card-".concat(t))}))})]})},X={getSeasonAverages:E},ee=Q=Object(x.b)((function(e){return{players:e.players.data,seasonAverages:e.stats.seasonAverages}}),X)(Q),te=function(){var e=Object(s.useState)(1),t=Object(c.a)(e,2),a=t[0],r=t[1];return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(Y,{}),Object(n.jsx)(u.a,{children:Object(n.jsxs)(l.a,{id:"nav-container",size:"lg",children:[Object(n.jsx)(o.a,{onClick:function(){return r(1)},variant:"".concat(1===a?"primary":"outline-primary"),children:"Off/Def"}),Object(n.jsx)(o.a,{onClick:function(){return r(2)},variant:"".concat(2===a?"primary":"outline-primary"),children:"Shooting %"}),Object(n.jsx)(o.a,{onClick:function(){return r(3)},variant:"".concat(3===a?"primary":"outline-primary"),children:"Last 10 Games"})]})}),Object(n.jsx)(u.a,{className:"panel",fluid:"lg",children:function(){switch(a){case 1:return Object(n.jsx)(ee,{});case 2:return Object(n.jsx)(P,{});case 3:return Object(n.jsx)(Z,{});default:return null}}()}),Object(n.jsx)("footer",{})]})},ae=function(e){var t=e.players;return Object(n.jsxs)("div",{className:"App",children:[0===t.length&&Object(n.jsxs)("div",{id:"search-only-container",children:[Object(n.jsx)("h1",{children:"NBA COMPARE"}),Object(n.jsx)(G,{displayCount:25})]}),0!==t.length&&Object(n.jsx)(te,{})]})},ne=ae=Object(x.b)((function(e){return{players:e.players.data}}),null)(ae),re=a(23),ce=a.n(re),se=a(54),ie=a(9),oe=function(e){return e.sort((function(e,t){return e.id-t.id}))},le={data:[{id:54,first_name:"Bojan",height_feet:6,height_inches:8,last_name:"Bogdanovic",position:"F",team:{id:29,abbreviation:"UTA",city:"Utah",conference:"West",division:"Northwest",full_name:"Utah Jazz",name:"Jazz"},weight_pounds:216},{id:237,first_name:"LeBron",height_feet:6,height_inches:8,last_name:"James",position:"F",team:{abbreviation:"LAL",city:"Los Angeles",conference:"West",division:"Pacific",full_name:"Los Angeles Lakers",id:14,name:"Lakers"},weight_pounds:250},{id:267,first_name:"Jeremy",height_feet:6,height_inches:5,last_name:"Lamb",position:"G",team:{abbreviation:"IND",city:"Indiana",conference:"East",division:"Central",full_name:"Indiana Pacers",id:12,name:"Pacers"},weight_pounds:185}]},ue=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:le,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"GET_PLAYER":return Object(ie.a)(Object(ie.a)({},t),{},{loading:!0});case"RECIEVE_PLAYER":return Object(ie.a)(Object(ie.a)({},t),{},{data:oe([].concat(Object(se.a)(t.data),[a.json])),loading:!1});case"REMOVE_PLAYER":return e=t.data.filter((function(e){return e.id!==a.id})),Object(ie.a)(Object(ie.a)({},t),{},{data:e,loading:!1});default:return t}},de=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_PLAYERS":return Object(ie.a)(Object(ie.a)({},e),{},{loading:!0});case"RECIEVE_PLAYERS":return Object(ie.a)(Object(ie.a)({},e),{},{players:t.json,loading:!1});case"CLEAR_SEARCH":return Object(ie.a)(Object(ie.a)({},e),{},{players:null,loading:!1});default:return e}},je=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{lastTen:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_SEASON_AVERAGES":return Object(ie.a)(Object(ie.a)({},e),{},{loading:!0});case"RECIEVE_SEASON_AVERAGES":return Object(ie.a)(Object(ie.a)({},e),{},{seasonAverages:oe(t.data),loading:!1});case"CLEAR_LAST_TEN_STATS":return Object(ie.a)(Object(ie.a)({},e),{},{lastTen:[],loading:!1});case"RECIEVE_LAST_TEN_STATS":return Object(ie.a)(Object(ie.a)({},e),{},{lastTen:[].concat(Object(se.a)(e.lastTen),[t.lastTen]),loading:!1});default:return e}},be=Object(r.c)({players:ue,search:de,stats:je}),fe=a(90),pe=a(12),he=a.n(pe),Oe=a(13),me=he.a.mark(ge),ve=he.a.mark(xe);function ge(e){var t,a;return he.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.id,n.next=3,fetch("https://www.balldontlie.io/api/v1/players/".concat(t)).then((function(e){return e.json()}));case 3:return a=n.sent,n.next=6,Object(Oe.b)({type:"RECIEVE_PLAYER",json:a});case 6:return n.next=8,Object(Oe.b)({type:"CLEAR_SEARCH"});case 8:case"end":return n.stop()}}),me)}function xe(){return he.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Oe.d)("GET_PLAYER",ge);case 2:case"end":return e.stop()}}),ve)}var ye=xe,_e=he.a.mark(Se),Ee=he.a.mark(Ae);function Se(e){var t,a,n;return he.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(t=e.value,a=e.paginationCount,""!==t){r.next=5;break}r.t0={data:void 0},r.next=8;break;case 5:return r.next=7,fetch("https://www.balldontlie.io/api/v1/players?per_page=".concat(a,"&search=").concat(t)).then((function(e){return e.json()}));case 7:r.t0=r.sent;case 8:return n=r.t0,r.next=11,Object(Oe.b)({type:"RECIEVE_PLAYERS",json:n.data});case 11:case"end":return r.stop()}}),_e)}function Ae(){return he.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Oe.d)("GET_PLAYERS",Se);case 2:case"end":return e.stop()}}),Ee)}var we=Ae,Te=he.a.mark(Re),Ce=he.a.mark(Pe),ke=he.a.mark(Ne);function Re(e){var t,a;return he.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.searchString,n.next=3,fetch("https://www.balldontlie.io/api/v1/season_averages?season=2020".concat(t)).then((function(e){return e.json()}));case 3:return a=n.sent,n.next=6,Object(Oe.b)({type:"RECIEVE_SEASON_AVERAGES",data:a.data});case 6:case"end":return n.stop()}}),Te)}function Pe(e){var t,a;return he.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.player,n.next=3,fetch("https://www.balldontlie.io/api/v1/stats?seasons[]=2020&player_ids[]=".concat(t.id,"&per_page=72")).then((function(e){return e.json()})).then((function(e){return e.data}));case 3:return a=n.sent,(a=Le(a)).length>10&&(a=a.slice(a.length-10)),n.next=8,Object(Oe.b)({type:"RECIEVE_LAST_TEN_STATS",lastTen:{player_id:t.id,games:a}});case 8:case"end":return n.stop()}}),Ce)}var Le=function(e){return e.sort((function(e,t){return new Date(e.game.date)-new Date(t.game.date)}))};function Ne(){return he.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Oe.d)("GET_SEASON_AVERAGES",Re);case 2:return e.next=4,Object(Oe.c)("GET_LAST_TEN_STATS",Pe);case 4:case"end":return e.stop()}}),ke)}var Ge=Ne,Fe=he.a.mark(Ie);function Ie(){return he.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Oe.a)([we(),ye(),Ge()]);case 2:case"end":return e.stop()}}),Fe)}var Me=Object(fe.a)(),Ve=Object(r.e)(be,Object(r.a)(Me));window.store=Ve,Me.run(Ie),ce.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(x.a,{store:Ve,children:Object(n.jsx)(ne,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},94:function(e,t,a){}},[[231,1,2]]]);
//# sourceMappingURL=main.ab52149b.chunk.js.map