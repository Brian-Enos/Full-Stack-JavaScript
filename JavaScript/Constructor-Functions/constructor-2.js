

function PersonMarker(name, marker) {
  this.name = name;
  this.marker = marker;
  this.sayMarker = () => {
    console.log(`My name is ${this.name} and my marker is ${this.marker}`);
  }
}
const player1 = new PersonMarker("Brian", 27);
console.log(player1);
player1.sayMarker();