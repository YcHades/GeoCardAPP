function bigTitle() {
    document.write('\
    <div class="bigTitle">\
        <img src="images/logo.jpeg">\
        TpWorld 创造你的地理名片\
        <form class="searchBox" onsubmit="search()">\
            <input type="text" placeholder="搜索...">\
            <input type="submit" class="searchButton" value="查询">\
        </form>\
    </div>\
')
}

function bottomBar() {
    document.write('\
    <ul class="bottomBar">\
        <li> <a href="home.html" id="homePage">主页</a></li >\
        <li><a href="ui.html">地图</a></li>\
        <li><a href="contact.html">联系</a></li>\
        <li><a href="about.html">关于</a></li>\
        <li><a href="">你好！</a></li>\
        <a href="http://beian.miit.gov.cn/" target="_blank" style="position:absolute;right:10px;bottom:10px;font-size:10px;text-decoration:none;">湘ICP备2022003783号</a>\
    </ul>\
')
}

function search() {
    window.open("search.html");
    alert('提交');
}
