export class HocVien {
    hoTen = '';
    lop = '';

    constructor(){

    }

    hienThiThongTin(){
        console.log(`họ tên: ${this.hoTen} 
                     Lớp: ${this.lop}`);
    }
}

export class danhSachHocVien{
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

