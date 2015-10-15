 /** 
 * BxSlider v4.0
 * http://bxslider.com
 */
(function(t){var e={},n={mode:"horizontal",slideSelector:"",infiniteLoop:!0,hideControlOnEnd:!1,speed:500,easing:null,slideMargin:0,startSlide:0,randomStart:!1,captions:!1,ticker:!1,tickerHover:!1,adaptiveHeight:!1,adaptiveHeightSpeed:500,touchEnabled:!0,swipeThreshold:50,video:!1,useCSS:!0,pager:!0,pagerType:"full",pagerShortSeparator:" / ",pagerSelector:null,buildPager:null,pagerCustom:null,controls:!0,nextText:"Next",prevText:"Prev",nextSelector:null,prevSelector:null,autoControls:!1,startText:"Start",stopText:"Stop",autoControlsCombine:!1,autoControlsSelector:null,auto:!1,pause:4e3,autoStart:!0,autoDirection:"next",autoHover:!1,autoDelay:0,minSlides:1,maxSlides:1,moveSlides:0,slideWidth:0,onSliderLoad:function(){},onSlideBefore:function(){},onSlideAfter:function(){},onSlideNext:function(){},onSlidePrev:function(){}};t.fn.bxSlider=function(s){if(0!=this.length){if(this.length>1)return this.each(function(){t(this).bxSlider(s)}),this;var o={},r=this;e.el=this;var a=t(window).width(),l=t(window).height(),d=function(){o.settings=t.extend({},n,s),o.children=r.children(o.settings.slideSelector),o.children.length<o.settings.minSlides&&(o.settings.minSlides=o.children.length),o.children.length<o.settings.maxSlides&&(o.settings.maxSlides=o.children.length),o.settings.randomStart&&(o.settings.startSlide=Math.floor(Math.random()*o.children.length)),o.active={index:o.settings.startSlide},o.carousel=o.settings.minSlides>1||o.settings.maxSlides>1,o.minThreshold=o.settings.minSlides*o.settings.slideWidth+(o.settings.minSlides-1)*o.settings.slideMargin,o.maxThreshold=o.settings.maxSlides*o.settings.slideWidth+(o.settings.maxSlides-1)*o.settings.slideMargin,o.working=!1,o.controls={},o.interval=null,o.animProp="vertical"==o.settings.mode?"top":"left",o.usingCSS=o.settings.useCSS&&"fade"!=o.settings.mode&&function(){var t=document.createElement("div"),e=["WebkitPerspective","MozPerspective","OPerspective","msPerspective"];for(var i in e)if(void 0!==t.style[e[i]])return o.cssPrefix=e[i].replace("Perspective","").toLowerCase(),o.animProp="-"+o.cssPrefix+"-transform",!0;return!1}(),"vertical"==o.settings.mode&&(o.settings.maxSlides=o.settings.minSlides),c()},c=function(){if(r.wrap('<div class="bx-wrapper"><div class="bx-viewport"></div></div>'),o.viewport=r.parent(),o.loader=t('<div class="bx-loading" />'),o.viewport.prepend(o.loader),r.css({width:"horizontal"==o.settings.mode?215*o.children.length+"%":"auto",position:"relative"}),o.usingCSS&&o.settings.easing?r.css("-"+o.cssPrefix+"-transition-timing-function",o.settings.easing):o.settings.easing||(o.settings.easing="swing"),o.viewport.css({width:"100%",overflow:"hidden",position:"relative"}),o.children.css({"float":"horizontal"==o.settings.mode?"left":"none",listStyle:"none",position:"relative"}),o.children.width(h()),"horizontal"==o.settings.mode&&o.settings.slideMargin>0&&o.children.css("marginRight",o.settings.slideMargin),"vertical"==o.settings.mode&&o.settings.slideMargin>0&&o.children.css("marginBottom",o.settings.slideMargin),"fade"==o.settings.mode&&(o.children.css({position:"absolute",zIndex:0,display:"none"}),o.children.eq(o.settings.startSlide).css({zIndex:50,display:"block"})),o.controls.el=t('<div class="bx-controls" />'),o.settings.captions&&T(),o.settings.infiniteLoop&&"fade"!=o.settings.mode&&!o.settings.ticker){var e="vertical"==o.settings.mode?o.settings.minSlides:o.settings.maxSlides,i=o.children.slice(0,e).clone().addClass("bx-clone"),n=o.children.slice(-e).clone().addClass("bx-clone");r.append(i).prepend(n)}o.active.last=o.settings.startSlide==v()-1,o.settings.video&&r.fitVids(),o.settings.ticker||(o.settings.pager&&S(),o.settings.controls&&b(),o.settings.auto&&o.settings.autoControls&&w(),(o.settings.controls||o.settings.autoControls||o.settings.pager)&&o.viewport.after(o.controls.el)),r.children().imagesLoaded(function(){o.loader.remove(),f(),"vertical"==o.settings.mode&&(o.settings.adaptiveHeight=!0),o.viewport.height(g()),o.settings.onSliderLoad(o.active.index),o.initialized=!0,t(window).bind("resize",O),o.settings.auto&&o.settings.autoStart&&L(),o.settings.ticker&&D(),o.settings.pager&&y(o.settings.startSlide),o.settings.controls&&q(),o.settings.touchEnabled&&!o.settings.ticker&&H()})},g=function(){var e=0,n=t();if("vertical"==o.settings.mode||o.settings.adaptiveHeight)if(o.carousel){var s=1==o.settings.moveSlides?o.active.index:o.active.index*p();for(n=o.children.eq(s),i=1;o.settings.maxSlides-1>=i;i++)n=s+i>=o.children.length?n.add(o.children.eq(i-1)):n.add(o.children.eq(s+i))}else n=o.children.eq(o.active.index);else n=o.children;return"vertical"==o.settings.mode?(n.each(function(){e+=t(this).outerHeight()}),o.settings.slideMargin>0&&(e+=o.settings.slideMargin*(o.settings.minSlides-1))):e=Math.max.apply(Math,n.map(function(){return t(this).outerHeight(!1)}).get()),e},h=function(){var t=o.settings.slideWidth,e=o.viewport.width();return 0==o.settings.slideWidth?t=e:e>o.maxThreshold?t=(e-o.settings.slideMargin*(o.settings.maxSlides-1))/o.settings.maxSlides:o.minThreshold>e&&(t=(e-o.settings.slideMargin*(o.settings.minSlides-1))/o.settings.minSlides),t},u=function(){var t=1;if("horizontal"==o.settings.mode)if(o.viewport.width()<o.minThreshold)t=o.settings.minSlides;else if(o.viewport.width()>o.maxThreshold)t=o.settings.maxSlides;else{var e=o.children.first().width();t=Math.floor(o.viewport.width()/e)}else"vertical"==o.settings.mode&&(t=o.settings.minSlides);return t},v=function(){var t=0;if(o.settings.moveSlides>0)if(o.settings.infiniteLoop)t=o.children.length/p();else for(var e=0,i=0;o.children.length>e;)++t,e=i+u(),i+=o.settings.moveSlides<=u()?o.settings.moveSlides:u();else t=Math.ceil(o.children.length/u());return t},p=function(){return o.settings.moveSlides>0&&o.settings.moveSlides<=u()?o.settings.moveSlides:u()},f=function(){if(o.active.last&&!o.settings.infiniteLoop){if("horizontal"==o.settings.mode){var t=o.children.last(),e=t.position();x(-(e.left-(o.viewport.width()-t.width())),"reset",0)}else if("vertical"==o.settings.mode){var i=o.children.length-o.settings.minSlides,e=o.children.eq(i).position();x(-e.top,"reset",0)}}else{var e=o.children.eq(o.active.index*p()).position();o.active.index==v()-1&&(o.active.last=!0),void 0!=e&&("horizontal"==o.settings.mode?x(-e.left,"reset",0):"vertical"==o.settings.mode&&x(-e.top,"reset",0))}},x=function(t,e,i,n){if(o.usingCSS){var s="vertical"==o.settings.mode?"translate3d(0, "+t+"px, 0)":"translate3d("+t+"px, 0, 0)";r.css("-"+o.cssPrefix+"-transition-duration",i/1e3+"s"),"slide"==e?(r.css(o.animProp,s),r.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(){r.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"),z()})):"reset"==e?r.css(o.animProp,s):"ticker"==e&&(r.css("-"+o.cssPrefix+"-transition-timing-function","linear"),r.css(o.animProp,s),r.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(){r.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"),x(n.resetValue,"reset",0),I()}))}else{var a={};a[o.animProp]=t,"slide"==e?r.animate(a,i,o.settings.easing,function(){z()}):"reset"==e?r.css(o.animProp,t):"ticker"==e&&r.animate(a,speed,"linear",function(){x(n.resetValue,"reset",0),I()})}},m=function(){var e="";pagerQty=v();for(var i=0;pagerQty>i;i++){var n="";o.settings.buildPager&&t.isFunction(o.settings.buildPager)?(n=o.settings.buildPager(i),o.pagerEl.addClass("bx-custom-pager")):(n=i+1,o.pagerEl.addClass("bx-default-pager")),e+='<div class="bx-pager-item"><a href="" data-slide-index="'+i+'" class="bx-pager-link">'+n+"</a></div>"}o.pagerEl.html(e)},S=function(){o.settings.pagerCustom?o.pagerEl=t(o.settings.pagerCustom):(o.pagerEl=t('<div class="bx-pager" />'),o.settings.pagerSelector?t(o.settings.pagerSelector).html(o.pagerEl):o.controls.el.addClass("bx-has-pager").append(o.pagerEl),m()),o.pagerEl.delegate("a","click",k)},b=function(){o.controls.next=t('<a class="bx-next" href="">'+o.settings.nextText+"</a>"),o.controls.prev=t('<a class="bx-prev" href="">'+o.settings.prevText+"</a>"),o.controls.next.bind("click",C),o.controls.prev.bind("click",E),o.settings.nextSelector&&t(o.settings.nextSelector).append(o.controls.next),o.settings.prevSelector&&t(o.settings.prevSelector).append(o.controls.prev),o.settings.nextSelector||o.settings.prevSelector||(o.controls.directionEl=t('<div class="bx-controls-direction" />'),o.controls.directionEl.append(o.controls.prev).append(o.controls.next),o.controls.el.addClass("bx-has-controls-direction").append(o.controls.directionEl))},w=function(){o.controls.start=t('<div class="bx-controls-auto-item"><a class="bx-start" href="">'+o.settings.startText+"</a></div>"),o.controls.stop=t('<div class="bx-controls-auto-item"><a class="bx-stop" href="">'+o.settings.stopText+"</a></div>"),o.controls.autoEl=t('<div class="bx-controls-auto" />'),o.controls.autoEl.delegate(".bx-start","click",A),o.controls.autoEl.delegate(".bx-stop","click",P),o.settings.autoControlsCombine?o.controls.autoEl.append(o.controls.start):o.controls.autoEl.append(o.controls.start).append(o.controls.stop),o.settings.autoControlsSelector?t(o.settings.autoControlsSelector).html(o.controls.autoEl):o.controls.el.addClass("bx-has-controls-auto").append(o.controls.autoEl),M(o.settings.autoStart?"stop":"start")},T=function(){o.children.each(function(){var e=t(this).find("img:first").attr("title");void 0!=e&&t(this).append('<div class="bx-caption"><span>'+e+"</span></div>")})},C=function(t){o.settings.auto&&r.stopAuto(),r.goToNextSlide(),t.preventDefault()},E=function(t){o.settings.auto&&r.stopAuto(),r.goToPrevSlide(),t.preventDefault()},A=function(t){r.startAuto(),t.preventDefault()},P=function(t){r.stopAuto(),t.preventDefault()},k=function(e){o.settings.auto&&r.stopAuto();var i=t(e.currentTarget),n=parseInt(i.attr("data-slide-index"));n!=o.active.index&&r.goToSlide(n),e.preventDefault()},y=function(e){return"short"==o.settings.pagerType?(o.pagerEl.html(e+1+o.settings.pagerShortSeparator+o.children.length),void 0):(o.pagerEl.find("a").removeClass("active"),o.pagerEl.each(function(i,n){t(n).find("a").eq(e).addClass("active")}),void 0)},z=function(){if(o.settings.infiniteLoop){var t="";0==o.active.index?t=o.children.eq(0).position():o.active.index==v()-1&&o.carousel?t=o.children.eq((v()-1)*p()).position():o.active.index==o.children.length-1&&(t=o.children.eq(o.children.length-1).position()),"horizontal"==o.settings.mode?x(-t.left,"reset",0):"vertical"==o.settings.mode&&x(-t.top,"reset",0)}o.working=!1,o.settings.onSlideAfter(o.children.eq(o.active.index),o.oldIndex,o.active.index)},M=function(t){o.settings.autoControlsCombine?o.controls.autoEl.html(o.controls[t]):(o.controls.autoEl.find("a").removeClass("active"),o.controls.autoEl.find("a:not(.bx-"+t+")").addClass("active"))},q=function(){!o.settings.infiniteLoop&&o.settings.hideControlOnEnd&&(0==o.active.index?(o.controls.prev.addClass("disabled"),o.controls.next.removeClass("disabled")):o.active.index==v()-1?(o.controls.next.addClass("disabled"),o.controls.prev.removeClass("disabled")):(o.controls.prev.removeClass("disabled"),o.controls.next.removeClass("disabled")))},L=function(){o.settings.autoDelay>0?setTimeout(r.startAuto,o.settings.autoDelay):r.startAuto(),o.settings.autoHover&&r.hover(function(){o.interval&&(r.stopAuto(!0),o.autoPaused=!0)},function(){o.autoPaused&&(r.startAuto(!0),o.autoPaused=null)})},D=function(){var e=0;if("next"==o.settings.autoDirection)r.append(o.children.clone().addClass("bx-clone"));else{r.prepend(o.children.clone().addClass("bx-clone"));var i=o.children.first().position();e="horizontal"==o.settings.mode?-i.left:-i.top}x(e,"reset",0),o.settings.pager=!1,o.settings.controls=!1,o.settings.autoControls=!1,o.settings.tickerHover&&!o.usingCSS&&o.viewport.hover(function(){r.stop()},function(){var e=0;o.children.each(function(){e+="horizontal"==o.settings.mode?t(this).outerWidth(!0):t(this).outerHeight(!0)});var i=o.settings.speed/e,n="horizontal"==o.settings.mode?"left":"top",s=i*(e-Math.abs(parseInt(r.css(n))));I(s)}),I()},I=function(t){speed=t?t:o.settings.speed;var e={left:0,top:0},i={left:0,top:0};"next"==o.settings.autoDirection?e=r.find(".bx-clone").first().position():i=o.children.first().position();var n="horizontal"==o.settings.mode?-e.left:-e.top,s="horizontal"==o.settings.mode?-i.left:-i.top,a={resetValue:s};x(n,"ticker",speed,a)},H=function(){o.touch={start:{x:0,y:0},end:{x:0,y:0}},o.viewport.bind("touchstart",W)},W=function(t){if(o.working)t.preventDefault();else{o.touch.originalPos=r.position();var e=t.originalEvent;o.touch.start.x=e.changedTouches[0].pageX,o.touch.start.y=e.changedTouches[0].pageY,o.viewport.bind("touchmove",N),o.viewport.bind("touchend",B)}},N=function(t){if(t.preventDefault(),"fade"!=o.settings.mode){var e=t.originalEvent,i=0;if("horizontal"==o.settings.mode){var n=e.changedTouches[0].pageX-o.touch.start.x;i=o.touch.originalPos.left+n}else{var n=e.changedTouches[0].pageY-o.touch.start.y;i=o.touch.originalPos.top+n}x(i,"reset",0)}},B=function(t){o.viewport.unbind("touchmove",N);var e=t.originalEvent,i=0;if(o.touch.end.x=e.changedTouches[0].pageX,o.touch.end.y=e.changedTouches[0].pageY,"fade"==o.settings.mode){var n=Math.abs(o.touch.start.x-o.touch.end.x);n>=o.settings.swipeThreshold&&(o.touch.start.x>o.touch.end.x?r.goToNextSlide():r.goToPrevSlide(),r.stopAuto())}else{var n=0;"horizontal"==o.settings.mode?(n=o.touch.end.x-o.touch.start.x,i=o.touch.originalPos.left):(n=o.touch.end.y-o.touch.start.y,i=o.touch.originalPos.top),!o.settings.infiniteLoop&&(0==o.active.index&&n>0||o.active.last&&0>n)?x(i,"reset",200):Math.abs(n)>=o.settings.swipeThreshold?(0>n?r.goToNextSlide():r.goToPrevSlide(),r.stopAuto()):x(i,"reset",200)}o.viewport.unbind("touchend",B)},O=function(){var e=t(window).width(),i=t(window).height();(a!=e||l!=i)&&(a=e,l=i,o.children.add(r.find(".bx-clone")).width(h()),o.viewport.css("height",g()),o.active.last&&(o.active.index=v()-1),o.active.index>=v()&&(o.active.last=!0),o.settings.pager&&!o.settings.pagerCustom&&(m(),y(o.active.index)),o.settings.ticker||f())};return r.goToSlide=function(e,i){if(!o.working&&o.active.index!=e)if(o.working=!0,o.oldIndex=o.active.index,o.active.index=0>e?v()-1:e>=v()?0:e,o.settings.onSlideBefore(o.children.eq(o.active.index),o.oldIndex,o.active.index),"next"==i?o.settings.onSlideNext(o.children.eq(o.active.index),o.oldIndex,o.active.index):"prev"==i&&o.settings.onSlidePrev(o.children.eq(o.active.index),o.oldIndex,o.active.index),o.active.last=o.active.index>=v()-1,o.settings.pager&&y(o.active.index),o.settings.controls&&q(),"fade"==o.settings.mode)o.settings.adaptiveHeight&&o.viewport.height()!=g()&&o.viewport.animate({height:g()},o.settings.adaptiveHeightSpeed),o.children.filter(":visible").fadeOut(o.settings.speed).css({zIndex:0}),o.children.eq(o.active.index).css("zIndex",51).fadeIn(o.settings.speed,function(){t(this).css("zIndex",50),z()});else{o.settings.adaptiveHeight&&o.viewport.height()!=g()&&o.viewport.animate({height:g()},o.settings.adaptiveHeightSpeed);var n=0,s={left:0,top:0};if(!o.settings.infiniteLoop&&o.carousel&&o.active.last)if("horizontal"==o.settings.mode){var a=o.children.eq(o.children.length-1);s=a.position(),n=o.viewport.width()-a.width()}else{var l=o.children.length-o.settings.minSlides;s=o.children.eq(l).position()}else if(o.carousel&&o.active.last&&"prev"==i){var d=1==o.settings.moveSlides?o.settings.maxSlides-p():(v()-1)*p()-(o.children.length-o.settings.maxSlides),a=r.children(".bx-clone").eq(d);s=a.position()}else if("next"==i&&0==o.active.index)s=r.find(".bx-clone").eq(o.settings.maxSlides).position(),o.active.last=!1;else if(e>=0){var c=e*p();s=o.children.eq(c).position()}var h="horizontal"==o.settings.mode?-(s.left-n):-s.top;x(h,"slide",o.settings.speed)}},r.goToNextSlide=function(){if(o.settings.infiniteLoop||!o.active.last){var t=o.active.index+1;r.goToSlide(t,"next")}},r.goToPrevSlide=function(){if(o.settings.infiniteLoop||0!=o.active.index){var t=o.active.index-1;r.goToSlide(t,"prev")}},r.startAuto=function(t){o.interval||(o.interval=setInterval(function(){"next"==o.settings.autoDirection?r.goToNextSlide():r.goToPrevSlide()},o.settings.pause),o.settings.autoControls&&1!=t&&M("stop"))},r.stopAuto=function(t){o.interval&&(clearInterval(o.interval),o.interval=null,o.settings.autoControls&&1!=t&&M("start"))},r.getCurrentSlide=function(){return o.active.index},r.getSlideCount=function(){return o.children.length},r.destroySlider=function(){o.initialized&&(o.initialized=!1,t(".bx-clone",this).remove(),o.children.removeAttr("style"),this.removeAttr("style").unwrap().unwrap(),o.controls.el&&o.controls.el.remove(),o.controls.next&&o.controls.next.remove(),o.controls.prev&&o.controls.prev.remove(),o.pagerEl&&o.pagerEl.remove(),t(".bx-caption",this).remove(),o.controls.autoEl&&o.controls.autoEl.remove(),clearInterval(o.interval),t(window).unbind("resize",O))},r.reloadSlider=function(t){void 0!=t&&(s=t),r.destroySlider(),d()},d(),this}}})(jQuery),function(t,e){var i="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";t.fn.imagesLoaded=function(n){function s(){var e=t(g),i=t(h);a&&(h.length?a.reject(d,e,i):a.resolve(d)),t.isFunction(n)&&n.call(r,d,e,i)}function o(e,n){e.src===i||-1!==t.inArray(e,c)||(c.push(e),n?h.push(e):g.push(e),t.data(e,"imagesLoaded",{isBroken:n,src:e.src}),l&&a.notifyWith(t(e),[n,d,t(g),t(h)]),d.length===c.length&&(setTimeout(s),d.unbind(".imagesLoaded")))}var r=this,a=t.isFunction(t.Deferred)?t.Deferred():0,l=t.isFunction(a.notify),d=r.find("img").add(r.filter("img")),c=[],g=[],h=[];return t.isPlainObject(n)&&t.each(n,function(t,e){"callback"===t?n=e:a&&a[t](e)}),d.length?d.bind("load.imagesLoaded error.imagesLoaded",function(t){o(t.target,"error"===t.type)}).each(function(n,s){var r=s.src,a=t.data(s,"imagesLoaded");a&&a.src===r?o(s,a.isBroken):s.complete&&s.naturalWidth!==e?o(s,0===s.naturalWidth||0===s.naturalHeight):(s.readyState||s.complete)&&(s.src=i,s.src=r)}):s(),a?a.promise(r):r}}(jQuery);
/**
 * jQuery touchTouch plugin
 * http://demo.tutorialzine.com/2012/04/mobile-touch-gallery/
 */
