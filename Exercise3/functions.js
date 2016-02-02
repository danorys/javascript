/*
The Fortune Teller part 2
Why pay a fortune teller when you can just program your fortune yourself?
Write a function named tellFortune that:
- takes 4 arguments: number of children, partner's name, geographic location, job title.
- outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
- Call that function 3 times with 3 different values for the arguments.
*/

document.getElementById("teller").addEventListener("click", function(){
	console.log("Executing The Fortune Teller Part 2");
	function forture(offspring,spouse,city,position){
		// var offspring = 10;
		// var spouse = "Sue";
		//var city = "Bermuda";
		// var position = "Mayor";
		return("You will be a " + position + " in " + city  + ", and married to " + spouse + " with " + offspring + " kids.");
	}
	console.log(fortune(10,Sue,Bermuda,Mayor));
	console.log(fortune(2,Amy,Brisbane,Attorney));
	console.log(fortune(7,Lesley,Boca Raton,Rat Catcher));
}

/*
The Age Calculator part 2
Forgot how old you are? Calculate it!
Write a function named calculateAge that:
- takes 2 arguments: birth year, current year.
- calculates the 2 possible ages based on those years.
- outputs the result to the screen like so: "You are either NN or NN"
- Call the function three times with different sets of values.
- Bonus: Figure out how to get the current year in JavaScript instead of passing it in.
*/

document.getElementById("age").addEventListener("click", function(){
	console.log("Execute The Age Calculator Part 2");

	function calculateAge (today,birth) {
		return(Math.floor((today - birth)/(1000*60*60*24*365)));
	}

	var birth = function(){
		var bdate = prompt("Enter the date of your birth (1-31): ", "17");
		var bmonth = prompt("Enter the month of your birth (1-12): ", "10");
		bmonth += 1;
		var byear = prompt("Enter the year of your birth: ", "1956");
		return (new Date(byear, bmonth, bdate));
	}
	
	var today = newDate();
	for(i=0;i<3;i++ ){
		calculateAge(today,birth());
	}

}

/*
The Lifetime Supply Calculator part 2
Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!
Write a function named calculateSupply that:
- takes 2 arguments: age, amount per day.
- calculates the amount consumed for rest of the life (based on a constant max age).
- outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
- Call that function three times, passing in different values each time.
- Bonus: Accept floating point values for amount per day, and round the result to a round number.
*/

document.getElementById("lifetime").addEventListener("click", function(){
	console.log("Execute The Lifefime Supply Calculator Part 2");

	function calculateSupply(age, amount){
		var age = age/(1000*60*60*24); // convert age in years to days
		var max = 100 * 365; // days if you live to be one hundred
		var days = max - age; // remaining days of your life
		var rate = 1; // pound of cheese (or Cheetos) per day
		alert("You will need " + (rate * days) + " pounds of cheese to last you until the ripe old age of " + max/(365) + ".");
	}

	/* function to return your age */
	var age = function(){
		var bdate = prompt("Enter the date of your birth (1-31): ", "17");
		var bmonth = prompt("Enter the month of your birth (1-12): ", "10");
		bmonth += 1;
		var byear = prompt("Enter the year of your birth: ", "1956");
		var birth = new Date(byear, bmonth, bdate);

		return(Math.floor(today - birth)); // return age in years
	}
	today = new Date();
	// alert("Today's date is " + today);

	
}
/*
The Geometrizer part 2
Create 2 functions that calculate properties of a circle, using the definitions here:
http://math2.org/math/geometry/circles.htm
Create a function called calcCircumfrence:
- Pass the radius to the function.
- Calculate the circumference based on the radius, and output "The circumference is NN".
Create a function called calcArea:
- Pass the radius to the function.
- Calculate the area based on the radius, and output "The area is NN".
*/

document.getElementById("geometrizer").addEventListener("click", function(){
	console.log("Execute The Geometrizer Part 2");
		
	function calcCircumfrence(r){
		var c = 2*Math.PI*r);
		console.log("The circumference is " + c + " units.");
	}

	function calcArea(r){
		var a = math.PI * r / 2;
		alert ("The area is: " + a + " units squared.")
	}

}

/*
The Temperature Converter part 2
It's hot out! Let's make a converter based on the steps here:
http://www.mathsisfun.com/temperature-conversion.html
Create a function called celsiusToFahrenheit:
- Store a celsius temperature into a variable.
- Convert it to fahrenheit and output "NN°C is NN°F".
Create a function called fahrenheitToCelsius:
- Now store a fahrenheit temperature into a variable.
- Convert it to celsius and output "NN°F is NN°C."
*/

document.getElementById("temperature).addEventListener("click", function(){
 
	function celsiusToFahrenheit(c){
	 		return((c*9/5)+32);
	}	
	var f = prompt("Enter the fahrenheit temperature when you want converted to Celcius", "100");
	console.log(10 + "\u2103 is " + celsiusToFahrenheit(c) + "\u2109.");

	function fahrenheitToCelcius(f){
		var c = (f-32)*5/9;
		return(f + "\u2109 is " + c + "\u2103.");	
	}
