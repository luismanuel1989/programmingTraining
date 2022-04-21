var argOne = true, argTwo = true, argThree = false;
isThereAFalseArgument(argOne, argTwo, argThree);

function isThereAFalseArgument(argOne,argTwo, argThree){
  return !argOne || !argTwo  || !argThree;
  }