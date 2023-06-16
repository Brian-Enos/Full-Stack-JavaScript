
let petString = "Brian Enos has a pet cat."
let stringRegex = /dog|cat|fish / ; //will match either of the content within the forward slash
//returns true

let result = stringRegex.test(petString);
console.log(result)