function Person(first, middle, last, age, eye, suffix) {
    this.firstName = first;
    this.middleName = middle;
    this.lastName = last;
    this.suffix = suffix;
    this.age = age;
    this.eyeColor = eye;
}
Person.prototype.fullName = function() {
    if(this.suffix) {
      return this.firstName + " " + this.middleName + " " + this.lastName + " " + this.suffix;
    }
    return this.firstName + " " + this.middleName + " " + this.lastName;
};
Person.prototype.cityState = "The Sky, above Earth";

var myFather = new Person("J.R.", "Bob", "Dobbs", "older than the universe", "undetermined");
var fathersName = myFather.fullName();
var fathersNameOutput = "My father's name is " + fathersName + ".";
var fathersLocation = fathersName + " lives in " + myFather.cityState + ".";
var fathersAge = "My father is " + myFather.age + ".";
var fathersEyeColor = "My father's eye color is " + myFather.eyeColor + ".";

document.getElementById('nameFrontContent').innerHTML = 'What is my Dad\'s Name?';
document.getElementById('nameBackContent').innerHTML = fathersName;
document.getElementById('name').innerHTML = fathersName;
document.getElementById("nameOutput").innerHTML = fathersNameOutput;
document.getElementById('location').innerHTML = fathersLocation;
document.getElementById('eyeColor').innerHTML = fathersEyeColor;
document.getElementById('age').innerHTML = fathersAge;