/**
 * MÔ HÌNH 3 KHỐI
 * +ĐẦU VÀO
 * +XỬ LÝ
 * +ĐẦU RA
 */
/**
 * Bài 1:
 *
/**
 * - Đầu vào: Nhập lương 1 ngày và số ngày làm
 *  + Lương 1 ngày
 *  + Số ngày làm: 20
 * -Xử lý:
 * + Lương tổng = Lương 1 ngày * số ngày làm
 * -Xuất kết quả
  */
var luong1ngay = 100000;
var soNgayLam = 20;

var luongTong = luong1ngay * soNgayLam;
var result = "Lương được nhận: " + luongTong;
console.log(result);


// Bài 2
/**
 * - Đầu vào: Nhập 5 số thực
 *  + Số thực thứ 1: 5
 *  + Số thực thứ 2: 6 
 *  + Số thực thứ 3: 7
 *  + Số thực thứ 4: 8
 *  + Số thực thứ 5: 9
 * -Xử lý:
 * + Trung bình = Số thực thứ 1 + Số thực thứ 2 + Số thực thứ 3 + Số thực thứ 4+ Số thực thứ 5
 * -Xuất kết quả
  */
var soThuc1 = 5;
var soThuc2 = 6;
var soThuc3 = 7;
var soThuc4 = 8;
var soThuc5 = 9;

var trungBinh = soThuc1 + soThuc2 + soThuc3 + soThuc4 + soThuc5;
var result = "Giá trị trung bình là :" + trungBinh;
console.log(result);

// Bài 3
/**
 * - Đầu vào: Nhập số tiền usd cần quy đổi
 *  + Nhập số usd: 4
 * -Xử lý:
 * + vietNam = Số usd * 23500
 * -Xuất kết quả
  */
var usd = 4;
var vietNam = usd * 23500;
console.log("Tiền quy đổi là: " + vietNam);

// Bài 4
/**
 * - Đầu vào: Nhập 2 cạnh hình chữ nhật
 *  + chieuDai: 6
 *  + chieuRong: 2
 * -Xử lý:
 * + Diện tích = chieudai * chieuRong
 * -Xuất kết quả
  */
var chieuDai = 6;
var chieuRong = 2;

var dienTich = chieuDai * chieuRong;
var chuVi = (chieuDai + chieuRong) * 2;
console.log("Diện tích là: " + dienTich);
console.log("Chu vi là: " + chuVi);

//Bài 5
/**
 * - Đầu vào: Nhập một số no có 2 chữ số
 *  + Nhập số: 42
 * -Xử lý:
 * + Tách số hàng chục: ten = Math.floor(n%10);
 * +Tách số hàng đơn vị: unit = n%10;
 * +Tổng 2 ký số vừa nhập: tong = ten + unit;
 * -Xuất kết quả ra console
  */
var number = 42;

var chuc = Math.floor(number / 10);
var donVi = number % 10;

var tong = chuc + donVi;
console.log("Kết quả là: " + tong);
