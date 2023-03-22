//sprawdzanie czy liczba jest wieksza od zera
function check(){
	let liczba = document.getElementById("digit").value;
	if(liczba > 0){
		document.getElementById("wynik").innerHTML="Liczba większa niż zero";
	} else if(liczba < 0){
		document.getElementById("wynik").innerHTML="Liczba mniejsza niż zero";
	} else if(liczba == 0){
		document.getElementById("wynik").innerHTML="Liczba to zero";
	} else {
		document.getElementById("wynik").innerHTML="Jaja sobie robisz?";
	}
}
//wypisywanie liczb po kolei
function sprawdzanie() {
let liczba1 = document.getElementById("pole1").value;
let liczba2 = document.getElementById("pole2").value;
let napis = "";
		if(liczba1 == NaN || liczba1 == "" || liczba1 == " " && liczba2 == NaN || liczba2 == "" || liczba2 == " "){
			document.getElementById("sprawdz").innerHTML = "ERROR! Uzupełnij oba pola.";
		} else if (liczba1 == NaN || liczba1 == "" || liczba1 == " "){
			document.getElementById("sprawdz").innerHTML = "ERROR! Uzupełnij pierwsze pole.";
		}else if (liczba2 == NaN || liczba2 == "" || liczba2 == " "){
			document.getElementById("sprawdz").innerHTML = "ERROR! Uzupełnij drugie pole.";
		}else if(isNaN(liczba1) && isNaN(liczba2)){
			document.getElementById("sprawdz").innerHTML = "ERROR! W obu polach nie podano liczb.";
		} else if (isNaN(liczba1)){
			document.getElementById("sprawdz").innerHTML = "ERROR! W pierwszym polu nie podano liczby.";
		}else if (isNaN(liczba2)){
			document.getElementById("sprawdz").innerHTML = "ERROR! W drugim polu nie podano liczby.";
		} else if(liczba1 < liczba2){
    for(i=liczba1; i<=liczba2; i++){
        napis = napis + i + " ";
        document.getElementById("sprawdz").innerHTML = napis;
    }
	} else if(liczba1 > liczba2){
		for(i=liczba1; i>=liczba2; i--){
			napis = napis + i + " ";
			document.getElementById("sprawdz").innerHTML = napis;
	}
} else if(liczba1 === liczba2){
    document.getElementById("sprawdz").innerHTML = `Podano identyczne liczby. \n Ciąg to: ${liczba1}`;
}
};
//zegar
function odliczanie() {
    const today = new Date();
    let day = today.getDate();
    if (day < 10) day = `0${day}`;
    let month = today.getMonth()+1;
    if (month < 10) month = `0${month}`;
    const year = today.getFullYear();
    let hour = today.getHours();
    if (hour < 10) hour = `0 ${hour}`;
    let minute = today.getMinutes();
    if (minute < 10) minute = `0${minute}`;
    let second = today.getSeconds();
    if (second < 10) second = `0${second}`;
    document.getElementById("clock").innerHTML = day+"/"+month+"/"+year+" | "+hour+":"+minute+":"+second;
setTimeout("odliczanie()",1000);
};
/*slider ze zdjeciami
do fade in i out czyli animacji użyto jQuery:
http://code.jquery.com/jquery-1.11.2.min.js */
let numer = Math.floor(Math.random()*5)+1;
		let timer1 = 0;
		let timer2 = 0;
		function ustawslajd(numerslajdu) {
			clearTimeout(timer1);
			clearTimeout(timer2);
			numer = numerslajdu-1;
			schowaj();
			setTimeout("zmienslajd()",500);
		}

		function schowaj() {
			$("#slider").fadeOut(500);
		};
		function zmienslajd(){
			numer++;
			if(numer > 5){
				numer=1;
			}
			let plik = "<img src=\"./zdj" + numer + ".jpg\"/>";
			document.getElementById("slider").innerHTML = plik;
			$("#slider").fadeIn(500);
			timer1 = setTimeout("zmienslajd()", 5000);
			timer2 = setTimeout("schowaj()", 4500);
		}