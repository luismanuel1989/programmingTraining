var ageOne = 25,
  ageTwo = 29;

function ageRangeIsAllowed(ageOne, ageTwo) {
  var ageDiference = Math.abs(ageOne - ageTwo);
  if (ageDiference >= 1 && ageDiference <= 5) {
    return console.log(true);
  } else {
    return console.log(false);
  }
}

ageRangeIsAllowed(ageOne, ageTwo);
