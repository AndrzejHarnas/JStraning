//zmienne globalne

var slideNumber = Math.floor(Math.random()*5)+1;
//slideNumber=1;


function timersecond(){

var today = new Date();
var day = today.getDate();
var month = today.getMonth()+1;
var year = today.getFullYear();
var hour = today.getHours();
var minute = today.getMinutes();
var second = today.getSeconds();

if (hour<10) hour="0"+hour;
if (minute<10) minute="0"+minute;
if (second<10) second="0"+second;

document.getElementById("timer").innerHTML = day+"/"+month+"/"+year+" | "+hour+":"+minute+":"+second; 

setTimeout("timersecond()",1000);
}

function checkNumber() {
	var number = document.getElementById("fieldText").value;
//	document.write(number);
	if(number >0) document.getElementById("solution").innerHTML="liczba jest dodatnia";
    else if(number <0) document.getElementById("solution").innerHTML="liczba jest ujemna";
	else if(number == 0) document.getElementById("solution").innerHTML="liczba wynosi zero";
	else document.getElementById("solution").innerHTML="to nie jest liczba";
}

function writeNumbers(){
	var number1 = document.getElementById("fieldText1").value;
	var number2 = document.getElementById("fieldText2").value;
	var solution = "";
	
	
for(i=number1; i<=number2; i++){
	solution=solution + i + " ";
	
}
	document.getElementById("NumSol").innerHTML = solution;
	
}

function changeSlide(){
	slideNumber++; 
	if(slideNumber > 5) slideNumber=1;
	var plik = "<img src=\"pictures/"+ slideNumber +".jpg \"/>";
	document.getElementById("dupa").innerHTML = plik;
	setTimeout("changeSlide()",5000);
}	
	