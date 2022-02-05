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

//Coding Chnallenge one

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

//Coding Chnallenge two

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

