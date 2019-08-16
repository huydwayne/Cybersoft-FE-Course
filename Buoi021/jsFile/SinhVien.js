var SinhVien = /** @class */ (function () {
    // Hàm khởi tạo
    function SinhVien(_hoten, _lop) {
        this.hoTen = _hoten;
        this.lop = _lop;
    }
    SinhVien.prototype.xuatThongTin = function () {
        console.log("H\u1ECD t\u00EAn: " + this.hoTen + " - L\u1EDBp: " + this.lop);
    };
    // Nếu có thuộc tính static thì chỉ được dùng bằng cách Class.Method();
    // Còn không có static thì khai báo bằng Object.Method();
    SinhVien.gioiThieu = function () {
        console.log("Hello giới thiệu");
    };
    return SinhVien;
}());
//# sourceMappingURL=SinhVien.js.map