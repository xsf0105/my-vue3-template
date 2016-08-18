

function timeago(time) {
  time = new Date(time);
  var delta = parseInt((new Date() - time) / 1000, 10);
  if (delta <= 0) return 'just now';

  var minutes = delta / 60;
  if (minutes < 1) return 'less than a minute ago';
  if (minutes < 2) return 'about a minute ago';

  var hours = minutes / 60;
  if (hours < 1) return parseInt(minutes, 10) + ' minutes ago';
  if (hours < 1.5) return 'about an hour ago';

  var days = hours / 24;
  if (days < 1) return Math.round(hours) + ' hours ago';
  if (days < 7) return parseInt(days, 10) + ' days ago';

  var month = time.getMonth();
  if (month < 10) month = '0' + month;
  var date = time.getDate();
  if (date < 10) date = '0' + date;
  return [time.getFullYear(), month, date].join('-');
}


function urlize(text) {
  if (!text) return '';
  var pattern = /https?:\/\/[^\s<]+[^<.,:;"')\]\s]/g;
  return text.replace(pattern, function(u) {
    var t = u.replace('http://', '');
    return '<a href="' + u + '">' + t + '</a>';
  });
}

//获取图片地址，如果地址带有 http://那么就认为是绝对地址，然后直接返回
function imgUrl(url){
    if(url.match(/http:\/\//)){
        return url;
    }

    //全站统一配置，页面首先会引用
    if(window.abp){
        return window.abp.imageDomain + url;
    }
    var testUrl  = 'http://img.yaomaiche.com';  //此url到时候走配置

    if(this.isTest){
        testUrl = 'http://img.test.yaomaiche.com';
    }
    return testUrl + url;
}


//显示价格
function price(value,currency){
var digitsRE = /(\d{3})(?=\d)/g
  value = parseFloat(value)
  if (!isFinite(value) || (!value && value !== 0)) return ''
  currency = currency != null ? currency : '¥'
  var stringified = Math.abs(value).toFixed(2)
  var _int = stringified.slice(0, -3)
  var i = _int.length % 3
  var head = i > 0
    ? (_int.slice(0, i) + (_int.length > 3 ? ',' : ''))
    : ''
  var _float = stringified.slice(-3)
  var sign = value < 0 ? '-' : ''
  return currency + sign + head +
    _int.slice(i).replace(digitsRE, '$1,') +
    _float
}

exports.imgUrl = imgUrl;
exports.price = price;
exports.timeago = timeago;
exports.urlize = urlize;
