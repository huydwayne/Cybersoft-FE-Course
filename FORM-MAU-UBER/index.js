
// Name: Bui Anh Huy
// Date: 25/03/2019
// Description: Chương trình tính tiền taxi

var tinhTienTaxi = function(){
    //B1: Lấy được input đầu vào
    var soKM = document.getElementById('txtSoKM').value;
    var tgCho = document.getElementById('txtThoigiancho').value;

    var uberX = document.getElementById('uberX');
    var uberSUV = document.getElementById('uberSUV');
    var uberBlack = document.getElementById('uberBlack');

    var loaiXe;
    var tongTien;
    //B2: Kiểm tra loại xe người dùng chọn
    if (uberX.checked===true) {
        loaiXe = "uberX";
    } else if (uberSUV.checked === true) {
        loaiXe = "uberBlack";
    } else {
        loaiXe = "uberBlack";
    }
   

    //B3: Tính Tiền
    switch(loaiXe){
        case "uberX":
        {
            if (soKM<=1) {
                tongTien=8000;
            }

            if (soKM>1 && soKM<=20){
                tongTien = 8000 + (soKM-1)*12000;
            }

            if (soKM>=21) {
                tongTien = 8000 + (soKM-1)*12000 + (soKM - 20 - 1)*10000;
            }

            tgCho *= 2000;
            tongTien += tgCho;
            console.log(tgCho);
            break;
        }
        case "uberSUV":

        if (soKM<=1) {
            tongTien=9000;
        }

        if (soKM>1 && soKM<=20){
            tongTien = 9000 + (soKM-1)*14000;
        }

        if (soKM>=21) {
            tongTien = 9000 + (20-1)*14000 + (soKM-20)*12000;
        }

        tgCho*=3000;
        tongTien+=tgCho;
        break;

        case "uberBlack":

        if (soKM<=1) {
            tongTien=10000;
        }

        if (soKM>1 && soKM<=20){
            tongTien = 10000 + (soKM-1)*16000;
        }

        if (soKM>=21) {
            tongTien = 10000 + (20-1)*16000 + (soKM-20)*14000;
        }

        tgCho*=4000;
        tongTien+=tgCho;
        break;

    }
    console.log ("Loại xe là: ".loaiXe);
    console.log("Số km là: ",soKM);
    console.log("Thời gian chờ là: ",tgCho);

    console.log("Tổng số tiền là: ",tongTien);
}