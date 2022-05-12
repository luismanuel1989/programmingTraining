var argOne = true,
  argTwo = false;

var material_Conditional = materialConditional(argOne, argTwo),
  exclusive_Or = exclusiveOR(argOne, argTwo);

function materialConditional(argOne, argTwo) {
  return !argOne || argTwo;
}

function exclusiveOR(argOne, argTwo) {
  return argOne != argTwo;
}

evaluateMaterialConditionalAndExclusiveOr(material_Conditional, exclusive_Or);

function evaluateMaterialConditionalAndExclusiveOr(
  material_Conditional,
  exclusive_Or
) {
  return material_Conditional && exclusive_Or;
}
