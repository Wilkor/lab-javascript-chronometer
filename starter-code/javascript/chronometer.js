//Constructor
function Chronometer() {

    this.intervalId = 0
    this.currentTime = 0

}


var minDec = document.getElementById("minDec");
var minUni = document.getElementById("minUni");
var secDec = document.getElementById("secDec");
var secUni = document.getElementById("secUni");
var milDec = document.getElementById("milDec");
var milUni = document.getElementById("milUni");


var centesimas = 0;
var segundos = 0;
var minutos = 0;


Chronometer.prototype.startClick = function () {


    this.intervalId = setInterval(() => {

        this.setMilliseconds()
        this.setSeconds()
        this.setMinutes()


    }, 10)







};

Chronometer.prototype.setMinutes = function () {


    if ((centesimas == 0) && (segundos == 0)) {
        minutos++;
        if (minutos >= 10) {

            var splitM = this.twoDigitsNumber(minutos)
            minDec.innerHTML = splitM[0]

            minUni.innerHTML = splitM[1]
        } else {

            minUni.innerHTML = minutos;
        }

    }
    if (minutos == 59) {
        minutos = -1;
    }


    return this.currentTime = minutos

};

Chronometer.prototype.setSeconds = function () {


    if (centesimas == 0) {
        segundos++;


        if (segundos >= 10) {

            var splitS = this.twoDigitsNumber(segundos)
            secDec.innerHTML = splitS[0]
            secUni.innerHTML = splitS[1]
        } else {
            secDec.innerHTML = "0"
            secUni.innerHTML = segundos;
        }

    }


    if (segundos == 59) {

        segundos = -1;
    }

    return this.currentTime = segundos

};

Chronometer.prototype.twoDigitsNumber = function (number) {

    var newNumberArray = '' + number < 10 ? "0" + number : "" + number

    return newNumberArray

};

Chronometer.prototype.setTime = function () {

};

Chronometer.prototype.setMilliseconds = function () {

    if (centesimas < 99) {

        centesimas++;

        if (centesimas >= 10) {

            milDec.style.display = "none"

        }

        milUni.innerHTML = centesimas;
    }

    if (centesimas == 99) {
        centesimas = -1;
    }



    return this.currentTime = centesimas

};

Chronometer.prototype.stopClick = function () {

    clearInterval(this.intervalId)
};

Chronometer.prototype.resetClick = function () {
    milDec.removeAttribute("style");

    clearInterval(this.intervalId);
    centesimas = 0;
    segundos = 0;
    minutos = 0;
    secDec.innerHTML = "0"
    secUni.innerHTML = "0"
    milDec.innerHTML = "0"
    milUni.innerHTML = "0"
    minDec.innerHTML = "0"
    minUni.innerHTML = "0"



    const ul_list = document.getElementById("splits");
    const childs = Array.from(ul_list.childNodes).reverse();

    childs.forEach(item => {
        ul_list.removeChild(item);
    });

};

Chronometer.prototype.splitClick = function (a, b, c, d, e, f) {

    var splitOne = `${e}${f}:${c}${d}:${a}${b}`.split(":")

    var resultIndexTree = splitOne[2].substring(1, 3).length

    if (resultIndexTree == 1) {

        resultIndexTree = '0' + splitOne[2].substring(1, 3)

    } else {

        resultIndexTree = splitOne[2].substring(1, 3)
    }

    var newString = splitOne[0] + ":" + splitOne[1] + ":" + resultIndexTree;

    var node = document.createElement("li");
    var mySplit = document.createTextNode(newString);
    node.appendChild(mySplit);
    document.getElementById("splits").appendChild(node);




};
