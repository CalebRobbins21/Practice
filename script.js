/***************************** 
* Variables and data types
var firstName = "Caleb";
var lastName = "Robbins";
var age = 28;
var fullAge = true;
var job; //undefined

console.log(firstName + " " + lastName + " is " + age + " years old!");
*/

/**********************
 * Variable mutation and type coercion
 

 var firstName = "John";
 var age = 28;
// Type coercion
 console.log(firstName + " " + age);

 var job, isMarried;
 job = "teacher";
 isMarried = false;

 console.log(firstName + " is a " + age + " year old " + job + ". Is he married? " + isMarried);

 // Variable mutation
 age = "Twenty eight";
job = "driver";

alert(firstName + " is a " + age + " year old " + job + ". Is he married? " + isMarried);

var lastName = prompt("What is his last name?");
console.log(firstName + " " + lastName);
*/

/*************************
 * Basic operators
 
var currentYear, yearJohn, yearCaleb;
currentYear = 2018;
ageJohn = 28;
ageCaleb = 22;

// Math operators
yearJohn = currentYear - ageJohn;
yearCaleb = currentYear - ageCaleb;


console.log(yearJohn);
console.log(currentYear + 2);
console.log(currentYear - 2);
console.log(currentYear * 2);
console.log(currentYear / 2);

// Logical operator
var johnOlder = ageJohn > ageCaleb;
console.log(johnOlder);

// Typeof Operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof "Mark is older than john");
*/

/*************************
 * Operator precedence
 
var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

// Multiple operators
var isFullAge = now - yearJohn >= fullAge;
console.log(isFullAge);

// Grouping
var ageJohn = now - yearJohn;
var ageCaleb = 22;
var average = (ageJohn + ageCaleb) / 2;
console.log(average);

// Multiple assignments
var x, y;
x = y = (3 + 5) * 4 - 6;
console.log(x, y);

// More operators
x *= 2; //x = x * 2;
console.log(x);
*/

/**********************
 * Coding Challenge #1

// Set values
var markHeight = 60;
var markMass = 87;
var johnHeight = 80;
var johnMass = 77;

// Calculate BMI
var markBMI = markMass / markHeight ^ 2;
var johnBMI = johnMass / johnHeight ^ 2;

// Compare BMI
var markHigher = markBMI > johnBMI;

//Print out solutions
console.log(markBMI);
console.log(johnBMI);
console.log("Is mark\'s BMI higher than John\'s? " + markHigher);
 */

 /********************
  * If / else statements
 

  var firstName = "John";
  var civilStatus = "single";
  var isMarried = true;

  if (isMarried){
    console.log(firstName + " is married!");
  } else {
      console.log(firstName + " isn\'t married");
  } 
  */

  /**************************
   * Boolean Logic
   

   var firstName = "John";
   var age = 25;

   if (age < 13){
       console.log(firstName + " is a boy.");
   } else if (age >= 13 && age < 20){
    console.log(firstName + " is a teenager.");
   } else if (age >= 20 && age < 30){
    console.log(firstName + " is a young man.");
   }  else {
     console.log(firstName + " is a man.");
   }
  */
   
  /******************************
   * Ternary Operator and Switch Statements
   

   var firstName = "John";
   var age = 16;
   // Ternary Operator
   age >= 18 ? console.log(firstName + " drinks beer.") : console.log(firstName + " drinks juice.");
  
   var drink = age >= 18 ? "beer" : "juice";
   console.log(drink);

   /*if (age >= 18){
       var drink = "beer";
   } else {
       var drink = "juice";
   }
   
   //Switch Statement
   var firstName = "john";
   var job = "driver";
   switch(job){
       case "teacher":
        console.log(firstName + " teaches kids how to code.");
       break;
       case "driver":
        console.log(firstName + " drives an uber car.");
       break;
       case "designer":
        console.log(firstName + " designs webpages");
       break;
       default:
        console.log("firstName" + " does something else.");
   }*/

   /*****************************
    * Truthy and Falsy values and equality operators
    
   // Falsy values: undefined, null, 0, "", NaN
   // Truthy values: Not falsy values

   var height = 23;

   if (height || height === 0){
       console.log("Variable is defined");
   } else {
       console.log("Variable is undefined");
   }

   //Equality operators
   if (height == "23"){
       console.log("The == operator does type coercion");
   }*/

   /****************************************
    * Coding Challenge #2
    

    var johnAverage = (200 + 200 + 100) / 3;
    var mikeAverage = (200 + 200 + 100) / 3;
    var maryAverage = (200 + 200 + 100) / 3;

    if (johnAverage > mikeAverage && johnAverage > maryAverage){
        console.log("John\'s team has the higher average with " + johnAverage + " points.");
    } else if (mikeAverage > johnAverage && mikeAverage > maryAverage){
        console.log("Mike\'s team has the higher average with " + mikeAverage + " points.");
    } else if (maryAverage > mikeAverage && maryAverage > johnAverage){
        console.log("Mary\'s team has the higher average with " + maryAverage + " points.");
    } else {
        console.log("All teams have the same average score with " + johnAverage + " points.")
    }
*/

/*************************************
 * Functions
 
 
 
 function calculateAge(birthYear){
     return 2018 - birthYear;
 }
var johnAge = calculateAge(1990);
var mikeAge = calculateAge(1992);
var calebAge = calculateAge(1996);
console.log(johnAge, mikeAge, calebAge);

function yearsUntilRetirement(birthYear, firstName){
    var age = calculateAge(birthYear);
    var retirement = 65 - age;

    if (retirement > 0){
         console.log(firstName + " retires in " + retirement + " years.");
    } else {
        console.log(firstName + " is already retired.");
    } 
}

yearsUntilRetirement(1996, "Caleb");
yearsUntilRetirement(1990, "Mike");
yearsUntilRetirement(1980, "John");
*/

