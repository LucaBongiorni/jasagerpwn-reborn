﻿if(typeof window.MSCOM=="undefined")window.MSCOM={};window.MSCOM.Helper={htmlEncode:function(a){return a=="undefined"||a==null?a:$("<div/>").text(a).html()},htmlDecode:function(a){return a=="undefined"||a==null?a:$("<div/>").html(a).text()},htmlAttrEncode:function(a){a=this.htmlEncode(a);a=a.replace(/"/g,"&quot;");return a.replace(/'/g,"&#039;")},isIE7:function(){return navigator.appVersion.indexOf("MSIE 7.")!=-1}};window.MSCOM.Helper.Content={images:{},doc:{},queue:{},curThread:0,maxThread:2,nextDelay:100,logenabled:!1,isBodyLoaded:!1,prefetchEnabled:!0,onload:function(){this.log("window.MSCOM.Helper.Content: Body Onload");this.isBodyLoaded=!0;setTimeout($.proxy(this.next,this),this.nextDelay)},log:function(a){if(this.logenabled)try{console.log(a)}catch(b){}else if(window.location.hash.indexOf("helplog")>0)this.logenabled=!0},sortQ:function(){var a=[],c={};for(var b in this.queue)a.push(b);a.sort();for(var b in a)c[a[b]]=this.queue[a[b]];this.queue=c},registerImage:function(b){if(this.prefetchEnabled){var a={path:"",priority:0,type:"img",callback:null,passvar:null,cache:!0};$.extend(a,b);this.addToQueue(a)}return this.prefetchEnabled},registerDoc:function(b){if(this.prefetchEnabled){var a={path:"",priority:0,type:"doc",callback:null,passvar:null,cache:!0};$.extend(a,b);this.addToQueue(a)}return this.prefetchEnabled},unregister:function(c){for(var d in this.queue)for(var b=this.queue[d],a=0;a<b.length;++a)if(b[a].path===c){this.log(["unregister",b[a]]);b.splice(a,1);return!0}return!1},addToQueue:function(a){this.log(["addToQueue",a]);if(this.queue[a.priority]==undefined){this.queue[a.priority]=[];this.sortQ()}this.queue[a.priority].push(a);setTimeout($.proxy(this.next,this),this.nextDelay)},next:function(){if(!this.prefetchEnabled)return!1;if(this.curThread>=this.maxThread)return!1;if(!$.isReady&&!this.isBodyLoaded)return!1;var a;for(var b in this.queue){if(!this.isBodyLoaded&&parseInt(b)>-1)return!1;if(this.queue[b].length>0){a=this.queue[b].shift();break}}if(a){this.log(["Next:starting item",a]);this.curThread++;a.type=="img"&&this.loadImage(a);a.type=="doc"&&this.loadDocument(a)}},loadImage:function(a){if(a.cache&&this.images[a.path]!=undefined&&this.images[a.path].complete)this.imageLoaded(this.images[a.path],a);else if(document.images){var b=new Image,c=this;$(b).load(function(){c.imageLoaded(b,a)});$(b).error(function(){c.imageError(b,a)});b.src=a.path;this.images[a.path]=b}},loadDocument:function(a){if(a.cache&&this.doc[a.path]!=undefined)this.docLoaded(this.doc[a.path],a);else{var b=this;$.get(a.path,function(c){b.docLoaded(c,a)})}},imageLoaded:function(b,a){this.curThread=this.curThread>0?this.curThread-1:0;a.callback&&a.callback(b,a.passvar);setTimeout($.proxy(this.next,this),this.nextDelay)},imageError:function(b,a){this.curThread=this.curThread>0?this.curThread-1:0;a.callback&&a.callback(b,a.passvar);setTimeout($.proxy(this.next,this),this.nextDelay)},docLoaded:function(b,a){this.curThread=this.curThread>0?this.curThread-1:0;try{a.callback&&a.callback(b,a.passvar)}catch(c){this.log(c)}setTimeout($.proxy(this.next,this),this.nextDelay)}};if(typeof $!="undefined")$(window).load($.proxy(window.MSCOM.Helper.Content.onload,window.MSCOM.Helper.Content));else if(document.addEventListener)window.addEventListener("load",function(){window.MSCOM.Helper.Content.onload()},!1);else window.attachEvent&&window.attachEvent("onload",function(){window.MSCOM.Helper.Content.onload()});if(typeof window.Ms=="undefined")window.Ms={};Ms.TopDownloads=function(d){var a={id:"divId",currentFamilyId:0,posturl:"components/ProductFamilyTopDownloads.asch",loadingimage:"/en-us/download/shared/templates/components/omniPopularDownloads/images/loading-md.gif",loadigtext:"Loading your results, please wait...",canceltext:"Cancel"};$.extend(a,d);$("div.familySelect").show();var b=function(){var e=$(this).val(),f="productFamilyTopList-"+e,b="li[id='"+f+"']",g=$(b);if(!g.find("ul").length){var d=$(".productList"),c=$(".loadMask");c.css({width:d.width(),height:d.height(),position:"absolute",top:-2,left:0});c.show();$.ajax({url:a.posturl,dataType:"html",method:"GET",data:"pfid="+e,success:function(e){$(".productList").find(b).replaceWith($(e).find(b));$().DlcOverlay("initMoreInfo");var d="#"+a.id;$(d+" ul.productList>li").each(function(){$(this).hide()});c.hide();$(b).show()}})}else{var h="#"+a.id;$(h+" ul.productList>li").each(function(){$(this).hide()});$(b).show()}},c=$("#omniSelectFamily");if($.browser.msie){c.click(b);c.keyup(b)}else c.change(b)}
