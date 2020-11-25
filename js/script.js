/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

/*******************************************************************************
 * NOTE TO THE REVIEWER
 *
 * Hello! I am trying for the "Exceeds Expectations" grade on this project.
 *
 * In commenting the code, I have tried to adhere to the standards of JSdoc:
 * https://jsdoc.app/index.html#block-tags
 *
 * I have tested the below code in the following web browsers:
 * 		- Google Chrome
 * 		- Mozilla Firefox
 * 		- Microsoft Edge
 *
*******************************************************************************/

/*******************************************************************************
 * CONSTANT DECLARATIONS
*******************************************************************************/

/**
 * @constant
 * @type {Object[]}
 */
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


/**
 * @constant
 * @type {string[]}
 */
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

/*******************************************************************************
 * FUNCTION DECLARATIONS
*******************************************************************************/

/**
 * Picks a random quote object.
 * @function
 * @name getRandomQuote
 * @param {Object[]} quoteArray - An array of quote objects
 * @returns {Object} - A quote object
 */
function getRandomQuote(quoteArray) {
	let index = getRandomInt(0, quoteArray.length);
	return quoteArray[index];
}


/**
 * Picks a random color name string.
 * @function
 * @name getRandomColor
 * @param {string[]} colorArray - An array of strings containing color names
 * @returns {string} - A color name string
 */
function getRandomColor(colorArray) {
	let index = getRandomInt(0, colorArray.length);
	return colorArray[index];
}


/**
 * Returns a random integer between the range of 'min' and 'max - 1'
 * @function
 * @name getRandomInt
 * @param {number} min - The lowerbound of the range
 * @param {number} max - The number used to set the upperbound
 * @returns {number} - An integer
 * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random}
 */
function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min) + min);
}


/**
 * Builds a quote string and writes it to the 'quote-box' inner HTML
 * @function
 * @name printQuote
 */
function printQuote() {
	// Get the random quote object and color name
	let quoteObj = getRandomQuote(QUOTES);
	let randomColor = getRandomColor(COLORS);

	// Use the returned quote object to build the basic HTML string
	let quoteStr = `<p class="quote">${quoteObj.quote}</p>` + 
								 `<p class="source">${quoteObj.source}`;

	// Build additional HTML <span> tag strings with remaining quote object
		// properties
	for (let prop in quoteObj) {
		if (!(prop == "quote" || prop == "source")) {
			console.log(prop);
			if (prop) {
				quoteStr += `<span class="${prop}"> ${quoteObj[prop]}</span>`;
			}
		}
	}

	// Close the HTML string
	quoteStr += '</p>';

	// Sets the background color and inner HTML
	document.body.style.backgroundColor = randomColor;
  document.getElementById('quote-box').innerHTML = quoteStr;
}


/*******************************************************************************
 * EVENT LISTENERS AND INTERVALS
*******************************************************************************/
/**
 * {@link https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Timeouts_and_intervals}
 */
const autoChange = setInterval(printQuote, 10000);

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/
document.getElementById('load-quote').addEventListener("click", printQuote, false);

