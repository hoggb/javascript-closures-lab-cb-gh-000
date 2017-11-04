
function bumpCounter(){
  var counter = 0;

  function addBump(){
    counter++;
  }

  function getBumps(){
    return counter;
  }

  return {addBump, getBumps};
}


function createAnimal(animalType){
  return function addDevice(deadlyDevice){
    return {animalType, deadlyDevice};
  }
}

var sharkCreator = createAnimal("Shark");
var sharkWithFrickinLaserbeam = sharkCreator.addDevice("Laserbeam");
var sharkWithFrickinCannon = sharkCreator.addDevice("Cannon");

