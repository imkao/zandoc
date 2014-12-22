/**

 */
$(function() { 
	$.browser = {
		versions: function () {
			var u = navigator.userAgent, app = navigator.appVersion;
			return {//移动终端浏览器版本信息 
				trident: u.indexOf('Trident') > -1, //IE内核
				presto: u.indexOf('Presto') > -1, //opera内核
				webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
				gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
				mobile: !!u.match(/AppleWebKit.*Mobile.*/) || !!u.match(/AppleWebKit/), //是否为移动终端
				ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
				android: u.indexOf('Android') > -1, //android终端
				iPhone: u.indexOf('iPhone') > -1, //是否为iPhone或者QQHD浏览器
				iPad: u.indexOf('iPad') > -1, //是否iPad
				webApp: u.indexOf('Safari') == -1, //是否web应该程序，没有头部与底部
				midp:u.match(/midp/i)=="midp",
				ucweb:u.match(/ucweb/i)=="ucweb",
				ce:u.match(/windows ce/i)=="windows ce",
				wmobile:u.match(/windows mobile/i)=="windows mobile"||u.indexOf('Windows Phone') > -1 
			};
		} (),
		language: (navigator.browserLanguage || navigator.language).toLowerCase()
	}
	$.isMobile=function(){
		if(browser.versions.android||browser.versions.iPhone||browser.versions.iPad||browser.versions.ucweb||browser.versions.ce||browser.versions.wmobile){
			return true;
		}
		return false;
	}
 });