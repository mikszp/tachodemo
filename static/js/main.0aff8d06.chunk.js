(this.webpackJsonptachospa=this.webpackJsonptachospa||[]).push([[0],{115:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(9),c=t.n(l),o=(t(84),t(21)),i=(t(85),t(86),t(30)),u=t.n(i),m=t(36),s=t(151),p=t(147),d=t(149),h=t(148),f=t(142),E=t(145),g=t(146),v=t(27),b=t.n(v),y=t(14),x=t(8);var w=Object(E.a)((function(e){return{paper:{marginTop:e.spacing(2),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)}}}));function j(e){var a=e.auth,t=e.handleAuth,l=Object(x.f)(),c=w(),i=Object(n.useState)(""),E=Object(o.a)(i,2),v=E[0],j=E[1],O=Object(n.useState)(""),C=Object(o.a)(O,2),S=C[0],k=C[1],N=Object(n.useState)(""),A=Object(o.a)(N,2),T=A[0],F=A[1],W=Object(n.useState)(""),I=Object(o.a)(W,2),D=I[0],P=I[1],L=function(){var e=Object(m.a)(u.a.mark((function e(a){var n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),n={firstName:v,lastName:S,email:T,password:D},e.prev=2,e.next=5,b.a.post("https://tachoserver.herokuapp.com/auth/register",n);case 5:r=e.sent,document.cookie="tacholife=".concat(r,";secure"),l.push("/profile"),t(),console.log(r),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(2),console.error(e.t0.response.data,"response");case 15:case"end":return e.stop()}}),e,null,[[2,12]])})));return function(a){return e.apply(this,arguments)}}();return a?r.a.createElement(x.a,{to:"/"}):r.a.createElement(g.a,{component:"main",maxWidth:"xs"},r.a.createElement(p.a,null),r.a.createElement("div",{className:c.paper},r.a.createElement("h1",null,"TACHOLIFE"),r.a.createElement(f.a,{component:"h1",variant:"h5"},"Create an account"),r.a.createElement("form",{className:c.form,noValidate:!0,onSubmit:L},r.a.createElement(h.a,{container:!0,spacing:2},r.a.createElement(h.a,{item:!0,xs:12,sm:6},r.a.createElement(d.a,{autoComplete:"fname",name:"firstName",variant:"outlined",fullWidth:!0,id:"firstName",label:"First Name",autoFocus:!0,onChange:function(e){return j(e.target.value)},value:v})),r.a.createElement(h.a,{item:!0,xs:12,sm:6},r.a.createElement(d.a,{variant:"outlined",fullWidth:!0,id:"lastName",label:"Last Name",name:"lastName",autoComplete:"lname",onChange:function(e){return k(e.target.value)},value:S})),r.a.createElement(h.a,{item:!0,xs:12},r.a.createElement(d.a,{variant:"outlined",fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",onChange:function(e){return F(e.target.value)},value:T})),r.a.createElement(h.a,{item:!0,xs:12},r.a.createElement(d.a,{variant:"outlined",fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",onChange:function(e){return P(e.target.value)},value:D})),r.a.createElement(h.a,{item:!0,xs:12},r.a.createElement("p",{style:{fontSize:"12px",textAlign:"justify"}},"By clicking SIGN UP, you agree to our Terms. Learn how we collect, use and share your data in our Data Policy and how we use cookies and similar technology in our Cookies Policy. You may receive SMS Notifications from us and can opt out any time."))),r.a.createElement(s.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:c.submit},"Sign Up"),r.a.createElement(h.a,{container:!0,justify:"flex-end"},r.a.createElement(h.a,{item:!0},r.a.createElement(y.b,{to:"/login",variant:"body2"},"Already have an account? Sign in"))))))}var O=Object(E.a)((function(e){return{paper:{marginTop:e.spacing(2),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)}}}));function C(e){var a=e.auth,t=e.handleAuth,l=Object(x.f)(),c=O(),i=Object(n.useState)(""),E=Object(o.a)(i,2),v=E[0],w=E[1],j=Object(n.useState)(""),C=Object(o.a)(j,2),S=C[0],k=C[1],N=function(){var e=Object(m.a)(u.a.mark((function e(a){var n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),n={email:v,password:S},e.prev=2,e.next=5,b.a.post("https://tachoserver.herokuapp.com/auth/login",n);case 5:r=e.sent,document.cookie="tacholife=".concat(r,";secure"),t(),l.push("/profile"),console.log(r),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(2),console.error(e.t0.response.data,"response");case 15:case"end":return e.stop()}}),e,null,[[2,12]])})));return function(a){return e.apply(this,arguments)}}();return a?r.a.createElement(x.a,{to:"/"}):r.a.createElement(g.a,{component:"main",maxWidth:"xs"},r.a.createElement(p.a,null),r.a.createElement("div",{className:c.paper},r.a.createElement("h1",null,"TACHOLIFE"),r.a.createElement(f.a,{component:"h1",variant:"h5"},"Log in"),r.a.createElement("form",{className:c.form,noValidate:!0,onSubmit:N},r.a.createElement(h.a,{container:!0,spacing:2},r.a.createElement(h.a,{item:!0,xs:12},r.a.createElement(d.a,{variant:"outlined",autoFocus:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",onChange:function(e){return w(e.target.value)},value:v})),r.a.createElement(h.a,{item:!0,xs:12},r.a.createElement(d.a,{variant:"outlined",fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",onChange:function(e){return k(e.target.value)},value:S}))),r.a.createElement(s.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:c.submit},"Sign In"),r.a.createElement(h.a,{container:!0,justify:"flex-end"},r.a.createElement(h.a,{item:!0},r.a.createElement(y.b,{to:"/register",variant:"body2"},"Don't have an account? Sign up"))))))}function S(){return r.a.createElement("div",null,r.a.createElement("header",{className:"App-header"}))}var k=t(150);function N(e){var a=e.auth,t=e.handleAuth;return r.a.createElement("div",null,r.a.createElement("h1",null,"Tacholife"),r.a.createElement(k.a,{mt:5},a?null:r.a.createElement(k.a,null,r.a.createElement(y.b,{to:"/login",variant:"body2"},r.a.createElement(s.a,{variant:"outlined",size:"large"},"Sign In")),r.a.createElement(y.b,{to:"/register",variant:"body2"},r.a.createElement(s.a,{variant:"outlined",size:"large"},"Sign Up"))),a?r.a.createElement(y.b,{to:"/profile",variant:"body2"},r.a.createElement(s.a,{variant:"outlined",size:"large"},"Profile")):null,a?r.a.createElement(s.a,{onClick:t,variant:"outlined",size:"large"},"Sign Out"):null))}function A(e){return e.auth?r.a.createElement("div",null,r.a.createElement("h1",null,"Your profile")):r.a.createElement(x.a,{to:"/login"})}function T(){return r.a.createElement(f.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ",r.a.createElement(y.b,{color:"inherit",to:"/"},"Tacholife")," ",(new Date).getFullYear(),".")}var F=function(){var e=Object(n.useState)(!1),a=Object(o.a)(e,2),t=a[0],l=a[1];Object(n.useEffect)((function(){b.a.get("https://tachoserver.herokuapp.com/users")}),[]);var c=function(){console.log("clicked"),l((function(e){return!e}))};return r.a.createElement("div",{className:"App"},r.a.createElement(y.a,null,r.a.createElement(S,null),r.a.createElement(x.b,{path:"/register"},r.a.createElement(j,{auth:t,handleAuth:c})),r.a.createElement(x.b,{path:"/login"},r.a.createElement(C,{auth:t,handleAuth:c})),r.a.createElement(x.b,{path:"/profile"},r.a.createElement(A,{auth:t,handleAuth:c})),r.a.createElement(x.b,{exact:!0,path:"/tachodemo"},r.a.createElement(N,{auth:t,handleAuth:c})),r.a.createElement(x.b,{exact:!0,path:"/"},r.a.createElement(N,{auth:t,handleAuth:c})),r.a.createElement(k.a,{mt:5},r.a.createElement(T,null))))},W=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,154)).then((function(a){var t=a.getCLS,n=a.getFID,r=a.getFCP,l=a.getLCP,c=a.getTTFB;t(e),n(e),r(e),l(e),c(e)}))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(F,null)),document.getElementById("root")),W()},79:function(e,a,t){e.exports=t(115)},84:function(e,a,t){},85:function(e,a,t){e.exports=t.p+"static/media/logo.06e73328.svg"},86:function(e,a,t){}},[[79,1,2]]]);
//# sourceMappingURL=main.0aff8d06.chunk.js.map