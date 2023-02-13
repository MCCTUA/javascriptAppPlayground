const unixStamp = 1673251200;
// console.log(new Date(unixStamp * 1000));
// console.log(String(unixStamp * 1000).length);
// console.log(String(Date.now()).length);
// console.log(new Date());
const d1 = new Date("2023-01-01T00:00:00");
const d2 = new Date("2023-01-02T00:00:00");
//----------------------------------------
function toTimestamp(strDate) {
  const datum = Date.parse(strDate);
  return datum / 1000;
}
//----------------------------------------
const date1 = "2023-01-01T08:00:00";
const date2 = "2023-01-02T08:00:00";
const date3 = "2023-01-01";
const date4 = "2023-01-02";
const d3 = toTimestamp(date1);
const d4 = toTimestamp(date2);
const d3A = toTimestamp(date3);
const d4B = toTimestamp(date4);
// console.log("---->", d4 - d3);

// console.log(d1.toDateString("th-TH"), d1.valueOf());
// console.log(d2.toDateString("th-TH"), d1.valueOf());
// console.log(Date());
// console.log(Date.now());
//----------------------------------------

const d5 = new Date(date1).getTime() / 1000;
const d6 = new Date(date2).getTime() / 1000;
const d7 = new Date(date3).getTime() / 1000;
const d8 = new Date(date4).getTime() / 1000;

// console.log("getTime", d5, d3, d7);
// console.log("getTime", d6, d4, d8);

const d9 = new Date().getTime();

// console.log(d9, new Date(d9));

// console.log(d5, d7, new Date(d7 * 1000), new Date(d5*1000));
// console.log(d6, d8, new Date(d8 * 1000), new Date(d6*1000));

const d10 = new Date(date1)
const d11 = Date(date1)
const d12 = new Date(Date.UTC(2023, 01, 01, 0, 0, 0))
console.log(d10, d10/1000, d11, d12)