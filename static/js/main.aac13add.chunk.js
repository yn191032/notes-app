(this["webpackJsonpnotes-app"]=this["webpackJsonpnotes-app"]||[]).push([[0],{118:function(e,t,n){e.exports=n(211)},123:function(e,t,n){},211:function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"createOne",(function(){return w})),n.d(a,"get",(function(){return x})),n.d(a,"list",(function(){return y})),n.d(a,"listOneFolder",(function(){return k})),n.d(a,"listFolders",(function(){return I})),n.d(a,"remove",(function(){return C})),n.d(a,"update",(function(){return S}));var r=n(0),o=n.n(r),c=n(12),i=n.n(c),l=(n(123),n(260)),u=n(11),s=n.n(u),m=n(17),f=n(19),d=Object(r.createContext)(),p=n(51),b=n(94),v=n(108),g=n(107),h=new(function(e){Object(v.a)(n,e);var t=Object(g.a)(n);function n(e){var a;return Object(b.a)(this,n),(a=t.call(this,e)).version(1).stores({notes:"++id, content, folder, date"}),a.notes=a.table("notes"),a.on("populate",(function(){0})),a}return n}(n(95).a))("notes_database"),E=n(47),O=n.n(E),j=function(e){return e.sort((function(e,t){return O()(t.date).diff(e.date)}))},N=function(){return O()().format()},w=function(){var e=Object(m.a)(s.a.mark((function e(){var t,n,a,r=arguments;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:"default",n=r.length>1&&void 0!==r[1]?r[1]:"",e.next=4,h.notes.add({content:n,folder:t,date:N()});case 4:return a=e.sent,console.log("repository.notes.create",a),e.next=8,x(Number(a));case 8:return e.abrupt("return",e.sent);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),x=function(){var e=Object(m.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.notes.get(Number(t));case 2:return n=e.sent,console.log("repository.notes.get",t),e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y=function(){var e=Object(m.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.notes.toArray();case 2:return t=e.sent,console.log("repository.notes.list",t.length),e.abrupt("return",j(t));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),k=function(){var e=Object(m.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return",y());case 2:return e.next=4,h.notes.where("folder").equals(t).reverse().toArray();case 4:return n=e.sent,console.log("repository.notes.listOneFolder",n.length),e.abrupt("return",j(n));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),I=function(){var e=Object(m.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.notes.orderBy("folder").uniqueKeys();case 2:return t=e.sent,console.log("repository.notes.listFolders",t),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),C=function(){var e=Object(m.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("repository.notes.remove",t),e.next=3,h.notes.delete(Number(t));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),S=function(){var e=Object(m.a)(s.a.mark((function e(t,n){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.notes.update(Number(t),Object(p.a)(Object(p.a)({},n),{},{date:N()}));case 2:return console.log("repository.notes.update",t,n),e.next=5,x(Number(t));case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),z={notes:a},T=function(e){var t=e.children,n=Object(r.useState)([]),a=Object(f.a)(n,2),c=a[0],i=a[1],l=M().makeUndo;Object(r.useEffect)((function(){u()}),[]);var u=function(){var e=Object(m.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=i,e.next=3,z.notes.list();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=Object(m.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,z.notes.createOne();case 2:return t=e.sent,u(),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),b=function(){var e=Object(m.a)(s.a.mark((function e(t,n){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,z.notes.update(t,n);case 2:return a=e.sent,u(),e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();return o.a.createElement(d.Provider,{value:{notes:c,removeNote:function(e){i(c.filter((function(t){return t.id!==Number(e)}))),l({message:"Note(#".concat(e,") removed."),onDo:function(){var t=Object(m.a)(s.a.mark((function t(){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,z.notes.remove(e);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),onUndo:function(){return u()}})},createNote:p,updateNote:b},children:t})},F=function(){var e=Object(r.useContext)(d);if(!e)throw new Error("Note Context must be used within NoteProvider");return e},R=n(70),B=Object(r.createContext)(),L=function(e){var t=e.children,n=Object(r.useState)([]),a=Object(f.a)(n,2),c=a[0],i=a[1],l=function(e){i((function(t){return t.filter((function(t){return t.id!==e}))}))};return o.a.createElement(B.Provider,{children:t,value:{makeUndo:function(e){var t=(new Date).getTime(),n=setTimeout((function(){e.onDo(),l(n)}),3300),a={message:e.message,id:n,getProgress:function(){var e,n,a=3e3-((new Date).getTime()-t);return e=3e3-a,n=3e3,Math.round(100*e/n)},cancel:function(){e.onUndo(),clearTimeout(n),l(n)}};i((function(e){return[].concat(Object(R.a)(e),[a])}))},undos:c}})},M=function(){var e=Object(r.useContext)(B);if(void 0===e)throw new Error("Undo Context must be used within UndoProvider");return e},P=n(106),U="#5e71d0",W="#ec6464",D=Object(P.a)({palette:{primary:{main:U},secondary:{main:W}},overrides:{MuiSnackbarContent:{message:{display:"flex",alignItems:"center",padding:0}},MuiMenu:{list:{padding:0}},MuiMenuItem:{root:{paddingTop:0,paddingBottom:0,minHeight:44}},MuiListItem:{root:{"&$selected":{backgroundColor:"transparent",color:U,fontWeight:600}}},MuiListItemIcon:{root:{minWidth:0,paddingRight:16}},MuiFormControl:{root:{marginBottom:16}}}}),A=n(16),q=n(13),H=function(e){var t=e.children;return o.a.createElement("div",{className:"app"},t)},J=function(e){var t=Object(q.h)().search;return new URLSearchParams(t).get(e)},Q=function(e){var t=Object(q.j)(),n=Object(q.h)();if(!e)return n;var a=e.to,r=e.hash,o=e.state,c=void 0===o?{}:o,i=e.query,l=void 0===i?{}:i,u=e.pushToQuery,s=void 0===u?{}:u,m=e.isRelative,d=t&&(void 0!==m&&m)?"".concat(t.url).concat(a):a||n.pathname,p=Object.keys(l).length?new URLSearchParams:new URLSearchParams(n.search);return Object.entries(l).forEach((function(e){var t=Object(f.a)(e,2),n=t[0],a=t[1];p.set(n,a)})),Object.entries(s).forEach((function(e){var t=Object(f.a)(e,2),n=t[0],a=t[1],r=p.get(n),o=r?r.split(","):[];o.push(a),p.set(n,o)})),{pathname:d,search:p.toString(),hash:r,state:c}},$=n(261),K=n(251),V=n(244),_=n(264),G=n(246),X=n(247),Y=n(242),Z=Object(Y.a)((function(){return{popupTitle:{position:"absolute"},popupContent:{display:"flex",alignItems:"center",padding:"40px 20px !important"}}})),ee=o.a.forwardRef((function(e,t){return o.a.createElement(V.a,Object.assign({direction:"up",ref:t},e))})),te=function(e){var t=e.open,n=e.children,a=Object(q.g)(),r=Z();return o.a.createElement(_.a,{open:t,onClose:a.goBack,TransitionComponent:ee},o.a.createElement(G.a,{className:r.popupContent},o.a.createElement(X.a,null,n)))},ne={"rename-folder":function(e){var t=e.open,n=Object(r.useRef)(),a=Object(q.g)(),c=J("id"),i=J("folder"),l=function(e){var t=F().updateNote;return{updateNoteFolder:function(n){t(e,{folder:n})}}}(c).updateNoteFolder;return o.a.createElement(te,{open:t},o.a.createElement($.a,{label:"New folder name",autoFocus:!0,type:"text",fullWidth:!0,inputRef:n,defaultValue:i}),o.a.createElement(K.a,{disableElevation:!0,variant:"contained",color:"primary",onClick:function(){l(n.current.value),a.replace("/notes/".concat(c,"/edit"))}},"Rename"))}},ae=function(){var e=J("popup"),t=ne[e];return t?o.a.createElement(t,{open:Boolean(e)}):null},re=n(263),oe=n(252),ce=n(253),ie=n(99),le=n.n(ie),ue=Object(Y.a)({list:{display:"flex",flexDirection:"column",position:"fixed",alignItems:"center",justifyContent:"center",zIndex:1400,left:8,right:8,bottom:8},item:{width:"100%",position:"static",marginTop:8},progress:{marginRight:16}}),se=function(e){var t=e.message,n=e.cancelAction,a=e.getProgress,c=ue(),i=o.a.useRef(),l=o.a.useState(!0),u=Object(f.a)(l,2),s=u[0],m=u[1],d=o.a.useState(0),p=Object(f.a)(d,2),b=p[0],v=p[1];return Object(r.useEffect)((function(){return i.current=setInterval((function(){var e=a();e>=100?m(!1):v(e)}),100),function(){return clearInterval(i.current)}}),[a]),o.a.createElement(re.a,{open:s,className:c.item,message:o.a.createElement(o.a.Fragment,null,o.a.createElement(oe.a,{className:c.progress,color:"secondary",variant:"static",size:20,thickness:4,value:b}),o.a.createElement("span",null,t)),action:o.a.createElement(o.a.Fragment,null,o.a.createElement(K.a,{color:"secondary",size:"small",onClick:function(){clearInterval(i.current),m(!0),n()}},o.a.createElement("span",null,"UNDO")),o.a.createElement(ce.a,{size:"small","aria-label":"close",color:"inherit",onClick:function(){m(!1)}},o.a.createElement(le.a,{fontSize:"small"})))})},me=function(){var e=ue(),t=M().undos;return o.a.createElement("div",{className:e.list},t.map((function(e){return o.a.createElement(se,{key:e.id,message:e.message,cancelAction:e.cancel,getProgress:e.getProgress})})))},fe=function(e){var t=e.date;return O()(t).to(O()())},de=n(250),pe=n(254),be=n(255),ve=n(266),ge=n(256),he=n(100),Ee=n.n(he),Oe=n(69),je=n.n(Oe),Ne=n(45),we=n.n(Ne),xe=n(46),ye=n.n(xe),ke=Object(Y.a)((function(e){return{list:{padding:0},item:{borderTop:"1px solid rgba(0,0,0,0.1)",color:"rgba(0, 0, 0, 0.8)"},itemText:{margin:0},title:{fontWeight:600,color:"rgba(0, 0, 0, 0.7)"},folder:{fontWeight:600,display:"block",fontSize:"0.8em",color:"rgba(0, 0, 0, 0.4)"},date:{fontSize:"0.8em",color:"rgba(0, 0, 0, 0.4)"},delete:{color:"rgba(0,0,0,0.2)"},loading:{color:"rgba(0, 0, 0, 0.2)",textAlign:"center",margin:16},noData:{textAlign:"center",paddingTop:6,fontWeight:600,fontSize:14,textTransform:"uppercase",color:"rgba(0, 0, 0, 0.3)"},bookIcon:{width:12,height:12}}})),Ie=function(e){var t=e.notes,n=e.onRemove,a=ke();return t?t.length<1?o.a.createElement("div",{className:a.noData},"No notes"):o.a.createElement(de.a,{className:a.list},t.map((function(e){return o.a.createElement(pe.a,{className:a.item,key:e.id,component:A.b,to:"/notes/".concat(e.id)},o.a.createElement(be.a,null,o.a.createElement(Ee.a,{fontSize:"small"})),o.a.createElement(ve.a,{className:a.itemText,primary:o.a.createElement("span",null,o.a.createElement("span",{className:a.folder},"default"!==e.folder?o.a.createElement(o.a.Fragment,null,o.a.createElement(we.a,{fontSize:"small",className:a.bookIcon})," ",e.folder):o.a.createElement(o.a.Fragment,null,o.a.createElement(ye.a,{fontSize:"small",className:a.bookIcon})," ",e.folder)),o.a.createElement("span",{className:a.title},e.content.length>=20?"".concat(e.content.substr(0,20),"..."):e.content.substr(0,20))),secondary:o.a.createElement("span",{className:a.date},o.a.createElement(fe,{date:e.date}))}),o.a.createElement(ge.a,null,o.a.createElement(ce.a,{onClick:function(){return n(e.id)}},o.a.createElement(je.a,{className:a.delete,fontSize:"small"}))))}))):o.a.createElement("div",{className:a.loading},o.a.createElement(oe.a,{color:"inherit"}))},Ce=n(265),Se=n(101),ze=n.n(Se),Te=Object(Y.a)((function(e){return{wrapper:{backgroundColor:"#fff",overflow:"scroll",padding:16,paddingBottom:22},inner:{display:"flex"},item:{paddingRight:12},addIcon:{width:20,paddingLeft:5},itemIcon:{width:16,paddingLeft:5},itemMenuIcon:{width:22,paddingLeft:5}}})),Fe=function(e){var t=e.folders,n=Te(),a=Object(q.i)().folderId;return o.a.createElement("div",{className:n.wrapper},o.a.createElement("div",{className:n.inner},o.a.createElement("div",{className:n.item},o.a.createElement(Ce.a,{clickable:!0,icon:o.a.createElement(ze.a,{className:n.itemIcon}),label:"all notes",color:a?"primary":"secondary",component:A.b,to:"/notes/"})),t?t.map((function(e){return o.a.createElement("div",{key:e,className:n.item},o.a.createElement(Ce.a,{icon:"default"!==e?o.a.createElement(we.a,{className:n.itemIcon}):o.a.createElement(ye.a,{className:n.itemIcon}),color:a===e?"secondary":"primary",clickable:!0,label:e||"no folder",component:A.b,to:"/notes/folder/".concat(e)}))})):o.a.createElement(oe.a,{color:"primary",size:30})))},Re=n(257),Be=n(102),Le=n.n(Be),Me=Object(Y.a)((function(e){return{button:{position:"fixed",zIndex:e.zIndex.appBar,right:35,bottom:35}}})),Pe=function(){var e=Me();return o.a.createElement(Re.a,{color:"primary",className:e.button,component:A.b,to:"/notes/new"},o.a.createElement(Le.a,null))},Ue=function(){var e=function(e){var t=F(),n=t.notes,a=t.removeNote,o=Object(r.useState)({folders:[],filteredNotes:[]}),c=Object(f.a)(o,2),i=c[0],l=c[1];return Object(r.useEffect)((function(){console.log("useNotesList first update")}),[]),Object(r.useEffect)((function(){console.log("useNotesList updated"),function(){var t=Object(m.a)(s.a.mark((function t(){var a,r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a=Object(R.a)(new Set(n.map((function(e){return e.folder})))),r=e?n.filter((function(t){return t.folder===e})):n,l({folders:a,filteredNotes:r});case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()()}),[n,e]),{notes:i.filteredNotes,folders:i.folders,removeNote:a}}(Object(q.i)().folderId),t=e.notes,n=e.folders,a=e.removeNote;return o.a.createElement(o.a.Fragment,null,o.a.createElement(Fe,{folders:n}),o.a.createElement(Ie,{notes:t,onRemove:a}),o.a.createElement(Pe,null))},We=n(103),De=n.n(We),Ae=n(258),qe=n(259),He=n(248),Je=n(104),Qe=n.n(Je),$e=n(105),Ke=n.n($e),Ve={content:"*Tap to create a note...*"},_e=Object(Y.a)((function(e){return{icon:{margin:5},toolbar:{minHeight:45},input:{position:"absolute",top:56,bottom:0,padding:e.spacing(2),alignItems:"baseline"},folder:{margin:5,marginLeft:"auto"},rendered:{width:"100%",boxSizing:"border-box",position:"absolute",top:56,bottom:0,padding:e.spacing(2)}}})),Ge=function(){var e=_e(),t=Object(q.g)(),n=Object(q.j)().url,a=Object(q.i)().noteId,c=function(e){var t=Object(r.useState)({}),n=Object(f.a)(t,2),a=n[0],o=n[1],c=F(),i=c.notes,l=c.updateNote,u=c.removeNote,d=c.createNote,b=Object(r.useState)(""),v=Object(f.a)(b,2),g=v[0],h=v[1];Object(r.useEffect)((function(){console.log("useOneNote first update")}),[]),Object(r.useEffect)((function(){console.log("useOneNote updated");var t=i.find((function(t){return t.id===Number(e)}));o(e&&t?t:Ve)}),[e,i]),Object(r.useEffect)((function(){if(e){var t=setTimeout((function(){g!==a.content&&(l(e,{content:a.content}),h(a.content))}),300);return function(){return clearTimeout(t)}}}),[a]);var E=function(){var e=Object(m.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d();case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return{note:a,updateNoteContent:function(e){o(Object(p.a)(Object(p.a)({},a),{},{content:e}))},updateNoteFolder:function(t){l(e,{folder:t})},removeNote:function(){u(e)},createNote:E}}(a),i=c.note,l=c.updateNoteContent,u=c.removeNote,d=c.createNote,b=function(e){l(e.target.value)};return o.a.createElement(o.a.Fragment,null,o.a.createElement(Ae.a,{position:"static",color:"default",elevation:0},o.a.createElement(qe.a,{className:e.toolbar},o.a.createElement(ce.a,{className:e.icon,size:"small",color:"inherit",edge:"start",component:A.b,to:"/notes"},o.a.createElement(Qe.a,null)),o.a.createElement(K.a,{disabled:!Boolean(i.id),className:e.folder,endIcon:"default"!==i.folder?o.a.createElement(ye.a,null):o.a.createElement(we.a,null),color:"inherit",size:"small",component:A.b,to:Q({pushToQuery:{popup:"rename-folder",id:i.id,folder:i.folder}})},o.a.createElement("span",{style:{textTransform:"none"}},i.folder)),o.a.createElement(ce.a,{disabled:!Boolean(i.id),className:e.icon,size:"small",color:"inherit",onClick:function(){t.replace("/notes"),u()}},o.a.createElement(je.a,{fontSize:"small"})),o.a.createElement(ce.a,{disabled:!Boolean(i.id),className:e.icon,size:"small",edge:"end",color:"primary",onClick:function(){t.replace(n)}},o.a.createElement(Ke.a,{fontSize:"small"})))),o.a.createElement(q.d,null,o.a.createElement(q.b,{exact:!0,path:"".concat(n,"/edit"),render:function(){return o.a.createElement("form",null,o.a.createElement(He.a,{fullWidth:!0,multiline:!0,autoFocus:!0,placeholder:"type something...",className:e.input,value:i.content,onChange:b}))}}),o.a.createElement(q.b,{exact:!0,path:n,render:function(){return o.a.createElement("div",{className:e.rendered,onClick:function(){a?t.replace("".concat(n,"/edit")):d().then((function(e){t.replace("/notes/".concat(e.id,"/edit"))}))}},o.a.createElement(De.a,{source:i.content}))}})))},Xe=function(){return o.a.createElement(A.a,null,o.a.createElement(H,null,o.a.createElement(q.d,null,o.a.createElement(q.b,{exact:!0,path:"/"},o.a.createElement(q.a,{to:"/notes"}),o.a.createElement(q.a,{to:"/notes/new"})),o.a.createElement(q.b,{path:"/notes/folder/:folderId?",component:Ue}),o.a.createElement(q.b,{path:"/notes/new",component:Ge}),o.a.createElement(q.b,{path:"/notes/:noteId",component:Ge}),o.a.createElement(q.b,{path:"/notes",component:Ue}),o.a.createElement(q.a,{to:"/"})),o.a.createElement(ae,null),o.a.createElement(me,null)))},Ye=function(){return o.a.createElement(l.a,{theme:D},o.a.createElement(L,null,o.a.createElement(T,null,o.a.createElement(Xe,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(Ye,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[118,1,2]]]);
//# sourceMappingURL=main.aac13add.chunk.js.map