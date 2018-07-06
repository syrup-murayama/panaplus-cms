$(document).ready(function() {
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
});
