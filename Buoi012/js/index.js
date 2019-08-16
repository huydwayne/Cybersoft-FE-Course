// // Bài 1: Quản lý sinh viên
//     // 1. Lấy thông tin của sinh viên mới do người dùng nhập vào
//     // 2. Lưu trữ toàn bộ thông tin của sinh viên đó với object
//     // 3. Hiển thị toàn bộ thông tin ra bên phải


// function hienthiThongtin(){
//     var maSV = document.getElementById('txtMaSV').value;
//     var tenSV= document.getElementById('txtTenSV').value;
//     var loaiSV= document.getElementById('LoaiSV').value;
//     // Value của option là value của select
//     // Trong trường hợp option không có value thì giá trị bên trong option là Value
//     // <Option value="..."></Option>
//     var diemToan= document.getElementById('txtDiemToan').value;
//     var diemVan= document.getElementById('txtDiemVan').value;
//     diemToan = parseFloat(diemToan);
//     diemVan = parseFloat(diemVan);
//     // Tạo ra một cái object
//     var sinhVien = {
//         //Key: value,
//         MaSinhVien : maSV,
//         TenSinhVien : tenSV,
//         LoaiSinhVien: loaiSV,
//         DiemToan: diemToan,
//         DiemVan: diemVan,
//         TinhDiemTB: function(){

//             return  ((this.DiemToan + this.DiemVan)/2).toFixed(2);
           
//         },

//         xepLoai: function(){
//             var diemTB = this.TinhDiemTB();
//             if (diemTB< 5) {
//                 return "Kém";
//             }
//             else {
//                 return "Giỏi";
//             }
//         }
//     }

//     // Hiển thị thông tin sinh viên ra màn hình
//     document.getElementById('spanTenSV').innerHTML=sinhVien.TenSinhVien;
//     document.getElementById('spanMaSV').innerHTML=sinhVien.MaSinhVien;
//     document.getElementById('spanLoaiSV').innerHTML=sinhVien.LoaiSinhVien;
//     document.getElementById('spanDTB').innerHTML=sinhVien.TinhDiemTB();
//     document.getElementById('spanLoaiSV').innerHTML=sinhVien.LoaiSinhVien;
//     document.getElementById('spanXepLoai').innerHTML=sinhVien.xepLoai();
// }


// Bài 2. Quản lý nhân viên 1

/* Tất cả mọi thứ trong javascript đều là Object */
function hienthiThongtin(){
    // Lấy thông tin từ web
   var MaNV = document.getElementById('txtMaNV').value;
   var TenNV = document.getElementById('txtTenNV').value;
   var chucVu = document.getElementById('chucVu').value;
   var LuongCB = document.getElementById('txtLuongCB').value;
   var GioLam = document.getElementById('txtGioLam').value;
//    console.log(chucVu);

    // Lưu vào đối tượng nhanVien 
    var nhanVien = {
        // key: value,
        // Thuộc tính chỉ hiểu được giá trị, chuỗi, method
        TenNhanVien: TenNV,
        MaNhanVien: MaNV,
        LuongCB: LuongCB,
        ChucVu: chucVu,
        GioLamTrongThang: GioLam,
        tinhTongLuong: function(){
            if (this.ChucVu == "Giám Đốc") {
                return LuongCB*3;
            } else if (this.ChucVu=="Trưởng Phòng") {
                return LuongCB*2;
            } else {
                return LuongCB*1;
            }
        },

        xepLoai: function(){
            document.getElementById('spanXepLoai').style.setProperty("color","#28a745","important");
            if (this.GioLamTrongThang>=120){
                return "Xuất sắc";
    
            }
            else if (this.GioLamTrongThang>=100){
                return "Giỏi";
            }
            else if (this.GioLamTrongThang>=80){
                return "Khá";
            }
            else if (this.GioLamTrongThang>=50) {
                return "Trung Bình";
            } else {
                document.getElementById('spanXepLoai').style.setProperty("color","red","important");
                return "Fired";
            }
        }
    }

    // Hiển thị thông tin
    document.getElementById('spanTenNV').innerHTML=nhanVien.TenNhanVien;
    document.getElementById('spanMaNV').innerHTML=nhanVien.MaNhanVien;
    document.getElementById('spanChucVu').innerHTML=nhanVien.ChucVu;
    document.getElementById('spanTongLuong').innerHTML=nhanVien.tinhTongLuong();
    document.getElementById('spanXepLoai').innerHTML=nhanVien.xepLoai();
}