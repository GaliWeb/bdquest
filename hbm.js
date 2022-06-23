function enterPas1(){
	var pass = prompt ("Enter the password:");
	if (pass === null) {return;}
	if (pass === "Kitsune") {
		document.getElementById("second").style.display = "block";
		document.getElementById("b1").className = "disabled";
	}
	else return;

}

function enterPas2(){
	var pass = prompt ("Enter the password:");
	if (pass === null) {return;}
	if (pass === "DrunkenSailor") {
		document.getElementById("third").style.display = "block";
		document.getElementById("b2").className = "disabled";
	}
		else return;
}

function enterPas3(){
	var pass = prompt ("Enter the password:");
	if (pass === null) {return;}
	if (pass === "DareToTry") {
		document.getElementById("forth").style.display = "block";
		document.getElementById("b3").className = "disabled";
	}
		else return;
}

function enterPas4(){
	var pass = prompt ("Enter the password:");
	if (pass === null) {return;}
	if (pass === "HappyBDay!") {
		document.getElementById("fifth").style.display = "block";
		document.getElementById("b4").className = "disabled";
	}
		else return;
}