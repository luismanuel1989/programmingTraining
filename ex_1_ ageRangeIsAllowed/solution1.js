var ageOne = 25, ageTwho = 38;
var result = ageRangeIsAllowed(ageOne, ageTwho);
console.log(result)
function ageRangeIsAllowed(ageOne, ageTwho){
     var ageDiference = Math.abs(ageOne - ageTwho)
     if(ageDiference >= 1 && ageDiference <= 5){
          return "edad permitidad"
       }else{
           return "edad no permitidad"
       }
}