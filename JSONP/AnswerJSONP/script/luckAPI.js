function luck(nickname, bloodType) {
    var result = "";
    switch (bloodType) {
        case "A"  : result = "大吉"; break;
        case "B"  : result = "吉";   break;
        case "O"  : result = "凶";   break;
        case "AB" : result = "大凶"; break;
    }
    return nickname + "さんの運勢は" + result + "です。";
}
