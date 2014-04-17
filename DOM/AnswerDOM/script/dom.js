// native JS

// 1行目のテキストを赤色にする
document.getElementById("first").style.color = "red";

// 2行目のテキストの文字サイズを30pxにする
document.getElementById("second").style.fontSize = "30px";

// 3行目のテキストを前から3文字だけにする
document.getElementById("list").childNodes[5].innerText = document.getElementById("list").childNodes[5].innerText.substring(0,3);

document.getElementById("list").children[2].innerText = document.getElementById("list").children[2].innerText.substring(0,3);


// jQuery

// 1行目のテキストを赤色にする
$("#first").css("color", "red");

// 4行目を追加する
$("#list").append("<li>4行目のテキストです。</lib>");

// テキストをクリックしたら、何行目かを表示させる（表示方法は自由）
$("li").on("click", function() {
    alert($(this).text().slice(0,3));
});


// last year

// 左側に表示されている自分のニックネームを「JavaScript」にして、フォントサイズを50pxにする
$j("#myArea .profilePhoto .name span:first a").text("JavaScript").css("font-size", "50px");

// 上に並んでいるメニューボタン（プロフィール、友人リスト、つぶやき・・・）のうちどれか1つを非表示にする
$j("div.personalNavigation").find("li.myMixi").hide();

// 左右のカラムを半透明にする（1行で）
$j("div#bodySide02, div#bodySub02").css("opacity", 0.5);

// フィードに表示されている友人全員のニックネームの末尾に、++をつける
_.each($j("div.feedContent p.name"), function(name) {
    $j(name).find("a").text($j(name).find("a").text() + "++");
});