/******************************************
 * Function Statements and Expressions
 

 //Function Declaration
// function whatDoYouDo(job, firstName){

 //}
 //Function Expression
 var whatDoYouDo = function (job, firstName){
    switch(job){
        case "teacher":
            return firstName + " teaches kids how to code.";
        case "driver":
            return firstName + " drives an uber in New York.";
        case "designer":
            return firstName + " designs websites.";
        default:
            return firstName + " does something else.";
    }
 }

 console.log(whatDoYouDo("teacher", "John"));
 console.log(whatDoYouDo("designer", "Caleb"));
 console.log(whatDoYouDo("driver", "Mike"));
 */

 /***************************************
  * Arrays
  

  var names = ["Caleb", "John", "Mark", "Jane"];
  var years = new Array(1990, 1969, 1948, 1996);

  for (var i = 0; i < names.length; i++){
      console.log(names[i]);
  }

  // Different Data Types
  var john = ["john", "smith", 1990, "teacher", false];

  john.push("blue");//Adds to end of array
  john.unshift("Mr."); //Adds to start of array
  john.pop();//Removes last item of array
  john.shift();//Removes first item of array
  console.log(john);

  console.log(john.indexOf(1990));
 var isDesigner = john.indexOf("designer") === -1 ? "John is not a designer" : "John is a designer";

 console.log(isDesigner);*/

 /*************************************
  * Coding Challenge #3
  

  //Declare arrays
  var billAmount = [124, 48, 268];
  var tipArray = [];
  var totalBillArray = [];

  //Call function and push onto arrays
  tipCalculator(billAmount[0]);
  tipArray.push(tipAmount);
  totalBillArray.push(totalBillAmount);

  tipCalculator(billAmount[1]);
  tipArray.push(tipAmount);
  totalBillArray.push(totalBillAmount);

  tipCalculator(billAmount[2]);
  tipArray.push(tipAmount);
  totalBillArray.push(totalBillAmount);
  
  //Print out the tips and total bills
  console.log("John tipped " + tipArray[0] + " " + tipArray[1] + " " + tipArray[2] + " dollars for all three meals");

  console.log("In total, John payed " + totalBillArray[0] + " " + totalBillArray[1] + " " + totalBillArray[2] + " in total for all three meals." );
  
  function tipCalculator(billAmount){
    if (billAmount < 50){
          tipAmount = billAmount * .2;
      } else if(billAmount >= 50 && billAmount <= 200){
          tipAmount = billAmount * .15;
      } else {
          tipAmount = billAmount * .1;
      }
      totalBillAmount = billAmount + tipAmount;
      return totalBillAmount, tipAmount;
  }
*/

/***********************************************
 * Objects and Properties
 
// object literal
 var john = {
     firstName: 'John',
     lastName: 'Smith',
     birthYear: 1990,
     family: ['Jane', 'Mark', 'Bob', 'Emily'],
     job: 'teacher',
     isMarried: false,
 };
 console.log(john.firstName);
 console.log(john['lastName']);
 var x = 'birthYear';
 console.log(john[x]);
 john.job = 'designer';
 john['isMarried'] = true;

 // new Object syntax
 var jane = new Object();
 jane.name = 'jane';
 jane.birthYear = 1969;
 jane['lastName'] = 'smith';

 console.log(jane);
*/

/*****************************************
 * Objects and methods
 

var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1992,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false,
    calcAge: function(birthYear){
        this.age = 2018 - this.birthYear;
    }
};

john.calcAge();
console.log(john);
*/

/*********************
 * Coding Challence #4
 

 var mark = {
     firstName: 'Mark',
     lastName: 'Robbins',
     weight: 120,
     height: 2.1,
     calcBMI: function(){
        this.bmi = this.weight / (this.height * this.height)
        return this.bmi;
     }
 };
console.log(mark);
var john = {
    firstName: 'John',
    lastName: 'Robbins',
    weight: 95,
    height: 1.65,
    calcBMI: function(){
       this.bmi = this.weight / (this.height * this.height)
       return this.bmi;
    }
};

john.calcBMI();
mark.calcBMI();
console.log(john, mark);
*/
/**********************************************************
 * Loops and Iteration
 

for (var i = 0; i < 10; i++){
    console.log(i);
}

var caleb = ['Caleb', 'Robbins', 1996, 'developer', false];

for (var i = 0; i < caleb.length; i++){
    console.log(caleb[i]);
}

//While loop
var i = 0;
while (i < caleb.length){
    console.log(caleb[i]);
    i++;
}



//continue and break statements
var caleb = ['Caleb', 'Robbins', 1996, 'developer', false];

//Iterates the counter but doesnt print if its not a string
for (var i = 0; i < caleb.length; i++){
    if(typeof caleb[i] !== 'string') continue;
    console.log(caleb[i]);
}

//Exits the loop
for (var i = 0; i < caleb.length; i++){
    if(typeof caleb[i] !== 'string') break;
    console.log(caleb[i]);
}
*/

/*****************************************
 * Coding Challenge #5
  */

 var john = {
     name: 'John',
     originalBill: [124, 48, 268, 180, 42],
     calculateBill: function (){
         this.tips = [];
         this.finalValues = [];
         for (i = 0; i < this.originalBill.length; i++){
             var percentage;
             var bill = this.originalBill[i];  

             if (bill < 50){
                 percentage = .2;
             }else if (bill >= 50 && bill < 200){
                 percentage = .15;
             }else {
                 percentage = .1;
             }

             this.tips[i] = bill * percentage;
             this.finalValues[i] = bill + bill * percentage;
         }
     }
 }

 john.calculateBill();
 console.log(john);
