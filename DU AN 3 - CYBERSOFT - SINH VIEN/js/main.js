/* 
	Người tạo: Đặng trung hiếu
	Ngày tạo: 29/3/2019
	Mô Tả: bài tập quản lý sinh viên
		1. lấy danh sách điểm từ giao diện
		1.1. Tính điểm trung bình sinh viên toàn khóa
		2. Tìm ra sinh viên cao điểm nhất
		3. Tìm ra sinh viên thấp điểm nhất
		4. Kiểm tra xem có bao nhiêu sinh viên yếu
		5. kiểm tra xem có sinh viên đạt loại giỏi hay ko?
		6. sắp xếp danh sách điểm tăng dần giảm dần
*/
var danhSachDiem = [];

function layDanhSachDiem() {
	var danhSachTd = document.getElementsByClassName('td-diem');
	for (var i = 0; i < danhSachTd.length; i++) {
		danhSachDiem.push(danhSachTd[i].innerHTML * 1);
	}
	console.log(danhSachDiem);
}

//xây dựng hàm tính điểm trung bình toàn khóa
/* 
	input: danhSachDiem
	output: điểm trung bình
*/
function tinhDiemTrungBinh() {
	var tongDiem = 0;
	for (var i = 0; i < danhSachDiem.length; i++) {
		tongDiem += danhSachDiem[i];
	}
	// var diemTB = Math.round(tongDiem / danhSachDiem.length);
	var diemTB = (tongDiem / danhSachDiem.length).toFixed(2);

	console.log(diemTB);
}

//Tìm sinh viên cao điểm nhất
// Đặt phần tử đầu tiên trong mảng là max
// duyệt vòng for, kiểm tra mảng, phần tử nào mà lớn max thì nó là max
//in ra cái điểm cao nhất ra màn hình

function timSinhVienCaoDiemNhat() {
	var max = danhSachDiem[0];
	var second = 0;
	for (var i = 1; i < danhSachDiem.length; i++) {
		if (danhSachDiem[i] > max) {
			second = max;
			max = danhSachDiem[i];
		} else if (danhSachDiem[i] > second) {
			second = danhSachDiem[i];
		}
	}
	console.log(max);
	console.log(second);
}

function sapXep(type) {
	switch (type) {
		case 1:
			//sắp xếp tăng dần
			for (var i = 0; i < danhSachDiem.length - 1; i++) {
				for(var j = i+1; j< danhSachDiem.length; j++){
					if(danhSachDiem[i] > danhSachDiem[j]){
						var temp = danhSachDiem[i];
						danhSachDiem[i] = danhSachDiem[j];
						danhSachDiem[j] = temp;
					}
				}
			}
			console.log(danhSachDiem);
			break;
		case -1:
	}
}

//------Gọi hàm-----------------
layDanhSachDiem();
sapXep(1);