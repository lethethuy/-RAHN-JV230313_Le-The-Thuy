// Bài 4 : Viết một chương sắp xếp các phần tử trong mảng theo thứ tự giảm dần bằng 2 cách:
// sử dụng và không sử dụng hàm sort [30 điểm]
// ● Đầu vào: 1 mảng bất kỳ
// ● Đầu ra: Mảng mới với số đã được sắp xếp theo thứ tự giảm dần
// ● Ví dụ: Cho arr=[3, 25, 38, 49, 12]; In ra arr=[49,38,25,12,3]

// cach2
let myStr = prompt("hay nhap 1 day so cach nhau boi dau ,");
// console.log(myStr);
let myArr = myStr.split(",");
// console.log(myArr);
// Mảng ví dụ
// let mangViDu = [10, 0, 1, 2, 3, 30, 20];

// Sắp xếp với hàm so sánh
myArr.sort((a, b) => a - b);

// In ra kết quả sau khi sắp xếp
console.log(
  "Mảng mới với số đã được sắp xếp theo thứ tự giảm dần: " + myArr.reverse()
);
