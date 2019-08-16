interface INhanVien{
    ho: string;
    ten: string;
    tuoi?: number; // có thể null (?) hoặc k cần khai báo bên class dc kế thừa
    thucHienCongViec();
}