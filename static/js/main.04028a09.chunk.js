(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/apple.89379736.jpg"},function(e,t,a){e.exports=a.p+"static/media/guava.644ed769.jpg"},function(e,t,a){e.exports=a.p+"static/media/orange.29888359.jpg"},function(e,t,a){e.exports=a.p+"static/media/strawberry.2d90bade.jpg"},function(e,t,a){e.exports=a(20)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(7),o=a.n(c),i=(a(18),a(1)),l=a(2),s=a(4),m=a(3),u=a(5),p=a(8),d=a.n(p),f=a(9),b=a.n(f),h=a(10),E=a.n(h),g=a(11),v=a.n(g),k=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"renderFruits",value:function(){var e=this;return[{name:"Apples",price:"200",colors:["#f44336","#4caf50"],condition:"Fresh",description:"Box of 10.",image:d.a},{name:"Guava",price:"12",colors:["#4caf50","#e84393"],condition:"Fresh",description:"Pink from inside!",image:b.a},{name:"Oranges",price:"40",colors:["#fb8c00"],condition:"Fresh",description:"Sweet 5",image:E.a},{name:"Strawberry",price:"240",colors:["#f44336","#e91e63"],condition:"Frozen",description:"Just Strawberry.",image:v.a}].map(function(t){return r.a.createElement("div",{className:"fruit",key:t.name},r.a.createElement("img",{src:t.image,alt:t.name}),r.a.createElement("span",{className:"name"},t.name),r.a.createElement("span",{className:"price"},"\u20b9".concat(t.price)),r.a.createElement("p",null,t.description,r.a.createElement("button",{onClick:function(){return e.props.onClick(t)},className:"compare-btn"},"+")))})}},{key:"render",value:function(){return r.a.createElement("div",{className:"fruits-container"},this.renderFruits())}}]),t}(n.Component),y=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).renderTable=function(){var e=a.props.fruits;if(0!==e.length)return r.a.createElement("table",{cellSpacing:"0"},r.a.createElement("tbody",null,r.a.createElement("tr",{className:"legend-1"},r.a.createElement("td",null),e.map(function(e){return r.a.createElement("td",{key:e.name},e.name," [",r.a.createElement("span",{onClick:function(){return a.props.onRemove(e)},className:"remove"},"-"),"]")})),r.a.createElement("tr",null,r.a.createElement("td",{className:"legend-2"},"PRICE"),e.map(function(e){return r.a.createElement("td",{key:e.name,className:"legend-3"},"\u20b9".concat(e.price))})),r.a.createElement("tr",null,r.a.createElement("td",{className:"legend-2"},"COLORS"),e.map(function(e){return r.a.createElement("td",{key:Math.round(99999*Math.random()),className:"legend-3"},e.colors.map(function(e){return r.a.createElement("span",{key:Math.round(99999*Math.random()),style:{backgroundColor:e,borderRadius:"24px"}},"\xa0\xa0")}))})),r.a.createElement("tr",null,r.a.createElement("td",{className:"legend-2"},"CONDITION "),e.map(function(e){return r.a.createElement("td",{key:e.name,style:{backgroundColor:"Fresh"===e.condition?"#4caf50":"#f44336"}},e.condition)}))))},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"comparison-table"},this.renderTable())}}]),t}(n.Component),O=(a(19),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).onClickHandler=function(e){var t=a.state.compare;t.push(e);for(var n=0;n<t.length;n++)for(var r=n+1;r<t.length;r++)t[n].name===t[r].name&&t.splice(r,1);a.setState({compare:t})},a.onRemoveHandler=function(e){var t=a.state.compare;if(0!==t.length){for(var n=0;n<t.length;n++)if(t[n].name===e.name){t.splice(n,1);break}a.setState({compare:t})}else a.setState({compare:[]})},a.state={compare:[]},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"header"},"Compare Products"),r.a.createElement(k,{onClick:this.onClickHandler}),r.a.createElement(y,{fruits:this.state.compare,onRemove:this.onRemoveHandler}))}}]),t}(r.a.Component));o.a.render(r.a.createElement(O,null),document.getElementById("root"))}],[[12,1,2]]]);
//# sourceMappingURL=main.04028a09.chunk.js.map