(this.webpackJsonpquizapp=this.webpackJsonpquizapp||[]).push([[0],{30:function(e,t,n){},32:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){"use strict";n.r(t);var s=n(1),c=n.n(s),a=n(22),i=n.n(a),r=(n(30),n(31),n(2)),o=function(){var e=JSON.parse(localStorage.getItem("data"));return{getQuestions:function(){return e},editQuestion:function(t,n){var s=e.findIndex((function(e){return e.id===t}));e[s].question=n,localStorage.setItem("data",JSON.stringify(e))},deleteQuestion:function(t){var n=e.findIndex((function(e){return e.id===t}));e.splice(n,1),localStorage.setItem("data",JSON.stringify(e))},addAnswer:function(t,n){var s=e.findIndex((function(e){return e.id===t}));e[s].answers.push(n),localStorage.setItem("data",JSON.stringify(e))},addQuestion:function(t){console.log(t),e.push({id:e.length+1,question:t,answers:[]}),localStorage.setItem("data",JSON.stringify(e))}}},l=n(10),d=n(6),j=(n(32),n(14)),u=n(12),b=n(4),O=n(0),m=Object(s.createContext)({status:null}),h=function(e){var t=e.children,n=Object(b.g)(),c=Object(s.useState)(),a=Object(r.a)(c,2),i=a[0],o=a[1];return Object(s.useEffect)((function(){var e=JSON.parse(localStorage.getItem("status"));e?o(e):n.push("/")}),[]),Object(O.jsx)(m.Provider,{value:{status:{authStatus:i,setAuthStatus:o}},children:t})},x=m,f=function(e){var t=e.children,n=e.questionObj,c=e.toggle,a=e.setToggle,i=Object(s.useContext)(x).status.authStatus.isAdmin,b=o().addAnswer,m=Object(s.useState)(!1),h=Object(r.a)(m,2),f=h[0],v=h[1],g=(n||[]).answers,p=g.length>0&&function(e){var t=Object(d.a)(e);return{latestAnswer:t.pop(),previousAnswers:t.join(", ")}}(g)||{},N=p.latestAnswer,S=p.previousAnswers,w=Object(j.a)(),q=w.register,A=w.handleSubmit;return Object(O.jsxs)("div",{className:"answer",children:[t,(f||(n&&g.length)<1)&&!i?Object(O.jsx)("div",{children:Object(O.jsx)("form",{onSubmit:A((function(e){v(!1),b(n.id,e.answer),a(!c)})),children:Object(O.jsx)("div",{className:"d-flex",children:Object(O.jsx)("div",{className:"form-group",children:Object(O.jsx)("input",Object(l.a)({className:"form-control",type:"text",id:"answer",placeholder:"Answer"},q("answer",{required:!0})))})})})}):Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("div",{children:[Object(O.jsx)("div",{children:"answer : ".concat(N||"No Answer yet")}),S&&Object(O.jsx)("div",{className:"previous-answer",children:S})]}),!i&&Object(O.jsx)("div",{className:"answer-edit",children:Object(O.jsx)(u.c,{onClick:function(){v(!0)}})})]})]})},v=function(){var e=o().getQuestions,t=Object(s.useState)([]),n=Object(r.a)(t,2),c=n[0],a=n[1],i=Object(s.useState)(!1),l=Object(r.a)(i,2),d=l[0],j=l[1];Object(s.useEffect)((function(){var t=e();a(t)}),[d]);var u=c?c.map((function(e,t){t++;var n=e.question,s=e.id;return Object(O.jsx)(f,{questionObj:e,toggle:d,setToggle:j,children:"".concat(t,". ").concat(n)},s)})):[];return Object(O.jsx)("div",{className:"c-container",children:Object(O.jsx)("div",{className:"answers",children:u})})},g=(n(43),n(11)),p=function(){var e=Object(s.useContext)(x).status,t=Object(b.g)(),n=e.authStatus,c=e.setAuthStatus;return Object(O.jsxs)("div",{className:"header",children:[n&&!0===n.isAdmin&&Object(O.jsx)(g.b,{to:"/questions",className:"cnav-link",children:"Questions"}),Object(O.jsx)(g.b,{to:"/answers",className:"cnav-link",children:"Answers"}),Object(O.jsx)("div",{className:"cnav-link",children:Object(O.jsx)(u.d,{onClick:function(){c({isAuthenticated:!1,isAdmin:!1}),localStorage.removeItem("status"),t.push("/")},className:"icon logout-icon"})})]})},N=function(){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(p,{}),Object(O.jsx)(v,{})]})},S=(n(44),function(){return Object(O.jsx)("div",{className:"nomatch",children:"No match found"})}),w=(n(45),function(e){var t=e.children,n=e.editHandler,s=e.deleteHandler;return Object(O.jsxs)("div",{className:"question",children:[Object(O.jsx)("div",{children:t}),Object(O.jsxs)("div",{className:"icon-group",children:[Object(O.jsx)("div",{className:"icon",children:Object(O.jsx)(u.c,{onClick:n})}),Object(O.jsx)("div",{className:"icon",children:Object(O.jsx)(u.b,{className:"icon-danger",onClick:s})})]})]})}),q=function(){var e=Object(s.useState)(!1),t=Object(r.a)(e,2),n=t[0],c=t[1];return[n,function(){c(!0)},function(e){e&&(e.stopPropagation(),e.preventDefault(),c(!1)),e||c(!1)}]},A=(n(46),function(e){var t=e.closeModal,n=e.children;return Object(O.jsx)("div",{className:"cmodal",children:Object(O.jsx)("div",{className:"cmodal-backdrop",onClick:function(e){e&&e.currentTarget===e.target&&t()},children:Object(O.jsxs)("div",{className:"cmodal-body",children:[Object(O.jsx)("div",{className:"cmodal-close",children:Object(O.jsx)("div",{className:"cmodal-close-button",onClick:t,children:Object(O.jsx)(u.a,{})})}),Object(O.jsx)("div",{className:"cmodal-content",children:n})]})})})}),C=Object(s.createContext)(null),k=function(e){var t=e.children,n=e.toggler;return Object(O.jsx)(C.Provider,{value:n,children:t})},y=C,I=function(e){var t=e.prevValues,n=e.onSubmit,s=e.handleSubmit,c=e.register,a=e.placeHolder;return Object(O.jsxs)("form",{onSubmit:s(n),children:[Object(O.jsx)("div",{className:"form-group",children:Object(O.jsx)("input",Object(l.a)({className:"form-control",type:"text",id:"question",placeholder:a||"",defaultValue:t&&t.question||""},c("question",{required:!0})))}),Object(O.jsx)("div",{className:"text-center",children:Object(O.jsx)("button",{className:"btn",children:"Submit"})})]})},J=function(e){var t=e.closeModal,n=e.questionObj,c=o().editQuestion,a=Object(s.useContext)(y),i=a.toggle,r=a.setToggle,l=Object(j.a)(),d=l.register,u=l.handleSubmit;return Object(O.jsx)(A,{closeModal:t,children:Object(O.jsx)(I,{prevValues:n,register:d,onSubmit:function(e){c(n.id,e.question),r(!i),t()},handleSubmit:u})})},Q=function(e){var t=e.closeModal,n=(e.questionObj,o().addQuestion),c=Object(s.useContext)(y),a=c.toggle,i=c.setToggle,r=Object(j.a)(),l=r.register,d=r.handleSubmit;return Object(O.jsx)(A,{closeModal:t,children:Object(O.jsx)(I,{register:l,onSubmit:function(e){n(e.question),i(!a),t()},handleSubmit:d,placeHolder:"Your Question"})})},P=(n(47),function(){var e=q(),t=Object(r.a)(e,3),n=t[0],c=t[1],a=t[2],i=q(),l=Object(r.a)(i,3),d=l[0],j=l[1],u=l[2],b=Object(s.useState)(),m=Object(r.a)(b,2),h=m[0],x=m[1],f=o(),v=f.deleteQuestion,g=f.getQuestions,p=Object(s.useState)(!1),N=Object(r.a)(p,2),S=N[0],A=N[1],C=Object(s.useState)(),y=Object(r.a)(C,2),I=y[0],P=y[1];Object(s.useEffect)((function(){var e=g();P(e)}),[S]);var E=I?I.map((function(e,t){return t++,Object(O.jsx)(w,{editHandler:(s=e,function(e){x(s),c()}),deleteHandler:(n=e.id,function(e){v(n),A(!S)}),children:"".concat(t,". ").concat(e.question)},e.id);var n,s})):[];return Object(O.jsx)("div",{className:"c-container",children:Object(O.jsxs)("div",{className:"questions",children:[Object(O.jsx)("div",{className:"text-right",children:Object(O.jsx)("button",{className:"btn cbtn",onClick:j,children:"Add question"})}),E,Object(O.jsxs)(k,{toggler:{toggle:S,setToggle:A},children:[n&&Object(O.jsx)(J,{closeModal:a,questionObj:h}),d&&Object(O.jsx)(Q,{closeModal:u})]})]})})}),E=function(){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(p,{}),Object(O.jsx)(P,{})]})},M=(n(48),[{id:1,isAdmin:!0,email:"admin@admin.com",password:"admin"},{id:1,isAdmin:!1,email:"user@user.com",password:"user"}]),F=function(){var e=Object(s.useState)(),t=Object(r.a)(e,2),n=t[0],c=t[1],a=Object(s.useContext)(x).status.setAuthStatus,i=Object(b.g)();return{checkAuth:function(e){var t=e.email,n=e.password,s=M.find((function(e){return e.email===t}));if(s)if(s.password===n){var r={isAuthenticated:!0,isAdmin:s.isAdmin};a(r),localStorage.setItem("status",JSON.stringify(r)),s.isAdmin?i.push("/questions"):s.isAdmin||i.push("/answers")}else c("Password does not match");else c("No such email exists")},errors:n}},H=function(){var e=Object(j.a)(),t=e.register,n=e.handleSubmit,s=e.formState.errors,c=F(),a=c.checkAuth,i=c.errors;return Object(O.jsx)("div",{className:"c-container",children:Object(O.jsx)("div",{className:"signin-container",children:Object(O.jsxs)("form",{onSubmit:n((function(e){a(e)})),children:[Object(O.jsxs)("div",{className:"form-group",children:[Object(O.jsx)("label",{htmlFor:"email",children:"Email address"}),Object(O.jsx)("input",Object(l.a)({className:"form-control",type:"email",id:"email"},t("email",{required:!0}))),s.email&&Object(O.jsx)("span",{className:"text-warning",children:Object(O.jsx)("small",{children:"Email is Required"})})]}),Object(O.jsxs)("div",{className:"form-group",children:[Object(O.jsx)("label",{htmlFor:"password",children:"Password"}),Object(O.jsx)("input",Object(l.a)({className:"form-control",type:"password",id:"password"},t("password",{required:!0}))),s.password&&Object(O.jsx)("span",{className:"text-warning",children:Object(O.jsx)("small",{children:"Password is Required "})})]}),i&&Object(O.jsx)("div",{className:"text-warning",children:i}),Object(O.jsx)("div",{className:"text-center",children:Object(O.jsx)("button",{className:"btn cbtn login-button",children:"login"})})]})})})},T=n(25),R=function(){var e=Object(s.useContext)(x).status.authStatus,t=Object(s.useState)(),n=Object(r.a)(t,2),c=n[0],a=n[1];Object(s.useEffect)((function(){a(e)}),[e]);return{PrivateRoute:function(e){var t=e.children,n=e.admin,s=Object(T.a)(e,["children","admin"]);return Object(O.jsx)(O.Fragment,{children:c&&(n?Object(O.jsx)(b.b,Object(l.a)(Object(l.a)({},s),{},{render:function(){return c.isAuthenticated&&c.isAdmin?t:Object(O.jsx)(b.a,{to:"/"})}})):Object(O.jsx)(b.b,Object(l.a)(Object(l.a)({},s),{},{render:function(){return c.isAuthenticated?t:Object(O.jsx)(b.a,{to:"/"})}})))})}}},D=function(){var e=R().PrivateRoute;return Object(O.jsxs)(b.d,{children:[Object(O.jsx)(b.b,{exact:!0,path:"/",children:Object(O.jsx)(H,{})}),Object(O.jsx)(e,{admin:!0,exact:!0,path:"/questions",children:Object(O.jsx)(E,{})}),Object(O.jsx)(e,{exact:!0,path:"/answers",children:Object(O.jsx)(N,{})}),Object(O.jsx)(b.b,{path:"*",children:Object(O.jsx)(S,{})})]})},V=[{id:1,question:"What is your name ?",answers:["asif","ahmed","omi"]},{id:2,question:"What is your pet's name ?",answers:[]}],z=Object(s.createContext)(null),W=function(e){var t=e.children,n=Object(s.useState)(),c=Object(r.a)(n,2),a=c[0],i=c[1];return Object(s.useEffect)((function(){if(V){var e=localStorage.getItem("data");"undefined"!==e&&null!==e&&void 0!==e?i(JSON.parse(e)):(localStorage.setItem("data",JSON.stringify(V)),window.location.reload())}}),[]),Object(O.jsx)(z.Provider,{value:{questionsData:{data:a,setData:i}},children:t})};var B=function(){return Object(O.jsx)("div",{className:"App",children:Object(O.jsx)(g.a,{basename:"/",children:Object(O.jsx)(h,{children:Object(O.jsx)(W,{children:Object(O.jsx)(D,{})})})})})};i.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(B,{})}),document.getElementById("root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.5c9a5401.chunk.js.map