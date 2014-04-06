// native JS

// 1行目のテキストを赤色にする
document.getElementById("first").style.color = "red";

// 2行目のテキストの文字サイズを30pxにする
document.getElementById("second").style.fontSize = "30px";

// 3行目のテキストを前から3文字だけにする
document.getElementById("list").childNodes[5].innerText = document.getElementById("list").childNodes[5].innerText.substring(0,3);


// jQuery

// 1行目のテキストを赤色にする

// 4行目を追加する

// テキストをクリックしたら、何行目かを表示させる（表示方法は自由）


// last year

// 左側に表示されている自分のニックネームを「JavaScript」にして、フォントサイズを50pxにする
$j("#myArea .profilePhoto .name span:first a").text("JavaScript").css("font-size", "50px");

// 上に並んでいるメニューボタン（プロフィール、友人リスト、つぶやき・・・）のうちどれか1つを非表示にする

// 左右のカラムを半透明にする（1行で）

// フィードに表示されている友人全員のニックネームの末尾に、++をつける
