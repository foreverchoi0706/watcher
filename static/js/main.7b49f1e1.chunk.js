(this.webpackJsonpwatcher=this.webpackJsonpwatcher||[]).push([[0],{40:function(e,t,a){},49:function(e,t,a){},54:function(e,t,a){},74:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){},80:function(e,t,a){},81:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a(0),s=a(21),r=a.n(s),i=a(17),o=a(4),u=a(23),l=a(15);a(49);function j(){var e=Object(n.useState)({Movies:!1,Tv:!1,Search:!1}),t=Object(l.a)(e,2),a=t[0],s=t[1],r=Object(o.e)(),i=function(e){var t=e.target.className;s(Object(u.a)({},t,!0)),r.push("/".concat(t))},j=function(e){return{borderBottom:"3px solid ".concat(e?"var(--navi-line-color)":"var(--bg-color)")}},d=a.Movies,v=a.Tv,b=a.Search;return Object(c.jsx)("nav",{className:"Navi",children:Object(c.jsxs)("ul",{children:[Object(c.jsx)("li",{className:"",style:j(),onClick:i,children:"Home"}),Object(c.jsx)("li",{className:"Movies",style:j(d),onClick:i,children:"Movies"}),Object(c.jsx)("li",{className:"Tv",style:j(v),onClick:i,children:"Tv"}),Object(c.jsx)("li",{className:"Search",style:j(b),onClick:i,children:"Search"})]})})}a(54);function d(){return Object(c.jsx)("div",{className:"Home",children:Object(c.jsxs)("div",{className:"Home-container",children:[Object(c.jsx)("h1",{children:"Welcome!"}),Object(c.jsxs)("ul",{children:[Object(c.jsx)("li",{children:"1. You Can Get Not Only  Movie's Info"}),Object(c.jsx)("li",{children:"2. But Also Tv Show Info"}),Object(c.jsx)("li",{children:"3. Search Your Movies Or Tv Show"})]})]})})}var v=a(7),b=a(5),p=a(6),O=a.n(p),m=a(13),h=a(16),x=a.n(h),f={getMovies:function(){return Object(m.a)(O.a.mark((function e(){var t;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("https://yts-proxy.nomadcoders1.now.sh/list_upcoming.json",{params:{sort_by:"date_added"}});case 2:return t=e.sent,e.abrupt("return",{upcomingMovies:t.data.data,popularMovies:t.data.data});case 4:case"end":return e.stop()}}),e)})))()},getTv:function(){return Object(m.a)(O.a.mark((function e(){var t,a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("https://yts-proxy.nomadcoders1.now.sh/list_upcoming.json",{params:{sort_by:"date_added"}});case 2:return t=e.sent,e.next=5,x.a.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json",{params:{sort_by:"rating"}});case 5:return a=e.sent,e.abrupt("return",{upcomingTv:t.data.data,popularTv:a.data.data});case 7:case"end":return e.stop()}}),e)})))()},getDetail:function(e){return Object(m.a)(O.a.mark((function t(){var a,c;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x.a.get("https://yts-proxy.nomadcoders1.now.sh/movie_details.json",{params:{movie_id:e}});case 2:return a=t.sent,c=a.data.data,t.abrupt("return",c);case 5:case"end":return t.stop()}}),t)})))()},search:function(e){return Object(m.a)(O.a.mark((function t(){var a,c;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x.a.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json",{params:{query_term:e,limit:50}});case 2:return a=t.sent,c=a.data.data,t.abrupt("return",c);case 5:case"end":return t.stop()}}),t)})))()}},g="GET_MOVIES",y="GET_TV_SHOW",N="GET_DETAIL",w="SEARCH",T={movies:{isLoaded:!1,nowPlaying:{data:null},upcomingMovies:{data:null},popularMovies:{data:null}},tv:{isLoaded:!1,nowPlaying:{data:null},upcomingTv:{data:null},popularTv:{data:null}},detail:{isLoaded:!1,data:{}},search:{isLoaded:!1,data:null}},M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:var a=t.datas,c=a.upcomingMovies,n=a.popularMovies;return Object(v.a)(Object(v.a)({},e),{},{movies:{isLoaded:!0,upcomingMovies:{data:c.movies},popularMovies:{data:n.movies}}});case y:var s=t.datas,r=s.popularTV,i=s.upcomingTV;return Object(v.a)(Object(v.a)({},e),{},{movies:{isLoaded:!0,upcomingTv:{data:i.movies},popularTv:{data:r.movies}}});case N:return Object(v.a)(Object(v.a)({},T),{},{detail:{isLoaded:!0,data:t.data}});case w:return Object(v.a)(Object(v.a)({},T),{},{search:{isLoaded:!0,data:t.data}});default:return e}};a(74);function S(e){var t=e.id,a=e.title,s=e.year,r=e.rating,i=e.medium_cover_image,u=Object(n.useState)(!1),j=Object(l.a)(u,2),d=j[0],v=j[1],b=Object(o.e)(),p=function(e){b.push("/Detail/".concat(e))};return Object(c.jsxs)("div",{className:"Card",children:[Object(c.jsx)("img",{className:"Card-img",src:i,alt:a,onClick:function(){return p(t)},onMouseOver:function(e){e.target.style.opacity="0.7",v(!0)},onMouseOut:function(e){e.target.style.opacity="1",v(!1)}}),Object(c.jsx)("strong",{className:"Card-name",onClick:function(){return p(t)},children:"".concat(a.length>15?a.substring(0,15)+"...":a)}),Object(c.jsx)("br",{}),Object(c.jsx)("span",{className:"Card-year",children:s}),d&&Object(c.jsx)("strong",{className:"Card-rating",children:"\u2b50".concat(r,"/10")})]})}var k=a(24),_=a(25);a(77);function C(){return Object(c.jsx)("div",{className:"Loading",children:Object(c.jsx)(k.a,{icon:_.b,size:"2x",spin:!0})})}a(40);function L(){var e=Object(b.d)((function(e){return e.movies}),b.b),t=e.isLoaded,a=e.upcomingMovies,s=e.popularMovies,r=Object(b.c)();return Object(n.useEffect)((function(){r(function(){var e=Object(m.a)(O.a.mark((function e(t){var a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.getMovies();case 2:a=e.sent,t({type:g,datas:a});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[r]),Object(c.jsx)("section",{className:"Movies",children:t?Object(c.jsxs)("div",{className:"Movies-container",children:[Object(c.jsxs)("div",{className:"Movies-now-playing",children:[Object(c.jsx)("h2",{children:"Upcoming Movies"}),Object(c.jsx)("div",{className:"Movies-list",children:a.movies.map((function(e){return Object(c.jsx)(S,Object(v.a)({},e))}))})]}),Object(c.jsxs)("div",{className:"Movies-now-playing",children:[Object(c.jsx)("h2",{children:"Popular Movies"}),Object(c.jsx)("div",{className:"Movies-list",children:s.movies.map((function(e){return Object(c.jsx)(S,Object(v.a)({},e))}))})]})]}):Object(c.jsx)(C,{})})}function D(){var e=Object(b.d)((function(e){return e.tv}),b.b),t=e.isLoaded,a=e.upcomingTv,s=e.popularTv,r=Object(b.c)();return Object(n.useEffect)((function(){r(function(){var e=Object(m.a)(O.a.mark((function e(t){var a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.getTv();case 2:a=e.sent,t({type:y,datas:a});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[r]),Object(c.jsx)("section",{className:"Tv",children:t?Object(c.jsxs)("div",{className:"Tv-container",children:[Object(c.jsxs)("div",{className:"Tv-now-playing",children:[Object(c.jsx)("h2",{children:"Popular Shows"}),Object(c.jsx)("div",{className:"Tv-list",children:a.Tv.map((function(e){return Object(c.jsx)(S,Object(v.a)({},e))}))})]}),Object(c.jsxs)("div",{className:"Tv-now-playing",children:[Object(c.jsx)("h2",{children:"Airing Today"}),Object(c.jsx)("div",{className:"Tv-list",children:s.Tv.map((function(e){return Object(c.jsx)(S,Object(v.a)({},e))}))})]})]}):Object(c.jsx)(C,{})})}a(78);function E(e){var t=e.keyword,a=Object(b.d)((function(e){return e.search}),b.b),s=a.isLoaded,r=a.data,i=Object(b.c)();return Object(n.useEffect)((function(){i(function(e){return function(){var t=Object(m.a)(O.a.mark((function t(a){var c;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.search(e);case 2:c=t.sent,a({type:w,data:c});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(t))}),[i,t]),Object(c.jsx)("div",{className:"SearchResult",children:s?Object(c.jsx)("div",{className:"SearchResult-container",children:Object(c.jsxs)("div",{className:"SearchResult-search-result",children:[Object(c.jsx)("h2",{children:"Search Result"}),r.movies?Object(c.jsx)("div",{className:"SearchResult-list",children:r.movies.map((function(e){return Object(c.jsx)(S,Object(v.a)({},e))}))}):Object(c.jsx)("div",{children:"Search results do not exist. keyword : ".concat(t)})]})}):Object(c.jsx)(C,{})})}a(79);function R(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),a=t[0],s=t[1],r=Object(n.useRef)(null);Object(n.useEffect)((function(){r.current.focus()}),[r]);return Object(c.jsxs)("section",{className:"Search",onSubmit:function(e){s(r.current.value),e.preventDefault()},children:[Object(c.jsx)("form",{className:"Search-form",children:Object(c.jsx)("input",{className:"Search-input",ref:r,type:"text",placeholder:"Search your Movie or TV show"})}),a&&Object(c.jsx)(E,{keyword:a})]})}a(80);function V(){var e=Object(o.f)().id,t=Object(o.e)(),a=Object(b.d)((function(e){return e.detail}),b.b),s=a.isLoaded,r=a.data,i=Object(b.c)();Object(n.useEffect)((function(){i(function(e){return function(){var t=Object(m.a)(O.a.mark((function t(a){var c;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.getDetail(e);case 2:c=t.sent,a({type:N,data:c});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(e))}),[i,e]);return Object(c.jsx)("div",{className:"Detail",style:{backgroundImage:s&&"url(".concat(r.movie.background_image_original,")")},children:s?Object(c.jsxs)("div",{className:"Detail-container",children:[Object(c.jsx)("img",{className:"Detail-img",src:r.movie.large_cover_image,alt:r.movie.title}),Object(c.jsxs)("div",{className:"Detail-contents",children:[Object(c.jsx)("h2",{children:"".concat(r.movie.title,"(").concat(r.movie.year,")")}),Object(c.jsx)("ul",{className:"Detail-genres",children:r.movie.genres.map((function(e,t){return Object(c.jsx)("li",{children:"".concat(t?"/":"").concat(e)},t)}))}),Object(c.jsx)("p",{children:r.movie.description_full}),Object(c.jsx)(k.a,{onClick:function(){t.goBack()},className:"Detail-faBackspace",icon:_.a,size:"3x"})]})]}):Object(c.jsx)(C,{})})}function A(){return Object(c.jsx)("div",{className:"App",children:Object(c.jsxs)(i.a,{basename:"/watcher",children:[Object(c.jsx)(j,{}),Object(c.jsx)(o.a,{exact:!0,path:"/",component:d}),Object(c.jsx)(o.a,{exact:!0,path:"/Movies",component:L}),Object(c.jsx)(o.a,{exact:!0,path:"/TV",component:D}),Object(c.jsx)(o.a,{exact:!0,path:"/Search",component:R}),Object(c.jsx)(o.a,{exact:!0,path:"/Detail/:id",component:V})]})})}var H=a(19),I=a(42),B=a(43),G=a.n(B),P=document.querySelector(".root"),q=Object(H.c)(M,Object(H.a)(I.a,G.a));r.a.render(Object(c.jsx)(b.a,{store:q,children:Object(c.jsx)(A,{})}),P)}},[[81,1,2]]]);
//# sourceMappingURL=main.7b49f1e1.chunk.js.map