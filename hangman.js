
let haslo = new Array(35);
haslo[0] = "Bez pracy nie ma kołaczy";
haslo[1] = "Każdy kij ma dwa końce";
haslo[2] = "Nie ma dymu bez ognia";
haslo[3] = "Dwie strony medalu";
haslo[4] = "Karolina to mały kidsik";
haslo[5] = "Lambo to ziomal";
haslo[6] = "Playstation jest najlepsze";
haslo[7] = "Karolinka dziecior";
haslo[8] = "Polska górą";
haslo[9] = "Robert Lewandowski król";
haslo[10] = "Pudzian jest silny";
haslo[11] = "Najman jest słaby";
haslo[12] = "Co to są za czasy";
haslo[13] = "Tammy to super piesek";
haslo[14] = "Ogniem i mieczem";
haslo[15] = "Raz kozie śmierć";
haslo[16] = "Oko za oko";
haslo[17] = "Ekologia to kłamstwo";
haslo[18] = "Papież polak";
haslo[19] = "Jan Paweł Drugi";
haslo[20] = "W marcu jak w garncu";
haslo[21] = "Toyota Celica";
haslo[22] = "Ostra katana";
haslo[23] = "Co dwie głowy to nie jedna";
haslo[24] = "Krzesło do siedzenia";
haslo[25] = "Segregacja śmieci";
haslo[26] = "Czerwone Ferrari";
haslo[27] = "Rudy to złodziej";
haslo[28] = "Łysy też rudy";
haslo[29] = "Iphone do domu";
haslo[30] = "Dron sobie lata";
haslo[31] = "Chojrak tchórzliwy pies";
haslo[32] = "Klan na drzewie";
haslo[33] = "Miecze i sandały";
haslo[34] = "Życie ostre jak maczeta";

function losowe() {
    let j = Math.floor(Math.random() * 35);
    return haslo[j];
};
let elo = losowe();
let password = elo.toUpperCase();
let length = password.length;
let password2 = "";
let incorrect = 0;
const yes = new Audio("yes.mp3");
const no = new Audio("no.mp3");
const win = new Audio("win.mp3");
const lose = new Audio("lose.mp3");

for(i=0; i<length; i++){
    if(password.charAt(i)==" ") password2 = password2 + " ";
    else{
        password2 = password2 + "-";
    }
}

function wypisz(){
    document.getElementById("plansza").innerHTML = password2;
}
window.onload = start;
const tablica = new Array(35);
tablica[0] = "A";
tablica[1] = "Ą";
tablica[2] = "B";
tablica[3] = "C";
tablica[4] = "Ć";
tablica[5] = "D";
tablica[6] = "E";
tablica[7] = "Ę";
tablica[8] = "F";
tablica[9] = "G";
tablica[10] = "H";
tablica[11] = "I";
tablica[12] = "J";
tablica[13] = "K";
tablica[14] = "L";
tablica[15] = "Ł";
tablica[16] = "M";
tablica[17] = "N";
tablica[18] = "Ń";
tablica[19] = "O";
tablica[20] = "Ó";
tablica[21] = "P";
tablica[22] = "Q";
tablica[23] = "R";
tablica[24] = "S";
tablica[25] = "Ś";
tablica[26] = "T";
tablica[27] = "U";
tablica[28] = "V";
tablica[29] = "W";
tablica[30] = "X";
tablica[31] = "Y";
tablica[32] = "Z";
tablica[33] = "Ź";
tablica[34] = "Ż";

function start(){
    let litery = "";
    for (i=0; i<=34; i++){
        let element = "lit" + i;
        litery = litery + '<div class="litera" onclick="check('+i+')" id="'+element+'">'+tablica[i]+'</div>';
        if((i+1) % 7==0){
            litery = litery + '<div style="clear:both"></div>';
        } 
    }

    document.getElementById("alphabet").innerHTML = litery;

    wypisz();
}
String.prototype.podmiana = function(miejsce, znak){
    if(miejsce > this.length - 1){
        return this.toString();
    }else {
        return this.substr(0, miejsce) + znak + this.substr(miejsce+1);
    }
}

function check(nr){
    let correct = false;
for(i=0; i<length; i++){
    if(password.charAt(i) == tablica[nr]){
        password2 = password2.podmiana(i, tablica[nr]);
        correct = true;
    }
    
}
    if(correct == true){
        let element = "lit" + nr;
        document.getElementById(element).style.background = "#003300";
        document.getElementById(element).style.color = "#00C000";
        document.getElementById(element).style.border = "3px solid #00C000";
        document.getElementById(element).style.cursor = "default";
        yes.play();
        wypisz();
    }else{
        let element = "lit" + nr;
        document.getElementById(element).style.background = "#330000";
        document.getElementById(element).style.color = "#C00000";
        document.getElementById(element).style.border = "3px solid #C00000";
        document.getElementById(element).style.cursor = "default";
        document.getElementById(element).setAttribute("onclick", ";");
        no.play();
        //skucha
        incorrect++;
        document.getElementById("hangman").innerHTML = '<img src="img/s'+incorrect+'.jpg">';

    }
if(password == password2){
    document.getElementById("alphabet").innerHTML = "Niesamowita wygrana! Odgadłeś hasło: "+password2+'!</br></br> <span class="reset" onclick="location.reload()">Jeszcze raz?</span>';
    win.play();
}else if(incorrect === 9){
    document.getElementById("alphabet").innerHTML = "Niestety przegrałeś!</br> Hasło to: "+password+'</br></br> <span class="reset" onclick="location.reload()">Jeszcze raz?</span>';
    lose.play();
}

}
