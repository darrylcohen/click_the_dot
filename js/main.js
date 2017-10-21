var endWidth = $("main").width() - $(".box").width();
var endHeight = window.innerHeight - $("header").height() - $("footer").height() - $(".box").height();
var maxWidth = window.innerWidth;
var hitTimes = 0;
var level = 1;
var speed = 1500;

$(document).ready(function(){
	$("main").height(window.innerHeight - $("header").height() +"px");
	$(".box").css({top: endHeight /2, left: endWidth / 2});
	gameSetup();

	// $("#instructions").click(function() {
	// 	$(".instructions").toggle("slow");
	// });
	$("#playAgain").click(function() {
		hitTimes = 0;
		speed = 1500;
		$("#hits").text(hitTimes);
		gameSetup();
	});
	$(".box").click(function() {
		// endWidth = $("main").width() - $(".box").width();
		// endHeight = window.innerHeight - $("header").height() - $(".box").height();

		hitTimes += 1;

		if (speed > 900) {
			speed -= 150;
		}
		createGuards();
		$("#hits").text(hitTimes);

		randomNumberFromRange(0,10 )> 5 ? animateLeft($(".box")) : animateTop($(".box"));
	});

});

var gameSetup = function () {
		level = 1;
		hits = 0;

		randomNumberFromRange(0,10 )> 5 ? animateLeft($(".box")) : animateTop($(".box"));
		$(".boxGuard").hide();
		$("#gameOver").hide();
		$(".box").css({top: endHeight /2, left: endWidth / 2});
		$(".box").show();
		$("#level").text(level);
}

var continueAnimation = function() {
	randomNumberFromRange(0,10 )> 5 ? animateLeft($(".box")) : animateTop($(".box"));
}

var createGuards = function() {
	for (i = 0; i < 2; i++ ) {
		var boxGuard = document.createElement("div");
		boxGuard.className = "boxGuard";
		boxGuard.style.top = randomNumberFromRange(0,endHeight) + "px";
		boxGuard.style.left = randomNumberFromRange(0,endWidth) + "px";

		boxGuard.onclick = function() {
			$(".box").stop().hide();
			$(".boxGuard").hide();
			$("#gameOver").show();
		}
		$("main").append(boxGuard);
	}
}

function randomNumberFromRange(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}

function animateLeft(div) {
		div.animate({left: (randomNumberFromRange(0,endWidth)) + "px"}, speed, continueAnimation);
}
function animateTop(div) {
		div.animate({top: (randomNumberFromRange(0,endHeight)) + "px"}, speed, continueAnimation);
}
