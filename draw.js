var cards_l = ["vader1.jpg", "anakin.jpg", "animal.jpg", "yoda.jpg", "head.jpg", "anakin.jpg", "head.jpg", "jango.jpg", "vader.jpg", "kylo.jpg", "windu.jpg", "r2.jpg", "animal.jpg", "vader.jpg", "windu.jpg", "vader1.jpg", "kylo.jpg", "r2.jpg", "yoda.jpg", "jango.jpg"];

var cards = new Array();

for (var i = 20; i > 0; i--) {
    var rand_id = Math.floor(Math.random() * i);
    cards.push(cards_l[rand_id]);
    cards_l.splice(rand_id, 1);
}

var yes = new Audio("yes.wav");
var no = new Audio("no.wav");
var win = new Audio("win.wav");
var defeat = new Audio("defeat.wav");

var a0 = document.getElementById('a0');
var a1 = document.getElementById('a1');
var a2 = document.getElementById('a2');
var a3 = document.getElementById('a3');
var a4 = document.getElementById('a4');

var a5 = document.getElementById('a5');
var a6 = document.getElementById('a6');
var a7 = document.getElementById('a7');
var a8 = document.getElementById('a8');
var a9 = document.getElementById('a9');

var a10 = document.getElementById('a10');
var a11 = document.getElementById('a11');
var a12 = document.getElementById('a12');
var a13 = document.getElementById('a13');
var a14 = document.getElementById('a14');

var a15 = document.getElementById('a15');
var a16 = document.getElementById('a16');
var a17 = document.getElementById('a17');
var a18 = document.getElementById('a18');
var a19 = document.getElementById('a19');

a0.addEventListener("click", function() { showCard(0); });
a1.addEventListener("click", function() { showCard(1); });
a2.addEventListener("click", function() { showCard(2); });
a3.addEventListener("click", function() { showCard(3); });
a4.addEventListener("click", function() { showCard(4); });

a5.addEventListener("click", function() { showCard(5); });
a6.addEventListener("click", function() { showCard(6); });
a7.addEventListener("click", function() { showCard(7); });
a8.addEventListener("click", function() { showCard(8); });
a9.addEventListener("click", function() { showCard(9); });

a10.addEventListener("click", function() { showCard(10); });
a11.addEventListener("click", function() { showCard(11); });
a12.addEventListener("click", function() { showCard(12); });
a13.addEventListener("click", function() { showCard(13); });
a14.addEventListener("click", function() { showCard(14); });

a15.addEventListener("click", function() { showCard(15); });
a16.addEventListener("click", function() { showCard(16); });
a17.addEventListener("click", function() { showCard(17); });
a18.addEventListener("click", function() { showCard(18); });
a19.addEventListener("click", function() { showCard(19); });

var oneVisible = false;
var turnCounter = 0;
var visible_nr;
var lock = false;
var pairsLeft = 10;


function showCard(nr) {
    var opacityValue = $('#c' + nr).css('opacity');


    if (opacityValue != 0 && lock == false && nr != visible_nr) {
        lock = true;

        var obraz = "url(img/" + cards[nr] + ")";

        $('#a' + nr).css('background-image', obraz);
        $('#a' + nr).addClass('cardA');
        $('#a' + nr).removeClass('card');

        if (oneVisible == false) {

            oneVisible = true;
            visible_nr = nr;
            lock = false;
        } else {

            if (cards[visible_nr] == cards[nr]) {

                setTimeout(function() { hide2Cards(nr, visible_nr) }, 750);

            } else {

                setTimeout(function() { restore2Cards(nr, visible_nr) }, 1000);
            }

            turnCounter++;
            $('.counter').html('Licznik tur: ' + turnCounter);
            oneVisible = false;
        }

    }

}

function hide2Cards(nr1, nr2) {
    no.play();
    $('#a' + nr1).css('opacity', '0');
    $('#a' + nr2).css('opacity', '0');

    pairsLeft--;

    if (pairsLeft == 0) {
        win.play();
        $('.game').html('<br><br><h1>Udało Ci sie wygrac !<br>Zwyciestwo w  ' + turnCounter + ' turach</h1>' + '<br /><br /><span class="reset" onclick="location.reload()">JESZCZE RAZ?</span>');
    }

    lock = false;
}

function restore2Cards(nr1, nr2) {
    yes.play();
    $('#a' + nr1).css('background-image', 'url(img/main.jpg)');
    $('#a' + nr1).addClass('card');
    $('#a' + nr1).removeClass('cardA');

    $('#a' + nr2).css('background-image', 'url(img/main.jpg)');
    $('#a' + nr2).addClass('card');
    $('#a' + nr2).removeClass('cardA');

    lock = false;
}