(function(){var overlay=$('<div id="galleryOverlay">'),slider=$('<div id="gallerySlider">'),prevArrow=$('<a id="prevArrow"></a>'),nextArrow=$('<a id="nextArrow"></a>'),overlayVisible=false;$.fn.touchTouch=function(){var placeholders=$([]),index=0,allitems=this,items=allitems;overlay.hide().appendTo("body");slider.appendTo(overlay);items.each(function(){placeholders=placeholders.add($('<div class="placeholder">'));});slider.append(placeholders).on("click",function(e){if(!$(e.target).is("img")){hideOverlay();}});$("body").on("touchstart","#gallerySlider img",function(e){var touch=e.originalEvent,startX=touch.changedTouches[0].pageX;slider.on("touchmove",function(e){e.preventDefault();touch=e.originalEvent.touches[0]||e.originalEvent.changedTouches[0];if(touch.pageX-startX>10){slider.off("touchmove");showPrevious();}else{if(touch.pageX-startX<-10){slider.off("touchmove");showNext();}}});return false;}).on("touchend",function(){slider.off("touchmove");});items.on("click",function(e){e.preventDefault();var $this=$(this),galleryName,selectorType,$closestGallery=$this.parent().closest("[data-gallery]");if($this.attr("data-gallery")){galleryName=$this.attr("data-gallery");selectorType="item";}else{if($closestGallery.length){galleryName=$closestGallery.attr("data-gallery");selectorType="ancestor";}}if(galleryName&&selectorType=="item"){items=$("[data-gallery="+galleryName+"]");}else{if(galleryName&&selectorType=="ancestor"){items=items.filter(function(){return $(this).parent().closest("[data-gallery]").length;});}}index=items.index(this);showOverlay(index);showImage(index);preload(index+1);preload(index-1);});if(!("ontouchstart" in window)){overlay.append(prevArrow).append(nextArrow);prevArrow.click(function(e){e.preventDefault();showPrevious();});nextArrow.click(function(e){e.preventDefault();showNext();});}$(window).bind("keydown",function(e){if(e.keyCode==37){showPrevious();}else{if(e.keyCode==39){showNext();}}});function showOverlay(index){if(overlayVisible){return false;}overlay.show();setTimeout(function(){overlay.addClass("visible");},100);offsetSlider(index);overlayVisible=true;}function hideOverlay(){if(!overlayVisible){return false;}overlay.hide().removeClass("visible");overlayVisible=false;$(".placeholder").empty();items=allitems;}function offsetSlider(index){slider.css("left",(-index*100)+"%");}function preload(index){setTimeout(function(){showImage(index);},1000);}function showImage(index){if(index<0||index>=items.length){return false;}loadImage(items.eq(index).attr("href"),function(){placeholders.eq(index).html(this);});}function loadImage(src,callback){var img=$("<img>").on("load",function(){callback.call(img);});img.attr("src",src);}function showNext(){if(index+1<items.length){index++;offsetSlider(index);preload(index+1);}else{slider.addClass("rightSpring");setTimeout(function(){slider.removeClass("rightSpring");},500);}}function showPrevious(){if(index>0){index--;offsetSlider(index);preload(index-1);}else{slider.addClass("leftSpring");setTimeout(function(){slider.removeClass("leftSpring");},500);}}};})(jQuery);
/**
* Maplace.js 0.1.2
* http://maplacejs.com
*/
;(function(f,n,e){'use strict';var l,g;l={activateCurrent:function(a){this.html_element.find("select").val(a)},getHtml:function(){var a=this,b="",c;if(1<this.ln){b+='<select class="dropdown controls '+this.o.controls_cssclass+'">';this.ShowOnMenu(this.view_all_key)&&(b+='<option value="'+this.view_all_key+'">'+this.o.view_all_text+"</option>");for(c=0;c<this.ln;c+=1)this.ShowOnMenu(c)&&(b+='<option value="'+(c+1)+'">'+(this.o.locations[c].title||"#"+(c+1))+"</option>");b=f(b+"</select>").bind("change",function(){a.ViewOnMap(this.value)})}(c=
this.o.controls_title)&&(c=f('<div class="controls_title"></div>').css(this.o.controls_applycss?{fontWeight:"bold",fontSize:this.o.controls_on_map?"12px":"inherit",padding:"3px 10px 5px 0"}:{}).append(this.o.controls_title));return this.html_element=f('<div class="wrap_controls"></div>').append(c).append(b)}};g={html_a:function(a,b,c){var e=this;b=b||a+1;c=c||this.o.locations[a].title;a=f('<a data-load="'+b+'" id="ullist_a_'+b+'" href="#'+b+'" title="'+c+'"><span>'+(c||"#"+(a+1))+"</span></a>");a.css(this.o.controls_applycss?
{color:"#666",display:"block",padding:"5px",fontSize:this.o.controls_on_map?"12px":"inherit",textDecoration:"none"}:{});a.on("click",function(a){a.preventDefault();a=f(this).attr("data-load");e.ViewOnMap(a)});return a},activateCurrent:function(a){this.html_element.find("li").removeClass("active");this.html_element.find("#ullist_a_"+a).parent().addClass("active")},getHtml:function(){var a=f("<ul class='ullist controls "+this.o.controls_cssclass+"'></ul>").css(this.o.controls_applycss?{margin:0,padding:0,
listStyleType:"none"}:{}),b;this.ShowOnMenu(this.view_all_key)&&a.append(f("<li></li>").append(g.html_a.call(this,!1,this.view_all_key,this.o.view_all_text)));for(b=0;b<this.ln;b++)this.ShowOnMenu(b)&&a.append(f("<li></li>").append(g.html_a.call(this,b)));(b=this.o.controls_title)&&(b=f('<div class="controls_title"></div>').css(this.o.controls_applycss?{fontWeight:"bold",padding:"3px 10px 5px 0",fontSize:this.o.controls_on_map?"12px":"inherit"}:{}).append(this.o.controls_title));return this.html_element=
f('<div class="wrap_controls"></div>').append(b).append(a)}};var d=function(a){this.VERSION="0.1.2";this.errors=[];this.loaded=!1;this.dev=!1;this.markers=[];this.oMap=!1;this.view_all_key="all";this.infowindow=null;this.ln=0;this.oMap=!1;this.directionsDisplay=this.directionsService=this.Fusion=this.Polygon=this.Polyline=this.current_index=this.current_control=this.controls_wrapper=this.canvas_map=this.map_div=this.oBounds=null;this.o={map_div:"#gmap",controls_div:"#controls",generate_controls:!0,
controls_type:"dropdown",controls_cssclass:"",controls_title:"",controls_on_map:!0,controls_applycss:!0,controls_position:e.maps.ControlPosition.RIGHT_TOP,type:"marker",view_all:!0,view_all_text:"View All",start:0,locations:[],commons:{},map_options:{mapTypeId:e.maps.MapTypeId.ROADMAP,zoom:1},stroke_options:{strokeColor:"#0000FF",strokeOpacity:0.8,strokeWeight:2,fillColor:"#0000FF",fillOpacity:0.4},directions_options:{travelMode:e.maps.TravelMode.DRIVING,unitSystem:e.maps.UnitSystem.METRIC,optimizeWaypoints:!1,
provideRouteAlternatives:!1,avoidHighways:!1,avoidTolls:!1},styles:{},fusion_options:{},directions_panel:null,draggable:!1,show_infowindows:!0,show_markers:!0,infowindow_type:"bubble",beforeViewAll:function(){},afterViewAll:function(){},beforeShow:function(){},afterShow:function(){},afterCreateMarker:function(){},beforeCloseInfowindow:function(){},afterCloseInfowindow:function(){},beforeOpenInfowindow:function(){},afterOpenInfowindow:function(){},afterRoute:function(){},onPolylineClick:function(){}};
this.AddControl("dropdown",l);this.AddControl("list",g);f.extend(!0,this.o,a)};d.prototype.controls={};d.prototype.create_objMap=function(){var a=0,b;for(b in this.o.styles)this.o.styles.hasOwnProperty(b)&&(0===a&&(this.o.map_options.mapTypeControlOptions={mapTypeIds:[e.maps.MapTypeId.ROADMAP]}),a++,this.o.map_options.mapTypeControlOptions.mapTypeIds.push("map_style_"+a));if(this.loaded)this.oMap.setOptions(this.o.map_options);else try{this.map_div.css({position:"relative",overflow:"hidden"}),this.canvas_map=
f("<div>").addClass("canvas_map").css({width:this.map_div.width(),height:this.map_div.height()}).appendTo(this.map_div),this.oMap=new e.maps.Map(this.canvas_map.get(0),this.o.map_options)}catch(c){this.errors.push(c.toString())}a=0;for(b in this.o.styles)this.o.styles.hasOwnProperty(b)&&(a++,this.oMap.mapTypes.set("map_style_"+a,new e.maps.StyledMapType(this.o.styles[b],{name:b})),this.oMap.setMapTypeId("map_style_"+a));this.debug("01")};d.prototype.add_markers_to_objMap=function(){var a;a=this.o.type||
"marker";switch(a){case "marker":for(a=0;a<this.ln;a++)this.create.marker.call(this,a);break;default:this.create[a].apply(this)}};d.prototype.create={marker:function(a){var b=this,c=this.o.locations[a],h,d,j=new e.maps.LatLng(c.lat,c.lon),k=!1===c.visible?!1:!0;f.extend(c,{position:j,map:this.oMap,zIndex:1E4,visible:!1===this.o.show_markers?!1:k});c.image&&(image_w=c.image_w||32,image_h=c.image_h||32,f.extend(c,{icon:new e.maps.MarkerImage(c.image,new e.maps.Size(image_w,image_h),new e.maps.Point(0,
0),new e.maps.Point(image_w/2,image_h/2))}));h=new e.maps.Marker(c);e.maps.event.addListener(h,"click",function(){b.o.beforeShow(a,c,h);d=!1===c.show_infowindows?!1:!0;b.o.show_infowindows&&d&&b.open_infowindow(a,h);b.oMap.panTo(j);c.zoom&&b.oMap.setZoom(c.zoom);b.current_control&&(b.o.generate_controls&&b.current_control.activateCurrent)&&b.current_control.activateCurrent.call(b,a+1);b.current_index=a;b.o.afterShow(a,c,h)});this.oBounds.extend(j);this.markers.push(h);this.o.afterCreateMarker(a,c,
h);c.visible=k;return h},polyline:function(){var a,b,c=[];for(a=0;a<this.ln;a++)b=new e.maps.LatLng(this.o.locations[a].lat,this.o.locations[a].lon),c.push(b),this.create.marker.call(this,a);f.extend(this.o.stroke_options,{path:c,map:this.oMap});this.Polyline?this.Polyline.setOptions(this.o.stroke_options):this.Polyline=new e.maps.Polyline(this.o.stroke_options)},polygon:function(){var a=this,b,c,d=[];for(b=0;b<this.ln;b++)c=new e.maps.LatLng(this.o.locations[b].lat,this.o.locations[b].lon),d.push(c),
this.create.marker.call(this,b);f.extend(this.o.stroke_options,{paths:d,editable:this.o.draggable,map:this.oMap});this.Polygon?this.Polygon.setOptions(this.o.stroke_options):this.Polygon=new e.maps.Polygon(this.o.stroke_options);e.maps.event.addListener(this.Polygon,"click",function(b){a.o.onPolylineClick(b)})},fusion:function(){f.extend(this.o.fusion_options,{styles:[this.o.stroke_options],map:this.oMap});this.Fusion?this.Fusion.setOptions(this.o.fusion_options):this.Fusion=new e.maps.FusionTablesLayer(this.o.fusion_options)},
directions:function(){var a=this,b,c,d,m,j,k=[],g=0;for(b=0;b<this.ln;b++)d=new e.maps.LatLng(this.o.locations[b].lat,this.o.locations[b].lon),0===b?m=d:b===this.ln-1?j=d:(c=!0===this.o.locations[b].stopover?!0:!1,k.push({location:d,stopover:c})),this.create.marker.call(this,b);f.extend(this.o.directions_options,{origin:m,destination:j,waypoints:k});this.directionsService||(this.directionsService=new e.maps.DirectionsService);this.directionsDisplay?this.directionsDisplay.setOptions({draggable:this.o.draggable}):
this.directionsDisplay=new e.maps.DirectionsRenderer({draggable:this.o.draggable});this.directionsDisplay.setMap(this.oMap);this.o.directions_panel&&(this.o.directions_panel=f(this.o.directions_panel),this.directionsDisplay.setPanel(this.o.directions_panel.get(0)));this.o.draggable&&e.maps.event.addListener(this.directionsDisplay,"directions_changed",function(){g=a.compute_distance(a.directionsDisplay.directions);a.o.afterRoute(g)});this.directionsService.route(this.o.directions_options,function(b,
c){c==e.maps.DirectionsStatus.OK&&(g=a.compute_distance(b),a.directionsDisplay.setDirections(b));a.o.afterRoute(g,c,b)})}};d.prototype.compute_distance=function(a){var b=0,c=a.routes[0],d=c.legs.length;for(a=0;a<d;a++)b+=c.legs[a].distance.value;return b};d.prototype.type_to_open={bubble:function(a){this.infowindow=new e.maps.InfoWindow({content:a.html||""})}};d.prototype.open_infowindow=function(a,b){this.CloseInfoWindow();var c=this.o.locations[a],d=c.type||this.o.infowindow_type;c.html&&this.type_to_open[d]&&
(this.o.beforeOpenInfowindow(a,c,b),this.type_to_open[d].call(this,c),this.infowindow.open(this.oMap,b),this.o.afterOpenInfowindow(a,c,b))};d.prototype.get_html_controls=function(){return this.controls[this.o.controls_type]&&this.controls[this.o.controls_type].getHtml?(this.current_control=this.controls[this.o.controls_type],this.current_control.getHtml.apply(this)):""};d.prototype.generate_controls=function(){if(this.o.controls_on_map){var a=f('<div class="on_gmap '+this.o.controls_type+' gmap_controls"></div>').css(this.o.controls_applycss?
{margin:"5px"}:{}),b=f(this.get_html_controls()).css(this.o.controls_applycss?{background:"#fff",padding:"5px",border:"1px solid rgb(113,123,135)",boxShadow:"rgba(0, 0, 0, 0.4) 0px 2px 4px",maxHeight:this.map_div.find(".canvas_map").outerHeight()-80,minWidth:100,overflowY:"auto",overflowX:"hidden"}:{});a.append(b);this.oMap.controls[this.o.controls_position].push(a.get(0))}else this.controls_wrapper.empty(),this.controls_wrapper.append(this.get_html_controls())};d.prototype.init_map=function(){var a=
this,b=0;this.Polyline&&this.Polyline.setMap(null);this.Polygon&&this.Polygon.setMap(null);this.Fusion&&this.Fusion.setMap(null);this.directionsDisplay&&this.directionsDisplay.setMap(null);if(this.markers){for(b in this.markers)if(this.markers[b])try{this.markers[b].setMap(null)}catch(c){a.errors.push(c)}this.markers.length=0;this.markers=[]}this.o.controls_on_map&&this.oMap.controls&&this.oMap.controls[this.o.controls_position].forEach(function(b,c){try{a.oMap.controls[this.o.controls_position].removeAt(c)}catch(d){a.errors.push(d)}});
this.oBounds=new e.maps.LatLngBounds;this.debug("02")};d.prototype.perform_load=function(){1==this.ln?(this.oMap.setCenter(this.markers[0].getPosition()),this.ViewOnMap(1)):0===this.ln?(this.o.map_options.set_center?this.oMap.setCenter(new e.maps.LatLng(this.o.map_options.set_center[0],this.o.map_options.set_center[1])):this.oMap.fitBounds(this.oBounds),this.oMap.setZoom(this.o.map_options.zoom)):(this.oMap.fitBounds(this.oBounds),"number"==typeof(this.o.start-0)&&0<this.o.start&&this.o.start<=this.ln?this.ViewOnMap(this.o.start):this.ViewOnMap(this.view_all_key))};
d.prototype.debug=function(a){this.dev&&this.errors.length&&console.log(a+": ",this.errors)};d.prototype.AddControl=function(a,b){if(!a||!b)return!1;this.controls[a]=b;return!0};d.prototype.CloseInfoWindow=function(){if(this.infowindow&&(this.current_index||0===this.current_index))this.o.beforeCloseInfowindow(this.current_index,this.o.locations[this.current_index]),this.infowindow.close(),this.infowindow=null,this.o.afterCloseInfowindow(this.current_index,this.o.locations[this.current_index])};d.prototype.ShowOnMenu=
function(a){if(a==this.view_all_key&&this.o.view_all&&1<this.ln)return!0;a=parseInt(a,10);if("number"==typeof(a-0)&&0<=a&&a<this.ln){var b=!1===this.o.locations[a].on_menu?!1:!0;if(!1!==this.o.locations[a].visible&&b)return!0}return!1};d.prototype.ViewOnMap=function(a){if(a==this.view_all_key)this.o.beforeViewAll(),this.current_index=a,0<this.o.locations.length&&(this.o.generate_controls&&this.current_control&&this.current_control.activateCurrent)&&this.current_control.activateCurrent.apply(this,
[a]),this.oMap.fitBounds(this.oBounds),this.CloseInfoWindow(),this.o.afterViewAll();else if(a=parseInt(a,10),"number"==typeof(a-0)&&0<a&&a<=this.ln)try{e.maps.event.trigger(this.markers[a-1],"click")}catch(b){this.errors.push(b.toString())}this.debug("03")};d.prototype.SetLocations=function(a,b){this.o.locations=a;b&&this.Load()};d.prototype.AddLocations=function(a,b){var c=this;f.isArray(a)&&f.each(a,function(a,b){c.o.locations.push(b)});f.isPlainObject(a)&&this.o.locations.push(a);b&&this.Load()};
d.prototype.AddLocation=function(a,b,c){f.isPlainObject(a)&&this.o.locations.splice(b,0,a);c&&this.Load()};d.prototype.RemoveLocations=function(a,b){var c=this,d=0;f.isArray(a)?f.each(a,function(a,b){b-d<c.ln&&c.o.locations.splice(b-d,1);d++}):a<this.ln&&this.o.locations.splice(a,1);b&&this.Load()};d.prototype.Loaded=function(){return this.loaded};d.prototype._init=function(){this.ln=this.o.locations.length;for(var a=0;a<this.ln;a++)f.extend(this.o.locations[a],this.o.commons),this.o.locations[a].html&&
(this.o.locations[a].html=this.o.locations[a].html.replace("%index",a+1),this.o.locations[a].html=this.o.locations[a].html.replace("%title",this.o.locations[a].title||""));this.map_div=f(this.o.map_div);this.controls_wrapper=f(this.o.controls_div)};d.prototype.Load=function(a){f.extend(!0,this.o,a);a&&a.locations&&(this.o.locations=a.locations);this._init();this.init_map();this.create_objMap();this.add_markers_to_objMap();
1<this.ln&&this.o.generate_controls||this.o.force_generate_controls?(this.o.generate_controls=!0,this.generate_controls()):this.o.generate_controls=!1;var b=this;this.loaded?this.perform_load():(e.maps.event.addListenerOnce(this.oMap,"idle",function(){b.perform_load()}),e.maps.event.addListener(this.oMap,"resize",function(){b.canvas_map.css({width:b.map_div.width(),height:b.map_div.height()})}));this.loaded=!0};"function"==typeof define&&define.amd?define(function(){return d}):n.Maplace=d})(jQuery,this,google);