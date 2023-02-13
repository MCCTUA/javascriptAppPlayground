import { demoData } from "./model/label.js";
const obj = { name: "John", age: 30, city: "New York" };
const dateOptions = {
  calendar: "gregory",
};

const myJSON = JSON.stringify(obj);
const myObj = JSON.parse(myJSON);

// console.log(myObj);

// console.log(new Date("July 20, 69 00:20:18"));
// console.log(new Date("1/9/2023").toLocaleDateString('th-TH'));

const filterData = demoData.filter((el, i) => {
  const currentTimeStamp = new Date();
  const todayIs = currentTimeStamp.getDate();
  const currentMonthIs = currentTimeStamp.getMonth();
  const currentYearIs = currentTimeStamp.getFullYear();
  // console.log(new Date(el.Date).getMonth() === currentMonthIs && el.Prefix === 'RH');
  return new Date(el.Date).getMonth() === currentMonthIs && el.Prefix === "RH";
  //   if (true) {
  //     let date = new Date(el.Date).toLocaleString("en-US", {
  //       timeZone: "Asia/Bangkok",
  //     });

  // console.log(
  //   currentTimeStamp,
  //   currentTimeStamp.getTime(),
  //   todayIs,
  //   currentMonthIs,
  //   currentYearIs,
  //   "----",
  //   new Date(currentYearIs, currentMonthIs, todayIs).getTime()
  // );

  // console.log(
  //   new Date(date).getTime() ===
  //     new Date(currentYearIs, currentMonthIs, todayIs).getTime()
  // );

  // console.log(Date.now());
  // console.log(date === Date.now());
  // console.log(
  //   el.Date,
  //   " || ",
  //   date,
  //   new Date(date).getTime(),
  //   new Date("1/9/2023").getTime()
  // );
  // console.log(date);
  //   }
});
// const [datecheck] = demoData.slice(-1);
// let date = new Date(datecheck.Date).toLocaleString("th-TH", {
//   timeZone: "Asia/Bangkok",
//   calendar: "gregory",
// });
console.log(filterData.length);
