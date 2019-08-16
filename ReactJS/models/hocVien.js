class HocVien {
    hoTen = '';
    lop = '';

    constructor(){

    }

    hienThiThongTin(){
        console.log(`họ tên: ${this.hoTen} 
                     Lớp: ${this.lop}`);
    }
}


// mỗi file chỉ có thể export default 1 lần
// File nào cần sử dụng nội dung file này thì có thể import và đổi tên bất kỳ
export default HocVien;