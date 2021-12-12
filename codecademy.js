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
----------------------------------------------------------------------------------
let userName = 'iiii'
userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!');
let userQuestion = 'am i going to die'
console.log(userQuestion)
const randomNumber = Math.floor(Math.random()*8);
let eightBall = ''
switch  (randomNumber){
  case 0:
    eightBall='No';
  break;
  case 1:
    eightBall ='It is certain';
  break;
  case 2:
    eightBall = 'It is decidedly so';
  break;
  case 3:
    eightBall ='Reply hazy try again';
  break;
  case 4:
    eightBall ='Cannot predict now';
  break;
  case 5:
    eightBall ='Do not count on it';
  break;
  case 6:
    eightBall ='My sources say no';
  break;
  case 7:
    eightBall ='Outlook not so good';
  break;
  case 8:
    eightBall ='Signs point to yes';
  break;
  default:
    eightBall ='sus'
  break;
}
console.log(`The eight ball answered: ${eightBall}`);
//output Hello, iiii! am i going to die? The eight ball answered: It is decidedly so
------------------------------------------------------------------------------------------
let raceNumber = Math.floor(Math.random() * 1000);
const registeredEarly = false;
let runnerAge = 18;
if(runnerAge>=18 && registeredEarly){
  raceNumber+=1000;
  console.log(`Hello runner ${raceNumber} Your race will start 9:30 am!` );
}
else if (runnerAge>=18 && !registeredEarly){
  raceNumber+=1000;
  console.log(`Hello runner ${raceNumber}  Your race will start 11.00 am!`);
}
else if (runnerAge< 18){
  console.log(`Hello runner ${raceNumber} Your race will start 12:30 pm!`)
}
--------------------------------------------------------------------------------
// array asjad
.push // lisa arraysse asju
.pop // võtab array tagant ära
.shift // võtab array eest ära
.unshift // paneb array ette

console.log(nimi.slice(1, 4)) // võtab teatud asjad
const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];
console.log(groceryList.slice(1, 4));
const pastaIndex = groceryList.indexOf('pasta')
console.log(pastaIndex)
------------------------------------------------------------------------------
