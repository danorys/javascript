/*
Create a popup window displaying your favorite website, initializing it at 10px from the top left of the user's screen.
Size it 100px x 100px.
Move it to the center of the current screen.
Resize the window to the largest size available on the screen.
Give the popup window focus.
*/
var myWindow = window.open("http://www.w3schools.com", "MsgWindow", "width=200", "height=100");
var w = myWindow.innerWidth;
var h = myWindow.innerHeight;
myWindow.moveTo(w/2,h/2);
myWindow.focus;

/*
Write a function that determines whether your popup window was closed by the user. 
The function shall log the status of the popup ("open" vs "closed") to the console.
Test the function by invoking when the popup is closed/open.
*/
function checkWin() {
    if (!myWindow) {
        document.getElementById("msg").innerHTML = "'myWindow' has never been opened!";
    } else {
          if (myWindow.closed) { 
              document.getElementById("msg").innerHTML = "'myWindow' has been closed!";
          } else {
              document.getElementById("msg").innerHTML = "'myWindow' has not been closed!";
          }
    } 
}

/*
Create an Interval that console.logs the current time every 5 seconds.
*/


while(true){
	setTimeout(console.log(Date.getUTCHours() + ":" + Date.getUTCMinutes()), 5000);
}


/*
Query the user for their age. 
If they are 21 or over, redirect them to your favorite brewery. 
If they are under 21, redirect them to the Disney website.
*/


var age = prompt("How old are you?");
	if(age > 20) {
	    window.open("http://www.w3schools.com", "MsgWindow", "width=200", "height=100");
	} else {
		window.open("http://www.disney.com", "MsgWindow", "width=200", "height=100");
	} 
}


/*
Write a mobile redirection script.
If the available screen size is less than 320px (based on http://screensiz.es/phone), ask them if they would like
to view the mobile version of the site. 
If they confirm, redirect them to index-mobile.html.
Otherwise, land them on the standard index.html
*/


if (screen.width < 320px) {
	if (confirm("Would you like to see a version of this site designed for devices like yours?")) {
		var mywindow = window.open("index-mobile.html");
	}
} else {
	var mywindow = window.open("index.html");

}

