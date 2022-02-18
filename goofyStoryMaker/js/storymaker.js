// Assignment 1 | COMP1073 Client-Side JavaScript

/* Global variables
-------------------------------------------------- */
// Buttons
const btnNoun1 = document.getElementById("noun1");
const btnVerb = document.getElementById("verb");
const btnAdjective = document.getElementById("adjective");
const btnNoun2 = document.getElementById("noun2");
const btnSetting = document.getElementById("setting");

const btnPlayback = document.getElementById("playback");
const btnRdPlayback = document.getElementById("rdPlayback");
const btnReset = document.getElementById("reset");
const btnAudio = document.getElementById("audio");

// Paragraphs for output
const paraNoun1 = document.getElementById("selectedNoun1");
const paraVerb = document.getElementById("selectedVerb");
const paraAdjective = document.getElementById("selectedAdjective");
const paraNoun2 = document.getElementById("selectedNoun2");
const paraSetting = document.getElementById("selectedSetting");

const paraStory = document.getElementById("story");

// Word lists
const noun1 = [
  "The turkey",
  "Mom",
  "Dad",
  "The dog",
  "My teacher",
  "The elephant",
  "The cat",
];
const verb = ["sat on", "ate", "danced with", "saw", "doesn't like", "kissed"];
const adjective = [
  "a funny",
  "a scary",
  "a goofy",
  "a slimy",
  "a barking",
  "a fat",
];
const noun2 = ["goat", "monkey", "fish", "cow", "frog", "bug", "worm"];
const setting = [
  "on the moon",
  "on the chair",
  "in my spaghetti",
  "in my soup",
  "on the grass",
  "in my shoes",
];

// Variables to store selected word/phrase
var story = "";

/* Functions
-------------------------------------------------- */
// Set the noun
var counter = 0;
function getNoun1() {
  let selectedNoun1 = [];
  if (counter < noun1.length) {
    selectedNoun1.push(noun1[counter]);
  }
  paraNoun1.textContent = selectedNoun1;
  selectedNoun1 = [];
  counter++;
  if (counter == noun1.length) {
    counter = 0;
  }
}

// Set the verb
function getVerb() {
  let selectedVerb = [];
  if (counter < verb.length) {
    selectedVerb.push(verb[counter++]);
  }
  paraVerb.textContent = selectedVerb;
  selectedVerb = [];
  if (counter == verb.length) {
    counter = 0;
  }
}

// Set the adjective
function getAdjective() {
  let selectedAdjective = [];
  if (counter < adjective.length) {
    selectedAdjective.push(adjective[counter++]);
  }
  paraAdjective.textContent = selectedAdjective;
  selectedAdjective = [];
  if (counter == adjective.length) {
    counter = 0;
  }
}

// Set the second noun
function getNoun2() {
  let selectedNoun2 = [];
  if (counter < noun2.length) {
    selectedNoun2.push(noun2[counter++]);
  }
  paraNoun2.textContent = selectedNoun2;
  selectedNoun2 = [];
  if (counter == noun2.length) {
    counter = 0;
  }
}

// Set the setting for the story
function getSetting() {
  let selectedSetting = [];
  if (counter < setting.length) {
    selectedSetting.push(setting[counter++]);
  }
  paraSetting.textContent = selectedSetting;
  selectedSetting = [];
  if (counter == setting.length) {
    counter = 0;
  }
}

// Output the completed sentence to the display paragraph
let sentence = [];
function playback() {
  sentence.push(
    selectedNoun1.textContent,
    selectedVerb.textContent,
    selectedAdjective.textContent,
    selectedNoun2.textContent,
    selectedSetting.textContent
  );
  paraStory.textContent = sentence.join(" ");
  sentence = [];
}

// Output the completed random sentence to the display paragraph

// Random number function for 'Surprise Me' button
let rdSentence = [];
function rdPlayback() {
  rdSentence += noun1[Math.floor(Math.random() * noun1.length)] + " ";
  rdSentence += verb[Math.floor(Math.random() * verb.length)] + " ";
  rdSentence += adjective[Math.floor(Math.random() * adjective.length)] + " ";
  rdSentence += noun2[Math.floor(Math.random() * noun2.length)] + " ";
  rdSentence += setting[Math.floor(Math.random() * setting.length)] + " ";
  paraStory.textContent = rdSentence;
  rdSentence = [];
}

//Reset Button
function reset() {
  paraNoun1.textContent = "";
  paraVerb.textContent = "";
  paraAdjective.textContent = "";
  paraNoun2.textContent = "";
  paraSetting.textContent = "";
  paraStory.textContent = "";
}

//audio
function playAudio() {
  var msg = new SpeechSynthesisUtterance();
  msg.volume = 1; // From 0 to 1
  msg.rate = 1; // From 0.1 to 10
  msg.pitch = 1.7; // From 0 to 2
  msg.lang = "en";
  msg.text = paraStory.textContent;
  window.speechSynthesis.speak(msg);
}

/* Event handlers
-------------------------------------------------- */
btnSetting.addEventListener("click", getSetting);
btnPlayback.addEventListener("click", playback);
btnRdPlayback.addEventListener("click", rdPlayback);
btnNoun1.addEventListener("click", getNoun1);
btnVerb.addEventListener("click", getVerb);
btnAdjective.addEventListener("click", getAdjective);
btnNoun2.addEventListener("click", getNoun2);
btnReset.addEventListener("click", reset);
btnAudio.addEventListener("click", playAudio);
