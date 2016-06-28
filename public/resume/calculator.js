(function () { 
	"use strict"

	// adding listeners to buttons, and putting them in the correct fields
	
	var listenerDigit = document.getElementsByClassName("digit");
	for (var i = 0; i < listenerDigit.length; i++) {
		listenerDigit[i].addEventListener('click', getNumber, false);
	}
	
	var listenerPlus = function (click) {
		var operator = document.getElementById("operator");
		var plusButton = document.getElementById('plus');
		operator.value = "+";
	}
	document.getElementById("plus").addEventListener('click', listenerPlus, false);

	var listenerMinus = function (click) {
		var operator = document.getElementById("operator");
		var minusButton = document.getElementById('minus');
		operator.value = "-";
	}
	document.getElementById("minus").addEventListener('click', listenerMinus, false);

	var listenerMultiply = function (click) {
		var operator = document.getElementById("operator");
		var multiplyButton = document.getElementById('multiply');
		operator.value = "*";
	}
	document.getElementById("multiply").addEventListener('click', listenerMultiply, false);

	var listenerDivide = function (click) {
		var operator = document.getElementById("operator");
		var divideButton = document.getElementById('divide');
		operator.value = "/";
	}
	document.getElementById("divide").addEventListener('click', listenerDivide, false);

	var listenerClear = function (click) {
		var operator = document.getElementById("operator");
		var clearButton = document.getElementById('clear');
		operator.value = "";
		var field = document.getElementById("fieldOne");
		fieldOne.value = "";
		var result = document.getElementById("result");
		fieldTwo.value = "";
	}
	document.getElementById("clear").addEventListener('click', listenerClear, false);


	var listenerEquals = function (click) {
		var fieldOne = document.getElementById("fieldOne");
		var equalsButton = document.getElementById('equals');
		result();

	}
	document.getElementById("equals").addEventListener('click', listenerEquals, false);

	document.getElementById("decimal").addEventListener('click', getNumber, false);

	var listenerPlusMinus = function (click) {
		var fieldOne = document.getElementById("fieldOne");
		var plusMinusButton = document.getElementById('plusMinus');
		plusMinus();
	}
	document.getElementById("plusMinus").addEventListener('click', listenerPlusMinus, false);

	var listenerPercentage = function (click) {
		var fieldOne = document.getElementById("fieldOne");
		var percentageButton = document.getElementById('percentage');
		getPercentage();
	}
	document.getElementById("percentage").addEventListener('click', listenerPercentage, false);


	function getNumber() {
		if (document.getElementById("operator").value == "") {
			document.getElementById("fieldOne").value += this.innerText;
		} else {
			document.getElementById("fieldTwo").value += this.innerText;
		}
	}


	function plusMinus(){
		if (document.getElementById("operator").value == "") {
			document.getElementById("fieldOne").value = Number(document.getElementById("fieldOne").value) * -1;
		} else {
			document.getElementById("fieldTwo").value = Number(document.getElementById("fieldTwo").value) * -1;
		}

	}

	function getPercentage(){
		if (document.getElementById("operator").value == "") {
			document.getElementById("fieldOne").value = Number(document.getElementById("fieldOne").value) / 100;
		} else {
			document.getElementById("fieldTwo").value = Number(document.getElementById("fieldTwo").value) / 100;
		}
	}



	function result() {
	var operatorField = document.getElementById("operator").value;
	var firstField = Number(document.getElementById("fieldOne").value);
	var secondField = Number(document.getElementById("fieldTwo").value);
	var result;
	switch(operatorField){
		case "+":
				result = firstField + secondField; 
				document.getElementById("operator").value = "";
				document.getElementById("fieldTwo").value = "";
				break;
		case "-":
				result = firstField - secondField; 
				document.getElementById("operator").value = "";
				document.getElementById("fieldTwo").value = "";
				break;
		case "*":
				result = firstField * secondField; 
				document.getElementById("operator").value = "";
				document.getElementById("fieldTwo").value = "";
				break;
		case "/":
				result = firstField / secondField;
				document.getElementById("operator").value = "";
				document.getElementById("fieldTwo").value = ""; 
				break;
	}
	
	document.getElementById("fieldOne").value = result.toFixed(2);
	}


























})();