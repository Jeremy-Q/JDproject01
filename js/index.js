
//-------------页面顶部广告开始-----------------------------
//1.获取元素
var closeTopAd = id("closeTopAd");
var banner = id("banner");
//2.给关闭按钮注册一个单击事件
closeTopAd.onclick = function () {

    //第一种方式：隐藏banner
    //banner.style.display = "none";

    //2.第二种方式：清空banner的innerHTML
    //2.1 清空banner  这个div里面的内容
    banner.innerHTML = "";
    //2.2 把banner 这个div的高度设置为0
    // banner.style.height = "0";

}
//-------------页面顶部广告结束-----------------------------


//-----------------页面秒杀部分开始-------------------------------------

/*开启重复定时器（1s）
    1.获取页面元素文本h m s
    2.s--
    3.如果 s < 0,s = 59,m--
    4.如果 m < 0,m = 59,h--
    5.如果h m  s小于10，则需要在前面加上0
    6.将计算好的时分秒赋值给页面元素

 */
setInterval(function (  ) {
    // 1.获取页面元素文本h m s
    var sDiv = document.getElementById('spanSec');
    var mDiv = document.getElementById('spanMin');
    var hDiv = document.getElementById('spanHour');

    var h = hDiv.innerText;
    var m = mDiv.innerText;
    var s = sDiv.innerText;
    // 2.s--
    s--;
    // 3.如果 s < 0,s = 59,m--
    if(s < 0){
      s = 59;
      m--;
    };

    // 4.如果 m < 0,m = 59,h--
    if(m < 0 ){
      m=59;
      h--;
    };
    //5.如果h m s小于10，则加上0
    /*细节：不要用字符串和数字去做计算，一般需要先转成number */
    s = parseInt(s);
    m = parseInt(m);
    h = parseInt(h);

    s = s<10?'0' + s:s;
    m = m<10?'0' + m:m;
    h = h<10?'0' + h:h;

    // 6.将计算好的时分秒赋值给页面元素
    hDiv.innerText = h;
    mDiv.innerText = m;
    sDiv.innerText = s;
},1000);

//-----------------页面秒杀部分结束-------------------------------------
