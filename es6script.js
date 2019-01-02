// Let and Const
/*
// ES5
var name5 = 'Caleb Robbins';
var age5 = 23
name5 = 'Jennie Mantell';
console.log(name5);

// ES6
const name6 = 'Caleb Robbins';
let age6 = 22;
name6 = 'Jennie Mantell';
console.log(name6);

// ES5

function driversLicense5(passedTest){
    if(passedTest){
        console.log(firstName);
        var firstName = 'Caleb';
        var yearOfBirth = '1990';
        
    }
    console.log(firstName + ', born in  ' + yearOfBirth + ' can drive a car!');
}

driversLicense5(true);

// ES6
function driversLicense6(passedTest){
    let firstName;
    const yearOfBirth = 1990;
    if(passedTest){
        firstName = 'Caleb';
    }
    console.log(firstName + ', born in  ' + yearOfBirth + ' can drive a car!');
}

driversLicense6(true);

let i = 23;

for (let i = 0; i < 5; i++){
    console.log(i);
}

console.log(i);
*/

///////////////////////////////////////////////////////////////////////
// Blocks and IIFEs
// ES6
/*
{
    const a = 1;
    let b = 2;
}

console.log(a + b);

// ES5 
(function()){
    var c = 3
}();
//console.log(c)
*/


////////////////////////////////////////////////////////////////////////////
// Strings
/*
let firstName = 'Caleb';
let lastName = 'Robbins';
const yearOfBirth = 1996;
function calcAge(year){
    return 2018 - year;
}

// ES5
console.log('This is ' + firstName + ' ' + lastName + '. He was born in ' + yearOfBirth + '. Today he is ' + calcAge(yearOfBirth) + ' years old');

// ES6
console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today he is ${calcAge(yearOfBirth)} years old`);

const n = `${firstName} ${lastName}`;
console.log(n.startsWith('C'));
console.log(n.endsWith('Ro'));
console.log(n.includes('aleb'));
console.log(firstName.repeat(5));
*/

////////////////////////////////////////////////////////////////////////////
// Arrow Functions
/*
const years = [1990, 1996, 1950, 1963];

// ES5
var ages5 = years.map(function(el){
    return 2016 - el;
});
console.log(ages5);

// ES6
let ages6 = years.map(el => 2016 - el);
console.log(ages6);

ages6 = years.map((el, index) => `Age element ${index + 1}: ${2016 - el}.`);
console.log(ages6);

ages6 = years.map((el, index) => {
    const now = new Date().getFullYear();
    const age = now - el;
    return `Age element ${index + 1}: ${2016 - el}.`
});
console.log(ages6);
*/

////////////////////////////////////////////////////////////////////////////
// Arrow Functions 2

// ES5
var box5 = {
    color: 'green',
    position: 1,
    clickMe: function(){

        var self = this;
        document.querySelector('.green').addEventListener('click', function(){
            var str = 'This is box number ' + self.position + ' and it is ' + self.color;
            alert(str);
        });
    }
}
//box5.clickMe();

// ES6
const box6 = {
    color: 'green',
    position: 1,
    clickMe: function(){

        document.querySelector('.green').addEventListener('click', () => {
            var str = 'This is box number ' + this.position + ' and it is ' + this.color;
            alert(str);
        });
    }
}
//box6.clickMe();


function Person(name) {
    this.name = name;
}
//ES5
Person.prototype.myFriends5 = function(friends) {
    var arr = friends.map(function(el){
        return this.name + ' is friends with ' + el;
    });
    console.log(arr);
}
var friends = ['Caleb', 'Jennie', 'Roger'];
new Person('Lisa').myFriends5(friends);

///////////////////////////////////////////////////////////////////////
//Lecture: Destructuring
/*
//ES5
var caleb = ['Caleb', 22];
//var name = caleb[0];
//var age = caleb[1];

//ES6
const [name, age] = ['Caleb', 22];
console.log(name + ' ' + age);

const obj = {
    firstName: 'Caleb',
    lastName: 'Robbins'
};

const {firstName, lastName} = obj;
console.log(firstName);
console.log(lastName);

const {firstName: a, lastName: b} = obj;
console.log(a);
console.log(b);


function calcAgeRetirement(year) {
    const age = new Date().getFullYear() - year;
    return [age, 65 - age];
}

const [age2, retirement] = calcAgeRetirement(1996);
console.log(age2);
console.log(retirement);
*/

