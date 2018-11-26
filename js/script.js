// --------------------
// return userAgent
//  1: ie
//  2: edge
//  3: chrome
//  4: sdate_afari
//  5: firefox
//  6: opera
//  null: unknow
// --------------------
function getUserAgent() {
  var userAgent = window.navigator.userAgent.toLowerCase();
  
  if(userAgent.indexOf('msie') != -1 || userAgent.indexOf('trident') != -1) {
      return "ie";
  } else if(userAgent.indexOf('edge') != -1) {
      return "edge";
  } else if(userAgent.indexOf('chrome') != -1) {
      return "chrome";
  } else if(userAgent.indexOf('safari') != -1) {
      return "safari";
  } else if(userAgent.indexOf('firefox') != -1) {
      return "firefox";
  } else if(userAgent.indexOf('opera') != -1) {
      return "opera";
  } else {
      return null;
  }
}

// --------------------
// return formated date(yyyymmddHH24MISS)
// --------------------
function getFormatDateTime() {
  let nowDate = new Date();
  let date_y = nowDate.getFullYear();
  let date_m = nowDate.getMonth() + 1;
  date_m = ("0" + date_m).slice(-2);
  let date_d = nowDate.getDate();
  date_d = ("0" + date_d).slice(-2);
  
  let time_H = nowDate.getHours();
  time_H = ("0" + time_H).slice(-2);
  let time_M = nowDate.getMinutes();
  time_M = ("0" + time_M).slice(-2);
  let time_S = nowDate.getSeconds();
  time_S = ("0" + time_S).slice(-2);
  
  return date_y + date_m + date_d + time_H + time_M + time_S;
}

// --------------------
// convert Base64 to Blob
// --------------------
function base64toBlob(base64)
{
	var tmp = base64.split(',');
	var data = atob(tmp[1]);
	var mime = tmp[0].split(':')[1].split(';')[0];
	var buf = new Uint8Array(data.length);
	for (var i = 0; i < data.length; i++) {
		buf[i] = data.charCodeAt(i);
	}
	var blob = new Blob([buf], { type: mime });
	return blob;
}