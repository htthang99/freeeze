// Bai tap 1
var input = document.getElementById("myInput");

input.addEventListener("keypress", function(event) {
    if (event.key === 'Enter') {
        document.getElementById("myBtn").click();
    }
});

function submitEvent() {
    if (input.value.length > 0) {
        document.getElementById('form1').submit();
    } else {
        alert("Trường tìm kiếm không được bỏ trống");
    }
}


// Bai tap 2 cach 1
function frmValidate5(frm) {
    return frm.checkValidity();
}

// Bai tap 2 cach 2
function frmValidate2(frm) {
    /*Các mã kiểm tra ràng buộc dữ liệu*/

    var emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (emailReg.test(email.value) == false) {
        alert('Địa chị mail không hợp lệ! Vui lòng nhập lại!');
        return false;
    }

    if (psw.value.length < 8) {
        alert('Mật khẩu có độ dài tối thiểu là 8 ký tự!');
        return false;
    }

    if (psw2.value != psw.value) {
        alert('Mật khẩu không khớp!');
        return false;
    }
    alert("Đã gửi dữ liệu");
    return true;
}

function frmValidate22(frm) {
    /*Các mã kiểm tra ràng buộc dữ liệu*/

    var emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (emailReg.test(email.value) == false) {
        alert('Địa chị mail không hợp lệ! Vui lòng nhập lại!');
        return false;
    }

    if (fname.value.length < 4) {
        alert('Họ tên có độ dài tối thiểu là 4 ký tự!');
        return false;
    }

    if (ftext.value.length < 10) {
        alert('Nội dung có ít nhất 10 ký tự!');
        return false;
    }

    alert("Đã gửi dữ liệu");
    return true;
}


// Bai tap 3
var itemList = {
    "sp001": {
        "name": "Sữa Chua Vị Kiwi",
        "price": 21000,
        "photo": "images/sanpham/kiwi.jpg"
    },
    "sp002": {
        "name": "Sữa Chua Vị Xoài",
        "price": 22000,
        "photo": "images/sanpham/mango.jpg"
    },
    "sp003": {
        "name": "Sữa Chua Vị Dưa lưới",
        "price": 23000,
        "photo": "images/sanpham/cantaloupe.jpg"
    },
    "sp004": {
        "name": "Sữa Chua Vị Mâm Xôi",
        "price": 24000,
        "photo": "images/sanpham/blackberry.jpg"
    },
    "sp005": {
        "name": "Sữa Chua Vị Dâu Tây",
        "price": 25000,
        "photo": "images/sanpham/strawberry.jpg"
    },
    "sp006": {
        "name": "Sữa Chua Vị Việt Quất",
        "price": 26000,
        "photo": "images/sanpham/blueberry.jpg"
    },
    "sp007": {
        "name": "Sữa Chua Vị Bưởi",
        "price": 27000,
        "photo": "images/sanpham/grapes.jpg"
    },
    "sp008": {
        "name": "Sữa Chua Vị Táo Xanh",
        "price": 28000,
        "photo": "images/sanpham/green-apple.jpg"
    },
    "sp009": {
        "name": "Sữa Chua Vị Dứa",
        "price": 29000,
        "photo": "images/sanpham/pineapple.jpg"
    }
};

function addCart(code) {
    var number = parseInt(document.getElementById(code).value);
    var current = parseInt(window.localStorage.getItem(code));
    console.log(number)
    if (typeof localStorage[code] === "undefined") {
        window.localStorage.setItem(code, number);
        alert("Đã thêm " + number + " sản phẩm " + itemList[code].name);
    } else {
        if ((current + number) > 100) {
            window.localStorage.setItem(code, 100);
            alert("Số lượng sản phẩm tối đa là 100! Đã cập nhật sản phẩm " + itemList[code].name + " với số lượng là " + (100 - current) + " .Số lượng sản phẩm " + itemList[code].name + " bạn đã đặt là 100!");
        } else {
            window.localStorage.setItem(code, current + number);
            alert("Đã cập nhật sản phẩm " + itemList[code].name + " với số lượng là " + number + " .Số lượng sản phẩm " + itemList[code].name + " đã đặt là " + (number + current));
        }
    }
}


