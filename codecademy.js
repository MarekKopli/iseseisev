//breaks
let athleteFinalPosition = 'fifth place';
switch (athleteFinalPosition) {
  case 'first place' :
    console.log('You get the gold medal!')
    break;
  case 'second place' : 
    console.log('You get the silver medal!')
    break;
  case 'third place' :
    console.log('You get the bronze medal!')
    break;
  default:
    console.log('No medal awarded.')
    break;
}
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//funktsioonid
function sayThanks() {
  console.log('Thank you for your purchase! We appreciate your business.');
}
sayThanks(); // Output: 'Thank you for your purchase! We appreciate your business.'
//
//
function monitorCount(rows, columns) {
      return rows * columns;
}

const numOfMonitors = monitorCount(5, 4)

console.log(numOfMonitors);
//
//
const plantNeedsWater = function(day) {
  if (day==='Wednesday'){
    return true;
  }
  else  {
    return false;
  }
}
//
// => ei pea function kirjutama 
const plantNeedsWater = (day) => {
  if (day === 'Wednesday') {
    return true;
  } else {
    return false;
  }
};
//
//
const plantNeedsWater = (day) => {
  return day === 'Wednesday' ? true : false;
};
//saab teha lihtsamalt
const plantNeedsWater = day => day === 'Wednesday' ? true : false;
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  
const satellite = 'The Moon';
const galaxy = 'The Milky Way';
const stars  = 'North Star';
const callMyNightSky = () => {
  return 'Night Sky: ' + satellite + ', ' + stars + ', and ' + galaxy;
}
console.log(callMyNightSky())
---------------------------------------------------------------------
  //kelvin temperature 293
const kelvin = 0;
//celsius 273 degrees less
let celsius = kelvin-273;
//clesiuses temp
var fahrenheit= celsius*(9/5)+32;
//rounds up
 fahrenheit = Math.floor(fahrenheit);
 console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
-----------------------------------------------------------------------------------
  onst myAge = 10;
let earlyYears = 2;
earlyYears = earlyYears*10.5;
let laterYears = myAge-2;
laterYears = laterYears*4;
myAgeInDogYears = earlyYears+laterYears;
myName = 'Marek Kopli'.toLowerCase();
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)
