/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
const QUOTES = [
	{
		"quote": "When you are struggling to follow the book, do not jump to any " +
						 "conclusions about your own capabilities. You are fine -- you " + 
						 "just need to keep at it.",
		"source": "Marijn Haverbeke",
		"person-or-character": "[Person]",
		"citation": "Eloquent JavaScript, 3rd Edition",
		"year": "2019"
	},
	{
		"quote": "Every great developer you know got there by solving problems " +
						 "they were unqualified to sovle until they actually did it.",
		"source": "Patrick McKenzie",
		"person-or-character": "",
		"citation": "Twitter",
		"year": "2016"
	},
	{
		"quote": "Criticism is futile because it puts a person on the defensive " + 
						 "and usually makes him strive to justify himself.",
		"source": "Dale Carnegie",
		"person-or-character": "[Person]",
		"citation": "How to Win Friends & Influence People",
		"year": "1936"
	},
	{
		"quote": "No man is invincible, and therefore no man can fully " +
						 "understand that which would make him invincible.",
		"source": "Miyamoto Musashi",
		"person-or-character": "[Person]",
		"citation": "Book of Five Rings",
		"year": "1643"
	},
	{
		"quote": "Arithmetic is just like any other craft; you can get good at it " + 
						 "if you want to, but it is no big deal either way.",
		"source": "Paul Lockhart",
		"person-or-character": "[Person]",
		"citation": "Arithmetic",
		"year": "2017"
	},
	{
		"quote": "Choose Life.",
		"source": "Mark Renton",
		"person-or-character": "[Character]",
		"citation": "Trainspotting",
		"year": "1996"
	},

];

const COLORS = [
	"red", 
	"blue", 
	"purple", 
	"yellow", 
	"gold", 
	"lightblue", 
	"pink", 
	"darkblue", 
	"lightgreen", 
	"brown"
];

/***
 * `getRandomQuote` function
***/
function getRandomQuote(quoteArray) {
// This function takes an 'quoteArray', and returns a reference to random 
// 'quoteObject'.
//
// This function calls the 'getRandomInt' function to return a random index
// based on the 'length' of the passed 'quoteArray'.

	let index = getRandomInt(0, quoteArray.length);
	return quoteArray[index]; // <-- RETURNS AN OBJECT
}


function getRandomColor(colorArray) {
	let index = getRandomInt(0, colorArray.length);
	return colorArray[index]; // <-- RETURNS A STRING
}


function getRandomInt(min, max) {
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
// This function is 'max' exclusive, and returns an integer between 'min' and 'max - 1'
// (perfect for array indices ;-] ).

	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min) + min); // <-- RETURNS INTEGER
}


/***
 * `printQuote` function
***/
function printQuote() {
// Call the 'getRandomQuote' function
	let quoteObj = getRandomQuote(QUOTES);
	let randomColor = getRandomColor(COLORS);

// Use the returned quote object to build a string of HTML and quote properties
	let quoteStr = `<p class="quote">${quoteObj.quote}</p>` + 
								 `<p class="source">${quoteObj.source}`;

	for (let prop in quoteObj) {
		if (!(prop == "quote" || prop == "source")) {
			console.log(prop);
			if (prop) {
				quoteStr += `<span class="${prop}"> ${quoteObj[prop]}</span>`;
			}
		}
	}

	quoteStr += '</p>';
	console.log(quoteStr);

// Use that string to display a random quote in the browswer
	document.body.style.backgroundColor = randomColor;
  document.getElementById('quote-box').innerHTML = quoteStr;
}

// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Timeouts_and_intervals
const autoChange = setInterval(printQuote, 15000);

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/
document.getElementById('load-quote').addEventListener("click", printQuote, false);
