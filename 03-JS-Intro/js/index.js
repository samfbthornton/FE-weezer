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


let age = 100;
let result = age >= 50 ? "50 or over" : "Under 50";
console.log(result);