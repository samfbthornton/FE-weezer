"use strict";

console.log("Yo");

let i = 12;
console.log(i);
i = true;
console.log(i);
i = ['a', 'b', 'c'];
console.log(i);

function add(a, b) {
    console.log("ADD");
    return a + b;
}

let band = "Weezer";
let album = "The Red Album";
console.log(`${album} is by ${band}`);

console.log("Weezer Rulez OK!");

let a;
let b = "12345";
let c = 12344;
let d = true;
let e = { a: "JavaScript" };

let totalMembers = 4;
let membersWrittenSong = 1;
let membersNotWrittenSong = totalMembers - membersWrittenSong;

console.log(`There are ${totalMembers} in Weezer. ${membersWrittenSong} wrote this song, which means ${membersNotWrittenSong} didn't.`);

//loops
for (let f = 100; f < 201; f++) {
    console.log(`f = ${f}`);
}

for (let g = 100; g <= 200; g++) {
    if (g % 2 == 0) {
        console.log(`*`);
    } else {
        console.log(`+`);
    }
}

for (let h = 0; h < 10; h++) {
    for (let j = 1; j <= 10; j++) {
        console.log(j);
    }
}

//switch case
let now = new Date();
let day = now.getDay();
switch (day) {
    case 0:
        console.log("It's Sunday");
        break;
    case 1:
        console.log("It's Monday");
        break;
    case 2:
        console.log("It's Tuesday");
        break;
    case 3:
        console.log("It's Wednesday");
        break;
    case 4:
        console.log("It's Thursday");
        break;
    case 5:
        console.log("It's Friday");
        break;
    case 6:
        console.log("It's Saturday");
        break;
    default:
        console.log("Errr... You ain't The Beatles!");
}

let strictA = true;
let strictB = 1;
console.log(strictA == strictB);
console.log(strictA === strictB);
console.log(strictA != strictB);
console.log(strictA !== strictB);

let age = 10;

if (age >= 18 && age <= 65) {
  console.log("Age is in range");
} else if (age < 18) {
  console.log("Underage");
} else {
  console.log("Catch all else");
}

let newAge = 100;
let result = newAge >= 50 ? "50 or over" : "Under 50";
console.log(result);

let person = [{name:"Samuel", age:38, gender:"Male", height:173, weigh:70}];

console.log(person);

for (let p = 0; p < person.length; p++) {
    for (let key in person[p]) {
        console.log(`${key} : ${person[p][key]}`);
    }
}

let darthVader = {
    allegiance: "Empire",
    weapon: "lightsaber",
    sith: true
};

console.log(darthVader);

console.log(`Darth Vader's allegiance is to the ${darthVader.allegiance}`);
console.log(`Darth Vader's weapon of choice is a ${darthVader.weapon}`);
console.log(`Darth Vader is a sith? ${darthVader.sith}`);
console.log(`Darth Vader is a Jedi? ${darthVader.sith ? "false" : "true"}`);

//1.
let myArray = ["hello",'everyone'];
//2.
 console.log(myArray.length);
//3.
 myArray.push("goodbye");
//4.
 console.log(myArray.length);
//5.
 myArray.shift();
//6.
 for(let eachElement of myArray) {
     console.log(eachElement);
 }

 //scope
 function submit() {
     let x = "wee";
     if (x = "wee") {
         let y = "zer";
         console.log(y); //works
     }
     console.log(x); //works
     //console.log(y); //doesn't work - outside brackets
 }
 submit();

 //functions
 function minus(min1,min2){
     return min1 - min2;
 }
 console.log(minus(34,7));

 //function expression
 const welcome = function(me, age, gender) {

    return console.log(`My name is ${me}, I am ${age} years old and ${gender}`);
 }

 welcome("Sam", 38, "male");

//lambdas
let powerUp = (n1, n2) => (n1**n2);

console.log(powerUp(7,3));

//filtering evens
const nums = [1,2,3,4,5,6,7,8,9,10];

const isEven = num => num % 2 === 0;

const evenNums = nums.filter(isEven);

console.log(evenNums);

//map
const sqr = num => num * num;

const sqrNums = nums.map(sqr);

console.log(sqrNums);

//grades example

let grades = [
    {name: 'John', grade: 8, sex: 'M'},
    {name: 'Sarah', grade: 12, sex: 'F'},
    {name: 'Bob', grade: 16, sex: 'M'},
    {name: 'Johnny', grade: 2, sex: 'M'},
    {name: 'Cyrus', grade: 4, sex: 'M'},
    {name: 'Paula', grade: 18, sex: 'F'},
    {name: 'Jeff', grade: 5, sex: 'M'},
    {name: 'Jennifer', grade: 13, sex: 'F'},
    {name: 'Courtney', grade: 15, sex: 'F'},
    {name: 'Jane', grade: 9, sex: 'F'}
]

let isBoy = student => student.sex === "M";
let isGirl = student => student.sex === "F";

let getBoys = grades => (grades.filter(isBoy));
let getGirls = grades => (grades.filter(isGirl));

let average = grades => (grades.reduce((acc,curr) => (acc + curr.grade), 0) / grades.length);

let maxGrade = grades => (Math.max(...grades.map(student => student.grade)));
let minGrade = grades => (Math.min(...grades.map(student => student.grade)));

//questions
console.log(grades);
let highestGrade = maxGrade(grades);
console.log(`The top grade was: ${highestGrade}/20`);
let lowestGrade = minGrade(grades);
console.log(`The bottom grade was: ${lowestGrade}/20`);
let highestGradeBoys = maxGrade(getBoys(grades));
console.log(`The top Boys' grade was : ${highestGradeBoys}/20`);
let highestGradeGirls = maxGrade(getGirls(grades));
console.log(`The top Girls' grade was: ${highestGradeGirls}/20`);
let lowestGradeBoys = minGrade(getBoys(grades));
console.log(`The bottom Boys' grade was: ${lowestGradeBoys}/20`);
let lowestGradeGirls = minGrade(getGirls(grades));
console.log(`The bottom Girls' grade was: ${lowestGradeGirls}/20`);

let averageGrade = average(grades);
console.log(`The average grade was: ${averageGrade}/20`);
let averageGradeBoys = average(getBoys(grades));
console.log(`The average Boys' grade was: ${averageGradeBoys}/20`);
let averageGradeGirls = average(getGirls(grades));
console.log(`The average Girls' grade was: ${averageGradeGirls}/20`);