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
console.log(album +" is by "+ band);

console.log("Weezer Rulez OK!");

let a;
let b = "12345";
let c = 12344;
let d = true;
let e = {a:"JavaScript"};

let totalMembers = 4;
let membersWrittenSong = 1;
let membersNotWrittenSong = totalMembers - membersWrittenSong;

console.log("There are " + totalMembers + " in Weezer. " + membersWrittenSong + " wrote this song, which means " + membersNotWrittenSong + " didn't."); 