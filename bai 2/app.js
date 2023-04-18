// Bài 2 : Viết 1 chương trình chuẩn hóa một câu:
// loại bỏ các khoảng trắng (space) ở đầu và cuối câu, các từ cách nhau 1 khoảng trắng(space), ký tự đầu ở mỗi từ viết hoa, các ký tự khác
// trong từ viết thường
// ● Đầu vào: Câu là một chuỗi các ký tự
// ● Đầu ra: In ra chuỗi đã được chuẩn hóa. ● Ví dụ
// ○ Cho   ;Inra
// [30 điểm]
//  " this isAtEst"
// "This Is A Test"
//  ○ Cho   ;Inra

let str = prompt("Hay nhap vao mot chuoi ky tu");
let myStr = str.toLowerCase();
let aaaaaa = [];

// console.log(str.toLowerCase());
let myArr = [];
myArr = myStr.split(" ");
console.log(myArr);

for (let i = 0; i < myArr.length; i++) {
  aaaaaa = myArr[i][0].toUpperCase();
  console.log(a);
}
