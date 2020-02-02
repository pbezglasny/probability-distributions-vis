(this["webpackJsonpprobability-distributions-vis"]=this["webpackJsonpprobability-distributions-vis"]||[]).push([[0],{232:function(e,t,a){e.exports=a(425)},237:function(e,t,a){},425:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(14),s=a.n(i),l=(a(237),a(15)),u=a(13),o=a(27),c=a(28),m=a(23),h=a(29),f=a(5);var v=function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return function(e){return t.map((function(t){return"function"===typeof t?t(e):t})).reduce((function(e,t){return Object.assign(e,t)}))}};function d(e,t){var a=1;t>e-t&&(t=e-t);for(var n=0;n<t;++n)a*=e-n,a/=n+1;return a}var p=[];function b(e,t,a){return"undefined"===typeof t||!e||a(e,t)}var y=function(){function e(t,a,n,r){Object(l.a)(this,e),this.name=t,this.value=a,this.min=n,this.max=r}return Object(u.a)(e,[{key:"isValid",get:function(){return b(this.value,this.min,(function(e,t){return e>=t}))?b(this.value,this.max,(function(e,t){return e<=t}))?{valid:!0,message:""}:{valid:!1,message:"Value should be less than ".concat(this.max)}:{valid:!1,message:"Value should be greater than ".concat(this.min)}}}]),e}(),k=function e(t,a,n,r,i){Object(l.a)(this,e),this.name=t,this.description=a,this.defaultValue=n,this.min=r,this.max=i},g=a(477),E=a(466),O=a(467),j=a(26),w=a(94),P=function(e){function t(e){var a;Object(l.a)(this,t),a=Object(o.a)(this,Object(c.a)(t).call(this,e));var n={},r=!0,i=!1,s=void 0;try{for(var u,h=e.defaultParams[Symbol.iterator]();!(r=(u=h.next()).done);r=!0){var f=u.value;n[f.name]=new y(f.name,f.defaultValue,f.min,f.max)}}catch(v){i=!0,s=v}finally{try{r||null==h.return||h.return()}finally{if(i)throw s}}return a.state={params:n,mean:0,variance:0,std:0,pmf:[],cdf:[]},a.handleChange=a.handleChange.bind(Object(m.a)(a)),a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"updateStatistics",value:function(){var e=this.props.mean(this.state.params);this.setState({mean:e});var t=this.props.variance(this.state.params);this.setState({variance:t});var a=this.props.std(this.state.params);this.setState({std:a})}},{key:"handleChange",value:function(e){var t=e.target.id,a=e.target.value,n=this.state.params;n[t].value=a,this.setState({params:n})}},{key:"componentDidMount",value:function(){this.updateStatistics(),this.drawChart()}},{key:"isAllParamValid",value:function(){var e=this;return Object.keys(this.state.params).reduce((function(t,a){return t&&e.state.params[a].isValid.valid}),!0)}},{key:"drawChart",value:function(){if(this.isAllParamValid()){this.updateStatistics();var e=this.props.makePmfArray(this.state.params),t=function(e){for(var t=[],a=0,n=0;n<e.length;n++)a+=e[n].prob,t[n]={name:e[n].name,prob:a};return t}(e);this.setState({pmf:e,cdf:t})}}},{key:"render",value:function(){var e=this,t=this.props.classes;return r.a.createElement("div",null,r.a.createElement(w.a,{style:{paddingLeft:75,paddingTop:20},variant:"h4",color:"textPrimary",noWrap:!0},this.props.name),r.a.createElement("div",null,r.a.createElement("form",{style:{paddingLeft:70,paddingTop:20},className:t.form_root,noValidate:!0,autoComplete:"off"},this.props.defaultParams.map((function(t){return r.a.createElement(g.a,{key:t.name,id:t.name,type:"number",label:t.description,value:e.state.params[t.name].value,onChange:e.handleChange,error:!e.state.params[t.name].isValid.valid,helperText:e.state.params[t.name].isValid.valid?"":e.state.params[t.name].isValid.message})})),r.a.createElement("br",null),r.a.createElement(E.a,{style:{width:100},variant:"contained",onClick:function(){return e.drawChart()},disabled:!this.isAllParamValid()},"Calculate"))),r.a.createElement("div",{className:t.grid_root},r.a.createElement(O.a,{container:!0,spacing:0,alignContent:"center"},r.a.createElement(O.a,{item:!0,xs:6},r.a.createElement("div",{className:t.grid_names},"PMF")),r.a.createElement(O.a,{item:!0,xs:6},r.a.createElement("div",{className:t.grid_names},"CDF")),r.a.createElement(O.a,{item:!0,xs:6},r.a.createElement(j.b,{width:600,height:300,data:this.state.pmf,margin:{top:5,right:30,left:20,bottom:5}},r.a.createElement(j.c,{strokeDasharray:"3 3"}),r.a.createElement(j.e,{dataKey:"name"}),r.a.createElement(j.f,null),r.a.createElement(j.d,null),r.a.createElement(j.a,{dataKey:"prob",name:"P(X=x)",fill:"#009688"}))),r.a.createElement(O.a,{item:!0,xs:6},r.a.createElement(j.b,{width:600,height:300,data:this.state.cdf,margin:{top:5,right:30,left:20,bottom:5}},r.a.createElement(j.c,{strokeDasharray:"3 3"}),r.a.createElement(j.e,{dataKey:"name"}),r.a.createElement(j.f,null),r.a.createElement(j.d,null),r.a.createElement(j.a,{dataKey:"prob",name:"P(X<=x)",fill:"#009688"}))),r.a.createElement(O.a,{item:!0,xs:3,style:{paddingLeft:70}},r.a.createElement(g.a,{key:"mean",id:"mean",value:this.state.mean,label:"Mean",inputProps:{readOnly:!0}})),r.a.createElement(O.a,{item:!0,xs:3},r.a.createElement(g.a,{key:"mean",id:"mean",value:this.state.variance,label:"Variance",inputProps:{readOnly:!0}})),r.a.createElement(O.a,{item:!0,xs:3},r.a.createElement(g.a,{key:"std",id:"std",value:this.state.std,label:"Standard deviation",inputProps:{readOnly:!0}})))))}}]),t}(r.a.Component),x=Object(f.a)(v((function(e){return{form_root:{"& > *":{margin:e.spacing(1),width:400}}}}),(function(e){return{grid_root:{flexGrow:1},grid_names:{textAlign:"center"}}})))(P),C=function(){function e(){throw Object(l.a)(this,e),new Error("This class is not supposed to instantiate")}return Object(u.a)(e,null,[{key:"pmf",value:function(e,t,a){return d(e,t)*Math.pow(a,t)*Math.pow(1-a,e-t)}},{key:"mean",value:function(e,t){return e*t}},{key:"var",value:function(e,t){return e*t*(1-t)}},{key:"std",value:function(e,t){return Math.sqrt(this.var(e,t))}}]),e}(),S=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"makePmf",value:function(e){for(var t=[],a=e.p.value,n=e.n.value,r=1;r<=n;r++){var i=C.pmf(n,r,a);t.push({name:r.toString(),prob:i})}return t}},{key:"mean",value:function(e){var t=e.p.value,a=e.n.value;return C.mean(a,t)}},{key:"variance",value:function(e){var t=e.p.value,a=e.n.value;return C.var(a,t)}},{key:"std",value:function(e){var t=e.p.value,a=e.n.value;return C.std(a,t)}},{key:"render",value:function(){return n.createElement(x,{defaultParams:[new k("p","Probability of success in one trial",.5,0,1),new k("n","Num of trials",10,0)],makePmfArray:this.makePmf,mean:this.mean,variance:this.variance,std:this.std,name:"Binomial"})}}]),t}(n.Component),D=a(474),M=a(475),V=a(476),N=a(196),A=a.n(N),B=a(197),G=a(468),_=a(479),T=a(465),K=a(469),L=a(470),q=a(473),W=a(471),F=a(472),I=function(){function e(){throw Object(l.a)(this,e),new Error("This class is not supposed to instantiate")}return Object(u.a)(e,null,[{key:"pmf",value:function(e,t){return Math.pow(1-t,e)*t}},{key:"mean",value:function(e){return(1-e)/e}},{key:"var",value:function(e){return(1-e)/Math.pow(e,2)}},{key:"std",value:function(e,t){return Math.sqrt(this.var(e,t))}}]),e}(),J=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"makePmf",value:function(e){for(var t=e.p.value,a=[],n=0,r=I.pmf(n,t);r>=1e-5&&n<=500;)a.push({name:n.toString(),prob:r}),n++,r=I.pmf(n,t);return a}},{key:"mean",value:function(e){var t=e.p.value;return I.mean(t)}},{key:"variance",value:function(e){var t=e.p.value;return I.var(t)}},{key:"std",value:function(e){var t=e.p.value;return I.std(t)}},{key:"render",value:function(){return n.createElement(x,{defaultParams:[new k("p","Probability of success in one trial",.5,0,1)],makePmfArray:this.makePmf,mean:this.mean,variance:this.variance,std:this.std,name:"Geometric"})}}]),t}(n.Component),X=function(){function e(){throw Object(l.a)(this,e),new Error("This class is not supposed to instantiate")}return Object(u.a)(e,null,[{key:"pmf",value:function(e,t,a){return d(e+a-1,e)*Math.pow(1-t,a)*Math.pow(t,e)}},{key:"mean",value:function(e,t){return e*t/(1-e)}},{key:"var",value:function(e,t){return e*t/Math.pow(1-e,2)}},{key:"std",value:function(e,t){return Math.sqrt(this.var(e,t))}}]),e}(),R=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"makePmf",value:function(e){for(var t=e.p.value,a=parseInt(e.r.value),n=[],r=0,i=X.pmf(r,t,a);i>=1e-4&&r<=500;)n.push({name:r.toString(),prob:i}),r++,i=X.pmf(r,t,a);return n}},{key:"mean",value:function(e){var t=e.p.value,a=e.r.value;return X.mean(t,a)}},{key:"variance",value:function(e){var t=e.p.value,a=e.r.value;return X.var(t,a)}},{key:"std",value:function(e){var t=e.p.value,a=e.r.value;return X.std(t,a)}},{key:"render",value:function(){return n.createElement(x,{defaultParams:[new k("p","Probability of success in one trial",.2,0,1),new k("r","Number of failures until the experiment is stopped",4,0)],makePmfArray:this.makePmf,mean:this.mean,variance:this.variance,std:this.std,name:"Negative Binomial"})}}]),t}(n.Component),$=a(195),z=a.n($),H=function(){function e(){throw Object(l.a)(this,e),new Error("This class is not supposed to instantiate")}return Object(u.a)(e,null,[{key:"pmf",value:function(e,t){return Math.pow(e,t)*Math.pow(Math.E,-1*e)/function(e){if(e<0)throw new Error("K must be non negative");if(e>50)throw new Error("Max value of param k is 50");if(p.length<1){p.push(1);for(var t=1;t<=50;t++){var a=p[t-1];p.push(a*t)}}return p[e]}(t)}},{key:"mean",value:function(e){return e}},{key:"var",value:function(e){return e}},{key:"std",value:function(e){return Math.sqrt(this.var(e))}}]),e}(),Q=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"makePmf",value:function(e){for(var t=e.lambda.value,a=[],n=0,r=H.pmf(t,n);r>=1e-5&&n<=50;)a.push({name:n.toString(),prob:r}),n++,r=H.pmf(t,n);return a}},{key:"mean",value:function(e){var t=e.lambda.value;return H.mean(t)}},{key:"variance",value:function(e){var t=e.lambda.value;return H.var(t)}},{key:"std",value:function(e){var t=e.lambda.value;return H.var(t)}},{key:"render",value:function(){return n.createElement(x,{defaultParams:[new k("lambda","Expected number of occurrences",4,0)],makePmfArray:this.makePmf,mean:this.mean,variance:this.variance,std:this.std,name:"Poisson"})}}]),t}(n.Component),U={binom:{name:"Binomial",jcx:r.a.createElement(S,null)},geom:{name:"Geometric",jcx:r.a.createElement(J,null)},negative_binom:{name:"Negative Binomial",jcx:r.a.createElement(R,null)},poisson:{name:"Poisson",jcx:r.a.createElement(Q,null)}},Y=Object(B.a)({palette:{primary:z.a,secondary:{main:"#009688"}}}),Z=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(c.a)(t).call(this,e))).state={currentGraph:"binom",sideOpen:!1,discrete:!0},a.handleSelectDistribution=a.handleSelectDistribution.bind(Object(m.a)(a)),a.toggleDrawer=a.toggleDrawer.bind(Object(m.a)(a)),a.collapseDiscrete=a.collapseDiscrete.bind(Object(m.a)(a)),a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"handleSelectDistribution",value:function(e){this.setState({currentGraph:e}),this.toggleDrawer()}},{key:"collapseDiscrete",value:function(){this.setState((function(e){return{discrete:!e.discrete}}))}},{key:"toggleDrawer",value:function(){this.setState((function(e){return{sideOpen:!e.sideOpen}}))}},{key:"render",value:function(){var e=this,t=this.props.classes;return r.a.createElement("div",null,r.a.createElement(G.a,{theme:Y},r.a.createElement(_.a,{anchor:"left",open:this.state.sideOpen,onClose:this.toggleDrawer},r.a.createElement("div",{role:"presentation",className:t.list},r.a.createElement(K.a,{button:!0,onClick:this.collapseDiscrete},r.a.createElement(L.a,{primary:"Discrete"}),this.state.discrete?r.a.createElement(W.a,null):r.a.createElement(F.a,null)),r.a.createElement(q.a,{in:this.state.discrete,timeout:"auto",unmountOnExit:!0},r.a.createElement(T.a,{component:"div",disablePadding:!0},Object.keys(U).map((function(a){return r.a.createElement(K.a,{key:a,button:!0,className:t.nested,onClick:function(t){return e.handleSelectDistribution(a)}},r.a.createElement(L.a,{primary:U[a].name}))})))))),r.a.createElement(D.a,{position:"static"},r.a.createElement(M.a,null,r.a.createElement(V.a,{edge:"start",className:t.menuButton,color:"inherit","aria-label":"menu",onClick:this.toggleDrawer},r.a.createElement(A.a,null)),r.a.createElement(w.a,{variant:"h6",className:t.title},"Probability distributions")))),U[this.state.currentGraph].jcx)}}]),t}(r.a.Component),ee=Object(f.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1},nested:{paddingLeft:e.spacing(4)},list:{width:350},fullList:{width:"auto"}}}))(Z);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(ee,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[232,1,2]]]);
//# sourceMappingURL=main.3c7c9120.chunk.js.map