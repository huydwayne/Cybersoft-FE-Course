class GiamDoc extends NhanVien {
    public quyen:string;

    constructor (_name:string,_quyen:string){
        super(_name);
        this.quyen = _quyen;
    }

    public tinhLuong(){
        return super.tinhLuong() + 2000;
    }
}