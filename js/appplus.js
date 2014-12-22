/**

 */
$(function() { 
	$.browser = {
		versions: function () {
			var u = navigator.userAgent, app = navigator.appVersion;
			return {//�ƶ��ն�������汾��Ϣ 
				trident: u.indexOf('Trident') > -1, //IE�ں�
				presto: u.indexOf('Presto') > -1, //opera�ں�
				webKit: u.indexOf('AppleWebKit') > -1, //ƻ�����ȸ��ں�
				gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //����ں�
				mobile: !!u.match(/AppleWebKit.*Mobile.*/) || !!u.match(/AppleWebKit/), //�Ƿ�Ϊ�ƶ��ն�
				ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios�ն�
				android: u.indexOf('Android') > -1, //android�ն�
				iPhone: u.indexOf('iPhone') > -1, //�Ƿ�ΪiPhone����QQHD�����
				iPad: u.indexOf('iPad') > -1, //�Ƿ�iPad
				webApp: u.indexOf('Safari') == -1, //�Ƿ�webӦ�ó���û��ͷ����ײ�
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