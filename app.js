// ajaxの書き方
// $.ajax({
    // 通信の設定を書くブロック

//   項目名（決まった文言）：値,
//   項目名：値,
//   項目名：値,

//   }).done((何かしら変数名) => {
    // 通信が成功した場合のブロック
    // 何かしら変数名・・・成功時の通信の結果
//   }).fail((何かしら変数名) => {
    // 通信が失敗した場合のブロック
    // 何かしら変数名・・・失敗の原因となるエラー文
//   })// alert("1");

$(function(){
    // 検索ボタンがクリックされたら

    $('#search-btn').click(() => {

        // 入力された郵便番号を取得

        let val = $('#search-word').val()
        // let val = {zipcode: $('#search-word').val()}



        // Ajaxを開始(郵便番号APIから、住所の情報を取得する)
        
        $.ajax({
            url:'https://zipcloud.ibsnet.co.jp/api/search',   // 通信先のURL（日本郵便APIのURL）
            type: 'GET', //通信方法(GET or POST)
            dataType: 'jsonp', // 通信結果のデータ形式(例: HTML,json,jsonp,mxl)
            data:{ //通信先にに送信するパラメータ　パラメータ名：値
            zipcode: val


            }

        }).done((data) => {
            // console.log(data)
            // console.log(data.status)
            // console.log(data.results[0].address1)
            $("#table1").text(data.results[0].address1);
            $("#table2").text(data.results[0].address2);
            $("#table3").text(data.results[0].address3);

            $('#search-word').val('')
            
        }).fail((error) => {
            console.error(error)
            

        })
    })

    
})