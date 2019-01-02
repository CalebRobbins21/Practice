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