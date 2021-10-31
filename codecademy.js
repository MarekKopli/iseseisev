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
