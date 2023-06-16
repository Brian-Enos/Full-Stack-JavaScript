

let myString = "titanic" ;

let myGreedyRegex = /t[a-z]*i/gi;
let myLazyRegex = /t[a-z]*?/gi ;


let greedyMatch = myString.match(myGreedyRegex);
let lazyMatch = myString.match(myLazyRegex);

console.log(greedyMatch);
console.log(lazyMatch);