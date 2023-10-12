// Checking if set up correctly
console.log("Hello world!");

// creating a funcion which will run when we click our "convert" button
function convert() {
	// creating a variable to store the number which the user inputs.
	const inputValue = parseFloat(document.getElementById("input").value);
	// creating a variable to store which "from" dropdown is selected
	const fromUnit = document.getElementById("from").value;
	// creating a variable to store which "to" dropdown is selected
	const toUnit = document.getElementById("to").value;
	// creating a variable to store our result
	let result;

	// using "if / else if" conditionals to figure out which combination of "from" and "to" are selected, then running different calculations on the inputValue depending on the selections.
	if (fromUnit === "meters" && toUnit === "kilometers") {
		result = inputValue / 1000;
	}

	console.log(result);
	// filling the empty paragraph in the HTML with the result of our calculation.
	document.getElementById("result").textContent = result;
}

// Targeting our "convert" button and adding an event listener so it runs the convert funcion when we click it.
document.getElementById("convertBtn").addEventListener("click", convert);
