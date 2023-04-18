// Bài 1: Cho 1 mảng các phần tử in ra phần tử lớn nhất trong mảng
// ● Đầu vào: 1 mảng
// ● Đầu ra: giá trị lớn nhất của mảng
// ● Ví dụ: [3,5,88,99,76,8,4,5,85,63] in ra 99

let number = [3, 5, 88, 99, 76, 8, 4, 5, 85, 63];
let b = 0;

for (let i = 0; i < number.length - 1; i++) {
  for (let j = i + 1; j < number.length; j++) {
    if (number[i] > number[j]) {
      b = number[j];
      number[j] = number[i];
      number[i] = b;
    }
  }
}
console.log("So lon nhat la:" + number[number.length - 1]);
