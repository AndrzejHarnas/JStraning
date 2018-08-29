var hasla = new Array(20);
hasla[0]="Gdzie diabeł nie może tam Teściowa pomoże";
hasla[1]="Siedziała na dębie grzebała se w zębie";
hasla[2]="komu komu bo ide do domu";
hasla[3]="siała baba mak nie wiedziała jak";
hasla[4]="gdyby kózka nie skakała to by nogi nie złamała";
hasla[5]="leże leże uwaliłem się jak zwierze";
hasla[6]="teściowo teściowo ty stary rowerze";
hasla[7]="wlazł kotek na płotek pierdzielnął go młotek";
hasla[8]="maja daje tu i tam no i syfa rozsiewa";
hasla[9]="jedna baba drugiej babie wsadziła do dupy grabie";
hasla[10]="Lala Poland";
hasla[11]="zajebały żule mi końcówke od konewki";
hasla[12]="halama se tu wali rum";
hasla[13]="rolnik szuka żony";
hasla[14]="baca kury maca";
hasla[15]="mars mars mars napada przerażona ludzi gromada";
hasla[16]="dwanaście groszy tylko nie płacz proszę";
hasla[17]="Nie wierzę elektrykom";
hasla[18]="Swędzi mnie ryba będzie lało chyba";
hasla[19]="Dobry koń i po gównie pójdzie";
hasla[20]="Dobry gospodarz wszystko do domu przyniesie";
hasla[21]="Amfetamina produkcja dystrybucja masturbacja";
hasla[22]="kobieta mnie bije";
hasla[23]="Żyrafy wchodzą do szafy";
hasla[24]="Sąd Sądem ale sprawiedliwość mus być po naszej stronie";
hasla[25]="Podejdź no do płota jako i ja podchodzę";
hasla[26]="Ja ty widzę niezły burdel";
hasla[27]="Nie kop pana bo się spocisz";
hasla[28]="I tak oto prykanie wtrąca mnie w samotność";
hasla[29]="I trzymaj się ramy to się nie posramy";
hasla[30]="Boję się szczytowania z obawy prykania";
hasla[31]="Do it bo inaczej urwę ci ryja";
hasla[32]="Czym się różni gówność gówna psiego od gówna ludzkiego";
hasla[33]="To be kurwa or not to be";
hasla[34]="Mój mąż z zawodu jest dyrektorem";
hasla[35]="Pomyłka moja żona miała na drugie pomyłka";
hasla[36]="Od tej pory ryba masz mieć w dupie paragrafy";
hasla[37]="Do lwa kurwa do lwa";
hasla[38]="Bunkrów nie ma ale też jest zajebiście";
hasla[39]="Kiler jakie ty masz zajebiste pekaesy";


var numerHasla = Math.floor(Math.random()*40);

var haslo=hasla[numerHasla];
var haslo1="";
var dlugosc = haslo.length;
var ile_skuc =1;

var w = new Audio("fanfare10.wav");
var f = new Audio("fart_z.wav");

var x=0;

var good = new Audio("good.wav");
var bad = new Audio("bad.wav");

var czas=0;

for(i=0;i<dlugosc;i++){
	if(haslo.charAt(i)==" ") haslo1 = haslo1 + " ";
	else haslo1 = haslo1 + "-";
}



var litery = new Array(35);
litery[0]= "A";
litery[1]= "Ą";
litery[2]= "B";
litery[3]= "C";
litery[4]= "Ć";
litery[5]= "D";
litery[6]= "E";
litery[7]= "Ę";
litery[8]= "F";
litery[9]= "G";
litery[10]= "H";
litery[11]= "I";
litery[12]= "J";
litery[13]= "K";
litery[14]= "L";
litery[15]= "Ł";
litery[16]= "M";
litery[17]= "N";
litery[18]= "Ń";
litery[19]= "O";
litery[20]= "Ó";
litery[21]= "P";
litery[22]= "Q";
litery[23]= "R";
litery[24]= "S";
litery[25]= "Ś";
litery[26]= "T";
litery[27]= "U";
litery[28]= "V";
litery[29]= "W";
litery[30]= "X";
litery[31]= "Y";
litery[32]= "Z";
litery[33]= "Ż";
litery[34]= "Ź";


haslo=haslo.toUpperCase();


function timersecond(){

if(czas>10) {
czas=0;
ile_skuc++;
document.getElementById("szubienica").innerHTML='<img src="img/s'+ile_skuc+'.png"/>';
licznik_skuc();
bad.play();
}
document.getElementById("timer").innerHTML=czas;
czas++;


if(ile_skuc>=11 || x==1) {
	
	koniec();
}

else 
{
	setTimeout("timersecond()",1000);
	
}	
}





function wypisz_haslo()
{
	document.getElementById("plansza").innerHTML=haslo1;
	
}

function licznik_skuc()
{
	var licznik = ile_skuc-1;
	document.getElementById("licznik").innerHTML = "<span id='odlicznie'>"+licznik+"</span>/10";
	
}


function start()
{
	var tresc_diva="";
	
	for(i=0;i<=34;i++) {
		
		tresc_diva=tresc_diva + '<div class="litera" id="lit'+i+'" onclick="sprawdz('+i+')">'+ litery[i]+'</div>';
		if( (i+1)%7 == 0) tresc_diva=tresc_diva + '<div style="clear:both;"></div>';
	}
	
	
	document.getElementById("alfabet").innerHTML= tresc_diva;

	wypisz_haslo();
	licznik_skuc();
	timersecond();
	
}

String.prototype.ustawZnak = function(miejsce,znak)
{
	if(miejsce > this.length -1){
		return this.toString();
	}else 
	{
		return this.substr(0,miejsce) + znak + this.substr(miejsce+1);
	}
}


function sprawdz(nr_div) {
	
	var trafiona = false;
	
	
	for(i=0;i<dlugosc;i++) {
		
		if(haslo.charAt(i)==litery[nr_div]){
			
			haslo1=haslo1.ustawZnak(i,litery[nr_div]);
		    trafiona = true;
		}
		
	}
	
	
	if(trafiona == true)
	{
		var element = "lit" + nr_div;
		document.getElementById(element).style.background="#003300";
		document.getElementById(element).style.color="#00C000";
		document.getElementById(element).style.border="3 px solid #00C000";
		document.getElementById(element).style.cursor="default";
		good.play();
		czas=0;
		
			wypisz_haslo();
	}
	else
	{
	    var element = "lit" + nr_div;
		document.getElementById(element).style.background="#330000";
		document.getElementById(element).style.color="#C00000";
		document.getElementById(element).style.border="3 px solid #C00000";
		document.getElementById(element).style.cursor="default";
		document.getElementById(element).setAttribute("onclick",";");
		ile_skuc++;
		document.getElementById("szubienica").innerHTML='<img src="img/s'+ile_skuc+'.png"/>';
		licznik_skuc();
	    bad.play();
		czas=0;
	}
	
	koniec();
}


function koniec()
{
	
	if (haslo==haslo1) {
		
		w.play();
		document.getElementById("alfabet").innerHTML = "Barwo!!! Wygrałeś!!! Odgadłeś hasło!!! - " +haslo+ '<br/><br/><span class="reset" onclick="location.reload()"> Jeszcze raz?</span>';
		x=1;
	}
	
	if (ile_skuc >= 11) {
		f.play();
		document.getElementById("alfabet").innerHTML = "Przegrana!!! Nie zgadłeś hasła!!! - " +haslo+ '<br/><br/><span class="reset" onclick="location.reload()"> Jeszcze raz?</span>';
	    x=1;
	}
	
	
}	
	

window.onload = start;





























