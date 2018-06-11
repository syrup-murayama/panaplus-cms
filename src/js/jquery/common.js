

 
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
    $(tabMenu).click(function() {
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