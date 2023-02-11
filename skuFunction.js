/*
123456789ABC
1 : Bom level
23 : Main Category
45 : Sub Category
68 : Fixture Model / Model / Series
9AB : SKU Ordering
C : Mod 9
*/


function modFunction(number, modNumber) {

    console.log( !isNaN(number), number.length == 6, !isNaN(number) && number.length ==6)
    if(!isNaN(number) && number.length == 6){

        let arrayOfNumber = Array.from(String(number), Number)
        let sumArrayOfNumber = arrayOfNumber.reduce((a,b) => a + b, 0)
        let modResult = sumArrayOfNumber % modNumber
        let skuResult = `${number}${modResult}`
        console.log(skuResult)
        return skuResult

    
    } else {
        console.log(number, "Must input Number only")
        return false

    }
}

const test1 = "123456"
const test2 = 12345678
const test3 = "ab1234"

modFunction(test1,9)
modFunction(test2,9)
modFunction(test3,9)