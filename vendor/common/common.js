!function(e){e.extend({browserSelector:function(){!function(e){(jQuery.browser=jQuery.browser||{}).mobile=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0,4))}(navigator.userAgent||navigator.vendor||window.opera);var t="ontouchstart"in window||navigator.msMaxTouchPoints,o=navigator.userAgent,a=o.toLowerCase(),n=function(e){return a.indexOf(e)>-1},i="gecko",r="webkit",s="safari",l="opera",u=document.documentElement,d=[!/opera|webtv/i.test(a)&&/msie\s(\d)/.test(a)?"ie ie"+parseFloat(navigator.appVersion.split("MSIE")[1]):n("firefox/2")?i+" ff2":n("firefox/3.5")?i+" ff3 ff3_5":n("firefox/3")?i+" ff3":n("gecko/")?i:n("opera")?l+(/version\/(\d+)/.test(a)?" "+l+RegExp.jQuery1:/opera(\s|\/)(\d+)/.test(a)?" "+l+RegExp.jQuery2:""):n("konqueror")?"konqueror":n("chrome")?r+" chrome":n("iron")?r+" iron":n("applewebkit/")?r+" "+s+(/version\/(\d+)/.test(a)?" "+s+RegExp.jQuery1:""):n("mozilla/")?i:"",n("j2me")?"mobile":n("iphone")?"iphone":n("ipod")?"ipod":n("mac")?"mac":n("darwin")?"mac":n("webtv")?"webtv":n("win")?"win":n("freebsd")?"freebsd":n("x11")||n("linux")?"linux":"","js"];c=d.join(" "),e.browser.mobile&&(c+=" mobile"),t&&(c+=" touch"),u.className+=" "+c;var p=!window.ActiveXObject&&"ActiveXObject"in window;return p?void e("html").removeClass("gecko").addClass("ie ie11"):(e("body").hasClass("dark")&&e("html").addClass("dark"),void(e("body").hasClass("boxed")&&e("html").addClass("boxed")))}}),e.browserSelector()}(jQuery),function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof exports?module.exports=e(require("jquery")):e(jQuery)}(function(e){var t="waitForImages";e.waitForImages={hasImageProperties:["backgroundImage","listStyleImage","borderImage","borderCornerImage","cursor"],hasImageAttributes:["srcset"]},e.expr[":"].uncached=function(t){return e(t).is('img[src][src!=""]')?!t.complete:!1},e.fn.waitForImages=function(){var o,a,n,i=0,r=0,s=e.Deferred();if(e.isPlainObject(arguments[0])?(n=arguments[0].waitForAll,a=arguments[0].each,o=arguments[0].finished):1===arguments.length&&"boolean"===e.type(arguments[0])?n=arguments[0]:(o=arguments[0],a=arguments[1],n=arguments[2]),o=o||e.noop,a=a||e.noop,n=!!n,!e.isFunction(o)||!e.isFunction(a))throw new TypeError("An invalid callback was supplied.");return this.each(function(){var c=e(this),l=[],u=e.waitForImages.hasImageProperties||[],d=e.waitForImages.hasImageAttributes||[],p=/url\(\s*(['"]?)(.*?)\1\s*\)/g;n?c.find("*").addBack().each(function(){var t=e(this);t.is("img:uncached")&&l.push({src:t.attr("src"),element:t[0]}),e.each(u,function(e,o){var a,n=t.css(o);if(!n)return!0;for(;a=p.exec(n);)l.push({src:a[2],element:t[0]})}),e.each(d,function(o,a){var n,i=t.attr(a);return i?(n=i.split(","),void e.each(n,function(o,a){a=e.trim(a).split(" ")[0],l.push({src:a,element:t[0]})})):!0})}):c.find("img:uncached").each(function(){l.push({src:this.src,element:this})}),i=l.length,r=0,0===i&&(o.call(c[0]),s.resolveWith(c[0])),e.each(l,function(n,l){var u=new Image,d="load."+t+" error."+t;e(u).one(d,function p(t){var n=[r,i,"load"==t.type];return r++,a.apply(l.element,n),s.notifyWith(l.element,n),e(this).off(d,p),r==i?(o.call(c[0]),s.resolveWith(c[0]),!1):void 0}),u.src=l.src})}),s.promise()}}),function(e){function t(e,t){return e.toFixed(t.decimals)}e.fn.countTo=function(t){return t=t||{},e(this).each(function(){function o(){u+=r,l++,a(u),"function"==typeof n.onUpdate&&n.onUpdate.call(s,u),l>=i&&(c.removeData("countTo"),clearInterval(d.interval),u=n.to,"function"==typeof n.onComplete&&n.onComplete.call(s,u))}function a(e){var t=n.formatter.call(s,e,n);c.html(t)}var n=e.extend({},e.fn.countTo.defaults,{from:e(this).data("from"),to:e(this).data("to"),speed:e(this).data("speed"),refreshInterval:e(this).data("refresh-interval"),decimals:e(this).data("decimals")},t),i=Math.ceil(n.speed/n.refreshInterval),r=(n.to-n.from)/i,s=this,c=e(this),l=0,u=n.from,d=c.data("countTo")||{};c.data("countTo",d),d.interval&&clearInterval(d.interval),d.interval=setInterval(o,n.refreshInterval),a(u)})},e.fn.countTo.defaults={from:0,to:0,speed:1e3,refreshInterval:100,decimals:0,formatter:t,onUpdate:null,onComplete:null}}(jQuery),function(e){"use strict";var t,o={action:function(){},runOnLoad:!1,duration:500},a=o,n=!1,i={};i.init=function(){for(var t=0;t<=arguments.length;t++){var o=arguments[t];switch(typeof o){case"function":a.action=o;break;case"boolean":a.runOnLoad=o;break;case"number":a.duration=o}}return this.each(function(){a.runOnLoad&&a.action(),e(this).resize(function(){i.timedAction.call(this)})})},i.timedAction=function(e,o){var i=function(){var e=a.duration;if(n){var o=new Date-t;if(e=a.duration-o,0>=e)return clearTimeout(n),n=!1,void a.action()}r(e)},r=function(e){n=setTimeout(i,e)};t=new Date,"number"==typeof o&&(a.duration=o),"function"==typeof e&&(a.action=e),n||i()},e.fn.afterResize=function(e){return i[e]?i[e].apply(this,Array.prototype.slice.call(arguments,1)):i.init.apply(this,arguments)}}(jQuery),function(e){var t=-1,o=-1,a=function(t){var o=1,a=e(t),i=null,r=[];return a.each(function(){var t=e(this),a=t.offset().top-n(t.css("margin-top")),s=r.length>0?r[r.length-1]:null;null===s?r.push(t):Math.floor(Math.abs(i-a))<=o?r[r.length-1]=s.add(t):r.push(t),i=a}),r},n=function(e){return parseFloat(e)||0},i=function(t){var o={byRow:!0,remove:!1,property:"height"};return"object"==typeof t?e.extend(o,t):("boolean"==typeof t?o.byRow=t:"remove"===t&&(o.remove=!0),o)},r=e.fn.matchHeight=function(t){var o=i(t);if(o.remove){var a=this;return this.css(o.property,""),e.each(r._groups,function(e,t){t.elements=t.elements.not(a)}),this}return this.length<=1?this:(r._groups.push({elements:this,options:o}),r._apply(this,o),this)};r._groups=[],r._throttle=80,r._maintainScroll=!1,r._beforeUpdate=null,r._afterUpdate=null,r._apply=function(t,o){var s=i(o),c=e(t),l=[c],u=e(window).scrollTop(),d=e("html").outerHeight(!0),p=c.parents().filter(":hidden");return p.each(function(){var t=e(this);t.data("style-cache",t.attr("style"))}),p.css("display","block"),s.byRow&&(c.each(function(){var t=e(this),o="inline-block"===t.css("display")?"inline-block":"block";t.data("style-cache",t.attr("style")),t.css({display:o,"padding-top":"0","padding-bottom":"0","margin-top":"0","margin-bottom":"0","border-top-width":"0","border-bottom-width":"0",height:"100px"})}),l=a(c),c.each(function(){var t=e(this);t.attr("style",t.data("style-cache")||"")})),e.each(l,function(t,o){var a=e(o),i=0;return s.byRow&&a.length<=1?void a.css(s.property,""):(a.each(function(){var t=e(this),o="inline-block"===t.css("display")?"inline-block":"block",a={display:o};a[s.property]="",t.css(a),t.outerHeight(!1)>i&&(i=t.outerHeight(!1)),t.css("display","")}),void a.each(function(){var t=e(this),o=0;"border-box"!==t.css("box-sizing")&&(o+=n(t.css("border-top-width"))+n(t.css("border-bottom-width")),o+=n(t.css("padding-top"))+n(t.css("padding-bottom"))),t.css(s.property,i-o)}))}),p.each(function(){var t=e(this);t.attr("style",t.data("style-cache")||null)}),r._maintainScroll&&e(window).scrollTop(u/d*e("html").outerHeight(!0)),this},r._applyDataApi=function(){var t={};e("[data-match-height], [data-mh]").each(function(){var o=e(this),a=o.attr("data-match-height")||o.attr("data-mh");a in t?t[a]=t[a].add(o):t[a]=o}),e.each(t,function(){this.matchHeight(!0)})};var s=function(t){r._beforeUpdate&&r._beforeUpdate(t,r._groups),e.each(r._groups,function(){r._apply(this.elements,this.options)}),r._afterUpdate&&r._afterUpdate(t,r._groups)};r._update=function(a,n){if(n&&"resize"===n.type){var i=e(window).width();if(i===t)return;t=i}a?-1===o&&(o=setTimeout(function(){s(n),o=-1},r._throttle)):s(n)},e(r._applyDataApi),e(window).bind("load",function(e){r._update(!1,e)}),e(window).bind("resize orientationchange",function(e){r._update(!0,e)})}(jQuery),function(e){"use strict";e.fn.pin=function(t){var o=0,a=[],n=!1,i=e(window);t=t||{};var r=function(){for(var o=0,r=a.length;r>o;o++){var s=a[o];if(t.minWidth&&i.width()<=t.minWidth)s.parent().is(".pin-wrapper")&&s.unwrap(),s.css({width:"",left:"",top:"",position:""}),t.activeClass&&s.removeClass(t.activeClass),n=!0;else{n=!1;var c=t.containerSelector?s.closest(t.containerSelector):e(document.body),l=s.offset(),u=c.offset(),d=s.parent().offset();s.parent().is(".pin-wrapper")||s.wrap("<div class='pin-wrapper'>");var p=e.extend({top:0,bottom:0},t.padding||{});s.data("pin",{pad:p,from:(t.containerSelector?u.top:l.top)-p.top,to:u.top+c.height()-s.outerHeight()-p.bottom,end:u.top+c.height(),parentTop:d.top}),s.css({width:s.outerWidth()}),s.parent().css("height",s.outerHeight())}}},s=function(){if(!n){o=i.scrollTop();for(var r=[],s=0,c=a.length;c>s;s++){var l=e(a[s]),u=l.data("pin");if(u){r.push(l);var d=u.from-u.pad.bottom,p=u.to-u.pad.top;d+l.outerHeight()>u.end?l.css("position",""):o>d&&p>o?(!("fixed"==l.css("position"))&&l.css({left:l.offset().left,top:u.pad.top}).css("position","fixed"),t.activeClass&&l.addClass(t.activeClass)):o>=p?(l.css({left:"",top:p-u.parentTop+u.pad.top}).css("position","absolute"),t.activeClass&&l.addClass(t.activeClass)):(l.css({position:"",top:"",left:""}),t.activeClass&&l.removeClass(t.activeClass))}}a=r}},c=function(){r(),s()};return this.each(function(){var t=e(this),o=e(this).data("pin")||{};o&&o.update||(a.push(t),e("img",this).one("load",r),o.update=c,e(this).data("pin",o))}),i.scroll(s),i.resize(function(){r()}),r(),i.load(c),this}}(jQuery),function(e){e.extend({smoothScroll:function(){function e(){var e=!1;if(document.URL.indexOf("google.com/reader/view")>-1&&(e=!0),b.excluded){var t=b.excluded.split(/[,\n] ?/);t.push("mail.google.com");for(var o=t.length;o--;)if(document.URL.indexOf(t[o])>-1){v&&v.disconnect(),l("mousewheel",a),e=!0,y=!0;break}}e&&l("keydown",n),b.keyboardSupport&&!e&&c("keydown",n)}function t(){if(document.body){var t=document.body,o=document.documentElement,a=window.innerHeight,n=t.scrollHeight;if(T=document.compatMode.indexOf("CSS")>=0?o:t,g=t,e(),C=!0,top!=self)k=!0;else if(n>a&&(t.offsetHeight<=a||o.offsetHeight<=a)){var i=!1,r=function(){i||o.scrollHeight==document.height||(i=!0,setTimeout(function(){o.style.height=document.height+"px",i=!1},500))};o.style.height="auto",setTimeout(r,10);var s={attributes:!0,childList:!0,characterData:!1};if(v=new L(r),v.observe(t,s),T.offsetHeight<=a){var c=document.createElement("div");c.style.clear="both",t.appendChild(c)}}if(document.URL.indexOf("mail.google.com")>-1){var l=document.createElement("style");l.innerHTML=".iu { visibility: hidden }",(document.getElementsByTagName("head")[0]||o).appendChild(l)}else if(document.URL.indexOf("www.facebook.com")>-1){var u=document.getElementById("home_stream");u&&(u.style.webkitTransform="translateZ(0)")}b.fixedBackground||y||(t.style.backgroundAttachment="scroll",o.style.backgroundAttachment="scroll")}}function o(e,t,o,a){if(a||(a=1e3),d(t,o),1!=b.accelerationMax){var n=+new Date,i=n-z;if(i<b.accelerationDelta){var r=(1+30/i)/2;r>1&&(r=Math.min(r,b.accelerationMax),t*=r,o*=r)}z=+new Date}if(j.push({x:t,y:o,lastX:0>t?.99:-.99,lastY:0>o?.99:-.99,start:+new Date}),!I){var s=e===document.body,c=function(n){for(var i=+new Date,r=0,l=0,u=0;u<j.length;u++){var d=j[u],p=i-d.start,h=p>=b.animationTime,f=h?1:p/b.animationTime;b.pulseAlgorithm&&(f=m(f));var g=d.x*f-d.lastX>>0,v=d.y*f-d.lastY>>0;r+=g,l+=v,d.lastX+=g,d.lastY+=v,h&&(j.splice(u,1),u--)}s?window.scrollBy(r,l):(r&&(e.scrollLeft+=r),l&&(e.scrollTop+=l)),t||o||(j=[]),j.length?M(c,e,a/b.frameRate+1):I=!1};M(c,e,0),I=!0}}function a(e){C||t();var a=e.target,n=s(a);if(!n||e.defaultPrevented||u(g,"embed")||u(a,"embed")&&/\.pdf/i.test(a.src))return!0;var i=e.wheelDeltaX||0,r=e.wheelDeltaY||0;return i||r||(r=e.wheelDelta||0),!b.touchpadSupport&&p(r)?!0:(Math.abs(i)>1.2&&(i*=b.stepSize/120),Math.abs(r)>1.2&&(r*=b.stepSize/120),o(n,-i,-r),void e.preventDefault())}function n(e){var t=e.target,a=e.ctrlKey||e.altKey||e.metaKey||e.shiftKey&&e.keyCode!==_.spacebar;if(/input|textarea|select|embed/i.test(t.nodeName)||t.isContentEditable||e.defaultPrevented||a)return!0;if(u(t,"button")&&e.keyCode===_.spacebar)return!0;var n,i=0,r=0,c=s(g),l=c.clientHeight;switch(c==document.body&&(l=window.innerHeight),e.keyCode){case _.up:r=-b.arrowScroll;break;case _.down:r=b.arrowScroll;break;case _.spacebar:n=e.shiftKey?1:-1,r=-n*l*.9;break;case _.pageup:r=.9*-l;break;case _.pagedown:r=.9*l;break;case _.home:r=-c.scrollTop;break;case _.end:var d=c.scrollHeight-c.scrollTop-l;r=d>0?d+10:0;break;case _.left:i=-b.arrowScroll;break;case _.right:i=b.arrowScroll;break;default:return!0}o(c,i,r),e.preventDefault()}function i(e){g=e.target}function r(e,t){for(var o=e.length;o--;)H[A(e[o])]=t;return t}function s(e){var t=[],o=T.scrollHeight;do{var a=H[A(e)];if(a)return r(t,a);if(t.push(e),o===e.scrollHeight){if(!k||T.clientHeight+10<o)return r(t,document.body)}else if(e.clientHeight+10<e.scrollHeight&&(overflow=getComputedStyle(e,"").getPropertyValue("overflow-y"),"scroll"===overflow||"auto"===overflow))return r(t,e)}while(e=e.parentNode)}function c(e,t,o){window.addEventListener(e,t,o||!1)}function l(e,t,o){window.removeEventListener(e,t,o||!1)}function u(e,t){return(e.nodeName||"").toLowerCase()===t.toLowerCase()}function d(e,t){e=e>0?1:-1,t=t>0?1:-1,(x.x!==e||x.y!==t)&&(x.x=e,x.y=t,j=[],z=0)}function p(e){if(e){e=Math.abs(e),S.push(e),S.shift(),clearTimeout(D);var t=S[0]==S[1]&&S[1]==S[2],o=h(S[0],120)&&h(S[1],120)&&h(S[2],120);return!(t||o)}}function h(e,t){return Math.floor(e/t)==e/t}function f(e){var t,o,a;return e*=b.pulseScale,1>e?t=e-(1-Math.exp(-e)):(o=Math.exp(-1),e-=1,a=1-Math.exp(-e),t=o+a*(1-o)),t*b.pulseNormalize}function m(e){return e>=1?1:0>=e?0:(1==b.pulseNormalize&&(b.pulseNormalize/=f(1)),f(e))}var g,v,w={frameRate:60,animationTime:700,stepSize:120,pulseAlgorithm:!0,pulseScale:10,pulseNormalize:1,accelerationDelta:20,accelerationMax:1,keyboardSupport:!0,arrowScroll:50,touchpadSupport:!0,fixedBackground:!0,excluded:""},b=w,y=!1,k=!1,x={x:0,y:0},C=!1,T=document.documentElement,S=[120,120,120],_={left:37,up:38,right:39,down:40,spacebar:32,pageup:33,pagedown:34,end:35,home:36},j=[],I=!1,z=+new Date,H={};setInterval(function(){H={}},1e4);var D,A=function(){var e=0;return function(t){return t.uniqueID||(t.uniqueID=e++)}}(),M=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||function(e,t,o){window.setTimeout(e,o||1e3/60)}}(),L=window.MutationObserver||window.WebKitMutationObserver;c("mousedown",i),c("mousewheel",a),c("load",t)}}),navigator.userAgent.toLowerCase().indexOf("chrome")>-1&&e.smoothScroll()}(jQuery);