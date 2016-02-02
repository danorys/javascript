/*
What number's bigger?
Write a function named greaterNum that:
- takes 2 arguments, both numbers.
- returns whichever number is the greater (higher) number.
Call that function 2 times with different number pairs,
and log the output to make sure it works (e.g. "The greater number of 5 and 10 is 10.").
*/

console.log("You have entered controlflow.js");
function greaterNum(firstnum, secondnum){
	if (firstnum > secondnum){
		console.log("The greater number of " + firstnum + " and " + secondnum + " is " + firstnum + ".");
	} else if (firstnum < secondnum) {
		console.log("The greater number of " + firstnum + " and " + secondnum + " is " + secondnum + ".");
	} else {
		console.log(firstnum + " and " + secondnum + " are equal.");
	}
}
greaterNum(15,10);

/*
The World Translator
Write a function named helloWorld that:
- takes 1 argument, a language code (e.g. "es", "de", "en")
- returns "Hello, World" for the given language, for at least 3 languages.
  It should default to returning English.
Call that function for each of the supported languages
and log the result to make sure it works.
*/

function helloWorld(language){
	switch (language) {
		case "es": 
			console.log("Hola todo mundo");
			break;
		case "de":
			console.log("<hellow word in german");
			break;
		case "en":
			console.log("Hello earthlings");
			break;	
		default: 
			alert("Reload the page and try again");
	}
}

helloWorld(es);

/*
The Grade Assigner
Write a function named assignGrade that:
- takes 1 argument, a number score.
- returns a grade for the score, either "A", "B", "C", "D", or "F".
Call that function for a few different scores and log the result to make sure it works.
*/

function assignGrade(score){
	if (score > 89) {
		return "A";
	}
	else if (score > 79) {
		return "B";
	}
	else if (score > 69) {
		return "C";
	}	
	else if (score > 59) {
		return "D";
	}
	else {
		return "F";
	}
}

console.log ("Your grade is " + assignGrade (90));

/*
The Pluralizer
Write a function named pluralize that:
- takes 2 arguments, a noun and a number.
- returns the number and pluralized form, like "5 cats" or "1 dog".
Call that function for a few different scores and log the result to make sure it works.
- Bonus: Make it handle a few collective nouns like "sheep" and "geese".
*/

function pluralize (animal, quantity) {
	switch(animal) {
	case "dog":
		if (quantity) {
			console.log("1 dog");
		} else {
			console.log(quantity + "dogs");
		}
		break;
	case "cat":
		if (quantity) {
			console.log("1 cat");
		} else {
			console.log(quantity + "cats");
		}
		break;	
	case "sheep":
		console.log(quantity + "dogs");
		break;
	case "goose":
		if (quantity) {
			console.log("1 goose");
		} else {
			console.log(quantity + "geese");
		}
		break;
	default: 
		console.log("You need to enter both a quantity and animal.")	
	}
}

/*
The even/odd reporter
- Write a for loop that will iterate from 0 to 20.
- For each iteration, it will check if the current number is even or odd,
  and report that to the screen (e.g. "2 is even").
*/

while (i=0;i<21;i++){
	console.log(i + " is " i%2:"even":"odd");
}




