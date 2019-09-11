class Calculation {


addFeet(arr){
  arr.reduce((a,b) => a+b)
}
addInches(arr){
  (arr.reduce((a,b) => a+b))
}

addFeetToInches(ft, inch){
  let totalInch = ft *12 + inch;
  let totalFeet= Math.floor(totalInch/12);
  let inchesLeft= totalInch%12;
  let footInchObj={
    ft: totalFeet, inches: inchesLeft
  }
  return footInchObj
}
//makes every fraction something over 16
getNume(nume, denu){
  let multiplyer= 16% denu;
  let numerator= nume*multiplyer;
  return numerator;
}
//Takes an array of numerators
fractionToMixed(arr){
 let total= arr.reduce((a,b)=> a+b);
 let inches= Math.floor(total/16);
 let numerator= total%16;
 const mixedObj={
   inches: inches, nume: numerator
 }
 return mixedObj
}

u
}

export default Calculation