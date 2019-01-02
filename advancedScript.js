//Function Constructor (Most popular)
/*
var john = {
    name: 'John',
    yearOfBirth: 1990,
    job:'teacher',
};

var Person = function(name, yearOfBirth, job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
};

Person.prototype.calculateAge = function(){
    console.log(2018 - this.yearOfBirth);
};

Person.prototype.lastName = 'Smith';

var john = new Person('John', 1990, 'teacher');
john.calculateAge();

var jane = new Person('Jane', 1996, 'designer');
jane.calculateAge();

var mark = new Person('Mark', 1948, 'retired');
mark.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);

*/

//Object.create
/*
var personProto = {
    calculateAge: function(){
        console.log(2018 - this.yearOfBirth)
    }
};

var john = Object.create(personProto);
john.name = 'john';
john.yearOfBirth = 1996;
john.job = 'teacher';

var jane = Object.create(personProto, {
    name: {value: 'Jane'},
    yearOfBirth: {value: 1969},
    job: {value: 'designer'},
});
*/
/*
// Primitives vs objects 

//Primitives
var a = 23;
var b = a;
a = 46;
console.log(a);
console.log(b);

//Objects
var obj1 = {
    name: 'John',
    age: 22,
};

var obj2 = obj1;
obj1.age = 30;
console.log(obj1.age);
console.log(obj2.age);

//Functions
var age = 22;
var obj = {
    name: 'Caleb',
    city: "Rochester",
};

function change(a, b) {
    a = 30;
    b.city = 'Buffalo';
};

change(age, obj);
console.log(age);
console.log(obj.city); 
*/
//Passing functions as arguments
/*
var years = [1990, 1965, 1937, 2005, 1996];

function arrayCalc(arr, fn) {
    var arrResult = [];
    for (var i = 0; i < arr.length; i++) {
        arrResult.push(fn(arr[i]));
    }
    return arrResult;
}

function calculateAge(el) {
    return 2018 - el;
}

function isFullAge(el) {
    return el >= 18;
}

function maxHeartRate(el) {
    if (el >= 18 && el <= 81){
        return Math.round(206.9 - (0.67 * el));
    } else {
        return -1;
    }
    
}


var ages = arrayCalc(years, calculateAge);
console.log(ages);
var fullAges = arrayCalc(ages, isFullAge);
console.log(fullAges);
var rates = arrayCalc(ages, maxHeartRate);
console.log(rates);
*/


//Functions Returning Functions
/*
function interviewQuestion(job) {
    if(job === 'designer'){
        return function(name){
            console.log(name + ', can you please explain what UX design is?');
        }
        }else if(job ==='teacher'){
            return function(name){
                console.log(name + ', what subject do you teach?');
            }
    }else {
        return function(name){
            console.log('Hello ' + name + ', what do you do?');
        }
    }
}

var teacherQuestion = interviewQuestion('teacher');
var designerQuestion = interviewQuestion('designer');

teacherQuestion('Caleb');
designerQuestion('Caleb');
designerQuestion('Jane');

interviewQuestion('teacher')('Jennie');
*/

//IIFE
/*
function game() {
    var score = Math.random() * 10;
    console.log(score >= 5);
}

game();

(function () {
    var score = Math.random() * 10;
    console.log(score >= 5);
})();

console.log(score);
*/

/////////////////////////////////////////////
//Closures
/*
function retirement(retirementAge) {
    var a = ' years left until retirement.';
    return function(yearOfBirth){
        var age = 2018 - yearOfBirth;
        console.log((retirementAge - age) + a);
    }
}

var retirementUS = retirement(66);
var retirementGermany = retirement(65);
var retirementIceland = retirement (67);

retirementGermany(1996);
retirementUS(1996);
retirementIceland(1996);

function interviewQuestion(job) {
    return function(name) {
        if (job === 'designer'){
            console.log(name + ' can you please explain what UX design is?');
        } else if (job === 'teacher'){
            console.log(name + ', what subject do you teach?');
        } else {
            console.log('Hello ' + name + ', what do you do?');
        }
    }
}

interviewQuestion('teacher')('Moshe');
interviewQuestion('designer')('Caleb');
interviewQuestion('nurse')('Jennie');
*/

////////////////////////////////////////////////
// Bind, Call and Apply
var caleb = {
    name: 'Caleb',
    age: 23,
    job: 'student',
    presentation: function(style, timeOfDay){
        if (style === 'formal'){
            console.log('Good '+ timeOfDay + ', ladies and gentlemen! I\'m '+ this.name + ', I\'m a '+ this.job + ' and I\'m ' + this.age + ' years old.');
        } else if (style === 'friendly'){
            console.log('Hey! What\'s up? I\'m ' + this.name + ', I\'m a '+ this.job + ' and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay + '.');
        }
    }
};

var jennie = {
    name: 'Jennie',
    age: 24,
    job: 'nurse'
};
caleb.presentation('formal', 'morning');
caleb.presentation.call(jennie, 'friendly', 'afternoon');

var calebFriendly = caleb.presentation.bind(caleb, 'friendly');

calebFriendly('morning');
calebFriendly('night');

var jennieFormal = caleb.presentation.bind(jennie, 'formal');
jennieFormal('afternoon');