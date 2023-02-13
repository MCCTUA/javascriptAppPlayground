const inputName = {
  isPrint: "chekc for print",
  brand: "Brand",
  model: "model",
};

console.log(Object.fromEntries(inputName));

// const prefix = prefixSn("1/9/2023");

// const range = rangeSn(100, 10);
// console.log(range);

// var arr = [101, 102, 103, 104, 105, 106, 107, 108, 109, 110];

// var result = (arr)=>{
//   return arr.reduce((acc, cur, index) => {
//     acc[`sn-${index + 1}`] = cur;
//     return acc;
//   }, {});
// }

// console.log(new Date());
// let d = new Date("2023-02-01T00:00:00");
// let dTimeZone = d.toLocaleString("th-TH", {
//   calendar: "gregory",
//   // timeZone: "Asia/Bangkok",
// });

// let x = Math.floor(new Date(d) / 1000000);
// console.log("x : ", x);

// console.log(
//   "D Time Zone : ",
//   dTimeZone,
//   " | ",
//   new Date(x*10000),
//   +new Date('2023-02-01T00:00:00'),
//   (new Date("2023-02-13T00:00:00") - new Date("2023-02-12T00:00:00")) / 1000,
//   String(Date.now()).length
// );

// let len = (x*1000000) +'2'
// console.log(len, len.length, String(1675184400000).length, new Date(1675184));

// // console.log(Array.from(len));
// console.log('reduce ',Array.from(len).reduce((a, c) => (+a + +c)%10, 0));
