(this.webpackJsonpwatcher=this.webpackJsonpwatcher||[]).push([[0],{48:function(e,t,a){},53:function(e,t,a){},73:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){},80:function(e,t,a){},81:function(e,t,a){},82:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a(0),r=a(21),s=a.n(r),i=a(17),o=a(4),u=a(23),l=a(16);a(48);function j(){var e=Object(n.useState)({Movies:!1,Tv:!1,Search:!1}),t=Object(l.a)(e,2),a=t[0],r=t[1],s=Object(o.e)(),i=function(e){var t=e.target.className;r(Object(u.a)({},t,!0)),s.push("/".concat(t))},j=function(e){return{borderBottom:"3px solid ".concat(e?"var(--navi-line-color)":"var(--bg-color)")}},d=a.Movies,b=a.Tv,v=a.Search;return Object(c.jsx)("nav",{className:"Navi",children:Object(c.jsxs)("ul",{children:[Object(c.jsx)("li",{className:"",style:j(),onClick:i,children:"Home"}),Object(c.jsx)("li",{className:"Movies",style:j(d),onClick:i,children:"Movies"}),Object(c.jsx)("li",{className:"Tv",style:j(b),onClick:i,children:"Tv"}),Object(c.jsx)("li",{className:"Search",style:j(v),onClick:i,children:"Search"})]})})}a(53);function d(){return Object(c.jsx)("div",{className:"Home",children:Object(c.jsxs)("div",{className:"Home-container",children:[Object(c.jsx)("h1",{children:"Welcome!"}),Object(c.jsxs)("ul",{children:[Object(c.jsx)("li",{children:"1. You Can Get Not Only  Movie's Info"}),Object(c.jsx)("li",{children:"2. But Also Tv Show Info"}),Object(c.jsx)("li",{children:"3. Search Your Movies Or Tv Show"})]})]})})}var b=a(7),v=a(5),O=a(6),p=a.n(O),m=a(13),h=a(14),x=a.n(h),f="https://yts.mx/api/v2/list_movies.json",g={getMovies:function(){return Object(m.a)(p.a.mark((function e(){var t,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get(f,{params:{sort_by:"date_added"}});case 2:return t=e.sent,e.next=5,x.a.get(f,{params:{sort_by:"rating"}});case 5:return a=e.sent,e.abrupt("return",{upcomingMovies:t.data.data,popularMovies:a.data.data});case 7:case"end":return e.stop()}}),e)})))()},getTv:function(){return Object(m.a)(p.a.mark((function e(){var t,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get(f,{params:{sort_by:"date_added",genre:"drama"}});case 2:return t=e.sent,e.next=5,x.a.get(f,{params:{sort_by:"rating",genre:"drama"}});case 5:return a=e.sent,e.abrupt("return",{upcomingTv:t.data.data,popularTv:a.data.data});case 7:case"end":return e.stop()}}),e)})))()},getDetail:function(e){return Object(m.a)(p.a.mark((function t(){var a,c;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x.a.get("https://yts-proxy.nomadcoders1.now.sh/movie_details.json",{params:{movie_id:e}});case 2:return a=t.sent,c=a.data.data,t.abrupt("return",c);case 5:case"end":return t.stop()}}),t)})))()},search:function(e){return Object(m.a)(p.a.mark((function t(){var a,c;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x.a.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json",{params:{query_term:e,limit:50}});case 2:return a=t.sent,c=a.data.data,t.abrupt("return",c);case 5:case"end":return t.stop()}}),t)})))()}},y="GET_MOVIES",N="GET_TV_SHOW",w="GET_DETAIL",T="SEARCH",M={movies:{isLoaded:!1,nowPlaying:{data:null},upcomingMovies:{data:null},popularMovies:{data:null}},tv:{isLoaded:!1,nowPlaying:{data:null},upcomingTv:{data:null},popularTv:{data:null}},detail:{isLoaded:!1,data:{}},search:{isLoaded:!1,data:null}},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y:var a=t.datas,c=a.upcomingMovies,n=a.popularMovies;return Object(b.a)(Object(b.a)({},e),{},{movies:{isLoaded:!0,upcomingMovies:{data:c.movies},popularMovies:{data:n.movies}}});case N:var r=t.datas,s=r.popularTv,i=r.upcomingTv;return Object(b.a)(Object(b.a)({},e),{},{tv:{isLoaded:!0,upcomingTv:{data:i.movies},popularTv:{data:s.movies}}});case w:return Object(b.a)(Object(b.a)({},M),{},{detail:{isLoaded:!0,data:t.data}});case T:return Object(b.a)(Object(b.a)({},M),{},{search:{isLoaded:!0,data:t.data}});default:return e}};a(73);function k(e){var t=e.id,a=e.title,r=e.year,s=e.rating,i=e.medium_cover_image,u=Object(n.useState)(!1),j=Object(l.a)(u,2),d=j[0],b=j[1],v=Object(o.e)(),O=function(e){v.push("/Detail/".concat(e))};return Object(c.jsxs)("div",{className:"Card",children:[Object(c.jsx)("img",{className:"Card-img",src:i,alt:a,onClick:function(){return O(t)},onMouseOver:function(e){e.target.style.opacity="0.7",b(!0)},onMouseOut:function(e){e.target.style.opacity="1",b(!1)}}),Object(c.jsx)("strong",{className:"Card-name",onClick:function(){return O(t)},children:"".concat(a.length>15?a.substring(0,15)+"...":a)}),Object(c.jsx)("br",{}),Object(c.jsx)("span",{className:"Card-year",children:r}),d&&Object(c.jsx)("strong",{className:"Card-rating",children:"\u2b50".concat(s,"/10")})]})}var _=a(24),C=a(25);a(76);function L(){return Object(c.jsx)("div",{className:"Loading",children:Object(c.jsx)(_.a,{icon:C.b,size:"2x",spin:!0})})}a(77);function D(){var e=Object(v.d)((function(e){return e.movies}),v.b),t=e.isLoaded,a=e.upcomingMovies,r=e.popularMovies,s=Object(v.c)();return Object(n.useEffect)((function(){s(function(){var e=Object(m.a)(p.a.mark((function e(t){var a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.getMovies();case 2:a=e.sent,t({type:y,datas:a});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[s]),Object(c.jsx)("section",{className:"Movies",children:t?Object(c.jsxs)("div",{className:"Movies-container",children:[Object(c.jsxs)("div",{className:"Movies-now-playing",children:[Object(c.jsx)("h2",{children:"Upcoming Movies"}),Object(c.jsx)("div",{className:"Movies-list",children:a.data.map((function(e){return Object(c.jsx)(k,Object(b.a)({},e))}))})]}),Object(c.jsxs)("div",{className:"Movies-now-playing",children:[Object(c.jsx)("h2",{children:"Popular Movies"}),Object(c.jsx)("div",{className:"Movies-list",children:r.data.map((function(e){return Object(c.jsx)(k,Object(b.a)({},e))}))})]})]}):Object(c.jsx)(L,{})})}a(78);function E(){var e=Object(v.d)((function(e){return e.tv}),v.b),t=e.isLoaded,a=e.upcomingTv,r=e.popularTv,s=Object(v.c)();return Object(n.useEffect)((function(){s(function(){var e=Object(m.a)(p.a.mark((function e(t){var a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.getTv();case 2:a=e.sent,t({type:N,datas:a});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[s]),Object(c.jsx)("section",{className:"Tv",children:t?Object(c.jsxs)("div",{className:"Tv-container",children:[Object(c.jsxs)("div",{className:"Tv-now-playing",children:[Object(c.jsx)("h2",{children:"Popular Shows"}),Object(c.jsx)("div",{className:"Tv-list",children:a.data.map((function(e){return Object(c.jsx)(k,Object(b.a)({},e))}))})]}),Object(c.jsxs)("div",{className:"Tv-now-playing",children:[Object(c.jsx)("h2",{children:"Airing Today"}),Object(c.jsx)("div",{className:"Tv-list",children:r.data.map((function(e){return Object(c.jsx)(k,Object(b.a)({},e))}))})]})]}):Object(c.jsx)(L,{})})}a(79);function R(e){var t=e.keyword,a=Object(v.d)((function(e){return e.search}),v.b),r=a.isLoaded,s=a.data,i=Object(v.c)();return Object(n.useEffect)((function(){i(function(e){return function(){var t=Object(m.a)(p.a.mark((function t(a){var c;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g.search(e);case 2:c=t.sent,a({type:T,data:c});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(t))}),[i,t]),Object(c.jsx)("div",{className:"SearchResult",children:r?Object(c.jsx)("div",{className:"SearchResult-container",children:Object(c.jsxs)("div",{className:"SearchResult-search-result",children:[Object(c.jsx)("h2",{children:"Search Result"}),s.movies?Object(c.jsx)("div",{className:"SearchResult-list",children:s.movies.map((function(e){return Object(c.jsx)(k,Object(b.a)({},e))}))}):Object(c.jsx)("div",{children:"Search results do not exist. keyword : ".concat(t)})]})}):Object(c.jsx)(L,{})})}a(80);function A(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),a=t[0],r=t[1],s=Object(n.useRef)(null);Object(n.useEffect)((function(){s.current.focus()}),[s]);return Object(c.jsxs)("section",{className:"Search",onSubmit:function(e){r(s.current.value),e.preventDefault()},children:[Object(c.jsx)("form",{className:"Search-form",children:Object(c.jsx)("input",{className:"Search-input",ref:s,type:"text",placeholder:"Search your Movie or TV show"})}),a&&Object(c.jsx)(R,{keyword:a})]})}a(81);function H(){var e=Object(o.f)().id,t=Object(o.e)(),a=Object(v.d)((function(e){return e.detail}),v.b),r=a.isLoaded,s=a.data,i=Object(v.c)();Object(n.useEffect)((function(){i(function(e){return function(){var t=Object(m.a)(p.a.mark((function t(a){var c;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g.getDetail(e);case 2:c=t.sent,a({type:w,data:c});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(e))}),[i,e]);return Object(c.jsx)("div",{className:"Detail",style:{backgroundImage:r&&"url(".concat(s.movie.background_image_original,")")},children:r?Object(c.jsxs)("div",{className:"Detail-container",children:[Object(c.jsx)("img",{className:"Detail-img",src:s.movie.large_cover_image,alt:s.movie.title}),Object(c.jsxs)("div",{className:"Detail-contents",children:[Object(c.jsx)("h2",{children:"".concat(s.movie.title,"(").concat(s.movie.year,")")}),Object(c.jsx)("ul",{className:"Detail-genres",children:s.movie.genres.map((function(e,t){return Object(c.jsx)("li",{children:"".concat(t?"/":"").concat(e)},t)}))}),Object(c.jsx)("p",{children:s.movie.description_full}),Object(c.jsx)(_.a,{onClick:function(){t.goBack()},className:"Detail-faBackspace",icon:C.a,size:"3x"})]})]}):Object(c.jsx)(L,{})})}function I(){return Object(c.jsx)("div",{className:"App",children:Object(c.jsxs)(i.a,{basename:"/watcher",children:[Object(c.jsx)(j,{}),Object(c.jsx)(o.a,{exact:!0,path:"/",component:d}),Object(c.jsx)(o.a,{exact:!0,path:"/Movies",component:D}),Object(c.jsx)(o.a,{exact:!0,path:"/TV",component:E}),Object(c.jsx)(o.a,{exact:!0,path:"/Search",component:A}),Object(c.jsx)(o.a,{exact:!0,path:"/Detail/:id",component:H})]})})}var B=a(19),G=a(41),P=a(42),V=a.n(P),q=document.querySelector(".root"),z=Object(B.c)(S,Object(B.a)(G.a,V.a));s.a.render(Object(c.jsx)(v.a,{store:z,children:Object(c.jsx)(I,{})}),q)}},[[82,1,2]]]);
//# sourceMappingURL=main.bb13cf0e.chunk.js.map