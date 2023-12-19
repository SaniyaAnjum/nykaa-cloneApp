(()=>{"use strict";var e,t,n,r="web.v3-pixel.cpv",a={},o={MF_FLAG:"visit",MODE:"LOCAL",COOKIE_STATUS:1,END_POINT_URL:"https://wafs.mfilterit.net/send/v3/",TRACK_BEHAVIOR:1,TRACK_BEHAVIOR_LIMIT:5,TRACK_BEHAVIOR_INTERVAL:3,NOT_AVAILABLE:"None",SRC_TAG_ID:"mfilterit-visit-tag",ERROR:"error",EXCLUDED:"excluded",WARNING:"warning",NOT_SUPPORTED:"Not supported",CUSTOMISE_ERROR:"error: insert package name",preprocessor:null,audio:{timeout:10,excludeIOS11:!0},fonts:{swfContainerId:"mf2",swfPath:"flash/compiled/FontList.swf",userDefinedFonts:[],extendedJsFonts:!1},screen:{detectScreenOrientation:!0},extraComponents:[],excludes:{enumerateDevices:!0,pixelRatio:!0,doNotTrack:!0,fontsFlash:!0},flashFonts:{SWF_OBJECT_NOT_LOADED:"swf object not loaded",FLASH_NOT_INSTALLED:"flash not installed",MISSING:"missing flash/compiled/FontList.swf"}};try{if(window&&window.mf&&window.mf.q)for(var i=window.mf.q,c=0;c<i.length;c++){var u=i[c][1];"undefined"!=u&&null!=u||(u=o.NOT_AVAILABLE),"mf_package_name"==i[c][0]?r=u:"mf_tracking_type"==i[c][0]?e=u:a["mf_custom_"+i[c][0]]=u}else a.mf_custom_NA=o.NOT_AVAILABLE}catch(e){a.mf_custom_error=o.ERROR}function s(){try{return"location"in window?window.location.href:o.NOT_AVAILABLE}catch(e){return o.ERROR}}function l(e){try{var t=s(),n=new RegExp("[?&#]"+e+"=([^&#]*)","i").exec(t);return n?n[1]:o.NOT_AVAILABLE}catch(e){return o.ERROR}}function d(){try{var e=Math.floor(Math.random()*Math.pow(2,32));if(window&&window.crypto&&window.crypto.getRandomValues&&Uint32Array){var t=new Uint32Array(1);self.crypto.getRandomValues(t),e=t[0]}return e.toString(36)+"."+(new Date).getTime().toString()}catch(e){return o.ERROR}}function m(e){try{var t=document.cookie.match("(^|;) ?"+e+"=([^;]*)(;|$)");return t=t?t[2]:"None",decodeURIComponent(t)}catch(e){return o.ERROR}}function h(e,t,n){try{var r=new Date,a="";if(1==o.COOKIE_STATUS&&navigator.cookieEnabled&&"monthlyuser"==e){r.setTime(r.getTime()+2592e6),a="expires="+r.toGMTString();try{document.cookie=encodeURIComponent(t)+"="+encodeURIComponent(n)+"; "+a+"; path=/"}catch(e){}}}catch(e){return o.ERROR}}function f(){try{return"localStorage"in window?!!window.localStorage:o.NOT_AVAILABLE}catch(e){return o.ERROR}}function g(){try{var e=document.createElement("canvas");return!(!e.getContext||!e.getContext("2d"))}catch(e){return o.ERROR}}(n=m("mfKey"))==o.NOT_AVAILABLE&&(n=d()),h("monthlyuser","mfKey",n),t=function(e){try{return e+"."+d()}catch(e){return o.ERROR}}(r);var p=function(e,t){e=[e[0]>>>16,65535&e[0],e[1]>>>16,65535&e[1]],t=[t[0]>>>16,65535&t[0],t[1]>>>16,65535&t[1]];var n=[0,0,0,0];return n[3]+=e[3]*t[3],n[2]+=n[3]>>>16,n[3]&=65535,n[2]+=e[2]*t[3],n[1]+=n[2]>>>16,n[2]&=65535,n[2]+=e[3]*t[2],n[1]+=n[2]>>>16,n[2]&=65535,n[1]+=e[1]*t[3],n[0]+=n[1]>>>16,n[1]&=65535,n[1]+=e[2]*t[2],n[0]+=n[1]>>>16,n[1]&=65535,n[1]+=e[3]*t[1],n[0]+=n[1]>>>16,n[1]&=65535,n[0]+=e[0]*t[3]+e[1]*t[2]+e[2]*t[1]+e[3]*t[0],n[0]&=65535,[n[0]<<16|n[1],n[2]<<16|n[3]]},_=function(e,t){return 32==(t%=64)?[e[1],e[0]]:t<32?[e[0]<<t|e[1]>>>32-t,e[1]<<t|e[0]>>>32-t]:(t-=32,[e[1]<<t|e[0]>>>32-t,e[0]<<t|e[1]>>>32-t])},T=function(e,t){return[e[0]^t[0],e[1]^t[1]]},A=function(e,t){e=[e[0]>>>16,65535&e[0],e[1]>>>16,65535&e[1]],t=[t[0]>>>16,65535&t[0],t[1]>>>16,65535&t[1]];var n=[0,0,0,0];return n[3]+=e[3]+t[3],n[2]+=n[3]>>>16,n[3]&=65535,n[2]+=e[2]+t[2],n[1]+=n[2]>>>16,n[2]&=65535,n[1]+=e[1]+t[1],n[0]+=n[1]>>>16,n[1]&=65535,n[0]+=e[0]+t[0],n[0]&=65535,[n[0]<<16|n[1],n[2]<<16|n[3]]},R=function(e,t){return 0==(t%=64)?e:t<32?[e[0]<<t|e[1]>>>32-t,e[1]<<t]:[e[1]<<t-32,0]},E=function(e){return e=T(e,[0,e[0]>>>1]),e=p(e,[4283543511,3981806797]),e=T(e,[0,e[0]>>>1]),e=p(e,[3301882366,444984403]),T(e,[0,e[0]>>>1])},v=function(e,t){t=t||0;for(var n=(e=e||"").length%16,r=e.length-n,a=[0,t],o=[0,t],i=[0,0],c=[0,0],u=[2277735313,289559509],s=[1291169091,658871167],l=0;l<r;l+=16)i=[255&e.charCodeAt(l+4)|(255&e.charCodeAt(l+5))<<8|(255&e.charCodeAt(l+6))<<16|(255&e.charCodeAt(l+7))<<24,255&e.charCodeAt(l)|(255&e.charCodeAt(l+1))<<8|(255&e.charCodeAt(l+2))<<16|(255&e.charCodeAt(l+3))<<24],c=[255&e.charCodeAt(l+12)|(255&e.charCodeAt(l+13))<<8|(255&e.charCodeAt(l+14))<<16|(255&e.charCodeAt(l+15))<<24,255&e.charCodeAt(l+8)|(255&e.charCodeAt(l+9))<<8|(255&e.charCodeAt(l+10))<<16|(255&e.charCodeAt(l+11))<<24],i=p(i,u),i=_(i,31),i=p(i,s),a=T(a,i),a=_(a,27),a=A(a,o),a=A(p(a,[0,5]),[0,1390208809]),c=p(c,s),c=_(c,33),c=p(c,u),o=T(o,c),o=_(o,31),o=A(o,a),o=A(p(o,[0,5]),[0,944331445]);switch(i=[0,0],c=[0,0],n){case 15:c=T(c,R([0,e.charCodeAt(l+14)],48));case 14:c=T(c,R([0,e.charCodeAt(l+13)],40));case 13:c=T(c,R([0,e.charCodeAt(l+12)],32));case 12:c=T(c,R([0,e.charCodeAt(l+11)],24));case 11:c=T(c,R([0,e.charCodeAt(l+10)],16));case 10:c=T(c,R([0,e.charCodeAt(l+9)],8));case 9:c=T(c,[0,e.charCodeAt(l+8)]),c=p(c,s),c=_(c,33),c=p(c,u),o=T(o,c);case 8:i=T(i,R([0,e.charCodeAt(l+7)],56));case 7:i=T(i,R([0,e.charCodeAt(l+6)],48));case 6:i=T(i,R([0,e.charCodeAt(l+5)],40));case 5:i=T(i,R([0,e.charCodeAt(l+4)],32));case 4:i=T(i,R([0,e.charCodeAt(l+3)],24));case 3:i=T(i,R([0,e.charCodeAt(l+2)],16));case 2:i=T(i,R([0,e.charCodeAt(l+1)],8));case 1:i=T(i,[0,e.charCodeAt(l)]),i=p(i,u),i=_(i,31),i=p(i,s),a=T(a,i)}return a=T(a,[0,e.length]),o=T(o,[0,e.length]),a=A(a,o),o=A(o,a),a=E(a),o=E(o),a=A(a,o),o=A(o,a),("00000000"+(a[0]>>>0).toString(16)).slice(-8)+("00000000"+(a[1]>>>0).toString(16)).slice(-8)+("00000000"+(o[0]>>>0).toString(16)).slice(-8)+("00000000"+(o[1]>>>0).toString(16)).slice(-8)};function w(){try{var e=document.createElement("canvas"),t=null;try{t=e.getContext("webgl")||e.getContext("experimental-webgl")}catch(e){return o.ERROR}return t||(t=null),t}catch(e){return o.ERROR}}function y(){try{if(!g())return!1;var e=w();return!!window.WebGLRenderingContext&&!!e}catch(e){return o.ERROR}}function S(){return performance.now()}var B=function(e){var t=document.createElement("div");t.setAttribute("id",e.fonts.swfContainerId),document.body.appendChild(t)},L={mf_flag:o.MF_FLAG,mf_package_name:r,mf_tracking_type:e,mf_cookie_value:n,mf_visit_id:function(){try{var e;return document.URL.toString().includes("?")?(h("monthlyuser","mf_visitid",e=d()),e):(e=m("mf_visitid"))==o.NOT_AVAILABLE?o.NOT_AVAILABLE:(h("mothlyuser","mf_visitid",e),e)}catch(e){return o.ERROR}}(),mf_gclick_id:function(){try{return l("gclid")!=o.NOT_AVAILABLE?l("gclid"):l("fbclid")!=o.NOT_AVAILABLE?l("fbclid"):l("dclid")!=o.NOT_AVAILABLE?l("dclid"):o.NOT_AVAILABLE}catch(e){return o.ERROR}}(),mf_user_agent:function(){try{return"userAgent"in navigator?navigator.userAgent:o.NOT_AVAILABLE}catch(e){return o.ERROR}}(),mf_referral_url:function(){try{return"referrer"in document?document.referrer:o.NOT_AVAILABLE}catch(e){return o.ERROR}}(),mf_landing_page_url:s(),mf_bh_tracking_no:t,mf_global_cookie_value:m("mfusrtrk"),mf_utm_cookie_value:function(){try{var e;return document.URL.toString().includes("?")?(e=function(){try{var e=window.location.href,t=e.substr(e.indexOf("?")+1,e.length-1).split("&"),n={};for(var r in t){var a=t[r].split("=");n[a[0]]=a[1]}return n}catch(e){return{}}}(),h("monthlyuser","mf_utms",JSON.stringify(e)),e):(e=m("mf_utms"))==o.NOT_AVAILABLE?o.NOT_AVAILABLE:(h("mothlyuser","mf_utms",e),e)}catch(e){return o.ERROR}}(),mf_first_visit_date_time:d(),mf_click_id:function(){try{return l("mf_click_id")}catch(e){return o.ERROR}}(),mf_has_iframe:function(){try{if(window.location!==window.parent.location){if(window!==top)var e=window.innerWidth+","+window.innerHeight;return"YES:"+e}return"NO:"+window.innerWidth+","+window.innerHeight}catch(e){return o.ERROR}}(),mf_has_focus:function(){try{return"hasFocus"in document?!!document.hasFocus():"NA"}catch(e){return o.ERROR}}(),mf_timezone_offset:function(){try{return(new Date).getTimezoneOffset()?(new Date).getTimezoneOffset():o.NOT_AVAILABLE}catch(e){return o.ERROR}}(),mf_timezone:function(){try{return window.Intl&&window.Intl.DateTimeFormat?(new window.Intl.DateTimeFormat).resolvedOptions().timeZone:o.NOT_AVAILABLE}catch(e){return o.ERROR}}(),mf_session_storage:function(){try{return"sessionStorage"in window?!!window.sessionStorage:o.NOT_AVAILABLE}catch(e){return o.ERROR}}(),mf_local_storage:f(),mf_cookie_enabled:function(){try{return"cookieEnabled"in navigator?navigator.cookieEnabled:o.NOT_AVAILABLE}catch(e){return o.ERROR}}(),mf_indexed_db:function(){try{return"indexedDB"in window?!!window.indexedDB:o.NOT_AVAILABLE}catch(e){return o.ERROR}}(),mf_add_behavior:function(){try{return"body"in document?!(!document.body||!document.body.addBehavior):o.NOT_AVAILABLE}catch(e){return o.ERROR}}(),mf_open_database:function(){try{return"openDatabase"in window?!!window.openDatabase:o.NOT_AVAILABLE}catch(e){return o.ERROR}}(),mf_cpu_class:function(){try{return"cpuClass"in navigator?navigator.cpuClass:o.NOT_AVAILABLE}catch(e){return o.ERROR}}(),mf_platform:function(){try{return"platform"in navigator?navigator.platform:o.NOT_AVAILABLE}catch(e){return o.ERROR}}(),mf_webdriver:function(){try{return"webdriver"in navigator?navigator.webdriver:o.NOT_AVAILABLE}catch(e){return o.ERROR}}(),mf_language:function(){try{return"language"in navigator?navigator.language:o.NOT_AVAILABLE}catch(e){return o.ERROR}}(),mf_color_depth:function(){try{return"colorDepth"in window.screen?window.screen.colorDepth:o.NOT_AVAILABLE}catch(e){return o.ERROR}}(),mf_device_memory:function(){try{return"deviceMemory"in navigator?navigator.deviceMemory:o.NOT_AVAILABLE}catch(e){return o.ERROR}}(),mf_hardware_concurrency:function(){try{return"hardwareConcurrency"in navigator?navigator.hardwareConcurrency:o.NOT_AVAILABLE}catch(e){return o.ERROR}}(),mf_screen_resolution:function(){try{if("screen"in window&&window.screen.width&&window.screen.height){var e=[window.screen.width,window.screen.height];return o.screen.detectScreenOrientation&&e.sort().reverse(),e.toString().replace(",","|")}return o.NOT_AVAILABLE}catch(e){return o.ERROR}}(),mf_available_screen_resolution:function(){try{if(window.screen.availWidth&&window.screen.availHeight){var e=[window.screen.availHeight,window.screen.availWidth];return o.screen.detectScreenOrientation&&e.sort().reverse(),e.toString().replace(",","|")}return"headless browsers"}catch(e){return o.ERROR+"headless browsers"}}(),mf_plugins:function(){try{for(var e=[],t=0;t<navigator.plugins.length;t++)!function(t){var n=navigator.plugins[t],r=[n.name,n.description,n.filename,n.version].join("::"),a=[];Object.keys(n).forEach((function(e){a.push([n[e].type,n[e].suffixes,n[e].description].join("~"))})),a=a.join(","),e.push(r+"__"+a)}(t);return 0==e.length?o.NOT_AVAILABLE:e.toString()}catch(e){return o.ERROR}}(),mf_canvas:function(){try{if(g()){var e=[],t=document.createElement("canvas");t.width=2e3,t.height=200,t.style.display="inline";var n=t.getContext("2d");return n.rect(0,0,10,10),n.rect(2,2,6,6),e.push("canvas winding:"+(!1===n.isPointInPath(5,5,"evenodd")?"yes":"no")),n.textBaseline="alphabetic",n.fillStyle="#f60",n.fillRect(125,1,62,20),n.fillStyle="#069",n.font=o.dontUseFakeFontInCanvas?"11pt Arial":"11pt no-real-font-123",n.fillText("Cwm fjordbank glyphs vext quiz, 😃",2,15),n.fillStyle="rgba(102, 204, 0, 0.2)",n.font="18pt Arial",n.fillText("Cwm fjordbank glyphs vext quiz, 😃",4,45),n.globalCompositeOperation="multiply",n.fillStyle="rgb(255,0,255)",n.beginPath(),n.arc(50,50,50,0,2*Math.PI,!0),n.closePath(),n.fill(),n.fillStyle="rgb(0,255,255)",n.beginPath(),n.arc(100,50,50,0,2*Math.PI,!0),n.closePath(),n.fill(),n.fillStyle="rgb(255,255,0)",n.beginPath(),n.arc(75,100,50,0,2*Math.PI,!0),n.closePath(),n.fill(),n.fillStyle="rgb(255,0,255)",n.arc(75,75,75,0,2*Math.PI,!0),n.arc(75,75,25,0,2*Math.PI,!0),n.fill("evenodd"),t.toDataURL&&e.push("canvas fp:"+t.toDataURL()),e=String(v(String(e),50))}return o.NOT_SUPPORTED}catch(e){return o.ERROR}}(),mf_ad_block:function(){try{var e=document.createElement("div");e.innerHTML="&nbsp;",e.className="adsbox";var t=!1;try{document.body.appendChild(e),t=0===document.getElementsByClassName("adsbox")[0].offsetHeight,document.body.removeChild(e)}catch(e){t=!1}return t}catch(e){return o.ERROR}}(),mf_touch_support:function(){try{var e,t=0;void 0!==navigator.maxTouchPoints?t=navigator.maxTouchPoints:void 0!==navigator.msMaxTouchPoints&&(t=navigator.msMaxTouchPoints);try{document.createEvent("TouchEvent"),e=!0}catch(t){e=!1}return[t,e,"ontouchstart"in window].toString()}catch(e){return o.ERROR}}(),mf_fonts:function(){try{var e=["monospace","sans-serif","serif"],t=["Andale Mono","Arial","Arial Black","Arial Hebrew","Arial MT","Arial Narrow","Arial Rounded MT Bold","Arial Unicode MS","Bitstream Vera Sans Mono","Book Antiqua","Bookman Old Style","Calibri","Cambria","Cambria Math","Century","Century Gothic","Century Schoolbook","Comic Sans","Comic Sans MS","Consolas","Courier","Courier New","Geneva","Georgia","Helvetica","Helvetica Neue","Impact","Lucida Bright","Lucida Calligraphy","Lucida Console","Lucida Fax","LUCIDA GRANDE","Lucida Handwriting","Lucida Sans","Lucida Sans Typewriter","Lucida Sans Unicode","Microsoft Sans Serif","Monaco","Monotype Corsiva","MS Gothic","MS Outlook","MS PGothic","MS Reference Sans Serif","MS Sans Serif","MS Serif","MYRIAD","MYRIAD PRO","Palatino","Palatino Linotype","Segoe Print","Segoe Script","Segoe UI","Segoe UI Light","Segoe UI Semibold","Segoe UI Symbol","Tahoma","Times","Times New Roman","Times New Roman PS","Trebuchet MS","Verdana","Wingdings","Wingdings 2","Wingdings 3"];o.fonts.extendedJsFonts&&(t=t.concat(["Abadi MT Condensed Light","Academy Engraved LET","ADOBE CASLON PRO","Adobe Garamond","ADOBE GARAMOND PRO","Agency FB","Aharoni","Albertus Extra Bold","Albertus Medium","Algerian","Amazone BT","American Typewriter","American Typewriter Condensed","AmerType Md BT","Andalus","Angsana New","AngsanaUPC","Antique Olive","Aparajita","Apple Chancery","Apple Color Emoji","Apple SD Gothic Neo","Arabic Typesetting","ARCHER","ARNO PRO","Arrus BT","Aurora Cn BT","AvantGarde Bk BT","AvantGarde Md BT","AVENIR","Ayuthaya","Bandy","Bangla Sangam MN","Bank Gothic","BankGothic Md BT","Baskerville","Baskerville Old Face","Batang","BatangChe","Bauer Bodoni","Bauhaus 93","Bazooka","Bell MT","Bembo","Benguiat Bk BT","Berlin Sans FB","Berlin Sans FB Demi","Bernard MT Condensed","BernhardFashion BT","BernhardMod BT","Big Caslon","BinnerD","Blackadder ITC","BlairMdITC TT","Bodoni 72","Bodoni 72 Oldstyle","Bodoni 72 Smallcaps","Bodoni MT","Bodoni MT Black","Bodoni MT Condensed","Bodoni MT Poster Compressed","Bookshelf Symbol 7","Boulder","Bradley Hand","Bradley Hand ITC","Bremen Bd BT","Britannic Bold","Broadway","Browallia New","BrowalliaUPC","Brush Script MT","Californian FB","Calisto MT","Calligrapher","Candara","CaslonOpnface BT","Castellar","Centaur","Cezanne","CG Omega","CG Times","Chalkboard","Chalkboard SE","Chalkduster","Charlesworth","Charter Bd BT","Charter BT","Chaucer","ChelthmITC Bk BT","Chiller","Clarendon","Clarendon Condensed","CloisterBlack BT","Cochin","Colonna MT","Constantia","Cooper Black","Copperplate","Copperplate Gothic","Copperplate Gothic Bold","Copperplate Gothic Light","CopperplGoth Bd BT","Corbel","Cordia New","CordiaUPC","Cornerstone","Coronet","Cuckoo","Curlz MT","DaunPenh","Dauphin","David","DB LCD Temp","DELICIOUS","Denmark","DFKai-SB","Didot","DilleniaUPC","DIN","DokChampa","Dotum","DotumChe","Ebrima","Edwardian Script ITC","Elephant","English 111 Vivace BT","Engravers MT","EngraversGothic BT","Eras Bold ITC","Eras Demi ITC","Eras Light ITC","Eras Medium ITC","EucrosiaUPC","Euphemia","Euphemia UCAS","EUROSTILE","Exotc350 Bd BT","FangSong","Felix Titling","Fixedsys","FONTIN","Footlight MT Light","Forte","FrankRuehl","Fransiscan","Freefrm721 Blk BT","FreesiaUPC","Freestyle Script","French Script MT","FrnkGothITC Bk BT","Fruitger","FRUTIGER","Futura","Futura Bk BT","Futura Lt BT","Futura Md BT","Futura ZBlk BT","FuturaBlack BT","Gabriola","Galliard BT","Gautami","Geeza Pro","Geometr231 BT","Geometr231 Hv BT","Geometr231 Lt BT","GeoSlab 703 Lt BT","GeoSlab 703 XBd BT","Gigi","Gill Sans","Gill Sans MT","Gill Sans MT Condensed","Gill Sans MT Ext Condensed Bold","Gill Sans Ultra Bold","Gill Sans Ultra Bold Condensed","Gisha","Gloucester MT Extra Condensed","GOTHAM","GOTHAM BOLD","Goudy Old Style","Goudy Stout","GoudyHandtooled BT","GoudyOLSt BT","Gujarati Sangam MN","Gulim","GulimChe","Gungsuh","GungsuhChe","Gurmukhi MN","Haettenschweiler","Harlow Solid Italic","Harrington","Heather","Heiti SC","Heiti TC","HELV","Herald","High Tower Text","Hiragino Kaku Gothic ProN","Hiragino Mincho ProN","Hoefler Text","Humanst 521 Cn BT","Humanst521 BT","Humanst521 Lt BT","Imprint MT Shadow","Incised901 Bd BT","Incised901 BT","Incised901 Lt BT","INCONSOLATA","Informal Roman","Informal011 BT","INTERSTATE","IrisUPC","Iskoola Pota","JasmineUPC","Jazz LET","Jenson","Jester","Jokerman","Juice ITC","Kabel Bk BT","Kabel Ult BT","Kailasa","KaiTi","Kalinga","Kannada Sangam MN","Kartika","Kaufmann Bd BT","Kaufmann BT","Khmer UI","KodchiangUPC","Kokila","Korinna BT","Kristen ITC","Krungthep","Kunstler Script","Lao UI","Latha","Leelawadee","Letter Gothic","Levenim MT","LilyUPC","Lithograph","Lithograph Light","Long Island","Lydian BT","Magneto","Maiandra GD","Malayalam Sangam MN","Malgun Gothic","Mangal","Marigold","Marion","Marker Felt","Market","Marlett","Matisse ITC","Matura MT Script Capitals","Meiryo","Meiryo UI","Microsoft Himalaya","Microsoft JhengHei","Microsoft New Tai Lue","Microsoft PhagsPa","Microsoft Tai Le","Microsoft Uighur","Microsoft YaHei","Microsoft Yi Baiti","MingLiU","MingLiU_HKSCS","MingLiU_HKSCS-ExtB","MingLiU-ExtB","Minion","Minion Pro","Miriam","Miriam Fixed","Mistral","Modern","Modern No. 20","Mona Lisa Solid ITC TT","Mongolian Baiti","MONO","MoolBoran","Mrs Eaves","MS LineDraw","MS Mincho","MS PMincho","MS Reference Specialty","MS UI Gothic","MT Extra","MUSEO","MV Boli","Nadeem","Narkisim","NEVIS","News Gothic","News GothicMT","NewsGoth BT","Niagara Engraved","Niagara Solid","Noteworthy","NSimSun","Nyala","OCR A Extended","Old Century","Old English Text MT","Onyx","Onyx BT","OPTIMA","Oriya Sangam MN","OSAKA","OzHandicraft BT","Palace Script MT","Papyrus","Parchment","Party LET","Pegasus","Perpetua","Perpetua Titling MT","PetitaBold","Pickwick","Plantagenet Cherokee","Playbill","PMingLiU","PMingLiU-ExtB","Poor Richard","Poster","PosterBodoni BT","PRINCETOWN LET","Pristina","PTBarnum BT","Pythagoras","Raavi","Rage Italic","Ravie","Ribbon131 Bd BT","Rockwell","Rockwell Condensed","Rockwell Extra Bold","Rod","Roman","Sakkal Majalla","Santa Fe LET","Savoye LET","Sceptre","Script","Script MT Bold","SCRIPTINA","Serifa","Serifa BT","Serifa Th BT","ShelleyVolante BT","Sherwood","Shonar Bangla","Showcard Gothic","Shruti","Signboard","SILKSCREEN","SimHei","Simplified Arabic","Simplified Arabic Fixed","SimSun","SimSun-ExtB","Sinhala Sangam MN","Sketch Rockwell","Skia","Small Fonts","Snap ITC","Snell Roundhand","Socket","Souvenir Lt BT","Staccato222 BT","Steamer","Stencil","Storybook","Styllo","Subway","Swis721 BlkEx BT","Swiss911 XCm BT","Sylfaen","Synchro LET","System","Tamil Sangam MN","Technical","Teletype","Telugu Sangam MN","Tempus Sans ITC","Terminal","Thonburi","Traditional Arabic","Trajan","TRAJAN PRO","Tristan","Tubular","Tunga","Tw Cen MT","Tw Cen MT Condensed","Tw Cen MT Condensed Extra Bold","TypoUpright BT","Unicorn","Univers","Univers CE 55 Medium","Univers Condensed","Utsaah","Vagabond","Vani","Vijaya","Viner Hand ITC","VisualUI","Vivaldi","Vladimir Script","Vrinda","Westminster","WHITNEY","Wide Latin","ZapfEllipt BT","ZapfHumnst BT","ZapfHumnst Dm BT","Zapfino","Zurich BlkEx BT","Zurich Ex BT","ZWAdobeF"])),t=(t=t.concat(o.fonts.userDefinedFonts)).filter((function(e,n){return t.indexOf(e)===n}));var n=document.getElementsByTagName("body")[0],r=document.createElement("div"),a=document.createElement("div"),i={},c={},u=function(){var e=document.createElement("span");return e.style.position="absolute",e.style.left="-9999px",e.style.fontSize="72px",e.style.fontStyle="normal",e.style.fontWeight="normal",e.style.letterSpacing="normal",e.style.lineBreak="auto",e.style.lineHeight="normal",e.style.textTransform="none",e.style.textAlign="left",e.style.textDecoration="none",e.style.textShadow="none",e.style.whiteSpace="normal",e.style.wordBreak="normal",e.style.wordSpacing="normal",e.innerHTML="mmmmmmmmmmlli",e},s=function(e,t){var n=u();return n.style.fontFamily="'"+e+"',"+t,n},l=function(t){for(var n=!1,r=0;r<e.length;r++)if(n=t[r].offsetWidth!==i[e[r]]||t[r].offsetHeight!==c[e[r]])return n;return n},d=function(){for(var t=[],n=0,a=e.length;n<a;n++){var o=u();o.style.fontFamily=e[n],r.appendChild(o),t.push(o)}return t}();n.appendChild(r);for(var m=0,h=e.length;m<h;m++)i[e[m]]=d[m].offsetWidth,c[e[m]]=d[m].offsetHeight;var f=function(){for(var n={},r=0,o=t.length;r<o;r++){for(var i=[],c=0,u=e.length;c<u;c++){var l=s(t[r],e[c]);a.appendChild(l),i.push(l)}n[t[r]]=i}return n}();n.appendChild(a);for(var g=[],p=0,_=t.length;p<_;p++)l(f[t[p]])&&g.push(t[p]);return n.removeChild(a),n.removeChild(r),g.toString()}catch(e){return o.ERROR}}(),mf_webgl:function(){try{if(y()){var e,t=function(t){return e.clearColor(0,0,0,1),e.enable(e.DEPTH_TEST),e.depthFunc(e.LEQUAL),e.clear(e.COLOR_BUFFER_BIT|e.DEPTH_BUFFER_BIT),"["+t[0]+", "+t[1]+"]"};if(!(e=w()))return null;var n=[],r=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,r);var a=new Float32Array([-.2,-.9,0,.4,-.26,0,0,.732134444,0]);e.bufferData(e.ARRAY_BUFFER,a,e.STATIC_DRAW),r.itemSize=3,r.numItems=3;var i=e.createProgram(),c=e.createShader(e.VERTEX_SHADER);e.shaderSource(c,"attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate=attrVertex+uniformOffset;gl_Position=vec4(attrVertex,0,1);}"),e.compileShader(c);var u=e.createShader(e.FRAGMENT_SHADER);e.shaderSource(u,"precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor=vec4(varyinTexCoordinate,0,1);}"),e.compileShader(u),e.attachShader(i,c),e.attachShader(i,u),e.linkProgram(i),e.useProgram(i),i.vertexPosAttrib=e.getAttribLocation(i,"attrVertex"),i.offsetUniform=e.getUniformLocation(i,"uniformOffset"),e.enableVertexAttribArray(i.vertexPosArray),e.vertexAttribPointer(i.vertexPosAttrib,r.itemSize,e.FLOAT,!1,0,0),e.uniform2f(i.offsetUniform,1,1),e.drawArrays(e.TRIANGLE_STRIP,0,r.numItems);try{n.push(e.canvas.toDataURL())}catch(e){}n.push("extensions:"+(e.getSupportedExtensions()||[]).join(";")),n.push("webgl aliased line width range:"+t(e.getParameter(e.ALIASED_LINE_WIDTH_RANGE))),n.push("webgl aliased point size range:"+t(e.getParameter(e.ALIASED_POINT_SIZE_RANGE))),n.push("webgl alpha bits:"+e.getParameter(e.ALPHA_BITS)),n.push("webgl antialiasing:"+(e.getContextAttributes().antialias?"yes":"no")),n.push("webgl blue bits:"+e.getParameter(e.BLUE_BITS)),n.push("webgl depth bits:"+e.getParameter(e.DEPTH_BITS)),n.push("webgl green bits:"+e.getParameter(e.GREEN_BITS)),n.push("webgl max anisotropy:"+function(e){var t=e.getExtension("EXT_texture_filter_anisotropic")||e.getExtension("WEBKIT_EXT_texture_filter_anisotropic")||e.getExtension("MOZ_EXT_texture_filter_anisotropic");if(t){var n=e.getParameter(t.MAX_TEXTURE_MAX_ANISOTROPY_EXT);return 0===n&&(n=2),n}return null}(e)),n.push("webgl max combined texture image units:"+e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS)),n.push("webgl max cube map texture size:"+e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE)),n.push("webgl max fragment uniform vectors:"+e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS)),n.push("webgl max render buffer size:"+e.getParameter(e.MAX_RENDERBUFFER_SIZE)),n.push("webgl max texture image units:"+e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS)),n.push("webgl max texture size:"+e.getParameter(e.MAX_TEXTURE_SIZE)),n.push("webgl max varying vectors:"+e.getParameter(e.MAX_VARYING_VECTORS)),n.push("webgl max vertex attribs:"+e.getParameter(e.MAX_VERTEX_ATTRIBS)),n.push("webgl max vertex texture image units:"+e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS)),n.push("webgl max vertex uniform vectors:"+e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS)),n.push("webgl max viewport dims:"+t(e.getParameter(e.MAX_VIEWPORT_DIMS))),n.push("webgl red bits:"+e.getParameter(e.RED_BITS)),n.push("webgl renderer:"+e.getParameter(e.RENDERER)),n.push("webgl shading language version:"+e.getParameter(e.SHADING_LANGUAGE_VERSION)),n.push("webgl stencil bits:"+e.getParameter(e.STENCIL_BITS)),n.push("webgl vendor:"+e.getParameter(e.VENDOR)),n.push("webgl version:"+e.getParameter(e.VERSION));try{var s=e.getExtension("WEBGL_debug_renderer_info");s&&(n.push("webgl unmasked vendor:"+e.getParameter(s.UNMASKED_VENDOR_WEBGL)),n.push("webgl unmasked renderer:"+e.getParameter(s.UNMASKED_RENDERER_WEBGL)))}catch(e){}if(!e.getShaderPrecisionFormat)return n;var l=function(e,t){if(Array.prototype.forEach&&e.forEach===Array.prototype.forEach)e.forEach(t);else if(e.length===+e.length)for(var n=0,r=e.length;n<r;n++)t(e[n],n,e);else for(var a in e)e.hasOwnProperty(a)&&t(e[a],a,e)};return l(["FLOAT","INT"],(function(t){l(["VERTEX","FRAGMENT"],(function(r){l(["HIGH","MEDIUM","LOW"],(function(a){l(["precision","rangeMin","rangeMax"],(function(o){var i=e.getShaderPrecisionFormat(e[r+"_SHADER"],e[a+"_"+t])[o];"precision"!==o&&(o="precision "+o);var c=["webgl ",r.toLowerCase()," shader ",a.toLowerCase()," ",t.toLowerCase()," ",o,":",i].join("");n.push(c)}))}))}))})),n=String(v(String(n),50))}return o.NOT_AVAILABLE}catch(e){return o.ERROR}}(),mf_webgl_vendor_renderer:function(){if(y())try{var e=w(),t=e.getExtension("WEBGL_debug_renderer_info"),n=e.getParameter(t.UNMASKED_VENDOR_WEBGL)+"~"+e.getParameter(t.UNMASKED_RENDERER_WEBGL);return n.substring(0,10)}catch(e){return o.ERROR}return o.NOT_AVAILABLE}(),mf_sorting_time:function(){try{var e,t=S();return function(){for(var e=[],t=131072;0<t;t--)e[t]=t;e.sort()}(),e=S()-t,Math.round(1e3*e)/1e3}catch(e){return o.ERROR}}(),mf_send_beacon:function(){try{return void 0===navigator.sendBeacon?o.NOT_AVAILABLE:!!navigator.sendBeacon}catch(e){return o.ERROR}}(),mf_ancestor_origins:function(){try{if(!location.ancestorOrigins)return o.NOT_AVAILABLE;for(var e=0,t=[];e<location.ancestorOrigins.length;e++)t[e]=location.ancestorOrigins[e];return t.join(" ")}catch(e){return o.ERROR}}(),mf_domainlookup_start:function(){try{var e;try{e=performance.timing}catch(t){e=!1}return e&&"domainLookupStart"in e?e.domainLookupStart:o.NOT_AVAILABLE}catch(e){return o.ERROR}}(),mf_domainlookup_end:function(){try{var e;try{e=performance.timing}catch(t){e=!1}return e&&"domainLookupEnd"in e?e.domainLookupEnd:o.NOT_AVAILABLE}catch(e){return o.ERROR}}(),mf_connect_start:function(){try{var e;try{e=performance.timing}catch(t){e=!1}return e&&"connectStart"in e?e.connectStart:o.NOT_AVAILABLE}catch(e){return o.ERROR}}(),mf_connect_end:function(){try{var e;try{e=performance.timing}catch(t){e=!1}return e&&"connectEnd"in e?e.connectEnd:o.NOT_AVAILABLE}catch(e){return o.ERROR}}(),mf_downlink_speed:function(){var e;try{e="connection"in navigator?navigator.connection.downlink:o.NOT_SUPPORTED}catch(e){return o.ERROR}return e}(),mf_document_title:function(){try{return"title"in document?document.title:o.NOT_AVAILABLE}catch(e){return o.ERROR}}(),mf_device_type:function(){try{var e="mobile";try{e=/bot|googlebot|crawler|spider|robot|crawling/i.test(navigator.userAgent)?"bot":/iPhone|iPad|iPod|Mobile|Silk|Kindle|BlackBerry|Opera Mini|Opera Mobi|Android/i.test(navigator.userAgent)?"mobile":"desktop"}catch(t){e="mobile"}return e}catch(e){return o.ERROR}}(),mf_redirection_count:function(){try{return"redirectCount"in performance.navigation?performance.navigation.redirectCount:o.NOT_AVAILABLE}catch(e){return o.ERROR}}(),mf_navigation_type:function(){try{var e=performance.navigation.type;return 0===e?"navigate":1===e?"reload":2===e?"back-forward":e||"navigate"}catch(e){return"navigate"}}(),mf_network:function(){try{return"effectiveType"in navigator.connection?navigator.connection.effectiveType:o.NOT_AVAILABLE}catch(e){return o.ERROR}}(),mf_phantom_js:function(){try{return!(!window.callPhantom&&!window._phantom)}catch(e){return o.ERROR}}(),mf_nightmare_js:function(){try{return!!window.__nightmare}catch(e){return o.ERROR}}(),mf_history_length:function(){try{return"length"in window.history?window.history.length:o.NOT_AVAILABLE}catch(e){return o.ERROR}}(),mf_do_not_track:function(){try{return navigator.doNotTrack?navigator.doNotTrack:navigator.msDoNotTrack?navigator.msDoNotTrack:window.doNotTrack?window.doNotTrack:o.NOT_AVAILABLE}catch(e){return o.ERROR}}(),mf_pixel_ratio:function(){try{return"devicePixelRatio"in window?window.devicePixelRatio:o.NOT_AVAILABLE}catch(e){return o.ERROR}}(),mf_utm_source:function(){try{return l("utm_source")}catch(e){return o.ERROR}}(),mf_utm_medium:function(){try{return l("utm_medium")}catch(e){return o.ERROR}}(),mf_utm_term:function(){try{return l("utm_term")}catch(e){return o.ERROR}}(),mf_utm_content:function(){try{return l("utm_content")}catch(e){return o.ERROR}}(),mf_utm_campaign:function(){try{return l("utm_campaign")}catch(e){return o.ERROR}}(),mf_ref_check:function(){try{return new URL(document.referrer).origin!==location.origin}catch(e){return!1}}(),mf_utm_check:function(){try{var e=document.URL.toString();return!!(e.includes("gclid")||e.includes("fbclid")||e.includes("dclid")||e.includes("utm_source")||e.includes("utm_medium")||e.includes("utm_term")||e.includes("utm_campaign")||e.includes("utm_content"))}catch(e){return o.ERROR}}(),mf_fonts_flash:function(){try{return void 0===window.swfobject?o.flashFonts.SWF_OBJECT_NOT_LOADED:window.swfobject.hasFlashPlayerVersion("9.0.0")?o.fonts.swfPath?function(e){var t="___fp_swf_loaded";window[t]=function(e){return e};var n=e.fonts.swfContainerId;B();var r={onReady:t};window.swfobject.embedSWF(e.fonts.swfPath,n,"1","1","9.0.0",!1,r,{allowScriptAccess:"always",menu:"false"},{})}(o):o.flashFonts.MISSING:o.flashFonts.FLASH_NOT_INSTALLED}catch(e){return o.ERROR}}(),mf_redPill:function(){try{for(var e=performance.now(),t=0,n=0,r=[],a=performance.now();a-e<50;a=performance.now())r.push(Math.floor(1e6*Math.random())),r.pop(),t++;e=performance.now();for(var i=performance.now();i-e<50;i=performance.now())f.setItem("0","constant string"),f.removeItem("0"),n++;return 1e3*Math.round(n/t)}catch(e){return o.ERROR}}(),mf_redPill_2:function(){try{function r(e,t){return e<1e-8?t:e<t?r(t-Math.floor(t/e)*e,e):e==t?e:r(t,e)}for(var e=performance.now()/1e3,t=performance.now()/1e3-e,n=0;n<10;n++)t=r(t,performance.now()/1e3-e);return Math.round(1/t)}catch(e){return o.ERROR}}(),mf_redPill_3:function(){let e;try{for(var t="",n=[Math.abs,Math.acos,Math.asin,Math.atanh,Math.cbrt,Math.exp,Math.random,Math.round,Math.sqrt,isFinite,isNaN,parseFloat,parseInt,JSON.parse],r=0;r<n.length;r++){var a=[],i=0,c=performance.now(),u=0,s=0;if(void 0!==n[r]){for(u=0;u<1e3&&i<.6;u++){for(var l=performance.now(),d=0;d<4e3;d++)n[r](3.14);var m=performance.now();a.push(Math.round(1e3*(m-l))),i=m-c}var h=a.sort();s=h[Math.floor(h.length/2)]/5}t=t+s+","}e=t}catch(n){e=o.ERROR}return e}(),mf_audio:o.NOT_AVAILABLE,mf_battery_level:o.NOT_AVAILABLE,mf_latitude:o.NOT_AVAILABLE,mf_longitude:o.NOT_AVAILABLE,mf_multi_media:o.NOT_AVAILABLE};a&&(L=Object.assign(L,a)),function(e){try{if("navigate"!=function(){try{var e=performance.navigation.type;return 0===e?"navigate":1===e?"reload":2===e?"back-forward":e||"navigate"}catch(e){return"navigate"}}())return!1;try{var t=new XMLHttpRequest,n=JSON.stringify(e);t.open("POST",o.END_POINT_URL,!0),t.onerror=function(){console.log("An error occurred.")},t.send(n),t.onload=function(){200===t.status&&console.log(t.response)}}catch(e){console.log("error",e)}}catch(e){console.log(e)}}(L),1==o.TRACK_BEHAVIOR&&function(e,t){var n,r={clickCount:!0,clickDetails:!0,mouseMovement:!0,context:!0,keyLogger:!0,orientation:!0,scroll:!0,touch:!0,actionItem:{processOnAction:!1,selector:"",event:""},processTime:3,processData:function(e){e.jsCounter>=5||function(e){try{if("navigate"!=function(){try{var e=performance.navigation.type;return 0===e?"navigate":1===e?"reload":2===e?"back-forward":e||"navigate"}catch(e){return"navigate"}}())return!1;try{var t=new XMLHttpRequest,n=JSON.stringify(e);t.open("POST","https://wafs.mfilterit.net/send/v3/",!0),t.onerror=function(){console.log("An error occurred.")},t.send(n),t.onload=function(){200===t.status&&console.log(t.response)}}catch(e){console.log("error",e)}}catch(e){console.log(e)}}(e)}},a={mf_flag:"behavior",mf_bh_tracking_no:t,mf_package_name:e,userInfo:{mf_bh_cookie_value:function(e){try{var t=document.cookie.match("(^|;) ?mfKey=([^;]*)(;|$)");return t=t?t[2]:"NA",decodeURIComponent(t)}catch(e){return e}}(),appCodeName:navigator.appCodeName||"",appName:navigator.appName||"",vendor:navigator.vendor||"",platform:navigator.platform||"",userAgent:navigator.userAgent||""},time:{totalTime:0,timeOnPage:0},clicks:{clickCount:0,clickDetails:[]},mouseMovements:[],contextChange:[],keyLogger:[],orientationChange:[],scrollLogger:[],touchLogger:[],jsCounter:0},o=!!document.querySelector&&!!document.addEventListener;function i(){return!!n.hasOwnProperty("processData")&&(a.jsCounter=a.jsCounter+1,n.processData.call(void 0,a))}!function(e){if(o){e&&"object"==typeof e&&(n=function(e,t){var n;for(n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);return e}(r,e));var t=function(){if(window.setInterval((function(){"visible"===document.visibilityState&&a.time.timeOnPage++,a.time.totalTime++,n.processTime>0&&a.time.totalTime%n.processTime==0&&i()}),1e3),n.clickCount||n.clickDetails)try{document.addEventListener("mouseup",(function(){n.clickCount&&a.clicks.clickCount++,n.clickDetails&&a.clicks.clickDetails.push({timestamp:Date.now(),node:"testing-",x:event.pageX,y:event.pageY})}))}catch(e){a.clicks.clickDetails.push({timestamp:Date.now(),error:e})}if(n.mouseMovement&&function(){try{document.addEventListener("mousemove",(function(){a.mouseMovements.push({timestamp:Date.now(),x:event.pageX,y:event.pageY})}))}catch(e){a.mouseMovements.push({timestamp:Date.now(),error:e})}}(),n.context&&function(){try{document.addEventListener("visibilitychange",(function(){a.contextChange.push({timestamp:Date.now(),type:document.visibilityState})}))}catch(e){a.contextChange.push({timestamp:Date.now(),error:e})}}(),n.keyLogger&&function(){try{document.addEventListener("paste",(function(){var e=void 0;window.clipboardData&&window.clipboardData.getData?e=window.clipboardData.getData("Text"):event.clipboardData&&event.clipboardData.getData&&(e=event.clipboardData.getData("text/plain")),e&&a.keyLogger.push({timestamp:Date.now(),data:"CopyPaste",type:"paste"})}))}catch(e){a.keyLogger.push({timestamp:Date.now(),error:e,type:"paste"})}try{document.addEventListener("keyup",(function(){a.keyLogger.push({timestamp:Date.now(),data:"TEST",type:"keypress"})}))}catch(e){a.keyLogger.push({timestamp:Date.now(),error:e,type:"keypress"})}}(),n.orientation&&function(){try{window.addEventListener("deviceorientation",(function(){var e=Math.round(event.alpha),t=Math.round(event.beta),n=Math.round(event.gamma);a.orientationChange.push({timestamp:Date.now(),alpha:e,beta:t,gamma:n})}))}catch(e){a.orientationChange.push({timestamp:Date.now(),error:e})}}(),n.scroll&&function(){try{window.addEventListener("scroll",(function(){var e=Math.round(window.scrollX),t=Math.round(window.scrollY);a.scrollLogger.push({timestamp:Date.now(),x:e,y:t})}))}catch(e){a.scrollLogger.push({timestamp:Date.now(),error:e})}}(),n.touch&&function(){var e,t;try{document.addEventListener("touchstart",(function(){var n=event.changedTouches[0];e=parseInt(n.clientX),t=parseInt(n.clientY),a.touchLogger.push({timestamp:Date.now(),startX:e,startY:t})}))}catch(e){a.touchLogger.push({timestamp:Date.now(),error:e,type:"touchstart"})}try{document.addEventListener("touchmove",(function(){var n=event.changedTouches[0],r=Math.abs(parseInt(n.clientX)-e),o=Math.abs(parseInt(n.clientY)-t);a.touchLogger.push({timestamp:Date.now(),moveX:r,moveY:o})}))}catch(e){a.touchLogger.push({timestamp:Date.now(),error:e,type:"touchmove"})}try{document.addEventListener("touchend",(function(){var e=event.changedTouches[0],t=parseInt(e.clientX),n=parseInt(e.clientY);a.touchLogger.push({timestamp:Date.now(),endX:t,endY:n})}))}catch(e){a.touchLogger.push({timestamp:Date.now(),error:e,type:"touchend"})}}(),n.actionItem.processOnAction){var e=document.querySelector(n.actionItem.selector);if(!e)throw new Error("Selector was not found.");e.addEventListener(n.actionItem.event,(function(){return i()}))}};"loading"!==document.readyState?t():document.addEventListener("DOMContentLoaded",(function(){t()}))}}(r)}(r,L.mf_bh_tracking_no)})();