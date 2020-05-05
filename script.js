let cd = document.getElementById("countdown");
let endDate = new Date("May 10, 2020 17:00:00");

let startedLooking = new Date("January 1, 2020 00:00:00");


function counter() {
	//let startDate = new Date();
	let today = new Date();
	console.log("today" + today);
	console.log("started" + startedLooking);
	let timeLeft = today - startedLooking;
	let sec = timeLeft/1000; 
	sec = parseInt(sec);
	cd.textContent = sec.toLocaleString();
}
let myCountDown = setInterval(counter, 1000);
