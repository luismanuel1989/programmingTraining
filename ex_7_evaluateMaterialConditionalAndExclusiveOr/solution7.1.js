var argOne = true,
  argTwo = false;


function materialConditional(argOne, argTwo) {
  return !argOne || argTwo;
}

function exclusiveOR(argOne, argTwo) {
  return argOne != argTwo;
}

evaluateMaterialConditionalAndExclusiveOr(argOne, argTwo);

function evaluateMaterialConditionalAndExclusiveOr(argOne, argTwo) {
  return materialConditional(argOne,argTwo) && exclusiveOR(argOne, argTwo);
}
