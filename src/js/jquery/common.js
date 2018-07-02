


//----------------------------------------------------------------------
//ie11
//----------------------------------------------------------------------
$(window).on('load',function(){
var ua = window.navigator.userAgent;
if( ua.match(/MSIE/) || ua.match(/Trident/) ) {
  var bodyElement = document.getElementsByTagName('body');
  bodyElement[0].classList.add( 'ie' );
}
});
//----------------------------------------------------------------------
//pageTop
//----------------------------------------------------------------------

$(function(){
	$('a[href^=#]').click(function(){
		var speed = 500;
		var href= $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		var position = target.offset().top;
		$("html, body").animate({scrollTop:position}, speed, "swing");
		return false;
	});
});


//----------------------------------------------------------------------
//tab
//----------------------------------------------------------------------

$(function() {
    var tabMenu = $('.js-tab-menu li');
    var tabWrap = $('.js-tab-wrap');
    var tabBox = $('.js-tab-cnt');

    if (Cookies.get('index')) {
      index = Cookies.get('index');
      //$('li').removeClass('selected').eq(index).addClass('selected');
      $(tabWrap).find(tabBox).hide().eq(index).show();
    }

    $(tabMenu).click(function() {
        if (index != $(tabMenu).index(this)) {
          index = $(tabMenu).index(this);
          // タブの内容
          $(tabWrap).find(tabBox).hide().eq(index).fadeIn('fast');
          // タブ
          //$('li').removeClass('selected').eq(index).addClass('selected');

          // 有効期限は1日（クッキーにはドメインをセットしない、ブラウザを閉じたら初期化）
          Cookies.set('index', index, { expires: 1 });
        }
        var index = $(tabMenu).index(this);
        $(tabWrap).find(tabBox).not(':eq(index)').css('display','none');
        $(tabWrap).find(tabBox).eq(index).css('display','block');

    });
});

//----------------------------------------------------------------------
//pre
//----------------------------------------------------------------------

$(function() {
    var preTag = document.getElementsByClassName('sg-pre');
    for (var i = 0; i < preTag.length; i++) {
        var after = preTag[i].innerHTML.replace(/</g, '&lt;').replace(/>/g, '&gt;');
        preTag[i].innerHTML = after;
    }
});

//----------------------------------------------------------------------
//instafeedjs.com
//----------------------------------------------------------------------
$(document).ready(function() {
if($('#instafeed')){
var userFeed = new Instafeed({
    target: 'instafeed',
    get: 'user', //ユーザーから取得
    userId: '5594434755', //ユーザーID(先ほど確認した'user_id')
    sortBy: 'most-recent',//最新記事から順に取得
    links: true , //画像リンク取得
    limit: 12, //取得する画像数を設定
    resolution: 'low_resolution', //画像サイズを設定
    template: '<li><a href="{{link}}" target="_blank"><img src="{{image}}"></a></li>',
    accessToken: '5594434755.c00c2de.7721e36a9d0840418f3f6d5789107e75' //アクセストークン
    });
    userFeed.run();
  }
});

//----------------------------------------------------------------------
//ページ読み込み時にフェードインする
//----------------------------------------------------------------------
$('head').append(
  '<style>body{display:none;}'
  );
  $(window).on("load", function() {
  $('body').delay(300).fadeIn("slow");
});
