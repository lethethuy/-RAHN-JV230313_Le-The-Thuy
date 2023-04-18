// Bài 3 : Viết một chương trình nhập vào tháng và năm và in ra số ngày của tháng đó[30 điểm]
// ● Đầu vào : nhập tháng 8 năm 2023
// ● Đầura:sốngàytrongthángđólà31

let month = +prompt("Moi ban nhap thang");
let year = +prompt("Moi ban nhap nam");

if (month == 1) {
  console.log("Tháng " + month + " có 31 ngày.");
} else if (month == 3) {
  console.log("Tháng " + month + " có 31 ngày.");
} else if (month == 5) {
  console.log("Tháng " + month + " có 31 ngày.");
} else if (month == 7) {
  console.log("Tháng " + month + " có 31 ngày.");
} else if (month == 8) {
  console.log("Tháng " + month + " có 31 ngày.");
} else if (month == 10) {
  console.log("Tháng " + month + " có 31 ngày.");
} else if (month == 12) {
  console.log("Tháng " + month + " có 31 ngày.");
} else if (month == 4) {
  console.log("Tháng " + month + " có 30 ngày.");
} else if (month == 6) {
  console.log("Tháng " + month + " có 31 ngày.");
} else if (month == 9) {
  console.log("Tháng " + month + " có 31 ngày.");
} else if (month == 12) {
  console.log("Tháng " + month + " có 31 ngày.");
} else if (month == 2) {
  if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
    console.log("Tháng " + month + " có 29 ngày.");
  } else {
    console.log("Tháng " + month + " có 28 ngày.");
  }
}

// switch (month) {
//   case 1:
//     console.log("Tháng " + month + " có 31 ngày.");
//   case 3:
//     console.log("Tháng " + month + " có 31 ngày.");
//   case 5:
//     console.log("Tháng " + month + " có 31 ngày.");
//   case 7:
//     console.log("Tháng " + month + " có 31 ngày.");
//   case 8:
//     console.log("Tháng " + month + " có 31 ngày.");
//   case 10:
//     console.log("Tháng " + month + " có 31 ngày.");
//   case 12:
//     console.log("Tháng " + month + " có 31 ngày.");
//   case 4:
//     console.log("Tháng " + month + " có 30 ngày.");
//   case 6:
//     console.log("Tháng " + month + " có 30 ngày.");
//   case 9:
//     console.log("Tháng " + month + " có 30 ngày.");
//   case 11:
//     console.log("Tháng " + month + " có 30 ngày.");

//   case 2:
//     if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
//       console.log("Tháng " + month + " có 29 ngày.");
//     } else {
//       console.log("Tháng " + month + " có 28 ngày.");
//     }
// }