// Bai tap 4
function getDiscountRate() {
    var d = new Date(); //lấy ngày hiện tại của máy tính
    var weekday = d.getDay(); //lấy ngày trong tuần
    var totalMins = d.getHours() * 60 + d.getMinutes(); //đổi
    if (weekday >= 1 && weekday <= 3 && ((totalMins >= 420 && totalMins <= 660) || (totalMins >= 780 && totalMins <= 1020)))
        return 0.1;
    return 0;
}

function showCart() {
    var tbody = document.getElementById('cartDetail');
    var data = "", TotalPreTax = 0;
    for (i = 0; i < localStorage.length; i++) {
        key = localStorage.key(i); // Key sản phẩm
        item = itemList[key] //Thông tin sản phẩm
        photo = item.photo //Hình sản phẩm
        nname = item.name //Tên
        price = item.price //Giá
        orderNumber = localStorage.getItem(key);
        TotalPreTax += orderNumber * price;
        data += '<tr>' +
            '<td><img src=' + photo + ' alt="" width="100px"></td>' +
            '<td>' + nname + '</td>' +
            '<td> ' + orderNumber + '</td>' +
            '<td> ' + price + '</td>' +
            '<td> ' + new Intl.NumberFormat('vi', { style: 'currency', currency: 'VND' }).format(orderNumber * price) + '</td>' +
            '<td>  <i class = "fas fa-trash-alt icon text-pink" onclick="removeCart(key)"> </i> </td >' +
            '</tr>';
    }
    tbody.innerHTML = data;
    var discount = TotalPreTax * getDiscountRate(),
        tax = 0.1 * (TotalPreTax - discount),
        pay = TotalPreTax - discount + tax;
    document.getElementById('total').innerHTML = 'Tổng thành tiền (A) = ' + new Intl.NumberFormat('vi', { style: 'currency', currency: 'VND' }).format(TotalPreTax);
    document.getElementById('discount').innerHTML = 'Chiết khấu (B) = discount x A = ' + new Intl.NumberFormat('vi', { style: 'currency', currency: 'VND' }).format(discount);
    document.getElementById('vat').innerHTML = 'Thuế (C) = 10% x (A - B) = ' + new Intl.NumberFormat('vi', { style: 'currency', currency: 'VND' }).format(tax);
    document.getElementById('total-order').innerHTML = 'Tổng đơn hàng = A - B + C = ' + new Intl.NumberFormat('vi', { style: 'currency', currency: 'VND' }).format(pay);
}

function removeCart(code) {
    if (typeof window.localStorage[code] !== "undefined") {
        window.localStorage.removeItem(code); //xóa sản phẩm khỏi localStorage
        location.reload();
        tbody.getElementsByTagName('tbody')[0].innerHTML = ""; //Xóa nội dung của phần thân của bảng (<tbody>)
        showCart(); //Hiển thị lại nội dung chi tiết của đơn hàng
    }
}

// donhang.html tự động cập nhật nội dung khi số lượng đặt hàng của 1 sản phẩm trên trang sanpham.html thay đổi
window.onstorage = () => {
    showCart();
};

//Lab 4
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
    }, 30000, adsTopEffect);
}

function adsLeftEffect() {
    $("#adscontainer").addClass('adsleftcontainer container');
    $("#adscontainer").css({ "left": $("main").position().left });
    $("#adscontainer").css({ "width": $("main").innerWidth() });
    $("#adstext").addClass('adslefttext adstext');
    $("#adstext").css({ "left": $("#adscontainer").width() });
    $("#adstext").animate({
        left: '-=' + ($("#adscontainer").width() + $("#adstext").width()),
    }, 30000, adsLeftEffect);
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
    $(function() {
        $("article").prepend("<div id='headline'></div>");
        for (var i in headlineContent) {
            $('article').append("<div><span> <h3>" + headlineContent[i].title + "</h3></span> <img src=" + headlineContent[i].photo + "></div > ")
        }
        $("article > div").appendTo($('#headline'));
    })


    $(function() {
        $("#headline div:gt(0)").hide()

        setInterval(function() {
            $('#headline div:first-child').hide()
                .next('#headline div').fadeIn()
                .end().appendTo('#headline');
        }, 5000);
    })
});