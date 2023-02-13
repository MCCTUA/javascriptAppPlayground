/*
SKU:123456789ABC
1 : Bom level
23 : Main Category
45 : Sub Category
68 : Fixture Model / Model / Series
9AB : SKU Ordering
C : Mod 9

Serail No: RF-16761024155
*/

function modFunction(number, modNumber) {
  if (!isNaN(+number)) {
    let arrayOfNumber = Array.from(String(number), Number);
    let sumArrayOfNumber = arrayOfNumber.reduce((a, b) => a + b, 0);
    let modResult = sumArrayOfNumber % modNumber;
    let skuResult = `${number}${modResult}`;
    console.log(skuResult);
    return skuResult;
  } else {
    console.log(number, "Must input Number only");
    return false;
  }
}

// const test1 = "123456"
// const test2 = 12345678
// const test3 = "ab1234"

// modFunction(test1,9)
// modFunction(test2,9)
// modFunction(test3,9)

// 1673251200 + เพิ่มได้ ≤ 86400

const convertDateToTimestamp = (stringDate) => Date.parse(stringDate) / 1000;

const today = "2023-02-11T00:00:00";

const checkDate = convertDateToTimestamp(today);
console.log(modFunction(checkDate, 10));
// console.log(convertDateToTimestamp("2023-02-11"));
let nu = Array.from("1676048400", Number);

let x = nu.reduce((acc, cur) => acc + cur, 0);
console.log(x);

/*
* Array.from()
* Sequence generaor (range)

Syntax
-Arrow function
Array.from(arrayLike, (element, index) =>{...})
- Inline mapping function
Array.from(arrayLike, function (element, index) {...}, thisArg)

* arrayLike : มี 2 ประเภทคือ
    1. An iterable or 
    2. array-like object 
    to convert to an array.

* mapFn (Optional) : Map function to call on every element of the array. If provided, every value to be added to the array is first passed through this function, and mapFn's return value is added to the array instead.
    The function is called with the following arguments:
    - element : The current element being processed in the array.
    - index : The index of the current element being processed in the array.

* thisAry (Optional) : Value to use as this when executing mapFn.

const range = (start, stop, step) =>
  Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step);

    * arrayLike : { length :(stop - start) / step + 1}
    * (element, index) ==> ( _ , i ) 

* Generate numbers range 0..4

range(0, 4, 1);
* [0, 1, 2, 3, 4]
*/

const range = (start, stop, step) =>
  Array.from(
    { length: (stop - start) / step + 1 },
    (_, i) => start + i + 1 * step
  );

const step = range(0, 4, 1);
const padString = step.map((el) => String(el).padStart(5, "0"));
console.log(step);
console.log(padString);

const z = Array.from({ length: 5 }, (_, i) => console.log(_, i));

console.log(z);
