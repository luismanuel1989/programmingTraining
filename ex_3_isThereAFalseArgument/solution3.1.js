var argOne = true, argTwo = false, argThree = true;
isThereAFalseArgument(argOne, argTwo, argThree);


function isThereAFalseArgument(argOne, argTwo, argThree) {
    return !(argOne && argTwo && argThree);
}