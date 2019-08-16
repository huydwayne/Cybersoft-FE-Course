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

let isDone: boolean = false;
console.log(isDone);

// Kiểu số
let so: number = 10;
console.log(so);

// Kiểu String
let color: string = "CyberSoft";
console.log(color);

// Kiểu mảng
let list: number[] = [1,2,3];
console.log(list);
let list2: Array<number> = [1,2,3];
console.log(list2);

// Kiểu tuple
let x: [string, number];
x= ["Hello",2];
console.log(x);

// Khai báo kiểu dữ liện
enum Color {
        red = 1,
        green = 2,
        blue = 4,
}


let c: Color = Color.green;
console.log(c);

// Kiểu any
let  notSure : any = "CyberSoft";

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

let hello = (name,mes) => console.log(name+""+mes);

hello("Cybersoft","eud");

let getParen = () => 10;
// function getParen(){
    // return 10;
// }

let getBonus = function (value = 10 + getParen(),num= value * 0.1){
    console.log(num);
}

getBonus();

// Truyền nhiều tham số
let displayColors = function(...colors:string[]){
    // For in lấy index
    for (let i in colors){
        console.log(i);
    }
    // For of lấy phần tử trong mảng
    for (let item of colors){
        console.log(item);
    }
}

// displayColors("red",'green','blue');


// Bóc tách mảng
let date = [10,3,2019];
// let [d,m,y]=date;
// console.log("Day: "+d);
// console.log("Month: "+m);
// console.log("Year: "+y);



// Bóc tách đối tượng
let emp = {
    fname : "Peter",
    lname : "Cech",
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

let sv = new SinhVien("Bùi Anh Huy","000");
sv.xuatThongTin();
SinhVien.gioiThieu();

let gd = new GiamDoc("Bùi Anh Huy","làm chủ");
console.log(`Họ tên: ${gd.hoTen} - Quyền: ${gd.quyen} - Lương: ${gd.tinhLuong()}`);

// let tenabc = document.getElementById('ten');
let ten = (<HTMLInputElement>document.getElementById('ten')).value;
console.log(ten);

(<HTMLElement>document.getElementById('btnClick')).addEventListener("click",sukienClick);
function sukienClick(){
    console.log(ten);
}
