/*
Use Javascript to determine whether the user visited other sites previous to yours.
If they did, and a Back button to your website.
*/
document.getElementById("history").addEventListener("click", function(){
   	var h = history.length;
   	console.log("You have visited " + h + " pages before this one.");
   	if (h > 1){
   		var btn = document.createElement("BUTTON");        // Create a <button> element
		var t = document.createTextNode("Click me to return the previous session");       // Create a text node
		btn.appendChild(t);                                // Append the text to <button>
		document.body.appendChild(btn);                    // Append <button> to <body>
		btn.addEventListener('click',window.history.back()); // Go back one screen if button is clicked
		// document.getElementById("BUTTON").addEventListener('click',window.history.back());  //Go back one screen
	}
});


/*
Create an HTML List (http://www.w3schools.com/tags/tag_ul.asp).
Ask the user for their to do items. Each time an item is given, add it to the list.
*/



