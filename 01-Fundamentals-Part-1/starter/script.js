const country = "Russia";
let population = 146000000;
const continent = "Europe";

console.log(country);
console.log(population);
console.log(continent);


let isIsland = false;
let language;

console.log(isIsland);
console.log(population);
console.log(country);
console.log(language);

language = "russian";
console.log(language);

const countryInParts = population / 2;
population++
console.log(population)
const finlandPopulation = 6000000;
console.log(finlandPopulation > population)
const averageCountry = 33000000;
console.log(averageCountry > population)

let description = "Portugal is in Europe and its 11 million people speak portuguese"

//Coding Challenge one

let markWeight = 78;
let johnWeight = 92;
let markHeight = 1.69;
let johnHeight = 1.95;

const markResult = markWeight / (markHeight * markHeight)
const johnResult = johnWeight / (johnHeight * johnHeight)

const markHigherBMI = markResult > johnResult
console.log(markHigherBMI)

//

let countryName = "Portugal";
let countryRegion = "Europe";
let countryPopulation = "11 million people";
let countryLanguage = "portuguese";
console.log(`${countryName} is in ${countryRegion} and its ${countryPopulation} speak ${countryLanguage}`)

//Coding Challenge two

if (markResult > johnResult) {
  console.log(`Mark's BMI ${markResult} is higher than John's ${johnResult}`)
} else { 
  console.log(`John's BMI${johnResult} is higher than Mark's ${markResult}`)
}

// Замыкание

function Counter () {
  let count = 1;
  return function () {
    return count++;
  }
}

let test = Counter();
let newTest = Counter();

console.log(test())
console.log(test())
console.log(newTest())
console.log(newTest())

//Coding Challenge three

let Dolphins = (96 + 81 + 110) /3;
let Koalas = (88 + 91 + 110) / 3;

if (Dolphins > Koalas) {
  console.log("Youhoo")
} else if (Koalas > Dolphins) {
  console.log("Whooho")
} else if (Koalas === Dolphins) {
  console.log("PEW PEW PEW")
}

let DolphinsNew = (97 + 112 + 80) / 3;
let KoalasNew = (109 + 95 + 123) / 3;

if (DolphinsNew > KoalasNew && DolphinsNew >= 100) {
  console.log("1")
} else if (KoalasNew > DolphinsNew && KoalasNew >= 100) {
  console.log("2")
} else if (KoalasNew === DolphinsNew && KoalasNew >= 100 && DolphinsNew >= 100) {
  console.log("3")
} else {
  console.log("no")
}

// Switch case

const foreighnLanguage = "muchacho";   // what we check

switch (foreighnLanguage) {
  case "chinese":                              // it is same as if statement
    console.log("MOST number of native speakers!");   //what we do after check
  break;
  case "spanish": 
    console.log("2nd place in number of native speakers");
  break;
  case "english":
    console.log("3rd place")
  case "hindi":                       // checking one of this two
  case "muchacho":
    console.log("Number 4'")
  break;
  case "arabic":
    console.log("5th most spoken language")
  break;
  default:
    console.log("Great language too :D'")
}


// Ternary Operator

const age = 15;

age >= 18 ? console.log("come in") : console.log ("go home")
const drink = age >= 18 ? console.log("come in") : console.log ("go home")

//Coding Challenge four

let bill = 275;
let tip = bill * 0.15
let moreTip = bill * 0.20

const tips = bill >=50 && bill <= 300 ? tip : moreTip;

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value
  ${bill + tip}`)

