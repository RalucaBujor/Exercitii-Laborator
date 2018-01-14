window.onload = myMain;
function myMain() {
    document.getElementById("square-button").addEventListener("click", makeSquare);
    document.getElementById("half-button").addEventListener("click", makeHalf);
    document.getElementById("percent-button").addEventListener("click", makePercent);
    document.getElementById("area-button").addEventListener("click", makeArea);
}
function makeSquare() {
    var x = document.getElementById("square-input").value;
    var rx = x*x;
    document.getElementById("solution").innerHTML = rx;
}

function makeHalf() {
    var x = document.getElementById("half-input").value;
    var rx = x/2;
    document.getElementById("solution").innerHTML = rx;
}

function makePercent() {
    var x = document.getElementById("percent1-input").value;
    var y = document.getElementById("percent2-input").value;
    var rx =y + y*x/100;
    document.getElementById("solution").innerHTML = rx;
}

function makeArea() {
    var r = document.getElementById("area-input").value;
    var rx = 3.14*r*r;
    document.getElementById("solution").innerHTML = rx;
}


