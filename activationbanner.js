define(["jquery","nougat"],function(e,t){"use strict";function n(){e("body").trigger("viewLoaded","activationBanner")}function r(t,r){t||(r==="ab"||r==="pb"?(e("div#activation").closest(".bannerWrapper").removeClass("display").addClass("show"),e(".bannerWrapper").css({padding:0,maxWidth:"100%"}),e(".betaBannerMainWrapper").css({paddingLeft:0,paddingRight:0})):r==="wb"&&e.get("summary/updateMerchantPreferences?flipActivationBanner=1",function(e){})),setTimeout(function(){n()},500)}return{load:function(){if(!e("div#activation").length)return;require.config({paths:{activation:"https://www.paypalobjects.com/activation/js/activation-0.1"},shim:{activation:{exports:"activation"}}}),require.onError=function(){n()},require(["activation"],function(e){e.init("div#activation",{parent:"body",maxWidth:960},r)})}}});
