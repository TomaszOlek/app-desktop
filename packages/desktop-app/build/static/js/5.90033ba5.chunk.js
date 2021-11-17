(this["webpackJsonp@prifina-apps/desktop-app"]=this["webpackJsonp@prifina-apps/desktop-app"]||[]).push([[5,15],{1447:function(e,t,n){e.exports={resolve:{react:n(4),"styled-components":n(30),"styled-system":n(43),"react-dnd":n(1455),"react-dnd-html5-backend":n(1457),"@prifina/hooks":n(297),moment:n(1220),"moment-timezone":n(1222)}}},520:function(e,t,n){"use strict";n.r(t),n.d(t,"TabText",(function(){return L})),n.d(t,"PageContainer",(function(){return F})),n.d(t,"WidgetWrapper",(function(){return B})),n.d(t,"IconDiv",(function(){return U})),n.d(t,"EmptyDiv",(function(){return W})),n.d(t,"WidgetContainer",(function(){return G})),n.d(t,"ModalBackground",(function(){return _})),n.d(t,"SearchContainer",(function(){return K})),n.d(t,"SettingsDiv",(function(){return H})),n.d(t,"BlurImageDiv",(function(){return J})),n.d(t,"WidgetList",(function(){return Z})),n.d(t,"SettingsDialog",(function(){return V})),n.d(t,"SearchBox",(function(){return Q})),n.d(t,"SearchResults",(function(){return X})),n.d(t,"SearchHistory",(function(){return $}));var i,r,c,o,a,s,l,d,u,g,h,p,f,b=n(19),j=n(54),x=n(14),O=n(65),m=n(4),w=n.n(m),v=n(30),S=n(8),y=n(521),T=n.n(y),I=n(333),k=n.n(I),C=n(334),E=n.n(C),D=n(29),A=n(7),R=n(1220),z=n.n(R),P=(n(1222),n(3)),N=["widgetIndex","widgetSettings","onUpdate"];A.i18n.init();var L=Object(v.default)(S.Text)(i||(i=Object(O.a)(["\n  padding-left: 20px;\n  padding-top: 25px;\n"]))),F=v.default.div(r||(r=Object(O.a)(["\n  margin-left: 64px;\n  margin-right: 64px;\n  margin-top: 24px;\n\n  background: #ffffff;\n  box-shadow: 0px -4px 8px #f5f6f6;\n"]))),B=v.default.div(c||(c=Object(O.a)(["\n  width: 100%;\n  height: 100%;\n  border: 2px outset;\n  border-radius: 8px;\n  /*\n  margin: 10px;\n  min-height: 200px;\n  min-width: 200px;\n  */\n"]))),U=v.default.div(o||(o=Object(O.a)(["\n  &:hover {\n    transform: scale(0.9);\n    box-shadow: 3px 2px 30px 1px rgb(0 0 0 / 24%);\n  }\n  height: 20px;\n  width: 20px;\n  position: relative;\n  left: 290px;\n  top: 20px;\n  opacity: 1;\n  cursor: ",";\n  background-image: radial-gradient(\n    circle,\n    "," 2px,\n    transparent 0px\n  );\n  background-size: 100% 33.33%;\n  z-index: 10;\n"])),(function(e){return e.open?"default":"pointer"}),(function(e){return"dark"===e.widgetTheme?"white":"black"})),W=v.default.div(a||(a=Object(O.a)(["\n  height: 20px;\n  width: 20px;\n  position: relative;\n  left: 180px;\n  top: 20px;\n  opacity: 1;\n"]))),G=Object(v.default)(S.Flex)(s||(s=Object(O.a)(["\n  /*\nwidth: 100%;\nheight: 100vh;\ndisplay: flex;\n*/\n  flex-wrap: wrap;\n  flex-direction: row;\n  align-content: flex-start;\n  justify-content: flex-start;\n  position: relative;\n  top: 0px;\n  left: 0px;\n  overflow-y: auto;\n"]))),_=v.default.div(l||(l=Object(O.a)(["\n  width: 100%;\n  height: 100vh;\n  z-index: 40;\n  background-color: rgba(30, 29, 29, 0.3);\n  position: absolute;\n  left: 0;\n  top: 0;\n"]))),K=v.default.div(d||(d=Object(O.a)(["\n  width: ","px;\n  /* height: 100vh; */\n  max-height: 400px;\n  overflow-y: auto;\n  z-index: 20;\n  background-color: white;\n  position: absolute;\n  left: ","px;\n  top: ","px;\n  padding-top: 10px;\n  padding-left: 10px;\n  padding-right: 10px;\n"])),(function(e){return e.width}),(function(e){return e.left}),(function(e){return e.top})),H=v.default.div(u||(u=Object(O.a)(["\n  background-color: white;\n  width: 100%;\n  height: 100%;\n  /*border: 2px outset; */\n  border-radius: 8px;\n  z-index: 50;\n"]))),J=v.default.div(g||(g=Object(O.a)(["\n  filter: blur(4px);\n  -webkit-filter: blur(4px);\n\n  height: 100%;\n\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n"]))),Y=v.default.div(p||(p=Object(O.a)(["\n  color: ",";\n  position: absolute;\n  top: 110px;\n  height: 69px;\n  width: 69px;\n  margin: 0 10px 0 0;\n  text-align: left;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: 5px solid\n    ",";\n  border-radius: 50%;\n  z-index: 20;\n  div {\n    animation: ","\n      4s linear infinite;\n  }\n  div:nth-child(1) {\n    animation-delay: 1s;\n  }\n\n  div:nth-child(2) {\n    animation-delay: 2s;\n  }\n  div:nth-child(3) {\n    animation-delay: 3s;\n  }\n"])),(function(e){return"dark"===e.widgetTheme?"white":"black"}),(function(e){return"dark"===e.widgetTheme?"white":"black"}),(function(e){return t="dark"===e.widgetTheme?["white","gray"]:["black","gray"],Object(v.keyframes)(h||(h=Object(O.a)(["\n{\n  10% {\n   background-color: ","; \n  }\n  0%, 20%,100% {\n    background-color: ",";\n  }\n}\n"])),t[0],t[1]);var t})),q=v.default.div(f||(f=Object(O.a)(["\n  position: relative;\n\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background-color: ","\n\n  float: left;\n  z-index: 21;\n  margin-right: 9px;\n  &:last-of-type {\n    margin-right: 0;\n  }\n"])),(function(e){return"dark"===e.widgetTheme?"white":"black"})),M=function(e){var t=Object(S.useTheme)();return console.log(t.colors),Object(P.jsxs)(Y,Object(x.a)(Object(x.a)({theme:t},e),{},{children:[Object(P.jsx)(q,Object(x.a)({theme:t},e)),Object(P.jsx)(q,Object(x.a)({theme:t},e)),Object(P.jsx)(q,Object(x.a)({theme:t},e))]}))},Z=w.a.memo((function(e){var t=e.widgetList,n=e.widgetData,i=e.currentUser,r=e.dataSources;console.log("WIDGET LIST ",t),console.log("WIDGET DATA",n),console.log("WIDGET USER",i),console.log("DATASOURCES",r);var c=Object.keys(i.dataConnectors);return Object(P.jsx)(P.Fragment,{children:t.map((function(e,t){var o=n[t].dataConnectors[0],a=n[t].widget.size.split("x");if(n[t].dataConnectors.length>0){var s=0;c.length>0&&c.indexOf(o)>-1&&(s=i.dataConnectors[o].status);var l=r[o].sourceType;if(console.log("DATASOURCE TYPE",t,o,l),s<2)return Object(P.jsxs)("div",{style:{width:a[0]+"px",height:a[1]+"px",margin:"10px"},children:[Object(P.jsx)(W,{}),Object(P.jsxs)(B,{children:[Object(P.jsx)(J,{style:{backgroundImage:"url(".concat(n[t].widget.image,")")}},"prifina-widget-"+t),Object(P.jsxs)("div",{style:{width:a[0]+"px",bottom:"60px",padding:"10px",position:"absolute",textAlign:"center"},children:[Object(P.jsx)(S.Text,{textStyle:"h6",color:"dark"===n[t].widget.theme?"white":"black",children:n[t].widget.title}),Object(P.jsx)(S.Text,{textStyle:"caption",color:"dark"===n[t].widget.theme?"white":"black",children:n[t].widget.shortDescription})]}),Object(P.jsxs)("div",{style:{width:a[0]+"px",bottom:"15px",paddingLeft:"10px",position:"absolute"},children:[0===s&&Object(P.jsx)(S.Button,{children:1===l?"Connect Data":"Import"}),1===s&&Object(P.jsx)(S.Button,{children:"Activate"})]})]},"widget-wrapper-"+t)]},"widget-processing-"+t);if(2===s)return Object(P.jsxs)("div",{style:{width:a[0]+"px",height:a[1]+"px",margin:"10px"},children:[Object(P.jsx)(W,{}),Object(P.jsxs)(B,{children:[Object(P.jsx)(J,{style:{backgroundImage:"url(".concat(n[t].widget.image,")")}},"prifina-widget-"+t),Object(P.jsxs)("div",{style:{width:"100%",height:"100%",display:"flex",justifyContent:"center",top:"0px",zIndex:19},children:[Object(P.jsx)(M,{widgetTheme:n[t].widget.theme}),Object(P.jsxs)("div",{style:{width:a[0]+"px",bottom:"70px",padding:"5px",position:"absolute",textAlign:"center"},children:[Object(P.jsx)(S.Text,{textStyle:"h6",color:"dark"===n[t].widget.theme?"white":"black",children:"Prosessing your data..."}),Object(P.jsx)(S.Text,{textStyle:"caption",color:"dark"===n[t].widget.theme?"white":"black",children:"You will be notified as soon as the data becomes available in your cloud."})]})]},"widget-dot-"+t)]},"widget-wrapper-"+t)]},"widget-processing-"+t)}return Object(P.jsx)(e,{data:{settings:n[t].currentSettings,currentUser:i}},"prifina-widget-"+t)}))})})),V=function(e){var t=e.widgetIndex,n=e.widgetSettings,i=e.onUpdate,r=Object(j.a)(e,N);console.log("SETTINGS ",t,n);var c=Object(m.useRef)({}),o=Object(m.useRef)([]),a=Object(m.useRef)(),s=Object(m.useRef)({}),l=Object(m.useState)(!1),d=Object(b.a)(l,2),u=d[0],g=d[1],h=["theme","size"];Object(m.useEffect)((function(){Object.keys(n.currentSettings).forEach((function(e){h.indexOf(e)>-1?"size"===e?s.current.sizes=n.currentSettings[e]:s.current[e]=n.currentSettings[e]:c.current[e]=n.currentSettings[e]})),console.log("FLDS ",c,s),console.log("DIALOG ",r);var e=[];n.settings.forEach((function(t){console.log(t),-1===e.indexOf(t.type)&&e.push(t.type)})),e.indexOf("TZ")>-1&&z.a.tz.names().forEach((function(e){o.current.push({text:e+": "+z.a.tz(e).format("Z"),tz:e,offset:z.a.tz(e).utcOffset()})})),g(!0)}),[]);var p=Object(A.useFormFields)(c.current),f=Object(b.a)(p,2),x=f[0],O=f[1];if(console.log("RENDER FIELDS ",x,c),o.current.length>0){var v=z.a.tz(x.tz).utcOffset();console.log("TZ ",c,v),v!==c.current.offset&&(c.current.offset=v,c.current.tz=x.tz,console.log("INPUT ",a),a.current&&(a.current.value=v),O({target:{id:"offset",value:v}}))}return Object(P.jsxs)(S.Box,{m:2,children:[Object(P.jsx)(S.Text,{textStyle:"h3",textAlign:"center",mt:10,children:n.title}),Object(P.jsx)(S.Divider,{}),u&&Object(P.jsxs)(S.Box,{mt:10,ml:5,mr:5,children:[n.settings.map((function(e,t){if(Object.keys(c.current).indexOf(e.field)>-1)return Object(P.jsxs)(w.a.Fragment,{children:["text"===e.type&&Object(P.jsx)(S.Input,{mt:15,placeholder:e.label,mb:2,id:e.field,name:e.field,defaultValue:x[e.field],onChange:O,ref:a},"widget-setting-"+t),"TZ"===e.type&&Object(P.jsxs)(P.Fragment,{children:[Object(P.jsx)(S.Label,{mt:10,children:e.label},"setting-label-"+t),Object(P.jsx)(S.Select,{mb:10,size:"sm",id:e.field,name:e.field,defaultValue:x[e.value],onChange:O,children:o.current.map((function(e,n){return Object(P.jsx)("option",{value:e.tz,children:e.text},"widget-setting-"+t+"-"+n)}))},"widget-setting-"+t)]})]},"settings-"+t)})),Object(P.jsx)(S.Box,{mt:10,children:Object(P.jsx)(S.Button,{width:"100%",onClick:function(e){console.log("UPDATE BUTTON ",x),o.length>0&&x.hasOwnProperty("tz")?i({tz:x.tz,offset:z.a.tz(x.tz).utcOffset()}):i(x)},children:"Update"})})]})]})},Q=Object(m.forwardRef)((function(e,t){var n=e.showHistory,i=e.chevronOpen,r=e.searchKey,c=e.searchOpen,o=e.saveSearchKey,a=Object(A.useFormFields)({search:""}),s=Object(b.a)(a,2),l=s[0],d=s[1],u=Object(m.useRef)();return Object(P.jsx)(S.Box,{ml:10,mr:10,ref:t,children:Object(P.jsxs)(S.IconField,{children:[Object(P.jsx)(S.IconField.LeftIcon,{iconify:T.a,color:"componentPrimary",size:"17"}),Object(P.jsx)(S.IconField.InputField,{ref:u,autoFocus:!0,placeholder:A.i18n.__("Search"),id:"search",name:"search",onChange:d,onKeyDown:function(e){"Enter"===e.key&&(o(l.search),r(l.search))}}),Object(P.jsx)(S.Box,{display:"inline-flex",onClick:function(){c||n((function(e){return!e})),u.current.value="",r("")},children:Object(P.jsx)(S.IconField.RightIcon,{iconify:i||c?k.a:E.a,color:"componentPrimary",size:"17"})})]})})})),X=function(e){var t=e.searchBox,n=e.searchKey,i=e.roleKey,r=e.saveSearchResult,c=t.current.getBoundingClientRect(),o={width:c.width,left:c.left,top:c.top+c.height+5};console.log(o),console.log("NEW SEARCH ",n);var a=Object(m.useState)(null),s=Object(b.a)(a,2),l=s[0],d=s[1],u=Object(A.useFetch)(),g=u.data,h=u.error,p=u.isLoading,f=u.setUrl;return Object(m.useEffect)((function(){if(p||f("".concat(D.b,"?cx=").concat(D.d,"&exactTerms=").concat(i.length>0?encodeURIComponent(i):"","&q=").concat(encodeURIComponent(n),"&lr=lang_en&key=").concat(D.a)),h&&d(Object(P.jsxs)("h2",{children:["Error when fetching: ",h]})),!g&&p&&d(Object(P.jsx)("h2",{children:"LOADING..."})),g||p||d(null),g){console.log(g);var e=g.items.map((function(e,t){return Object(P.jsxs)("li",{children:[Object(P.jsx)("div",{children:Object(P.jsx)("a",{href:e.link,"data-link":t,onClick:function(e){var t=parseInt(e.currentTarget.dataset.link);console.log("LINK CLICK ",g.items[t]),r(n,g.items[t])},target:"_blank",children:e.title})}),Object(P.jsx)("div",{style:{fontSize:"0.75rem"},children:e.snippet})]},"search-result-"+t)}));d(Object(P.jsx)("ol",{children:e}))}}),[n,h,p,g]),Object(P.jsx)(P.Fragment,{children:Object(P.jsxs)(K,Object(x.a)(Object(x.a)({},o),{},{children:[Object(P.jsx)(S.Text,{textStyle:"h4",children:"Search results"}),Object(P.jsx)(S.Divider,{}),l]}))})},$=function(e){var t=e.searchBox;console.log("HISTORY ",t);var n=t.current.getBoundingClientRect(),i={width:n.width,left:n.left,top:n.top+n.height+5};console.log(i);var r=[];return Object(P.jsx)(P.Fragment,{children:Object(P.jsxs)(K,Object(x.a)(Object(x.a)({},i),{},{children:[Object(P.jsx)(S.Text,{textStyle:"h4",children:"Search history"}),Object(P.jsx)(S.Divider,{}),Object(P.jsx)("ol",{children:r.length>0&&r.map((function(e,t){return Object(P.jsx)("li",{children:e.search},"search-"+t)}))})]}))})}},535:function(e,t,n){"use strict";n.r(t);var i=n(31),r=n.n(i),c=n(46),o=n(14),a=n(19),s=n(4),l=n.n(s),d=n(297),u=(n(86),n(1446),n(338)),g=n(524),h=n(1447),p=Object(g.createRequires)(h.resolve),f=Object(g.createRemoteComponent)({requires:p}),b=n(1223),j=n(135),x=n(75),O=n(310),m=n(29),w=n(157),v=n(520),S=n(7),y=n(332),T=(n(43),n(8)),I=n(3);n(1452);S.i18n.init();m.e.appSync.aws_appsync_graphqlEndpoint,m.e.main_region,m.e.appSync.aws_appsync_authenticationType,m.e.cognito.USER_POOL_ID,m.e.cognito.IDENTITY_POOL_ID,m.e.cognito.APP_CLIENT_ID,m.e.main_region;var k={AWSS3:{bucket:m.e.S3.bucket,region:m.e.S3.region}};function C(e,t){console.log("getSystemSettings ",e,t);var n="dark",i="300x300";return e&&e.length>0&&e.forEach((function(e){"sizes"===e.field&&(i=t[e.field]||JSON.parse(e.value)[0].value),"theme"===e.field&&(n=t[e.field]||JSON.parse(e.value)[0].value)})),{theme:n,size:i}}t.default=function(e){var t=e.widgetConfigData,n=e.appSyncClient,i=e.prifinaID,g=e.dataSources;console.log("PROPS ",t,Object.keys(t)),console.log("DISPLAY APP ",i);var h=Object(d.usePrifina)(),p=(h.check,h.currentUser),m=(h.getLocalization,h.getSettings,h.setSettings),E=h.getCallbacks,D=h.registerClient,A=(h.API,h.Prifina);h.activeRole;console.log("DISPLAY APP ",p),console.log("DISPLAY APP DATASOURCES",g);var R=new A({appId:"WIDGETS"});j.default.configure(k);var z=Object(s.useState)([]),P=Object(a.a)(z,2),N=P[0],L=P[1],F=Object(s.useState)(t.map((function(e,t){var n=C(e.widget.settings,e.currentSettings),i=n.theme,r=n.size;return{dataConnectors:e.dataConnectors,currentSettings:e.currentSettings,url:e.url,settings:e.settings,widget:Object(o.a)({theme:i,size:r},e.widget)}}))),B=Object(a.a)(F,2),U=B[0],W=B[1],G=Object(s.useState)(0),_=Object(a.a)(G,2),K=_[0],H=_[1],J=Object(s.useState)(!1),Y=Object(a.a)(J,2),q=(Y[0],Y[1],Object(s.useRef)(),Object(s.useState)("")),M=Object(a.a)(q,2),Z=(M[0],M[1],Object(s.useState)(!1)),V=Object(a.a)(Z,2),Q=V[0],X=V[1],$=Object(s.useState)(!1),ee=Object(a.a)($,2),te=ee[0],ne=ee[1],ie=Object(s.useState)(!1),re=Object(a.a)(ie,2),ce=re[0],oe=re[1],ae=Object(s.useRef)([]),se=Object(s.useRef)({left:"0px",top:"0px",height:"0px",width:"0px",widget:-1}),le=[{transform:"perspective(1000px) rotateY(0deg)",backgroundColor:"currentColor",background:null},{transform:null,background:"",backgroundColor:"white"}],de=Object(s.useRef)(le.map((function(e,t){return t})));console.log("ITEMS ",de);var ue=Object(u.useSprings)(le.length,(function(e){return{from:{transform:le[e].transform,opacity:1,width:"300px",height:"300px"},config:{mass:5,tension:400,friction:150}}})),ge=Object(a.a)(ue,2),he=ge[0],pe=ge[1];console.log("SPRINGS ",he);var fe=Object(s.useRef)([]),be=Object(s.useRef)([]),je=Object(s.useRef)(t.map((function(e,t){var n=C(e.widget.settings,e.currentSettings);return{theme:n.theme,size:n.size,settings:e.widget.settings||[],title:e.widget.title,appId:e.widget.appID,installCount:e.widget.installCount,currentSettings:e.currentSettings,image:e.widget.image,dataConnectors:e.dataConnectors}})));console.log("WIDGET SETTINGS after parsing theme&sizes ",je);var xe=Object(s.useRef)(null);Object(s.useEffect)(Object(c.a)(r.a.mark((function e(){var n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.map((function(e){return new Promise((function(t,n){var i=new Image;i.src=e.widget.image,i.onload=t(i),i.onerror=n(),ae.current.push(e.widget.image)}))})),e.next=3,Promise.all(n).then((function(e){console.log("Images loaded....",e)}));case 3:case"end":return e.stop()}}),e)}))),[]);Object(s.useEffect)((function(){return console.log("OPEN CHANGE ",Q),-1!=se.current.widget&&(console.log("INIT SPRINGS...."),be.current=[],te&&ce&&pe((function(e){return{from:{transform:le[e].transform,opacity:1,width:"300px",height:"300px"},config:{mass:5,tension:500,friction:220}}})),ne(!1),oe(!1)),function(){!0}}),[Q]),Object(s.useEffect)((function(){return D([n,x.a,O.a]),xe.current=n.subscribe({query:Object(w.default)(S.getAthenaResults),variables:{id:i}}).subscribe({next:function(e){console.log("ATHENA SUBS RESULTS ",e);var t=e.data.athenaResults.appId;console.log(t,je.current);var n=je.current.findIndex((function(e){return e.appId===t})),i=je.current[n].installCount;console.log(n,i);var r=E();console.log("CALLBACKS ",r),r.hasOwnProperty(t)&&"function"===typeof r[t][i]&&(console.log("FOUND CALLBACK "),r[t][i]({data:JSON.parse(e.data.athenaResults.data).content}))},error:function(e){console.log("ATHENA SUBS ERROR "),console.warn(e)}}),console.log("WIDGET CONFIG ",U),function(){xe.current&&(console.log("UNSUBS ATHENA "),xe.current.unsubscribe())}}),[]),Object(s.useEffect)((function(){if(console.log("WIDGET CONFIG, create widgets... "),U.length>0){console.log("CREATE WIDGETS...");var e=U.map((function(e,t){return console.log("WIDGET COMPONENT ",e),Object(s.forwardRef)((function(n,i){console.log("W ",n);var r=e.widget.size.split("x");return Object(I.jsx)(l.a.Fragment,{children:Object(I.jsx)("div",{style:{width:r[0]+"px",height:r[1]+"px",margin:"10px"},children:Object(I.jsxs)(T.Flex,{flexDirection:"row",children:[Object(I.jsxs)(T.Flex,{children:[e.settings&&Object(I.jsx)(v.IconDiv,{open:n.open,onClick:function(){return function(e){if(!Q){console.log("CLICK...",e);var t=document.querySelectorAll("[data-widget-index='"+e+"']")[0].getBoundingClientRect();console.log("WW...",t),se.current={left:t.left+"px",top:t.top+"px",height:t.height+"px",width:t.width+"px",widget:e},pe((function(e){return 0===e?{transform:"perspective(1000px) rotateY(150deg)",onRest:function(){ne(!0),oe(!0)}}:{transform:null,opacity:0,from:{width:"300px",height:"300px"},to:{width:"400px",height:"400px"},config:Object(o.a)(Object(o.a)({},u.config.molasses),{},{duration:3500}),onRest:function(){}}})),X(!0)}}(t)},widgetTheme:e.widget.theme}),!e.settings&&Object(I.jsx)(v.EmptyDiv,{})]}),Object(I.jsx)(T.Flex,{children:Object(I.jsx)(v.WidgetWrapper,{className:"prifina-widget","data-widget-index":t,ref:i,children:Object(I.jsx)(f,Object(o.a)({url:e.url},n))},"widget-wrapper-"+t)})]})})})}))}));console.log("WIDGETS ",e),L(e)}}),[U]);var Oe=function(e){console.log("Update settings ",e),console.log("HOOK ",R),console.log(se.current,je);var t=JSON.parse(JSON.stringify(je.current[se.current.widget].currentSettings)),n=!1,r=JSON.parse(JSON.stringify(U));Object.keys(e).forEach((function(i){var c=i;["theme"].indexOf(c)>-1&&t[c]!==e[c]&&(n=!0,r[se.current.widget].widget[c]=e[c]),["sizes"].indexOf(c)>-1&&t.size!==e[i]&&(c="size",n=!0,r[se.current.widget].widget.size=e[i]),je.current[se.current.widget].currentSettings[c]=e[i]}));var c=[];Object.keys(t).forEach((function(n){"size"===n&&e.hasOwnProperty("sizes")?c.push({field:n,value:e.sizes}):e.hasOwnProperty(n)?c.push({field:n,value:e[n]}):c.push({field:n,value:t[n]})}));var o=je.current[se.current.widget].appId;console.log("NEW SETTINGS ",c,o),console.log("UPDATED SETTINGS ",je.current,o),m(o,i,{type:"WIDGET",index:se.current.widget,settings:c});var a=E();console.log("CALLBACKS ",a);var s=je.current[se.current.widget].installCount;console.log(" CALLBACK ",a.hasOwnProperty(o),s),console.log(" CALLBACK ",typeof a[o][s]),a.hasOwnProperty(o)&&"function"===typeof a[o][s]&&(console.log("FOUND CALLBACK "),a[o][s]({settings:e})),pe((function(e){return{from:{transform:le[e].transform,opacity:1,width:"300px",height:"300px"},config:{mass:5,tension:500,friction:220}}})),X(!1),ne(!1),oe(!1),n&&(console.log("SystemSettingsUpdated ",n,r),W(r))};return Object(I.jsxs)(I.Fragment,{children:[Q&&Object(I.jsx)(v.ModalBackground,{className:"widget-modal",onClick:function(e){console.log("TARGET ",e),console.log("WIDGET SETTINGS ",fe.current,se),console.log("MODAL ",e.target.className),e.target.className.indexOf("widget-modal")>-1&&X(!1)},children:he.map((function(e,t){return console.log("PROPS ",t,e),console.log("IMAGE ",ae.current),console.log(se.current),console.log(je),Object(I.jsx)(u.animated.div,{style:{transform:e.transform,left:se.current.left,top:se.current.top,width:e.width,height:e.height,position:"absolute",borderRadius:0===t?"8px":null,visibility:Q?"visible":"hidden",zIndex:50,backgroundSize:"cover",backgroundImage:t>0||te?null:"url(".concat(ae.current[se.current.widget],")")},ref:function(e){null!==e&&be.current.push(e)},children:ce&&1===t&&Object(I.jsx)(v.SettingsDiv,{children:Object(I.jsx)(v.SettingsDialog,{spring:t,flipped:te,open:Q,onUpdate:Oe,widgetIndex:se.current.widget,widgetSettings:je.current[se.current.widget]})})},"animated-"+t)}))}),Object(I.jsx)(y.a,{title:"Display App"}),Object(I.jsx)(v.PageContainer,{children:Object(I.jsx)("div",{style:{overflow:"hidden"},children:Object(I.jsxs)(b.Tabs,{activeTab:K,onClick:function(e,t){console.log("Click",e),console.log("TAB",t),H(t)},style:{height:"100%"},variant:"line",children:[Object(I.jsxs)(b.TabList,{children:[Object(I.jsx)(b.Tab,{children:Object(I.jsx)(v.TabText,{children:p.name})}),Object(I.jsx)(b.Tab,{children:Object(I.jsx)(v.TabText,{children:"Work"})}),Object(I.jsx)(b.Tab,{children:Object(I.jsx)(v.TabText,{children:"Family"})}),Object(I.jsx)(b.Tab,{children:Object(I.jsx)(v.TabText,{children:"Hobbies"})})]}),Object(I.jsxs)(b.TabPanelList,{style:{backgroundColor:null},children:[Object(I.jsx)(b.TabPanel,{style:{height:"100vh",paddingBottom:"50px",overflow:"auto"},children:Object(I.jsx)("div",{style:{overflow:"auto"},children:Object(I.jsx)(v.WidgetContainer,{className:"prifina-widget-container",children:N.length>0&&Object(I.jsx)(v.WidgetList,{widgetList:N,widgetData:U,currentUser:p,dataSources:g})})})}),Object(I.jsx)(b.TabPanel,{children:"Work panel"}),Object(I.jsx)(b.TabPanel,{children:"Family panel"}),Object(I.jsx)(b.TabPanel,{children:"Hobbies panel"})]})]})})})]})}}}]);
//# sourceMappingURL=5.90033ba5.chunk.js.map