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



//Primitives vs Objects

var years = [1990, 1991, 1992, 1993, 1994];

function arrayCalc(arr, fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}



function interviewQuestion(job) {
    if (job === "designer") {
        return function(name) {
            console.log(name + ", can you please explain what UX design is?");
        }
    }else if(job === "teacher") {
        return function(name) {
            console.log(name + ", what subject do you teach?");
        }
    }else{
        return function(name) {
            console.log(name + ", what do you do?");
        }
    }
}

var teacherQuestion = interviewQuestion("teacher");

teacherQuestion("John");





function game() {
    var score = Math.random() * 10;
    console.log(score >= 5);
}
game();

*/

function retirement(retirementAge) {
    var a = ' years left until retirement.';
    return function(yearOfBirth) {
        var age = 2019 - yearOfBirth;
        console.log((retirementAge - age) + a)
    }
}

var retirementUS = retirement(66);
retirementUS(1990);

































