(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[335],{6849:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/contact",function(){return t(2288)}])},3673:function(e,n,t){"use strict";t.d(n,{Z:function(){return v}});var i=t(5893),r=(t(7294),t(2962)),a=t(7554),s=t(5675),c=t(1664),l=t(3190),o=function(){return(0,i.jsx)(l.slide,{children:(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:(0,i.jsx)(c.default,{href:"/",passHref:!0,children:"Home"})}),(0,i.jsx)("li",{children:(0,i.jsx)(c.default,{href:"/overmij",passHref:!0,children:"Over mij"})}),(0,i.jsx)("li",{children:(0,i.jsx)(c.default,{href:"/mijnwerk",passHref:!0,children:"Mijn werk"})}),(0,i.jsx)("li",{children:(0,i.jsx)(c.default,{href:"/inspiratieblogs",passHref:!0,children:"Inspiratieblogs"})}),(0,i.jsx)("li",{children:(0,i.jsx)(c.default,{href:"/prints",passHref:!0,children:"Prints"})}),(0,i.jsx)("li",{children:(0,i.jsx)(c.default,{href:"/contact",passHref:!0,children:"Contact"})})]})})},d=t(5194),u=t(1464),f=t.n(u),h=function(e){var n=e.route;return(0,i.jsx)(a.E.h1,{className:"/"===n?f().SiteHeaderMain:f().SiteHeaderSub,layoutId:"title",children:"/"===n?(0,i.jsx)(d.Z,{options:{cursor:!1,lifeLike:!0},children:(0,i.jsx)(c.default,{href:"/",passHref:!0,children:"studio suzan schapendonk"})}):(0,i.jsx)(c.default,{href:"/",passHref:!0,children:"studio suzan schapendonk"})})},m={src:"/_next/static/media/divider.a49445ea.png",height:5,width:3970,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAABCAMAAADU3h9xAAAADFBMVEUAAAAAAAAAAAAAAAA16TeWAAAABHRSTlPE4exGj+j9GQAAAAlwSFlzAAALEwAACxMBAJqcGAAAABFJREFUCJljYGBiZGBgZGAGAAAjAAi1FtXfAAAAAElFTkSuQmCC"},p=t(3108),j=t.n(p),x=t(1163),b=t(2706),_=t.n(b),g=function(){var e=(0,x.useRouter)();return(0,i.jsx)("button",{className:_().Backbutton,onClick:function(){return e.back()},children:"Back"})},A={hidden:{opacity:0,y:0},enter:{opacity:1,y:0},exit:{opacity:1,y:"100vh"}},v=function(e){var n=e.children,t=e.title,c=e.description,l=e.canonical,d=e.route;return(0,i.jsxs)("div",{className:j().siteContainer,children:[(0,i.jsx)(r.PB,{title:t,description:c,canonical:l,openGraph:{title:t,description:c}}),(0,i.jsx)(h,{route:d}),(0,i.jsxs)("div",{className:j().topGradient+("/"===d?" "+j().invisible:""),children:[(0,i.jsx)("div",{className:j().lineContainer,children:(0,i.jsx)(s.default,{src:m,alt:"Divider",layout:"fill",objectFit:"contain",sizes:"100vw"})}),(0,i.jsx)(g,{})]}),(0,i.jsx)(o,{}),(0,i.jsx)(a.E.main,{initial:"hidden",animate:"enter",exit:"exit",variants:A,transition:{type:"linear",duration:2},className:j().mainBlock,children:n}),(0,i.jsx)("div",{className:j().bottomGradient+("/"===d?" "+j().invisible:""),children:(0,i.jsx)("div",{className:j().lineContainer,children:(0,i.jsx)(s.default,{src:m,alt:"Divider",layout:"fill",objectFit:"contain",sizes:"100vw"})})})]})}},6081:function(e,n,t){"use strict";var i=t(5893),r=(t(7294),t(5194)),a=t(1464),s=t.n(a);n.Z=function(e){var n=e.title;return(0,i.jsx)("h1",{className:s().PageHeader,children:(0,i.jsx)(r.Z,{options:{cursor:!1,lifeLike:!0},children:n})})}},2288:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSP:function(){return g}});var i=t(5893),r=t(7294),a=t(1664),s=t(5675),c=t(5935),l=t(7536),o=t(5657),d=t(9430),u=t.n(d),f=t(3673),h=t(6081),m=t(4460),p=t(2673),j=t(7753),x=t.n(j);function b(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function _(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},i=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),i.forEach((function(n){b(e,n,t[n])}))}return e}var g=!0;n.default=function(e){var n=(0,r.useState)("notsubmitted"),t=n[0],d=n[1],j=(0,r.useRef)(null),b=(0,l.cI)(),g=b.register,A=b.handleSubmit,v=(0,o.Z)({access_key:"43033dde-3dc7-45ab-95f8-0caf749ac36f",settings:{from_name:"Studio Suzan Schapendonk",subject:"Nieuw bericht via je Website"},onSuccess:function(e,n){d("sent"),console.log(e)},onError:function(e,n){d("notsubmitted"),console.log(e)}}).submit,y=(0,m.Lm)(),C=(0,r.useRef)(40);(0,r.useEffect)((function(){y>780&&(C.current=20),y>3e3&&(C.current=12)}),[y]);(0,r.useEffect)((function(){var e=function(e){d("sending")},n=j.current;return n&&n.addEventListener("submit",e),function(){n&&n.removeEventListener("csubmit",e)}}),[]);var S={replace:function(n){if(n.attribs&&"img"===n.name){var t=null,r=n.attribs.class.split(" "),l=Number(r[1].replace("wp-image-",""));l||(l=Number(r[2].replace("wp-image-","")));var o=(d=Object.values(e.pageData.acf),f=l,d.find((function(e){return e.id===f})));if(o)return t=function(e,n){var t=100*e.sizes["large-height"]/e.sizes["large-width"],r={width:"100%",paddingTop:"".concat(t,"%"),display:"block"};return(0,i.jsx)("span",{className:"alignright"===n?u().imageRight:u().imageLeft,children:(0,i.jsx)("span",{style:r,children:(0,i.jsx)(s.default,{alt:e.alt,src:e.sizes.large,layout:"fill",objectFit:"contain",sizes:"`${imageWidth.current}vw`"},"inline"+e.ID)})},"inline-image-"+e.ID)}(o,r[0]),t}var d,f;if(n.attribs&&"a"===n.name){if(0===n.attribs.href.indexOf("mailto:")){var h=n.attribs.href.replace("mailto:",""),m=h.replace("@","\x3c!-- no spam --\x3e@\x3c!-- no spam --\x3e");return(0,i.jsx)(p.G,{email:h,children:(0,i.jsx)("span",{dangerouslySetInnerHTML:{__html:"".concat(m)}})})}if(n.attribs.href.indexOf("http")<0)return(0,i.jsx)(a.default,{href:n.attribs.href,passHref:!0,children:(0,i.jsx)("a",{children:(0,c.du)(n.children)})})}}};return(0,i.jsx)(f.Z,{title:"Contact",route:"/contact",children:(0,i.jsx)("div",{className:u().container,children:(0,i.jsxs)("div",{children:[(0,i.jsx)(h.Z,{title:"Contact"}),e.pageData.content.rendered&&(0,c.ZP)(e.pageData.content.rendered,S),(0,i.jsxs)("div",{className:u().formContainer,children:["notsubmitted"===t||"sending"===t?(0,i.jsxs)("form",{ref:j,onSubmit:A(v),className:u()[t],children:[(0,i.jsxs)("label",{children:[(0,i.jsx)("span",{children:"Naam:"}),(0,i.jsx)("input",_({type:"text"},g("name",{required:"Vul je naam in",maxLength:80})))]}),(0,i.jsxs)("label",{children:[(0,i.jsx)("span",{children:"Email:"}),(0,i.jsx)("input",_({type:"email"},g("email",{required:"Vul je email in",pattern:{value:/^\S+@\S+$/i,message:"Voer een geldig emailadres in"}})))]}),(0,i.jsxs)("label",{children:[(0,i.jsx)("span",{children:"Bericht:"}),(0,i.jsx)("textarea",_({},g("message",{required:"Vul je bericht in"})))]}),(0,i.jsx)("button",{type:"submit",children:"Versturen"})]}):(0,i.jsx)("span",{className:u().messageSent,children:"Je bericht is verstuurd!"}),(0,i.jsx)(x(),{color:"#018387",loading:"sending"===t,cssOverride:{display:"block",margin:"-50% 50%",position:"relative",borderColor:"red"},size:3*C.current,"aria-label":"Loading Spinner","data-testid":"loader",className:u().spinner})]})]})})})}},2706:function(e){e.exports={Backbutton:"Backbutton_Backbutton__q4Y97"}},3108:function(e){e.exports={bottomGradient:"Layout_bottomGradient__E1aFt",invisible:"Layout_invisible__8T05C",mainBlock:"Layout_mainBlock__hPkCJ",lineContainer:"Layout_lineContainer__fBLdI",topGradient:"Layout_topGradient__i7T_O"}},1464:function(e){e.exports={SiteHeaderMain:"TypedHeader_SiteHeaderMain__QcEgm",SiteHeaderSub:"TypedHeader_SiteHeaderSub__YV0kW",PageHeader:"TypedHeader_PageHeader__t6pPQ"}},9430:function(e){e.exports={container:"Contact_container__IaB2F",sending:"Contact_sending__qbSNY",formContainer:"Contact_formContainer__KBUEV",messageSent:"Contact_messageSent__9l9bX",imageContainer:"Contact_imageContainer__Cwz8_",imageRight:"Contact_imageRight__F9qzz",imageLeft:"Contact_imageLeft__D0T75"}}},function(e){e.O(0,[663,537,935,175,774,888,179],(function(){return n=6849,e(e.s=n);var n}));var n=e.O();_N_E=n}]);