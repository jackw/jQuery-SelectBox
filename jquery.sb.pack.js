/*
  jQuery-SelectBox
  
  Traditional select elements are very difficult to style by themselves, 
  but they are also very usable and feature rich. This plugin attempts to 
  recreate all selectbox functionality and appearance while adding 
  animation and stylability.
  
  This product includes software developed 
  by RevSystems, Inc (http://www.revsystems.com/) and its contributors
  
  Please see the accompanying LICENSE.txt for licensing information.
*/
(function(a){jQuery.fn.borderWidth=function(){return a(this).outerWidth()-a(this).innerWidth()};jQuery.fn.marginWidth=function(){return a(this).outerWidth(true)-a(this).outerWidth()};jQuery.fn.paddingWidth=function(){return a(this).innerWidth()-a(this).width()};jQuery.fn.extraWidth=function(){return a(this).outerWidth(true)-a(this).width()};jQuery.fn.offsetFrom=function(b){return{left:a(this).offset().left-b.offset().left,top:a(this).offset().top-b.offset().top}};jQuery.fn.maxWidth=function(){var b=0;a(this).each(function(){if(a(this).width()>b){b=a(this).width()}});return b};jQuery.fn.sb=function(b){if(a.browser.msie&&a.browser.version<7){return a(this)}b=a.extend({acTimeout:800,animDuration:300,ddCtx:"body",fixedWidth:true,maxHeight:false,maxWidth:false,noScrollThreshold:100,placement:"before",selectboxClass:"selectbox",arrowMarkup:"<span class='arrow_btn'><span class='interior'><span class='arrow'></span></span></span>",optionFormat:function(c,d){return a(this).text()},optgroupFormat:function(c){return"<span class='label'>"+a(this).attr("label")+"</span>"}},b);a(this).each(function(){var q=a(this);var F=null;var k=null;var A=null;var g=null;function p(){F=a("<div class='"+b.selectboxClass+" "+q.attr("class")+"'></div>");a("body").append(F);k=a("<a href='#' class='display "+q.attr("class")+"'><span class='value'>"+q.val()+"</span> <span class='text'>"+b.optionFormat.call(q.find("option:selected")[0],0,0)+"</span>"+b.arrowMarkup+"</a>");F.append(k);A=a("<ul class='items "+q.attr("class")+"'></ul>");F.append(A);if(q.children("optgroup").size()>0){q.children("optgroup").each(function(H){var I=a(this);var J=a("<li class='optgroup'>"+b.optgroupFormat.call(I[0],H+1)+"</li>");var K=a("<ul class='items'></ul>");J.append(K);A.append(J);I.children("option").each(function(L){K.append("<li class='"+(a(this).attr("selected")?"selected":"")+" "+(a(this).attr("disabled")?"disabled":"")+"'><a href='#'><span class='value'>"+a(this).attr("value")+"</span><span class='text'>"+b.optionFormat.call(this,H+1,L+1)+"</span></a></li>")})})}q.children("option").each(function(H){A.append("<li class='"+(a(this).attr("selected")?"selected":"")+" "+(a(this).attr("disabled")?"disabled":"")+"'><a href='#'><span class='value'>"+a(this).attr("value")+"</span><span class='text'>"+b.optionFormat.call(this,0,H+1)+"</span></a></li>")});g=A.find("li").not(".optgroup");A.children(":first").addClass("first");A.children(":last").addClass("last");q.hide();if(b.fixedWidth){var G=F.find(".text").maxWidth()+k.extraWidth();F.width(b.maxWidth?Math.min(b.maxWidth,G):G);if(a.browser.msie&&a.browser.version<=7){g.find("a").each(function(){a(this).css("width","100%").width(a(this).width()-a(this).paddingWidth()-a(this).borderWidth())})}}else{if(b.maxWidth&&F.width()>b.maxWidth){F.width(b.maxWidth)}}if(b.placement=="before"){q.before(F)}else{if(b.placement=="after"){q.after(F)}}A.hide();if(!q.is(":disabled")){k.click(D).focus(c).blur(E).hover(C,t);g.not(".disabled").find("a").click(h);g.filter(".disabled").find("a").click(function(){return false});g.not(".disabled").hover(C,t);A.find(".optgroup").hover(C,t)}else{F.addClass("disabled");k.click(function(H){H.preventDefault()})}F.bind("close",v);F.bind("destroy",d);q.bind("reload",function(){d();p()});q.focus(z)}function z(){k.focus();return false}function x(){d();p()}function d(){F.unbind().find("*").unbind();F.remove();q.unbind("reload",x).unbind("focus",z).show()}function r(){e();a(document).unbind("click",r)}function e(){a("."+b.selectboxClass).trigger("close")}function y(){a("."+b.selectboxClass).not(F[0]).trigger("close")}function v(){F.removeClass("open");g.removeClass("hover");A.fadeOut(b.animDuration,function(){F.append(A)});a(document).unbind("keyup",o);a(document).unbind("keydown",i)}function m(){var G=null;if(b.ddCtx=="self"){G=F}else{if(a.isFunction(b.ddCtx)){G=a(b.ddCtx.call(q[0]))}else{G=a(b.ddCtx)}}return G}function s(){var I=m();e();F.addClass("open");var G=u();I.append(A);function H(){A.scrollTop(g.filter(".selected").offsetFrom(A).top-A.height()/2+g.filter(".selected").outerHeight(true)/2)}if(G=="up"){A.fadeIn(b.animDuration,H)}else{if(G=="down"){A.slideDown(b.animDuration,H)}else{A.fadeIn(b.animDuration,H)}}a(document).unbind("keyup",o).keyup(o);a(document).unbind("keydown",i).keydown(i);a(document).click(r)}function u(){var M=m();var G=0;var K=0;var H="";A.removeClass("above");A.css({display:"block",maxHeight:"none",position:"relative",visibility:"hidden"});if(b.fixedWidth){A.width(k.outerWidth()-A.extraWidth())}var J=a(window).scrollTop()+a(window).height()-k.offset().top-k.outerHeight();var L=k.offset().top-a(window).scrollTop();var I=k.offsetFrom(M).top+k.outerHeight();if(A.outerHeight()<=J){G=b.maxHeight?b.maxHeight:J;K=I;H="down"}else{if(A.outerHeight()<=L){G=b.maxHeight?b.maxHeight:L;K=k.offsetFrom(M).top-Math.min(G,A.outerHeight());H="up"}else{if(J>b.noScrollThreshold&&J>L){G=b.maxHeight?b.maxHeight:J;K=I;H="down"}else{if(L>b.noScrollThreshold){G=b.maxHeight?b.maxHeight:L;K=k.offsetFrom(M).top-Math.min(G,A.outerHeight())}else{G=b.maxHeight?b.maxHeight:"none";K=I;H="down"}}}}A.css({display:"none",left:k.offsetFrom(M).left+(M[0].tagName.toLowerCase()=="body"?parseInt(a("body").css("margin-left")):0),maxHeight:G,position:"absolute",top:K+(M[0].tagName.toLowerCase()=="body"?parseInt(a("body").css("margin-top")):0),visibility:"visible"});if(H=="up"){A.addClass("above")}return H}function D(G){var H=a(this).closest("."+b.selectboxClass);if(H.is(".open")){v();k.focus()}else{k.focus();s()}return false}function n(){var G=a(this);k.find(".value").html(G.find(".value").html());k.find(".text").html(G.find(".text").html());k.find(".text").attr("title",G.find(".text").html());A.find("li").removeClass("selected");G.closest("li").addClass("selected");q.val(k.find(".value").html()).change()}function h(G){n.call(this);r();k.focus();return false}var B="";var j=null;function f(){B=""}function w(J){var K="";var I=g.not(".disabled");for(var H=0;H<I.size();H++){var G=I.eq(H).find(".text").text();K+=G+" ";if(G.toLowerCase().match("^"+J.toLowerCase())==J.toLowerCase()){return I.eq(H)}}return null}function l(H){var G=w(H);if(G!=null){n.call(G[0]);return true}return false}function i(G){if(G.which==38||G.which==40||G.which==8||G.which==32){G.preventDefault()}}function o(H){if(H.altKey||H.ctrlKey){return false}var G=g.filter(".selected");switch(H.which){case 38:if(G.size()>0){if(g.not(".disabled").filter(":first")[0]!=G[0]){n.call(g.not(".disabled").eq(g.not(".disabled").index(G)-1)[0])}}break;case 40:if(G.size()>0){if(g.not(".disabled").filter(":last")[0]!=G[0]){n.call(g.not(".disabled").eq(g.not(".disabled").index(G)+1)[0])}}else{if(g.size()>1){n.call(g.eq(0)[0])}}break;default:B+=String.fromCharCode(H.keyCode);if(!l(B)){clearTimeout(j);f()}else{clearTimeout(j);j=setTimeout(f,b.acTimeout)}break}return false}function c(){y();F.addClass("focused");if(!F.is(".open")){a(document).unbind("keyup",o).keyup(o);a(document).unbind("keydown",i).keydown(i)}}function E(){F.removeClass("focused");a(document).unbind("keyup",o);a(document).unbind("keydown",i)}function C(){a(this).addClass("hover")}function t(){a(this).removeClass("hover")}p()})}})(jQuery);