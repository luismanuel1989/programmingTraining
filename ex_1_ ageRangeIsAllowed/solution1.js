var ageOne = 25,
  ageTwo = 29;

function ageRangeIsAllowed(ageOne, ageTwo) {
  return Math.abs(ageOne - ageTwo) <= 5;

}

ageRangeIsAllowed(ageOne, ageTwo);
