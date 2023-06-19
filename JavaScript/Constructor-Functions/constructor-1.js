
function PrintDetails(name, age, location, tel) {
  this.name = name;
  this.age = age;
  this.location = location;
  this.tel = tel;
  this.sayHello = () => {
    console.log(`Hello, my name is ${this.name}, I'm ${this.age} years old and I live in ${this.location}. Feel free to reach me at ${this.tel}`);
  }
}

const newPrint = new PrintDetails("Brian", 45, "Nairobi", +25487898765);
console.log(newPrint.sayHello());


