(this.webpackJsonparkdev=this.webpackJsonparkdev||[]).push([[0],{59:function(e,t,r){},61:function(e,t,r){},95:function(e,t,r){"use strict";r.r(t);var n={};r.r(n),r.d(n,"general",(function(){return Y})),r.d(n,"fetch_Repositries",(function(){return ne}));var a=r(1),s=r.n(a),o=r(13),i=r.n(o),c=(r(59),r(60),r(61),r(14)),l=r(15),j=r(19),p=r(18),d=r(12),u=r(31),h=r(17),b="UPDATE_HOME_PROPS",O="MERGE_HOME_PROPS",m="DELETE_HOME_PROPS",x="CLEAR_HOME_STATE",y=r(26),f=r.n(y),g=function(e,t){for(var r=e,n=0;n<t.payload.length;n++)r=f.a.set(r,t.payload[n].prop,t.payload[n].value);return r},v=function(e,t){for(var r=e,n=0;n<t.payload.length;n++)r=f.a.merge(r,t.payload[n].prop,t.payload[n].value);return r},_=function(e,t){for(var r=e,n=0;n<t.payload.length;n++)r=f.a.delete(r,t.payload[n].prop);return r},N={repositoryObj:{isLoading:!1,repositoryArray:[],totalItems:0,hasMore:!0,page:1},queryItem:{order:"desc",sort:"stars"},repo_details:null},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return g(e,t);case O:return v(e,t);case m:return _(e,t);case x:return N;default:return e}},E=Object(d.b)({HomeR:w}),k=r(54),L=r(96),R=r(97),T=r(98),D=r(99),M=r(100),S=r(101),C=r(102),I=r(2),A=function(e){var t=e.history,r=Object(a.useState)(!1),n=Object(k.a)(r,2),s=n[0],o=n[1];return Object(I.jsx)("div",{children:Object(I.jsxs)(L.a,{color:"dark",dark:!0,expand:"md",children:[Object(I.jsx)(R.a,{href:"/",children:"Github Repository"}),Object(I.jsx)(T.a,{onClick:function(){return o(!s)}}),Object(I.jsx)(D.a,{isOpen:s,navbar:!0,children:Object(I.jsx)(M.a,{className:"mr-auto",navbar:!0,children:Object(I.jsx)(S.a,{style:{cursor:"pointer"},children:Object(I.jsx)(C.a,{onClick:function(e){return t.push("/")},children:"Home"})})})})]})})},H=r(105),P=r(104),q=r(103),X=r(106),F=r(107),U=r(108),V=r(109),B=r(110),G=r(25),J=function(e){var t=e.repository,r=e.key;return Object(I.jsx)(G.b,{to:"/repository_detail",children:Object(I.jsx)(q.a,{className:"home_card ml-5 mr-5",children:Object(I.jsxs)(P.a,{className:"home_card_row",children:[Object(I.jsx)(H.a,{xl:2,lg:2,md:4,sm:6,xs:12,children:Object(I.jsx)("img",{top:!0,width:"200",height:"200",src:t.owner_photo,alt:""})}),Object(I.jsx)(H.a,{children:Object(I.jsxs)(X.a,{children:[Object(I.jsx)(F.a,{tag:"h5",children:t.name}),Object(I.jsx)(U.a,{tag:"h6",className:"mb-2 text-muted",children:t.owner_userName}),Object(I.jsx)(V.a,{children:t.description}),Object(I.jsx)(B.a,{className:"home_btn",children:t.stars+" stars "}),Object(I.jsx)(B.a,{style:{marginLeft:"5px"},children:t.issues+" issues "}),Object(I.jsx)("span",{style:{marginLeft:"5px"},children:"Time Interval by Owner Name"})]})})]})},r)})},Y=function(e,t){return{type:t,payload:e}},z=r(34),K=r.n(z),Q=r(49),W=r(50),Z=r.n(W),$=r(51),ee=r.n($),te=function(e){var t="";return Object.keys(e).forEach((function(r,n){t+=0===n?"?":"&",t+=r+"="+e[r]})),t},re=function(e){ee()({text:e})},ne=function(e,t){return function(){var r=Object(Q.a)(K.a.mark((function r(n){var a,s;return K.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n({type:b,payload:[{prop:"repositoryObj.isLoading",value:!0}]}),e.page=t,a=te(e),s="/search/repositories"+a+"&q=created:>2017-10-22",r.next=6,Z.a.create({baseURL:"https://api.github.com",headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*"}}).get(s).then((function(e){if(200===e.status){if(void 0!==e.items)if(e.items.length>0){for(var t=[],r=0;r<e.items.length;r++)t.push({name:e.items[r].name,description:e.items[r].description,owner_photo:e.items[r].owner.avatar_url,owner_userName:e.items[r].owner.login,stars:e.items[r].stargazers_count,issues:e.items[r].open_issues});n({type:O,payload:[{prop:"repositoryObj.repositoryArray",value:t}]})}else re("No Result Found")}else n({type:b,payload:[{prop:"repositoryObj.hasMore",value:!1}]})})).catch((function(e){console.log(e)})).finally(n({type:b,payload:[{prop:"repositoryObj.isLoading",value:!1}]}));case 6:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()},ae=r(52),se=r.n(ae),oe=r(111),ie=function(e){var t=e.isLoading;return Object(I.jsx)("div",{className:"loader_div",children:Object(I.jsx)(se.a,{active:t,spinner:Object(I.jsx)(oe.a,{style:{width:"3rem",height:"3rem",color:"#007bff"},type:"grow"}),fadeSpeed:500,text:""})})},ce=r(53),le=function(e){Object(j.a)(r,e);var t=Object(p.a)(r);function r(){var e;Object(c.a)(this,r);for(var n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).renderCard=function(){var t=e.props.repositoryObj;if(t.length>0)return Object(I.jsx)(ce.a,{dataLength:t.length.length,next:e.fetchMoreData,hasMore:t.hasMore,loader:Object(I.jsx)("h4",{children:"Loading..."}),endMessage:Object(I.jsx)("p",{style:{textAlign:"center"},children:Object(I.jsx)("b",{children:"Yay! You have seen it all"})}),children:t.map((function(e,t){return Object(I.jsx)(H.a,{xl:12,lg:12,md:12,sm:12,sx:12,className:"mt-3",children:Object(I.jsx)(J,{repository:e},t)})}))})},e.fetchMoreData=function(){var t=e.props,r=t.general,n=t.fetch_Repositries,a=t.queryItem,s=t.repositoryObj;r([{prop:"repositoryObj.page",value:s.page+1}],b),n(a,s.page+1)},e}return Object(l.a)(r,[{key:"componentDidMount",value:function(){this.props.fetch_Repositries(this.props.repositoryObj,this.props.queryItem,1)}},{key:"render",value:function(){var e=this.props,t=e.repositoryObj,r=e.history;return!0===t.isLoading?Object(I.jsx)(ie,{isLoading:t.isLoading}):Object(I.jsx)("div",{className:"container_div",children:Object(I.jsxs)(P.a,{children:[Object(I.jsx)(H.a,{xl:12,lg:12,md:12,sm:12,sx:12,children:Object(I.jsx)(A,{history:r})}),this.renderCard()]})})}}]),r}(a.Component),je=Object(h.b)((function(e){var t=e.HomeR;return{repositoryObj:t.repositoryObj,queryItem:t.queryItem}}),n)(le),pe=r(7),de=r.p+"static/media/avater.6d644dbc.png",ue=function(e){Object(j.a)(r,e);var t=Object(p.a)(r);function r(){var e;Object(c.a)(this,r);for(var n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).checkHasDetails=function(){var t=e.props,r=t.repo_details,n=t.history;null===r&&(re("No Details to view"),n.push("/"))},e.renderText=function(e,t){return Object(I.jsx)(P.a,{children:Object(I.jsxs)(H.a,{className:"mt-1",children:[Object(I.jsxs)("span",{children:[e," : "]}),Object(I.jsx)("span",{children:t})]})})},e}return Object(l.a)(r,[{key:"componentDidMount",value:function(){this.checkHasDetails()}},{key:"render",value:function(){var e=this.props,t=e.repo_details,r=e.history;return Object(I.jsx)("div",{className:"container_div",children:Object(I.jsxs)(P.a,{children:[Object(I.jsx)(H.a,{xl:12,lg:12,md:12,sm:12,sx:12,children:Object(I.jsx)(A,{history:r})}),null!==t?Object(I.jsxs)(P.a,{className:"ml-5 mr-5 mt-5 mb-5",children:[Object(I.jsxs)(H.a,{className:"text-center",xl:2,children:[Object(I.jsx)("img",{src:de,alt:"logo",width:"200",height:"200",className:"img-thumbnail img-fluid"}),Object(I.jsx)("p",{className:"mt-2",children:t.owner_userName})]}),Object(I.jsx)(H.a,{children:Object(I.jsxs)(P.a,{className:"mt-3",children:[this.renderText("Repository name",t.name),this.renderText("Repository description",t.description),this.renderText("Number of stars for the repo.",t.stars),this.renderText("Number of issues for the repo.",t.issues)]})})]}):null]})})}}]),r}(a.Component),he=Object(h.b)((function(e){return{repo_details:e.HomeR.repo_details}}),n)(ue),be=Object(d.d)(E,{},window.__REDUX_DEVTOOLS_EXTENSION__?Object(d.c)(Object(d.a)(u.a),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()):Object(d.c)(Object(d.a)(u.a))),Oe=function(e){Object(j.a)(r,e);var t=Object(p.a)(r);function r(){return Object(c.a)(this,r),t.apply(this,arguments)}return Object(l.a)(r,[{key:"render",value:function(){return Object(I.jsx)(h.a,{store:be,children:Object(I.jsxs)(G.a,{basename:"/ark_task",children:[Object(I.jsx)(pe.a,{path:"/",exact:!0,component:je}),Object(I.jsx)(pe.a,{path:"/repository_detail",exact:!0,component:he})]})})}}]),r}(a.Component),me=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,112)).then((function(t){var r=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,o=t.getTTFB;r(e),n(e),a(e),s(e),o(e)}))};i.a.render(Object(I.jsx)(s.a.StrictMode,{children:Object(I.jsx)(Oe,{})}),document.getElementById("root")),me()}},[[95,1,2]]]);
//# sourceMappingURL=main.0ac7d708.chunk.js.map