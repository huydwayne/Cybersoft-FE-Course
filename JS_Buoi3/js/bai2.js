var danhSachSinhVien = [];
// Array = List bên java
// Thêm Sinh Viên vào danh sách

function themSinhVien(){
    var maSV = document.getElementById('txtMaSV').value;
    var tenSV = document.getElementById('txtTenSV').value;
    var loaiSV = document.getElementById('loaiSV').value;
    var diemToan = document.getElementById('txtDiemToan').value;
    var diemLy = document.getElementById('txtDiemLy').value;
    var diemHoa = document.getElementById('txtDiemHoa').value;
    var diemRenLuyen = document.getElementById('txtDiemRenLuyen').value;

    diemToan = parseFloat(diemToan);
    diemLy = parseFloat(diemLy);
    diemHoa = parseFloat(diemHoa);
    diemRenLuyen = parseFloat(diemRenLuyen);

    var sinhVien = {
        //key: value,
        MaSV : maSV,
        TenSinhVien : tenSV,
        LoaiSinhVien: loaiSV,
        DiemToan: diemToan,
        DiemLy: diemLy,
        DiemHoa: diemHoa,
        DiemRenLuyen: diemRenLuyen,
        TinhDiemTB: function(){
            var diemTB = (this.DiemToan + this.DiemLy + this.DiemHoa)/3;
            return diemTB;
        }
    }
    danhSachSinhVien.push(sinhVien);
    // Tạo bảng
    taoBang();

}
// Tạo ra tr theo danh sách sinh viên, danh sách chứa bao nhiêu đối tượng thì ta sẽ tạo ra tương ứng bấy nhiêu dòng
function taoBang(){
    document.getElementById('tbodySinhVien').innerHTML="";
    for (var i=0; i<danhSachSinhVien.length;i++){
       var trTag= document.createElement('tr');
       var tdMaSV= document.createElement('td');
       var tdTenSV= document.createElement('td');
       var tdLoaiSV= document.createElement('td');
       var tdDiemTB= document.createElement('td');
       var tdDiemRenLuyen= document.createElement('td');

        //Gán giá trị tương úng cho từng ô
        tdMaSV.innerHTML=danhSachSinhVien[i].MaSV;
        tdTenSV.innerHTML=danhSachSinhVien[i].TenSinhVien;
        tdLoaiSV.innerHTML=danhSachSinhVien[i].LoaiSinhVien;
        tdDiemTB.innerHTML=danhSachSinhVien[i].TinhDiemTB();
        tdDiemRenLuyen.innerHTML=danhSachSinhVien[i].DiemRenLuyen;
        

        // Bỏ 5 cái td vào trong tr
        trTag.appendChild(tdMaSV);
        trTag.appendChild(tdTenSV);
        trTag.appendChild(tdLoaiSV);
        trTag.appendChild(tdDiemTB);
        trTag.appendChild(tdDiemRenLuyen);

        document.getElementById('tbodySinhVien').appendChild(trTag);
    }
}