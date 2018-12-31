var transWords = {
  en:
  {
    // menu selector
    menuMenu:  " menu",
    menuNew:   " - delete all",
    menuSave:  " - save",
    menuLoad:  " - load",
    menuPicker:" - block picker",
    menuShot:  " - shot mode",
    menuFull:  " - screenshot mode",
    menuGltf:  " - export glTF",
    menuGlb:   " - export glb",
    menuObj:   " - export obj",
    menuStl:   " - export stl",
    
    // block selector
    blockWater:    "water",
    blockSand:     "sand",
    blockWoodPanel:"wood panel",
    blockTatami:   "tatami",
    blockGravel:   "gravel",
    blockStonewall:"stone wall",
    blockCobble:   "cobble",
    blockGrass:    "grass",
    blockWoodlog:  "wood log",
    blockLeaf:     "leaf",
    blockColor:    "color",
    blockQrcode:   "qrcode",
    
    // color selector
    colorBlue:  "blue",
    colorWhite: "white",
    colorPink:  "pink",
    colorViolet:"violet",
    colorYellow:"yellow",
    colorOrange:"orange",
    colorGray:  "gray",
    colorBrown: "brown",
    colorGreen: "green",
    colorRed:   "red",
    colorLime:  "lime",
    colorBlack: "black",
    
    // infomation
    info: "now loading...",
  }
};

var transButtonWords = {
  en:
  {
    // Recenter button
    recenter: "recenter",
  }
};

var transMessageWords = {
  en:
  {
    deleteAll:   "Delete all blocks. Is it OK?",
    saveConfirm: "Save it?",
    saveSuccess: "Saved.",
    saveFailure: "Saving failed. Please try again.",
    loadConfirm: "Load it? All blocks are deleted.",
    loadSuccess: "Loaded.",
    loadFailure: "Loading failed. Please try again.",
    modelConfirm:"Save it before exporting?",
    screenshotFailure:"Shooting failed. Please try again.",
  },
  ja:
  {
    deleteAll:   "すべてのブロックを削除しますか？",
    saveConfirm: "セーブしますか？",
    saveSuccess: "セーブしました。",
    saveFailure: "セーブに失敗しました。もう一度実行してください。",
    loadConfirm: "ロードしますか？今のブロックは削除されます。",
    loadSuccess: "ロードしました。",
    loadFailure: "ロードに失敗しました。もう一度実行してください。",
    modelConfirm:"作成前にセーブしますか？",
    screenshotFailure:"撮影に失敗しました。もう一度実行してください。",
  },
};

// --------------------
// get land
// --------------------
function getLang() {
  var language = (window.navigator.languages && window.navigator.languages[0]) ||
            window.navigator.language ||
            window.navigator.userLanguage ||
            window.navigator.browserLanguage;
  return language;
}

// --------------------
// translate words
// --------------------
function translateWords(langType) {
  if (transWords[langType]) {
    for (let key in transWords[langType]) {
      document.getElementById(key).innerHTML = transWords[langType][key];
    }
  }

  if (transButtonWords[langType]) {
    for (let key in transButtonWords[langType]) {
      document.getElementById(key).value = transButtonWords[langType][key];
    }
  }

}

// --------------------
// get userAgent
// return:
//   ie
//   edge
//   chrome
//   sdate_afari
//   firefox
//   opera
//   null: unknow
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
// get formated date(yyyymmddHH24MISS)
// return: new Date() formated "yyyymmddHH24MISS"
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
// return: blob
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

// --------------------
// get URL parameter
// return: array[key] = value
// --------------------
function getQueryString() {
  if (1 < document.location.search.length) {
    // 最初の1文字 (?記号) を除いた文字列を取得する
    var query = document.location.search.substring(1);

    // クエリの区切り記号 (&) で文字列を配列に分割する
    var parameters = query.split('&');

    var result = new Object();
    for (var i = 0; i < parameters.length; i++) {
      // パラメータ名とパラメータ値に分割する
      var element = parameters[i].split('=');

      var paramName = decodeURIComponent(element[0]);
      var paramValue = decodeURIComponent(element[1]);

      // パラメータ名をキーとして連想配列に追加する
      result[paramName] = decodeURIComponent(paramValue);
    }
    return result;
  }
  return null;
}

// --------------------
// set video stream
// --------------------
function getVideoStream(video) {
  navigator.getUserMedia = navigator.getUserMedia ||
                           navigator.webkitGetUserMedia ||
                           navigator.mozGetUserMedia;
  
  if (navigator.getUserMedia) {
    navigator.getUserMedia({ audio: false, video: true },
      function(stream) {
         var video = document.querySelector('video');
         video.src = window.URL.createObjectURL(stream);
         video.onloadedmetadata = function(e) {
           video.play();
         };
      },
      function(err) {
         console.log("The following error occurred: " + err.name);
      }
    );
  } else {
    console.log("getUserMedia not supported");
  }
}

// --------------------
//フルスクリーンに切り替え
// --------------------
function enterFullscreen() {
  var x = document.documentElement;
  if (x.webkitRequestFullScreen) {
    x.webkitRequestFullScreen();
  } else if (x.mozRequestFullScreen) {
  x.mozRequestFullScreen();
  } else {
    x.requestFullScreen();
  }
}

// --------------------
//フルスクリーンを解除
// --------------------
function exitFullscreen() {
  if (document.webkitCancelFullScreen) {
    document.webkitCancelFullScreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else {
    document.exitFullscreen();
  }
}

