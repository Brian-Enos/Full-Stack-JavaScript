

let myString = "titanic" ;

let myGreedyRegex = /t[a-z]*i/gi;
let myLazyRegex = /t[a-z]*?/gi ; 

//asterics mean zero or more occurences of any character


let greedyMatch = myString.match(myGreedyRegex);
let lazyMatch = myString.match(myLazyRegex);

console.log(greedyMatch);
console.log(lazyMatch);