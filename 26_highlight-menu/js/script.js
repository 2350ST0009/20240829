$(function() {
    // ブラウザをスクロール
    $(window).scroll(function() {
        // 各コンテンツ位置とスクロール量の関係を調べる
        for(var i = 1; i <= 4; i++) {
            if($("section:nth-child("+ i + ")").offset().top < $(window).scrollTop() + 100){
                // 現在のcurrentクラスを削除
                $("nav li").removeClass("current");

                // 新しくcurrentクラスを追加
                $("nav li:nth-child(" + i + ")").addClass("current");
            }
        }
    });
});