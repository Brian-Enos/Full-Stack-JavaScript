const form = document.getElementById("form");
const username = document.getElementById("username");
const password = document.getElementById("password");
const telephone = document.getElementById("telephone");
const error = document.getElementById("error");

function formValidation() {
  if(username.value === "") {
    alert("Your Username is blank");
    error.textContent = "Your Usernsme is Blank";
  }
  else if (username.length < 5) {
    alert("Your Username is Too Short");
  }
  else if(username.value > 20) {
    alert("Your Username is Too Short");

  }

  if(password.value === "password") {
    alert("You can't user 'password' as password");
  }
  else if(password.value < 5) {
    alert("Your Password is Too Short");
  }
  if(telephone.value === "") {
    alert("You Can't leave this field blank!");
  }
}