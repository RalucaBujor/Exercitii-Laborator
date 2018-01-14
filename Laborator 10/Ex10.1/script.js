window.onload = myMain;
function myMain() {
    document.getElementById("story-button").addEventListener("click", makeStory);
}
function makeStory() {
    var p1= document.getElementById("places").value;
    var a1 = document.getElementById("adjective").value;
    var n1 = document.getElementById("person").value;

    var p = n1 + ' a vizitat ' + a1 + ' ' + p1;
    console.log(a1,p1,n1);
    document.getElementById("story").innerHTML = document.getElementById("person").value + ' a vizitat ' +  document.getElementById("adjective").value + ' ' + document.getElementById("places").value;
}
