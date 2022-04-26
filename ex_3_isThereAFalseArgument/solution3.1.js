var argOne = true, argTwo = false, argThree = true;
var result = isThereAFalseArgument(argOne, argTwo, argThree);
console.log(result)

function isThereAFalseArgument(argOne, argTwo, argThree) {
    return !(argOne && argTwo && argThree);
}