// import { danhSachHocVien } from "./models/modelHocVien";

// // var myBtn = document.getElementsByTagName("button");
// // for (let i = 0; i < myBtn.length; i++){
// //     console.log(i);
// //     myBtn[i].onclick = function(){
// //         alert("Nút số " + (i + 1));  
// //         // biến var thì auto ra 3 mọi thứ
// //     }
// // }

// // // function tinhTong(a, b){
// // //     console.log('tong 2 so: ',a + b);
// // // }

// // // function tinhTong(a, b, c){                      Không xài được vì nó sẽ lấy function gần nhất là tong 3 so
// // //     console.log("tong 3 so: ", a + b + c);
// // // }

// // // tinhTong(1,2);



// // /* REST PARAM để xử lý vấn đề trên */

// // function tinhKetQua(...number){
// //     if(number.length === 3)
// //     {
// //         // Công việc A
// //         console.log("Tính tổng 3 số");
// //         let tong = 0;
// //         for (let i = 0; i < number.length; i++) {
// //             tong+=number[i];
// //         }
// //         console.log(tong);
// //     } else if (number.length === 2) {
// //         console.log("Tính tích: ", number[0]*number[1]);
// //     } else {
// //         // Công việc C

// //         for (let i=0; i<number.length; i++) {
// //             console.log(number[i]);
// //         }
// //     }
// // }

// // // tinhKetQua(1,2,3,5);





// // // var hoTen = 'abc' == window.hoTen = 'abc'

// // // let hocVien = {
// // //     hoTen: 'Nguyen Van A',
// // //     lop:'FrontEnd XXX',
// // //     layThongTinHocVien: function(){
// // //         function hienThiThongTin(){
// // //             console.log(`Họ tên: ${this.hoTen} - Lớp: ${this.lop}`);
// // //             // This tìm ra ngoài 1 cấp không thấy đối tượng thì nó sẽ lấy dữ liệu từ window. từ browser
// // //         }
// // //         hienThiThongTin();
// // //     }
    
// // // }

// // // hocVien.layThongTinHocVien();

// // let hocVien1 = {
// //     hoTen: 'Nguyen Van A',
// //     lop:'FrontEnd XXX',
// //     layThongTinHocVien: function(){
// //        var hienThiThongTin = () => {
// //             console.log(`Họ tên: ${this.hoTen} - Lớp: ${this.lop}`);
// //             // Arrow function không xem hienThiThongTin() là một function nên nó sẽ lấy ra ngoài 1 cấp tức là bên ngoài layThongTinHocVien
// //         }
// //         hienThiThongTin();
// //     }
    
// // }

// // hocVien1.layThongTinHocVien();

// // // Thêm 1 thuộc tính vào đốii tượngn không thông qua prototype
// // // hocVien1.__proto__.diachi = "xyz Ung Van Khiem !";
// // console.log(hocVien1);







// // // REST PARAM ứng dụng trên đối tượng

// // let hocVienA = {hoTen: 'nguyen van a', lop: 'front end 19'};
// // // let hocVienB = hocVienA;
// // // hocVienB.hoTen = 'nguyen B'; //Nó sẽ làm thay đổi luôn họ tên của hocVienAv vì object trong js là 1 con trỏ
// // // Khắc phục bằng cách

// // // ...hocVienA = {hoTen: 'nguyen van a', lop: 'front end 19'};

// // let hocVienB = {...hocVienA, truong: 'Cybersoft', pt: function(){ console.log(1) }};
// // hocVienB.hoTen = "Nguyen B";

// // console.log(hocVienA);
// // console.log(hocVienB);
// // // hocVienB.pt();






// // // Trên mảng
// // let mangA = [1, 2 ,3 , 4];
// // // let mangB = mangA; //Y như đối với đối tượng
// // let mangB = [...mangA, 6 ,7, ...mangA];
// // mangB.push(5);
// // console.log("Mang A: ", mangA);
// // console.log("Mang B: ", mangB);















// // // Default Parameters

// // function tinhTong(a = 10, b = 20){
// //     return a + b;
// // }

// // console.log(tinhTong(30));
// // console.log(tinhTong(30, 1));







