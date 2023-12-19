"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[9019],{99627:(e,t,r)=>{r.r(t),r.d(t,{default:()=>Pr});var n=r(37703),o=r(55083),i=r(94809),a=r(67294),l=r(52019),s=r(16550),c=r(64549),u=r(95050),d=r(87077);const p=l.Z.iframe`
  height: 100vh;
  width: 400px;
  
`,g=()=>(0,d.tZ)(u.Z,{modalBackground:"transparent",onHide:()=>{}},(0,d.tZ)(p,{src:"/mobileCartIframe?ptype=customIframeCart"})),h=function(){return(0,d.tZ)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},(0,d.tZ)("path",{d:"M20.5 7.2H16.2V6.9C16.3 4.5 14.4 2.5 12 2.5C9.6 2.6 7.8 4.5 7.8 6.9V7.2H3.5C2.9 7.2 2.5 7.6 2.5 8.2V16.4C2.5 19.2 4.7 21.4 7.5 21.4H16.5C19.3 21.4 21.5 19.2 21.5 16.4V8.2C21.5 7.7 21.1 7.2 20.5 7.2ZM9.3 6.9C9.3 5.4 10.5 4.1 12 4C13.5 4.1 14.7 5.4 14.7 6.9V7.2H9.3V6.9ZM20 16.5C20 18.4 18.4 20 16.5 20H7.5C5.6 20 4 18.4 4 16.5V8.7H7.8V10.7C7.6 10.9 7.5 11.2 7.5 11.4C7.5 12 8 12.4 8.5 12.4C9 12.4 9.5 11.9 9.5 11.4C9.5 11.1 9.4 10.9 9.2 10.7V8.7H14.6V10.6C14.4 10.8 14.3 11.1 14.3 11.4C14.3 12 14.7 12.5 15.3 12.5C15.9 12.5 16.4 12.1 16.4 11.5C16.4 11.2 16.3 11 16.1 10.8V8.8H20V16.5Z",fill:"black"}))};var m=r(470),f=r(78756),y=r(16937),b=r(1107),v=r(32207);const x=l.Z.span`
  display: inline-block;
  width: 120px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .3);
  background-color: rgba(0, 0, 0, .7);
  color: #fff;
  text-align: center;
  border-radius: 4px;
  position: absolute;
  top: 30px;
  left: -13px;
  margin-left: -32px;
  ${e=>{let{theme:t}=e;return t.typography.bodySmall}};
  padding: 5px;

  &::after {
    content: '';
    position: absolute;
    bottom: 100%;
    right: 52px;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: transparent transparent rgba(0, 0, 0, .7) transparent;
  }
`,w=()=>{const[e,t]=(0,a.useState)(null),r=(0,a.useCallback)((()=>{var e;e=e=>{try{t(e)}catch(e){m.k.error(e,"error in gamooga call back")}},window.handleGamoogaCartNotification=(t,r)=>{if("string"!=typeof t&&"object"!=typeof r)return;const{GAMOOGA_NOTIFICATION_NOTIFICATION_DISPLAY_TIME_IN_SEC:n,GAMOOGA_NOTIFICATION_NOTIFICATION_ADDITIONAL_DISPLAY_TIME_IN_SEC:o}=r,i=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(r,["GAMOOGA_NOTIFICATION_NOTIFICATION_DISPLAY_TIME_IN_SEC","GAMOOGA_NOTIFICATION_NOTIFICATION_ADDITIONAL_DISPLAY_TIME_IN_SEC"]);e({str:t,params:i}),setTimeout((()=>{e(null)}),1e3*(n+o))}}),[]);return(0,a.useEffect)((()=>{r()}),[r]),e},Z=e=>{let{gamoogaCartNotification:t}=e;const r=null==t?void 0:t.str,n=r&&r.length>0;return(0,d.tZ)(a.Fragment,null,n&&(0,d.tZ)(x,{onClick:e=>{e.preventDefault(),e.stopPropagation(),(e=>{const{params:t}=e||{},{GAMOOGA_NOTIFICATION_UTM_SOURCE:r,GAMOOGA_NOTIFICATION_UTM_MEDIUM:n,GAMOOGA_NOTIFICATION_UTM_CAMPAIGN:o}=t||{};let i=f.L.CHECKOUT_PAGE;const a=[];if(r&&a.push(`${y.a.UTM_SOURCE}=${r}`),n&&a.push(`${y.a.UTM_MEDIUM}=${n}`),o&&a.push(`${y.a.UTM_CAMPAIGN}=${o}`),a.length>0){i+=`?${a.join("&")}`;const e=`${r}:${n}:${o}`;(0,b.AB)(v.n,{top_inapp_clicked_value_hit:e})}window.location.href=i})(t)}},r))};var C=r(52631);const S=l.Z.button`
  border: none;

  position: relative;
  margin-left: 10px;
  background: rgba(255, 255, 255, 0.5);
  cursor: pointer;

  .cart-count {
    ${e=>{let{theme:t}=e;return t.typography.bodySmall}};
    border-radius: 50%;
    margin: 0;
    position: absolute;
    width: 20px;
    height: 20px;
    top: -8px;
    right: -8px;
    bottom: auto;
    left: auto;
    text-align: center;
    background: ${e=>e.theme.brandPrimary};
    color: #fff;
  }
`,O=(0,n.$j)((e=>{const{auth:t,appReducer:r}=e;return{cartCount:t.user.cartItemsCount,isSliderOpen:r.isSliderOpen}}))((function(e){let{cartCount:t,isSliderOpen:r}=e;const o=(0,a.useRef)(!1),i=(0,s.k6)(),l=(0,n.I0)(),u=w(),{search:p}=i.location,m="1"===new URLSearchParams(p).get(C.PM),f=()=>{null!=u&&u.str&&(()=>{const{GAMOOGA_NOTIFICATION_UTM_CAMPAIGN:e,GAMOOGA_NOTIFICATION_UTM_MEDIUM:t,GAMOOGA_NOTIFICATION_UTM_SOURCE:r}=null==u?void 0:u.params,n=`${r}:${t}:${e}`;(0,b.AB)(v.n,{top_inapp_clicked_value_hit:n})})(),l((0,c.K2)())};return(0,a.useEffect)((()=>{!m||o.current||r||(l((0,c.K2)()),o.current=!0)}),[l,m,r]),window.parent.closeCart=f,(0,d.tZ)(S,{type:"button",onClick:f},(0,d.tZ)(h,null),(0,d.tZ)(Z,{gamoogaCartNotification:u}),t>0&&(0,d.tZ)("span",{className:"cart-count"},t),r&&(0,d.tZ)(g,null))}));var k=r(76861);const T=function(){return(0,d.tZ)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},(0,d.tZ)("path",{d:"M18.9 21.5001C19.2866 21.5001 19.6 21.1867 19.6 20.8001C19.6 20.4135 19.2866 20.1001 18.9 20.1001C18.5134 20.1001 18.2 20.4135 18.2 20.8001C18.2 21.1867 18.5134 21.5001 18.9 21.5001Z",fill:"#001325",fillOpacity:"0.92"}),(0,d.tZ)("path",{d:"M15.9 21.5001C16.2866 21.5001 16.6 21.1867 16.6 20.8001C16.6 20.4135 16.2866 20.1001 15.9 20.1001C15.5134 20.1001 15.2 20.4135 15.2 20.8001C15.2 21.1867 15.5134 21.5001 15.9 21.5001Z",fill:"#001325",fillOpacity:"0.92"}),(0,d.tZ)("path",{d:"M12.9 21.5001C13.2866 21.5001 13.6 21.1867 13.6 20.8001C13.6 20.4135 13.2866 20.1001 12.9 20.1001C12.5134 20.1001 12.2 20.4135 12.2 20.8001C12.2 21.1867 12.5134 21.5001 12.9 21.5001Z",fill:"#001325",fillOpacity:"0.92"}),(0,d.tZ)("path",{d:"M12 4C12.7 4 13.3 4.2 13.8 4.7C14.3 5.2 14.5 5.9 14.5 6.6V6.7C14.5 7.4 14.3 8.2 13.8 8.7C12.8 9.7 11.2 9.7 10.2 8.7C9.69998 8.2 9.39998 7.5 9.39998 6.8V6.7C9.29998 5.3 10.3 4.1 11.7 4C11.8 4 11.9 4 12 4ZM12 2.5C9.79998 2.5 7.99998 4.3 7.99998 6.5C7.99998 6.6 7.99998 6.6 7.99998 6.7V6.8C7.89998 9 9.59998 10.9 11.8 11C11.9 11 11.9 11 12 11C13.1 11 14.1 10.6 14.9 9.8C15.7 9 16.1 7.9 16 6.8V6.6C16 5.5 15.6 4.4 14.8 3.6C14.1 2.9 13 2.5 12 2.5Z",fill:"#001325",fillOpacity:"0.92"}),(0,d.tZ)("path",{d:"M9.79999 21.5002H5.79999C5.39999 21.5002 4.99999 21.3002 4.69999 21.0002C4.39999 20.7002 4.29999 20.2002 4.39999 19.8002C4.99999 15.4002 8.99999 12.4002 13.4 13.0002C16.2 13.4002 18.6 15.2002 19.7 17.8002C19.8 18.2002 19.6 18.6002 19.2 18.8002C18.8 18.9002 18.4 18.8002 18.3 18.4002C17 15.1002 13.2 13.4002 9.89999 14.7002C7.69999 15.6002 6.09999 17.6002 5.79999 20.0002H9.79999C10.2 20.0002 10.6 20.3002 10.6 20.8002C10.6 21.3002 10.2 21.5002 9.79999 21.5002Z",fill:"#001325",fillOpacity:"0.92"}))};var E=r(34616);const _=r.n(E)()((()=>r.e(6174).then(r.bind(r,76027))));var N=r(98240),I=r(32064),A=r(79675),P=r(72618),M=r(65415),L=r(77907);const j=P.z.label`
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  ${e=>{let{theme:t}=e;return t.typography.bodySmall}};
  color: ${e=>{let{theme:t}=e;return(0,L.oo)(t.colors.state)}};
  background: ${e=>{let{theme:t}=e;return t.colors.surface20}};
  min-height: 24px;
  text-align: center;
  &.text_only {
    padding: 5px 0 0;
    ${e=>{let{theme:t}=e;return t.typography.bodyLarge}};
  }
  width: 100%;
  height: 40px;
  

`,$=P.z.input`
  display: block;
  height: 24px;
  border: none;
  ${e=>{let{theme:t}=e;return t.typography.bodyLarge}};
  color: rgba(0, 19, 37, 0.92);
  background: transparent;
  margin: 5px 5px 5px 10px;

  &:focus {
    border: none;
    outline: none;
  }
  &.hidden {
    height: 0;
    margin: 0 5px 0 10px;
  }
