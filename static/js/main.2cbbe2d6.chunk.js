(this["webpackJsonprock-paper-scissors"]=this["webpackJsonprock-paper-scissors"]||[]).push([[0],[,,,,,,,function(e,t,n){e.exports=n(15)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var s=n(2),a=n(3),c=n(6),r=n(5),o=n(0),i=n.n(o),l=n(4),u=n.n(l),h=(n(12),function(e){return i.a.createElement("div",{className:"selection"},i.a.createElement("h1",null,e.choice),i.a.createElement("p",null,1==e.user?"You":"Opponent"))}),p=(n(13),function(e){return i.a.createElement("div",{className:"selection-list"},e.options.map((function(t){return i.a.createElement("h1",{key:t,id:t,onClick:e.onClickHandle}," ",e.reference[t]," ")})))}),m=(n(14),function(e){Object(c.a)(n,e);var t=Object(r.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).winOrLose=function(e,t){var n={rock:"scissors",paper:"rock",scissors:"paper"};return n[e]==t?"Victory!":n[t]==e?"Defeat!":"Stalemate!"},a.chooseSelection=function(e){a.setState({choice:"\ud83e\udd1c",aiChoice:"\ud83e\udd1b",result:"Good luck!"});var t=e.target;t.classList.add("active");for(var n=t.id,s=a.state.options[Math.floor(3*Math.random())],c=document.getElementsByClassName("selection"),r=0;r<c.length;r++)c[r].style.animation="bump .75s 3";c[0].addEventListener("animationend",(function(){a.setState({choice:a.state.reference[n],aiChoice:a.state.reference[s],result:a.winOrLose(n,s)}),c[0].style.animation="",c[1].style.animation="",t.classList.remove("active")}))},a.state={choice:"\ud83e\udd1c",aiChoice:"\ud83e\udd1b",options:["rock","paper","scissors"],reference:{rock:"\ud83d\udc4a",paper:"\ud83d\udd90",scissors:"\u270c"},result:""},a}return Object(a.a)(n,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("h1",null,"Rock, Paper, Scissors!"),i.a.createElement(p,{options:this.state.options,reference:this.state.reference,onClickHandle:this.chooseSelection}),i.a.createElement("h2",null,""!=this.state.result?this.state.result:"Choose Carefully.."),i.a.createElement(h,{choice:this.state.choice,user:!0}),i.a.createElement(h,{choice:this.state.aiChoice,user:!1}))}}]),n}(i.a.Component));u.a.render(i.a.createElement(m,null),document.getElementById("root"))}],[[7,1,2]]]);
//# sourceMappingURL=main.2cbbe2d6.chunk.js.map