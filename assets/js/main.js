$(document).ready(function() {
    alert("il gioco consiste nel tenere a mente i numeri e ricordarli hai 30 secondi buon game")

    generateNumber(numeri, 100)
    timer("Tienili a mente", timer)

});
var difficolta = parseInt(prompt("con quanti numeri vuoi giocare?"))

var numeri = []
var numeriUtente = [];

// FUNCTION

// genero numeri random
function randomNumberInRange(min, max) {
    if (isNaN(min) || isNaN(max)) {
        console.log("non hai inserito un numero");
    } else {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}

// funzione numeri random
function generateNumber(array, max) {

    for (let i = 0; i < difficolta; i++) {
        var numero = randomNumberInRange(1, max)
        if (!array.includes(numero)) {
            array.push(numero)
        }
        $(".numeriComputer").append("<span>" + array[i] + "</span>")
    }
    return array
}

// timer 30 secondi
function timer(istruzioni, callback = null) {
    var contatore = 5
    var clock = setInterval(function() {
        if (contatore == 0) {
            $(".timer").addClass("dark")
            $(".timer").html(istruzioni);
            clearInterval(clock);
            if (callback) {
                callback("inserisci i numeri che ti ricordi", function() {
                    setTimeout(() => {
                        numeriUtenteFunc()
                    }, 200);
                })
            }
        } else {
            $(".timer").html(contatore)
            contatore--
        }
    }, 1000);
}

//  fare inserire all'utente i numeri
function numeriUtenteFunc() {
    for (let i = 0; i < numeri.length; i++) {
        var userNumber = prompt("inserisci i numeri")
        numeriUtente.push(userNumber)
        console.log(numeriUtente);
        $(".numeriUtente").append("<span>" + numeriUtente[i] + "</span>")
        $(".timer").removeClass("dark")
        $(".timer").html("quanti ne hai indovinati?");
    }
}

// controllo quanti numeri sono stati indovinati