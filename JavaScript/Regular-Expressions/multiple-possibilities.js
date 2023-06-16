
let quotesample = "Beware of bugs in the above code; I have only proved it correct, not tried it yet" ;

let testRegex = /b[aiu]g/gi;

let result = quotesample.match(testRegex);
console.log(result);