/*
 * retunr userAgent
 *  1: Internet Explorer
 *  2: edge
 *  3: chrome
 *  4: safari
 *  5: firefox
 *  6: opera
 *  null: unknown
 */
function getUserAgent() {
  var userAgent = window.navigator.userAgent.toLowerCase();
  
  if(userAgent.indexOf('msie') != -1 || userAgent.indexOf('trident') != -1) {
      return 1;
  } else if(userAgent.indexOf('edge') != -1) {
      return 2;
  } else if(userAgent.indexOf('chrome') != -1) {
      return 3;
  } else if(userAgent.indexOf('safari') != -1) {
      return 4;
  } else if(userAgent.indexOf('firefox') != -1) {
      return 5;
  } else if(userAgent.indexOf('opera') != -1) {
      return 6;
  } else {
      return null;
  }
}
