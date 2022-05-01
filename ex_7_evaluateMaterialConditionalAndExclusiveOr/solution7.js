var argOne = true,
  argTwo = false;
evaluateMaterialConditionalAndExclusiveOr(argOne, argTwo);

function evaluateMaterialConditionalAndExclusiveOr(argOne, argTwo) {
  var materialConditional = !argOne || argTwo;
  return materialConditional &&  argOne != argTwo;
}