// // // Bóc tách phần tử
// // // let [ngay, thang, nam] = [10, 10, 2019];
// // // console.log(ngay, thang, nam);

// // // Nếu chỉ lấy ngày thì
// // let [ngay, ...ConLai] = [10, 10, 2019];
// // // console.log(ngay, ...ConLai);
// // console.log(ngay);



// // // Nếu chỉ lấy năm
// // // let [...ngayThang, nam] = [10, 10, 2019]; // Không lấy dc
// // let [ , , nam] = [10, 10, 2019];

// // console.log(nam);




// // let hocVien = {
// //     hoTen: 'nguyen Van A',
// //     lop : 'frontend19'
// // }

// // // let {hoTen} = hocVien;
// // // console.log(hoTen);

// // let {hoTenHV, lop} = hocVien;
// // console.log(hoTenHV);  //Không dc vì phải trùng tên với thuộc tính
// // console.log(lop); 

// // let lop = hocVien.lop;









// // Lấy họ tên từ textbox

// let hoTen = 'nguyen van A';
// let lop = 'frontend 19';
// // let hocVien = {
// //     hoten: hoTen,
// //     Lop: lop,
// // }


// // Tạo thuộcc tính động
// let propHoTen = 'hoTen';
// let propLop = 'Lop';

//     //ES6
//     // let hocVien = {
//     //     hoTen,
//     //     lop                 //Tên biến trùng với tên thuộc tính thì mình gọi nó trực tiếp luôn
//     // }

//     let hocVien = {
//         [propHoTen] : 'Nguyen Van A',
//         [propLop]: "front end 19"
//     }
//     console.log(hocVien);
//     console.log(hocVien.hoTen);
//     console.log(hocVien[propHoTen]);

//     let mangHocVien = {
//         'hocvien1': {hoTen: 'nguyen van a', lop: 'front end 19'},
//         'hocvien2': {hoTen: 'nguyen van b', lop: 'front end 20'},
//     }

//     for (let key in mangHocVien) {
//         console.log("Thuộc tính: ",key); //Xài chỉ với đối tượng chứa nhiều đối tượng
//         console.log("Giá trị: ", mangHocVien[key]);
//     }
//     // console.log(mangHocVien);

// import HocVien from './models/hocVien.js'; // Có thể đặt HocVien = tên khác gì export default
// import DanhSachHocVien from './models/danhSachHocVien.js'; // Nếu k export default thì phải có ngoặc nhọn và đúng tên

import {HocVien, danhSachHocVien} from './models/modelHocVien.js'
let hv = new HocVien();
hv.hoTen = 'Nguyễn văn A';
hv.lop = 'Front end 19';

let dsHV = new danhSachHocVien();
dsHV.themHocVien(hv);
let hv2 = new HocVien();
hv2.hoTen = "Nguyễn văn C";
hv2.lop = 'Front end 19';

dsHV.themHocVien(hv2);

dsHV.hienThiLopHoc();

let mangDienThoai = [
    {MaSP: 1, TenSP: 'SamSung Galaxy Note 9', Gia: 20000000, hangSX:'SAMSUNG'},
    {MaSP: 2, TenSP: 'Huawei Galaxy Note 9', Gia: 25000000, hangSX:'HUAWEI'},
    {MaSP: 3, TenSP: 'Iphone Galaxy Note 9', Gia: 35000000, hangSX:'Apple'},
    {MaSP: 4, TenSP: 'SamSung Galaxy S10 Plus', Gia: 35000000, hangSX:'SAMSUNG'},

]

let mangDienThoaiHon25Trieu = [];

// for (let i=0; i < mangDienThoai.length; i++) {
//     let dienThoai = mangDienThoai[i];
//     if (dienThoai.Gia > 25000000) {
//         mangDienThoaiHon25Trieu.push(dienThoai);
//     }
// }

mangDienThoaiHon25Trieu = mangDienThoai.filter( item => item.hangSX === 'SAMSUNG' ) // == (item) => {return item.hangSX === 'SAMSUNG'}

console.log(mangDienThoaiHon25Trieu);
    
