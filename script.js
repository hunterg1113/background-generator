var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomBtn = document.querySelector(".randomBtn");

function setGradient() {
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	css.textContent = body.style.background + ";";
}

function generateRandomGradient() {
	var res = "#";

	for(var i = 0; i < 3; i++) {
		var hex = (Math.floor(Math.random() * 256)).toString(16);
		if(hex.length === 1) hex = "0" + hex;
		res += hex;
	}

	return res;
}

setGradient();

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
randomBtn.addEventListener("click", function() {
	color1.value = generateRandomGradient();
	color2.value = generateRandomGradient();
	setGradient();
});