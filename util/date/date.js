// console.log(new Date());
// // ใส่เวลาที่ถูกต้อง 2023-02-12T00:00:00 (ใส่เวลาหลัง T)
// console.log(new Date("2023-02-12T00:00:00"));
// // เวลา unix timestamp
// console.log(Date.now());

let d = new Date();
let dTimeZone = d.toLocaleString("th-TH", {
  calendar: "gregory",
  dateStyle: "full",
  timeStyle: "full",
});

console.log("D Time Zone : ", dTimeZone);
