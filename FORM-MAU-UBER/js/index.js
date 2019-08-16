
// Name: Bui Anh Huy
// Date: 25/03/2019
// Description: Chương trình tính tiền taxi

// Bảng giá taxi
var UBERX_1 = 8000;
var UBERX_2 = 12000;
var UBERX_3 = 10000;
var UBERX_CHO = 2000;



var tinhTienTaxi = function () {
    //B1: Lấy được input đầu vào

 
    var soKM = document.getElementById('txtSoKM').value;
    var tgCho = document.getElementById('txtThoigiancho').value;
    var tongTien;
    soKM = parseInt(soKM);
    tgCho = parseInt(tgCho);


   
    //B2: Kiểm tra loại xe người dùng chọn

    var loaiXe = kiemTraLoaiXe();

    //B3: Tính Tiền
    switch (loaiXe) {
        case "uberX":
            {
                tongTien = tinhTien(soKM,tgCho,UBERX_1,UBERX_2,UBERX_3,UBERX_CHO);
                break;

            }
        case "uberSUV":

            if (soKM <= 1) {
                tongTien = 9000;
            }

            if (soKM > 1 && soKM <= 20) {
                tongTien = 9000 + (soKM - 1) * 14000;
            }

            if (soKM >= 21) {
                tongTien = 9000 + (20 - 1) * 14000 + (soKM - 20) * 12000;
            }

            tgCho *= 3000;
            tongTien += tgCho;
            break;

        case "uberBlack":

            if (soKM <= 1) {
                tongTien = 10000;
            }

            if (soKM > 1 && soKM <= 20) {
                tongTien = 10000 + (soKM - 1) * 16000;
            }

            if (soKM >= 21) {
                tongTien = 10000 + (20 - 1) * 16000 + (soKM - 20) * 14000;
            }

            tgCho *= 4000;
            tongTien += tgCho;
            break;

        default: alert("Chưa chọn xe");

    }

//    B4: Hiển thị giá tiền ra màn hình
var theDiv = document.getElementById('divThanhTien');
theDiv.style.display = "block";
theDiv.style.backgroundColor = "pink";

var theSpan = document.getElementById('xuatTien');
theSpan.innerHTML = tongTien;

}



var kiemTraLoaiXe = function(){
    var uberX = document.getElementById('uberX');
    var uberSUV = document.getElementById('uberSUV');
    var uberBlack = document.getElementById('uberBlack');
    
    if (uberX.checked === true) {
        return "uberX";
    } else if (uberSUV.checked === true) {
        return "uberSUV";
    } else if (uberBlack.checked === true) {
        return "uberBlack";
    }

   
}

var tinhTien = function(soKM,tgCho,giaCuoc1,giaCuoc2,giaCuoc3,giaCho) {
    if (soKM <= 1) {
        tongTien = giaCuoc1;
    }

    if (soKM > 1 && soKM <= 20) {
        tongTien = giaCuoc1 + (soKM - 1) * giaCuoc2;
    }

    if (soKM >= 21) {
        tongTien = giaCuoc1 + (20 - 1) * giaCuoc2 + (soKM - 20) * giaCuoc3;
    }

    tgCho *= giaCho;
    tongTien += tgCho;
    return tongTien;
}

