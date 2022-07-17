window.onscroll = function() {myFunction()};

//defining some variables
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;
var burger = document.getElementById("burger");
var x = document.getElementById("navbar");
var burgernav = document.getElementById("burgernav");
var topButton = document.getElementById("topButton");
var slideIndex = 0;
showSlides();

navbar.onclick = function() {shownav()};

function myFunction() { //function that makes the nagivation bar sticky when it reaches the top
  var bodycontent = document.getElementById('bodycontent');
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
	collapseMenuBar();
    bodycontent.classList.add('stickycontent');
  } else {
    navbar.classList.remove("sticky");
	decollapseMenuBar();
    bodycontent.classList.remove('stickycontent');
  }
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topButton.style.display = "block"; //displays the top button
  } else {
    topButton.style.display = "none"; //hides the top button
  }
}

function collapseMenuBar() { //function that makes the burger nav bar appear when the screen is smaller than 600px
	if (window.innerWidth < 600) {
		burger.classList.remove("burgerhidden");
		navbar.classList.add("burgerhidden");
	} else {
		navbar.classList.remove("burgerhidden");
	}
}

function decollapseMenuBar() {//function that makes the nav bar disappear when the screen is bigger than 600px.
	burger.classList.add("burgerhidden");
	navbar.classList.remove("burgerhidden");
}

function shownav() {//function that shows burgernav bar in smaller screen size when the burger icon is clicked.
  if (burgernav.classList.contains("burgerhidden")) {
    burgernav.classList.remove("burgerhidden");
  } else {
    burgernav.classList.add("burgerhidden");
  }
}

function topFunction() {//function that brings the page back to the top when the top button is clicked.
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}



function showSlides() {//function that controls the image gallery
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

function check1(){//function that checks the answers for the first 5 questions of the quiz and displays an appropriate message about it at the end when the submit button is pressed. also changes the buttons that appear and disappear
	var question1 = document.quiz1.question1.value;
	var question2 = document.quiz1.question2.value;
	var question3 = document.quiz1.question3.value;
  var question4 = document.quiz1.question4.value;
  var question5 = document.quiz1.question5.value;
	var correct = 0;

	if (question1 == "b") {
		correct++;
    document.getElementById("q1").style.color = "#00e600"//green colour. same for the rest of the questions
  } else {
    document.getElementById("q1").style.color = "#ff0000"//red colour. same for the rest of the questions
}
	if (question2 == "c") {
		correct++;
    document.getElementById("q2").style.color = "#00e600"
  } else {
    document.getElementById("q2").style.color = "#ff0000"
}
	if (question3 == "d") {
		correct++;
    document.getElementById("q3").style.color = "#00e600"
  } else {
    document.getElementById("q3").style.color = "#ff0000"
}
  if (question4 == "a") {
		correct++;
    document.getElementById("q4").style.color = "#00e600"
  } else {
    document.getElementById("q4").style.color = "#ff0000"
}
  if (question5 == "d") {
		correct++;
    document.getElementById("q5").style.color = "#00e600"
  } else {
    document.getElementById("q5").style.color = "#ff0000"
}
	
	var messages = ["You're ready to ace the exam now!", "Keep studying and you'll be able to ace the exam", "You should study these aspects more"];
	var score = 0;

	if (correct >= 0 && correct <= 2) {
		score = 2;
	}
	if (correct > 2 && correct < 5) {
		score = 1;
	}
	if (correct == 5) {
		score = 0;
	}

  var submit1 = document.getElementById("submitbutton1");
  var reset1 = document.getElementById("resetbutton1");
  submit1.classList.add("burgerhidden");
  reset1.classList.add("burgerhidden");

	var aftersubmit1 = document.getElementById("after_submit1");
  aftersubmit1.classList.remove("burgerhidden");

	document.getElementById("message1").innerHTML = messages[score];
	document.getElementById("number_correct1").innerHTML = "You got " + correct + " questions correct.";
}

function check2(){//function that checks the answers for the second 5 questions of the quiz and displays an appropriate message about it at the end when the submit button is pressed. also changes the buttons that appear and disappear
  var question6 = document.quiz2.question6.value;
	var question7 = document.quiz2.question7.value;
	var question8 = document.quiz2.question8.value;
  var question9 = document.quiz2.question9.value;
  var question10 = document.quiz2.question10.value;
	var correct = 0;

	if (question6 == "d") {
		correct++;
    document.getElementById("q6").style.color = "#00e600"//green colour. same for the rest of the questions
  } else {
    document.getElementById("q6").style.color = "#ff0000"//red colour. same for the rest of the questions
}
	if (question7 == "a") {
		correct++;
    document.getElementById("q7").style.color = "#00e600"
  } else {
    document.getElementById("q7").style.color = "#ff0000"
}
	if (question8 == "c") {
		correct++;
    document.getElementById("q8").style.color = "#00e600"
  } else {
    document.getElementById("q8").style.color = "#ff0000"
}
  if (question9 == "b") {
		correct++;
    document.getElementById("q9").style.color = "#00e600"
  } else {
    document.getElementById("q9").style.color = "#ff0000"
}
  if (question10 == "d") {
		correct++;
    document.getElementById("q10").style.color = "#00e600"
  } else {
    document.getElementById("q10").style.color = "#ff0000"
}
	
	var messages = ["You're ready to ace the exam now!", "Keep studying and you'll be able to ace the exam", "You should study these aspects more"];
	var score = 0;

	if (correct >= 0 && correct <= 2) {
		score = 2;
	}
	if (correct > 2 && correct < 5) {
		score = 1;
	}
	if (correct == 5) {
		score = 0;
	}

  var submit2 = document.getElementById("submitbutton2");
  var reset2 = document.getElementById("resetbutton2");
  submit2.classList.add("burgerhidden");
  reset2.classList.add("burgerhidden");

	var aftersubmit2 = document.getElementById("after_submit2");
  aftersubmit2.classList.remove("burgerhidden");

	document.getElementById("message2").innerHTML = messages[score];
	document.getElementById("number_correct2").innerHTML = "You got " + correct + " questions correct.";
	}

function resetq1() {//function that resets the quiz when the reset button is pressed.
  document.getElementById("q1").style.color = "#000000"
  document.getElementById("q2").style.color = "#000000"
  document.getElementById("q3").style.color = "#000000"
  document.getElementById("q4").style.color = "#000000"
  document.getElementById("q5").style.color = "#000000"

  var aftersubmit1 = document.getElementById("after_submit1");
  aftersubmit1.classList.add("burgerhidden");

  var submit1 = document.getElementById("submitbutton1");
  var reset1 = document.getElementById("resetbutton1");
  submit1.classList.remove("burgerhidden");
  reset1.classList.remove("burgerhidden");

  document.quiz1.reset();
}

function resetq2() {//function that resets the quiz when the reset button is pressed.
  document.getElementById("q6").style.color = "#000000"
  document.getElementById("q7").style.color = "#000000"
  document.getElementById("q8").style.color = "#000000"
  document.getElementById("q9").style.color = "#000000"
  document.getElementById("q10").style.color = "#000000"

  var aftersubmit2 = document.getElementById("after_submit2");
  aftersubmit2.classList.add("burgerhidden");

  var submit2 = document.getElementById("submitbutton2");
  var reset2 = document.getElementById("resetbutton2");
  submit2.classList.remove("burgerhidden");
  reset2.classList.remove("burgerhidden");
  
  document.quiz2.reset();
}
