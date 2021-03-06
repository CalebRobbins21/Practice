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

//ES6
function RobbinsPerson(firstName, yearOfBirth, lastName = 'Robbins', nationality = 'American') {
    this.firstName = firstName;
    this.yearOfBirth = yearOfBirth;
    this.lastName = lastName;
    this.nationality = nationality;
}

var caleb = new RobbinsPerson('Caleb', 1996, 'Robbins', 'American');
var jennie = new RobbinsPerson('Jennie', 1994);
*/
/////////////////////////////////////////////////////////////////////
// Maps
/*
const question = new Map();

question.set('question', 'What is the official name of the latest major JavaScript version?');
question.set(1, 'ES5');
question.set(2, 'ES6');
question.set(3, 'ES2015');
question.set(4, 'ES7');
question.set('correct', 3);
question.set(true, 'Correct Answer');
question.set(false, 'Wrong answer, please try again!');

console.log(question.get('question'));
console.log(question.size);

if(question.has(4)){
    //question.delete(4);
    //console.log('Answer 4 is here');
}

//question.clear();

//question.forEach((value, key) => console.log(`This is ${key}, and it is set to ${value}`));

for (let [key, value] of question.entries()) {
    if (typeof(key) === 'number') {
        console.log(`Answer ${key}: ${value}`);
    }
}

const ans = parseInt(prompt('Write the correct answer'));
console.log(question.get (ans === question.get('correct')));
*/

////////////////////////////////////////////////////////////////////////
//Classes
/*
//ES5
var person5 = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

person5.prototype.calculateAge = function() {
    var age = new Date().getFullYear - this.yearOfBirth;
    console.log(age);
}

var john5 = new Person5('Caleb', 1996, 'student');

//ES6

class Person6 {
    constructor (name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }

    calculateAge(){
        var age = new Date().getFullYear - this.yearOfBirth;
        console.log(age);
    }

    static greeting() {
        console.log('Hey there!');
    }
}

const caleb6 = new Person6('Caleb', 1996, 'student');

Person6.greeting();
*/

//////////////////////////////////////////////////////////////////////
// Sub-classes
//ES5
/*
var Person5 = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person5.prototype.calculateAge = function() {
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
}

var Athlete5 = function(name, yearOfBirth, job, olympicGames, medals) {
    Person5.call(this, name, yearOfBirth, job);
    this.olympicGames = olympicGames;
    this.medals = medals; 
}

Athlete5.prototype = Object.create(Person5.prototype);

Athlete5.prototype.wonMedal = function() {
    this.medals++;
    console.log(this.medals);
}
var calebAthlete5 = new Athlete5('Caleb', 1996, 'swimmer', 3, 10);

calebAthlete5.calculateAge();
calebAthlete5.wonMedal();

//ES6

class Person6 {
    constructor (name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }

    calculateAge(){
        var age = new Date().getFullYear() - this.yearOfBirth;
        console.log(age);
    }
}

class Athlete6 extends Person6 {
    constructor(name, yearOfBirth, job, olympicGames, medals) {
        super(name, yearOfBirth, job);
        this.olympicGames = olympicGames;
        this.medals = medals;
    }

    wonMedal() {
        this.medals++;
        console.log(this.medals);
    }
}

const calebAthlete6 = new Athlete6('Caleb', 1996, 'rugby', 3, 10);

calebAthlete6.wonMedal();
calebAthlete6.calculateAge();
*/
///////////////////////////////////////////////////////////////////////
// Coding challenge #8

class Element {
    constructor(name, buildYear) {
        this.name = name;
        this.buildYear = buildYear;
    }
}

class Park extends Element {
    constructor(name, buildYear, area, numTrees){
        super(name, buildYear);
        this.area = area; //km2
        this.numTrees = numTrees;
    }

    treeDensity() {
        const density = this.numTrees / this.area;
        console.log(`${this.name} has a tree density of ${density} trees per square km.`);
    }
}

class Street extends Element {
    constructor(name, buildYear, length, size = 3) {
        super(name, buildYear);
        this.length = length;
        this.size = size;
    }

    classifyStreet() {
        const classification = new Map();
        classification.set(1, 'tiny');
        classification.set(2, 'small');
        classification.set(3, 'normal');
        classification.set(4, 'big');
        classification.set(5, 'huge');

        console.log(`${this.name}, built in ${this.buildYear}, is a ${classification.get(this.size)} street.`);
    }
}

const allParks = [new Park('Green Park', 1987, 0.2, 215), new Park('National Park', 1894, 2.9, 3541), new Park('Oak Park', 1953, 0.4, 949)];

const allStreets = [new Street('Ocean Avenue', 1999, 1.1, 4), new Street('Evergreen Street', 2008, 2.7, 2), new Street('22nd Street', 1950, 1.1), new Street('Sunset Boulevard', 1982, 2.5, 5)];

function calc(arr) {
    const sum = arr.reduce((prev, cur, index) => prev + cur, 0);

    return [sum, sum / arr.length];
}

function reportParks(p) {
    console.log('--------Parks Report---------');

    //Density
    p.forEach(el => el.treeDensity());

    //Average Age
    const ages = p.map(el => new Date().getFullYear() - el.buildYear);
    const [totalAge, avgAge] = calc(ages);
    console.log(`Our ${p.length} parks have an average of ${avgAge} years.`);

    //Which park has more than 1000 trees
    const i = p.map(el => el.numTrees).findIndex(el => el >= 1000);
    console.log(`${p[i].name} has more than 1000 trees.`);
}

function reportStreets(s) {
    console.log('--------Streets Report---------');

    //Total and average length of town streets
    const [totalLength, avgLength] = calc(s.map(el => el.length));
    console.log(`Our ${s.length} streets have a total length of ${totalLength} km, with and average of ${avgLength} km.`);
    // Classify sizes
    s.forEach(el => el.classifyStreet());
}

reportParks(allParks);
reportStreets(allStreets);
