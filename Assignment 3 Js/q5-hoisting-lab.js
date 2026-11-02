"use strict";

console.log("=== Hoisting Lab ===");

console.log("Original score before assignment:", score);
announce();
var score = 50;

function announce() { console.log("Game started"); }
let status = "ready";
startGame();
function startGame() { console.log("Original status:", status); }

const fixedScore = 50;
const fixedStatus = "ready";
function fixedAnnounce() { console.log("Fixed game started; score:", fixedScore); }
function fixedStartGame() { console.log("Fixed status:", fixedStatus); }
fixedAnnounce();
fixedStartGame();

const arrowAnnounce = () => console.log("Arrow game started");
const arrowStartGame = () => console.log("Arrow status:", fixedStatus);
arrowAnnounce();
arrowStartGame();
