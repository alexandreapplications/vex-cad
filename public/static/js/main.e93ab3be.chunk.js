(this.webpackJsonpwebapp=this.webpackJsonpwebapp||[]).push([[0],{144:function(e,t,n){"use strict";n.r(t);var a=n(3),i=n(0),c=n.n(i),r=n(14),s=n.n(r),o=n(24),l=n(4),j=n(16),d=n(17),u=function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:"HomePage"}),Object(a.jsx)("div",{children:Object(a.jsx)("button",{children:"Sign in with Google"})}),Object(a.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero."})]})},b=function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:"About Page"}),Object(a.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero."})]})},h=n(12),m=n(5),p=n(190),O=n(19),x=n(218),g=n(191),f=n(192),v=n(193),C=n(196),w=n(57),y=n(195),S=n(187),N=n(99),k=n.n(N),L=n(100),P=n.n(L),F=n(101),W=n.n(F),I=n(197),E=n(198),A=n(199),q=n(102),D=n.n(q),T=n(103),B=n.n(T),M=n(215),U=n(194),G=n(20),H=n(97),V=n.n(H),z=n(219),R=function(e){return Object(a.jsx)(c.a.Fragment,{children:Object(a.jsx)(S.a,{color:"inherit",children:e.user?Object(a.jsx)(z.a,{alt:e.user.email,src:e.user.photoURL}):Object(a.jsx)(V.a,{})})})},J=n(52),X=n(35),K=n(77),Y=n(76),_=n(70),Q=new(n(98).Dispatcher),Z=n(55);n(133),n(135);Z.a.initializeApp({apiKey:"AIzaSyAD1GPHjZ1FuepBGkMlQE_cquCsGyV6FP8",authDomain:"api-project-479801270858.firebaseapp.com",databaseURL:"https://api-project-479801270858.firebaseio.com",projectId:"api-project-479801270858",storageBucket:"api-project-479801270858.appspot.com",messagingSenderId:"479801270858",appId:"1:479801270858:web:82d4ebf8de4b0ed4b9fcb3",measurementId:"G-2TW0PKXH8B"});var $=Z.a.auth(),ee=Z.a.firestore(),te="Change",ne=!1,ae=new(function(e){Object(K.a)(n,e);var t=Object(Y.a)(n);function n(){return Object(J.a)(this,n),t.apply(this,arguments)}return Object(X.a)(n,[{key:"getUser",value:function(){return $.currentUser}},{key:"isAutenticated",value:function(){return null!=$.currentUser}},{key:"isInitialized",value:function(){return ne}},{key:"loginByForm",value:function(e,t){return $.signInWithEmailAndPassword(e,t)}},{key:"signOut",value:function(){return $.signOut()}},{key:"addChangeListener",value:function(e){this.on(te,e)}},{key:"removeChangeListener",value:function(e){this.removeListener(te,e)}},{key:"emitChange",value:function(){this.emit(te)}}]),n}(_.EventEmitter));Q.register((function(e){e.actionType})),$.onAuthStateChanged((function(){ne=!0,ae.emitChange()}));var ie=ae,ce=240,re=Object(p.a)((function(e){return{root:{display:"flex"},appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{width:"calc(100% - ".concat(ce,"px)"),marginLeft:ce,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:e.spacing(2)},hide:{display:"none"},drawer:{width:ce,flexShrink:0},drawerPaper:{width:ce},drawerHeader:Object(o.a)(Object(o.a)({display:"flex",alignItems:"center",padding:"0 8px"},e.mixins.toolbar),{},{justifyContent:"flex-end"}),content:{flexGrow:1,padding:e.spacing(3),transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginLeft:-240},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginLeft:0},title:{flexGrow:1},drawerTitle:{fontWeight:"bold"}}})),se=function(e){var t=e.children,n=(Object(l.a)(e,["children"]),re()),r=Object(O.a)(),s=Object(i.useState)(!1),o=Object(j.a)(s,2),u=o[0],b=o[1],p=Object(i.useState)(ie.getUser()),N=Object(j.a)(p,2),L=N[0],F=N[1];return Object(i.useEffect)((function(){function e(){F(ie.getUser())}return ie.addChangeListener(e),function(){ie.removeChangeListener(e)}})),Object(a.jsxs)("div",{className:n.root,children:[Object(a.jsx)(g.a,{}),Object(a.jsx)(f.a,{position:"fixed",className:Object(m.a)(n.appBar,Object(h.a)({},n.appBarShift,u)),children:Object(a.jsxs)(v.a,{children:[Object(a.jsx)(S.a,{color:"inherit","aria-label":"Open drawer",onClick:function(){b(!0)},edge:"start",className:Object(m.a)(n.menuButton,u&&n.hide),children:Object(a.jsx)(k.a,{})}),Object(a.jsx)(M.a,{mdDown:u,children:Object(a.jsx)(w.a,{variant:"h6",noWrap:!0,className:n.title,children:"VEX - Cad"})}),Object(a.jsxs)(M.a,{mdDown:!0,children:[L?Object(a.jsx)(U.a,{color:"inherit",onClick:function(){ie.signOut().then((function(){d.a}))},children:"Sign out"}):Object(a.jsxs)(c.a.Fragment,{children:[Object(a.jsx)(U.a,{color:"inherit",component:G.b,to:"/",children:"Home"}),Object(a.jsx)(U.a,{color:"inherit",component:G.b,to:"/dashboard",children:"Sign in"})]}),L?Object(a.jsx)(R,{user:ie.getUser()}):Object(a.jsx)(U.a,{color:"inherit",component:G.b,to:"/about",children:"About"})]})]})}),Object(a.jsxs)(x.a,{className:n.drawer,variant:"persistent",anchor:"left",open:u,classes:{paper:n.drawerPaper},children:[Object(a.jsxs)("div",{className:n.drawerHeader,onClick:function(){b(!1)},children:[Object(a.jsx)(w.a,{className:n.drawerTitle,noWrap:!0,children:"VEX - Cad"}),Object(a.jsx)(S.a,{children:"ltr"===r.direction?Object(a.jsx)(P.a,{}):Object(a.jsx)(W.a,{})})]}),Object(a.jsx)(y.a,{}),Object(a.jsxs)(C.a,{children:[Object(a.jsxs)(I.a,{button:!0,component:G.b,to:"/",children:[Object(a.jsx)(E.a,{children:Object(a.jsx)(D.a,{})}),Object(a.jsx)(A.a,{children:"Home"})]},"1"),Object(a.jsxs)(I.a,{button:!0,component:G.b,to:"/clients",children:[Object(a.jsx)(E.a,{children:Object(a.jsx)(B.a,{})}),Object(a.jsx)(A.a,{children:"Clients"})]},"2")]})]}),Object(a.jsxs)("main",{className:Object(m.a)(n.content,Object(h.a)({},n.contentShift,u)),children:[Object(a.jsx)("div",{className:n.drawerHeader}),t]})]})},oe=n(214),le=n(203),je=n(216),de=n(205),ue=n(204),be=n(73),he=n.n(be),me=n(200),pe=Object(p.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));function Oe(){var e=Object(d.h)(),t=Object(d.g)(),n=(e.state||{from:{pathname:"/"}}).from,c=Object(i.useState)({email:"",password:""}),r=Object(j.a)(c,2),s=r[0],l=r[1];function u(e){var t=e.target;l(Object(o.a)(Object(o.a)({},s),{},Object(h.a)({},t.name,t.value)))}Object(i.useEffect)((function(){function e(){ie.isAutenticated()&&t.replace(n)}return ie.addChangeListener(e),function(){ie.removeChangeListener(e)}}));var b=pe();return Object(a.jsxs)(me.a,{component:"main",maxWidth:"xs",children:[Object(a.jsx)(g.a,{}),Object(a.jsxs)("div",{className:b.paper,children:[Object(a.jsx)(z.a,{className:b.avatar,children:Object(a.jsx)(he.a,{})}),Object(a.jsx)(w.a,{component:"h1",variant:"h5",children:"Sign in"}),Object(a.jsxs)("form",{className:b.form,noValidate:!0,onSubmit:function(e){e.preventDefault(),ie.loginByForm(s.email,s.password).then((function(){})).catch((function(e){alert(e)}))},children:[Object(a.jsx)(oe.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0,value:s.email,onChange:u}),Object(a.jsx)(oe.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",value:s.password,onChange:u}),Object(a.jsx)(le.a,{control:Object(a.jsx)(je.a,{value:"remember",color:"primary"}),label:"Remember me"}),Object(a.jsx)(U.a,{fullWidth:!0,variant:"contained",color:"secondary",onClick:function(){var e=new Z.a.auth.GoogleAuthProvider;e.addScope("email"),e.addScope("profile"),$.signInWithPopup(e)},children:"Sign In with google"}),Object(a.jsx)(U.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:b.submit,children:"Sign In"}),Object(a.jsxs)(ue.a,{container:!0,children:[Object(a.jsx)(ue.a,{item:!0,xs:!0,children:Object(a.jsx)(de.a,{href:"#",variant:"body2",children:"Forgot password?"})}),Object(a.jsx)(ue.a,{item:!0,children:Object(a.jsx)(de.a,{href:"#",variant:"body2",component:G.b,to:"/signup",children:"Don't have an account? Sign Up"})})]})]})]})]})}var xe=n(213);function ge(){return Object(a.jsxs)(w.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object(a.jsx)(de.a,{color:"inherit",href:"https://material-ui.com/",children:"Your Website"})," ",(new Date).getFullYear(),"."]})}var fe=Object(p.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)}}}));function ve(){var e=fe();return Object(a.jsxs)(me.a,{component:"main",maxWidth:"xs",children:[Object(a.jsx)(g.a,{}),Object(a.jsxs)("div",{className:e.paper,children:[Object(a.jsx)(z.a,{className:e.avatar,children:Object(a.jsx)(he.a,{})}),Object(a.jsx)(w.a,{component:"h1",variant:"h5",children:"Sign up"}),Object(a.jsxs)("form",{className:e.form,noValidate:!0,children:[Object(a.jsxs)(ue.a,{container:!0,spacing:2,children:[Object(a.jsx)(ue.a,{item:!0,xs:12,sm:6,children:Object(a.jsx)(oe.a,{autoComplete:"fname",name:"firstName",variant:"outlined",required:!0,fullWidth:!0,id:"firstName",label:"First Name",autoFocus:!0})}),Object(a.jsx)(ue.a,{item:!0,xs:12,sm:6,children:Object(a.jsx)(oe.a,{variant:"outlined",required:!0,fullWidth:!0,id:"lastName",label:"Last Name",name:"lastName",autoComplete:"lname"})}),Object(a.jsx)(ue.a,{item:!0,xs:12,children:Object(a.jsx)(oe.a,{variant:"outlined",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email"})}),Object(a.jsx)(ue.a,{item:!0,xs:12,children:Object(a.jsx)(oe.a,{variant:"outlined",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password"})}),Object(a.jsx)(ue.a,{item:!0,xs:12,children:Object(a.jsx)(le.a,{control:Object(a.jsx)(je.a,{value:"allowExtraEmails",color:"primary"}),label:"I want to receive inspiration, marketing promotions and updates via email."})})]}),Object(a.jsx)(U.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,children:"Sign Up"}),Object(a.jsx)(ue.a,{container:!0,justify:"flex-end",children:Object(a.jsx)(ue.a,{item:!0,children:Object(a.jsx)(de.a,{href:"#",variant:"body2",component:G.b,to:"/signin",children:"Already have an account? Sign in"})})})]})]}),Object(a.jsx)(xe.a,{mt:5,children:Object(a.jsx)(ge,{})})]})}var Ce=function(){return Object(a.jsx)("h1",{children:"Oops! Page not found."})},we=n(139);var ye=n(202),Se=n(221),Ne=n(201),ke=Object(p.a)((function(e){return{paper:{padding:e.spacing(1)}}}));var Le=function(e){var t=ke();return Object(a.jsxs)("form",{onSubmit:e.onSubmit,children:[Object(a.jsxs)(ue.a,{container:!0,children:[Object(a.jsx)(ue.a,{item:!0,xs:8,sm:6,className:t.paper,children:Object(a.jsxs)(ye.a,{fullWidth:!0,children:[Object(a.jsx)(Se.a,{children:"C\xf3digo"}),Object(a.jsx)(Ne.a,{type:"text",value:e.client.code,name:"code",onChange:e.onChange})]})}),Object(a.jsx)(ue.a,{item:!0,xs:12,className:t.paper,children:Object(a.jsxs)(ye.a,{fullWidth:!0,children:[Object(a.jsx)(Se.a,{children:"Nome"}),Object(a.jsx)(Ne.a,{type:"text",value:e.client.name,name:"name",onChange:e.onChange})]})}),Object(a.jsx)(ue.a,{item:!0,xs:12,sm:6,className:t.paper,children:Object(a.jsxs)(ye.a,{fullWidth:!0,children:[Object(a.jsx)(Se.a,{children:"Telefone"}),Object(a.jsx)(Ne.a,{type:"text",value:e.client.phone,name:"phone",onChange:e.onChange})]})}),Object(a.jsx)(ue.a,{item:!0,xs:12,sm:6,className:t.paper,children:Object(a.jsxs)(ye.a,{fullWidth:!0,children:[Object(a.jsx)(Se.a,{children:"Apelido"}),Object(a.jsx)(Ne.a,{type:"text",value:e.client.alias,name:"alias",onChange:e.onChange})]})})]}),Object(a.jsxs)(ue.a,{item:!0,xs:12,className:t.paper,children:[Object(a.jsx)(U.a,{type:"submit",color:"primary",children:"Enviar"}),Object(a.jsx)(U.a,{type:"button",onClick:e.onCancel,children:"Cancelar"})]})]})},Pe=n(146),Fe="Change",We=[],Ie=1,Ee=new(function(e){Object(K.a)(n,e);var t=Object(Y.a)(n);function n(){return Object(J.a)(this,n),t.apply(this,arguments)}return Object(X.a)(n,[{key:"addMessage",value:function(e){var t=this,n=Ie++;We.push({id:n,value:e}),setTimeout((function(){t.removeMessage(n)}),1e4),this.emit(Fe)}},{key:"removeMessage",value:function(e){We=We.filter((function(t){return t.id!==e})),this.emit(Fe)}},{key:"getMessages",value:function(){return We}},{key:"addChangeListener",value:function(e){this.on(Fe,e)}},{key:"removeChangeListener",value:function(e){this.removeListener(Fe,e)}},{key:"emitChange",value:function(){this.emit(Fe)}}]),n}(_.EventEmitter));Q.register((function(e){e.actionType}));var Ae=Ee,qe=Object(p.a)((function(e){return{paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary},grow:{flexGrow:1}}})),De=function(e){var t=Object(i.useState)({code:"",name:"",phone:"",alias:""}),n=Object(j.a)(t,2),r=n[0],s=n[1],l=qe();function d(){return!0}return Object(i.useEffect)((function(){var t=e.match.params.id;t&&function(e){return new Promise((function(t,n){ee.collection("clients").doc(e).get().then((function(e){e.exists?t(e.data()):n("No doc found")})).catch((function(e){n(e)}))}))}(t).then((function(e){return s(e)}))}),[e.match.params.id]),Object(a.jsxs)(c.a.Fragment,{children:[Object(a.jsx)("p",{children:Object(a.jsx)(U.a,{onClick:function(){Ae.addMessage((new Date).toTimeString())},children:"Adicionar Mensagem"})}),Object(a.jsx)(ue.a,{container:!0,className:l.root,alignItems:"center",direction:"column",children:Object(a.jsx)(ue.a,{item:!0,xs:12,sm:10,md:8,children:Object(a.jsx)(Pe.a,{children:Object(a.jsxs)(me.a,{children:[Object(a.jsx)("h1",{children:"Cliente"}),Object(a.jsx)(Le,{client:r,onChange:function(e){var t=e.target;s(Object(o.a)(Object(o.a)({},r),{},Object(h.a)({},t.name,t.value)))},onSubmit:function(t){var n,a;t.preventDefault(),d&&(n=e.match.params.id,a=r,new Promise((function(e,t){if(!n){var i=new we;n=i.bb_pin()}ee.collection("clients").doc(n).set(a).then((function(){e()})).catch((function(e){t(e)}))}))).then((function(){e.history.push("/clients")})).catch((function(e){alert(e)}))},onCancel:function(t){e.history.push("/clients")}})]})})})})]})},Te=n(207),Be=n(211),Me=n(210),Ue=n(206),Ge=n(208),He=n(209),Ve=function(e){return Object(a.jsx)(c.a.Fragment,{children:Object(a.jsx)(Ue.a,{component:Pe.a,children:Object(a.jsxs)(Te.a,{"aria-label":"simple table",children:[Object(a.jsx)(Ge.a,{children:Object(a.jsxs)(He.a,{children:[Object(a.jsx)(Me.a,{children:"Nome"}),Object(a.jsx)(Me.a,{align:"center",children:"Codigo"}),Object(a.jsx)(Me.a,{align:"center",children:"Telefone"}),Object(a.jsx)(Me.a,{align:"center",children:"Apelido"})]})}),Object(a.jsxs)(Be.a,{children:[e.rows.length>0||Object(a.jsx)(He.a,{children:Object(a.jsx)(Me.a,{colSpan:4,children:"No data"})},0),e.rows.map((function(e){return Object(a.jsxs)(He.a,{children:[Object(a.jsx)(Me.a,{component:"th",scope:"row",children:Object(a.jsx)(G.c,{to:"/client/".concat(e.id),children:e.data.name})}),Object(a.jsx)(Me.a,{align:"center",children:e.data.code}),Object(a.jsx)(Me.a,{align:"center",children:e.data.phone}),Object(a.jsx)(Me.a,{align:"center",children:e.data.alias})]},e.id)}))]})]})})})},ze=function(){var e=Object(i.useState)([]),t=Object(j.a)(e,2),n=t[0],r=t[1];return Object(i.useEffect)((function(){new Promise((function(e,t){ee.collection("clients").get().then((function(t){var n=[];t.forEach((function(e){n.push({id:e.id,data:e.data()})})),e(n)})).catch((function(e){t(e)}))})).then((function(e){return r(e)}))}),[]),Object(a.jsx)(c.a.Fragment,{children:Object(a.jsx)(Ve,{rows:n})})},Re=function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:"Landing"}),Object(a.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero."})]})},Je=function(){var e=Object(i.useState)(ie.getUser()),t=Object(j.a)(e,2),n=t[0],r=t[1],s=Object(i.useState)(!1),h=Object(j.a)(s,2),m=h[0],p=h[1],O=Object(i.useState)(Ae.getMessages()),x=Object(j.a)(O,2),g=x[0],f=x[1];Object(i.useEffect)((function(){function e(){r(ie.getUser()),p(ie.isInitialized())}function t(){f(Ae.getMessages())}return ie.addChangeListener(e),Ae.addChangeListener(t),function(){ie.removeChangeListener(e),Ae.removeChangeListener(t)}}));var v=function(e){var t=e.component,i=Object(l.a)(e,["component"]);return n?Object(a.jsx)(d.b,Object(o.a)(Object(o.a)({},i),{},{render:function(e){return Object(a.jsx)(t,Object(o.a)({},e))}})):Object(a.jsx)(d.a,{to:{pathname:"/signin",state:{from:i.path}}})};return Object(a.jsxs)(c.a.Fragment,{children:[m?Object(a.jsx)(se,{user:n,children:Object(a.jsxs)(d.d,{children:[Object(a.jsx)(d.b,{exact:!0,path:"/",component:u}),Object(a.jsx)(v,{path:"/client/:id",component:De}),Object(a.jsx)(v,{path:"/client",component:De}),Object(a.jsx)(v,{path:"/clients",component:ze}),Object(a.jsx)(v,{path:"/dashboard",component:Re}),Object(a.jsx)(d.b,{exact:!0,path:"/about",component:b}),Object(a.jsx)(d.b,{path:"/signin",component:Oe}),Object(a.jsx)(d.b,{path:"/signup",component:ve}),Object(a.jsx)(d.b,{component:Ce})]})}):Object(a.jsx)("p",{children:"inicializando"}),g.map((function(e){return Object(a.jsx)("p",{children:e.value},e.id)})),Object(a.jsx)("p",{children:JSON.stringify(g)})]})},Xe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,223)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),a(e),i(e),c(e),r(e)}))},Ke=n(104),Ye=n(212),_e=Object(Ke.a)();s.a.render(Object(a.jsx)(Ye.a,{theme:_e,children:Object(a.jsx)(G.a,{children:Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(Je,{})})})}),document.getElementById("root")),Xe()}},[[144,1,2]]]);
//# sourceMappingURL=main.e93ab3be.chunk.js.map