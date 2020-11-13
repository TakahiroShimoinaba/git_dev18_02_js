// // jsを記述する際はここに記載していく

// console.log("はじめてのジャバスクリプト")

// console.log(23+5)

// console.log(2000-1800)

// console.log("18+5")


// // 演習３

// var name="下稲葉耕大"
// console.log(name)

// // 演習４

// var point=90

// if(point>=80){

//     console.log("素晴らしい！おめでとう！")

// }else{
//     console.log("もっと頑張りましょう！")

// }



// // 追加条件を付けたい時は　else ifを使う

// // 0 ~ 4までの数字が出ます。0を含めて数えるので下記は「５」になる

// var random = Math.floor(Math.random() * 5);
// console.log(random, "便利な機能を使ってランダムな数字が出ます");

// if(random == 0){
//     console.log("末吉")
// }else if(random == 1){
//     console.log("小吉")
// }else if(random == 2){
//     console.log("吉")
// }else if(random == 3){
//     console.log("大吉")
// }else if(random == 4){
//     console.log("特吉")

// }


// // じゃんけん開始ボタン　はじめ

// $(function(){
//     $('#btnStart').on('click',function(){
//         	cnt = 3; //3秒前からカウントスタート
//         	$('#countdown').text(cnt);
//         cnDown = setInterval(function(){ //1秒おきにカウントマイナス
//             cnt--;
//             if(cnt <= 0){//0になったら停止する
            
//                 clearInterval(cnDown);
//                 alert("おしまい。後だし禁止")
                
//             }

//             $('#countdown').text(cnt);
            
//         },1000);
//     });
// });

// じゃんけん開始ボタン　おわり


//相手の手



// $(".gubtn, .chokibtn, .pabtn").on("click", function(){

//     var aite = Math.floor(Math.random()*3);
//     console.log(aite);

//     if(aite==0){
//         console.log("グー");
//         $(".aitegubtn").show();

//     }else if(aite==1){
//         console.log("チョキ");
//         $(".aitechokibtn").show();

//     }else if(aite==2){
//         console.log("パー");
//         $(".aitepabtn").show();

//     }
//     return aite;

// }); 

//相手の手


// // 自分がぐーを選択した場合
// $(".gubtn").on("click", function(){
//     var megu= "0";
//     console.log("0");
//     return megu;
// });

// // 自分がぐーを選択した場合

// // 自分がちょきを選択した場合
// $(".chokibtn").on("click", function(){
//     var mechoki= "1";
//     console.log("1");
//     return mechoki;
// });
// // 自分がちょきを選択した場合

// // 自分がぱーを選択した場合
// $(".pabtn").on("click", function(){
//     var mepa= "2";
//     console.log("2");
//     return mepa;
// });
// // 自分がぱーを選択した場合

// それぞれのボタンが押された時の場合分け

$(".gubtn").on("click", function(){
        var megu= 0;
        console.log(megu);
        return megu;
    });
$(".chokibtn").on("click", function(){
        var choki= 1;
        console.log(choki);
        return choki;
    });    
$(".pabtn").on("click", function(){
        var mepa= 2;
        console.log(mepa);
        return mepa;
     });    


// クリックからの始動

$(".gubtn, .chokibtn, .pabtn").on("click", function(){

    // 自分の手
    var me = document.getElementById("janken").selectedIndex;
    console.log(me)
  
    // PCの手
   var aite = Math.floor(Math.random()*3);
   console.log(aite)
  
    // 判定
    var judge;

    if(aite == 0) {
        console.log("相手はグー");
        $(".aitegubtn").show();
        
    } else if(aite == 1) {
        console.log("相手はチョキ");
        $(".aitechokibtn").show();
        
    } else if(aite == 2) {
        console.log("相手はパー");
        $(".aitepabtn").show();
        
    }

// 判定// 判定// 判定// 判定// 判定

    if(me == 0 && aite == 1) {
        judge = "あなたの勝ち";
        console.log("勝ち");
        $(".winimg").show();
    
    } else if(me == 1 && aite == 2) {
        judge = "あなたの勝ち";
        console.log("勝ち");
        $(".winimg").show();
    
    } else if(me == 2 && aite == 0) {
        judge = "あなたの勝ち";
        console.log("勝ち");
        $(".winimg").show();
    
    } else if(me == aite) {
        judge = "ひきわけ";
        console.log("引き分け");
        $(".wakeimg").show();
    
    } else {
        judge = "あなたの負け";
        console.log("負け");
        $(".loseimg").show();
    
}

})
