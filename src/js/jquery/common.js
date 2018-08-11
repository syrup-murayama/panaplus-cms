


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
//nav
//----------------------------------------------------------------------


/*
	By Osvaldas Valutis, www.osvaldas.info
	Available for use under the MIT License
  More informations:
  https://osvaldas.info/drop-down-navigation-responsive-and-touch-friendly
*/
;(function( $, window, document, undefined )
{
	$.fn.doubleTapToGo = function( params )
	{
		if( !( 'ontouchstart' in window ) &&
			!navigator.msMaxTouchPoints &&
			!navigator.userAgent.toLowerCase().match( /windows phone os 7/i ) ) return false;
		this.each( function()
		{
			var curItem = false;
			$( this ).on( 'click', function( e )
			{
				var item = $( this );
				if( item[ 0 ] != curItem[ 0 ] )
				{
					e.preventDefault();
					curItem = item;
				}
			});
			$( document ).on( 'click touchstart MSPointerDown', function( e )
			{
				var resetItem = true,
					parents	  = $( e.target ).parents();
				for( var i = 0; i < parents.length; i++ )
					if( parents[ i ] == curItem[ 0 ] )
						resetItem = false;
				if( resetItem )
					curItem = false;
			});
		});
		return this;
	};
})( jQuery, window, document );
$( '#l-gnav li:has(ul)' ).doubleTapToGo();
/*
	VIEWPORT BUG FIX
	iOS viewport scaling bug fix, by @mathias, @cheeaun and @jdalton
*/
;(function(e){function o(){s.content="width=device-width,minimum-scale="+i[0]+",maximum-scale="+i[1];e.removeEventListener(n,o,true)}var t="addEventListener",n="gesturestart",r="querySelectorAll",i=[1,1],s=r in e?e[r]("meta[name=viewport]"):[];if((s=s[s.length-1])&&t in e){o();i=[.25,1.6];e[t](n,o,true)}})(document);

//----------------------------------------------------------------------
//instafeedjs.com -> instafeed.jsに移した。ページのボディーにのみ埋め込むこととする。2018-07-06, daisuke
//----------------------------------------------------------------------


//----------------------------------------------------------------------
//ページ読み込み時にフェードインする
//----------------------------------------------------------------------
// $(function() {
//   var h = $(window).height();
//   $('#wrapper').css('display','none');
//   $('#loader-bg ,#loader').height(h).css('display','block');
// });
// $(window).load(function () {
//   $('#loader-bg').delay(100).fadeOut(60);
//   $('#loader').delay(60).fadeOut(30);
//   $('#wrapper').css('display', 'block');
// });

// //----------------------------------------------------------------------
// //フォームの入力を拾ってAJAXで送信する。
// //----------------------------------------------------------------------
// $("#contact-regular").submit(function(e) {
//   e.preventDefault();
//
//   var $form = $(this);
//   $.post($form.attr("action"), $form.serialize()).then(function() {
//     alert("フォームの送信を受付ました");
//   });
// });
//
// //----------------------------------------------------------------------
// //フォームの入力を拾ってAJAXで送信する。
// //----------------------------------------------------------------------
// $("#contact-recruit").submit(function(e) {
//   e.preventDefault();
//
//   var $form = $(this);
//   $.post($form.attr("action"), $form.serialize()).then(function() {
//     alert("フォームの送信を受付ました");
//   });
// });
