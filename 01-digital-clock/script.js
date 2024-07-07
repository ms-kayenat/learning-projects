function showTime () {
	let date = new Date();
	let hours = date.getHours();
	let minutes = date.getMinutes();
	let seconds = date.getSeconds();

	let session = "AM";

	if (hours == 0) {
		hours = 12; //12 hours format
	}
	if (hours > 12) {
		hours = hours - 12;
		session = "PM"
	}

	//ternary operator

	hours = (hours < 10)? "0" + hours : hours;
	minutes = (minutes < 10)? "0" + minutes : minutes;
	seconds = (seconds < 10)? "0" + seconds : seconds;

	document.getElementById("digitalClock").innerHTML = hours + ":"  + minutes + ":" + seconds + " " + session; 
	
	// setTimeout(function call and miliseconds)
	setTimeout(showTime, 1000)
}
showTime();


//////// improved code by AI ///////////


// Function to display and update the digital clock
// function showTime() {
//     // Create a new Date object to get the current date and time
//     let date = new Date();

//     // Extract hours, minutes, and seconds from the Date object
//     let hours = date.getHours();
//     let minutes = date.getMinutes();
//     let seconds = date.getSeconds();

//     // Determine whether it's AM or PM
//     let session = hours < 12 ? "AM" : "PM";

//     // Convert hours to 12-hour format
//     hours = hours % 12;
//     hours = hours ? hours : 12; // If hours is 0, set it to 12

//     // Pad single digits with leading zeros
//     hours = hours < 10 ? "0" + hours : hours;
//     minutes = minutes < 10 ? "0" + minutes : minutes;
//     seconds = seconds < 10 ? "0" + seconds : seconds;

//     // Construct the formatted time string
//     let timeString = hours + ":" + minutes + ":" + seconds + " " + session;

//     // Display the formatted time in the digital clock element
//     document.getElementById("digitalClock").textContent = timeString;

//     // Update time every second
//     setTimeout(showTime, 1000);
// }

// // Initial call to start the clock when the page loads
// showTime();
