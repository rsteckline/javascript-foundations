function createDragon(name, rider, temperment)  {
  return dragonObj = {
    name: name,
    rider: rider,
    temperment: temperment,
    timesEaten: 0,
    hungry: true
  };
}

function greetRider(dragonObj) {
  return greeting = `Hi, ${dragonObj.rider}!`  
}

function eat(dragon) {
  dragon.timesEaten++;
  dragon.hungry = dragon.timesEaten < 3;
  return dragon;
}

function findFireBreathers(dragons) {
  var fireBreathers = []
  for (var i = 0; i < dragons.length; i++ ) {
    if (dragons[i].temperment === 'aggressive')  {
      fireBreathers.push(dragons[i]);
    }
  }
  return fireBreathers
}


module.exports = {
  createDragon, 
  greetRider, 
  eat, 
  findFireBreathers
}

































































































































































// function createDragon(name, rider, temperment)  {
//   return dragonObj = {
//     name: name,
//     rider: rider,
//     temperment: temperment,
//     timesEaten: 0,
//     hungry: true
//   };
// }

// function greetRider(dragonObj) {
//   return greeting = `Hi, ${dragonObj.rider}!`
// }

// function eat(dragon) {
//   dragon.timesEaten++;
//   dragon.hungry = dragon.timesEaten < 3;
//   return dragon;
// }

// function findFireBreathers(dragons) {
//   var fireBreathers = [];
//   for (var i = 0; i < dragons.length; i++) {
//     if (dragons[i].temperment === 'aggressive') {
//       dragons[i].fireBreather = true;
//       fireBreathers.push(dragons[i]);
//     }
//   }
//   return fireBreathers;
// }