(this["webpackJsonpplot-tweening"]=this["webpackJsonpplot-tweening"]||[]).push([[0],{122:function(e,t,n){},127:function(e){e.exports=JSON.parse('"wss://tweeningserver.ocean.lol"')},133:function(e){e.exports=JSON.parse('[{"id":"15p","name":"default","options":{"public":false,"players":15}},{"id":"15p2","name":"default2","options":{"public":false,"players":15}}]')},161:function(e,t,n){},209:function(e,t,n){"use strict";n.r(t);n(160),n(161);var a=n(140),c=Object(a.a)({palette:{type:"light",background:{default:"#bfffd0"},primary:{main:"#d49a3d"}},overrides:{MuiButton:{textPrimary:{background:"linear-gradient(45deg, #ffe600 0%, #249c09 100%)",borderRadius:3,border:0,color:"white !important",padding:"0 30px",boxShadow:"0 3px 5px 2px #92C1054D"},textSecondary:{background:"linear-gradient(45deg, #ff9900 0%, #ff9eff 100%)",borderRadius:3,border:0,color:"white !important",padding:"0 30px",boxShadow:"0 3px 5px 2px #FF9C804D"}}}}),r=n(15),i=n.n(r),o=n(14),s=n(24),l=n(0),d=n.n(l),j=n(8),h=n.n(j),u=n(253),b=n(252),p=n(126),m=n.n(p),f=n(127),x=n(74),O=n(75),g=n(49),y=n(88),v=n(87),w=n(5),C=n(212),I=n(280),S=n(251),k=n(249),N=n(250),T=n(248),P=n(1),E=function(e){Object(y.a)(n,e);var t=Object(v.a)(n);function n(e){var a;return Object(x.a)(this,n),(a=t.call(this,e)).state={open:!1},a.handleOpen=a.handleOpen.bind(Object(g.a)(a)),a.handleClose=a.handleClose.bind(Object(g.a)(a)),a}return Object(O.a)(n,[{key:"handleOpen",value:function(){this.setState({open:!0})}},{key:"handleClose",value:function(){this.setState({open:!1})}},{key:"render",value:function(){var e=this.props.classes;return Object(P.jsx)("div",{children:Object(P.jsxs)(I.a,{open:this.state.open,onClose:this.handleClose,disablePortal:!0,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",disableBackdropClick:this.props.required,disableEscapeKeyDown:this.props.required,children:[Object(P.jsx)(T.a,{id:"alert-dialog-title",children:this.props.title}),Object(P.jsxs)(k.a,{dividers:!0,children:[Object(P.jsx)(N.a,{className:e.text,id:"alert-dialog-description",children:this.props.description}),this.props.children]}),Object(P.jsxs)(S.a,{children:[this.props.required?null:Object(P.jsx)(C.a,{onClick:this.handleClose,color:"secondary",children:this.props.closeText?this.props.closeText:"Close"}),this.props.buttonText?Object(P.jsx)(C.a,{onClick:this.props.buttonAction,color:"primary",children:this.props.buttonText}):null]})]})})}}]),n}(d.a.Component),B=Object(w.a)((function(e){return{text:{margin:0}}}))(E);function A(){return R.apply(this,arguments)}function R(){return(R=Object(s.a)(i.a.mark((function e(){var t,n,a=arguments;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:{},n=a.length>1&&void 0!==a[1]?a[1]:null,e.abrupt("return",new Promise(function(){var e=Object(s.a)(i.a.mark((function e(a){var r,l,d;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=Object.assign({title:"Dialog title",required:!1},t),l="dialog".concat(t.layer?t.layer:0),null==(d=document.getElementById(l))&&((d=document.createElement("div")).id=l,document.getElementById("dialog").appendChild(d)),h.a.render(Object(P.jsxs)(b.a,{theme:c,children:[Object(P.jsx)(u.a,{}),Object(P.jsx)(B,Object(o.a)(Object(o.a)({},t),{},{ref:function(e){return r=e},children:n}))]}),d),r?(r.handleOpen(),a(r)):setTimeout(Object(s.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=a,e.next=3,A(t,n);case 3:return e.t1=e.sent,e.abrupt("return",(0,e.t0)(e.t1));case 5:case"end":return e.stop()}}),e)}))),100);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var M=A,D=(n(122),n(254));var L=function(){return Object(P.jsxs)("div",{className:"centred",children:[Object(P.jsx)(D.a,{}),Object(P.jsx)("h3",{children:"Attempting to connect to the Plot Tweening server..."})]})},z=n(80),J=n.n(z);var W=function(e){return Object(P.jsxs)("div",{className:"centred",children:[Object(P.jsx)(J.a,{}),Object(P.jsx)("h3",{children:"Failed to connect to the Plot Tweening server."}),e.error?Object(P.jsxs)("p",{children:['Error: "',e.error,'"']}):null,Object(P.jsx)("h4",{children:"Are you offline? If not, the Plot Tweening server might be down."}),Object(P.jsx)(C.a,{size:"large",color:"primary",onClick:function(){return window.location.reload(!1)},children:"Retry"})]})},F=n(52),H=n(268),U=n(267),Y=n(260),q=n(4),K=n(255),V=n(257),G=n(256),_=n(258),Q=n(259),X=n(129),Z=n.n(X),$=function(e){Object(y.a)(n,e);var t=Object(v.a)(n);function n(e){var a;return Object(x.a)(this,n),(a=t.call(this,e)).state={code:""},a.changeInput=a.changeInput.bind(Object(g.a)(a)),a.tryCode=a.tryCode.bind(Object(g.a)(a)),a}return Object(O.a)(n,[{key:"changeInput",value:function(e){var t=e.target.value;t=t.replace(" ",""),this.setState({code:t})}},{key:"tryCode",value:function(){qt.emit("joinMatch",this.state.code)}},{key:"componentDidMount",value:function(){var e=this;window.location.search.length>1&&(this.setState({code:window.location.search.slice(1)},(function(){return e.tryCode()})),window.history.pushState("","","/"))}},{key:"render",value:function(){var e=this,t=this.props.classes;return Object(P.jsxs)("div",{children:[Object(P.jsx)("label",{htmlFor:"roomCodeInput",children:"Or, join by code:"}),Object(P.jsx)("br",{}),Object(P.jsxs)(K.a,{className:Object(q.a)(t.margin,t.textField),variant:"filled",children:[Object(P.jsx)(G.a,{htmlFor:"roomCodeInput",children:"Room code"}),Object(P.jsx)(V.a,{id:"roomCodeInput",type:"text",value:this.state.code,onChange:this.changeInput,autoComplete:"off",inputProps:{className:t.textInput,maxLength:6,onKeyDown:function(t){"Enter"==t.key&&e.tryCode()}},endAdornment:Object(P.jsx)(_.a,{position:"end",children:Object(P.jsx)(Q.a,{"aria-label":"Join",onClick:this.tryCode,edge:"end",children:Object(P.jsx)(Z.a,{})})})})]})]})}}]),n}(d.a.Component),ee=Object(w.a)((function(e){return{margin:{margin:e.spacing(1),marginBottom:0},joinLabel:{display:"inline-block",marginTop:22,marginRight:4},textField:{width:"18ch"},textInput:{textTransform:"uppercase"}}}))($),te=n(13),ne=n(277),ae=n(261),ce=n(130),re=n.n(ce),ie=Object(Y.a)((function(e){return{margin:{margin:e.spacing(1)},input:{width:170},label:{textAlign:"center"}}}));var oe=function(){var e=ie(),t=d.a.useState(localStorage.name?localStorage.name:""),n=Object(te.a)(t,2),a=n[0],c=n[1],r=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];t||c(e),localStorage.name=e,qt.emit("changeName",e)};return r(a,!0),Object(P.jsx)("div",{className:e.margin,children:Object(P.jsxs)(ae.a,{container:!0,justify:"center",spacing:1,alignItems:"flex-end",children:[Object(P.jsx)(ae.a,{item:!0,children:Object(P.jsx)(re.a,{})}),Object(P.jsx)(ae.a,{item:!0,children:Object(P.jsx)(ne.a,{id:"nameInput",label:"Your name",value:a,onChange:function(e){return r(e.target.value)},autoComplete:"off",inputProps:{className:e.input,maxLength:8,onKeyDown:function(e){"Enter"==e.key&&document.activeElement.blur()}},InputLabelProps:{className:e.label}})})]})})},se=n(264),le=n(281),de=n(41),je=Object(Y.a)((function(e){return{colorButton:{margin:"3px 5px"}}}));var he=function(e){var t=je(),n=d.a.useState(e.selected),a=Object(te.a)(n,2),c=a[0],r=a[1],i=d.a.useState([]),o=Object(te.a)(i,2),s=o[0],l=o[1];return d.a.useEffect((function(){qt.emit("changeColor",c)})),null!=e.matchInfo&&d.a.useEffect((function(){var t=function(e){console.log(":O"),l(e.players.map((function(e){return e.num})))};return qt.on("matchUpdate",t),t(e.matchInfo),function(){return qt.off("matchUpdate",t)}}),[]),Object(P.jsx)(se.a,{orientation:"vertical",children:function(){for(var e=[],n=function(n){e.push(Object(P.jsx)(se.a,{children:function(){for(var e=[],a=function(n){e.push(Object(P.jsx)(le.a,{title:de[n],children:Object(P.jsx)(C.a,{className:"".concat(t.colorButton," pfp"),style:{backgroundImage:"url(/pfps/".concat(n,".png)"),opacity:c==n?1:s.includes(n)?.2:.5},onClick:function(){s.includes(n)||(localStorage.stcolor=String(n),r(n))}})}))},i=n;i<n+4;i++)a(i);return e}()}))},a=0;a<16;a+=4)n(a);return e}()})},ue=n(213),be=n(282),pe=n(83),me=n.n(pe),fe=n(82),xe=n.n(fe),Oe=n(100),ge=n(132),ye=n.n(ge),ve=n(263),we=n(265),Ce=n(266),Ie=n(81),Se=n.n(Ie),ke=n(133),Ne=n(64),Te="Copy the preset code of the selected preset to the clipboard",Pe="Save the current match options to the selected preset",Ee=Object(Y.a)((function(e){return{list:{height:300,width:"100%",overflowY:"scroll",border:"1px solid #00000030",borderRadius:5},actions:{width:"100%",display:"flex","& > *":{flex:1}}}}));var Be=function(e){var t=Ee();localStorage.hasOwnProperty("stpresets")||(localStorage.stpresets=JSON.stringify(ke));var n=d.a.useState(""),a=Object(te.a)(n,2),c=a[0],r=a[1],l=d.a.useState("null"==localStorage.stpreset?null:localStorage.stpreset),j=Object(te.a)(l,2),h=j[0],u=j[1],b=d.a.useState(JSON.parse(localStorage.stpresets)),p=Object(te.a)(b,2),m=p[0],f=p[1],x=d.a.useState(Te),O=Object(te.a)(x,2),g=O[0],y=O[1],v=d.a.useState(Pe),w=Object(te.a)(v,2),I=w[0],S=w[1],k=function(){return f(JSON.parse(localStorage.stpresets))};return d.a.useEffect((function(){m.find((function(e){return e.id==h}))||(u(null),localStorage.stpreset=null)}),[]),Object(P.jsxs)("div",{children:[Object(P.jsx)(ve.a,{className:t.list,children:Object(P.jsx)(Oe.Container,{dragHandleSelector:".drag-handle",lockAxis:"y",onDrop:function(e){var t=e.removedIndex,n=e.addedIndex;localStorage.stpresets=JSON.stringify(ye()(m,t,n)),k()},children:m.map((function(e){var t=e.id,n=e.name;return Object(P.jsx)(Oe.Draggable,{children:Object(P.jsx)(we.a,{button:!0,className:"drag-handle",onClick:function(){return u(h==t?null:t)},selected:h==t,children:Object(P.jsx)(Ce.a,{primary:n})})},t)}))})}),Object(P.jsxs)(se.a,{variant:"contained",color:"primary",className:t.actions,children:[Object(P.jsx)(le.a,{title:"Create a new empty preset",children:Object(P.jsx)(C.a,{onClick:Object(s.a)(i.a.mark((function t(){var n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,M({title:"Naming new preset...",description:"What should the new preset be called?",buttonText:"Create",layer:1,buttonAction:function(){var t=JSON.parse(localStorage.stpresets);t.push({id:String(Math.random()).slice(2),name:document.getElementById("presetName").value,options:e.options}),localStorage.stpresets=JSON.stringify(t),k(),n.handleClose()}},Object(P.jsx)(ne.a,{label:"Preset name",id:"presetName",defaultValue:"",variant:"outlined"}));case 2:n=t.sent;case 3:case"end":return t.stop()}}),t)}))),children:"New"})}),Object(P.jsx)(le.a,{title:"Use the match options saved in this preset",children:Object(P.jsx)(C.a,{disabled:!e.editable||null==h,onClick:function(){e.showMatchOptions(Object(o.a)(Object(o.a)({},e),{},{options:m.find((function(e){return e.id==h})).options})),localStorage.stpreset=h},children:"Load"})}),Object(P.jsx)(le.a,{title:I,children:Object(P.jsx)(C.a,{disabled:null==h,onClick:function(){var t=JSON.parse(localStorage.stpresets);t.find((function(e){return e.id==h})).options=e.options,localStorage.stpresets=JSON.stringify(t),k(),S("Saved preset!"),setTimeout((function(){S(Pe)}),3e3)},children:"Save"})}),Object(P.jsx)(le.a,{title:g,children:Object(P.jsx)(C.a,{disabled:null==h,onClick:function(){Se()(btoa(JSON.stringify(m.find((function(e){return e.id==h})).options))),y("Copied preset code to clipboard!"),setTimeout((function(){y(Te)}),3e3)},children:"Export"})}),Object(P.jsx)(le.a,{title:"Delete the selected preset",children:Object(P.jsx)(C.a,{disabled:null==h,onClick:Object(s.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M({title:"Really delete preset?",description:"Are you sure you want to delete this preset?",buttonText:"Delete",closeText:"Cancel",layer:1,buttonAction:function(){localStorage.stpresets=JSON.stringify(JSON.parse(localStorage.stpresets).filter((function(e){return e.id!=h}))),k(),localStorage.stpreset==h&&(localStorage.stpreset=null),u(null),t.handleClose()}});case 2:t=e.sent;case 3:case"end":return e.stop()}}),e)}))),children:"Delete"})})]}),Object(P.jsx)(U.a,{style:{marginTop:32,marginBottom:24}}),Object(P.jsxs)("div",{style:{display:"flex",flexDirection:"row"},children:[Object(P.jsx)(ne.a,{label:"Preset code loader",defaultValue:"",value:c,onChange:function(e){return r(e.target.value)},helperText:"Paste your preset code here and click Load to load it",variant:"outlined",disabled:!e.editable}),Object(P.jsx)(C.a,{color:e.editable?"primary":"default",disabled:!e.editable,onClick:function(){try{e.showMatchOptions(Object(o.a)(Object(o.a)({},e),{},{options:Object(o.a)(Object(o.a)({},e.options),JSON.parse(atob(c)))}))}catch(t){alert(t)}},children:"Load"})]})]})},Ae=[3,15],Re=Object(Y.a)((function(e){return{formControl:{margin:e.spacing(1)},select:{width:200},smallSelect:{width:50}}})),Me=!1;if(localStorage.stpresets&&localStorage.stpreset){var De=JSON.parse(localStorage.stpresets).find((function(e){return e.id==localStorage.stpreset}));De&&(Me=De.options)}console.log(Me);var Le=Object(o.a)(Object(o.a)({},Ne),Me||{});for(var ze in Le)"object"!=typeof Le[ze]||Array.isArray(Le[ze])||(Le[ze]=Object(o.a)(Object(o.a)({},localStorage.MatchOptions?JSON.parse(localStorage.MatchOptions)[ze]:{}),Le[ze]));function Je(e){return Object(P.jsxs)(se.a,{size:"small",children:[e.bigChange?Object(P.jsx)(C.a,{onClick:function(){return e.fn(-10)},disabled:e.disabled||e.state==e.min,children:"- -"}):null,Object(P.jsx)(C.a,{onClick:function(){return e.fn(-1)},disabled:e.disabled||e.state==e.min,children:"-"}),Object(P.jsx)(C.a,{disabled:!0,children:e.state}),Object(P.jsx)(C.a,{onClick:function(){return e.fn(1)},disabled:e.disabled||e.state==e.max,children:"+"}),e.bigChange?Object(P.jsx)(C.a,{onClick:function(){return e.fn(10)},disabled:e.disabled||e.state==e.max,children:"++"}):null]})}function We(e){var t=Re();e.options&&(Le=e.options);var n=function(){e.editable&&e.started&&qt.emit("updateOptions",Le)},a=d.a.useState(Le.public),c=Object(te.a)(a,2),r=c[0],l=c[1],j=d.a.useState(Le.players),h=Object(te.a)(j,2),u=h[0],b=h[1],p=function(){l(Le.public),b(Le.players)};return d.a.useEffect((function(){return n(),window.addEventListener("matchOptionsChanged",p),function(){return window.removeEventListener("matchOptionsChanged",p)}}),[]),Object(P.jsxs)("div",{children:[Object(P.jsx)(C.a,{color:"secondary",onClick:Object(s.a)(i.a.mark((function t(){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,M({title:"Option presets",buttonText:"Back",buttonAction:function(){return He(e)}},Object(P.jsx)(Be,Object(o.a)(Object(o.a)({},e),{},{showMatchOptions:He,options:Le})));case 2:Fe=t.sent;case 3:case"end":return t.stop()}}),t)}))),children:"Presets"}),Object(P.jsx)(U.a,{style:{marginTop:16}}),Object(P.jsxs)(K.a,{className:t.formControl,children:[Object(P.jsx)(ue.a,{children:"Privacy"}),Object(P.jsx)(F.a,{component:"div",children:Object(P.jsxs)(ae.a,{component:"label",container:!0,alignItems:"center",spacing:1,children:[Object(P.jsx)(ae.a,{item:!0,children:Object(P.jsx)(xe.a,{})}),Object(P.jsx)(ae.a,{item:!0,children:Object(P.jsx)(be.a,{color:"primary",checked:r,onChange:function(e){Le.public=!r,l(!r),n()},disabled:!e.editable})}),Object(P.jsx)(ae.a,{item:!0,children:Object(P.jsx)(me.a,{})})]})}),e.started?Object(P.jsx)(C.a,{color:e.editable?"primary":"disabled",size:"small",onClick:function(){return qt.emit("newRoomCode")},disabled:!e.editable,children:"New room code"}):null]}),Object(P.jsx)(U.a,{}),Object(P.jsxs)(K.a,{className:t.formControl,children:[Object(P.jsx)(ue.a,{style:{marginBottom:5},children:"Max players"}),Object(P.jsx)(Je,{fn:function(e){Le.players+=e,Le.players<Ae[0]&&(Le.players=Ae[0]),Le.players>Ae[1]&&(Le.players=Ae[1]),b(Le.players),n()},min:Ae[0],max:Ae[1],state:u,disabled:e.started,bigChange:!0})]})]})}var Fe={state:{open:!1}};function He(e){return Ue.apply(this,arguments)}function Ue(){return(Ue=Object(s.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M(Object(o.a)({},t.started?{title:"Match options",description:"Current options".concat(t.ingame?"":" (editable by the host)",":")}:{title:"Create Match",description:"Match options:",buttonText:"Create",buttonAction:function(){Fe.handleClose(),qt.emit("createMatch",Le)}}),Object(P.jsx)(We,Object(o.a)({},t)));case 2:(Fe=e.sent).editable=t.editable;case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var Ye={showMatchOptions:He,changeOptions:function(e){Le=e,window.dispatchEvent(new Event("matchOptionsChanged"))},hostChanged:function(e){Fe.state.open&&Fe.editable!=e&&He({editable:e,started:!0})}},qe=n(134),Ke=n.n(qe),Ve=n(141),Ge=n(278),_e=n(269),Qe=n(276),Xe=Object(Y.a)((function(e){return{card:{width:125,marginRight:5}}}));var Ze={Premise:function(){var e="ScMzIvxBSi4";return Object(P.jsxs)("div",{children:[Object(P.jsx)("img",{src:"/icon.png",style:{maxWidth:"100%",width:300}}),Object(P.jsx)(F.a,{children:"In PlotTweening, you connect a beginning and ending which only share a vague theme."}),Object(P.jsx)("br",{}),Object(P.jsx)(F.a,{variant:"h5",children:"Video"}),Object(P.jsxs)(F.a,{children:["Here's ",Object(P.jsx)(H.a,{href:"https://youtu.be/".concat(e),target:"_blank",rel:"noopener",children:"a YouTube video"})," showing the game in action."]}),Object(P.jsx)("iframe",{style:{width:"100%",height:"250px"},src:"https://www.youtube.com/embed/".concat(e),frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})]})},Options:function(){return Xe(),Object(P.jsxs)("div",{children:[Object(P.jsx)(F.a,{variant:"h4",children:"Options"}),Object(P.jsx)(F.a,{children:"i havent made any options yet"})]})}};function $e(e){var t=e.children,n=e.value,a=e.index,c=Object(Ve.a)(e,["children","value","index"]);return Object(P.jsx)("div",Object(o.a)(Object(o.a)({role:"tabpanel",hidden:n!==a,id:"vertical-tabpanel-".concat(a),"aria-labelledby":"vertical-tab-".concat(a)},c),{},{children:n===a&&Object(P.jsx)(Qe.a,{p:3,children:t})}))}var et=Object(Y.a)((function(e){return{root:{flexGrow:1,backgroundColor:e.palette.background.paper,display:"flex"},tabs:{minWidth:90,width:90,borderRight:"1px solid ".concat(e.palette.divider)},tab:{minWidth:"unset"},tabPanel:{overflowY:"scroll"}}}));var tt=function(){var e=et(),t=d.a.useState(0),n=Object(te.a)(t,2),a=n[0],c=n[1];return Object(P.jsxs)("div",{className:e.root,children:[Object(P.jsxs)(Ge.a,{orientation:"vertical",variant:"scrollable",value:a,onChange:function(e,t){c(t)},"aria-label":"Vertical tabs example",classes:{root:e.tabs},children:[Object(P.jsx)(_e.a,{className:e.tab,label:"Premise"}),Object(P.jsx)(_e.a,{className:e.tab,label:"Options"})]}),Object(P.jsx)($e,{classes:e.tabPanel,value:a,index:0,children:Object(P.jsx)(Ze.Premise,{})}),Object(P.jsx)($e,{classes:e.tabPanel,value:a,index:1,children:Object(P.jsx)(Ze.Options,{})})]})},nt=Object(Y.a)((function(e){return{centre:{padding:0}}}));function at(){var e=nt(),t=d.a.useState(!1),n=Object(te.a)(t,2),a=n[0],c=n[1],r=function(){return c(!1)};return ct.openRules=function(){return c(!0)},Object(P.jsxs)(I.a,{open:a,onClose:r,disablePortal:!0,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[Object(P.jsx)(T.a,{id:"alert-dialog-title",children:"Help"}),Object(P.jsx)(k.a,{classes:{root:e.centre},dividers:!0,children:Object(P.jsx)(tt,{})}),Object(P.jsx)(S.a,{children:Object(P.jsx)(C.a,{onClick:r,color:"secondary",children:"Close"})})]})}var ct={};h.a.render(Object(P.jsxs)(b.a,{theme:c,children:[Object(P.jsx)(u.a,{}),Object(P.jsx)(at,{})]}),document.getElementById("rules"));var rt=ct,it=Ke.a;function ot(){rt.openRules()}var st={ShowRulesIcon:it,ShowRulesButton:function(){return Object(P.jsx)(Q.a,{onClick:ot,children:Object(P.jsx)(it,{})})},showRules:ot},lt=Object(Y.a)({logoImage:{display:"block",textAlign:"center",margin:"auto",maxWidth:350},controls:{textAlign:"center",border:"1px solid #0000001f",borderRadius:10}});var dt=function(){var e=lt();return Object(P.jsxs)("div",{children:[Object(P.jsx)(F.a,{className:e.title,variant:"h3",gutterBottom:!0,children:Object(P.jsx)("img",{className:e.logoImage,src:"/iconanimated.png",alt:"Plot Tweening"})}),Object(P.jsxs)(F.a,{variant:"body1",gutterBottom:!0,children:["Form a story by everyone drawing what happens inbetween events. ",Object(P.jsxs)(H.a,{onClick:st.showRules,children:["How to play ",Object(P.jsx)(st.ShowRulesIcon,{fontSize:"inherit"})]})]}),Object(P.jsxs)("div",{className:e.controls,children:[Object(P.jsx)(oe,{}),Object(P.jsx)(he,{selected:localStorage.stcolor?Number(localStorage.stcolor):(localStorage.stcolor=Math.floor(Math.random()*de.length),localStorage.stcolor),matchInfo:null}),Object(P.jsx)(U.a,{}),Object(P.jsx)("br",{}),Object(P.jsx)(C.a,{size:"large",color:"primary",onClick:function(){return qt.emit("findMatch")},children:"Find Match"}),Object(P.jsx)("br",{}),Object(P.jsx)(C.a,{size:"small",color:"secondary",onClick:function(){return Ye.showMatchOptions({editable:!0,started:!1})},children:"Create Match"}),Object(P.jsx)("br",{}),Object(P.jsx)("br",{}),Object(P.jsx)("br",{}),Object(P.jsx)(ee,{})]})]})},jt=n(270),ht=n(271),ut=n(272),bt=n(244),pt=n(273),mt=n(274),ft=n(275),xt=n(137),Ot=n.n(xt),gt=n(85),yt=n.n(gt),vt=n(136),wt=n.n(vt),Ct=n(99),It=n.n(Ct),St=n(135),kt=n.n(St),Nt=Object(Y.a)({root:{textAlign:"center"},privacyIcon:{marginRight:10},table:{width:400,margin:"auto"},player:{display:"flex",alignItems:"center",justifyContent:"center"},pfp:{margin:"0 4px"},head:{backgroundColor:"#ececec"},tableCell:{textAlign:"center"},you:{textDecoration:"underline"}});var Tt=function(e){for(var t=Nt(),n=[],a=qt.id.startsWith(e.matchInfo.host),c=function(c){var r="",i=!1;c in e.matchInfo.players&&(r=e.matchInfo.players[c].name,i=qt.id.startsWith(e.matchInfo.players[c].id)),n.push(Object(P.jsx)(jt.a,{children:Object(P.jsx)(ht.a,{className:t.tableCell,children:c in e.matchInfo.players?Object(P.jsxs)("div",{className:t.player,children:[e.matchInfo.host==e.matchInfo.players[c].id?Object(P.jsx)(le.a,{title:"This player is the host. They have the ability to start the game.",children:Object(P.jsx)(yt.a,{fontSize:"inherit"})}):null,Object(P.jsx)("img",{className:"".concat(t.pfp," pfp"),src:"/pfps/".concat(e.matchInfo.players[c].num,".png")}),Object(P.jsx)("span",{children:i?Object(P.jsx)("span",{className:t.you,children:r}):r}),i?Object(P.jsx)(le.a,{title:"Customise",children:Object(P.jsx)(Q.a,{size:"small",onClick:function(){return M({title:"Customisation"},Object(P.jsxs)("div",{style:{textAlign:"center"},children:[Object(P.jsx)(oe,{}),Object(P.jsx)(he,{selected:e.matchInfo.players[c].num,matchInfo:e.matchInfo})]}))},children:Object(P.jsx)(kt.a,{fontSize:"inherit"})})}):null,!a||e.matchInfo.starting||i?null:Object(P.jsxs)("span",{children:[Object(P.jsx)(le.a,{title:"Kick - remove this player from this lobby.",children:Object(P.jsx)(Q.a,{size:"small",onClick:function(){return qt.emit("kick",e.matchInfo.players[c].id)},children:Object(P.jsx)(J.a,{fontSize:"inherit"})})}),e.matchInfo.players[c].bot?null:Object(P.jsx)(le.a,{title:"Promote - transfer your host privileges to this player.",onClick:function(){return qt.emit("promote",e.matchInfo.players[c].id)},children:Object(P.jsx)(Q.a,{size:"small",children:Object(P.jsx)(wt.a,{fontSize:"inherit"})})})]})]}):null})},c))},r=0;r<e.matchInfo.options.players;r++)c(r);d.a.useEffect((function(){Ye.hostChanged(a)})),e.matchInfo.starting&&new Audio("/countdown/".concat(e.matchInfo.startTimer,".mp3")).play();var i="Copy a link others can use to join this lobby to your clipboard.",o=d.a.useState(i),s=Object(te.a)(o,2),l=s[0],j=s[1];return d.a.useEffect((function(){LC.init(document.getElementById("doodleboard"),{imageURLPrefix:"/literallycanvas-0.4.13/img",backgroundColor:"white"})}),[]),Object(P.jsxs)("div",{children:[Object(P.jsx)(Q.a,{onClick:function(){return window.location.reload()},children:Object(P.jsx)(Ot.a,{})}),Object(P.jsx)(st.ShowRulesButton,{}),Object(P.jsxs)("div",{className:t.root,children:[Object(P.jsx)(F.a,{variant:"overline",display:"block",gutterBottom:!0,children:"Room code"}),Object(P.jsxs)(F.a,{variant:"h3",gutterBottom:!0,children:[Object(P.jsx)("span",{className:t.privacyIcon,children:e.matchInfo.options.public?Object(P.jsx)(le.a,{title:"This is a public match. Anyone can join this match from the 'Find Match' button on the homepage.",children:Object(P.jsx)(me.a,{})}):Object(P.jsx)(le.a,{title:"This is a private match. Only people with the room code can join.",children:Object(P.jsx)(xe.a,{})})}),e.matchInfo.code,Object(P.jsx)(le.a,{title:l,children:Object(P.jsx)(Q.a,{onClick:function(){Se()("".concat(window.location.protocol,"//").concat(window.location.host,"?").concat(e.matchInfo.code)),j("Copied to clipboard!"),setTimeout((function(){j(i)}),3e3)},children:Object(P.jsx)(It.a,{})})})]}),Object(P.jsx)(C.a,{color:"secondary",onClick:function(){return Ye.showMatchOptions({editable:a,started:!0})},children:"Match options"}),Object(P.jsx)("br",{}),Object(P.jsx)("br",{}),e.matchInfo.starting?Object(P.jsxs)(F.a,{variant:"h4",children:["Starting in ",e.matchInfo.startTimer,"..."]}):Object(P.jsx)(le.a,{title:a?e.matchInfo.players.length>=3?"Begin a timer to start the match. No more players will be able to join.":"You need 3 players to start a match.":"Only the host can start the match.",children:Object(P.jsx)("span",{children:Object(P.jsx)(C.a,{color:a&&e.matchInfo.players.length>=3?"primary":"default",size:"large",onClick:function(){return qt.emit("startMatch")},disabled:!a||e.matchInfo.players.length<3,children:"Start Match"})})}),Object(P.jsx)(ut.a,{component:bt.a,children:Object(P.jsxs)(pt.a,{children:[Object(P.jsx)(mt.a,{children:Object(P.jsx)(jt.a,{className:t.head,children:Object(P.jsxs)(ht.a,{className:t.tableCell,children:["Players: ",e.matchInfo.players.length,"/",e.matchInfo.options.players]})})}),Object(P.jsx)(ft.a,{children:n})]})})]}),Object(P.jsx)("br",{}),Object(P.jsx)("br",{}),Object(P.jsx)("br",{}),Object(P.jsx)(F.a,{variant:"h4",align:"center",children:"Personal doodle board"}),Object(P.jsx)("div",{id:"doodleboard"})]})};Object(Y.a)((function(e){return{}}));var Pt=function(e){return Object(P.jsxs)("div",{children:[Object(P.jsx)(F.a,{variant:"h3",children:"Who will you rejoin the game as?"}),e.choices.map((function(t){return Object(P.jsx)("button",{style:{background:de[t.num]},onClick:function(){return qt.emit("comeback",t.num,e.code)},children:t.name})}))]})},Et=n(86),Bt=n.n(Et),At=n(138),Rt=n.n(At),Mt=Object(Y.a)({gameInfo:{display:"flex",width:"100%",height:83,margin:"auto",alignItems:"center",justifyContent:"space-between",position:"sticky",top:0,backgroundColor:"#50e662",borderBottom:"1px solid #0000001f",zIndex:1005,"& div":{flexGrow:1}},gameInfoTitle:{textAlign:"center"},gameInfoContent:{display:"flex",alignItems:"end",justifyContent:"center"},buttons:{position:"absolute",display:"flex",flexDirection:"column",opacity:1,width:48,zIndex:5},do:{width:"100%",display:"flex",flexDirection:"column",alignItems:"center"},literallyCanvas:{width:600,maxWidth:"100%"},image:{width:600,maxWidth:"100%",padding:"8px 0"},playingStatusContainer:{display:"flex",justifyContent:"space-evenly",flexWrap:"wrap","& > div":{display:"flex",alignItems:"center",borderRadius:5,padding:"4px 8px",border:"1px solid #0000001f","& > span":{fontSize:24,paddingLeft:5}}}});function Dt(e){return new Promise((function(t,n){var a=e.canvasForExport(),c=document.createElement("canvas");c.width=a.width,c.height=a.height;var r=c.getContext("2d");r.fillStyle="#ddd",r.fillRect(0,0,c.width,c.height),r.fillStyle=document.getElementsByClassName("lc-drawing")[0].style["background-color"],r.fillRect(0,0,c.width,c.height),console.log(r.fillStyle);var i=new Image;i.onload=function(){r.drawImage(i,0,0),t(c.toDataURL("image/jpeg",.5))},i.src=a.toDataURL()}))}var Lt=function(e){var t=Mt(),n=(e.players.find((function(t){return e.myId.startsWith(t.id)})),d.a.useState(e.matchInfo.drawingNum)),a=Object(te.a)(n,2),c=a[0],r=a[1],o=d.a.useState(e.matchInfo.finished),l=Object(te.a)(o,2),j=l[0],h=l[1],u=d.a.useState(null),b=Object(te.a)(u,2),p=b[0],m=b[1],f=d.a.useState(e.matchInfo.theme),x=Object(te.a)(f,2),O=x[0],g=x[1],y=function(){return m(LC.init(document.getElementById("drawingArea"),{imageURLPrefix:"/literallycanvas-0.4.13/img",backgroundColor:"white",tools:[LC.tools.Pencil,LC.tools.Eraser,LC.tools.Line,LC.tools.Rectangle,LC.tools.Ellipse,LC.tools.Polygon,LC.tools.Pan,LC.tools.Eyedropper]}))};return d.a.useEffect((function(){return y(),qt.on("wait",(function(e){return h(e)})),qt.on("newDrawing",(function(e){g(e),r(c+1),y()})),function(){qt.off("wait"),qt.off("newDrawing")}}),[]),Object(P.jsxs)("div",{children:[Object(P.jsxs)("div",{className:t.gameInfo,children:[Object(P.jsx)(le.a,{title:"How many players have finished drawing this turn",children:Object(P.jsxs)("div",{children:[Object(P.jsx)("div",{className:t.gameInfoTitle,children:Object(P.jsx)(F.a,{variant:"subtitle1",children:"Players done"})}),Object(P.jsxs)("div",{className:t.gameInfoContent,children:[Object(P.jsx)(F.a,{variant:"h3",children:Object(P.jsx)("span",{id:"treasuresFound",children:j.length})}),Object(P.jsxs)(F.a,{variant:"h5",children:["/",Object(P.jsx)("span",{id:"treasuresNeeded",children:e.players.length})]})]})]})}),Object(P.jsx)(le.a,{title:"Turn number",children:Object(P.jsxs)("div",{children:[Object(P.jsx)("div",{className:t.gameInfoTitle,children:Object(P.jsx)(F.a,{variant:"subtitle1",children:"Drawing #"})}),Object(P.jsxs)("div",{className:t.gameInfoContent,children:[Object(P.jsx)(F.a,{variant:"h4",children:Object(P.jsx)("span",{id:"drawingNum",children:c+1})}),Object(P.jsxs)(F.a,{variant:"h6",children:["/",Object(P.jsx)("span",{id:"totalDrawings",children:e.players.length})]})]})]})})]}),Object(P.jsxs)("div",{className:t.buttons,children:[Object(P.jsx)(st.ShowRulesButton,{}),Object(P.jsx)(Q.a,{onClick:function(){return Ye.showMatchOptions({editable:!1,started:!0,ingame:!0,options:e.matchInfo.options})},children:Object(P.jsx)(Bt.a,{})}),Object(P.jsx)(Q.a,{onClick:function(){return M({title:"Room Code",description:"Players can use this code to rejoin the match if they get disconnected:"},Object(P.jsx)(F.a,{variant:"h2",children:e.matchInfo.code}))},children:Object(P.jsx)(Rt.a,{})})]}),Object(P.jsxs)("div",{className:t.do,style:{display:j.includes(e.matchInfo.num)?"none":"flex"},children:[Array.isArray(O)?Object(P.jsx)(F.a,{children:"Draw what happens inbetween these two pictures."}):Object(P.jsxs)(F.a,{children:["Draw the ",Object(P.jsx)("b",{children:0==c?"beginning":"ending"})," of a story with the following theme: ",Object(P.jsx)("b",{children:O}),"."]}),Array.isArray(O)?Object(P.jsx)("img",{src:O[0],className:t.image}):null,Object(P.jsx)("div",{id:"drawingArea",className:t.literallyCanvas}),Array.isArray(O)?Object(P.jsx)("img",{src:O[1],className:t.image}):null,Object(P.jsx)(C.a,{size:"large",color:"primary",style:{marginTop:10},onClick:Object(s.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=qt,e.next=3,Dt(p);case 3:e.t1=e.sent,e.t0.emit.call(e.t0,"submit",e.t1),console.log(p,"a");case 6:case"end":return e.stop()}}),e)}))),children:"Submit"}),Object(P.jsx)(U.a,{style:{marginTop:10,marginBottom:10,width:"100%"}})]}),Object(P.jsx)("div",{className:t.playingStatusContainer,children:e.players.map((function(e){return Object(P.jsxs)("div",{style:{background:j.includes(e.num)?"#73ff7c":"#ff6b61"},children:[Object(P.jsx)("img",{className:"pfp",src:"/pfps/".concat(e.num,".png")}),Object(P.jsx)("span",{style:{textDecoration:"".concat(e.dead?"line-through":"").concat(qt.id.startsWith(e.id)?" underline":"")},children:e.name})]})}))})]})},zt=n(139),Jt=n.n(zt),Wt=Object(Y.a)({root:{display:"flex",width:"100%",flexDirection:"column",alignItems:"center","& > table":{width:"95vw",height:"85vh",border:"1px solid #0000001f",borderRadius:10,background:"#ffffff66","& > thead > td":{textAlign:"center"},"& > tbody > tr > td":{background:"#ffffff66",border:"1px solid #0000001f",borderRadius:8,height:"70vh","& > div":{height:"100%",overflowY:"auto"}}}},players:{width:180,maxWidth:180,"& > div":{"& > div":{width:"95%",display:"flex",alignItems:"center",justifyContent:"space-between",margin:5,borderRadius:8,padding:"4px 8px","& > span":{display:"flex",alignItems:"center"}}}},plot:{overflowAnchor:"none","& > .anchor":{overflowAnchor:"auto",height:1}},plotPoint:{marginTop:30,"& > div":{display:"flex",alignItems:"center","& > img":{marginRight:8},"& > span":{fontSize:20}},"& > img":{maxWidth:"100%",maxHeight:"60vh"}}});var Ft=function(e){var t=Wt(),n=d.a.useState(e.matchInfo.presenting),a=Object(te.a)(n,2),c=a[0],r=a[1],i=d.a.useState(e.matchInfo.presentingImage),o=Object(te.a)(i,2),s=o[0],l=o[1],j=d.a.createRef();return d.a.useEffect((function(){return new Audio("/endMatch.mp3").play(),qt.on("presentNewPlot",(function(){r(c+1),c++,l(0),s=0})),qt.on("presentNewDrawing",(function(){l(s+1),s++})),function(){qt.off("presentNewPlot"),qt.off("presentNewDrawing")}}),[]),d.a.useEffect((function(){j.current.scrollTop=j.current.scrollHeight}),[s]),Object(P.jsxs)("div",{className:t.root,children:[Object(P.jsxs)("div",{style:{display:"flex"},children:[Object(P.jsx)(Q.a,{onClick:function(){return Ye.showMatchOptions({editable:!1,started:!0,ingame:!0,options:e.matchInfo.options})},children:Object(P.jsx)(Bt.a,{})}),Object(P.jsx)(Q.a,{href:"/",children:Object(P.jsx)(Jt.a,{})}),Object(P.jsx)(st.ShowRulesButton,{})]}),Object(P.jsxs)("table",{children:[Object(P.jsxs)("thead",{children:[Object(P.jsx)("td",{children:Object(P.jsx)(F.a,{variant:"h4",children:"Players"})}),Object(P.jsx)("td",{children:Object(P.jsxs)(F.a,{variant:"h4",a:console.log(e.matchInfo),children:[e.matchInfo.players.find((function(t){return t.num==e.matchInfo.plots[c].owner})).name,"'s plot"]})})]}),Object(P.jsx)("tbody",{children:Object(P.jsxs)("tr",{children:[Object(P.jsx)("td",{className:t.players,children:Object(P.jsx)("div",{children:e.matchInfo.plots.map((function(t,n){var a=e.matchInfo.players.find((function(e){return e.num==t.owner}));return Object(P.jsxs)("div",{style:{background:n==c?"#66f542":"#e3e3e3"},children:[Object(P.jsx)("img",{className:"pfp",src:"/pfps/".concat(a.num,".png")}),Object(P.jsxs)("span",{style:{textDecoration:e.matchInfo.num==a.num?"underline":"none"},children:[a.name,e.matchInfo.host==a.num?Object(P.jsx)(le.a,{title:"This player is the host. They control when images are shown.",children:Object(P.jsx)(yt.a,{})}):null]})]})}))})}),Object(P.jsx)("td",{children:Object(P.jsxs)("div",{className:t.plot,ref:j,children:[Object(P.jsxs)(F.a,{children:["The theme was: ",Object(P.jsx)("b",{children:e.matchInfo.plots[c].theme})]}),e.matchInfo.plots[c].drawings.slice(0,s).map((function(n,a){var r=e.matchInfo.players.find((function(t){return t.num==e.matchInfo.plots[c].drawers[a]}));return Object(P.jsxs)("div",{className:t.plotPoint,children:[Object(P.jsxs)("div",{children:[Object(P.jsx)("img",{className:"pfp",src:"/pfps/".concat(r.num,".png")}),Object(P.jsx)("span",{style:{textDecoration:e.matchInfo.num==r.num?"underline":"none"},children:r.name})]}),Object(P.jsx)("img",{src:n})]})})),s==e.matchInfo.plots[c].drawings.length?Object(P.jsxs)("div",{style:{textAlign:"center"},children:[Object(P.jsx)(U.a,{}),Object(P.jsx)(F.a,{children:"End of plot"}),Object(P.jsx)(C.a,{color:"secondary",onClick:function(){return M({title:"laziness",description:"i havent made this feature yet lol"})},children:"Download as gif"})]}):null,s==e.matchInfo.plots[c].drawings.length&&c==e.matchInfo.plots.length-1?Object(P.jsx)(C.a,{color:"primary",size:"large",onClick:function(){return qt.emit("rejoin",e.rjCode,e.matchInfo.options)},children:"Play again"}):e.matchInfo.amHost?Object(P.jsx)(C.a,{color:"primary",onClick:function(){return qt.emit("presentNext")},size:"large",children:"Next"}):null]})})]})})]})]})};var Ht=m()(f,{transports:["websocket"]}),Ut=!1;function Yt(e){setTimeout((function(){Ht.disconnected&&(h.a.render(Object(P.jsxs)(b.a,{theme:c,children:[Object(P.jsx)(u.a,{}),Object(P.jsx)(W,{error:e.toString()})]}),document.getElementById("root")),Ht.disconnect())}),1e4)}h.a.render(Object(P.jsxs)(b.a,{theme:c,children:[Object(P.jsx)(u.a,{}),Object(P.jsx)(L,{})]}),document.getElementById("root")),Ht.on("connect",(function(){Ut||(Ut=!0,h.a.render(Object(P.jsxs)(b.a,{theme:c,children:[Object(P.jsx)(u.a,{}),Object(P.jsx)(dt,{})]}),document.getElementById("root")))})),Ht.on("connect_error",Yt),Ht.on("connect_timeout",Yt),Ht.on("disconnect",Yt),Ht.on("err",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Unknown error",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Error:";M({layer:"err",title:t,description:e})})),Ht.on("noMatches",Object(s.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M({title:"No public matches available.",description:"Maybe create one yourself for people to join?",buttonText:"Create match with default options",buttonAction:function(){t.handleClose(),Ht.emit("createMatch",Object(o.a)(Object(o.a)({},Ne),{},{public:!0}))}});case 2:t=e.sent;case 3:case"end":return e.stop()}}),e)})))),Ht.on("kicked",(function(e){M({required:!0,title:"Kicked!",description:"".concat(e," kicked you from the lobby."),buttonText:"Back Home",buttonAction:function(){return window.location.reload()}})})),Ht.on("disconnect",(function(){setTimeout((function(){M({title:"Disconnected.",description:"Lost connection to the Plot Tweening server. You might not be able to do anything. Sorry :/"})}),200)})),Ht.on("joinMatch",(function(){})),Ht.on("matchUpdate",(function(e){e.started||h.a.render(Object(P.jsxs)(b.a,{theme:c,children:[Object(P.jsx)(u.a,{}),Object(P.jsx)(Tt,{matchInfo:e})]}),document.getElementById("root")),Ye.changeOptions(e.options)})),Ht.on("matchStart",(function(e){return function(e,t){h.a.render(Object(P.jsxs)(b.a,{theme:c,children:[Object(P.jsx)(u.a,{}),Object(P.jsx)(Lt,{matchInfo:e,players:e.players,myId:t})]}),document.getElementById("root"),(function(){new Audio("/startMatch.mp3").play()}))}(e,Ht.id)})),Ht.on("comebackchoice",(function(e,t){return h.a.render(Object(P.jsxs)(b.a,{theme:c,children:[Object(P.jsx)(u.a,{}),Object(P.jsx)(Pt,{choices:e,code:t})]}),document.getElementById("root"))})),Ht.on("waiting"),Ht.on("present",(function(e,t){return function(e,t){h.a.render(Object(P.jsxs)(b.a,{theme:c,children:[Object(P.jsx)(u.a,{}),Object(P.jsx)(Ft,{matchInfo:e,rjCode:t})]}),document.getElementById("root")),e=null}(e,t)})),Ht.on("rejoin",(function(e){return window.location.href="/?".concat(e)}));var qt=Ht},41:function(e){e.exports=JSON.parse('["Pink","Magenta","Red","Orange","Yellow","Turquoise","Lime","Green","Violet","Purple","Blue","Aqua","Brown","Maroon","Grey","Black"]')},64:function(e){e.exports=JSON.parse('{"public":false,"players":15}')}},[[209,1,2]]]);
//# sourceMappingURL=main.a39eaf58.chunk.js.map