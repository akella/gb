/*! Fotorama 3.0.8 | http://fotoramajs.com/license/  */

(function(a,b,c,d){function f(a){var b="bez_"+c.makeArray(arguments).join("_").replace(".","p");if(typeof c.easing[b]!="function"){var d=function(a,b){var c=[null,null],d=[null,null],e=[null,null],f=function(f,g){return e[g]=3*a[g],d[g]=3*(b[g]-a[g])-e[g],c[g]=1-e[g]-d[g],f*(e[g]+f*(d[g]+f*c[g]))},g=function(a){return e[0]+a*(2*d[0]+3*c[0]*a)},h=function(a){var b=a,c=0,d;while(++c<14){d=f(b,0)-a;if(Math.abs(d)<.001)break;b-=d/g(b)}return b};return function(a){return f(h(a),1)}};c.easing[b]=function(b,c,e,f,g){return f*d([a[0],a[1]],[a[2],a[3]])(c/g)+e}}return b}function G(a){var b={};for(var c=0;c<F.length;c++){var d=F[c][0],e=F[c][1];if(a){var f=a.attr("data-"+d);f&&(e=="n"?(f=Number(f),isNaN(f)||(b[d]=f)):e=="b"?f=="true"?b[d]=!0:f=="false"&&(b[d]=!1):e=="s"?b[d]=f:e=="bn"&&(f=="true"?b[d]=!0:f=="false"?b[d]=!1:(f=Number(f),isNaN(f)||(b[d]=f))))}else b[d]=F[c][2]}return b}function I(a,c){var d=b.createElementNS("http://www.w3.org/2000/svg",a);for(var e in c)d.setAttribute(e,c[e]);return d}function J(a,b){var c={};for(var d=0;d<H.length;d++)c[H[d]+a]=b;return c}function K(a,b,c){if(u&&!c)return J("transform",b?"translate(0,"+a+"px)":"translate("+a+"px,0)");var d={};return d[b?"top":"left"]=a,d}function L(a,b){return a.match(/-?\d+/g)[b=="left"?4:5]}function M(a,b,c){return!t||!u||!c?a.position()[b]:L(a.css("-moz-transform"),b)}function N(a){return J("transition-duration",a+"ms")}function O(a){return a=Number(String(a).replace("px","")),isNaN(a)?!1:a}function P(a,b,c){return Math.max(b,Math[c!==!1?"min":"max"](c,a))}function Q(){return!1}function R(a){a.mousemove(function(a){a.preventDefault()}).mousedown(function(a){a.preventDefault()})}function S(c){c.preventDefault();if(b.selection&&b.selection.empty)b.selection.empty();else if(a.getSelection){var d=a.getSelection();d.removeAllRanges()}}function T(a){var b=c("iframe",a);b.size()&&b.each(function(){var a=c(this).clone(),b=a.attr("src"),d=b.indexOf("?")>0?"&":"?";a.attr("src",b+d+"wmode=opaque").addClass("js-opaque"),c(this).after(a).remove()});var d=c("object",a);d.size()&&d.each(function(){var a=c(this).clone();a.addClass("js-opaque"),c('<param name="wmode" value="opaque">').appendTo(a),c("embed",a).attr({wmode:"opaque"}),c(this).after(a).remove()})}function U(a,b){a.is(":visible")?b():setTimeout(function(){U(a,b)},100)}function V(e){function ce(){cc=!0,clearTimeout(cd),f().arrows&&bY.css(N(0)),bR.removeClass("fotorama__wrap_mouseout"),setTimeout(function(){f().arrows&&bY.css(N(f().transitionDuration)),setTimeout(function(){bR.addClass("fotorama__wrap_mouseover")},1)},1)}function cf(){clearTimeout(cd),!bB&&!cc&&bR.removeClass("fotorama__wrap_mouseover").addClass("fotorama__wrap_mouseout")}function cB(a,b,d,e,g,h){var i=c(a);e=bf.i.test(g)?bg?bg:1:e;var j=f().vertical?Math.round(cm/e):Math.round(cm*e);m?(i.remove(),i=c('<canvas class="fotorama__thumb__img"></canvas>'),i.appendTo(cA.eq(h))):i.addClass("fotorama__thumb__img");var k={};k[bP]=j,k[bQ]=cm,i.attr(k).css(k).css({visibility:"visible"}),m&&!bf.i.test(g)&&i[0].getContext("2d").drawImage(a,0,0,f().vertical?cm:j,f().vertical?j:cm),k[bQ]=null,cA.eq(h).css(k).data(k),cS()}function cC(a){!bH&&!bE&&!bC&&!bs?(a||(a=0),cV(a,cA.eq(a),cB,"thumb"),setTimeout(function(){a+1<p&&cC(a+1)},50)):setTimeout(function(){cC(a)},100)}function cF(a,b,d){a&&(bf.no.test(a)||bf.px.test(a)?(L=P(O(a),Y,Z),W=L,be=!1,bd=!1):bf["%"].test(a)?(bb=Number(String(a).replace("%",""))/100,be=!f().flexible,L||(L=e.width()*(bq?1:bb)-cz,L=P(L,Y,Z)),bd=!1):bd=!0),b&&(bf.no.test(b)||bf.px.test(b)?(V=P(O(b),_,ba),X=V,bc=!1):bc=!0);if(a=="auto"||!a||b=="auto"||!b){var g=Number(d),h=cl.filter(function(){return c(this).data("state")!="error"}).filter(":first").data("srcKey");if(isNaN(g)||!g)g=null,h&&(g=t[h].imgRatio);if(g){bg=g,bh=g,bi=g;if(h){if(a=="auto"||!a)L=P(O(t[h].imgWidth),Y,Z),W=L,bd=!0;if(b=="auto"||!b)V=P(O(t[h].imgHeight),_,ba),X=V,bc=!0}bc&&g&&!bd&&(V=P(Math.round(L/g),_,ba),X=V),!bc&&g&&bd&&(L=P(Math.round(V*g),Y,Z),W=L)}}}function cG(a){var b;if(f().fitToWindowHeight||bq)b=B.height();if(!bg||a)bg=L/V,bh=bg,bi=bg;f().thumbs&&!cq&&(cq=f().vertical?cp.width():cp.height()),bp?bg=bi:bg=bh,e.css({overflow:be||bq?"hidden":""}),be||bq?(L=e.width()*(bq?1:bb)-(f().vertical&&cq&&(!bq||!f().hideNavIfFullscreen)?cq:0),bq||(L=P(L,Y,Z))):W&&(L=W),bq?(V=b-(!f().vertical&&cq&&!f().hideNavIfFullscreen?cq:0),bg=L/V):bc?(V=P(Math.round(L/bg),_,ba),bg=L/V):(V=X,bg=L/V);if(f().fitToWindowHeight&&!bq){var c=b-f().fitToWindowHeightMargin-(!f().vertical&&cq?cq:0);V>c&&(V=P(c,_,ba),bg=L/V)}}function cI(a,b,d){cG(a),b||(b=0);var e=L!=bk||V!=bl||bg!=bm,g=a||e;if(g){f().vertical?(H=V,J=L):(H=L,J=V),bR.add(cl).animate({width:L,height:V},b),f().thumbs&&f().vertical&&(f().thumbsOnRight?cp.animate({left:L},b):bR.animate({left:!bq||!f().hideNavIfFullscreen?cq:0},b));var i;f().touchStyle?(bz=(H+f().margin)*p-f().margin,bA=J,i={},i[bP]=bz,i[bQ]=bA,bS.animate(i,b).data(i).data({minPos:-(bz-H),maxPos:0})):bS.animate({width:L,height:V},b),f().thumbs&&(f().vertical?cp.animate({height:V},b):cp.animate({width:L},b),f().thumbsPreview&&e&&cS(b,d),cp.css({visibility:"visible"})),r&&!f().vertical&&(f().arrows&&bY.animate({top:V/2},b),i={},i[bM]=J/2,bT.animate(i,b));if(h=="loading"||h=="error")i={},i[bL]=(f().touchStyle?ch:0)*(H+f().margin)+H/2,bT.animate(i,b);if(cg&&f().touchStyle){var j=-ch*(H+f().margin);cO(bS,j,0)}bn=!0;var k=0;c(cH).each(function(){clearTimeout(this)}),cH=[],cT(cg,ch,b),cl.each(function(a){if(a!=ch){var b=c(this),d=b.data("img");d&&b.data("img").css({visibility:"hidden"});var e=setTimeout(function(){cT(b,a)},k*50+50);cH.push(e),k++}})}bk=L,bl=V,bm=bg}function cJ(){var a=cg.data("srcKey");a&&t[a].imgWidth&&t[a].imgHeight&&t[a].imgRatio&&(L=t[a].imgWidth,W=L,V=t[a].imgHeight,X=V,bg=t[a].imgRatio,bh=bg,cI(!1,f().transitionDuration))}function cK(a,b,c){function d(){f().touchStyle||(b=0),bT.css(bL,b*(H+f().margin)+H/2),bU=setTimeout(function(){bT.stop().fadeTo(r?0:y,1)},100)}clearTimeout(bU),a=="loading"?(d(),e.addClass("fotorama_loading").removeClass("fotorama_error"),j.spin(bT[0])):a=="error"?(d(),e.addClass("fotorama_error").removeClass("fotorama_loading"),j.stop()):a=="loaded"&&(e.removeClass("fotorama_loading fotorama_error"),bT.stop().fadeTo(Math.min(r?0:y),0,function(){j.stop()})),h=a}function cL(){return{index:ch,src:t[ch],img:cg[0],thumb:f().thumbs?cn[0]:null,caption:ci}}function cM(a){clearInterval(a.data("backAnimate"))}function cN(){f().onTransitionStop&&f().onTransitionStop.call(e[0],cL())}function cO(a,b,c,d){var e=isNaN(b)?0:Math.round(b);cM(a),d?(e=d,u&&f().cssTransitions&&a.data({backAnimate:setInterval(function(){var e=M(a,bL,f().cssTransitions);Math.abs(e-d)<1&&cO(a,b,Math.max(y,c/2))},10)})):setTimeout(function(){cN()},c+10),c&&(clearTimeout(bt),bs=!0),u&&f().cssTransitions?(a.css(N(c)),a.css(K(e,f().vertical))):a.stop().animate(K(e,f().vertical,!f().cssTransitions),c,x,function(){d&&cO(a,b,Math.max(y,c/2))}),bt=setTimeout(function(){bs=!1,f().flexible&&a==bS&&cJ()},c)}function cP(){if(cs>H||!f().thumbsCentered)cr.data({minPos:cs>H?-(cs-H):f().thumbMargin}),bE||cr.data({maxPos:f().thumbMargin});else{var a=H/2-cs/2;cr.data({minPos:a}),bE||cr.data({maxPos:a})}}function cQ(a,b,c){a*=1.1;if(cs){if(!c||cs<H)bF=!1;var e=cn.position()[bL],g=cn.data()[bP];cP();if(!g&&cy)cx.hide(),cy=!1;else{cy||(cx.show(),cy=!0);if(cs>H){var h=e+g/2,i=H/2,j=cA.index(cn),k=j-co;ct==d&&(ct=cr.position()[bL]);if(bJ&&b&&b>Math.max(36,f().thumbMargin*2)&&b<H-Math.max(36,f().thumbMargin*2)&&(k>0&&b>i*.75||k<0&&b<i*1.25)){var l;k>0?l=j+1:l=j-1,l<0?l=0:l>p-1&&(l=p-1);if(j!=l){var m=cA.eq(l);h=m.position()[bL]+m.data()[bP]/2,i=b}}var n=-(cs-H),o=Math.round(-(h-i)+f().thumbMargin);if(k>0&&o>ct||k<0&&o<ct)e+ct<f().thumbMargin?o=-(e-f().thumbMargin):e+ct+g>H?o=-(e*2-H+g+f().thumbMargin):o=ct;o<=cr.data("minPos")?o=cr.data("minPos"):o>=f().thumbMargin&&(o=f().thumbMargin),cR(o),bE||cr.data({maxPos:f().thumbMargin})}else o=cr.data("minPos");!bF&&!bE?(cO(cr,o,a,!1),bG&&(bF=!0),ct=o):bG=!0;var q=g-(v?0:f().thumbBorderWidth*2),r=e;a*=.9,u&&f().cssTransitions?(cx.css(N(a)),cx.css(K(r,f().vertical)).css(bP,q)):f().vertical?cx.stop().animate({top:r,height:q},a,x):cx.stop().animate({left:r,width:q},a,x)}}}function cR(a){f().shadows&&(cs>H?(cp.addClass("fotorama__thumbs_shadow"),a<=cr.data("minPos")?cp.removeClass("fotorama__thumbs_shadow_no-left").addClass("fotorama__thumbs_shadow_no-right"):a>=f().thumbMargin?cp.removeClass("fotorama__thumbs_shadow_no-right").addClass("fotorama__thumbs_shadow_no-left"):cp.removeClass("fotorama__thumbs_shadow_no-left fotorama__thumbs_shadow_no-right")):cp.removeClass("fotorama__thumbs_shadow"))}function cS(a,b){cs=cr[bP](),cP(),cQ(a?a:0,!1,!b)}function cT(a,b,c){var d=a.data("img"),e=a.data("detached");c=c?c:0;if(d&&!e){var g=a.data("srcKey"),h=t[g].imgWidth,i=t[g].imgHeight,j=t[g].imgRatio,k=0,l=0;f().touchStyle&&a.css(bL,b*(H+f().margin));if(h!=L||i!=V||f().alwaysPadding||bq){var m=0;if(j/bg<.99||j/bg>1.01||f().alwaysPadding||bq)m=f().minPadding*2;j>=bg?!bq&&!f().cropToFit||bq&&!f().cropToFitIfFullscreen?(h=Math.round(L-m)<h||f().zoomToFit||bq&&t[b].imgRel?Math.round(L-m):h,i=Math.round(h/j),V-i<4&&(i+=V-i)):(i=V,h=Math.round(i*j)):!bq&&!f().cropToFit||bq&&!f().cropToFitIfFullscreen?(i=Math.round(V-m)<i||f().zoomToFit||bq&&t[b].imgRel?Math.round(V-m):i,h=Math.round(i*j),L-h<4&&(h+=L-h)):(h=L,i=Math.round(h/j))}if(h&&i){var n={width:h,height:i};i!=V&&(k=Math.round((V-i)/2)),h!=L&&(l=Math.round((L-h)/2)),d.attr(n),n.top=k,n.left=l,d.animate(n,c)}d.css({visibility:"visible"}),cW(a,b)}else d&&e&&a.data({needToResize:!0})}function cU(a,b){return a===" "?"ё"+b:a}function cV(a,b,d,e){function o(c){function k(){h.css({visibility:"hidden"}),g.src=c;if(j==0){h.appendTo(b);if(e=="thumb"){var a=f().vertical?Math.round(cm/(f().aspectRatio?f().aspectRatio:bg?bg:1)):Math.round(cm*(f().aspectRatio?f().aspectRatio:bg?bg:1));b.css(bP,a).data(bP,a),cS()}}}function l(){bK++,bK==p&&(bJ=!0)}function m(){bf.i.test(c)||(G[c]="loaded"),h.unbind("error load").error(function(){h.unbind("error"),g.src=c,t[a].imgRel=!1,cT(cl.eq(a),a)}),setTimeout(function(){U(b,function(){t[c]||(t[c]=[],t[c].imgWidth=h.width(),t[c].imgHeight=h.height(),t[c].imgWidth||(t[c].imgWidth=b.data("html")?b.data("html").width()||z:z),t[c].imgHeight||(t[c].imgHeight=b.data("html")?b.data("html").height()||A:A),t[c].imgRatio=t[c].imgWidth/t[c].imgHeight),b.trigger("fotoramaload").data({state:"loaded"}),d(g,t[c].imgWidth,t[c].imgHeight,t[c].imgRatio,c,a)})},100),e=="thumb"&&l()}function n(){m()}function q(a){G[c]="error",h.unbind("error load"),j<i.length&&a?(j++,bf.i.test(i[j])&&q(!0),o(i[j])):(b.trigger("fotoramaerror").data({state:"error"}),e=="thumb"&&l())}if(!G[c])bf.i.test(c)?n():(G[c]="loading",h.unbind("error load").bind("error",function(){q(!0)}).bind("load",n),k());else{function r(){G[c]=="error"?q(!1):G[c]=="loaded"?n():setTimeout(r,100)}k(),r()}}var g=new Image,h=c(g),i=[],j=0,k=cU(t[a].imgHref,a),l=cU(t[a].imgSrc,a),m=cU(t[a].thumbSrc,a),n=e=="img"?"push":"unshift";k&&i[n](k),l&&i[n](l),m&&i[n](m),o(i[j])}function cW(a,b){var c=a.data("img"),d=a.data("srcKey"),e=t[b].imgRel;if(c&&e&&e!=d&&!q){var f=c.data("full"),g=a.data("detached");(bq&&!f||!bq&&f)&&!g&&(c[0].src=bq?e:d,c.data({full:bq}))}}function cX(a,b){if(!a.data("wraped")){bS.append(a.data({state:"loading"})),b!=ch&&!f().touchStyle&&a.stop().fadeTo(0,0);function d(d,e,g,h,i){var j=c(d);j.addClass("fotorama__img"),a.data({img:j,srcKey:i});var k=!1;if((!L||!V)&&!bn||!bo&&b==f().startImg){L=e,f().width=e;if(bc)V=g,f().height=g;else if(bd){var l=e/g;L=Math.round(V*l),f().width=L}f().aspectRatio||(f().aspectRatio=L/V),k=!0,bo=b==f().startImg}k||f().flexible?(cI(!0),f().flexible&&cJ()):cT(a,b),a.css({visibility:"visible"})}a.data({wraped:!0,detached:!1});if(l&&k[b].html&&k[b].html.length||f().html&&f().html[b]&&f().html[b].length){var e=k[b].html||f().html[b];r&&f().html&&f().html[b]&&f()._html&&f()._html[b]&&e.html(f()._html[b]);var g=c(e);a.append(e).data({html:g,htmlIsIframe:g.is("iframe")}),T(a)}cV(b,a,d,"img")}else f().detachSiblings&&a.data("detached")&&(a.data({detached:!1}).appendTo(bS),a.data("needToResize")&&(cT(a,b),a.data({needToResize:!1})))}function cY(a,b){var d=0,e=!1,g=[],h=[],j=bq?Math.min(1,f().preload):f().preload;for(i=0;i<j*2+1;i++){var k=b-j+i;if(k>=0&&k<p&&!f().loop||f().loop){k<0&&(k=p+k),k>p-1&&(k=k-p);if(!cl.eq(k).data("wraped")||cl.eq(k).data("detached"))d++,g.push(k);h.push(k)}else e=!0}if(d>=j||e)c(g).each(function(a){var b=a*50;setTimeout(function(){cX(cl.eq(g[a]),g[a])},b)}),f().detachSiblings&&cl.filter(function(a){var d=c(this),e=!1;for(var f=0;f<h.length&&!e;f++)h[f]==a&&(e=!0);return d.data("state")!="loading"&&!e&&b!=a}).data({detached:!0}).detach();if(cj.data("htmlIsIframe")){var l=cj.html();cj.html("").html(l)}}function cZ(){(ch==0||p<2)&&!f().loop?bZ.addClass("fotorama__arr_disabled").data("disabled",!0):bZ.removeClass("fotorama__arr_disabled").data("disabled",!1),(ch==p-1||p<2)&&!f().loop?b$.addClass("fotorama__arr_disabled").data("disabled",!0):b$.removeClass("fotorama__arr_disabled").data("disabled",!1)}function c$(){location.replace(location.protocol+"//"+location.host+location.pathname+location.search+"#"+(ch+1))}function c_(a){a||(a=0),clearTimeout(by),by=setTimeout(function(){cg.data("state")!="loading"?bx&&e.trigger("showimg",[ch+1,!1,!0]):cg.bind("fotoramaload fotoramaerror",function(){c_(a)})},Math.max(f().autoplay,a*2))}function da(a,b,d,g,i,j,l,m){function p(){f().caption&&(ci=k[o].caption?k[o].caption:k[o].title,ci?cD.html(ci).show():cD.html("").hide())}function r(){cj.removeClass("fotorama__frame_active"),a.addClass("fotorama__frame_active")}var n,o=cl.index(a);cl.each(function(){c(this).unbind("fotoramaload fotoramaerror")}),typeof i!="number"&&(g?i=0:i=f().transitionDuration),!g&&b&&b.altKey&&(i=i*10);var q=a.data("state");q=="loading"||!q?(cK("loading",o,i),a.one("fotoramaload",function(){cK("loaded",o,i),p()}),a.one("fotoramaerror",function(){cK("error",o,i),p()})):q=="error"?cK("error",o,i):q!=h&&cK("loaded",o,i),p(),cg?(cj=cg,n=ch,f().thumbs&&(ck=cn)):(cj=cl.not(a),f().thumbs&&(ck=cA.not(cA.eq(o)))),f().thumbs&&(cn=cA.eq(o),n&&(co=n),ck.removeClass("fotorama__thumb_selected").data("disabled",!1),cn.addClass("fotorama__thumb_selected").data("disabled",!0)),f().thumbs&&f().thumbsPreview&&(n!=o||g)&&cQ(i,d);if(f().touchStyle){var s=-o*(H+f().margin);r(),cO(bS,s,i,j)}else if(f().transition=="crossFade")cl.not(cj.stop()).stop().fadeTo(0,0),a.stop().fadeTo(i,1),cj.not(a).stop().fadeTo(i,0,function(){cN(),f().flexible&&cJ()});else if(n!=o||g){var t=i,u=0;q!="loaded"&&(t=0,u=i),cl.not(cj.stop()).stop().fadeTo(0,0),setTimeout(function(){r(),a.stop().fadeTo(t,1,function(){cj.not(a).stop().fadeTo(u,0,function(){f().flexible&&cJ()}),cN()})},10)}cg=a,ch=o,f().hash&&typeof n!="undefined"&&c$(),bx&&!l&&f().stopAutoplayOnAction&&(bx=!1),c_(i);var v=cL();e.data(v),f().arrows&&cZ();var w=a.data("wraped");clearTimeout(bw),bw=setTimeout(function(){!w&&o!=f().startImg&&(cX(a,o),f().onShowImg&&!m&&f().onShowImg.call(e[0],v,l)),cY(a,o)},(i?Math.max(i/2,y):0)*1.1);if(w||o==f().startImg)cX(a,o),f().onShowImg&&!m&&f().onShowImg.call(e[0],v,l)}function db(a,b){b.stopPropagation(),b.preventDefault();var c=ch+a;c<0&&(c=f().loop?p-1:0),c>p-1&&(c=f().loop?0:p-1),da(cl.eq(c),b)}function dd(a,b){clearTimeout(dc),dc=setTimeout(function(){cI(b)},10)}function de(){br||(B.bind("resize",dd),n&&a.addEventListener("orientationchange",dd,!1),br=!0)}function df(a){a.stopPropagation();var b=c(this);if(!b.data("disabled")){var d=cA.index(c(this)),e=a[bN]-cp.offset()[bL];da(cl.eq(d),a,e)}}function dg(a,b,c,d){function z(a,b){return Math.round(a+(b-g)/1.5)}function A(c){if((n||c.which<2)&&cg){function d(){m=(new Date).getTime(),j=h,k=i,o=[[m,h]],cM(a),u&&f().cssTransitions?a.css(N(0)):a.stop(),g=M(a,bL,f().cssTransitions),a.css(K(g,f().vertical,!f().cssTransitions)),l=g,b(),y=!1}n?n&&c.targetTouches.length==1?(h=c.targetTouches[0][bN],i=c.targetTouches[0][bO],d(),a[0].addEventListener("touchmove",B,!1),a[0].addEventListener("touchend",D,!1)):n&&c.targetTouches.length>1&&c.preventDefault():(h=c[bN],c.preventDefault(),d(),C.mousemove(B),C.mouseup(D))}}function B(b){function d(){b.preventDefault(),p=(new Date).getTime(),o.push([p,h]);var d=j-h;g=l-d,g>a.data("maxPos")?(g=z(g,a.data("maxPos")),x="left"):g<a.data("minPos")?(g=z(g,a.data("minPos")),x="right"):x=!1,f().touchStyle&&a.css(K(g,f().vertical,!f().cssTransitions)),c(g,d,x),(h-e.offset().left>H||h-e.offset().left<0)&&C.trigger("mouseup")}n?n&&b.targetTouches.length==1&&(h=b.targetTouches[0][bN],i=b.targetTouches[0][bO],v?t===!0&&d():Math.abs(h-j)-Math.abs(i-k)>=-5?(t=!0,v=!0):Math.abs(i-k)-Math.abs(h-j)>=-5&&(t="prevent",v=!0)):(h=b[bN],d())}function D(b){if((!n||!b.targetTouches.length)&&y===!1){n?(a[0].removeEventListener("touchmove",B,!1),a[0].removeEventListener("touchend",D,!1)):(C.unbind("mouseup"),C.unbind("mousemove")),r=(new Date).getTime();var c=-g,e=r-w,f,i,j,k;for(var l=0;l<o.length;l++)f=Math.abs(e-o[l][0]),l==0&&(i=f,j=r-o[l][0],k=o[l][1]),f<=i&&(i=f,j=o[l][0],k=o[l][1]);var m=k-h,p=m>=0,u=r-j,x=u<=w,z=r-s,A=p===q;d(c,u,x,z,A,m,b,t),s=r,q=p,t=!1,v=!1,y=!0}}var g,h,i,j,k,l,m,o=[],p,q,r,s=0,t=!1,v=!1,x=!1,y;n?a[0].addEventListener("touchstart",A,!1):a.mousedown(A),!n}var f=function(){return e.data("options")};f().backgroundColor&&!f().background&&(f().background=f().backgroundColor),f().thumbsBackgroundColor&&!f().navBackground&&(f().navBackground=f().thumbsBackgroundColor),f().thumbColor&&!f().dotColor&&(f().dotColor=f().thumbColor),f().click!==null&&(f().pseudoClick=f().click);if(f().nav===!0||f().nav=="true"||f().nav=="thumbs")f().thumbs=!0,f().thumbsPreview=!0;else if(f().nav=="dots")f().thumbs=!0,f().thumbsPreview=!1;else if(f().nav===!1||f().nav=="false"||f().nav=="none")f().thumbs=!1;if(f().transition==="fade"||f().transition==="crossFade")f().touchStyle=!1;f().cropToFit&&(f().cropToFitIfFullscreen=!0),f().thumbsPreview&&f().background&&!f().navBackground&&(f().navBackground=f().background),f().caption&&(f().caption===!0||f().caption=="true"||f().caption=="simple"?f().caption=!0:f().caption!="overlay"&&(f().caption=!1)),f().navPosition=="top"?(f().thumbsOnTop=!0,f().thumbsOnRight=!1):f().navPosition=="right"?(f().thumbsOnTop=!1,f().thumbsOnRight=!0):f().navPosition=="bottom"?(f().thumbsOnTop=!1,f().thumbsOnRight=!1):f().navPosition=="left"&&(f().thumbsOnTop=!1,f().thumbsOnRight=!1);var h;f().hash&&b.location.hash&&(f().startImg=parseInt(b.location.hash.replace("#",""))-1);var j=new g({length:8,radius:6,width:2,color:f().spinnerColor,rotate:15}),k,l=f().data&&(typeof f().data=="object"||typeof f().data=="string");l?k=c(f().data).filter(function(){return this.img||this.img===" "||this.href||this.href===" "}):k=e.children().filter(function(){var a=c(this),b=a.children("img"),d=(a.is("a")&&b.length||a.is("img"))&&(a.attr("href")||a.attr("href")===" "||a.attr("src")||a.attr("src")===" "||b.attr("src")||b.attr("src")===" "),e=a.is(":empty");return d||a.data({html:!0}),d||!e});var p=k.size();e.data({size:p}),f().preload=Math.min(f().preload,p);if(f().startImg>p-1||typeof f().startImg!="number")f().startImg=0;var t=[];k.each(function(a){if(!l){var b=c(this);if(!b.data("html")){var d=b.children();t[a]={imgHref:b.attr("href"),imgSrc:b.attr("src"),thumbSrc:d.attr("src"),imgRel:b.attr("rel")?b.attr("rel"):d.attr("rel")},this.caption=b.attr("alt")||d.attr("alt")}else t[a]={imgHref:b.attr("data-img")||" ",thumbSrc:b.attr("data-thumb"),imgRel:b.attr("data-full")},this.caption=this.caption||b.attr("data-caption"),f().html||(f().html={}),f().html[a]=b,r&&(f()._html||(f()._html={}),f()._html[a]=b.html())}else t[a]={imgHref:this.img?this.img:this.href?this.href:this.length?String(this):null,thumbSrc:this.thumb,imgRel:this.full}}),e.html("").addClass("fotorama "+(f().vertical?"fotorama_vertical":"fotorama_horizontal")),v&&e.addClass("fotorama_quirks");if(s||q)var F=e.wrap('<div class="fotorama-outer"></div>').parent();f().arrows||(f().loop=!0);var G=[],H,J,L,V,W,X,Y=O(f().minWidth),Z=O(f().maxWidth),_=O(f().minHeight),ba=O(f().maxHeight),bb=1,bc=!0,bd=!0,be,bf={no:/^[0-9.]+$/,px:/^[0-9.]+px$/,"%":/^[0-9.]+%$/,i:/^ё\d+$/},bg,bh,bi,bj,bk,bl,bm,bn,bo,bp,bq,br,bs,bt,bu,bv,bw,bx,by;if(f().autoplay===!0||f().autoplay=="true"||f().autoplay>0)bx=!0;typeof f().autoplay!="number"&&(f().autoplay=5e3);if(f().touchStyle)var bz=0,bA,bB=!1,bC=!1,bD;if(f().thumbs&&f().thumbsPreview)var bE=!1,bF=!1,bG=!1,bH=!1,bI,bJ=!1,bK=0;var bL,bM,bN,bO,bP,bQ;f().vertical?(bL="top",bM="left",bN="pageY",bO="pageX",bP="height",bQ="width"):(bL="left",bM="top",bN="pageX",bO="pageY",bP="width",bQ="height");var bR=c('<div class="fotorama__wrap"></div>').appendTo(e),bS=c('<div class="fotorama__shaft"></div>').appendTo(bR);f().touchStyle||(R(bR),R(bS));var bT=c('<div class="fotorama__state"></div>').appendTo(bS);o&&c(I("svg",{viewBox:"0 0 32 32"})).append(c(I("g",{fill:"none",stroke:f().spinnerColor,"stroke-width":2})).append(I("circle",{cx:16,cy:16,r:13})).append(I("line",{x1:7,y1:7,x2:25,y2:25}))).appendTo(bT),f().noise&&c('<div class="fotorama__noise"></div>').prependTo(bR);var bU;if(f().fullscreenIcon&&!f().fullscreen)var bV=c('<div class="fotorama__fsi"><i class="i1"><i class="i1"></i></i><i class="i2"><i class="i2"></i></i><i class="i3"><i class="i3"></i></i><i class="i4"><i class="i4"></i></i><i class="i0"></i></div>').appendTo(bR);n&&e.addClass("fotorama_touch"),q&&(f().shadows=!1),f().touchStyle?bR.addClass("fotorama__wrap_style_touch"):bR.addClass("fotorama__wrap_style_fade"),f().shadows&&e.addClass("fotorama_shadows"),u&&f().cssTransitions&&e.addClass("fotorama_csstransitions");if(f().arrows){var bW,bX;f().vertical?(bW=f().arrowPrev?f().arrowPrev:"&#9650;",bX=f().arrowNext?f().arrowNext:"&#9660;"):(bW=f().arrowPrev?f().arrowPrev:"&#9664;",bX=f().arrowNext?f().arrowNext:"&#9654;");var bY=c('<i class="fotorama__arr fotorama__arr_prev">'+bW+'</i><i class="fotorama__arr fotorama__arr_next">'+bX+"</i>").appendTo(bR),bZ=bY.eq(0),b$=bY.eq(1);R(bY);var b_,ca;function cb(){clearTimeout(ca),ca=setTimeout(function(){var a=b_>=H/2;b$[a?"addClass":"removeClass"]("fotorama__arr_hover"),bZ[a?"removeClass":"addClass"]("fotorama__arr_hover"),f().touchStyle||bS.css({cursor:a&&b$.data("disabled")||!a&&bZ.data("disabled")?"default":"pointer"})},10)}n||f().pseudoClick&&bR.mousemove(function(a){b_=a[bN]-bR.offset()[bL],cb()})}else!f().touchStyle&&f().pseudoClick&&p>1&&bS.css({cursor:"pointer"});var cc=!1,cd;n||(bR.mouseenter(function(){ce()}),bR.mouseleave(function(){cc=!1,cf()}));var cg,ch,ci,cj,ck,cl=c();k.each(function(a){var b=c('<div class="fotorama__frame" style="visibility: hidden;"></div>');cl=cl.add(b)});if(f().thumbs){var cm=Number(f().thumbSize);if(isNaN(cm)||!cm)cm=f().vertical?64:48;var cn,co=0,cp=c('<div class="fotorama__thumbs" style="visibility: hidden;"></div>')[f().thumbsOnTop?"prependTo":"appendTo"](e),cq,cr=c('<div class="fotorama__thumbs-shaft"></div>').appendTo(cp);f().touchStyle||R(cp);if(f().thumbsPreview){cq=cm+f().thumbMargin*2,cp.addClass("fotorama__thumbs_previews").css(bQ,cq);var cs=0,ct=d,cu=cm-(v?0:f().thumbBorderWidth*2),cv=f().thumbMargin,cw={};cw[bQ]=cu,cw[bM]=cv,cw.borderWidth=f().thumbBorderWidth;var cx=c('<i class="fotorama__thumb-border"></i>').css(cw).appendTo(cr),cy}var cz=f().vertical&&cp?cp.width():0;e.css({minWidth:Y+cz}),k.each(function(a){var b;if(f().thumbsPreview){b=c('<div class="fotorama__thumb"></div>');var d={};d[bQ]=cm,d.margin=f().thumbMargin,b.css(d)}else b=c('<i class="fotorama__thumb"><i class="fotorama__thumb__dot"></i></i>');b.appendTo(cr)});var cA=c(".fotorama__thumb",e)}if(f().caption){var cD=c('<p class="fotorama__caption"></p>');if(f().caption=="overlay")cD.appendTo(bR).addClass("fotorama__caption_overlay");else{cD.appendTo(e);var cE=cD.wrap('<div class="fotorama__caption-outer"></div>').parent()}}cF(f().width,f().height,f().aspectRatio);var cH=[];da(cl.eq(f().startImg),!1,!1,!0,!1,!1,!0),L&&V&&(bo=!0,cI()),f().thumbs&&f().thumbsPreview&&cC(0),f().thumbs&&(f().dotColor&&!f().thumbsPreview&&cA.children().css({backgroundColor:f().dotColor}),f().navBackground&&cp.css({background:f().navBackground}),f().thumbsPreview&&f().thumbBorderColor&&cx.css({borderColor:f().thumbBorderColor})),f().background&&bR.add(f().touchStyle?!1:cl).css({background:f().background}),f().arrowsColor&&f().arrows&&bY.css({color:f().arrowsColor});var dc=!1;de(),e.bind("dblclick",S),e.bind("showimg",function(a,b,c,d){typeof b!="number"&&(b=="next"?b=ch+1:b=="prev"?b=ch-1:b=="first"?b=0:b=="last"?b=p-1:(b=ch,d=!0)),b>p-1&&(b=0),(!f().touchStyle||!bC)&&da(cl.eq(b),a,!1,!1,c,!1,d)}),e.bind("play",function(a,b){bx=!0,b=Number(b),isNaN(b)||(f().autoplay=b),c_(y)}),e.bind("pause",function(){bx=!1}),e.bind("rescale",function(a,b,c,d,e){cF(b,c,d),bg=L/V,bi=bg,bp=!be,e=Number(e),isNaN(e)&&(e=0),cI(!1,e)}),e.bind("fullscreenopen",function(){bu=B.scrollTop(),bv=B.scrollLeft(),bq=!0,bV&&bV.trigger("mouseleave",!0),B.scrollLeft(0).scrollTop(0),setTimeout(function(){D.add(E).addClass("fullscreen"),e.addClass("fotorama_fullscreen"),(s||q)&&e.appendTo(E).addClass("fotorama_fullscreen_quirks"),f().caption&&!f().caption!="overlay"&&cD.appendTo(bR),f().thumbs&&f().hideNavIfFullscreen&&cp.hide(),de(),cg&&da(cg,!1,!1,!0,0,!1,!0,!0),cI(!1,!1,!0),f().onFullscreenOpen&&f().onFullscreenOpen.call(e[0],cL())},0)}),e.bind("fullscreenclose",function(){bq=!1,bV&&bV.trigger("mouseleave",!0),D.add(E).removeClass("fullscreen"),e.removeClass("fotorama_fullscreen"),(s||q)&&e.appendTo(F).removeClass("fotorama_fullscreen_quirks"),f().caption&&!f().caption!="overlay"&&cD.appendTo(cE),be||(L=f().width,V=f().height),f().thumbs&&f().hideNavIfFullscreen&&cp.show(),cg&&da(cg,!1,!1,!0,0,!1,!0,!0),f().flexible?cJ():cI(!1,!1,!0),B.scrollLeft(bv).scrollTop(bu),f().onFullscreenClose&&f().onFullscreenClose.call(e[0],cL())}),e.bind("reset",function(){dd({type:"resize"},!0)}),C.bind("keydown",function(a){bq&&(a.keyCode==27&&!f().fullscreen?(a.preventDefault(),e.trigger("fullscreenclose")):a.keyCode==39||a.keyCode==40?e.trigger("showimg",ch+1):(a.keyCode==37||a.keyCode==38)&&e.trigger("showimg",ch-1))}),f().thumbs&&cA.bind("click",df),f().arrows&&(bZ.bind("click",function(a){c(this).data("disabled")||db(-1,a)}),b$.bind("click",function(a){c(this).data("disabled")||db(1,a)})),!f().touchStyle&&!n&&f().pseudoClick&&bR.bind("click",function(a){if(f().html){var b,d;b=c(a.target),d=b.filter("a"),d.length||(d=b.parents("a"))}if(!d||!d.length){var g=a[bN]-bR.offset()[bL]>=H/2;if(f().onClick)var h=f().onClick.call(e[0],cL());h!==!1&&(!a.shiftKey&&g&&f().arrows||a.shiftKey&&!g&&f().arrows||!f().arrows&&!a.shiftKey?db(1,a):db(-1,a))}}),bV&&bV.bind("click",function(a){a.stopPropagation(),e.trigger(bq?"fullscreenclose":"fullscreenopen")}).bind("mouseenter mouseleave",function(a,b){b&&a.stopPropagation(),bV[a.type=="mouseenter"?"addClass":"removeClass"]("fotorama__fsi_hover")}),f().fullscreen&&e.trigger("fullscreenopen");if(f().touchStyle||n){var dh=!1;function di(){bC=!0}function dj(a,b,d){clearTimeout(bD),bB||(f().shadows&&bR.addClass("fotorama__wrap_shadow"),n||bS.addClass("fotorama__shaft_grabbing"),bB=!0),f().shadows&&(d?bR.addClass("fotorama__wrap_shadow_no-"+d).removeClass("fotorama__wrap_shadow_no-"+(d=="left"?"right":"left")):f().shadows&&bR.removeClass("fotorama__wrap_shadow_no-left fotorama__wrap_shadow_no-right")),Math.abs(b)>=5&&!dh&&(dh=!0,c("a",bR).bind("click",Q))}function dk(a,b,d,g,h,i,j,k){bC=!1,bD=setTimeout(function(){!n&&f().arrows&&cf(),dh=!1,c("a",bR).unbind("click",Q)},w),n||bS.removeClass("fotorama__shaft_grabbing"),f().shadows&&bR.removeClass("fotorama__wrap_shadow");var l=!1,m=!1,o,q;f().html&&(o=c(j.target),q=o.filter("a"),q.length||(q=o.parents("a")));if(f().touchStyle)if(bB){d&&(i<=-10?l=!0:i>=10&&(m=!0));var r=y,s=Math.round(a/(H+f().margin));if(l||m){i=-i;var t=i/b,u=Math.round(-a+t*250),v,x,z=.03;l?(s=Math.ceil(a/(H+f().margin))-1,v=-s*(H+f().margin),u>v&&(x=Math.abs(u-v),r=Math.abs(r/(t*250/(Math.abs(t*250)-x*(1-z)))),x=v+x*z)):m&&(s=Math.floor(a/(H+f().margin))+1,v=-s*(H+f().margin),u<v&&(x=Math.abs(u-v),r=Math.abs(r/(t*250/(Math.abs(t*250)-x*(1-z)))),x=v-x*z))}s<0&&(s=0,x=!1,r=y),s>p-1&&(s=p-1,x=!1,r=y),da(cl.eq(s),j,!1,!1,r,x)}else{if(f().html&&q.length)return!1;if(f().onClick&&k!="prevent")var A=f().onClick.call(e[0],cL());if(A!==!1&&f().pseudoClick&&!n&&b<w){var B=j[bN]-bR.offset()[bL]>=H/2;!j.shiftKey&&B&&f().arrows||j.shiftKey&&!B&&f().arrows||!f().arrows&&!j.shiftKey?db(1,j):db(-1,j)}else da(cg,j,!1,!1,!1,!1,!0)}else{if(i==0&&f().html&&q.length)return!1;i>=0?db(1,j):i<0&&db(-1,j)}bB=!1}dg(bS,di,dj,dk);if(f().touchStyle&&f().thumbs&&f().thumbsPreview){var dl=!1;function dm(){bE=!0,bF=!0}function dn(a,b){!bH&&Math.abs(b)>=5&&(cA.unbind("click",df),dl=!0,clearTimeout(bI),bH=!0),cR(a)}function dp(a,b,c,d,e,f,g){bE=!1,bH=!1,bI=setTimeout(function(){dl&&(cA.bind("click",df),dl=!1)},w),a=-a;var h=a,i,j=y*2;bG&&bH&&(cQ(0,!1,!1),bG=!1);if(a>cr.data("maxPos"))h=cr.data("maxPos"),j=j/2;else if(a<cr.data("minPos"))h=cr.data("minPos"),j=j/2;else if(c){f=-f;var k=f/b;h=Math.round(a+k*250);var l=.04;h>cr.data("maxPos")?(i=Math.abs(h-cr.data("maxPos")),j=Math.abs(j/(k*250/(Math.abs(k*250)-i*(1-l)))),h=cr.data("maxPos"),i=h+i*l):h<cr.data("minPos")&&(i=Math.abs(h-cr.data("minPos")),j=Math.abs(j/(k*250/(Math.abs(k*250)-i*(1-l)))),h=cr.data("minPos"),i=h-i*l)}g.altKey&&(j=j*10),ct=h,h!=a&&(cO(cr,h,j,i),cR(h))}dg(cr,dm,dn,dp)}}}var e=function(a,b,c){function z(a){i.cssText=a}function A(a,b){return z(l.join(a+";")+(b||""))}function B(a,b){return typeof a===b}function C(a,b){return!!~(""+a).indexOf(b)}function D(a,b){for(var d in a){var e=a[d];if(!C(e,"-")&&i[e]!==c)return b=="pfx"?e:!0}return!1}function E(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:B(f,"function")?f.bind(d||b):f}return!1}function F(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+n.join(d+" ")+d).split(" ");return B(b,"string")||B(b,"undefined")?D(e,b):(e=(a+" "+o.join(d+" ")+d).split(" "),E(e,b,c))}var d="2.6.2",e={},f=b.documentElement,g="modernizr",h=b.createElement(g),i=h.style,j,k={}.toString,l=" -webkit- -moz- -o- -ms- ".split(" "),m="Webkit Moz O ms",n=m.split(" "),o=m.toLowerCase().split(" "),p={svg:"http://www.w3.org/2000/svg"},q={},r={},s={},t=[],u=t.slice,v,w=function(a,c,d,e){var h,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:g+(d+1),l.appendChild(j);return h=["&#173;",'<style id="s',g,'">',a,"</style>"].join(""),l.id=g,(m?l:n).innerHTML+=h,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=f.style.overflow,f.style.overflow="hidden",f.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),f.style.overflow=k),!!i},x={}.hasOwnProperty,y;!B(x,"undefined")&&!B(x.call,"undefined")?y=function(a,b){return x.call(a,b)}:y=function(a,b){return b in a&&B(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(a){var b=this;if(typeof b!="function")throw new TypeError;var c=u.call(arguments,1),d=function(){if(this instanceof d){var e=function(){};e.prototype=b.prototype;var f=new e,g=b.apply(f,c.concat(u.call(arguments)));return Object(g)===g?g:f}return b.apply(a,c.concat(u.call(arguments)))};return d}),q.canvas=function(){var a=b.createElement("canvas");return!!a.getContext&&!!a.getContext("2d")},q.touch=function(){var c;return"ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch?c=!0:w(["@media (",l.join("touch-enabled),("),g,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(a){c=a.offsetTop===9}),c},q.csstransforms=function(){return!!F("transform")},q.csstransitions=function(){return F("transition")},q.svg=function(){return!!b.createElementNS&&!!b.createElementNS(p.svg,"svg").createSVGRect};for(var G in q)y(q,G)&&(v=G.toLowerCase(),e[v]=q[G](),t.push((e[v]?"":"no-")+v));return e.addTest=function(a,b){if(typeof a=="object")for(var d in a)y(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof enableClasses!="undefined"&&enableClasses&&(f.className+=" "+(b?"":"no-")+a),e[a]=b}return e},z(""),h=j=null,e._version=d,e._prefixes=l,e._domPrefixes=o,e._cssomPrefixes=n,e.testProp=function(a){return D([a])},e.testAllProps=F,e.testStyles=w,e}(a,b),g;!function(a,b,c){function h(a,c){var d=b.createElement(a||"div"),e;for(e in c)d[e]=c[e];return d}function i(a){for(var b=1,c=arguments.length;b<c;b++)a.appendChild(arguments[b]);return a}function k(a,b,c,d){var g=["opacity",b,~~(a*100),c,d].join("-"),h=.01+c/d*100,i=Math.max(1-(1-a)/b*(100-h),a),k=f.substring(0,f.indexOf("Animation")).toLowerCase(),l=k&&"-"+k+"-"||"";return e[g]||(j.insertRule("@"+l+"keyframes "+g+"{"+"0%{opacity:"+i+"}"+h+"%{opacity:"+a+"}"+(h+.01)+"%{opacity:1}"+(h+b)%100+"%{opacity:"+a+"}"+"100%{opacity:"+i+"}"+"}",j.cssRules.length),e[g]=1),g}function l(a,b){var e=a.style,f,g;if(e[b]!==c)return b;b=b.charAt(0).toUpperCase()+b.slice(1);for(g=0;g<d.length;g++){f=d[g]+b;if(e[f]!==c)return f}}function m(a,b){for(var c in b)a.style[l(a,c)||c]=b[c];return a}function n(a){for(var b=1;b<arguments.length;b++){var d=arguments[b];for(var e in d)a[e]===c&&(a[e]=d[e])}return a}function o(a){var b={x:a.offsetLeft,y:a.offsetTop};while(a=a.offsetParent)b.x+=a.offsetLeft,b.y+=a.offsetTop;return b}var d=["webkit","Moz","ms","O"],e={},f,j=function(){var a=h("style",{type:"text/css"});return i(b.getElementsByTagName("head")[0],a),a.sheet||a.styleSheet}(),p={lines:12,length:7,width:5,radius:10,rotate:0,corners:1,color:"#000",speed:1,trail:100,opacity:.25,fps:20,zIndex:2e9,className:"spinner",top:"auto",left:"auto"};g=function(a){if(!this.spin)return new g(a);this.opts=n(a||{},g.defaults,p)},g.defaults={},n(g.prototype,{spin:function(a){this.stop();var b=this,c=b.opts,d=b.el=m(h(0,{className:c.className}),{position:"relative",width:0,zIndex:c.zIndex}),e=c.radius+c.length+c.width,g,i;a&&(a.insertBefore(d,a.firstChild||null),i=o(a),g=o(d),m(d,{left:(c.left=="auto"?i.x-g.x+(a.offsetWidth>>1):parseInt(c.left,10)+e)+"px",top:(c.top=="auto"?i.y-g.y+(a.offsetHeight>>1):parseInt(c.top,10)+e)+"px"})),d.setAttribute("aria-role","progressbar"),b.lines(d,b.opts);if(!f){var j=0,k=c.fps,l=k/c.speed,n=(1-c.opacity)/(l*c.trail/100),p=l/c.lines;(function q(){j++;for(var a=c.lines;a;a--){var e=Math.max(1-(j+a*p)%l*n,c.opacity);b.opacity(d,c.lines-a,e,c)}b.timeout=b.el&&setTimeout(q,~~(1e3/k))})()}return b},stop:function(){var a=this.el;return a&&(clearTimeout(this.timeout),a.parentNode&&a.parentNode.removeChild(a),this.el=c),this},lines:function(a,b){function e(a,d){return m(h(),{position:"absolute",width:b.length+b.width+"px",height:b.width+"px",background:a,boxShadow:d,transformOrigin:"left",transform:"rotate("+~~(360/b.lines*c+b.rotate)+"deg) translate("+b.radius+"px"+",0)",borderRadius:(b.corners*b.width>>1)+"px"})}var c=0,d;for(;c<b.lines;c++)d=m(h(),{position:"absolute",top:1+~(b.width/2)+"px",transform:b.hwaccel?"translate3d(0,0,0)":"",opacity:b.opacity,animation:f&&k(b.opacity,b.trail,c,b.lines)+" "+1/b.speed+"s linear infinite"}),b.shadow&&i(d,m(e("#000","0 0 4px #000"),{top:"2px"})),i(a,i(d,e(b.color,"0 0 1px rgba(0,0,0,.1)")));return a},opacity:function(a,b,c){b<a.childNodes.length&&(a.childNodes[b].style.opacity=c)}}),function(){function a(a,b){return h("<"+a+' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">',b)}var b=m(h("group"),{behavior:"url(#default#VML)"});!l(b,"transform")&&b.adj?(j.addRule(".spin-vml","behavior:url(#default#VML)"),g.prototype.lines=function(b,c){function f(){return m(a("group",{coordsize:e+" "+e,coordorigin:-d+" "+ -d}),{width:e,height:e})}function k(b,e,g){i(h,i(m(f(),{rotation:360/c.lines*b+"deg",left:~~e}),i(m(a("roundrect",{arcsize:c.corners}),{width:d,height:c.width,left:c.radius,top:-c.width>>1,filter:g}),a("fill",{color:c.color,opacity:c.opacity}),a("stroke",{opacity:0}))))}var d=c.length+c.width,e=2*d,g=-(c.width+c.length)*2+"px",h=m(f(),{position:"absolute",top:g,left:g}),j;if(c.shadow)for(j=1;j<=c.lines;j++)k(j,-2,"progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)");for(j=1;j<=c.lines;j++)k(j);return i(b,h)},g.prototype.opacity=function(a,b,c,d){var e=a.firstChild;d=d.shadow&&d.lines||0,e&&b+d<e.childNodes.length&&(e=e.childNodes[b+d],e=e&&e.firstChild,e=e&&e.firstChild,e&&(e.opacity=c))}):f=l(b,"animation")}()}(a,b);var h,j,k=function(a){a=a.toLowerCase();var b=/(chrome)[ \/]([\w.]+)/.exec(a)||/(webkit)[ \/]([\w.]+)/.exec(a)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a)||/(msie) ([\w.]+)/.exec(a)||a.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}};h=k(navigator.userAgent),j={},h.browser&&(j[h.browser]=!0,j.version=h.version),j.chrome?j.webkit=!0:j.webkit&&(j.safari=!0);var l=b.location.hash.replace("#","")==="quirks",m=e.canvas,n=e.touch,o=e.svg,p=navigator.userAgent.toLowerCase(),q=p.match(/(phone|ipod|ipad|windows ce|netfront|playstation|midp|up\.browser|android|mobile|mini|tablet|symbian|nintendo|wii)/),r=j.msie,s=r&&"6.0"===j.version,t=j.mozilla,u=e.csstransforms&&e.csstransitions&&!l,v=b.compatMode!=="CSS1Compat"&&r,w=300,x=f([.1,0,.25,1]),y=333,z=500,A=333,B=c(a),C=c(b),D,E,F=[["width","s",null],["minWidth","s",null],["maxWidth","s",null],["height","s",null],["minHeight","s",null],["maxHeight","s",null],["aspectRatio","n",null],["transition","s","slide"],["touchStyle","b",!0],["click","b",null],["pseudoClick","b",!0],["loop","b",!1],["autoplay","bn",!1],["stopAutoplayOnAction","b",!0],["transitionDuration","n",y],["background","s",null],["backgroundColor","s",null],["margin","n",4],["minPadding","n",8],["alwaysPadding","b",!1],["zoomToFit","b",!0],["cropToFit","b",!1],["cropToFitIfFullscreen","b",!1],["flexible","b",!1],["fitToWindowHeight","b",!1],["fitToWindowHeightMargin","n",20],["fullscreen","b",!1],["fullscreenIcon","b",!1],["vertical","b",!1],["arrows","b",!0],["arrowsColor","s",null],["arrowPrev","s",null],["arrowNext","s",null],["spinnerColor","s","#808080"],["nav","s",null],["thumbs","b",!0],["navPosition","s",null],["thumbsOnTop","b",!1],["thumbsOnRight","b",!1],["navBackground","s",null],["thumbsBackgroundColor","s",null],["dotColor","s",null],["thumbColor","s",null],["thumbsPreview","b",!0],["thumbSize","n",null],["thumbMargin","n",4],["thumbBorderWidth","n",2],["thumbBorderColor","s",null],["thumbsCentered","b",!0],["hideNavIfFullscreen","b",!1],["caption","s",!1],["preload","n",3],["shadows","b",!0],["noise","b",!0],["data","a",null],["html","a",null],["hash","b",!1],["startImg","n",0],["onShowImg","f",null],["onFullscreenOpen","f",null],["onFullscreenClose","f",null],["onClick","f",null],["onTransitionStop","f",null],["detachSiblings","b",!0],["cssTransitions","b",!0]],H=["-webkit-","-moz-","-o-","-ms-",""];c.fn.fotorama=function(a){return typeof fotoramaDefaults=="undefined"&&(fotoramaDefaults={}),this.each(function(b){var d=c(this),e=c.extend(G(),c.extend({},fotoramaDefaults,c.extend(a,G(d))));d.data("ini")||(d.data({ini:!0,options:e}),U(d,function(){V(d)}))}),this},c(function(){D=c("html"),E=c("body"),c(".fotorama").each(function(){var a=c(this);a.fotorama()})})})(window,document,jQuery);
/*!
 * jQuery Bureaucrat Plugin
 *
 * (c) Vadim Borodean, 2012-2013
 * This program is free software. It comes without any warranty, to
 * the extent permitted by applicable law. You can redistribute it
 * and/or modify it under the terms of the Do What The Fuck You Want
 * To Public License, Version 2, as published by Sam Hocevar. See
 * http://sam.zoy.org/wtfpl/COPYING for more details.
 */


(function ($) {

    'use strict';

    var methods;

    methods = {

        init: function (options) {
            var settings = $.extend({
                validationsDataAttr: 'validate'
            }, options);
            return this.each(function () {
                var $form = $(this);
                $form
                    .data('bureaucrat', {
                        names: (function () {
                            var
                                fields = $form.find('[name]'),
                                result = {};
                            fields.each(function () {
                                var
                                    $field = $(this),
                                    name = $field.attr('name'),
                                    validationsData = $field.data(settings.validationsDataAttr);
                                if (result[name] === undefined) {
                                    result[name] = {
                                        elements: $field
                                    };
                                } else {
                                    result[name].elements = result[name].elements.add(this);
                                }
                                if (validationsData) {
                                    result[name].validations = validationsData.split(/\s+/);
                                }
                            });
                            return result;
                        }()),
                        settings: settings
                    })
                    .on('change.bureaucrat input.bureaucrat keydown.bureaucrat cut.bureaucrat paste.bureaucrat', 'textarea, :textbox', function (event) {
                        var
                            $target = $(this),
                            value;
                        if (event.type === 'keydown') {
                            value = $target.val();
                            window.setTimeout(function () {
                                if ($target.val() !== value) {
                                    $target.trigger('b:change');
                                }
                            }, 0);
                        } else {
                            if ($target.val() !== value) {
                                $target.trigger('b:change');
                            }
                        }
                    })
                    .on('change.bureaucrat', ':tickbox', function () {
                        $(this).trigger('b:change');
                    })
                    .on('change.bureaucrat keyup.bureaucrat', 'select', function () {
                        $(this).trigger('b:change');
                    })
                    .on('b:change.bureaucrat', '[name]', function () {
                        $form.data('bureaucrat').names[$(this).attr('name')].validated = false;
                    });
            });
        },

        destroy: function () {
            return this.each(function () {
                var $form = $(this);
                $form
                    .off('.bureaucrat')
                    .removeData('bureaucrat');
            });
        },

        validate: function () {
            var
                $form = $(this),
                complete = true,
                form = this;
            $.each($form.data('bureaucrat').names, function (name) {
                var
                    valid = true,
                    passed = [],
                    failed = [];
                if (this.validations !== undefined && this.elements.not(':disabled').size() > 0) {
                    if (!this.validated) {
                        this.validated = true;
                        $.each(this.validations, function () {
                            if ($.bureaucrat.validations[this].call(form, name)) {
                                passed.push(this);
                            } else {
                                failed.push(this);
                                valid = false;
                            }
                        });
                        this.valid = valid;
                        this.elements.trigger({
                            type: valid ? 'b:valid' : 'b:invalid',
                            validations: valid ? passed : failed
                        });
                    }
                    complete = this.valid ? complete : false;
                }
            });
            if (complete) {
                $form.trigger('b:complete');
            }
            // LURK: Maybe return not Boolean but jQuery collection?
            return complete;
        },

        value: function (name) {
            var
                $form = $(this),
                data = $form.data('bureaucrat'),
                series;
            if (data.names[name] !== undefined) {
                series = data.names[name].elements.serializeArray()[0];
                if (series !== undefined) {
                    return series.value;
                }
            }
        }

    };

    $.bureaucrat = {};

    $.bureaucrat.validations = {

        email: function (name) {
            return (/^\S+@\S+\.\S+$/).test($(this).bureaucrat('value', name));
        },

        integer: function (name) {
            return (/^[0-9.,]+$/).test($(this).bureaucrat('value', name));
        },


        required: function (name) {
            return !!$(this).bureaucrat('value', name);
        }

    };

    $.extend($.expr.pseudos, {

        'textbox': function (element) {
            var nodeName = element.nodeName.toLowerCase();
            return (
                nodeName === 'input' &&
                $.inArray(element.type, [
                        'text', 'password', 'color', 'date', 'datetime', 'datetime-local',
                        'email', 'month', 'number', 'search', 'tel', 'time', 'url', 'week'
                    ]) !== -1
            );
        },

        'tickbox': function (element) {
            return (
                element.nodeName.toLowerCase() === 'input' &&
                $.inArray(element.type, ['checkbox', 'radio']) !== -1
            );
        }

    });

    $.fn.bureaucrat = function (method) {
        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        }
        if (typeof method === 'object' || !method) {
            return methods.init.apply(this, arguments);
        }
        $.error('Method ' +  method + ' does not exist on jQuery.bureaucrat');
    };

}(jQuery));
/*
 * Example usage:
 * $(elem).animate( {top: 100}, $.easie(0.25,0.1,0.25,1.0) );
 */
 
/*
 * jquery.easie.js:
 * http://www.github.com/jaukia/easie
 *
 * Version history:
 * 1.0.1 Semver versioning for jQuery plugins repository
 * 1.0.0 Initial public version
 *
 * LICENCE INFORMATION:
 *
 * Copyright (c) 2011 Janne Aukia (janne.aukia.com),
 * Louis-Rémi Babé (public@lrbabe.com).
 *
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL Version 2 (GPL-LICENSE.txt) licenses.
 *
 * LICENCE INFORMATION FOR DERIVED FUNCTIONS:
 *
 * Function cubicBezierAtTime is written by Christian Effenberger, 
 * and corresponds 1:1 to the WebKit project function.
 * "WebCore and JavaScriptCore are available under the 
 * Lesser GNU Public License. WebKit is available under 
 * a BSD-style license."
 *
 */

/*jslint sub: true */


(function($) {
    "use strict";

    var prefix = "easie",
        ease = "Ease",
        easeIn = prefix+ease+"In",
        easeOut = prefix+ease+"Out",
        easeInOut = prefix+ease+"InOut",
        names = ["Quad","Cubic","Quart","Quint","Sine","Expo","Circ"];

    $.easie = function(p1x,p1y,p2x,p2y,name,forceUpdate) {
        name = name || [prefix,p1x,p1y,p2x,p2y].join("-");
        if ( !$.easing[name] || forceUpdate ) {
            // around 40x faster with lookup than without it in FF4
            var cubicBezierAtTimeLookup = makeLookup(function(p) {
                // the duration is set to 5.0. this defines the precision of the bezier calculation.
                // the animation is ok for durations up to 5 secs with this.
                // with the lookup table, the precision can be high without any big penalty.
                return cubicBezierAtTime(p,p1x,p1y,p2x,p2y,5.0);
            });
    
            $.easing[name] = function(p, n, firstNum, diff) {
                return cubicBezierAtTimeLookup.call(null, p);
            }
            $.easing[name].params = [p1x,p1y,p2x,p2y];
        }
        return name;
    }

    var $easie = $.easie;

    // default css3 easings

    $easie(0.000, 0.000, 1.000, 1.000, prefix+"Linear");
    $easie(0.250, 0.100, 0.250, 1.000, prefix+ease);
    $easie(0.420, 0.000, 1.000, 1.000, easeIn);
    $easie(0.000, 0.000, 0.580, 1.000, easeOut);
    $easie(0.420, 0.000, 0.580, 1.000, easeInOut);

    // approximated Penner equations, from:
    // http://matthewlein.com/ceaser/
    
    $easie(0.550, 0.085, 0.680, 0.530, easeIn+names[0]);
    $easie(0.550, 0.055, 0.675, 0.190, easeIn+names[1]);
    $easie(0.895, 0.030, 0.685, 0.220, easeIn+names[2]);
    $easie(0.755, 0.050, 0.855, 0.060, easeIn+names[3]);
    $easie(0.470, 0.000, 0.745, 0.715, easeIn+names[4]);
    $easie(0.950, 0.050, 0.795, 0.035, easeIn+names[5]);
    $easie(0.600, 0.040, 0.980, 0.335, easeIn+names[6]);
                    
    $easie(0.250, 0.460, 0.450, 0.940, easeOut+names[0]);
    $easie(0.215, 0.610, 0.355, 1.000, easeOut+names[1]);
    $easie(0.165, 0.840, 0.440, 1.000, easeOut+names[2]);
    $easie(0.230, 1.000, 0.320, 1.000, easeOut+names[3]);
    $easie(0.390, 0.575, 0.565, 1.000, easeOut+names[4]);
    $easie(0.190, 1.000, 0.220, 1.000, easeOut+names[5]);
    $easie(0.075, 0.820, 0.165, 1.000, easeOut+names[6]);
                    
    $easie(0.455, 0.030, 0.515, 0.955, easeInOut+names[0]);
    $easie(0.645, 0.045, 0.355, 1.000, easeInOut+names[1]);
    $easie(0.770, 0.000, 0.175, 1.000, easeInOut+names[2]);
    $easie(0.860, 0.000, 0.070, 1.000, easeInOut+names[3]);
    $easie(0.445, 0.050, 0.550, 0.950, easeInOut+names[4]);
    $easie(1.000, 0.000, 0.000, 1.000, easeInOut+names[5]);
    $easie(0.785, 0.135, 0.150, 0.860, easeInOut+names[6]);

    function makeLookup(func,steps) {
        var i;
        steps = steps || 101;
        var lookupTable = [];
        for(i=0;i<(steps+1);i++) {
            lookupTable[i] = func.call(null,i/steps);
        }
        return function(p) {
            if(p===1) return lookupTable[steps];
            var sp = steps*p;
            // fast flooring, see
            // http://stackoverflow.com/questions/2526682/why-is-javascripts-math-floor-the-slowest-way-to-calculate-floor-in-javascript
            var p0 = Math.floor(sp);
            var y1 = lookupTable[p0];
            var y2 = lookupTable[p0+1];
            return y1+(y2-y1)*(sp-p0);
        }
    }

    // From: http://www.netzgesta.de/dev/cubic-bezier-timing-function.html
    // 1:1 conversion to js from webkit source files
    // UnitBezier.h, WebCore_animation_AnimationBase.cpp
    function cubicBezierAtTime(t,p1x,p1y,p2x,p2y,duration) {
        var ax=0,bx=0,cx=0,ay=0,by=0,cy=0;
        // `ax t^3 + bx t^2 + cx t' expanded using Horner's rule.
        function sampleCurveX(t) {return ((ax*t+bx)*t+cx)*t;}
        function sampleCurveY(t) {return ((ay*t+by)*t+cy)*t;}
        function sampleCurveDerivativeX(t) {return (3.0*ax*t+2.0*bx)*t+cx;}
        // The epsilon value to pass given that the animation is going to run over |dur| seconds. The longer the
        // animation, the more precision is needed in the timing function result to avoid ugly discontinuities.
        function solveEpsilon(duration) {return 1.0/(200.0*duration);}
        function solve(x,epsilon) {return sampleCurveY(solveCurveX(x,epsilon));}
        // Given an x value, find a parametric value it came from.
        function solveCurveX(x,epsilon) {var t0,t1,t2,x2,d2,i;
            function fabs(n) {if(n>=0) {return n;}else {return 0-n;}}
            // First try a few iterations of Newton's method -- normally very fast.
            for(t2=x, i=0; i<8; i++) {x2=sampleCurveX(t2)-x; if(fabs(x2)<epsilon) {return t2;} d2=sampleCurveDerivativeX(t2); if(fabs(d2)<1e-6) {break;} t2=t2-x2/d2;}
            // Fall back to the bisection method for reliability.
            t0=0.0; t1=1.0; t2=x; if(t2<t0) {return t0;} if(t2>t1) {return t1;}
            while(t0<t1) {x2=sampleCurveX(t2); if(fabs(x2-x)<epsilon) {return t2;} if(x>x2) {t0=t2;}else {t1=t2;} t2=(t1-t0)*0.5+t0;}
            return t2; // Failure.
        }
        // Calculate the polynomial coefficients, implicit first and last control points are (0,0) and (1,1).
        cx=3.0*p1x; bx=3.0*(p2x-p1x)-cx; ax=1.0-cx-bx; cy=3.0*p1y; by=3.0*(p2y-p1y)-cy; ay=1.0-cy-by;
        // Convert from input time to parametric value in curve, then from that to output time.
        return solve(t, solveEpsilon(duration));
    }

})(jQuery);
(function(e){var t={init:function(n){settings=e.extend({height:50,width:50,initial:false,easing:"swing",duration:"fast"},n);e(this).data("settings",settings);return this.each(function(){var n=e(this);var r=settings.initial?settings.initial:n.html();var i=r.toString().split("");var s="";e.each(i,function(t,n){if(e.isNumeric(n)){s+='<ul><li style="top:-'+n*settings.height+'px">';for(var r=0;r<10;r++){s+="<span>"+r+"</span>"}s+="</li></ul>"}else{s+="<ul><li><span>"+n+"</span></li></ul>"}});n.html(s);t.updateCss.call(n,settings)})},updateCss:function(t){return this.each(function(){var n=e(this);n.css({overflow:"hidden"});e("ul",n).css({position:"relative","float":"left",overflow:"hidden",height:t.height+"px",width:t.width+"px","line-height":t.height+"px"});e("li",n).css({position:"absolute",width:t.width+"px"});e("span",n).css({display:"block","text-align":"center",height:t.height+"px",width:t.width+"px"})})},update:function(n){return this.each(function(){var r=e(this);var i=n.toString().split("");var s=e("ul",r).length;var o=e(this).data("settings");if(s!==i.length){var u=i.length-s;s=i.length;if(u<0){e("ul",r).slice(u).remove()}else{var a="";while(u--){a+="<ul><li>";for(var f=0;f<10;f++){a+="<span>"+f+"</span>"}a+="</li></ul>"}r.prepend(a)}}e.each(i,function(t,n){if(e.isNumeric(n)){if(e("ul:nth-child("+(t+1)+") li span",r).length==1){var i="";for(var s=0;s<10;s++){i+="<span>"+s+"</span>"}e("ul:nth-child("+(t+1)+") li",r).html(i)}e("ul:nth-child("+(t+1)+") li",r).animate({top:-n*o.height},o.duration,o.easing)}else{e("ul:nth-child("+(t+1)+") li",r).html("<span>"+n+"</span>").animate({top:0},o.duration,o.easing)}});t.updateCss.call(r,o)})}};e.fn.kCounter=function(n){if(t[n]){return t[n].apply(this,Array.prototype.slice.call(arguments,1))}else if(typeof n==="object"||!n){return t.init.apply(this,arguments)}else{e.error("Method "+n+" does not exist on jQuery.kCounter")}}})(jQuery)
;
/*
	scrollorama - The jQuery plugin for doing cool scrolly stuff
	by John Polacek (@johnpolacek)
	
	Dual licensed under MIT and GPL.
*/



(function($) {
    $.scrollorama = function(options) {
		var scrollorama = this,
			blocks = [],
			browserPrefix = '',
			ieVersion = '',
			onBlockChange = function() {},
			latestKnownScrollY = 0,
            ticking = false,
            requestAnimFrame =	window.requestAnimationFrame ||
								window.webkitRequestAnimationFrame ||
								window.mozRequestAnimationFrame    ||
								window.oRequestAnimationFrame      ||
								window.msRequestAnimationFrame     ||
								function( callback ){
									window.setTimeout(callback, 1000 / 60);
								},
			defaults = {offset:0, enablePin: true};
		
		scrollorama.settings = $.extend({}, defaults, options);
		scrollorama.blockIndex = 0;
		
		if (options.blocks === undefined) { alert('ERROR: Must assign blocks class selector to scrollorama plugin'); }
		
		// PRIVATE FUNCTIONS
		function init() {
			var i, block, didScroll, marginTop = false;
			if (typeof scrollorama.settings.blocks === 'string') { scrollorama.settings.blocks = $(scrollorama.settings.blocks); }
			
			// set browser prefix (using getBrowser based on jQuery’s $.browser)
			var browser = getBrowser();
			if (browser.mozilla) { browserPrefix = '-moz-'; }
			if (browser.webkit) { browserPrefix = '-webkit-'; }
			if (browser.opera) { browserPrefix = '-o-'; }
			if (browser.msie) {
				browserPrefix = '-ms-';
				ieVersion = parseInt(browser.version, 10);
			}
			
			// create blocks array to contain animation props
			$('body').css('position','relative');
			for (i=0; i<scrollorama.settings.blocks.length; i++) {
				block = scrollorama.settings.blocks.eq(i);
				marginTop = block.css('margin-top');
				blocks.push({
					block: block,
					top: block.offset().top - (!Boolean(marginTop) ? parseInt(marginTop, 10) : 0),
					pin: 0,
					animations:[]
				});
			}
			
			// convert block elements to absolute position
			if (scrollorama.settings.enablePin.toString() === 'true') {
				for (i=0; i<blocks.length; i++) {
					blocks[i].block
						.css('position', 'absolute')
						.css('top', blocks[i].top);
				}
			}
			
			// create scroll-wrap div only once
			if ($("#scroll-wrap").length === 0) {
				$('body').prepend('<div id="scroll-wrap"></div>');
			}
			
			latestKnownScrollY = 0;
            ticking = false;
            $(window).on( 'scroll.scrollorama', onScroll );
		}

		function onScroll() {
            latestKnownScrollY = window.scrollY;
            requestTick();
        }
        
        function requestTick() {
            if(!ticking) {
                requestAnimFrame(function(){
                    onScrollorama();
                    update();
                });
            }
            ticking = true;
        }
        
        function update() {
            // reset the tick so we can
            // capture the next onScroll
            ticking = false;
        }
		
		function onScrollorama() {
			var scrollTop = $(window).scrollTop(),
			currBlockIndex = getCurrBlockIndex(scrollTop),
			i, j, anim, startAnimPos, endAnimPos, animPercent, animVal;
			
			// update all animations
			for (i=0; i<blocks.length; i++) {
				
				// go through the animations for each block
				if (blocks[i].animations.length) {
					for (j=0; j<blocks[i].animations.length; j++) {
						anim = blocks[i].animations[j];
						
						// if above current block, settings should be at start value
						if (i > currBlockIndex) {
							if (currBlockIndex !== i-1 && anim.baseline !== 'bottom') {
								setProperty(anim, anim.startVal);
							}
							if (blocks[i].pin) {
								blocks[i].block
								.css('position', 'absolute')
								.css('top', blocks[i].top);
							}
						}
						
						// if below current block, settings should be at end value
						// unless on an element that gets animated when it hits the bottom of the viewport
						else if (i < currBlockIndex) {
							setProperty(anim, anim.endVal);
							if (blocks[i].pin) {
								blocks[i].block
                                    .css('position', 'absolute')
                                    .css('top', (blocks[i].top + blocks[i].pin));
							}
						}
						
						// otherwise, set values per scroll position
						if (i === currBlockIndex || (currBlockIndex === i-1 && anim.baseline === 'bottom')) {
							// if block gets pinned, set position fixed
							if (blocks[i].pin && currBlockIndex === i) {
								blocks[i].block
                                    .css('position', 'fixed')
                                    .css('top', 0);
							}
							
							// set start and end animation positions
							startAnimPos = blocks[i].top + anim.delay;
							if (anim.baseline === 'bottom') { startAnimPos -= $(window).height(); }
							endAnimPos = startAnimPos + anim.duration;
							
							// if scroll is before start of animation, set to start value
							if (scrollTop < startAnimPos) {
								setProperty(anim, anim.startVal);
							}
							
							// if scroll is after end of animation, set to end value
							else if (scrollTop > endAnimPos) {
								setProperty(anim, anim.endVal);
								if (blocks[i].pin) {
									blocks[i].block
                                        .css('position', 'absolute')
                                        .css('top', (blocks[i].top + blocks[i].pin));
								}
							}
							
							// otherwise, set value based on scroll
							else {
								// calculate percent to animate
								animPercent = (scrollTop - startAnimPos) / anim.duration;
								// account for easing if there is any
								if ( anim.easing && $.isFunction( $.easing[anim.easing] ) ) {
									animPercent = $.easing[anim.easing]( animPercent, animPercent*1000, 0, 1, 1000 );
								}
								// then multiply the percent by the value range and calculate the new value
								animVal = anim.startVal + (animPercent * (anim.endVal - anim.startVal));
								setProperty(anim, animVal);
							}
						}
					}
				}
			}
			
			// update blockIndex and trigger event if changed
			if (scrollorama.blockIndex !== currBlockIndex) {
				scrollorama.blockIndex = currBlockIndex;
				onBlockChange();
			}
		}
		
		function getCurrBlockIndex(scrollTop) {
			var currBlockIndex = 0, i;
			for (i=0; i<blocks.length; i++) {
				// check if block is in view
				if (blocks[i].top <= scrollTop - scrollorama.settings.offset) { currBlockIndex = i; }
			}
			return currBlockIndex;
		}
		
		function setProperty(anim, val) {
			var target = anim.element;
			var prop = anim.property;
			var scaleCSS, currentPosition;
			if (prop === 'rotate' || prop === 'zoom' || prop === 'scale') {
				if (prop === 'rotate') {
					target.css(browserPrefix+'transform', 'rotate('+val+'deg)');
				} else if (prop === 'zoom' || prop === 'scale') {
					scaleCSS = 'scale('+val+')';
					if (browserPrefix !== '-ms-') {
						target.css(browserPrefix+'transform', scaleCSS);
					} else {
						if (jQuery().scale) $(target.selector).scale(val);
						target.css('zoom', val);
					}
				}
			}
			else if(prop === 'background-position-x' || prop === 'background-position-y' ) {
				currentPosition = target.css('background-position').split(' ');
				if(prop === 'background-position-x') {
					target.css('background-position',val+'px '+currentPosition[1]);
				}
				if(prop === 'background-position-y') {
					target.css('background-position', currentPosition[0]+' '+val+'px');
				}
			}
			else if(prop === 'text-shadow' ) {
				target.css(prop,'0px 0px '+val+'px #ffffff');
			} else {
				if (anim.suffix) {
					target.css(prop, val + anim.suffix);
				} else {
					target.css(prop, val);
				}
			}
		}
		
		
		// PUBLIC FUNCTIONS
		scrollorama.animate = function(target) {
			var targetIndex,
				targetBlock,
				anim,
				offset,
				suffix,
				i, j;
			/*
				target		= animation target
				arguments	= array of animation parameters
				anim		= object that contains all animation params (created from arguments)
				offset		= positioning helper for pinning
				
				animation parameters:
				delay		= amount of scrolling (in pixels) before animation starts
				duration	= amount of scrolling (in pixels) over which the animation occurs
				property	= css property being animated
				start		= start value of the property
				end			= end value of the property
				pin			= pin block during animation duration (applies to all animations within block)
				baseline	= top (default, when block reaches top of viewport) or bottom (when block first comies into view)
				easing		= just like jquery's easing functions
			*/
			
			// if string, convert to DOM object
			if (typeof target === 'string') { target = $(target); }
			
			// find block of target
			for (i=0; i<blocks.length; i++) {
				if (blocks[i].block.has(target).length) {
					targetBlock = blocks[i];
					targetIndex = i;
				}
			}
			
			// add each animation to the blocks animations array from function arguments
			for (i=1; i<arguments.length; i++) {
				
				anim = arguments[i];
				
				// for top/left/right/bottom, set relative positioning if static
				if (anim.property === 'top' || anim.property === 'left' || anim.property === 'bottom' || anim.property === 'right' ) {
					if (target.css('position') === 'static') { target.css('position','relative'); }
					// set anim.start, anim.end defaults
					cssValue = parseInt(target.css(anim.property),10);
					if (anim.start === undefined) {
						anim.start = isNaN(cssValue) ? 0 : cssValue;
					} else if (anim.end === undefined) {
						anim.end = isNaN(cssValue) ? 0 : cssValue;
					}
				}
				
				// set anim.start/anim.end defaults for rotate, zoom/scale, letter-spacing
				if (anim.property === 'rotate') {
					if (anim.start === undefined) { anim.start = 0; }
					if (anim.end === undefined) { anim.end = 0; }
				} else if (anim.property === 'zoom' || anim.property === 'scale' ) {
					if (anim.start === undefined) { anim.start = 1; }
					if (anim.end === undefined) { anim.end = 1; }
				} else if (anim.property === 'letter-spacing' && target.css(anim.property)) {
					if (anim.start === undefined) { anim.start = 1; }
					if (anim.end === undefined) { anim.end = 1; }
				}
				
				// convert background-position property for use on IE8 and lower
				if (ieVersion && ieVersion < 9 && (anim.property == 'background-position-x' || anim.property == 'background-position-y')) {
					if (anim.property === 'background-position-x') {
						anim.property = 'backgroundPositionX';
					}
					else {
						anim.property = 'backgroundPositionY';
					}
				}
				
				if (anim.baseline === undefined) {
					if (anim.pin || targetBlock.pin || targetIndex === 0) {
						anim.baseline = 'top';
					} else {
						anim.baseline = 'bottom';
					}
				}
				
				if (anim.delay === undefined) { anim.delay = 0; }
				
				startVal = anim.start !== undefined ? typeof(anim.start) == 'function' ? anim.start() : anim.start : parseInt(target.css(anim.property),10); // if undefined, use current css value
				endVal = anim.end !== undefined ? typeof(anim.end) == 'function' ? anim.end() : anim.end : parseInt(target.css(anim.property),10); // if undefined, use current css value
				suffix = startVal.toString().match(/\D+$/) || endVal.toString().match(/\D+$/);
				if (suffix) {
					suffix = suffix[0];
					startVal = parseInt(startVal,10);  // remove the unit so calculations work correctly
					endVal = parseInt(endVal,10);
				}
				
				targetBlock.animations.push({
					element: target,
					delay: anim.delay,
					duration: anim.duration,
					property: anim.property,
					startVal: startVal,
					endVal: endVal,
					suffix: suffix,
					baseline: anim.baseline !== undefined ? anim.baseline : 'bottom',
					easing: anim.easing
				});
				
				if (anim.pin) {
					if (targetBlock.pin < anim.duration + anim.delay) {
						offset = anim.duration + anim.delay - targetBlock.pin;
						targetBlock.pin += offset;
						
						// adjust positions of blocks below target block
						for (j=targetIndex+1; j<blocks.length; j++) {
							blocks[j].top += offset;
							blocks[j].block.css('top', blocks[j].top);
						}
					}
				}
			}
			
			onScrollorama();

			return scrollorama;
		};
		
		// function for passing blockChange event callback
		scrollorama.onBlockChange = function(f) {
			onBlockChange = f;
		};
		
		// function for getting an array of scrollpoints
		// (top of each animation block and animation element scroll start point)
		scrollorama.getScrollpoints = function() {
			var scrollpoints = [],i,j,anim;
			for (i=0; i<blocks.length; i++) {
				scrollpoints.push(blocks[i].top);
				// go through the animations for each block
				if (blocks[i].animations.length && blocks[i].pin > 0) {
					for (j=0; j<blocks[i].animations.length; j++) {
						anim = blocks[i].animations[j];
						scrollpoints.push(blocks[i].top + anim.delay + anim.duration);
					}
				}
			}
			// make sure scrollpoints are in numeric order
			scrollpoints.sort(function(a,b) {return a - b;});
			return scrollpoints;
		};
		
		// Remove scrollorama
		scrollorama.destroy = function () {
			// Remove animations
			for (i=0; i<blocks.length; i++) {
				// Remove CSS rules
				blocks[i].block.css({
					top: '',
					position: ''
				});
				
				// Remove scrolloroma-specific attributes
				delete blocks[i].animations;
				delete blocks[i].top;
				delete blocks[i].pin;
			}

			// Unbind the window scroll event
			$(window).off('scroll.scrollorama');
			$('#scroll-wrap').remove();
			
			// Remove the scrolloroma object
			delete scrollorama;
		};
		
		init();
		
		return scrollorama;
    };

	// Easing functions from jQuery UI
	$.extend($.easing, {
		def: 'easeOutQuad',
		swing: function (x, t, b, c, d) {
			//alert($.easing.default);
			return $.easing[$.easing.def](x, t, b, c, d);
		},
		easeInQuad: function (x, t, b, c, d) {
			return c*(t/=d)*t + b;
		},
		easeOutQuad: function (x, t, b, c, d) {
			return -c *(t/=d)*(t-2) + b;
		},
		easeInOutQuad: function (x, t, b, c, d) {
			if ((t/=d/2) < 1) { return c/2*t*t + b; }
			return -c/2 * ((--t)*(t-2) - 1) + b;
		},
		easeInCubic: function (x, t, b, c, d) {
			return c*(t/=d)*t*t + b;
		},
		easeOutCubic: function (x, t, b, c, d) {
			return c*((t=t/d-1)*t*t + 1) + b;
		},
		easeInOutCubic: function (x, t, b, c, d) {
			if ((t/=d/2) < 1) { return c/2*t*t*t + b; }
			return c/2*((t-=2)*t*t + 2) + b;
		},
		easeInQuart: function (x, t, b, c, d) {
			return c*(t/=d)*t*t*t + b;
		},
		easeOutQuart: function (x, t, b, c, d) {
			return -c * ((t=t/d-1)*t*t*t - 1) + b;
		},
		easeInOutQuart: function (x, t, b, c, d) {
			if ((t/=d/2) < 1) { return c/2*t*t*t*t + b; }
			return -c/2 * ((t-=2)*t*t*t - 2) + b;
		},
		easeInQuint: function (x, t, b, c, d) {
			return c*(t/=d)*t*t*t*t + b;
		},
		easeOutQuint: function (x, t, b, c, d) {
			return c*((t=t/d-1)*t*t*t*t + 1) + b;
		},
		easeInOutQuint: function (x, t, b, c, d) {
			if ((t/=d/2) < 1) { return c/2*t*t*t*t*t + b; }
			return c/2*((t-=2)*t*t*t*t + 2) + b;
		},
		easeInSine: function (x, t, b, c, d) {
			return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
		},
		easeOutSine: function (x, t, b, c, d) {
			return c * Math.sin(t/d * (Math.PI/2)) + b;
		},
		easeInOutSine: function (x, t, b, c, d) {
			return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
		},
		easeInExpo: function (x, t, b, c, d) {
			return (t===0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
		},
		easeOutExpo: function (x, t, b, c, d) {
			return (t===d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
		},
		easeInOutExpo: function (x, t, b, c, d) {
			if (t===0) { return b; }
			if (t===d) { return b+c; }
			if ((t/=d/2) < 1) { return c/2 * Math.pow(2, 10 * (t - 1)) + b; }
			return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
		},
		easeInCirc: function (x, t, b, c, d) {
			return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
		},
		easeOutCirc: function (x, t, b, c, d) {
			return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
		},
		easeInOutCirc: function (x, t, b, c, d) {
			if ((t/=d/2) < 1) { return -c/2 * (Math.sqrt(1 - t*t) - 1) + b; }
			return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
		},
		easeInElastic: function (x, t, b, c, d) {
			var s=1.70158,p=0,a=c;
			if (t===0) { return b; }
			if ((t/=d)===1) { return b+c; }
			if (!p) { p=d*0.3; }
			if (a < Math.abs(c)) { a=c; s=p/4; }
			else{ s = p/(2*Math.PI) * Math.asin (c/a); }
			return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		},
		easeOutElastic: function (x, t, b, c, d) {
			var s=1.70158,p=0,a=c;
			if (t===0) { return b; }
			if ((t/=d)===1) { return b+c; }
			if (!p) { p=d*0.3; }
			if (a < Math.abs(c)) { a=c; s=p/4; }
			else { s = p/(2*Math.PI) * Math.asin (c/a); }
			return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
		},
		easeInOutElastic: function (x, t, b, c, d) {
			var s=1.70158,p=0,a=c;
			if (t===0) { return b; }
			if ((t/=d/2)===2) { return b+c; }
			if (!p) { p=d*(0.3*1.5); }
			if (a < Math.abs(c)) { a=c; s=p/4; }
			else { s = p/(2*Math.PI) * Math.asin (c/a); }
			if (t < 1) { return -0.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b; }
			return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*0.5 + c + b;
		},
		easeInBack: function (x, t, b, c, d, s) {
			if (s === undefined) { s = 1.70158; }
			return c*(t/=d)*t*((s+1)*t - s) + b;
		},
		easeOutBack: function (x, t, b, c, d, s) {
			if (s === undefined) { s = 1.70158; }
			return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
		},
		easeInOutBack: function (x, t, b, c, d, s) {
			if (s === undefined) { s = 1.70158; }
			if ((t/=d/2) < 1) { return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b; }
			return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
		},
		easeInBounce: function (x, t, b, c, d) {
			return c - $.easing.easeOutBounce (x, d-t, 0, c, d) + b;
		},
		easeOutBounce: function (x, t, b, c, d) {
			if ((t/=d) < (1/2.75)) {
				return c*(7.5625*t*t) + b;
			} else if (t < (2/2.75)) {
				return c*(7.5625*(t-=(1.5/2.75))*t + 0.75) + b;
			} else if (t < (2.5/2.75)) {
				return c*(7.5625*(t-=(2.25/2.75))*t + 0.9375) + b;
			} else {
				return c*(7.5625*(t-=(2.625/2.75))*t + 0.984375) + b;
			}
		},
		easeInOutBounce: function (x, t, b, c, d) {
			if (t < d/2) { return $.easing.easeInBounce (x, t*2, 0, c, d) * 0.5 + b; }
			return $.easing.easeOutBounce (x, t*2-d, 0, c, d) * 0.5 + c*0.5 + b;
		}
	});
     
})(jQuery);

/*!
 * Modified from: jQuery Migrate - v1.1.0 - 2013-01-31
 * https://github.com/jquery/jquery-migrate
 * Copyright 2005, 2013 jQuery Foundation, Inc. and other contributors; Licensed MIT
 */
function getBrowser() {
	var matched = uaMatch( navigator.userAgent );
	var browser = {};
	if ( matched.browser ) {
		browser[ matched.browser ] = true;
		browser.version = matched.version;
	}
	// Chrome is Webkit, but Webkit is also Safari.
	if ( browser.chrome ) {
		browser.webkit = true;
	} else if ( browser.webkit ) {
		browser.safari = true;
	}
	return browser;
}

function uaMatch(ua) {
	ua = ua.toLowerCase();

	var match = /(chrome)[ \/]([\w.]+)/.exec( ua ) ||
		/(webkit)[ \/]([\w.]+)/.exec( ua ) ||
		/(opera)(?:.*version|)[ \/]([\w.]+)/.exec( ua ) ||
		/(msie) ([\w.]+)/.exec( ua ) ||
		ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec( ua ) ||
		[];

	return {
		browser: match[ 1 ] || "",
		version: match[ 2 ] || "0"
	};
}
;
