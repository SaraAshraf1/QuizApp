(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{22:function(t,e,n){},23:function(t,e,n){},31:function(t,e,n){"use strict";n.r(e);var s=n(1),c=n(2),r=n.n(c),o=n(11),i=n.n(o),a=(n(22),n(15)),u=n(10),p=n(3),h=(n(23),n(24),n(5)),j=n(9),l=n(12),b=n(13),d=n(16),O=n(14),f=function(t){Object(d.a)(n,t);var e=Object(O.a)(n);function n(){return Object(l.a)(this,n),e.apply(this,arguments)}return Object(b.a)(n,[{key:"colorButton",value:function(t,e){return this.props.showAnswer&&t===e?"btn btn-success":"btn"}},{key:"render",value:function(){var t=this,e=this.props.response[this.props.currentQuestion].question,n=this.props.response[this.props.currentQuestion].correct_answer,c=this.props.response[this.props.currentQuestion].answers,r=["A.","B.","C.","D."];return this.props.showScore?Object(s.jsx)("div",{className:"card justify-content-center mt-5 cardfinal",children:Object(s.jsxs)("h1",{"justify-content-center":!0,children:["You scored ",this.props.score," out of ",this.props.response.length]})}):Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)("div",{className:"card justify-content-center mt-5 ",children:[Object(s.jsxs)("div",{className:"card-header text-center",children:["question ",this.props.currentQuestion+1,"/10",Object(s.jsx)("h4",{dangerouslySetInnerHTML:{__html:e}})]}),Object(s.jsx)("div",{className:"card-body",children:Object(s.jsx)("form",{children:c.map((function(e,c){return Object(s.jsx)("div",{className:"form-group",children:Object(s.jsxs)("button",{className:t.colorButton(e,n),onClick:function(){return t.props.handleAnswerOptionClick(e===n)},type:"button",children:[Object(s.jsxs)("strong",{children:[r[c]," "]})," ",Object(s.jsx)("span",{dangerouslySetInnerHTML:{__html:e}})]})})}))})})]}),this.props.showAnswer&&Object(s.jsx)("button",{className:"btn btn-primary",onClick:function(){return t.props.handleNextQuestionClick()},children:"Next Question"})]})}}]),n}(c.Component);h.b.add(j.a,j.b);var m=function(){var t=Object(c.useState)([]),e=Object(p.a)(t,2),n=e[0],r=e[1],o=Object(c.useState)(0),i=Object(p.a)(o,2),h=i[0],j=i[1],l=Object(c.useState)(!1),b=Object(p.a)(l,2),d=b[0],O=b[1],m=Object(c.useState)(0),x=Object(p.a)(m,2),w=x[0],g=x[1],y=Object(c.useState)(!1),v=Object(p.a)(y,2),N=v[0],C=v[1];return Object(c.useEffect)((function(){fetch("https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple").then((function(t){return t.json()})).then((function(t){var e=t.results.map((function(t){return Object(u.a)(Object(u.a)({},t),{},{answers:[t.correct_answer].concat(Object(a.a)(t.incorrect_answers)).sort((function(){return Math.random()-.5}))})}));r(e)}))}),[]),n.length>0?Object(s.jsx)("div",{className:"container",children:Object(s.jsx)(f,{response:n,showScore:d,score:w,showAnswer:N,currentQuestion:h,handleAnswerOptionClick:function(t){t&&g(w+1),C(!0)},handleNextQuestionClick:function(){C(!1);var t=h+1;t<n.length?j(t):O(!0)}})}):Object(s.jsx)("h2",{className:"text-white text-center",style:{marginTop:"20%"},children:"loading....."})},x=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,32)).then((function(e){var n=e.getCLS,s=e.getFID,c=e.getFCP,r=e.getLCP,o=e.getTTFB;n(t),s(t),c(t),r(t),o(t)}))};n(30);i.a.render(Object(s.jsx)(r.a.StrictMode,{children:Object(s.jsx)(m,{})}),document.getElementById("root")),x()}},[[31,1,2]]]);
//# sourceMappingURL=main.091ee68a.chunk.js.map