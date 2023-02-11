/**** method freezes ****/

/*สำหรับ method freezes นั้น เป็น method ที่ทำให้ Object ที่เราประกาศไว้ไม่สามารถแก้ไขหรือเปลี่ยนแปลงข้อมูลได้ */

const obj = { lion: "🦁" };
Object.freeze(obj);

obj.lion = "🐯";

console.log(obj.lion);

/**** Method assign ****/
/*
สำหรับ method Assign จะทำหน้าที่เพิ่มข้อมูลลงใน Object ซึ่งจากโค้ดด้านบนจะเห็นได้ว่า เราได้ประกาศ animal1A และได้ทำการ assign animal2A เข้าไปใน animal1A ผลลัพธ์ คือ animal1A จะมีการเปลี่ยนรูปไป 

แต่หากไม่ต้องการให้ ทั้ง animnal1A และ animal2A เปลี่ยนไป เราสามารถใช้ destructuring แทนได้
*/

const animnal1A = { lion: "🦁", tiger: "🐯" };
const animnal2A = { tiger: "🐱", pig: "🐷" };

const result1 = Object.assign(animnal1A, animnal2A);

const result2 = { ...animnal1A, ...animnal2A };

console.log("animal1A :", result1);
console.log("result1 :", result1);
console.log("result2 :", result2);

/**** Method key ****/
/*
Method key ใช้สำหรับดึง key ของ Object ออกมาเป็น Array สามารถดูได้ตัวอย่างได้จากโค้ดด้านล่าง
*/

const animal2 = {
  lion: "🦁",
  tiger: "🐱",
  pig: "🐷",
};

console.log("Object key :", Object.keys(animal2));

/**** Method value ****/
/*
เราสามารถใช้ Method Values เพื่อดึงค่าของ valuse ออกมาในรูปแบบ array
*/
const animal3 = {
  fish: "🐟",
  crab: "🦀",
  squid: "🐙",
};

console.log("object value :", Object.values(animal3));

/**** Method entries ****/
/*
เราจะใช้ในกรณีที่เราต้องการดึง key และ values ของ Object ทำให้ผลลพธ์ที่ได้เป็น Array ของ key กับ value นั่นเอง
*/
const birds = {
  owl: "🦉",
  eagle: "🦅",
  duck: "🦆",
};

const entries = Object.entries(birds);
console.log(entries);

// Convert Array back to Object with Object.fromEntries()

let backToObject = Object.fromEntries(entries);

console.log("Back to Object : ", backToObject);

let backtoObjectWithAssign = Object.assign({}, entries);

console.log(backtoObjectWithAssign);

const arr = ["zero", "one", "two"];

const objFromArrayByReduce = arr.reduce((accumulator, value, index) => {
  return { ...accumulator, ["key" + index]: value };
}, {});

console.log("objFromArrayByReduce : ->", objFromArrayByReduce);