`,R=P.z.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: red;
  ${e=>{let t="0",r="0",n="0",o="rgba(101, 119, 134, 0.08)",i="0";return e.error?(t="2px",o="#B60000",r="16px",n="16px",i="4px 4px 0 0"):e.focused&&!e.readOnly?(t="2px",o=e.theme.colors.primary):e.filled?t="2px":e.readOnly||(t="1px"),`\n      height: ${t};\n      left: ${r};\n      right: ${n};\n      background: ${o};\n      border-radius: ${i};\n    `}}
`,H=P.z.div`
position: absolute;
top: 10px;
right: 5px;
${e=>{let{theme:t}=e;return t.typography.subTitleSmall}};
color: ${e=>{let{theme:t}=e;return t.colors.primary}};

`,D=function(e){let{error:t,value:r,onValChange:n,label:o,readOnly:i,onFocus:l=(()=>{}),onBlur:s=(()=>{}),handleClick:c}=e;const[u,p]=(0,a.useState)(!1),g=(0,a.useCallback)((e=>{p(!0),l(e)}),[l]),h=(0,a.useCallback)((e=>{p(!1),s(e)}),[s]),m=u||!!r;return(0,d.tZ)(a.Fragment,null,(0,d.tZ)(j,{readOnly:!!i,error:t,className:m?"":"text_only"},!m&&o,(0,d.tZ)($,{className:m?"":"hidden",name:"mobileNumber",type:"tel",autoComplete:"off",readOnly:i,value:r,onChange:e=>n(e),onFocus:g,onBlur:h}),10==(null==r?void 0:r.toString().length)&&(0,d.tZ)(H,{onClick:()=>c()},"Send OTP"),(0,d.tZ)(R,{error:t,readOnly:i,filled:!!r,focused:m})))},G=function(){return(0,d.tZ)("svg",{width:"16",height:"12",viewBox:"0 0 16 12",fill:"none",xmlns:"http://www.w3.org/2000/svg"},(0,d.tZ)("path",{d:"M9.66667 0.166992L8.41667 1.41699L12.2253 5.22559H0.5V6.89225H12.2253L8.41667 10.7008L9.66667 11.9508L15.5586 6.05892L9.66667 0.166992Z",fill:"#E80071"}))},U=function(){return(0,d.tZ)("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},(0,d.tZ)("path",{d:"M19.089 10.2023C19.089 9.45486 19.0271 8.9094 18.8931 8.34375H10.1836V11.7175H15.2959C15.1929 12.5559 14.6363 13.8185 13.3994 14.667L13.3821 14.7799L16.1359 16.8706L16.3266 16.8893C18.0788 15.3034 19.089 12.97 19.089 10.2023Z",fill:"#4285F4"}),(0,d.tZ)("path",{d:"M10.1815 19.0908C12.6861 19.0908 14.7887 18.2827 16.3246 16.8888L13.3973 14.6665C12.614 15.2019 11.5626 15.5756 10.1815 15.5756C7.72842 15.5756 5.64639 13.9898 4.9042 11.7979L4.79542 11.8069L1.93198 13.9786L1.89453 14.0807C3.41997 17.0503 6.55336 19.0908 10.1815 19.0908Z",fill:"#34A853"}),(0,d.tZ)("path",{d:"M4.90539 11.7981C4.70955 11.2324 4.59622 10.6263 4.59622 10.0001C4.59622 9.37378 4.70955 8.76774 4.89508 8.20209L4.8899 8.08162L1.99057 5.875L1.89571 5.91922C1.267 7.15156 0.90625 8.53544 0.90625 10.0001C0.90625 11.4647 1.267 12.8485 1.89571 14.0809L4.90539 11.7981Z",fill:"#FBBC05"}),(0,d.tZ)("path",{d:"M10.1815 4.42433C11.9234 4.42433 13.0984 5.1617 13.7684 5.77791L16.3864 3.27283C14.7785 1.80818 12.6861 0.90918 10.1815 0.90918C6.55336 0.90918 3.41997 2.94958 1.89453 5.91927L4.8939 8.20214C5.64639 6.01022 7.72842 4.42433 10.1815 4.42433Z",fill:"#EB4335"}))};var F=r(50868),B=r(14762),z=r(46618);const q=()=>encodeURIComponent(`${window.location.pathname}${window.location.search}`),V=()=>{const e=`${f.L.AUTH_PAGE_VERIFY}&redirect=${q()}`;setTimeout((()=>{window.location.href=e}),500)},Y=()=>{let e="homePage",t=null;try{var r,n,o,i,a,l;return"undefined"!=typeof window&&window.localStorage&&(t=window.localStorage.getItem("CURRENT_URL"),null!==(r=t)&&void 0!==r&&r.includes("/p/")?e="productDetailPage":null!==(n=t)&&void 0!==n&&n.includes("/search/")||null!==(o=t)&&void 0!==o&&o.includes("/c/")?e="productListingPage":null!==(i=t)&&void 0!==i&&i.includes("/reviews/")?e="productReviewPage":null!==(a=t)&&void 0!==a&&a.includes("/widgetName/")?e="recoWidget":null!==(l=t)&&void 0!==l&&l.includes("/lp")&&(e="CMSPage")),e||""}catch(e){return""}},W=()=>{(0,I.$X)("2"),(0,F.AB)(B.$m,{loginType:B.Ro.PHONE_EMAIL,login_page:Y()}),V()},K=()=>{(0,I.$X)("3"),(0,F.AB)(B.$m,{loginType:B.Ro.GOOGLE,login_page:Y()}),(()=>{const e=`${f.L.AUTH_PAGE}&redirect=${q()}`;setTimeout((()=>{window.location.href=e}),500)})()};var Q=r(10978),X=r(64889),J=r(38170);const ee=P.z.div`
  position: absolute;
  top: 55px;

  z-index: 6;
  transform: translate(-50%, 0);
  background: #ffffff;
  padding: 20px;
  width: 320px;
  border-radius: 8px;
  box-shadow: 0px 8px 32px
    ${e=>{let{theme:t}=e;return(0,L.oo)(t.colors.textPrimary,.48)}};
  ::before {
    bottom: 100%;
    right: 30%;
    content: ' ';
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
    border: 10px solid hsla(0, 0%, 100%, 0);
    border-bottom-color: #fff;
    border-radius: 2px;
  }
`,te=P.z.div`
  display: flex;
  position: relative;
  flex-direction: column;
  margin-top: 4px;
  button {
    margin-top: 16px;
    text-align: left;
    display: flex;
    height: 40px;

    align-items: center;

    svg {
      margin-right: 5px;
    }
  }
`,re=P.z.div`
  margin: 8px 0;
  ${e=>{let{theme:t}=e;return t.typography.type241}}
  color: #000F1D;
`,ne=P.z.div`
  margin: 8px 0;

  ${e=>{let{theme:t}=e;return t.typography.bodyMedium}}
  color: ${e=>{let{theme:t}=e;return(0,L.oo)(t.colors.textPrimary,.64)}};
`,oe=P.z.span`
  ${e=>{let{theme:t}=e;return t.typography.bodySmall}}
  color: ${e=>{let{theme:t}=e;return(0,L.oo)(t.colors.textPrimary,.64)}};
  margin: 0 8px;
`,ie=P.z.div`
  height: 1px;
  background: ${e=>{let{theme:t}=e;return(0,L.oo)(t.colors.textPrimary,.16)}};
  flex: 1;
  margin-top: 8px;
`,ae=P.z.div`
  display: flex;
  margin: 16px 0 2px;
`,le=P.z.span`
  width: 100%;
  color: ${e=>{let{theme:t}=e;return(0,L.oo)(t.colors.textPrimary,.64)}};
`,se=P.z.div`
  position: absolute;
  right: 10px;
  svg {
    path {
      fill: ${e=>{let{theme:t}=e;return t.colors.primary}};
    }
  }
`,ce=e=>{let{toggleOverlay:t}=e;const r=(0,n.v9)((e=>e.appReducer.region)),o=(0,n.v9)((e=>(0,X.gi)(e,B.oG,"A"))),i=(0,Q.vT)(r.regionHeaderCountry),l=(0,I.is)(),s=(0,a.useRef)(null),[c,u]=(0,a.useState)("");(0,a.useEffect)((()=>{l&&u(l)}),[l]);(0,a.useEffect)((()=>{const e=()=>{window.pageYOffset>500&&t(!1)};return window.addEventListener("scroll",e),()=>{window.removeEventListener("scroll",e)}})),(0,a.useEffect)((()=>{(e=>{const t={pageName:"dweb:welcomeScreen",event:"auto_fill",phfill:e?1:0};(0,z.W)({autoFill:t})})(l||"")}),[l]);const p=e=>{var r;!s.current||null!==(r=s.current)&&void 0!==r&&r.contains(e.target)||t(!1)};return(0,a.useEffect)((()=>(document.addEventListener("click",p,!0),()=>{document.removeEventListener("click",p,!0)}))),(0,d.tZ)(ee,{ref:s,tabIndex:0},o?(0,d.tZ)(J.Z,{mobile:c,setValue:e=>u(e),isIndianUser:i}):(0,d.tZ)(a.Fragment,null,(0,d.tZ)(re,null,"Login / Create Account"),(0,d.tZ)(ne,null,"Register now and get ",(0,d.tZ)("b",null,"2000 Nykaa reward points instantly!")),l&&(0,d.tZ)(le,null,"Mobile number"),(0,d.tZ)(te,null,l&&i&&(0,d.tZ)(a.Fragment,null,(0,d.tZ)(D,{value:c,onValChange:e=>{const{value:t}=e.target,r=(null==t?void 0:t.replace(/\D/g,"").slice(0,10))||"";u(r)},autoComplete:"off",type:"tel",name:"mobileNumberNew",readOnly:!1,label:"10-digit mobile number",error:!1,handleClick:()=>(e=>{(0,z.W)({event:"send_otp_autoFill"}),(0,F.AB)(B.kn,{loginType:B.Ro.PHONE,login_page:Y()}),(0,I.n)(e),(0,I.$X)("1"),V()})(c)}),(0,d.tZ)(ae,null,(0,d.tZ)(ie,null),(0,d.tZ)(oe,null,"Or sign in using"),(0,d.tZ)(ie,null))),i?(0,d.tZ)(a.Fragment,null,(0,d.tZ)(M.ZP,{onClick:W,size:"medium",kind:"secondary",shape:"default"},"Sign in with Mobile / Email",(0,d.tZ)(se,null,(0,d.tZ)(G,null))),(0,d.tZ)(M.ZP,{onClick:K,size:"medium",kind:"secondary",shape:"default"},(0,d.tZ)(U,null),"Google",(0,d.tZ)(se,null,(0,d.tZ)(G,null)))):(0,d.tZ)(M.ZP,{onClick:W,size:"medium",kind:"secondary",shape:"default"},"Sign in with Mobile Number",(0,d.tZ)(se,null,(0,d.tZ)(G,null))))))},ue=(0,i.default)("div",{target:"euw1lbv0"})({name:"1t6rx6a",styles:"position:relative;display:flex;margin-right:20px;padding-bottom:8px;padding-top:8px;align-items:center;.dropDown_list{display:none;}&:hover{.dropDown_list{display:block;position:absolute;top:40px;left:50%;z-index:4;transform:translate(-50%,0);}}"}),de=(0,i.default)("div",{target:"euw1lbv1"})({name:"cud8se",styles:"background:transparent;border:none;display:flex;align-content:center;"}),pe=(0,i.default)("div",{target:"euw1lbv2"})({name:"jgrj0x",styles:"min-width:95px;&:hover{dropDown_list{display:none;}}"}),ge=(0,i.default)("button",{target:"euw1lbv3"})({name:"bw48aa",styles:"background:transparent;border:none;display:flex;align-content:center;cursor:pointer;"}),he=(0,i.default)("span",{target:"euw1lbv4"})({name:"17ukzrr",styles:"position:relative;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:inline-block;max-width:76px;vertical-align:bottom;cursor:pointer;"}),me=(0,i.default)("div",{target:"euw1lbv5"})({name:"12mp2ee",styles:".list{display:inline-block;list-style:none;padding:0;min-width:160px;background:#fff;border-radius:3px;z-index:12;box-shadow:-1px -1px 10px 0 #a8a8a8;width:225px;.list-item{display:flex;border-bottom:1px solid #f5f5f5;align-items:center;&:last-child{border-bottom:none;}}.link{display:block;padding:0 20px 0 5px;text-decoration:none;height:44px;line-height:44px;white-space:nowrap;color:#001325;opacity:92%;}::after{content:'';border-style:solid;border-width:6px;border-color:transparent;border-bottom-color:#fff;display:inline-block;position:absolute;top:-12px;left:47%;}}"});var fe=r(57860);const ye=(0,n.$j)((e=>{var t,r;const{auth:n,appReducer:o,remoteConfig:i}=e;return{email:n.user.email,isSmartLockActive:o.configFlags.isSmartLockActive,name:n.user.firstName,isPrive:n.user.isLoyal,isAutoSignUp:(0,fe.h)(null===(t=i.configs)||void 0===t||null===(r=t.AB)||void 0===r?void 0:r.autoFillSignUp,o.run),dataFetched:n.dataFetched}}))((function(e){let{email:t,isSmartLockActive:r,name:n,isAutoSignUp:o,dataFetched:i}=e;const[l,s]=(0,a.useState)(!1),[c,u]=(0,a.useState)(!1),p=(0,a.useRef)(null),g=!!t,h=(0,k.useTheme)(),m=()=>{const e=!l;e?document.body.classList.add(A._):document.body.classList.remove(A._),s(e)},f=()=>{g||!o?(m(),(0,I.C4)(B.NL.MYACCOUNT_LOGIN_BTN),(0,I.dM)()):u(!c)},y=()=>{g||(r?((0,I.C4)(B.NL.MYACCOUNT_LOGIN_BTN),(0,N.Z)().catch((()=>{f()}))):f())};(0,a.useEffect)((()=>{i&&o&&!g&&!(0,I.Hn)()&&((0,I.n3)(),u(!0))}),[o,g,i]);const b=n||"Account";return(0,d.tZ)(ue,null,!g&&o&&(0,d.tZ)(pe,null,(0,d.tZ)(M.ZP,{onClick:()=>y(),"aria-label":"Kebab menu",size:"medium",kind:"primary",shape:"default"},"Sign in")),!o&&!g&&(0,d.tZ)(de,{type:"button",onClick:()=>y(),"aria-label":"Kebab menu"},(0,d.tZ)(T,{onClick:()=>y()})),g&&(0,d.tZ)(ge,{type:"button",onClick:()=>y(),"aria-label":"Kebab menu"},(0,d.tZ)(T,{onClick:()=>y()})),c&&(0,d.tZ)(ce,{toggleOverlay:u}),(g||!o)&&(0,d.tZ)(he,{onClick:()=>y()},b),g&&(0,d.tZ)(me,{className:"dropDown_list",tabIndex:0,ref:p,textColor:h.darkGrey,onClick:e=>{e.target===e.currentTarget&&(e.preventDefault(),m())}},(0,d.tZ)("ul",{className:"list"},g&&(0,d.tZ)(_,{listItemClass:"list-item"}))))}));var be=r(67824);const ve=function(){const e=(0,k.useTheme)();return(0,d.tZ)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},(0,d.tZ)("g",{fill:"none",fillRule:"evenodd"},(0,d.tZ)("path",{fill:"#FFF",fillOpacity:"0",d:"M0 0h24v24H0z"}),(0,d.tZ)("path",{fill:e.brandPrimary,fillRule:"nonzero",d:"M6.783 2.837c1.286-1.015 3.155-.871 4.21.306.548.509.959 1.228 1.271 2.114.45-.892.983-1.591 1.633-2.041l.137-.096a3.192 3.192 0 014.196.626c1.088 1.302.967 3.227-.25 4.36-.128.127-.27.248-.424.361h2.362c.95.043 1.727.807 1.772 1.815l-.003 1.703c-.08.993-.927 1.747-1.887 1.71h-.074v6.039a1.723 1.723 0 01-1.49 1.634l-.147.013H6.539a1.72 1.72 0 01-1.649-1.796v-5.89c-.985.025-1.82-.733-1.89-1.785v-1.66c.017-.494.231-.96.595-1.295a1.816 1.816 0 011.295-.489h2.755c-.546-.316-.961-.674-1.252-1.069a3.134 3.134 0 01.233-4.427zm11.064 10.868H6.78v5.786h11.067v-5.786zm-12.958-3.35l-.002 1.451 14.912-.001.001-1.449-14.911-.001zM16.78 4.957A1.303 1.303 0 0015 4.75l-.146.11c-.392.327-.78.927-1.123 1.721-.111.258-.214.527-.308.802l-.13.403.26-.02c1.523-.132 2.497-.475 3.026-.938l.089-.083a1.302 1.302 0 00.112-1.788zm-7.229-.585a1.243 1.243 0 00-1.661.003c-.511.46-.552 1.247-.036 1.826l.081.102c.438.504 1.317.957 2.758 1.28l.219.046-.056-.32a11.227 11.227 0 00-.125-.575l-.11-.417c-.243-.834-.56-1.46-.973-1.85z"})))};var xe=r(34);const we=(0,i.default)("button",{target:"e3fiki50"})({name:"6gnkz",styles:"background:transparent;border:none;padding:0 4px;cursor:pointer;&:active{outline:none;}"}),Ze=(0,n.$j)((e=>{var t;const{remoteConfig:r,auth:n}=e,{active:o=!1,pinkBoxUrl:i}=(0,be.u)(null==r||null===(t=r.configs)||void 0===t?void 0:t.priceReveal),{user:{email:a}}=n;return{active:o,pinkBoxUrl:i,email:a}}))((function(e){let{active:t,pinkBoxUrl:r,email:n}=e;if(t&&r){const e=e=>{e.preventDefault(),(0,be.Re)({action:xe.ty.GO_TO_PINK_BOX,pageSource:xe.FB.HEADER}),setTimeout((()=>{n?window.location.href=r:(0,I.dM)()}),150)};return(0,d.tZ)(we,{type:"button",onClick:e},(0,d.tZ)(ve,null))}return null})),Ce=(0,i.default)("div",{target:"e1ewpqpu0"})({name:"1tny7j1",styles:"display:flex;align-items:center;margin-left:45px;"}),Se=(0,i.default)("div",{target:"e1ewpqpu1"})(""),Oe=()=>(0,d.tZ)(Ce,null,(0,d.tZ)(ye,null),(0,d.tZ)(Ze,null),(0,d.tZ)(Se,null,(0,d.tZ)(O,null)));var ke=r(48875),Te=r(40664),Ee=r(95813),_e=r(78963);const Ne=()=>(0,d.tZ)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},(0,d.tZ)("path",{d:"M21.54 19.97L16.3 14.73C17.36 13.44 17.99 11.79 17.99 9.99C17.99 5.85 14.64 2.5 10.5 2.5C6.35 2.5 3 5.85 3 9.99C3 14.13 6.35 17.48 10.49 17.48C12.29 17.48 13.94 16.84 15.23 15.79L20.47 21.03C20.62 21.18 20.81 21.25 21 21.25C21.19 21.25 21.38 21.18 21.53 21.03C21.83 20.74 21.83 20.26 21.54 19.97ZM10.49 15.98C7.19 15.98 4.5 13.29 4.5 9.99C4.5 6.69 7.19 4 10.49 4C13.79 4 16.48 6.69 16.48 9.99C16.48 13.3 13.8 15.98 10.49 15.98Z",fill:"black"}));var Ie=r(91922);const Ae="search-suggestions-nykaa",Pe=l.Z.form`
  padding: 0 18px 0 35px;
  align-items: center;
  width: 100%;
`,Me=l.Z.input`
  border: none;
  background: #f4f4f4;
  width: 100%;
  ${e=>{let{theme:t}=e;return t.typography.subTitleMedium}};
  &:focus {
    outline: none;
  }
`,Le=l.Z.button`
  border: none;
  background: transparent;
  position: absolute;
  border: none;
  background: transparent;
  top: 7px;
  align-items: center;

  svg {
    opacity: 48%;
  }
`,je=l.Z.button`
  border: none;
  background: transparent;
  position: absolute;
  border: none;
  background: transparent;
  top: 7px;
  align-items: center;
  right: 5px;
  cursor: pointer;
  height: 16px;
  width: 16px;
  svg {
    width: 100%;
    path {
      fill: #5c6874;
    }
  }
`,$e=l.Z.div`
  border: 1px solid rgba(151, 151, 151, 0.1);
  width: 100%;
  padding: 0 2%;
  display: flex;
  align-items: center;
  height: 40px;

  background: rgba(151, 151, 151, 0.1);
  transition: width 0.5s ease-in-out;
  position: relative;
  z-index: 10;
  border-radius: 4px;
  ${e=>{let{theme:t}=e;return t.typography.subTitleMedium}};
  &.active {
    width: 375px;
    border-color: ${e=>e.theme.brandPrimary};
  } 
`;var Re=r(19344),He=r(27483),De=r(61192),Ge=r(80155);function Ue(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Fe(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Ue(Object(r),!0).forEach((function(t){var n,o,i;n=e,o=t,i=r[t],(o=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==typeof t?t:String(t)}(o))in n?Object.defineProperty(n,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[o]=i})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Ue(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}const Be=e=>{const t=(0,ke.nO)(),r=[],n=[];return e.forEach((e=>{null!=t&&t.some((t=>{var r,n;return(null===(r=t.q)||void 0===r?void 0:r.toLowerCase())===(null===(n=e.q)||void 0===n?void 0:n.toLowerCase())}))?(e.icon=Te.qg.HISTORY,n.push(e)):r.push(e)})),[...n,...r]};function ze(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function qe(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ze(Object(r),!0).forEach((function(t){var n,o,i;n=e,o=t,i=r[t],(o=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==typeof t?t:String(t)}(o))in n?Object.defineProperty(n,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[o]=i})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ze(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}const Ve=async(e,t)=>{const r=(0,De.Gr)(De.Z6.SEARCH_SUGGESTIONS);try{const n={q:e};let o={};t&&(o.pro=t);const i=(0,Ge.nZ)(qe(qe({},n),o)),{data:{suggestions:a}}=await(0,He.Su)(`${r}${i}`,"get");if(!a)return Promise.reject({message:'"suggestions" not found in api -> data'});const l=a.map((e=>{let{image_base:t}=e;return Fe(Fe({},function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,["image_base"])),{},{imageBase:t})}));return{suggestions:Be(l),searchInput:e}}catch(e){throw m.k.error(e,"Error in Search suggestions API"),e}},Ye=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return t=>{t({type:Re.Z.UPDATE_SEARCH_FIELD,payload:e})}},We={fetchSearchSuggestion:(e,t)=>r=>e?Ve(e,t).then((e=>{const{searchInput:t,suggestions:n}=e;r({type:Re.Z.FETCH_SEARCH_SUGGESTION,payload:n,searchInput:t})})).catch((e=>{throw m.k.error(e,"Error in fetch search suggestions"),e})):new Promise((e=>{r({type:Re.Z.FETCH_SEARCH_SUGGESTION,payload:[]}),e()})),updateSearchField:Ye,initializeScreen:e=>t=>{t({type:Re.Z.SHOW_SCREEN,payload:e})}},Ke=(0,n.$j)((e=>{const{appReducer:t,remoteConfig:r,auth:n}=e;return{pageType:t.pageType,maxSearchHistoryCount:r.configs.maxSearchHistoryCount,isPro:n.user.isPro}}),We)((e=>{let{pageType:t,maxSearchHistoryCount:r,fetchSearchSuggestion:o,updateSearchField:i,isPro:l,initializeScreen:c,customClass:u}=e;const p=(0,a.useRef)(null),g=(0,a.useRef)(!1),h=(0,n.v9)((e=>{let{searchListingPage:t}=e;return t.searchTerm})),f=(0,n.v9)((e=>{let{searchSuggestions:t}=e;return t.searchField})),y=(0,s.TH)().search,b=new URLSearchParams(y).has(Te.fH),v=setTimeout((()=>""),0),x=(0,a.useRef)(v),w=(0,Ee.Z)((e=>{i(e),o(e,l)}),100);(0,a.useEffect)((()=>{if(null!=p&&p.current){const e=h||"";if(e&&b&&(null==g||!g.current))try{p.current.value=e,g.current=!0,w(e)}catch(e){m.k.error(e,'Parsing "search history"')}}}),[p,w,b,h]);const Z=e=>{c(e)},C=()=>{Z(!0)};return(0,a.useEffect)((()=>{var e;f!==(null==p||null===(e=p.current)||void 0===e?void 0:e.value)&&(p.current.value=f)}),[f]),(0,d.tZ)($e,{className:u},(0,d.tZ)(Le,{type:"submit"},(0,d.tZ)(Ne,null)),(0,d.tZ)(Pe,{onSubmit:e=>{e.preventDefault();const n=e.target.elements[Ae];if(n){const e=n.value;e&&(0,ke.K1)({page:t,searchQuery:e},r)}}},(0,d.tZ)(Me,{placeholder:_e.e,name:Ae,onChange:e=>{w(e.target.value)},autoComplete:"off",ref:p,onMouseDownCapture:C,onBlur:()=>{(null==p?void 0:p.current)!=document.activeElement&&(x.current=setTimeout((()=>{Z(!1)}),300))}})),f&&(0,d.tZ)(je,{type:"submit",onClick:()=>{var e;null!=x&&x.current&&clearTimeout(x.current),null!=p&&p.current&&(null===(e=p.current)||void 0===e||e.focus(),p.current.value=""),i(""),C()}},(0,d.tZ)(Ie.Z,null)))})),Qe=l.Z.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #ffffff;
  position: sticky;
  top: 0;
  height: 60px;
  z-index: 1;

  &.active {
    width: 375px;
  }
`,Xe=e=>{let{focused:t}=e;return(0,d.tZ)(Qe,{className:t?"active":""},(0,d.tZ)(Ke,{customClass:t?"active":""}))},Je=l.Z.div`
  width: 100%;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: ${e=>e.theme.darkGrey};
  margin: 0;
  border: none;
  padding: 10px;
  background: #fff;
  ${e=>{let{theme:t}=e;return t.typography.bodyMedium}};
  text-align: left;
  &:active {
    background: #e6e9eb;
  }
  &:hover {
    background-color: ${e=>e.theme.brandPrimaryRgba(.08)};
    span {
      &:before, &:after {
        content: none;
      }
    }
  }
  height: 37px;
  &.product {
    height: 56px;
  }
`,et=l.Z.span`
  margin-right: 10px;
  opacity: 0.48;
  height: 24px;
  width: 24px;
  display: flex;
    img {
      width:24px;
    }
`,tt=l.Z.span`
  width: 100%;
  color: #001325;
  &.multiline-elpisses {
    overflow: hidden;
    position: relative;
    line-height: 20px;
    max-height: 40px;
    margin-right: -1em;
    padding-right: 1em;
    &:before {
      content: "...";
      position: absolute;
      right: 15px;
      bottom: 0;
      background: #fff;
      width: 30px;
      padding-left: 3px;
    }
    &:after {
      content: "";
      position: absolute;
      right: 31px;
      width: 15px;
      height: 20px;
      margin-top: 0.2em;
      background: #fff;
    }
  }
`,rt=l.Z.span`
  margin-right: 5px;
  ${e=>{let{theme:t}=e;return t.typography.bodyMedium}};
  width: 100%;

  b {
    ${e=>{let{theme:t}=e;return t.typography.subTitleMedium}};
  }
`,nt=l.Z.span`
  ${e=>{let{theme:t}=e;return t.typography.bodySmall}};
  letter-spacing: 0.5px;
  color: #89929a;
  display: inline-block;
`,ot=l.Z.span`
  margin-left: auto;
    img {
      height: 35px;
      width: 35px;
      border: 1px solid #d8d8d8;
    }
`,it=function(e){let{suggestion:t,searchField:r,handleClick:n,index:o,searchSuggestionIcons:i}=e;const{q:a,image:l,subtext:s,icon:c}=t,u=l?75:85,p=s&&s.length>0?s.length:0,g=u-p,h=g-3;let m;m=0==p?a:(0,ke.c5)(a,g,h);const{partBefore:f,partMatching:y,partAfter:b,match:v}=(0,ke.Tj)(r,m),x=v?(0,d.tZ)(rt,null,f,(0,d.tZ)("b",null,y),b):a,w=l?"product":"";return(0,d.tZ)(Je,{key:a,className:`suggestionQuery ${w||""}`,"data-value":a,onClick:e=>{e.stopPropagation(),e.preventDefault(),n(t,o+1)}},(0,d.tZ)(et,null,(0,d.tZ)("img",{src:(Z=c,Z in i?i[Z]:i.query),alt:"icon"})),(0,d.tZ)(tt,{className:0==p?"multiline-elpisses":""},x,s&&(0,d.tZ)(nt,null," ",s," ")),(0,d.tZ)(ot,null,l&&(0,d.tZ)("img",{src:l,alt:"product"})));var Z},at=(0,i.default)("div",{target:"e80op0e0"})("display:flex;flex-direction:column;color:",(e=>{let{textColor:t}=e;return t}),";"),lt=function(e){let{suggestions:t,handleClick:r,searchField:n="",searchSuggestionIcons:o}=e;const i=(0,k.useTheme)();if(!(t&&t.length>0))return null;const a=(e,t)=>{r(e,t)};return(0,d.tZ)(at,{textColor:i.darkGrey},t.map(((e,t)=>{let{q:r}=e;return(0,d.tZ)(it,{key:r,handleClick:a,index:t+1,searchField:n,suggestion:e,searchSuggestionIcons:o})})))};var st=r(60086);const ct=l.Z.div`
  margin-top: 10px;
  background: #fff;
`,ut=(0,l.Z)(st.Z)`
  height: 55px;
  margin-bottom: 5px;
`,dt=function(e){let{items:t=4}=e;const r=new Array(t).fill(0);return(0,d.tZ)(ct,null,r.map(((e,t)=>{const r=`${e}-${t}`;return(0,d.tZ)(ut,{className:"client",key:r})})))},pt=l.Z.div`
  background-color: #ffffff;
  margin-top: 10px;
`,gt=l.Z.div`
  font-weight: bold;
  color: #fff;
  background: #636363;
  padding: 5px 10px;
  margin-bottom: 10px;
  line-height: normal;
  margin-top: 0;
  height: 29px;
`,ht=l.Z.li`
  width: 100%;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: ${e=>{let{textColor:t}=e;return t}};
  margin: 0;
  border: none;
  padding: 12px;
  background: #fff;
  text-align: left;
  &:active {
    background: #e6e9eb;
  }
  height: 37px;
  cursor: pointer;
  &:hover {
    background-color: ${e=>e.theme.brandPrimaryRgba(.08)};
  }

`,mt=l.Z.span`
  height: 24px;
  width: 24px;
  margin-right: 16px;
  opacity: 0.48;
  display: flex;
  flex-direction: row;
`,ft=l.Z.span`
  width: 100%;
  color: #001325;
  margin-right: 48px;
  ${e=>{let{theme:t}=e;return t.typography.bodyMedium}};
  letter-spacing: 0.2px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,yt=(0,n.$j)((e=>{const{searchSuggestions:t,remoteConfig:r}=e;return{trendingSearches:t.trendingSearches,trendingSearchesToShow:r.configs.trendingSearchesToShow,searchSuggestionIcons:r.configs.searchSuggestionIcons}}))((function(e){let{handleClick:t,trendingSearches:r,trendingSearchesToShow:n,searchSuggestionIcons:o}=e;const i=(0,k.useTheme)();if(n<1||r&&!(r.length>0))return null;const{trending:a}=o,l=r.slice(0,n);return(0,d.tZ)(pt,null,(0,d.tZ)(gt,null,"Trending Searches"),(0,d.tZ)("ul",null,l.map(((e,r)=>{const{q:n}=e;return(0,d.tZ)(ht,{className:"suggestionQuery","data-value":n,textColor:i.darkGrey,key:n,onClick:n=>{n.stopPropagation(),n.preventDefault(),t(e,r+1)}},(0,d.tZ)(mt,null,(0,d.tZ)("img",{src:a,alt:"trending icon"})),(0,d.tZ)(ft,null,n))}))))}));function bt(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function vt(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?bt(Object(r),!0).forEach((function(t){var n,o,i;n=e,o=t,i=r[t],(o=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==typeof t?t:String(t)}(o))in n?Object.defineProperty(n,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[o]=i})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):bt(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}const xt=l.Z.ul`
  background: #fff;
  z-index: 8;
`,wt=l.Z.li`
  text-decoration: none;
  color: ${e=>e.theme.darkGrey};
  &:active {
    background: #e6e9eb;
  }
  padding: 9px 9px 9px 12px;
  display: flex;
  flex-direction: row;
  height: 37px;
  cursor: pointer;
  &:hover {
    background-color: ${e=>e.theme.brandPrimaryRgba(.08)};
  }
`,Zt=l.Z.span`
  width: 24px;
  margin-right: 10px;
  display: flex;
  flex-direction: row;
  img {
    width: 24px; 
    margin-right: 10px;
    max-width: unset;
  }
`,Ct=l.Z.span`
  color: #001325;

  ${e=>{let{theme:t}=e;return t.typography.bodyMedium}};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,St=function(e){let{handleClick:t,searchSuggestionIcons:r}=e,n=[];const o=(0,ke.nO)(),{history:i}=r;return n=o&&o.length>0?o:[],n&&n.length>0?(0,d.tZ)(xt,null,n.map(((e,r)=>{const{q:n}=e;return(0,d.tZ)(wt,{className:"suggestionQuery","data-value":n,key:n,onClick:n=>{n.stopPropagation(),n.preventDefault(),((e,r)=>{e.listItemType=Te.qg.HISTORY;const n=vt(vt({},e),{},{id:null==r?void 0:r.toString()});t(n,r)})(e,r+1)}},(0,d.tZ)(Zt,null,(0,d.tZ)("img",{src:i,alt:"clock icon"})),(0,d.tZ)(Ct,null,n))}))):null};function Ot(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function kt(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Ot(Object(r),!0).forEach((function(t){var n,o,i;n=e,o=t,i=r[t],(o=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==typeof t?t:String(t)}(o))in n?Object.defineProperty(n,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[o]=i})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Ot(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}const Tt=l.Z.div`
  background: #ffffff;
  flex-direction: column;
  color: #3f414d;
  max-height: 547px;
  width: 375px;
  background-color: #fff;
  border: 1px solid #d3d3d3;
  border-top: 0;
  box-shadow: 0px 0px 67px -19px rgba(0,0,0,0.75);
  .activeSuggestion {
    background: rgba(252,39,121,0.08);
    .multiline-elpisses {
      &:before{
        background: rgb(251 238 244);
      }
      &:after{
        background: rgb(251 238 244);
      }
    }
  }
`,Et=l.Z.div`
  color: #fff;
  background: #636363;
  padding: 5px 10px;
  margin-bottom: 10px;
  margin-top: 0;
  height: 29px;
  ${e=>{let{theme:t}=e;return t.typography.subTitleMedium}};
`,_t={fetchTrendingSearches:()=>e=>(async()=>{const e=(0,De.Gr)(De.Z6.TRENDING_SEARCHES);try{const{data:{response:t}}=await(0,He.Su)(`${e}`,"get"),{trending:r}=t;return r||Promise.reject({message:'"trending" searches not found in api -> data'})}catch(e){throw m.k.error(e,"Error in Trending search API"),e}})().then((t=>{e({type:Re.Z.FETCH_TRENDING_SEARCHES,payload:t})})).catch((e=>{throw e})),resetSearch:()=>e=>{e({type:Re.Z.RESET_SEARCH})}},Nt=(0,n.$j)((e=>{const{searchSuggestions:t,remoteConfig:r,appReducer:n}=e,{productSuggestions:o=[],otherSuggestions:i=[],searchAutoSuggestions:a=[],searchField:l=""}=t;return{productSuggestions:o,otherSuggestions:i,searchAutoSuggestions:a,searchField:l,maxSearchHistoryCount:r.configs.maxSearchHistoryCount,trendingSearchesToShow:r.configs.trendingSearchesToShow,searchSuggestionIcons:r.configs.searchSuggestionIcons,showScreen:t.showScreen,pageType:n.pageType}}),_t)((e=>{let{pageType:t,searchField:r="",maxSearchHistoryCount:o,trendingSearchesToShow:i,searchSuggestionIcons:l,fetchTrendingSearches:s,resetSearch:c,showScreen:u,productSuggestions:p=[],otherSuggestions:g=[]}=e,[h,m]=(0,a.useState)(0);const f=(0,a.useRef)(!1),y=(0,n.I0)(),[b,v]=(0,a.useState)(!1),[x,w]=(0,a.useState)(!0);(0,a.useEffect)((()=>(i>0&&(v(!0),s().then((()=>{v(!1)}))),()=>{c()})),[s,c,i]);const Z=(e,n)=>{(0,ke.Fw)(e,o),(0,ke.R6)(e,t,r,n)},C=(0,a.useCallback)((e=>{let t=document.getElementsByClassName("suggestionQuery");const r=Object.values(t)||[],n=(null==r?void 0:r.length)&&h<(null==r?void 0:r.length)&&h>=0,o="ArrowDown"===e.code,i="ArrowUp"===e.code;var a,l,s,c,u;x&&(o||i)?(m(0),w(!1)):h<(null==r?void 0:r.length)-1&&o?m(++h):0!==h&&i&&m(--h),n&&(o||i)&&(Ye(null===(a=r[h])||void 0===a||null===(l=a.dataset)||void 0===l?void 0:l.value)(y),null===(s=r[h])||void 0===s||s.classList.add("activeSuggestion"),null===(c=r[h+1])||void 0===c||c.classList.remove("activeSuggestion"),null===(u=r[h-1])||void 0===u||u.classList.remove("activeSuggestion"))}),[h,x,y]);return(0,a.useEffect)((()=>(u?window.addEventListener("keydown",C):(w(!0),window.removeEventListener("keydown",C)),()=>{window.removeEventListener("keydown",C)})),[C,u]),(0,a.useEffect)((()=>{r?r&&(null!=g&&g.length||null!=p&&p.length)&&(f.current=!0):(e=>{e({type:Re.Z.FETCH_SEARCH_SUGGESTION,payload:[],searchInput:""})})(y),r||null!=g&&g.length||null!=p&&p.length||m(0)}),[y,null==g?void 0:g.length,null==p?void 0:p.length,r]),(0,a.useEffect)((()=>{null!=f&&f.current&&(null!=g&&g.length||null!=p&&p.length)&&(m(0),f.current=!1)}),[null==g?void 0:g.length,null==p?void 0:p.length]),(0,a.useEffect)((()=>{u||m(0)}),[u]),(0,d.tZ)(a.Fragment,null,(0,d.tZ)(Xe,{focused:u}),u?(0,d.tZ)(Tt,null,r.length?(0,d.tZ)(a.Fragment,null,(0,d.tZ)(lt,{handleClick:Z,suggestions:g,searchField:r,searchSuggestionIcons:l}),p&&(null==p?void 0:p.length)>0&&(0,d.tZ)(Et,null,"Popular Products"),(0,d.tZ)(lt,{handleClick:Z,suggestions:p,searchField:r,searchSuggestionIcons:l})):(0,d.tZ)(a.Fragment,null,(0,d.tZ)(St,{handleClick:Z,searchSuggestionIcons:l}),b&&(0,d.tZ)(dt,{items:i}),(0,d.tZ)(yt,{handleClick:(e,n)=>{const i=kt(kt({},e),{},{id:n.toString()});i.listItemType=Te.qg.TRENDING,(0,ke.Fw)(i,o),(0,ke.R6)(i,t,r,n)}}))):null)}));var It=r(95833),At=r(43122),Pt=r(99250);const Mt=l.Z.a`
  // background: url(https://adn-static1.nykaa.com/media/wysiwyg/HeaderIcons/NykaaLogoSvg.svg) no-repeat;
  display: inline-block;
  vertical-align: middle;
  height: 50px;
  line-height: 50px;
  width: 9.5%;
  background-size: cover;
  svg rect {
    fill: ${e=>{let{color:t}=e;return t}};
  }

  svg {
    vertical-align: middle;
  }


`,Lt=(0,n.$j)((e=>{const{appReducer:t,remoteConfig:r}=e;return{storeId:t.storeId,storeOptions:r.configs.storeOptions}}))((function(e){let{storeId:t,storeOptions:r}=e;const{stores:n}=r;if((e=>{const{status:t,stores:r}=e;return!!(t&&(null==r?void 0:r.length)>0)})(r)){const[e]=n.filter((e=>e.storeId===t));if(e){const{storeLogo:t}=e,r=(0,It.jS)({url:t,height:24});return(0,d.tZ)(Mt,{href:"/?root=logo",className:"logo",title:"logo"},(0,d.tZ)("img",{src:r,className:"logo-img",alt:"brand-logo"}))}}return(0,d.tZ)(Mt,{href:"/?root=logo",className:"logo",title:"logo"},"nykaa"==C.lz.MEN?(0,d.tZ)(Pt.Z,null):(0,d.tZ)(At.Z,null))}));var jt=r(96486),$t=r(78951);const Rt=l.Z.div`
  div {
    display: block;
  }
`,Ht=e=>{var t;let{tabs:r,map:n}=e;const[o,i]=(0,a.useState)(r&&(null===(t=r[0])||void 0===t?void 0:t.key)||"");if(!Array.isArray(r)&&!n)return(0,d.tZ)(a.Fragment,null," ");const l=n[o];return(0,d.tZ)("section",{className:"brandsCategoryBox"},(0,d.tZ)("div",{className:"BrandsCategoryHeading"},r.map((e=>(0,d.tZ)("a",{href:"/",key:`key_brand_tabs_header_${e.key}`,className:"brandHeadingbox "+(o===e.key?"current_active":""),onMouseOver:()=>i(e.key)},e.title)))),(0,d.tZ)("div",{className:"BrandsnameWrapper"},(0,d.tZ)(Rt,{className:"brand-content",dangerouslySetInnerHTML:{__html:l}})))},Dt=l.Z.a`
  && {
    color: rgba(3, 2, 26, 0.6);
    ${e=>{let{theme:t}=e;return t.typography.bodySmall}};
  }
  &: hover {
    color: ${e=>e.theme.brandPrimary};
  }
`,Gt=e=>{let{keys:t,onHover:r,active:n}=e;return(0,d.tZ)(a.Fragment,null,t.map((e=>(0,d.tZ)("li",{className:"Nav-item",key:`letter-${e}`,onMouseEnter:()=>r(e)},(0,d.tZ)(Dt,{className:"Nav-link "+(n===e?"active":""),rel:"a"},e)))))},Ut=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return["*",...Object.keys(e).filter((e=>1===e.length&&"#"!==e)),"#"]},Ft=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";if("object"!=typeof e||Array.isArray(e))return{};if(!t||"string"!=typeof t)return e;const r=t.replace(C.CQ,"").toLowerCase(),n={};return Object.keys(e).map((t=>{const o=e[t];if(!Array.isArray(o))return;const i=null==o?void 0:o.filter((e=>-1!==e.name.replace(C.CQ,"").toLowerCase().indexOf(r)));(null==i?void 0:i.length)>0&&(n[t]=i)})),n},Bt=l.Z.ul`
  padding-top: 0 !important;
`,zt=l.Z.button`
  background: #fff;
  border: none;
  position: absolute;
  right: 5px;
  height: 20px;
  width: 20px;
  top: 5px;
`,qt=l.Z.section`
  width: 360px;
  float: left;
  background: #fff;
  height: 510px;
  border-bottom-left-radius: 3px;
`,Vt=l.Z.div`
  width: 295px;
  // float: left;
  // height: 430px;
`,Yt=l.Z.div`
  ${e=>{let{theme:t}=e;return t.typography.type142}};
  color: rgba(3, 2, 26, 0.6);
  text-transform: uppercase;
  margin-bottom: 0;
  height: 68px;
  position: relative;
  border-bottom: none;
`,Wt=l.Z.div`
  line-height: 25px;
  position: relative;
  a {
    color: rgba(3, 2, 26, 0.6);
    &: hover {
      color: ${e=>e.theme.brandPrimary};
    }

  }
`,Kt=l.Z.div`
  margin-top: ${e=>{let{theme:t}=e;return t.spacing.spacing50}};
  padding-left: 18px;
  display: flex;
  position: relative;
  height: calc(85% - 10px);
  .brandsSorting {
    position: relative;
    width: 50px;
    text-align: center;
  }
  .ss-content {
    right: -20px;
  }
`,Qt=[{title:"Popular",key:"brands_Popular"},{title:"Luxe",key:"brands_Featured"},{title:"Only At Nykaa",key:"brands_Exclusive"},{title:"New Launches",key:"brands_Launches"}],Xt=(e,t)=>{const{request_path:r,name:n}=e||{};if(!t||!r)return"";let o="&";return r.indexOf("?")<=-1&&(o="?"),`/${r}${o}root=brand_menu,${"topbrands"===t?"top_brands":"brand_list"},${n}`},Jt=e=>{var t;let{data:r={}}=e;const[n,o]=(0,a.useState)(""),i=(0,a.useRef)(null),[l,s]=(0,a.useState)({}),c=(0,a.useRef)(!1),u=(0,a.useCallback)((0,jt.debounce)((()=>{var e;s(Ft(r,(null==i||null===(e=i.current)||void 0===e?void 0:e.value)||""))}),200),[i.current,r]);return(0,a.useEffect)((()=>{Object.keys(r).length&&c.current&&s(Ft(r,"")),c.current=!0}),[r,c]),!r||"object"!=typeof r||Array.isArray(r)?(0,d.tZ)(a.Fragment,null):(0,d.tZ)(Bt,{className:"hideArr normal-sub"},(0,d.tZ)("li",null,(0,d.tZ)(qt,{className:"allBrandsBox clearfix"},(0,d.tZ)("div",{className:"brandSearchWrapper"},(0,d.tZ)("div",{className:"brandSearchMain"},(0,d.tZ)("div",{className:"SearchIcon"}),(0,d.tZ)("input",{ref:i,type:"text",id:"brandSearchBox",placeholder:"search brands",onChange:u}),(null==i||null===(t=i.current)||void 0===t?void 0:t.value)&&(0,d.tZ)(zt,{className:"clear-search",onClick:()=>{null!=i&&i.current&&(i.current.value="",u())}},(0,d.tZ)($t.Z,null)))),(0,d.tZ)(Kt,null,(0,d.tZ)(Vt,{className:"brandsNameboxWrapper ss-container"},(0,d.tZ)("div",{className:"ss-wrapper"},(0,d.tZ)("div",{className:"ss-content desktop-header",id:"scroller-container"},l&&Object.keys(l).map((e=>(0,d.tZ)(a.Fragment,null,(0,d.tZ)(Yt,{id:`list_${e}`,key:`list_${e}`},e),Array.isArray(l[e])&&l[e].map((t=>(0,d.tZ)(Wt,{key:`fb-${t.name}`},(0,d.tZ)("a",{href:Xt(t,e)},t.name)))))))))),(0,d.tZ)("div",{className:"brandsSorting"},(0,d.tZ)(Gt,{keys:Ut(r),onHover:e=>((e,t)=>{const r="*"===e?"topbrands":e,n=document.getElementById(`list_${r}`);n&&(n.scrollIntoView(),t(r))})(e,o),active:n})))),(0,d.tZ)(Ht,{tabs:Qt,map:r})))},er=l.Z.ul`
  display: inline-block;
  vertical-align: middle;
  height: 62px;
  line-height: 62px;
  display: flex;
  padding 0 10px;
  .arrBox_h {
    bottom:19px;
    
  }

  & :hover {
    .arrBox_h {
      visibility: visible;
    }
  }
  li a{
    cursor:pointer;
    text-decoration: none;
  }
`,tr=l.Z.a`
  display: block;
  ${e=>{let{theme:t}=e;return t.typography.subTitleSmall}};
  line-height: inherit;
  text-transform: uppercase;
  color: #03021a;
  margin: 0 auto;
`,rr=l.Z.div`
  height: 100%;
  position: fixed;
  background: #00000059;
  top: 108px;
  left: 0;
  z-index: 4;
  right: 0;
  overflow: hidden;
  display: none;
`,nr=e=>{let{config:t,markUp:r,id:n}=e;return"html"===t.type&&r?"categories"===n?(0,d.tZ)("div",{dangerouslySetInnerHTML:{__html:r}}):(0,d.tZ)(er,{key:n,className:"HeaderNav",dangerouslySetInnerHTML:{__html:r},onMouseOut:()=>{lr(!1)},onMouseOver:()=>{lr(!0)}}):(0,d.tZ)(er,{key:n,className:"HeaderNav"},(0,d.tZ)("li",{id:n},(0,d.tZ)(tr,{href:t.value},t.title)))},or=()=>{let e=document.documentElement;var t=(window.pageYOffset||e.scrollTop)-(e.clientTop||0);t=t||0;const r=(document.getElementById("category")||{}).matches(":hover");t<60||r?ar(!1):t>60&&ar(!0)},ir=e=>{let{config:t,data:r={}}=e;return(0,a.useEffect)((()=>(document.addEventListener("scroll",or),()=>{document.removeEventListener("scroll",or)})),[]),(0,d.tZ)(a.Fragment,null,(0,d.tZ)(rr,{id:"black_layer"}),Object.keys(t).map((e=>"categories"===e?(0,d.tZ)(er,{key:e,className:"HeaderNav"},(0,d.tZ)("li",null,(0,d.tZ)(tr,{id:"category",href:"/"},e),(0,d.tZ)("div",{id:"category_arrowUp",className:"arrBox_h",style:{visibility:"visible"}}))):"brands"===e?(0,d.tZ)(er,{key:e,className:"HeaderNav",onMouseOut:()=>{lr(!1)},onMouseOver:()=>{lr(!0)}},(0,d.tZ)("li",null,(0,d.tZ)(tr,{href:"/"},e),(0,d.tZ)("div",{id:"brand_arrowUp",className:"arrBox_h"}),(0,d.tZ)(Jt,{data:r[e]}))):(0,d.tZ)(nr,{config:t[e],markUp:r[e]||"",id:e}))))},ar=e=>{document.getElementById("category_navigation").style.display=e?"none":"block",document.getElementById("category_arrowUp").style.visibility=e?"hidden":"visible"},lr=(e,t)=>{if(t)return document.getElementById("category").matches(":hover")?void ar(!1):void ar(!0);document.getElementById("category_arrowUp").style.visibility=e?"hidden":"visible",document.getElementById("black_layer").style.display=e?"block":"none"},sr={categories:{title:"categories",type:"html"},brands:{title:"brands",type:"html"},nykaaNetwork:{title:"",type:"html",value:""},popups:{title:"nykaa fashion",type:"html"},beautyAdvice:{title:"beauty advice",type:"html",value:""},style:{title:"",type:"html"}},cr={categories:{title:"categories",type:"html"},brands:{title:"brands",type:"html"},groomingAdvice:{title:"grooming advice",type:"url",value:"/grooming-advice"},style:{title:"",type:"html"}},ur=l.Z.div`
  width: 85%;
  ul > li > ul {
    display: none;
    width: 1140px;
    background: #ffffff;
    position: absolute;
    z-index: 7;
    left: 0;
    padding-top: 20px;
    margin-top: -12px;
    border-bottom-left-radius: 3px;
    border-bottom-right-radius: 3px;
  }
  ul:hover li ul {
    display: block;
  }
`,dr=l.Z.div`
  position: relative;
  z-index: 5;
  line-height: 62px;
  display: flex;
`,pr=l.Z.div`
  width: 25%;
  height: 40px;
  display: inline-block;
`,gr=l.Z.div`
  width: 65%;
  display: flex;
  flex-wrap: wrap;
`,hr=e=>{let{navigationData:t}=e;(0,a.useEffect)((()=>{setTimeout((()=>{const e=document.getElementsByClassName("MegaDropdownHeadingbox");e&&0!=e.length&&Array.from(e).forEach((function(e){e.addEventListener("mouseover",(e=>{if(!e.target||!e.target.getAttribute("data-link-name"))return;const t=document.getElementsByClassName("MegaDropdownHeadingbox");Array.from(t).forEach((function(e){const t=e.getAttribute("data-link-name"),r=document.querySelectorAll(t);r&&r[0]&&r[0].style&&(r[0].style.display="none"),e.classList.remove("current_active")})),e.target.classList.add("current_active");const r=e.target.getAttribute("data-link-name"),n=document.querySelectorAll(r);n&&n[0]&&n[0].style&&(n[0].style.display="block")}))}))}),2e3)}),[]);const r="nykaa"==C.lz.MEN?cr:sr;return(0,d.tZ)(a.Fragment,null,(0,d.tZ)(ur,{className:"megaMenu_main"},(0,d.tZ)(dr,{id:"headerMenu"},(0,d.tZ)(Lt,null),(0,d.tZ)(gr,null,(0,d.tZ)(ir,{config:r,data:t})),(0,d.tZ)(pr,null,(0,d.tZ)(Nt,null)))))},mr=e=>(0,d.tZ)(hr,e),fr=l.Z.div`
  width: 100%;

  ul > li > a {
    text-decoration: none;
  }
`,yr=l.Z.div`
  position: relative;
  z-index: 7;
  line-height: 62px;
  display: flex;
`,br=l.Z.div`
  background: #fff;
  position: relative;
  transition: all .3s ease-in-out;
  z-index: 2;

  .Addbdr {
    display: none;
  }
  .MegaDropdownHeading {
    display: flex;
  }
  .subMegaMenu_main {
    height: 50px;
  }
  transition: all .3s ease-in-out;
`,vr=l.Z.div`
  margin: 0 auto;
`,xr={categories:{title:"categories",type:"html"}},wr=e=>{var t;let{navigationData:r}=e;return(0,d.tZ)(a.Fragment,null,(0,d.tZ)(fr,{className:"megaMenu_main"},(0,d.tZ)(br,{id:"category_navigation"},(0,d.tZ)(vr,{className:"megaMenu_main subMegaMenu_main",id:"subheaderMenu"},r&&yr&&(0,d.tZ)(nr,{config:xr.categories,markUp:null===(t=r.categories)||void 0===t?void 0:t.categories,id:"categories"})))))},Zr=e=>(0,d.tZ)(wr,e),Cr=l.Z.div`
  position: relative;
  width: 100%;

  .rightDiv {
    width: 45%;
  }
`,Sr=l.Z.div`
  height: 40px;
`,Or=e=>{let{markup:t}=e;return t?(0,d.tZ)(Cr,{id:"offer-banner",dangerouslySetInnerHTML:{__html:t}}):(0,d.tZ)(Sr,null)},kr=(0,i.default)("header",{target:"e1e0j9zy0"})({name:"bxqdqd",styles:"position:relative;height:162px;"}),Tr=(0,i.default)("div",{target:"e1e0j9zy1"})({name:"1qef9x9",styles:"background:#fff;position:fixed;z-index:10;box-shadow:0 2px 3px 0 rgba(0,0,0,0.1);width:100%;left:0;right:0;"}),Er=(0,i.default)("div",{target:"e1e0j9zy2"})({name:"2o3va",styles:"padding-top:4px;display:flex;flex-direction:row;align-items:center;max-width:83.25em;margin:0 auto;"}),_r=(0,i.default)("div",{target:"e1e0j9zy3"})({name:"uhagyq",styles:"border-bottom:solid 1px #e6dede;width:100%;"}),Nr=e=>{const{navigationData:t,fetchNavigation:r}=e,n=(0,a.useCallback)((()=>{r()}),[r]);return(0,a.useEffect)((()=>{n()}),[n]),(0,d.tZ)(kr,null,(0,d.tZ)(Tr,{id:"header_id"},(0,d.tZ)(Or,{markup:null==t?void 0:t.topStrip}),(0,d.tZ)(_r,null,(0,d.tZ)(Er,null,(0,d.tZ)(mr,e),(0,d.tZ)(Oe,null))),(0,d.tZ)(Zr,e)))};Nr.displayName="Header";const Ir=(0,a.memo)(Nr),Ar={fetchNavigation:o.x},Pr=(0,n.$j)((e=>{const{navigation:t}=e;return{navigationData:t.menu}}),Ar)(Ir)},78951:(e,t,r)=>{r.d(t,{Z:()=>o}),r(67294);var n=r(87077);const o=function(e){let{height:t=24,width:r=24}=e;return(0,n.tZ)("svg",{xmlns:"http://www.w3.org/2000/svg",width:r,height:t,viewBox:"0 0 24 24"},(0,n.tZ)("path",{fill:"#8C8D94",d:"M12 0C5.379 0 0 5.379 0 12s5.379 12 12 12 12-5.379 12-12S18.621 0 12 0zm0 1.09A10.9 10.9 0 0122.91 12 10.9 10.9 0 0112 22.91 10.9 10.9 0 011.09 12 10.9 10.9 0 0112 1.09zM7.631 7.087a.546.546 0 00-.38.936L11.229 12 7.25 15.978a.546.546 0 10.771.771L12 12.771l3.978 3.978a.546.546 0 10.771-.771L12.771 12l3.978-3.978a.546.546 0 10-.771-.771L12 11.229 8.022 7.25a.546.546 0 00-.391-.165z"}))}},91922:(e,t,r)=>{r.d(t,{Z:()=>o}),r(67294);var n=r(87077);const o=function(e){return(0,n.tZ)("svg",Object.assign({width:24,height:24,viewBox:"0 0 24 24",fill:"none"},e),(0,n.tZ)("path",{d:"M20 5.6L18.4 4 12 10.4 5.6 4 4 5.6l6.4 6.4L4 18.4 5.6 20l6.4-6.4 6.4 6.4 1.6-1.6-6.4-6.4L20 5.6z",fill:"#001325",fillOpacity:.92}))}},43122:(e,t,r)=>{r.d(t,{Z:()=>o}),r(67294);var n=r(87077);const o=function(){return(0,n.tZ)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 250"},(0,n.tZ)("path",{xmlns:"http://www.w3.org/2000/svg",d:"M157.9 57.2c5-9.6-11.2-6.9-11.2-6.9-5.8 0-8.4 7-9.6 9l-17.5 34.5c-3.3 5.7-14.2 30.1-17.8 35.5-.3-5.5.1-16.5.2-19.1.7-10.4 1.4-18.3 2.5-27.8.8-7.4 2.4-15.7.9-23.1-1-4.6-2.5-4.9-9.1-5.6-6.9-.7-11.6 9.3-13.9 14-8.4 17.4-17.8 34.4-25.3 52.2-2.2 5.2-4.9 10.4-7.2 15.5-2.7 6.2-5.2 12.3-8.1 18.4-3.1 6.4-12.8 27.4-15.5 34-3 7.2-3.6 13 8.4 12.7 1.9 0 6.1.4 11.3-5.2 4.1-4.4 4.9-8.5 7.3-14.6 8.6-21.6 14.7-35.9 24.1-57.3.9-2.1 3-8.2 5.1-12.9-.1 6.7-1.2 14.7-1.7 20-1.6 19.4-2.7 38.1-4.4 57.3-.2 2.6-.9 5.7.3 8.1 1.2 2.4 4.2 3 6.6 3.3 9.6 1.2 10.6-3.6 13.6-10.2 2.7-5.9 4.3-10.7 6.7-16.7 7.4-18.5 15.2-36.8 23.8-54.8 2.2-4.6 4.4-9.1 6.8-13.6 4.4-8.3 8-16.1 12.8-25.3 3.6-6.6 7.1-14.1 10.9-21.4zm329.5 52.1c-1.1-11.1-16.3-5.5-25.4-3.8-3.4.6-13.9 2.6-26 4.9-.5-12.5-.3-10-.4-17.6-.3-11-.9-19.6-1.5-29.3-.4-6.1-1.3-14.6-12.3-13-12.8 1.8-14.9 8.2-18.3 15.9-8.9 20.1-8.6 20.2-18.7 42.6-.8 1.7-4.5 10.7-5.1 12.5-.4.1-1.2.3-2.2.6-4.1.9-9.1 2-14.6 3.2l.1-.5c1.3-10.2 2.9-20.4 4.3-30.6 1.3-9.3 2.7-24.5 3.8-33.8 1.2-10-10.4-9.8-10.4-9.8-7.1-.4-9.8 1.7-14.3 7.5-7.7 10-17 20.8-25.2 31.8-14.9 19.9-25.8 34.9-39.3 54.9-3.9 5.8-9.9 14.6-15.1 21.5-3.5-6.9-6.5-14.5-9.4-21.5-4.2-10-7.3-16.2-9.3-22.8-1.8-5.8.4-6.6 4.7-9.9 12.4-9.4 26.4-15.9 39.1-24.9 9-6.4 19.8-13.5 28.6-20.1 0 0 5.1-3 7.9-6.8 3.5-4.8-6.4-9.8-6.4-9.8-5.6-.9-8.7.4-12.6 2.2-4 1.8-9.2 5.9-12.6 8.6-7.5 5.8-17 12.7-24.4 18.5-9.1 7.1-15.3 11.5-25.3 17.4l25.4-38c8.3-10.7-13.7-13.7-22.1-2.4-7.8 10.1-13.1 19-19.2 28.2-14.7 21.9-26.8 44.9-38.9 69-4.6 9.2-9.1 18.8-13.3 28.3-2 4.6-7.9 15.2.2 16.3 17.3 2.2 20.1-6 24-15.9 6.4-16.3 8.5-19.3 12.6-29.4 4-9.8 6.9-15.4 11.4-23.8.1-.1 1.4-2.2 1.4-2.2.8 1.7 6.1 19.3 6.8 21.3 3.6 9.5 9.9 31.7 13.5 41.8 2.6 8.4 3.3 10.8 14.6 10.5 5.6-.1 8-2.3 11.7-9.3s19.7-36.8 19.7-36.8c4.8-.8 11.7-2 16.2-2.8.8-.1 2.6-.5 5.1-1 1.7-.2 3.1-.5 4.2-.8.1 0 .1 0 .2-.1 4.4-.9 10-2 16.1-3.2-1.1 5.5-4.5 17.6-5.2 20.7 0 0-7.4 28.8 2.2 30.3 6 .9 9.1-.1 9.1-.1 11.2-1.3 11.4-16.4 11.4-16.4l6.1-39.1c4.4-.9 8.8-1.8 13.1-2.6l-13.2 44.6c-1.9 6.3-3.3 14.4 8 14.4 9.2.5 9.8-5.3 9.8-5.3.2-.9 7.5-24.4 9.3-32.8 1.2-5.4 5.5-19.3 7.2-24.9 4.8-.9 8.4-1.6 10.1-1.9 2-.3 5.9-1 11-1.8-.1 5.2 0 12.4.1 13.4 1.1 15.8-.1 32.2 3.2 47.7.5 2.5 1.5 5.7 4.7 5.7 3.8 0 5-.4 9-.7 11.6-1 9.5-12.7 8.8-20.1-.8-8.2-1.6-15.1-2.7-23.3-.9-6.7-1.5-15.5-1.6-26.1v-.2c19-3.2 39.5-6.7 42.5-7.2 4.8-1.3 8.8-.9 7.8-11.9zm-148.5 21c0 .1-.1.1-.1.2-13.3 2.9-25.8 5.7-32.8 7.3 7-11.7 37.8-54.3 42.5-59.3-2.6 13.2-6.8 37.7-9.6 51.8zm76.8-16.8v.7c-6.4 1.2-12.4 2.4-17.2 3.3 6.1-15.8 12.5-35.2 16.3-45-.3 7.3 1.2 33.8.9 41zM229.2 66.4c2-3.7 6.5-11 .9-13.8-3.3-1.6-7.7-2.6-11.1-.9-2.8 1.5-4.9 4.4-6.3 7.1l-21.4 33.7c-3.5 4.8-6.8 10.8-13.9 11.6-4.7.5-8.1-1.5-8-5.7.1-4.3 2.6-10 4.5-13.7 5.6-10.6 6.3-14.2 11.7-24.7 5.2-10.1-11.8-12.4-16-5.1-3 5.2-8.8 15-10.1 18.3-2.4 6-20.4 34.6-12.6 45.9 10 12.8 36.6-7.4 23 15.9-11 18.7-17.9 29.4-27.5 46.7-2.1 3.7-4.7 7.4-5.4 11.8-1 6.2 7.5 6.1 11.2 5.9 6.5-.5 9.6-3.5 12.2-9.4 1.4-3.1 3.3-6.9 4.7-10 12.6-27.5 26-51.4 42.6-78 7.9-12.6 14.9-23.4 21.5-35.6z",fill:"#fc2779"}))}},99250:(e,t,r)=>{r.d(t,{Z:()=>o}),r(67294);var n=r(87077);const o=function(){return(0,n.tZ)("svg",{id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 97 54"},(0,n.tZ)("path",{d:"M43.07,3.43c.4-.74,1.31-2.23,.18-2.79-.66-.33-1.56-.53-2.24-.18-.57,.29-.99,.89-1.27,1.43l-4.34,6.82c-.7,.97-1.37,2.19-2.81,2.35-.95,.11-1.64-.3-1.63-1.15,.02-.86,.52-2.03,.91-2.77,1.13-2.14,1.27-2.87,2.37-5.01,1.04-2.04-2.39-2.5-3.24-1.03-.61,1.05-1.78,3.03-2.05,3.7-.49,1.21-4.12,6.99-2.54,9.29,2.03,2.59,7.42-1.49,4.66,3.22-2.22,3.78-3.61,5.94-5.56,9.44-.42,.76-.95,1.5-1.09,2.38-.2,1.25,1.52,1.24,2.26,1.19,1.32-.1,1.94-.7,2.47-1.9,.28-.62,.67-1.4,.95-2.02,2.56-5.57,5.27-10.39,8.63-15.79,1.58-2.54,3.01-4.74,4.34-7.21m-14.42-1.85c1-1.94-2.26-1.39-2.26-1.39-1.18,0-1.71,1.42-1.95,1.83l-3.55,6.98c-.67,1.15-2.86,6.08-3.61,7.18-.05-1.11,.01-3.34,.05-3.87,.14-2.11,.29-3.7,.51-5.63,.17-1.5,.49-3.18,.17-4.68-.19-.93-.5-1-1.84-1.14-1.39-.15-2.35,1.89-2.81,2.84-1.71,3.52-3.61,6.97-5.12,10.57-.44,1.05-1,2.09-1.45,3.14-.54,1.25-1.05,2.5-1.64,3.73-.63,1.3-2.59,5.54-3.14,6.88-.61,1.46-.73,2.63,1.7,2.57,.37-.01,1.23,.09,2.28-1.05,.82-.89,.99-1.72,1.48-2.95,1.75-4.37,2.96-7.27,4.87-11.59,.19-.43,.62-1.65,1.04-2.61-.02,1.35-.25,2.98-.34,4.05-.32,3.92-.55,7.71-.89,11.59-.05,.52-.19,1.15,.06,1.64,.25,.49,.84,.61,1.34,.68,1.95,.23,2.15-.73,2.75-2.07,.54-1.19,.87-2.16,1.35-3.37,1.49-3.74,3.08-7.45,4.82-11.08,.45-.93,.9-1.85,1.38-2.76,.88-1.68,1.62-3.26,2.59-5.12,.72-1.38,1.42-2.88,2.19-4.36m52.15,11.4s0,.09,0,.14c-1.29,.25-2.5,.48-3.47,.67,1.24-3.2,2.53-7.12,3.29-9.1-.06,1.46,.26,6.83,.19,8.29m-15.54,3.4s0,.02-.02,.04c-2.68,.59-5.22,1.16-6.63,1.47,1.42-2.36,7.64-10.98,8.6-11.99-.52,2.66-1.39,7.62-1.94,10.48m30.04-4.26c-.21-2.24-3.3-1.12-5.15-.77-.7,.13-2.82,.53-5.27,.99-.1-2.52-.05-2.02-.09-3.56-.05-2.23-.19-3.96-.31-5.93-.08-1.24-.25-2.94-2.49-2.63-2.58,.36-3.02,1.65-3.71,3.21-1.79,4.07-1.75,4.09-3.79,8.61-.15,.34-.91,2.17-1.03,2.52-.09,.02-.25,.07-.45,.12-.83,.18-1.85,.41-2.96,.66l.02-.11c.26-2.07,.59-4.13,.88-6.2,.26-1.89,.54-4.95,.76-6.84,.24-2.03-2.11-1.97-2.11-1.97-1.43-.09-1.99,.34-2.89,1.51-1.56,2.02-3.43,4.21-5.09,6.43-3,4.03-5.23,7.07-7.96,11.1-.79,1.17-2.01,2.96-3.06,4.34-.7-1.41-1.31-2.94-1.89-4.35-.84-2.01-1.47-3.27-1.89-4.61-.37-1.18,.07-1.34,.95-2,2.52-1.9,5.35-3.21,7.91-5.04,1.82-1.29,4.01-2.72,5.79-4.07,0,0,1.04-.61,1.6-1.38,.71-.98-1.29-1.98-1.29-1.98-1.12-.18-1.77,.08-2.55,.44-.81,.37-1.86,1.2-2.56,1.74-1.51,1.18-3.43,2.57-4.94,3.75-1.85,1.44-3.09,2.32-5.11,3.53l5.14-7.69c1.68-2.17-2.76-2.78-4.47-.5-1.58,2.05-2.64,3.84-3.89,5.7-2.98,4.44-5.42,9.08-7.86,13.96-.93,1.86-1.83,3.81-2.69,5.73-.41,.93-1.6,3.08,.05,3.29,3.5,.44,4.07-1.22,4.86-3.21,1.31-3.29,1.73-3.9,2.56-5.95,.8-1.98,1.39-3.12,2.3-4.81,.02-.03,.29-.45,.29-.45,.17,.34,1.23,3.91,1.38,4.3,.72,1.93,2.01,6.42,2.73,8.46,.52,1.69,.68,2.18,2.95,2.12,1.14-.03,1.63-.46,2.37-1.88,.74-1.43,4-7.45,4-7.45,.97-.17,2.36-.41,3.27-.57,.17-.03,.53-.1,1.03-.19,.33-.05,.63-.1,.85-.16,.01,0,.02,0,.04,0,.89-.17,2.01-.4,3.26-.64-.22,1.11-.92,3.56-1.04,4.19,0,0-1.5,5.83,.45,6.13,1.22,.18,1.84-.02,1.84-.02,2.28-.27,2.3-3.32,2.3-3.32l1.23-7.91c.9-.18,1.79-.35,2.64-.52l-2.67,9.02c-.38,1.28-.66,2.91,1.62,2.91,1.86,.1,1.99-1.08,1.99-1.08,.05-.18,1.52-4.94,1.89-6.65,.24-1.1,1.11-3.91,1.46-5.04,.98-.19,1.7-.32,2.05-.38,.4-.07,1.2-.2,2.22-.37-.01,1.04,0,2.51,.01,2.71,.22,3.19-.01,6.51,.64,9.66,.1,.5,.31,1.15,.95,1.15,.78,0,1-.07,1.82-.14,2.34-.2,1.92-2.58,1.77-4.08-.16-1.66-.32-3.06-.55-4.71-.19-1.36-.31-3.13-.33-5.28v-.03c3.83-.65,7.98-1.35,8.6-1.45,1.08-.18,1.89-.09,1.67-2.33",fill:"#013243"}),(0,n.tZ)("g",null,(0,n.tZ)("path",{d:"M16.95,34.14c.03-.22,.2-.42,.51-.42h.45c.23,0,.39,.11,.48,.28l6.2,13.3h.08l6.2-13.3c.08-.17,.23-.28,.48-.28h.45c.31,0,.48,.2,.51,.42l3.32,18.93c.08,.39-.14,.65-.51,.65h-2.56c-.25,0-.48-.22-.54-.42l-1.66-10.68h-.08l-4.93,11.07c-.06,.17-.23,.31-.48,.31h-.51c-.25,0-.39-.14-.48-.31l-4.99-11.07h-.08l-1.63,10.68c-.03,.2-.25,.42-.51,.42h-2.54c-.37,0-.59-.25-.54-.65l3.35-18.93Z",fill:"#013243"}),(0,n.tZ)("path",{d:"M37.44,52.99l8.76-18.96c.08-.17,.23-.31,.48-.31h.28c.28,0,.39,.14,.48,.31l8.68,18.96c.17,.37-.06,.73-.48,.73h-2.45c-.42,0-.62-.17-.82-.56l-1.38-3.04h-8.42l-1.38,3.04c-.11,.28-.37,.56-.82,.56h-2.45c-.42,0-.65-.37-.48-.73Zm12.17-6l-2.82-6.2h-.08l-2.76,6.2h5.66Z",fill:"#013243"}),(0,n.tZ)("path",{d:"M57.83,34.22c0-.28,.25-.51,.54-.51h.7l11.72,12.45h.03v-11.64c0-.28,.23-.53,.53-.53h2.59c.28,0,.53,.25,.53,.53v18.96c0,.28-.25,.51-.53,.51h-.68l-11.78-12.93h-.03v12.11c0,.28-.23,.54-.54,.54h-2.56c-.28,0-.54-.25-.54-.54v-18.96Z",fill:"#013243"})))}},95050:(e,t,r)=>{r.d(t,{Z:()=>d});var n=r(94809),o=r(67294),i=r(89034),a=r(79675),l=r(87077);const s=(0,n.default)("div",{target:"e1j92jav0"})("position:fixed;max-width:100%;background:",(e=>{let{background:t}=e;return t}),";border-radius:2px;z-index:11;border:1px solid rgba(0,0,0,0.2);box-shadow:0 0 30px 6px rgba(0,0,0,0.15);top:0;right:0;height:100%;&.partial-modal{top:50%;left:50%;width:100%;transform:translate(-50%,-50%);height:auto;max-width:500px;overflow:hidden;max-width:500px;}&.stick-to-bottom{top:unset;bottom:0;margin:auto;max-width:500px;transform:translateX(-50%);overflow:hidden;}"),c=(0,n.default)("div",{target:"e1j92jav1"})({name:"1oh9hm3",styles:"position:fixed;top:0;right:0;height:100%;width:100%;background-color:rgba(0,0,0,0.5);z-index:10;.hide-overlay{z-index:1;background-color:rgba(0,0,0,0);}"}),u=e=>{let{children:t,onHide:r,allowBackdropClick:n=!0,modalContentClass:u="",modalBackground:d="#fff",isVisible:p,isPartial:g,isStickBottom:h,contentStyle:m}=e;const[f,y]=(0,o.useState)(p);(0,o.useEffect)((()=>(document.body.classList.add(a._),()=>document.body.classList.remove(a._))),[]);const b=`${u} ${h?"stick-to-bottom":""} ${g?"partial-modal":""} `,v=f?"":"hide-overlay",x=n?()=>{y(!0),r()}:()=>{};return(0,l.tZ)(i.Z,null,(0,l.tZ)(s,{className:b,background:d,style:m},t),(0,l.tZ)(c,{className:v,onClick:x}))},d=(0,o.memo)(u)},89034:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(67294),o=r(73935);function i(e,t,r){return(t=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}let a;class l extends n.PureComponent{constructor(){super(...arguments),i(this,"state",{isMounted:!1}),i(this,"portalNode",void 0),i(this,"el",void 0)}render(){return!1===this.state.isMounted?null:(0,o.createPortal)(this.props.children,this.el)}componentDidMount(){this.el=document.createElement("div"),this.portalNode=(()=>{if(void 0!==a)return a;const e=document.getElementById("portal-root");if(null===e)throw new Error("Portal Element not Found");return a=e,a})(),this.portalNode.appendChild(this.el),this.setState({isMounted:!0})}componentWillUnmount(){this.portalNode.removeChild(this.el)}}const s=l},32207:(e,t,r)=>{r.d(t,{n:()=>a,v:()=>i});var n=r(52631);const o={[n.lz.NYKAA]:{[n.ST.GUEST]:[{link:"https://www.nykaa.com/gateway-api/omsApis/helpCenter?domain=NYKAA",displayText:"Need Help?"},{link:"/authenticity-nykaa-guarantee?intcmp=hp,header,1,authenticity",displayText:"Authenticity"},{link:"/nykaa-csr",displayText:"Nykaa CSR"},{link:"/responsible-disclosure",displayText:"Responsible Disclosure"}],[n.ST.LOGGED_IN]:[{link:"/sales/order/history/v2?ptype=myOrder",displayText:"Orders"},{link:"/myProfile",displayText:"Profile"},{link:"/nykaaWallet/add/?ptype=nykaaWallet",displayText:"Wallet"},{link:"/wishlist/",displayText:"Wishlist"}]},[n.lz.MEN]:{[n.ST.GUEST]:[{link:"https://www.nykaaman.com/gateway-api/omsApis/helpCenter?domain=NYKAA_MEN",displayText:"Need Help?"},{link:"/giftcard/list",displayText:"Gift Cards"},{link:"/responsible-disclosure",displayText:"Responsible Disclosure"}],[n.ST.LOGGED_IN]:[{link:"/sales/order/history/v2?ptype=myOrder",displayText:"My Orders"},{link:"/myProfile",displayText:"My Profile"},{link:"/nykaaWallet/add/?ptype=nykaaWallet",displayText:"My Wallet"},{link:"/wishlist/",displayText:"My Wishlist"}]}},i=()=>o.nykaa,a="top_inapp_clicked"},17389:(e,t,r)=>{r.d(t,{Z:()=>o});var n=function(e){return e.PRODUCT="product",e.CATEGORY="category",e.SEARCH_SUGGESTION="searchSuggestions",e.LISTING="listing",e.HOME="home",e.SEARCH_LISTING="searchListing",e.FITCODE="fitcode",e.WISHLIST="wishlist",e}(n||{});const o=n},78963:(e,t,r)=>{r.d(t,{A:()=>o,e:()=>n});const n=`Search on ${(0,r(22428).k)("nykaa")}`,o="Your Email"},40664:(e,t,r)=>{r.d(t,{CA:()=>i,Gx:()=>n,M5:()=>a,Vt:()=>l,Wq:()=>c,fH:()=>s,qg:()=>o});const n={PRODUCT:"product",BRAND:"brand"},o={MISCELLANEOUS:"Misc",POPULAR_PRODUCTS:"Popular Products",HISTORY:"history",TRENDING:"trending",MANUAL:"Manual",RECENT_SEARCH_LIST_ITEM:"RECENT_SEARCH_LIST_ITEM",QUERY:"query",BUYING_GUIDE:"buying_guide"},i="search",a=",brand_menu,brand_list,",l="RECENT_SEARCH_LIST",s="q",c="LAST_VISITED_SEARCH_PAGE"},64889:(e,t,r)=>{r.d(t,{gi:()=>o});var n=r(88363);const o=(e,t,r)=>{var o;const i=(null===(o=e.remoteConfig.switches)||void 0===o?void 0:o.experimentV2Enabled)||!1,{isEligible:a,variant:l}=(0,n.BZ)(e,t);return!(!i||!a||l!==r)}},48875:(e,t,r)=>{r.d(t,{Fw:()=>h,K1:()=>y,R6:()=>d,Tj:()=>p,c5:()=>g,nO:()=>m,zJ:()=>f});var n=r(25203),o=r(80155),i=r(17389),a=r(78756),l=r(470),s=r(40664);function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){var n,o,i;n=e,o=t,i=r[t],(o=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==typeof t?t:String(t)}(o))in n?Object.defineProperty(n,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[o]=i})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t,r,n){var l;const{q:c,type:u,url:d,listItemType:p}=e;let g=d;const h=new URLSearchParams;let m=s.qg.MISCELLANEOUS;u===s.Gx.PRODUCT?m=s.qg.POPULAR_PRODUCTS:u===s.qg.TRENDING&&(m=s.qg.TRENDING),p===s.qg.TRENDING&&(m=s.qg.TRENDING),p===s.qg.HISTORY&&(m=s.qg.HISTORY);let f=s.CA;u===s.Gx.BRAND&&(f=`${f}${s.M5}${c}`,0!==g.indexOf("/")&&(g=`/${g}`)),h.append("root",f),g.indexOf("searchType")>-1&&(g=g.replace(/searchType.*&/,""),g=g.replace(/searchType.*$/,"")),h.append("searchType",m),h.append("suggestionType",u),n&&h.append("ssp",n.toString()),r&&h.append("tst",r),h.append("searchItem",c),h.append("sourcepage",t||i.Z.SEARCH_SUGGESTION),(null===(l=g)||void 0===l?void 0:l.indexOf(a.L.SEARCH_RESULTS))>-1||h.append("searchRedirect","1");let y="";h.forEach(((e,t)=>{y+=`${t}=${e}&`}));const b=(0,o.HQ)(g,y);window.location.href=b}const p=(e,t)=>{const r=e.toLowerCase(),n=t,o=r.length,i=n.toLowerCase().indexOf(r);return i<0?{match:!1}:{partBefore:n.substr(0,i),partMatching:n.substr(i,o),partAfter:n.substr(i+o),match:!0}},g=(e,t,r)=>e.length>t?e.substring(0,r)+"...":e;function h(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;const r=u(u({},e),{},{listItemType:s.qg.RECENT_SEARCH_LIST_ITEM});try{const e=n.D.getItem(s.Vt);let o=[];if(e)try{o=JSON.parse(e)}catch(e){l.k.error(e,'Parsing "search history"')}const i=o.filter((e=>{const{q:t}=e,{q:n}=r;return!t||!n||t.toLowerCase()!==n.toLocaleLowerCase()}));o=[r,...i],o.length>t&&o.pop(),n.D.setItem(s.Vt,JSON.stringify(o))}catch(e){l.k.error(e,"CONTEXT: handleSearchSuggestionForHistory")}}const m=()=>{try{const e=n.D.getItem(s.Vt);if(e)return JSON.parse(e)}catch(e){l.k.error(e,"getSearchHistory")}return[]},f=e=>{const t=m();if((null==t?void 0:t.length)>0){const r=t.filter((t=>{var r;return(null===(r=t.q)||void 0===r?void 0:r.toLowerCase())!==(null==e?void 0:e.toLowerCase())}));localStorage.setItem(s.Vt,JSON.stringify(r))}},y=(e,t)=>{let{page:r,searchQuery:n}=e;const l=encodeURIComponent(n);let c=(0,o.HQ)(a.L.SEARCH_RESULTS,`q=${l}`);const u=new URLSearchParams;u.append("root",s.CA),u.append("searchType",s.qg.MANUAL),u.append("sourcepage",r||i.Z.SEARCH_SUGGESTION);const d=u.toString();c=(0,o.HQ)(c,d),h({q:n,type:s.qg.QUERY,url:c},t),window.location.href=c}},22428:(e,t,r)=>{r.d(t,{k:()=>n});const n=e=>"string"!=typeof e||e.length<2?"":e.charAt(0).toUpperCase()+e.slice(1)},57860:(e,t,r)=>{r.d(t,{h:()=>n});const n=(e,t)=>{const{status:r,userPercentage:n}=e||{};return!!(r&&t<=n)}}}]);