

let quoteSample = "#3 blind mice";
let myRegex = /[^0-9aeiou]/gi;

//This will not match characters aeiou and digits 0-9

let result = quoteSample.match(myRegex);
console.log(result);