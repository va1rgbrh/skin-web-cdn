"use strict";function refreshCaptcha(){var t=(new Date).getTime();$(".captcha").attr("src",url("auth/captcha?"+t)),$("#captcha").val("")}function _asyncToGenerator(t){return function(){var i=t.apply(this,arguments);return new Promise(function(r,s){function o(t,e){try{var n=i[t](e),a=n.value}catch(t){return void s(t)}if(!n.done)return Promise.resolve(a).then(function(t){o("next",t)},function(t){o("throw",t)});r(a)}return o("next")})}}function showRemainTimeIndicator(t,e){if(void 0===t&&(t=$("#forgot-button").data("remain")),0<t?$("#forgot-button").html(trans("auth.send")+" ("+t+")").prop("disabled",!0):($("#forgot-button").html(trans("auth.send")).prop("disabled",!1),e&&clearInterval(e)),!e)var n=window.setInterval(function(){showRemainTimeIndicator(--t,n)},1e3)}function _asyncToGenerator(t){return function(){var i=t.apply(this,arguments);return new Promise(function(r,s){function o(t,e){try{var n=i[t](e),a=n.value}catch(t){return void s(t)}if(!n.done)return Promise.resolve(a).then(function(t){o("next",t)},function(t){o("throw",t)});r(a)}return o("next")})}}function _asyncToGenerator(t){return function(){var i=t.apply(this,arguments);return new Promise(function(r,s){function o(t,e){try{var n=i[t](e),a=n.value}catch(t){return void s(t)}if(!n.done)return Promise.resolve(a).then(function(t){o("next",t)},function(t){o("throw",t)});r(a)}return o("next")})}}function _asyncToGenerator(t){return function(){var i=t.apply(this,arguments);return new Promise(function(s,o){return function e(t,n){try{var a=i[t](n),r=a.value}catch(t){return void o(t)}if(!a.done)return Promise.resolve(r).then(function(t){e("next",t)},function(t){e("throw",t)});s(r)}("next")})}}$(".captcha").click(refreshCaptcha),$("#forgot-button").click(function(t){t.preventDefault();var e,n,a,r,s={email:$("#email").val(),captcha:$("#captcha").val()};e=s,n=_asyncToGenerator(regeneratorRuntime.mark(function t(){var e,n,a,r;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch({type:"POST",url:url("auth/forgot"),dataType:"json",data:s,beforeSend:function(){$("#forgot-button").html('<i class="fa fa-spinner fa-spin"></i> '+trans("auth.sending")).prop("disabled",!0)}});case 3:e=t.sent,n=e.errno,a=e.msg,r=e.remain,0===n?(showMsg(a,"success"),showRemainTimeIndicator(180)):(showMsg(a,"warning"),refreshCaptcha(),r?showRemainTimeIndicator(r):$("#forgot-button").html(trans("auth.send")).prop("disabled",!1)),t.next=14;break;case 10:t.prev=10,t.t0=t.catch(0),showAjaxError(t.t0),$("#forgot-button").html(trans("auth.send")).prop("disabled",!1);case 14:case"end":return t.stop()}},t,void 0,[[0,10]])})),a=e.email,r=e.captcha,""===a?(showMsg(trans("auth.emptyEmail")),$("#email").focus()):/\S+@\S+\.\S+/.test(a)?""===r?(showMsg(trans("auth.emptyCaptcha")),$("#captcha").focus()):n():showMsg(trans("auth.invalidEmail"),"warning")}),$(document).ready(function(){return showRemainTimeIndicator()}),$("#login-button").click(function(){var e=_asyncToGenerator(regeneratorRuntime.mark(function t(e){var n,a,r,s,o;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e.preventDefault(),""!==(n={identification:$("#identification").val(),password:$("#password").val(),keep:!!$("#keep").prop("checked")}).identification){t.next=7;break}showMsg(trans("auth.emptyIdentification")),$("#identification").focus(),t.next=32;break;case 7:if(""!==n.password){t.next=12;break}showMsg(trans("auth.emptyPassword")),$("#password").focus(),t.next=32;break;case 12:if("block"!==$("#captcha-form").css("display")){t.next=18;break}if(n.captcha=$("#captcha").val(),""!==n.captcha){t.next=18;break}return showMsg(trans("auth.emptyCaptcha")),$("#captcha").focus(),t.abrupt("return",!1);case 18:return t.prev=18,t.next=21,fetch({type:"POST",url:url("auth/login"),dataType:"json",data:n,beforeSend:function(){$("#login-button").html('<i class="fa fa-spinner fa-spin"></i> '+trans("auth.loggingIn")).prop("disabled","disabled")}});case 21:a=t.sent,r=a.errno,s=a.msg,o=a.login_fails,0===r?(swal({type:"success",html:s}),setTimeout(function(){window.location=url(blessing.redirect_to||"user")},1e3)):(3<o&&"none"===$("#captcha-form").css("display")&&(swal({type:"error",html:trans("auth.tooManyFails")}),$("#captcha-form").show()),refreshCaptcha(),showMsg(s,"warning"),$("#login-button").html(trans("auth.login")).prop("disabled","")),t.next=32;break;case 28:t.prev=28,t.t0=t.catch(18),showAjaxError(t.t0),$("#login-button").html(trans("auth.login")).prop("disabled","");case 32:case"end":return t.stop()}},t,void 0,[[18,28]])}));return function(t){return e.apply(this,arguments)}}()),$("#register-button").click(function(t){t.preventDefault();var e,n,a,r,s,o,i,c={email:$("#email").val(),password:$("#password").val(),nickname:$("#nickname").val(),player_name:$("#player-name").val(),captcha:$("#captcha").val()};e=c,n=_asyncToGenerator(regeneratorRuntime.mark(function t(){var e,n,a;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch({type:"POST",url:url("auth/register"),dataType:"json",data:c,beforeSend:function(){$("#register-button").html('<i class="fa fa-spinner fa-spin"></i> '+trans("auth.registering")).prop("disabled","disabled")}});case 3:e=t.sent,n=e.errno,a=e.msg,0===n?(swal({type:"success",html:a}),setTimeout(function(){window.location=url("user")},1e3)):(showMsg(a,"warning"),refreshCaptcha(),$("#register-button").html(trans("auth.register")).prop("disabled","")),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(0),showAjaxError(t.t0),$("#register-button").html(trans("auth.register")).prop("disabled","");case 13:case"end":return t.stop()}},t,void 0,[[0,9]])})),a=e.email,r=e.password,s=e.nickname,o=e.player_name,i=e.captcha,""===a?(showMsg(trans("auth.emptyEmail")),$("#email").focus()):/\S+@\S+\.\S+/.test(a)?""===r?(showMsg(trans("auth.emptyPassword")),$("#password").focus()):r.length<8||32<r.length?(showMsg(trans("auth.invalidPassword"),"warning"),$("#password").focus()):""===$("#confirm-pwd").val()?(showMsg(trans("auth.emptyConfirmPwd")),$("#confirm-pwd").focus()):r!==$("#confirm-pwd").val()?(showMsg(trans("auth.invalidConfirmPwd"),"warning"),$("#confirm-pwd").focus()):0<$("#nickname").length&&""===s?(showMsg(trans("auth.emptyNickname")),$("#nickname").focus()):0<$("#player-name").length&&""===o?(showMsg(trans("auth.emptyPlayerName")),$("#player-name").focus()):""===i?(showMsg(trans("auth.emptyCaptcha")),$("#captcha").focus()):n():showMsg(trans("auth.invalidEmail"),"warning")}),$("#reset-button").click(function(t){t.preventDefault();var e,n,a,r={uid:$("#uid").val(),password:$("#password").val(),token:getQueryString("token")};e=r,n=_asyncToGenerator(regeneratorRuntime.mark(function t(){var e,n,a;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch({type:"POST",url:url("auth/reset"),dataType:"json",data:r,beforeSend:function(){$("#reset-button").html('<i class="fa fa-spinner fa-spin"></i> '+trans("auth.resetting")).prop("disabled","disabled")}});case 3:e=t.sent,n=e.errno,a=e.msg,0===n?swal({type:"success",html:a}).then(function(){return window.location=url("auth/login")}):(showMsg(a,"warning"),$("#reset-button").html(trans("auth.reset")).prop("disabled","")),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(0),showAjaxError(t.t0),$("#reset-button").html(trans("auth.reset")).prop("disabled","");case 13:case"end":return t.stop()}},t,void 0,[[0,9]])})),""===(a=e.password)?(showMsg(trans("auth.emptyPassword")),$("#password").focus()):a.length<8||16<a.length?(showMsg(trans("auth.invalidPassword"),"warning"),$("#password").focus()):""===$("#confirm-pwd").val()?(showMsg(trans("auth.emptyConfirmPwd")),$("#confirm-pwd").focus()):a!==$("#confirm-pwd").val()?(showMsg(trans("auth.invalidConfirmPwd"),"warning"),$("#confirm-pwd").focus()):n()});