console.log("Typescript");
// function print(name){
//     let title;
//     if (name === "cybersoft"){
//         title="Hello Cybersoft";
//         console.log(title);   
//     } else {
//         title="Hello World";
//         console.log(title);
//     }
//     console.log(title);
// }
// print("aa");
// const Pi = 3.14;
// // Pi = 324; error
// const obj = {name: "Cybersoft"};
// // obj = ; error
// obj.name = "hello";
// console.log(Pi);
var isDone = false;
console.log(isDone);
// Kiểu số
var so = 10;
console.log(so);
// Kiểu String
var color = "CyberSoft";
console.log(color);
// Kiểu mảng
var list = [1, 2, 3];
console.log(list);
var list2 = [1, 2, 3];
console.log(list2);
// Kiểu tuple
var x;
x = ["Hello", 2];
console.log(x);
// Khai báo kiểu dữ liện
var Color;
(function (Color) {
    Color[Color["red"] = 1] = "red";
    Color[Color["green"] = 2] = "green";
    Color[Color["blue"] = 4] = "blue";
})(Color || (Color = {}));
var c = Color.green;
console.log(c);
// Kiểu any
var notSure = "CyberSoft";
// Arrow Function
// function hello(name){
//     console.log("xin chào",name);
// };
// hello("Huy");
// hello = () => {
// let hello = (name,age) => {
//     console.log("xin chào "+name +" Tuổi "+age);
// }
// console.log(hello ("Huy",18));
// };
// let mang: any  = ["Nguyên","Khải","Hiếu"];
// mang.map((item,index) => {
// console.log(item + " " + index);
// })
var hello = function (name, mes) { return console.log(name + "" + mes); };
hello("Cybersoft", "eud");
var getParen = function () { return 10; };
// function getParen(){
// return 10;
// }
var getBonus = function (value, num) {
    if (value === void 0) { value = 10 + getParen(); }
    if (num === void 0) { num = value * 0.1; }
    console.log(num);
};
getBonus();
// Truyền nhiều tham số
var displayColors = function () {
    var colors = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        colors[_i] = arguments[_i];
    }
    // For in lấy index
    for (var i in colors) {
        console.log(i);
    }
    // For of lấy phần tử trong mảng
    for (var _a = 0, colors_1 = colors; _a < colors_1.length; _a++) {
        var item = colors_1[_a];
        console.log(item);
    }
};
// displayColors("red",'green','blue');
// Bóc tách mảng
var date = [10, 3, 2019];
// let [d,m,y]=date;
// console.log("Day: "+d);
// console.log("Month: "+m);
// console.log("Year: "+y);
// Bóc tách đối tượng
var emp = {
    fname: "Peter",
    lname: "Cech",
    level: 2,
};
// let {fname: f, lname: l, level: lv} = emp;
// console.log(f);
// console.log(l);
// console.log(lv);
// let colorName = ['red','green','blue','yellow',"pink"];
// for (let i in colorName){
//     console.log(i);
// }
// for (let item of colorName){
//     console.log(item);
// }
var sv = new SinhVien("Bùi Anh Huy", "000");
sv.xuatThongTin();
SinhVien.gioiThieu();
var gd = new GiamDoc("Bùi Anh Huy", "làm chủ");
console.log("H\u1ECD t\u00EAn: " + gd.hoTen + " - Quy\u1EC1n: " + gd.quyen + " - L\u01B0\u01A1ng: " + gd.tinhLuong());
// let tenabc = document.getElementById('ten');
var ten = document.getElementById('ten').value;
console.log(ten);
document.getElementById('btnClick').addEventListener("click", sukienClick);
function sukienClick() {
    console.log(ten);
}
//# sourceMappingURL=main.js.map