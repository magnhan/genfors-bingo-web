(this.webpackJsonpgenforsbingo=this.webpackJsonpgenforsbingo||[]).push([[0],[,,,,function(t){t.exports=JSON.parse('{"options":["Legg","Inn","tekst","og","morsomme","kategorier","her","test19","test28","test27","test25","test22","test23","test22","test288","test25","test23","test26","test222","test24","test24","test257","test233","test242","test24"]}')},,,,,,function(t,e,s){},function(t,e,s){},function(t,e,s){},function(t,e,s){"use strict";s.r(e);var i=s(0),o=s(1),n=s(3),l=s.n(n);s(10),s(11);class a extends o.Component{constructor(...t){super(...t),this.handleClick=()=>{this.props.handleCellChange(this.props.id)}}render(){return Object(i.jsx)("div",{className:this.props.clicked?"cell cell-selected":"cell",onClick:this.handleClick,children:Object(i.jsx)("p",{children:this.props.content})})}}var c=a,r=(s(12),s.p+"static/media/github.1dd51261.svg"),h=s.p+"static/media/Abakule-ny.9b20bcde.png",d=s(4);class g extends o.Component{constructor(t){super(t),this.state={text:[],chosen_cells:[],bingo_id:0,bingo_rows:[],bingo_cols:[],bingo_diagonal_down:!1,bingo_diagonal_up:!1,is_bingo:!1,showRules:!1,confirmReset:!1},this.handleCellChange=t=>{let e=this.state.chosen_cells;e[t%4][Math.floor(t/4)]=!e[t%4][Math.floor(t/4)];let s=this.state.bingo_rows,i=this.state.bingo_cols,o=this.state.bingo_diagonal_down,n=this.state.bingo_diagonal_up,l=!1;for(let c=0;c<4;c++)if(!this.state.bingo_cols[c]){let t=!0;for(let s=0;s<4;s++)e[c][s]||(t=!1);t&&(i[c]=!0,l=!0)}if(!o){let t=!0;for(let s=0;s<4;s++)e[s][s]||(t=!1);t&&(o=!0,l=!0)}if(!n){let t=!0;for(let s=0;s<4;s++)e[3-s][s]||(t=!1);t&&(n=!0,l=!0)}for(let c=0;c<4;c++)if(!this.state.bingo_rows[c]){let t=!0;for(let s=0;s<4;s++)e[s][c]||(t=!1);t&&(s[c]=!0,l=!0)}const a={text:this.state.text,chosen_cells:e,bingo_rows:s,bingo_cols:i,bingo_diagonal_down:o,bingo_diagonal_up:n,is_bingo:l,bingo_id:this.state.bingo_id};this.setState(a),localStorage.setItem("bingoState",JSON.stringify(a))},this.generateBoard=()=>{let t=d.options,e=g.generatePicks(t.length),s=t.filter(((t,s)=>e.indexOf(s)>-1)),i=[];for(let n=0;n<4;n++){i[n]=[];for(let t=0;t<4;t++)i[n][t]=!1}const o={text:s,bingo_id:this.state.bingo_id+16,chosen_cells:i,bingo_rows:[],bingo_cols:[],bingo_diagonal_down:!1,bingo_diagonal_up:!1};localStorage.setItem("bingoState",JSON.stringify(o)),this.setState(o)},this.handleCellChange=this.handleCellChange.bind(this)}componentDidMount(){localStorage.getItem("bingoState")?this.setState(JSON.parse(localStorage.getItem("bingoState"))):this.generateBoard(),document.title="Genforsbingo"}componentDidUpdate(){localStorage.setItem("bingoState",JSON.stringify(this.state))}static generatePicks(t){let e=[];for(let s=0;s<16;s++){let i=Math.floor(Math.random()*t);for(;e.indexOf(i)>-1;)i=Math.floor(Math.random()*t);e[s]=i}return e}render(){return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsxs)("div",{className:this.state.is_bingo?"popup show":"popup",onClick:()=>this.setState({is_bingo:!1}),children:[Object(i.jsxs)("div",{className:"bingotext",children:[Object(i.jsx)("img",{src:h,alt:"Abakus logo"}),Object(i.jsx)("span",{children:"Bingo!"}),Object(i.jsx)("img",{src:h,alt:"Abakus logo"})]}),Object(i.jsx)("p",{children:"(Trykk for \xe5 lukke)"})]}),Object(i.jsxs)("div",{className:this.state.showRules?"popup show":"popup",onClick:()=>this.setState({showRules:!1}),children:[Object(i.jsxs)("div",{className:"textWindow",children:[Object(i.jsx)("p",{children:"TODO @HAGNUS: Legg inn regler her"}),Object(i.jsx)("br",{}),Object(i.jsx)("p",{children:"1. regel etc."})]}),Object(i.jsx)("p",{children:"(Trykk for \xe5 lukke)"})]}),Object(i.jsxs)("div",{className:this.state.confirmReset?"popup show":"popup",onClick:()=>this.setState({confirmReset:!1}),children:[Object(i.jsxs)("div",{className:"textWindow",children:[Object(i.jsx)("p",{children:"Er du sikker p\xe5 at du vil bytte brett?"}),Object(i.jsx)("p",{children:"Dette kan ikke angres."}),Object(i.jsx)("br",{}),Object(i.jsx)("button",{onClick:()=>this.generateBoard(),children:"Ja, jeg er sikker"})]}),Object(i.jsx)("p",{children:"(Eller trykk for \xe5 lukke)"})]}),Object(i.jsxs)("div",{className:"App-header",children:[Object(i.jsxs)("span",{className:"logo",children:[Object(i.jsx)("img",{src:h,alt:"Abakus logo"}),Object(i.jsx)("span",{children:" Genforsbingo"})]}),Object(i.jsx)("div",{className:"newBoard",children:Object(i.jsx)("button",{onClick:()=>this.setState({confirmReset:!0}),children:"Gi meg et nytt brett"})}),Object(i.jsx)("div",{className:"rules",children:Object(i.jsx)("button",{onClick:()=>this.setState({showRules:!0}),children:"Regler"})}),Object(i.jsx)("div",{className:"github",children:Object(i.jsx)("a",{href:"https://github.com/magnhan/genfors-bingo-web",children:Object(i.jsx)("img",{src:r,alt:"Github"})})})]}),Object(i.jsx)("div",{className:"bingoBoard",children:this.state.text.map(((t,e=0)=>(e++,Object(i.jsx)(c,{id:e-1,content:t,clicked:this.state.chosen_cells[(e-1)%4][Math.floor((e-1)/4)],handleCellChange:this.handleCellChange},this.state.bingo_id+e))))})]})}}var b=g;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(Object(i.jsx)(b,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((t=>{t.unregister()}))}],[[13,1,2]]]);
//# sourceMappingURL=main.d7afb511.chunk.js.map