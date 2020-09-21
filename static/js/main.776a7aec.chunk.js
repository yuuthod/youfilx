(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{41:function(e,t,n){e.exports=n(73)},73:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(20),o=n.n(i),l=n(10),u=n(11),c=n(13),s=n(12),p=n(14),d=n(17),m=n(16),f=n(2),v=n(1);function g(){var e=Object(f.a)(["\n  height: 50px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]);return g=function(){return e},e}function h(){var e=Object(f.a)(["\n  width: 80px;\n  height: 50px;\n  text-align: center;\n  border-bottom: 3px solid ",";\n  transition: border-bottom 0.5s ease-in-out;\n"]);return h=function(){return e},e}function b(){var e=Object(f.a)(["\n  display: flex;\n"]);return b=function(){return e},e}function y(){var e=Object(f.a)(["\n  color: white;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 50px;\n  display: flex;\n  align-items: center;\n  background-color: rgba(20, 20, 20, 0.5);\n  z-index: 10;\n  box-shadow: 0px 1px 5px 2px rgba(0,0,0,0.8);\n"]);return y=function(){return e},e}var E=v.default.header(y()),x=v.default.ul(b()),j=v.default.li(h(),function(e){return e.current?"red":"transparent"}),O=Object(v.default)(d.b)(g()),_=Object(m.f)(function(e){var t=e.location.pathname;return a.a.createElement(E,null,a.a.createElement(x,null,a.a.createElement(j,{current:"/"===t},a.a.createElement(O,{to:"/"},"Movies")),a.a.createElement(j,{current:"/tv"===t},a.a.createElement(O,{to:"/tv"},"TV")),a.a.createElement(j,{current:"/search"===t},a.a.createElement(O,{to:"/search"},"Search"))))}),w=n(6),k=n.n(w),R=n(15);function T(){var e=Object(f.a)(["\n  margin-top: 25px;\n  display: grid;\n  grid-template-columns: repeat(auto-fill, 125px);\n  grid-gap: 25px;\n"]);return T=function(){return e},e}function S(){var e=Object(f.a)(["\n  font-size: 16px;\n  font-weight: 600;\n"]);return S=function(){return e},e}function M(){var e=Object(f.a)(["\n:not(:last-child) {\n  margin-bottom: 50px;\n}\n"]);return M=function(){return e},e}var U=v.default.div(M()),C=v.default.span(S()),D=v.default.div(T()),P=function(e){var t=e.title,n=e.children;return a.a.createElement(U,null,a.a.createElement(C,null,t),a.a.createElement(D,null,n))};function q(){var e=Object(f.a)(["\n  height: 100vh;\n  width: 100vw;\n  display: flexl;\n  justify-content: center;\n  font-size: 20px;\n  margin-top: 20px;\n"]);return q=function(){return e},e}var z=v.default.div(q()),I=function(){return a.a.createElement(z,null,a.a.createElement("span",{role:"img","aria-label":"Loading"},"WAIT..."))},A=n(5),B=n.n(A);function F(){var e=Object(f.a)(["\n  color: #",";\n"]);return F=function(){return e},e}function N(){var e=Object(f.a)(["\n  width: 100vw;\n  display: flex;\n  justify-content: center;\n"]);return N=function(){return e},e}var V=v.default.div(N()),J=v.default.span(F(),function(e){return e.color}),L=function(e){var t=e.text,n=e.color;return a.a.createElement(V,null,a.a.createElement(J,{color:n},t))};L.PropType={text:B.a.string.isRequired,color:B.a.string.isRequired};var G=L;function W(){var e=Object(f.a)([""]);return W=function(){return e},e}function H(){var e=Object(f.a)([""]);return H=function(){return e},e}function K(){var e=Object(f.a)([""]);return K=function(){return e},e}function Q(){var e=Object(f.a)([""]);return Q=function(){return e},e}function X(){var e=Object(f.a)([""]);return X=function(){return e},e}function Y(){var e=Object(f.a)([""]);return Y=function(){return e},e}var Z=v.default.div(Y()),$=v.default.div(X()),ee=v.default.div(Q()),te=v.default.span(K()),ne=v.default.span(H()),re=v.default.span(W()),ae=function(e){var t=e.id,n=e.imageUrl,r=e.title,i=e.rating,o=e.year,l=e.isMovie,u=void 0!==l&&l;return a.a.createElement(d.b,{to:u?"/movie/".concat(t):"/tv/".concat(t)},a.a.createElement(Z,null,a.a.createElement($,null,a.a.createElement(ee,{imageUrl:n}),a.a.createElement(ne,null,a.a.createElement("span",{role:"img","aria-label":"rating"},"\ud83c\udf1f")," ",i,"/10")),a.a.createElement(te,null,r),a.a.createElement(re,null,o)))};function ie(){var e=Object(f.a)(["\n  padding: 0px 10px;\n"]);return ie=function(){return e},e}var oe=v.default.div(ie()),le=function(e){var t=e.nowPlaying,n=e.upcoming,r=e.popular,i=e.loading,o=e.error;return i?a.a.createElement(I,null):a.a.createElement(oe,null,t&&t.length>0&&a.a.createElement(P,{title:"Now Playing"},t.map(function(e){return a.a.createElement(ae,{key:e.id,id:e.id,imageUrl:e.poster_path,title:e.original_title,rating:e.vote_average,year:e.release_date.substring(0,4),isMovie:!0})})),n&&n.length>0&&a.a.createElement(P,{title:"Upcoming Movies"},n.map(function(e){return a.a.createElement(ae,{key:e.id,id:e.id,imageUrl:e.poster_path,title:e.original_title,rating:e.vote_average,year:e.release_date.substring(0,4),isMovie:!0})})),r&&r.length>0&&a.a.createElement(P,{title:"Popular Movies"},r.map(function(e){return a.a.createElement(ae,{key:e.id,id:e.id,imageUrl:e.poster_path,title:e.original_title,rating:e.vote_average,year:e.release_date.substring(0,4),isMovie:!0})})),o&&a.a.createElement(G,{color:"#e74c3c",text:o}))},ue=n(38),ce=n.n(ue).a.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"c687c3a1bd75b9cce10df38846b9118d",language:"en-US"}}),se={nowPlaying:function(){return ce.get("movie/now_playing")},upcoming:function(){return ce.get("movie/upcoming")},popular:function(){return ce.get("movie/popular")},movieDetail:function(e){return ce.get("movie/".concat(e),{params:{append_to_response:"videos"}})},search:function(e){return ce.get("search/movie",{params:{query:encodeURIComponent(e)}})}},pe={topRated:function(){return ce.get("tv/top_rated")},popular:function(){return ce.get("tv/popular")},airingToday:function(){return ce.get("tv/airing_today")},tvDetail:function(e){return ce.get("tv/".concat(e),{params:{append_to_response:"videos"}})},search:function(e){return ce.get("search/tv",{params:{query:encodeURIComponent(e)}})}},de=function(e){function t(){var e,n;Object(l.a)(this,t);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(n=Object(c.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(a)))).state={nowPlaying:null,upcoming:null,popular:null,error:null,loading:!0},n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=Object(R.a)(k.a.mark(function e(){var t,n,r,a,i,o;return k.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,se.nowPlaying();case 3:return t=e.sent,n=t.data.results,e.next=7,se.upcoming();case 7:return r=e.sent,a=r.data.results,e.next=11,se.popular();case 11:i=e.sent,o=i.data.results,this.setState({nowPlaying:n,upcoming:a,popular:o}),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),this.setState({error:"Can't find movies imformation."});case 19:return e.prev=19,this.setState({loading:!1}),e.finish(19);case 22:case"end":return e.stop()}},e,this,[[0,16,19,22]])}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.nowPlaying,n=e.upcoming,r=e.popular,i=e.error,o=e.loading;return a.a.createElement(le,{nowPlaying:t,upcoming:n,popular:r,error:i,loading:o})}}]),t}(a.a.Component);function me(){var e=Object(f.a)([""]);return me=function(){return e},e}var fe=v.default.div(me()),ve=function(e){var t=e.topRated,n=e.popular,r=e.airingToday,i=(e.tvDetail,e.loading),o=e.error;return i?a.a.createElement(I,null):a.a.createElement(fe,null,t&&t.length>0&&a.a.createElement(P,{title:"Top Rated Shows"},t.map(function(e){return a.a.createElement(ae,{key:e.id,id:e.id,imageUrl:e.poster_path,title:e.original_name,rating:e.vote_average,year:e.first_air_date.substring(0,4)})})),n&&n.length>0&&a.a.createElement(P,{title:"Popular Shows"},n.map(function(e){return a.a.createElement(ae,{key:e.id,id:e.id,imageUrl:e.poster_path,title:e.original_name,rating:e.vote_average,year:e.first_air_date.substring(0,4)})})),r&&r.length>0&&a.a.createElement(P,{title:"AiringToday Shows"},r.map(function(e){return a.a.createElement(ae,{key:e.id,id:e.id,imageUrl:e.poster_path,title:e.original_name,rating:e.vote_average,year:e.first_air_date.substring(0,4)})})),o&&a.a.createElement(G,{color:"#e74c3c",text:o}))},ge=function(e){function t(){var e,n;Object(l.a)(this,t);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(n=Object(c.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(a)))).state={topRated:null,popular:null,airingToday:null,tvDetail:null,error:null,loading:!0},n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=Object(R.a)(k.a.mark(function e(){var t,n,r,a,i,o;return k.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,pe.topRated();case 3:return t=e.sent,n=t.data.results,e.next=7,pe.popular();case 7:return r=e.sent,a=r.data.results,e.next=11,pe.airingToday();case 11:i=e.sent,o=i.data.results,this.setState({topRated:n,popular:a,airingToday:o}),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),this.setState({error:"Can't find TV information."});case 19:return e.prev=19,this.setState({loading:!1}),e.finish(19);case 22:case"end":return e.stop()}},e,this,[[0,16,19,22]])}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.topRated,n=e.popular,r=e.airingToday,i=e.tvDetail,o=e.error,l=e.loading;return a.a.createElement(ve,{topRated:t,popular:n,airingToday:r,tvDetail:i,error:o,loading:l})}}]),t}(a.a.Component);function he(){var e=Object(f.a)(["\n  all: unset;\n  font-size: 28px;\n  width: 100%;\n"]);return he=function(){return e},e}function be(){var e=Object(f.a)(["\n  margin-bottom: 50px;\n"]);return be=function(){return e},e}function ye(){var e=Object(f.a)(["\n  padding: 0px 20px;\n"]);return ye=function(){return e},e}var Ee=v.default.div(ye()),xe=v.default.form(be()),je=v.default.input(he()),Oe=function(e){var t=e.movieResults,n=e.tvResults,r=e.loading,i=e.error,o=e.searchTerm,l=e.handleSubmit,u=e.updateTerm;return a.a.createElement(Ee,null,a.a.createElement(xe,{onSubmit:l},a.a.createElement(je,{placeholder:"Search Movies or TV Shows",value:o,type:"text",onChange:u})),r?a.a.createElement(I,null):a.a.createElement(a.a.Fragment,null,t&&t.length>0&&a.a.createElement(P,{title:"Movie Result"},t.map(function(e){return a.a.createElement(ae,{key:e.id,id:e.id,imageUrl:e.poster_path,title:e.original_title,rating:e.vote_average,year:e.release_date.substring(0,4),isMovie:!0})})),n&&n.length>0&&a.a.createElement(P,{title:"TV Result"},n.map(function(e){return a.a.createElement(ae,{key:e.id,id:e.id,imageUrl:e.poster_path,title:e.original_name,rating:e.vote_average,year:e.first_air_date.substring(0,4)})})),i&&a.a.createElement(G,{color:"e74c3c",text:i}),n&&t&&0===n.length&&0===t.length&&a.a.createElement(G,{text:"Nothing found",color:"#95a5a6"})))},_e=function(e){function t(){var e,n;Object(l.a)(this,t);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(n=Object(c.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(a)))).state={movieResults:null,tvResults:null,searchTerm:"",loading:!1,error:""},n.updateTerm=function(e){var t=e.target.value;n.setState({searchTerm:t})},n.handleSubmit=function(e){e.preventDefault();var t=n.state.searchTerm;""!==t&&n.searchByTerm(t)},n.searchByTerm=Object(R.a)(k.a.mark(function e(){var t,r,a,i,o;return k.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.state.searchTerm,e.prev=1,e.next=4,se.search(t);case 4:return r=e.sent,a=r.data.results,e.next=8,pe.search(t);case 8:i=e.sent,o=i.data.results,n.setState({movieResults:a,tvResults:o}),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1),n.setState({error:"Can't find results "});case 16:return e.prev=16,n.setState({loading:!1}),e.finish(16);case 19:case"end":return e.stop()}},e,null,[[1,13,16,19]])})),n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.state,t=e.movieResults,n=e.tvResults,r=e.searchTerm,i=e.loading,o=e.error;return a.a.createElement(Oe,{movieResults:t,tvResults:n,searchTerm:r,loading:i,error:o,handleSubmit:this.handleSubmit,updateTerm:this.updateTerm})}}]),t}(a.a.Component),we=function(e){e.result,e.error,e.loading,e.isMovie;return null};we.propTypes={result:B.a.object,error:B.a.string.isRequired,loading:B.a.bool.isRequired,isMovie:B.a.bool.isRequired};var ke=we,Re=function(e){function t(e){var n;Object(l.a)(this,t),n=Object(c.a)(this,Object(s.a)(t).call(this,e));var r=e.location.pathname;return n.state={result:null,error:"",loading:!0,isMovie:r.includes("/movie/")},n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=Object(R.a)(k.a.mark(function e(){var t,n,r,a,i,o,l,u;return k.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.props,n=t.match.params.id,r=t.history.push,a=this.state.isMovie,i=parseInt(n),!isNaN(i)){e.next=5;break}return e.abrupt("return",r("/"));case 5:if(o=null,e.prev=6,!a){e.next=14;break}return e.next=10,se.movieDetail(i);case 10:l=e.sent,o=l.data,e.next=18;break;case 14:return e.next=16,pe.tvDetail(i);case 16:u=e.sent,o=u.data;case 18:e.next=23;break;case 20:e.prev=20,e.t0=e.catch(6),this.setState({error:"can't find anything "});case 23:return e.prev=23,this.setState({loading:!1,result:o}),e.finish(23);case 26:case"end":return e.stop()}},e,this,[[6,20,23,26]])}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.result,n=e.error,r=e.loading,i=e.isMovie;return a.a.createElement(ke,{result:t,error:n,loading:r,isMovie:i})}}]),t}(a.a.Component),Te=function(){return a.a.createElement(d.a,null,a.a.createElement(a.a.Fragment,null,a.a.createElement(_,null),a.a.createElement(m.d,null,a.a.createElement(m.b,{path:"/",exact:!0,component:de}),a.a.createElement(m.b,{path:"/tv",exact:!0,component:ge}),a.a.createElement(m.b,{path:"/search",component:_e}),a.a.createElement(m.b,{path:"/movie/:id",component:Re}),a.a.createElement(m.b,{path:"/tv/:id",component:Re}),a.a.createElement(m.a,{from:"*",to:"/"}))))},Se=n(39),Me=n.n(Se);function Ue(){var e=Object(f.a)(["\n  ",";\n  a{\n    text-decoration:none;\n    color:#fff;\n  }\n  *{\n    box-sizing:border-box;\n  }\n  body{\n    font-family:-apple-ststem, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Canta;\n    font-size:14px;\n    background-color:rgba(20, 20, 20, 1);\n    padding-top: 80px;\n    color: #fff;\n  }\n\n"]);return Ue=function(){return e},e}var Ce=Object(v.createGlobalStyle)(Ue(),Me.a),De=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(Te,null),a.a.createElement(Ce,null))}}]),t}(r.Component);o.a.render(a.a.createElement(De,null),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.776a7aec.chunk.js.map