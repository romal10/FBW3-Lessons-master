
// This is the array with the different words. The idea is to choose one of this word for the
// user to guess
var PROGRAMING_LANG = [
	"python",
	"javascript",
	"mongodb",
	"json",
	"java",
	"html",
	"css",
	"c",
	"csharp",
	"golang",
	"php",
	"sql",
	"ruby"
];


//This function use the math.random to generate a random number between 0 and 1. Then multiply it by the length of the array.
// and like this obtain a number between 0 and the length of the array. Finally math.floor to round this number. 
// With this we can choose a word by putting this number inside []. For example:
// Programing_lang[2] returns the element on position 2 that is 'mongodb'. remember that in javascript it start counting with 0. 
function randomWord() {
	return PROGRAMING_LANG[Math.floor(Math.random() * PROGRAMING_LANG.length)];
}

export { randomWord };