/////////////////////////////////////////////////////////////////////////////////
//Arrays
/*
const boxes = document.querySelectorAll('.box');

//ES5
var boxesArr5 = Array.prototype.slice.call(boxes);

boxesArr5.forEach(function(current) {
    current.style.backgroundColor = 'dodgerblue';
});

//ES6
const boxesArr6 = Array.from(boxes);
boxesArr6.forEach(current => current.style.backgroundColor = 'green');

//ES5

for(var i = 0; i < boxesArr5.length; i++) {
    if(boxesArr5[i].className === 'box blue') {
        continue;
    }

    boxesArr5[i].textContent = 'I changed to blue!';
}


//ES6
for (const el of boxesArr6) {
    if(el.className === 'box blue'){
        continue;
    }
    el.textContent = 'I changed to green!';
}

//ES5
var ages = [12, 17, 8, 21, 14, 11];

var fullAge = ages.map(function(el){
    return el >= 18;
});
console.log(fullAge);

fullAge.indexOf(true);
console.log(ages[fullAge.indexOf(true)]);

//ES6
ages.findIndex(current => current >= 18);
console.log(ages.findIndex(current => current >= 18));
console.log(ages.find(current => current >= 18));
*/

////////////////////////////////////////////////////////////////////////////////////
// Spread Operator
/*
function addFourAges (a, b, c, d) {
    return a + b + c + d;
}

var sum1 = addFourAges(18, 12, 30, 21);
console.log(sum1);

//ES5
var ages = [18, 30, 12, 21];
var sum2 = addFourAges.apply(null, ages);
console.log(sum2);

//ES6
const max3 = addFourAges(...ages);
console.log(max3);

const familyRobbins = ['Caleb', 'Jake', 'Luke', 'Noah'];
const familyMantell = ['Jennie', 'Kat', 'Mary', 'Alex', 'Brit'];
const bigFamily = [...familyRobbins, ...familyMantell];
console.log(bigFamily);

const h = document.querySelector('h1');
const boxes = document.querySelectorAll('.box');
const all = [h, ...boxes];

Array.from(all).forEach(el => el.style.color = 'purple');
*/

///////////////////////////////////////////////////////////////////////////////////////////
// Rest Parameters
/*
//ES5
function isFullAge5(){
    //console.log(arguments);
    var argsArr = Array.prototype.slice.call(arguments);

    argsArr.forEach(function(el) {
        console.log((2018 - el) >= 21);
    })
}

//isFullAge5(1990, 1996, 1950, 2000);

//ES6
function isFullAge6(...years) {
    years.forEach(el => console.log((2018 - el) >= 18));
}

isFullAge6(1990, 1996, 2001);

function isFullAge5(limit){
    var argsArr = Array.prototype.slice.call(arguments, 1);
    console.log(argsArr);

    argsArr.forEach(function(el) {
        console.log((2018 - el) >= limit);
    })
}

isFullAge5(16, 1990, 1996, 1950, 2000);

//ES6
function isFullAge6(limit, ...years) {
    years.forEach(el => console.log((2018 - el) >= limit));
}

isFullAge6(19, 1990, 1996, 2001);
*/

///////////////////////////////////////////////////////////////////////////////////////////
//Default Parameters
//ES5
/*
function RobbinsPerson(firstName, yearOfBirth, lastName, nationality) {
    lastName === undefined ? lastName = 'Robbins' : lastName = lastName;
    nationality === undefined ? nationality = 'American' : nationality = nationality;

    this.firstName = firstName;
    this.yearOfBirth = yearOfBirth;
    this.lastName = lastName;
    this.nationality = nationality;
}

var caleb = new RobbinsPerson('Caleb', 1996);
var Jennie = new RobbinsPerson ('Jennie', 1994, 'Mantell', 'Italian');
*/
//ES6
function RobbinsPerson(firstName, yearOfBirth, lastName = 'Robbins', nationality = 'American') {
    this.firstName = firstName;
    this.yearOfBirth = yearOfBirth;
    this.lastName = lastName;
    this.nationality = nationality;
}

var caleb = new RobbinsPerson('Caleb', 1996, 'Robbins', 'American');
var jennie = new RobbinsPerson('Jennie', 1994);
