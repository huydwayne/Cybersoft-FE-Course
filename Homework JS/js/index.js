/* 
    Name: Bui Anh Huy
    Date: 26/03/2019
    Description: Tính tiền điện
*/

// Bảng giá tiền điện

var PRICE_1 = 500;
var PRICE_2 = 650;
var PRICE_3 = 850;
var PRICE_4 = 1100;
var PRICE_5 = 1300;

// Các mốc tiền điện (kW)

var MOC_1 = 50;
var MOC_2 = 100;
var MOC_3 = 200;
var MOC_4 = 350;

// Xuất tiền điện
var xuatTiendien = function () {
  // B1: Lấy ra tên người trả và số Kw
  var name = document.getElementById("txtName").value;
  var soKw = document.getElementById("txtNumber").value;
  var tongTien; // Số tiền cuối cùng

  var soKW;
  soKw = parseInt(soKw);
  // B2: Tính toán

  tongTien = tinhTiendien(soKw);


  // B3: In thành tiền
  document.getElementById("xuatTien").innerHTML = tongTien;
  document.getElementById("thanh-tien").style.display = "block";
};

// var MOC_1 = 50;
// var MOC_2 = 100;
// var MOC_3 = 200;
// var MOC_4 = 350;

// Tính tiền điện

var tinhTiendien = function (soKw) {
  if (soKw <= MOC_1) {
    return (tongTien = PRICE_1 * soKw);
  } else if (soKw > MOC_1 && soKw <= MOC_2) {
    return (tongTien = MOC_1 * PRICE_1 + (soKw - MOC_1) * PRICE_2);
  } else if (soKw > MOC_2 && soKw <= MOC_3) {
    return (tongTien =
      MOC_1 * PRICE_1 + (MOC_2 - MOC_1) * PRICE_2 + (soKw - MOC_2) * PRICE_3);
  } else if (soKw > MOC_3 && soKw <= MOC_4) {
    return (tongTien =
      MOC_1 * PRICE_1 +
      (MOC_2 - MOC_1) * PRICE_2 +
      (MOC_3 - MOC_2) * PRICE_3 +
      (soKw - MOC_3) * PRICE_4);
  } else {
    return (tongTien =
      MOC_1 * PRICE_1 +
      (MOC_2 - MOC_1) * PRICE_2 +
      (MOC_3 - MOC_2) * PRICE_3 +
      (MOC_4 - MOC_3) * PRICE_4 +
      (soKw - MOC_4) * PRICE_5);
  }
};

// In hóa đơn
var inHoadon = function () {
  // B1: Lấy ra tên người trả và số Kw
  var name = document.getElementById("txtName").value;
  var soKw = document.getElementById("txtNumber").value;
  var tongTien; // Số tiền cuối cùng

  var soKW;
  soKw = parseInt(soKw);
  // B2: Tính toán

  tongTien = tinhTiendien(soKw);
  //   B3: In ra hóa đơn
  document.getElementById("customer-name-print").innerHTML = name;
  document.getElementById("xuatTien-bill").innerHTML = tongTien + "đ";
  document.getElementById("print").style.display = "block";
};
