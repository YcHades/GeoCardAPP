function searchResult() {
    var resultBox = document.getElementById("resultBox");
    var inputVal = document.forms["searchForm"]["inputText"].value;
    if (inputVal == "") {
        return true;
    }
    resultBox.innerHTML = "";
    for (var i = 0; i < result.length; i++) {
        var patt = new RegExp(inputVal);
        if (patt.test(result[i])) {
            resultBox.innerHTML += result[i];
            resultBox.innerHTML += "<br><br>";
        }
    }
    if (resultBox.innerHTML == "") {
        resultBox.innerHTML = "没有找到搜索结果";
    }
    return false;
}

//result
var result = [];
result[0] = ["段文超"];
result[1] = ["何骁"];
result[2] = ["李孟垚"];
result[3] = ["刘香"];
result[4] = ["邵润"];
result[5] = ["王宪彬"];
result[6] = ["杨澜"];
result[7] = ["刘德旭"];
result[8] = ["杨林芝"];
result[9] = ["张一"];
result[10] = ["马智越"];
result[11] = ["徐倩"];
result[12] = ["张玉凤"];
result[13] = ["王科"];
result[14] = ["祝文浚"];
result[15] = ["方婧"];
result[16] = ["李威"];
result[17] = ["阮晓诗"];
result[18] = ["杨澄"];
result[19] = ["袁宏远"];
result[20] = ["张扬"];
result[21] = ["周怡君"];
result[22] = ["李加"];
result[23] = ["许如清"];
result[24] = ["王占奔"];
result[25] = ["王丁"];
























