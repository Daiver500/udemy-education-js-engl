// FUNCTIONS

const juice = (apples, oranges) => {
   console.log(apples, oranges);
   const juice = `I ate ${apples} apples and ${oranges} oranges`;
   return juice
}

let newJuice = juice(5, 6)
console.log(newJuice)
console.log(juice(5, 6))

let doubleJuice = juice(10, 12)
console.log(doubleJuice)

// function declaration, can be used before it declared

function calcAge (age) {
    return age - 10;
}

const age = calcAge(25);  // variable to save function returned value

//function expression

const newCalcAge = function (age) {
    return age - 10;
}

const newAge = newCalcAge(25)

console.log(age, newAge)

// arrow function (type of function expression)

const test = age => 25 - age;   // simple variant with one parameter
const testAge = test(10)

const moreNewCalcAge = (age) => {
  return age - 10;
}

const moreNewAge = moreNewCalcAge(25)

//

const cutPieces = (fruit) => {
    return fruit*4;
}

const fruitProcessor = (oranges, apples) => {
    const applePieces = cutPieces(apples);
    const orangePieces = cutPieces(oranges);
     return applePieces + orangePieces
}

let testNew = fruitProcessor(2, 3);
console.log(testNew)
console.log(fruitProcessor(2, 3))

// coding challenge five

const calcAverage = (scoreFirst, scoreSecond, scoreThird) => {
    return (scoreFirst + scoreSecond + scoreThird) / 3;
}

const avrDolphines = calcAverage(44, 23, 71);
const avrKoalas = calcAverage(65, 54, 49);

const checkWinner = (scoreDolphins, scoreKoalas) => {
    if (scoreDolphins > scoreKoalas) {
      console.log(`Dolphins wins (${scoreDolphins} vs ${scoreKoalas})`)
    }
    else if (scoreKoalas > scoreDolphins) {
      console.log(`Koalas wins (${scoreKoalas} vs ${scoreDolphins})`)
    }
}

checkWinner(avrDolphines, avrKoalas)

//ARRAYS

const friends = ["petr", "vasya", "ivan"];  // count 0, 1, 2
console.log(friends[0]);
console.log(friends.length);
console.log(friends[friends.length - 1]); // shows second element of array same as console.log(friends[3 - 1]);

const years = new Array(1991, 2005, 2011, 2022);
console.log(years[2]);

friends[2] ="Jay";
console.log(friends)

//const testArray = friends.slice((0, 0))
const testArray = [...friends]
const biggestArray = [...friends,...years]

testArray[2] = "Alex"
console.log(testArray)
console.log(friends)
console.log(biggestArray)

const calcAgeOfArray = (age) => {
    return 2037 - age;
}

const newYears = [1990, 2067, 2002,  2010, 2018];

const lastAge1 = calcAgeOfArray(newYears[0])
const lastAge2 = calcAgeOfArray(newYears[1])
const lastAge = calcAgeOfArray(newYears[newYears.length - 1])
console.log(lastAge)

const ages = [calcAgeOfArray(newYears[newYears.length - 1]), lastAge1, lastAge2]
console.log(ages)

// ARRAY METHODS

const names = ["alex", "maks"]
console.log(names.indexOf("maks"))  // which number this element in array
console.log(names.includes("bob"))  // if this element exist in array
names.push("lisa") // add element at the end
names.unshift("kevin")  //add the element into beginning
names.pop()   //delete last element
names.shift() //delete first element
console.log(names)

// coding challenge six

const billsArray = [125, 555, 44]

const calcTip = (bill) => {
    let tip = bill * 0.15
    let moreTip = bill * 0.20
    const tips = bill >=50 && bill <= 300 ? tip : moreTip;
    return tips
}

const tipsArray = [calcTip(billsArray[0]), calcTip(billsArray[1]), calcTip(billsArray[2])]
console.log(tipsArray)

const totalArray = [...billsArray,...tipsArray]
console.log(totalArray)

const newTotalArray = () => {
    let newArray = [];
    billsArray.forEach((item) => {
      newArray.push(item);
    })
    tipsArray.forEach((item) => {
        newArray.push(item);
      })
    return newArray;
}

const moreNewArray = newTotalArray()
console.log(moreNewArray)

var numbers = [1, 4, 9];
var roots = numbers.map(elem => elem * 2);
console.log(roots)