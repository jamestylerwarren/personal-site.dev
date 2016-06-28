(function () { 
	"use strict"


	var solution = [];
	var index = 0;
	var buttons = $('.buttons');
	var level;
	var correct = true;
	var random;


//--------- Audio and button blink upon page load -------------------//
	function uponLoad() {
		setTimeout(function () {
    	var audio = new Audio('focus.mp3');audio.play();
    	buttons.each(function(){
			$(this).animate({
					'opacity': '1'
				}, 500).animate({
					'opacity': '.25'
				}, 500).animate({
					'opacity': '1'
				}, 500).animate({
					'opacity': '.25'
				}, 500).animate({
					'opacity': '1'
				}, 500).animate({
					'opacity': '.50'
				}, 500)
			});
		}, 500);
		
	} uponLoad();

	//------- Generate a random number between 1 - 4 --------------------// 

	function randomNumber (amount) {
		random = Math.floor(Math.random() * (amount) + 1);
		return random;
	};

	//------- Upon start generate random number and push to solution ------//
	
	function startGame () {
		$('#start').click(function() {
			solution = [];
			index = 0;
			solution.push(randomNumber(4));
			animate();
			level = solution.length;
			$('span').text(level);
			correct = true;
			$('#gameInfoP').css('visibility', 'hidden');
			$('#cnPunch').css('visibility', 'hidden');  //reset para to hidden
		});
	} startGame();

	//------- Evaluate user play ------------------------------//

	function playGame() { 
		buttons.click(function() {
			if (solution[index] == $(this).data('number')) {
					index++;
				} else {
					solution = [];
					index = 0;
					level = 0;
					correct = false;
					$('#gameInfoP').css('visibility', 'visible');
					$('#cnPunch').css('visibility', 'visible'); 

				}

			if (index == solution.length && correct === true) {
					solution.push(randomNumber(4));
					animate();
					index = 0;
					level = solution.length;
					$('span').text(level);
					var audio = new Audio('good.mp3');audio.play();
				}
		});
	} playGame();

	//-------------- Light up buttons --------------//

	function clickLight() {
		buttons.each(function(){
			$(this).click(function(){
				$(this).animate({
					'opacity': '1'
				}, 200).animate({
					'opacity': '.50'
				}, 200) 
			})
		});
	} clickLight();

	//------------ Animate Light Sequence for Array --------//

	function animate () {
		solution.forEach(function(random, index) {
			setTimeout(function() {
				$('[data-number="' + random + '"]').animate({
				'opacity': '1'
				}, 300).animate ({
					'opacity': '.50'
				}, 300);
			}, 500 * (index + 1));
		})
	}


	
	
	









})();