"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[1592],{95050:(t,e,o)=>{o.d(e,{Z:()=>u});var r=o(94809),i=o(67294),n=o(89034),a=o(79675),l=o(87077);const d=(0,r.default)("div",{target:"e1j92jav0"})("position:fixed;max-width:100%;background:",(t=>{let{background:e}=t;return e}),";border-radius:2px;z-index:11;border:1px solid rgba(0,0,0,0.2);box-shadow:0 0 30px 6px rgba(0,0,0,0.15);top:0;right:0;height:100%;&.partial-modal{top:50%;left:50%;width:100%;transform:translate(-50%,-50%);height:auto;max-width:500px;overflow:hidden;max-width:500px;}&.stick-to-bottom{top:unset;bottom:0;margin:auto;max-width:500px;transform:translateX(-50%);overflow:hidden;}"),s=(0,r.default)("div",{target:"e1j92jav1"})({name:"1oh9hm3",styles:"position:fixed;top:0;right:0;height:100%;width:100%;background-color:rgba(0,0,0,0.5);z-index:10;.hide-overlay{z-index:1;background-color:rgba(0,0,0,0);}"}),c=t=>{let{children:e,onHide:o,allowBackdropClick:r=!0,modalContentClass:c="",modalBackground:u="#fff",isVisible:h,isPartial:p,isStickBottom:m,contentStyle:g}=t;const[f,b]=(0,i.useState)(h);(0,i.useEffect)((()=>(document.body.classList.add(a._),()=>document.body.classList.remove(a._))),[]);const v=`${c} ${m?"stick-to-bottom":""} ${p?"partial-modal":""} `,x=f?"":"hide-overlay",y=r?()=>{b(!0),o()}:()=>{};return(0,l.tZ)(n.Z,null,(0,l.tZ)(d,{className:v,background:u,style:g},e),(0,l.tZ)(s,{className:x,onClick:y}))},u=(0,i.memo)(c)},89034:(t,e,o)=>{o.d(e,{Z:()=>d});var r=o(67294),i=o(73935);function n(t,e,o){return(e=function(t){var e=function(t,e){if("object"!=typeof t||null===t)return t;var o=t[Symbol.toPrimitive];if(void 0!==o){var r=o.call(t,"string");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==typeof e?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}let a;class l extends r.PureComponent{constructor(){super(...arguments),n(this,"state",{isMounted:!1}),n(this,"portalNode",void 0),n(this,"el",void 0)}render(){return!1===this.state.isMounted?null:(0,i.createPortal)(this.props.children,this.el)}componentDidMount(){this.el=document.createElement("div"),this.portalNode=(()=>{if(void 0!==a)return a;const t=document.getElementById("portal-root");if(null===t)throw new Error("Portal Element not Found");return a=t,a})(),this.portalNode.appendChild(this.el),this.setState({isMounted:!0})}componentWillUnmount(){this.portalNode.removeChild(this.el)}}const d=l},49512:(t,e,o)=>{o.r(e),o.d(e,{default:()=>f});var r=o(37703),i=o(46274),n=o(67294),a=o(15503),l=(o(29603),o(470));var d=o(52019),s=o(95050),c=o(87077);const u=d.Z.div`
  width: 100vw;
  height: 100%;
  min-height: 300px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`,h=d.Z.img`
  max-height: 375px;
  min-height: 300px;
`,p=d.Z.button`
  box-shadow: 0 1px 7px 0 rgba(0, 0, 0, 0.1), 0 -1px 7px 0 rgba(0, 0, 0, 0.1);
  border: 0;
  border-radius: 5px;
  background-color: ${t=>t.theme.brandPrimary};
  ${t=>{let{theme:e}=t;return e.typography.titleXSmall}};
  height: 50px;
  margin-top: 15px;
  padding: 10px 20px;
  max-width: 200px;
  height: 50px;
  color: #fff;
  width: 100%;
`,m=t=>{let{attributedTitle:e,imageUrl:o,onClose:r}=t;return(0,c.tZ)(s.Z,{onHide:()=>r()},(0,c.tZ)(u,null,(0,c.tZ)("div",null,(0,c.tZ)(h,{src:o})),(0,c.tZ)("div",{dangerouslySetInnerHTML:{__html:e}}),(0,c.tZ)(p,{onClick:()=>r()},"ok")))},g={changeData:t=>e=>{e({type:i.Z.VP_DATA_CHANGED,payload:t})},setError:function(){let t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],e=arguments.length>1?arguments[1]:void 0;return o=>{o({type:i.Z.VP_BLOCK_ERROR,payload:{message:e,flag:t}})}}},f=(0,r.$j)((t=>{const{VP:e,remoteConfig:o}=t;return{isBlocked:e.error,data:e.configs,vpEnabled:o.switches.vpEnabled,config:o.configs.VP}}),g)((t=>{let{isBlocked:e,changeData:o,data:r,setError:i,vpEnabled:d,config:s}=t;const u=(0,n.useCallback)((t=>{o(t)}),[o]);(0,n.useEffect)((()=>{d&&((t,e)=>{((t,e)=>{try{if(a.Z){a.Z.apps.length||a.Z.initializeApp(t||{});const o=a.Z.firestore();if(o){const r=(null==t?void 0:t.collection)||"nykaa-preprod",i=(null==t?void 0:t.doc)||"api_prioritization";o.collection(r).doc(i).onSnapshot((t=>{const o=t.data();e&&e(o)}))}}}catch(t){l.k.error(t,"Error in firebase listener")}})(t,e)})(s,u)}),[u,d,s]);const h=()=>{i(!1),window&&window.history&&window.history.back()};if(e){const{error_img_url:t,attributedTitle:e}=r;return(0,c.tZ)(m,{imageUrl:t,attributedTitle:e,onClose:h})}return(0,c.tZ)(n.Fragment,null)}))}}]);