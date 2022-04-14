var ageOne = 25,
  ageTwo = 29;

function ageRangeIsAllowed(ageOne, ageTwo) {
  if(Math.abs(ageOne - ageTwo <=5)){
    return true
  }else{
    return false
  }
}

ageRangeIsAllowed(ageOne, ageTwo);
