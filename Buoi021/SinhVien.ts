class SinhVien {

    // Thuộc tính
    public hoTen: string;
    public lop: string;

    // Hàm khởi tạo
    constructor(_hoten:string, _lop:string){
        this.hoTen = _hoten;
        this.lop = _lop;
    }

    public xuatThongTin(){
        console.log(`Họ tên: ${this.hoTen} - Lớp: ${this.lop}`);
        
    }

    // Nếu có thuộc tính static thì chỉ được dùng bằng cách Class.Method();
    // Còn không có static thì khai báo bằng Object.Method();
    public static gioiThieu(){
        console.log("Hello giới thiệu");
    }
}