/*var Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
};

Person.prototype.calAge = function() {
        console.log(2019 - this.yearOfBirth);
};

Person.prototype.lastName = "Smith";



var john = new Person("John", 1990, "Teach");
var jane = new Person("Jane", 1969, "Designer");
var mark = new Person("Mark", 1930, "Retired")
john.calAge();

console.log(john.lastName, mark.lastName, jane.lastName);



var Car = function(model, year, color) {
    this.model = model;
    this.year = year;
    this.color = color;
};

Car.prototype.age = function() {
    console.log(2019 - this.year);
};

var monteCarlo = new Car("Chevy", 1997, "Red");
var cruze = new Car("Chevy", 2016, "White");

cruze.age();
monteCarlo.age();



//Object.create
var personProto = {
    calculateAge: function() {
        console.log(2019 - this.yearOfBirth);
    }
};


var john = Object.create(personProto);
john.name = "John";
john.yearOfBirth = 1999;
john.job = "Teacher";


var jane = Object.create(personProto, {
    name: { value: "Jane" },
    yearOfBirth: { value: 1990 },
    job: {value: "Designer"}
});

*/

//Primitives vs Objects
















































