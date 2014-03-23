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

            var resultText = kazuko(nickname, selectedBloodType);

            drawResult(resultText);
        }
    }

    function drawResult(resultText) {
        var resultArea = document.getElementById("resultArea");
        resultArea.textContent = resultText;
    }
}
