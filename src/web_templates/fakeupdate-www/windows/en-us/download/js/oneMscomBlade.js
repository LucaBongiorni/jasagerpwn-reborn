﻿
window.Mst===undefined&&(window.Mst={}),Mst.FlyoutMenu=function(n,t,i,r,u,f,e,o,s){var c=".",h=this;h.Control=$("#"+n),h._menuClass=c+t,h._itemClass=c+i,h._flyoutLinkClass=c+r,h._staticLinkClass=c+u,h._flyoutClass=c+f,h._flyoutRegionClass=c+e,h.SetPriRowWidth(h.Control),h._onOpenClick=o,h._onCloseEvent=s,h.Control.find(h._flyoutLinkClass).click($.proxy(h.ItemClick,h)).keydown($.proxy(h.ItemKeyDown,h));var l=h.Control.find(h._flyoutClass).toArray(),a;for(a in l)$(l[a]).find("a:last").keydown($.proxy(h.LastLinkKeyDown,h));$(document).click($.proxy(h.DocClick,h))},Mst.FlyoutMenu.prototype={SetPriRowWidth:function(n){var t=$(".mstHdr_PriRow",n),f=$(".mstHdr_StaticSec11",t).first(),u=$(".mstHdr_StaticSec12",t).first(),e=$(".mstHdr_StaticSec13",t).first(),i=$(".mstHdr_StaticSec14",t).first(),r;$.browser.msie?$.browser.version.substr(0,1)>7&&i.width("auto"):i.width("auto"),r=t.width()-f.width()-u.width()-i.width()-1,e.width(r>0?r:"100%")},DocClick:function(n){var i=this.Control.find(".selected"),t;i.size()>0&&(t=$.contains(i.get(0),n.target),t||this.HideFlyouts(n))},ItemClick:function(n){var t=this;$(n.target).hasClass("mstLcp_DualLangLink")||(n.preventDefault(),t.IsFlyoutVisible(n)?t.HideFlyouts(n):(t.HideFlyouts(n),t.ShowFlyout(n),t._onOpenClick!=null&&t._onOpenClick(n)))},ItemKeyDown:function(n){n.which==9&&n.shiftKey&&this.HideFlyouts()},LastLinkKeyDown:function(n){n.which==9&&(n.shiftKey||this.HideFlyouts())},IsFlyoutVisible:function(n){return $(n.target).parents(this._itemClass).find(this._flyoutClass).css("display")!="none"},ShowFlyout:function(n){var t=$(n.target).parents(this._itemClass).addClass("selected").find(this._flyoutClass);this.PositionFlyout(t),jQuery.browser.opera||jQuery.browser.msie&&document.documentMode<=7?t.show():t.slideDown(200)},HideFlyouts:function(){var t=this;jQuery.browser.opera||jQuery.browser.msie&&document.documentMode<=7?$(t._flyoutClass,t.Control).hide():$(t._flyoutClass,t.Control).slideUp(200);var i=t;t._onCloseEvent!=null&&$(t._itemClass).filter(".selected").each(function(){i._onCloseEvent($(this).find(i._flyoutLinkClass))}),$(t._itemClass).removeClass("selected")},PositionFlyout:function(n){var f=this,o="left",i=n.parents(f._itemClass).width(),s=n.parents(f._itemClass).position().left,e=n.outerWidth(),l=n.parents(f._menuClass).width(),a=n.parents(f._menuClass).position().left,c=l,u,t,h,r;n.parents(f._flyoutRegionClass).size()>0&&(c=n.parents(f._flyoutRegionClass).innerWidth()),u=s+a,t=l-s-i,document.documentElement.dir=="rtl"&&(o="right",i-=2,t=c-s-i,h=u,u=t,t=h),t<0&&(t=0),u<0&&(u=0),r=0,e>i+t?e<i+u?(r=document.documentElement.dir=="rtl"?-e+i+2:-e+i,n.css(o,r),n.addClass("dock-right")):e<u+t+i?(r=-e+(t+i),n.css(o,r)):(r=-u-1,n.css(o,r)):(n.css(o,r),n.addClass("dock-left"))}},Mst.AnimHeaderItems=function(n,t){$("#"+n+" ."+t).each(function(){new Mst.AnimHeaderItem($(this),"mstHdr_MenuLinkTxt","mstHdr_MenuLinkImg","mstHdr_MenuLinkDesc")})},Mst.CPSAnimation=function(n,t,i,r){var u=this;u._isClosed=n,u._timeOutIdVal=t,u._display=i,u._displayTime=r,u.OpenB()},Mst.CPSAnimation.prototype={OpenB:function(){var n=this;n._display&&($(".mstHdr_divA").css("visibility","hidden"),$("#divContainer").show(0,n.setSize()),timeOutIdVal=window.setTimeout(n.CloseB,n._displayTime),$(".mstHdr_Image").click($.proxy(n.ItemClickCloseB,n)))},ItemClickCloseB:function(n){n.preventDefault(),this.CloseB()},CloseB:function(){this._isClosed||($(".mstHdr_divContainer").slideUp(600),this._isClosed=!0,window.clearTimeout(this._timeOutIdVal),$(".mstHdr_divA").css("visibility","visible"))},setSize:function(){var n=$("#imageCPSB").width();$(".mstHdr_Image").width(n-2)}},Mst.AccountFlyout=function(n){var r=this;r.Control=$("#"+n),r._id=n,r._itemClass=".mstHdr_MenuItemAccount",r._flyoutClass=".mstHdr_Flyout",r._flyoutLinkClass=".mstHdr_MenuItemAccountFlyoutLink",r._AccountFlyoutLinkText=".mstHdr_MenuItemAccountFlyoutLinkText",r.Control.find(r._flyoutLinkClass).click($.proxy(r.ItemClick,r)).keydown($.proxy(r.ItemKeyDown,r)),$(document).click($.proxy(r.DocClick,r)),r.Control.find(r._flyoutLinkClass).mouseenter($.proxy(r.OnMouseEnterAccountLink,r)),r.Control.find(r._flyoutLinkClass).mouseleave($.proxy(r.OnMouseLeaveAccountLink,r))},Mst.AccountFlyout.prototype={DocClick:function(n){var i=this.Control.find(".selected"),t;i.size()>0&&(t=$.contains(i.get(0),n.target),t||this.HideFlyouts(n))},ItemClick:function(n){n.preventDefault(),this.IsFlyoutVisible(n)?this.HideFlyouts(n):this.ShowFlyout(n)},ItemKeyDown:function(n){n.which==9&&n.shiftKey&&this.HideFlyouts(n)},IsFlyoutVisible:function(n){return $(n.target).parents(this._itemClass).find(this._flyoutClass).css("display")!="none"},ShowFlyout:function(n){var t=this,i=$(n.target).parents(t._itemClass).addClass("selected").find(t._flyoutClass);t.PositionFlyout(i),jQuery.browser.opera||jQuery.browser.msie&&document.documentMode<=7?i.show():i.slideDown(200),t.BiTrack(2,9,"."+$(n.target).attr("class"))},HideFlyouts:function(n){var t=this;jQuery.browser.opera||jQuery.browser.msie&&document.documentMode<=7?$(t._flyoutClass,t.Control).hide():$(t._flyoutClass,t.Control).slideUp(200),$(t._itemClass).removeClass("selected"),t.BiTrack(2,10,"."+$(n.target).attr("class"))},OnMouseEnterAccountLink:function(){this.Control.find(this._AccountFlyoutLinkText).css("text-decoration","underline")},OnMouseLeaveAccountLink:function(){this.Control.find(this._AccountFlyoutLinkText).css("text-decoration","none")},BiTrack:function(n,t,i){var u,r,f;if($.bi&&$.bi.dataRetrievers.structure)try{i=this._flyoutLinkClass,u=this.Control.find(i),r={title:$.trim($(u).text())};try{$.extend(r,$.bi.baseData(),$.bi.dataRetrievers.structure.getData(u))}catch(n){}f=$.extend({},r,{interactiontype:t,cot:5,parenttypestructure:r.parenttypestructure}),$.bi.record(f)}catch(n){alert("Error:"+n)}return!0},PositionFlyout:function(n){var t=this,l="left",u=n.parents(t._itemClass).width(),f=n.parents(t._itemClass).position().left,a=n.outerWidth(),s=n.parents(t._menuClass).width(),c=n.parents(t._menuClass).position().left,h=s,r,i,o,e;n.parents(t._flyoutRegionClass).size()>0&&(h=n.parents(t._flyoutRegionClass).innerWidth()),r=f+c,i=s-f-u,document.documentElement.dir=="rtl"&&(l="right",u-=2,i=h-f-u,o=r,r=i,i=o),i<0&&(i=0),r<0&&(r=0),e=0,document.documentElement.dir=="rtl"?(n.css("left",e),n.addClass("dock-left")):(n.css("right",e),n.addClass("dock-right"))}},Mst.HeaderV3===undefined&&(Mst.HeaderV3={}),Mst.HeaderV3=function(n,t,i){var r=this;r.StageWidth=t,r.StagePadding=i,r.Control=$("#"+n),$($.proxy(r.Ready,r))},Mst.HeaderV3.prototype={Ready:function(){this.SetBrandLine(),$(window).resize($.proxy(this.SetBrandLine,this))},SetBrandLine:function(){var e="padding-right",f="padding-left",t=this,n=$(t.Control.find(".mstHdr_BrandLine")),r;n.css({left:"0px",right:"0px",width:"0px"});var i=t.Control.offset().left,u=0,h=t.Control.height()+6+"px",o=parseInt(t.StageWidth==""?$(".stage").width():t.StageWidth),s=parseInt(t.StagePadding==""?$(".stage").css(f):t.StagePadding);document.documentElement.dir=="ltr"?(n.css("left",i*-1),n.css(f,i),n.css(e,i),u=o):(r=i<s?s:i,n.css("right",r*-1),n.css(f,r),n.css(e,r),u=o),n.css("width",u)}}
