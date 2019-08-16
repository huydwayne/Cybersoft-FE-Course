// var hocVien = {
//     //thuộc tính : là các đặc điểm , thông tin của Tiến
//     // key : value
//     HoTen: 'Ngọc Tiến',
//     Tuoi: 10,
//     Email: 'ngoctien@gmail.com',
//     SoDT: '01634643124',
//     DiemToan: 10,
//     DiemLy: 10,
//     DiemHoa: 1,

//     //Phương thức: là hành động của đối tượng
//     TinhDiemTB: function () {
//         var diemTB = (this.DiemToan + this.DiemLy + this.DiemHoa) / 3;
//         return diemTB;
//     }
// }
// var hocVien2 = {
//     HoTen: 'Trung Hiếu',
//     Tuoi: 12,
//     Email: 'trunghieu@gmail.com',
//     SoDT: '0935348252',
//     DiemToan: 10,
//     DiemLy: 10,
//     DiemHoa: 10,
//     //Phương thức: là hành động của đối tượng
//     TinhDiemTB: function () {
//         var diemTB = (this.DiemToan + this.DiemLy + this.DiemHoa) / 3;
//         return diemTB;
//     }

// }


// //lấy dữ liệu từ object
// hocVien2.HoTen;
// hocVien2.Email;


// console.log('Họ Tên: ', hocVien.HoTen);
// console.log('Tuổi', hocVien.Tuoi);
// console.log(hocVien.TinhDiemTB());

// //Thêm dữ liệu vào object từ bên ngoài
// hocVien2.DiemVan = 10;
// console.log(hocVien2);

// //Cập nhật dữ liệu của object
// hocVien2.DiemVan = 5;
// console.log('Cập nhật thông tin', hocVien2);



//Bài 1: Quản lý sinh viên
    // 1. Lấy thông tin của sinh viên mới do người dùng nhập vào
    // 2. Lưu trữ toàn bộ thông tin của sinh viên đó với object
    // 3. Hiển thị thông ra bên phải

function hienThiThongTin(){
    var maSV = document.getElementById('txtMaSV').value;
    var tenSV = document.getElementById('txtTenSV').value;
    var loaiSV = document.getElementById('loaiSV').value;
    var diemToan = document.getElementById('txtDiemToan').value;
    var diemVan = document.getElementById('txtDiemVan').value;

    diemToan = parseFloat(diemToan);
    diemVan = parseFloat(diemVan);

    var sinhVien = {
        //key: value,
        MaSinhVien : maSV,
        TenSinhVien : tenSV,
        LoaiSinhVien: loaiSV,
        DiemToan: diemToan,
        DiemVan: diemVan,
        TinhDiemTB: function(){
            var diemTB = (this.DiemToan + this.DiemVan)/2;
            return diemTB;
        },
        XepLoai: function(){
            var diemTB = this.TinhDiemTB();
            if(diemTB < 5){
                return 'Kém'
            }
            else{
                return 'Giỏi'
            }
        }
    }

    // hiển thị ra màn hình
    document.getElementById('spanTenSV').innerHTML = sinhVien.TenSinhVien;
    document.getElementById('spanMaSV').innerHTML = sinhVien.MaSinhVien;
    document.getElementById('spanLoaiSV').innerHTML = sinhVien.LoaiSinhVien;
    document.getElementById('spanDTB').innerHTML = sinhVien.TinhDiemTB();
    document.getElementById('spanXepLoai').innerHTML = sinhVien.XepLoai();
}