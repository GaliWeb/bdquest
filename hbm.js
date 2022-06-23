function enterPas1(){
	var pass = prompt ("Enter the password:");
	if (pass === null) {return;}
	if (pass === "Kitsune") {
		document.getElementById("second").style.display = "block";
		document.getElementById("b1").className = "disabled";
	}
	if (pass != "Kitsune") {
		pass = prompt ("The password is not correct. Try again:");
		if (pass === "Kitsune") {
		document.getElementById("second").style.display = "block";
		document.getElementById("b1").className = "disabled";
	}
	}

}

function enterPas2(){
	var pass = prompt ("Enter the password:");
	if (pass === null) {return;}
	if (pass === "DrunkenSailor") {
		document.getElementById("third").style.display = "block";
		document.getElementById("b2").className = "disabled";
	}
	if (pass != "DrunkenSailor") {
		pass = prompt ("The password is not correct. Try again:");
		if (pass === "DrunkenSailor") {
		document.getElementById("third").style.display = "block";
		document.getElementById("b2").className = "disabled";
	}
	}
}

function enterPas3(){
	var pass = prompt ("Enter the password:");
	if (pass === null) {return;}
	if (pass === "DareToTry") {
		document.getElementById("forth").style.display = "block";
		document.getElementById("b3").className = "disabled";
	}
	if (pass != "DareToTry") {
		pass = prompt ("The password is not correct. Try again:");
		if (pass === "DareToTry") {
		document.getElementById("forth").style.display = "block";
		document.getElementById("b3").className = "disabled";
	}
	}
}

function enterPas4(){
	var pass = prompt ("Enter the password:");
	if (pass === null) {return;}
	if (pass === "HappyBDay!") {
		document.getElementById("fifth").style.display = "block";
		document.getElementById("b4").className = "disabled";
	}
	if (pass != "HappyBDay!") {
		pass = prompt ("The password is not correct. Try again:");
		if (pass === "HappyBDay!") {
		document.getElementById("fifth").style.display = "block";
		document.getElementById("b4").className = "disabled";
	}
	}
}