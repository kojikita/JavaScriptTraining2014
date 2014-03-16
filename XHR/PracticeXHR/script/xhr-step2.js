// DOMを操作する場合はページの読み込みを待つ
window.onload = function() {

    // 自分のhostnameに変更する
    var path = "http://HOSTNAME:PORT/result/";

    // xhrの準備
    @@@@
    @@@@

    var select = document.getElementById(@@@@);
    select.onchange = function() {
        // 選択された値を取得する
        var selectedOption = this.options[ this.selectedIndex ];
        var selectedBloodType = selectedOption.value;
        //alert (selectedBloodType);

        if (selectedBloodType !== "default") {
            // urlを作成し、xhrでtxtファイルを取得する
            var url = path + "type-" + @@@@ + ".txt";
            @@@@
            @@@@
        }
    }

    function drawResult() {
        if((xhr.readyState === 4) && (xhr.status === 200)) {
            //alert(xhr.responseText);
            var resultArea = document.getElementById(@@@@);
            resultArea.textContent = @@@@;
        }
    }
}
