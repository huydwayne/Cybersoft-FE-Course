import HocVien from './hocVien.js'; // Có thể đặt HocVien = tên khác gì export default

class danhSachHocVien{
    mangHocVien = [];

    constructor(){

    }

    themHocVien(hocVien) {
        this.mangHocVien.push(hocVien);
    }

    hienThiLopHoc(){
        for (let hocVien of this.mangHocVien) {
            console.log(hocVien.hienThiThongTin());
        }
    }
}

export default danhSachHocVien;