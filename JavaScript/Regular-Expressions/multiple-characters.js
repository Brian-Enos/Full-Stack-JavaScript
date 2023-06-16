
let difficultSpelling = "mississippi isssss goood!";
let myRegex = /s+/gi;
let result = difficultSpelling.match(myRegex);
console.log(result);