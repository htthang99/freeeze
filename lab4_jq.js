// Bai tap 2
var d = new Date();
var ads = "Khách hàng có ngày sinh trong tháng " + (d.getMonth() + 1) + " sẽ được tặng 2 phần sữa chua dâu cho đơn hàng đầu tiên trong tháng.";
$("footer").append("<div id='adscontainer'><span id='adstext'> <h2 > " + ads + " </h2></span > </div>");

var W = ($(window).width() - $("main").width()) / 2;
if (W >= 200) {
    adsTopEffect();
} else {
    adsLeftEffect();
}

function adsTopEffect() {
    $("#adscontainer").addClass('adstopcontainer container');
    $("#adscontainer").css({ "width": W });
    $("#adstext").addClass('adstoptext adstext');
    $("#adstext").css({ "top": $("#adscontainer").height() });
    $("#adstext").animate({
        top: '-=' + ($("#adscontainer").height() + $("#adstext").height()),
    }, 30000, function() {
        adsTopEffect();
    });
}

function adsLeftEffect() {
    $("#adscontainer").addClass('adsleftcontainer container');
    $("#adscontainer").css({ "left": $("main").position().left });
    $("#adscontainer").css({ "width": $("main").innerWidth() });
    $("#adstext").addClass('adslefttext adstext');
    $("#adstext").css({ "left": $("#adscontainer").width() });
    $("#adstext").animate({
        left: '-=' + ($("#adscontainer").width() + $("#adstext").width()),
    }, 30000, function() {
        adsLeftEffect();
    });
}
// Bai tap 3
var headlineContent = [{
        "title": "Bánh flan sữa chua - sự kết hợp hoàn hảo",
        "photo": "images/trangchu/headline/headline1.jpg"
    },
    {
        "title": "Sữa chua làm từ sữa dê - đậm đà hương vị khó quên ",
        "photo": "images/trangchu/headline/headline2.jpg"
    },
    {
        "title": "Thưởng thức sữa chua theo cách của bạn",
        "photo": "images/trangchu/headline/headline3.jpg"
    }
];
$(document).ready(function() {
    /***Mã JQuery thực thi các hàm đã cài đặt****/
    function initHeadline() {
        $("article").prepend("<div id='headline'></div>");
        for (var i in headlineContent) {
            $('article').append("<div><span> <h3>" + headlineContent[i].title + "</h3></span> <img src=" + headlineContent[i].photo + "></div > ")
        }
        $("article > div").appendTo($('#headline'));
    }


    function showHeadline() {
        initHeadline();
        $("#headline div:gt(0)").hide();
        setInterval(function() {
            $('#headline div:first-child').hide()
                .next('#headline div').fadeIn()
                .end().appendTo('#headline');
        }, 5000);
    }

    showHeadline();
});