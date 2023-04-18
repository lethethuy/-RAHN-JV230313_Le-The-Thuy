// Bài 4 : Viết một chương sắp xếp các phần tử trong mảng theo thứ tự giảm dần bằng 2 cách:
// sử dụng và không sử dụng hàm sort [30 điểm]
// ● Đầu vào: 1 mảng bất kỳ
// ● Đầu ra: Mảng mới với số đã được sắp xếp theo thứ tự giảm dần
// ● Ví dụ: Cho arr=[3, 25, 38, 49, 12]; In ra arr=[49,38,25,12,3]

// cach1
let myStr = prompt("hay nhap 1 day so cach nhau boi dau ,");
// console.log(myStr);
let myArr = myStr.split(",");
// console.log(myArr);
let b = 0;

for (let i = 0; i < myArr.length - 1; i++) {
  for (let j = i + 1; j < myArr.length; j++) {
    if (myArr[i] < myArr[j]) {
      b = myArr[j];
      myArr[j] = myArr[i];
      myArr[i] = b;
    }
  }
}
console.log("Mảng mới với số đã được sắp xếp theo thứ tự giảm dần: " + myArr);


