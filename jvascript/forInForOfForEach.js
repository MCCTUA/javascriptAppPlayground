const arr = ["a", "b", "c", "d"];

/***** forEach ****/
/*
forEach หรือชื่อสามัญทางวิทยาศาสตร์คือ Array.prototype.forEach() นั้นใช้เพื่อวนลูปรอบอาร์เรย์ โดยหลักแล้วเราจึงใช้ forEach เพื่อเข้าถึงแต่ละอีลีเมนต์ในอาร์เรย์ได้ ดังนี้

forEach นั้นเป็นเมธอดที่รับฟังก์ชันเข้ามาเป็นอาร์กิวเมนต์ โดยฟังก์ชันดังกล่าวจะถูกเรียกทุกครั้งที่วนลูปไปในแต่ละอีลีเมนต์ของอาร์เรย์ ฟังก์ชันนี้จำเป็นต้องรับพารามิเตอร์หนึ่งตัวเป็นขั้นต่ำ โดยค่านั้นคืออีลีเมนต์จากแต่ละช่องของอาร์เรย์

นอกจากฟังก์ชันนี้จะรับค่าของอีลีเมนต์แต่ละรอบจากการวนลูปได้แล้ว มันยังรับพารามิเตอร์ได้อีกสองตัว คือ index ของแต่ละอีลีเมนต์ และ array ที่สื่อถึงอาร์เรย์ต้นฉบับของการวนลูป

forEach นั้นเป็นเมธอดของอาร์เรย์จึงใช้ได้กับอาร์เรย์เท่านั้น ทว่าโลกของ JavaScript นั้นขับเคลื่อนด้วยอ็อบเจ็กต์ อย่าเอาใจแต่อาร์เรย์ซิ เราควรมีวิธีวนลูปรอบอ็อบเจ็กต์เช่นกันรึเปล่า?
*/

arr.forEach((element, index, array) => console.log(element, index, array));

console.log("-----------------");

/***** forEach ****/
/*
อ็อบเจ็กต์ก็อยู่คู่ JavaScript ฉันนั้น! เพราะใด ๆ ในโลกล้วนอ็อบเจ็กต์ JavaScript จึงต้องมี for-in เพื่อก่อการวนลูปรอบอ็อบเจ็กต์นั่นเอง

ทว่าการวนลูปด้วย for-in นี้ค่าที่ได้ออกมาแต่ละตัวจะเป็นค่าของแต่ละ key ในอ็อบเจ็กต์ ดังนี้
*/
// for in กรณีที่ 1 Object
const person = {
  name: "Somchai Haha",
  age: 99, // ใกล้ตายแล้ว
  gender: "male",
};

for (let key in person) {
  console.log("key object: ", key);
}

// แต่หากต้องการเข้าถึง value ของ Object สามารถทำได้ดังนี้

for (let key in person) {
  console.log("get object value by key : ", person[key]);
}

// for in กรณีที่ 2 array เนื่องจาก ใน Javascript array ก็เป็น Object ชนิดหนึ่งด้วยเช่นกัน โดย index ของ array คือ key นั้นเอง

for (let i in arr) {
  console.log(arr[i]);
}

// for in กรณีที่ 3 การเข้าถึง Ojbect ที่อยู่ภายใน Class

class Person {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  printDetails() {
    // this หมายถึงอ็อบเจ็กต์ somchai ที่สร้างจากคลาส Person
    // มี key เป็น property ต่าง ๆ
    for (let key in this) {
      console.log(key, "in Object =>", this[key]);
    }
  }
}

const somchai = new Person("Somchai Haha", 99, "male");
somchai.printDetails();

// กรณีที่ 4 Enumerable

/*
กรณีของการวนลูปด้วย for-in พร็อพเพอร์ตี้ที่จะแสดงเป็นผลลัพธ์ในการวนลูปจะต้องตั้งค่า enumerable ให้เป็น true เท่านั้นจึงจะสามารถแสดงผลได้

โลกมนุษย์อายุคือสิ่งหวงห้าม ใครถามเป็นต้องตายไปข้างนึง เราจึงเลือกจะปกปิดส่วนของอายุจากอ็อบเจ็กต์ somchai ด้วยการตั้งค่า enumerabble ของ age ให้เป็น false ดังนี้
*/

const somsri = Object.defineProperties(
  {
    name: "Somsri Haha",
    gender: "female",
  },
  {
    age: {
      value: 99,
      enumerable: false,
    },
  }
);

for (let key in somsri) {
  console.log(key, "Emurator --> ", somsri[key]);
}

/*
ผลลัพธ์จากการตั้งค่า enumerable เป็น false จึงทำให้อายุไม่สามารถปรากฎได้จากการวนลูปด้วย for-in นั่นแล

การใช้งาน forEach หรือ for-in นั้นเราอาจมีตัวเลือกของการเข้าถึงอีลีเมนต์ไม่มากนัก หากเราต้องการวนลูปรอบอ็อบเจ็กต์ประเภท Iterable พร้อมกำหนดพฤติกรรมได้ด้วยตนเองจากข้างในอ็อบเจ็กต์เลย สิ่งที่เราต้องการนั้นจะเป็น for-of
*/

console.log("------------");

// วนลูปรอบ Iterable Object ด้วย for-of

/*
ก่อนที่เราจะเข้าใจการใช้งาน for-of ได้อย่างแท้จริง เราต้องลองทดสอบการวนลูปกับสิ่งที่เราทำได้ผ่าน forEach และ for-in กันก่อน นั่นคือการทดสอบวนลูป for-of ด้วยอาร์เรย์และอ็อบเจ็กต์

เริ่มจากการทดลองใช้ for-of กับอาร์เรย์
*/
for (const v of arr) {
  console.log(v);
}

/*
จากตัวอย่างข้างต้นเราพบว่าเมื่อใช้ for-of เพื่อการวนลูปรอบอาร์เรย์ แต่ละค่าของการวนลูปจะเป็นอีลีเมนต์ในช่องต่าง ๆ ของอาร์เรย์

ลำดับถัดไปเราจะทดสอบการวนลูปด้วย for-of ผ่านอ็อบเจ็กต์กันบ้าง ซึ่งจะพบว่า ทำไม่ได้ ขึ้น Error ดังนี้


ทำไมเราจึงวนลูปรอบอ็อบเจ็กต์ไม่ได้เช่นเดียวกับที่วนลูปได้ด้วย for-in

error: TypeError: person[Symbol.iterator] is not a function

for-of นั้นใช้วนลูปรอบอ็อบเจ็กต์ประเภทที่เราเรียกว่า Iterable Objects หรืออ็อบเจ็กต์ที่ใช้วนลูปได้ นั่นคือต้องทำตาม Iteration Protocol เพราะว่าอาร์เรย์นั้นเป็น iterable object จึงไม่ต้องแปลกใจที่จะใช้คู่กับ for-of ได้
*/

let personForOf = {
  name: "Somchai Haha",
  age: 99,
  gender: "male",
};

// for (let key of personForOf) {
//   console.log("For Of key -> ", key);
// }

// ในการทำให้ for of ใช้กับ Object ได้ ต้องแปลงให้เป็น iterable object ก่อน นั้นก็คือ แปลง Object ให้เป็น Array ก่อนผ่าน method :entries()

const personForOfObjectToArray = Object.entries(personForOf);

console.log(personForOfObjectToArray);

for (let value of personForOfObjectToArray) {
  console.log("after Object.entries(obj) -> ", value);
}
for (let [key, value] of personForOfObjectToArray) {
  console.log(
    "after Object.entries(obj) with desctruturing -> ",
    key,
    ":",
    value
  );
}
