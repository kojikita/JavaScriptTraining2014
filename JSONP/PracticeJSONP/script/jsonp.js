// DOMを操作する場合はページの読み込みを待つ
window.onload = function() {

    var select = document.getElementById("bloodTypeBox");
    select.onchange = function() {
        // 選択された値を取得する
        var selectedOption = this.options[ this.selectedIndex ];
        var selectedBloodType = selectedOption.value;

        if (selectedBloodType !== "default") {
            var nicknameArea = document.getElementById("nickname");
            var nickname = nicknameArea.value;
            var result = "";
            switch (selectedBloodType) {
                case "A"  : result = "大吉"; break;
                case "B"  : result = "吉";   break;
                case "O"  : result = "凶";   break;
                case "AB" : result = "大凶"; break;
            }
            var resultText = nickname + "さんの運勢は" + result + "です。";
            drawResult(resultText);
        }
    }

    function drawResult(resultText) {
        var resultArea = document.getElementById("resultArea");
        resultArea.textContent = resultText;
    }
}
