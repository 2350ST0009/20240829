$(function() {
    // スライドの方向
    // -1のとき左へスライド/1のとき右へスライド
    var dir = -1;

    // スライドのインターバル(何秒ごとにスライドさせるか。3000ミリ秒)
    var interval = 3000;

    // スライドのスピード(700ミリ秒)
    var duration = 700;

    // タイマー用変数
    var timer;

    // Listの順番を変更(3番目を1番最初にする)
    $("#slide ul").prepend($("#slide li:last-child"));

    // リストの位置を変更
    $("#slide ul").css("left", -1000);

    // 3000ミリ秒(変数intervalの値)ごとにslideTimer関数を実行
    timer = setInterval(slideTimer, interval);

    // slideTimer関数
    function slideTimer() {
    // スライド方向の判断
        if(dir == -1) {
            // 画像一枚分左へスライド
            $("#slide ul").animate({"left": "-=1000px"}, duration, function(){
                // リストの順番を変更
                $(this).append($("#slide li:first-child"));

                // リストの位置を変更
                $(this).css("left",-1000);

                // 左方向へリセット
                dir = -1;
            });
        } else {
            // 画像1枚分右へスライド
            $("#slide ul").animate({"left": "+=1000px"}, duration,function() {
                // リストの順番を変更
                $(this).prepend($("#slide li:last-child"));

                // リストの位置を変更
                $(this).css("left", -1000);

                // 左方向へリセット
                dir = -1;
            });
        }
    }
    // 前へ戻るボタン
    $("#prevBtn").click(function() {
        // スライド方向の切り替え
        dir = 1;
        // タイマーを停止して再スタート
        clearInterval(timer);
        timer = setInterval(slideTimer, interval);

        // 初回の関数実行
        slideTimer();
    });

    // 次へ進むボタン
    $("#nextBtn").click(function() {
        // スライド方向の切り替え(左)
        dir = -1;

        // タイマーを停止して再スタート
        clearInterval(timer);
        timer = setInterval(slideTimer, interval);

        // 初回の関数実行
        slideTimer();
    })
})