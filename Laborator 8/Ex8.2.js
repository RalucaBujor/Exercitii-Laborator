var film= {titlu:"Wonder Woman",durata:141,actori:["Gal Gadot","Chris Pine","Connie Nielsen","Robin Wright"]}
console.log(film);

function Afiseaza(){
    var s = "";
    for(i=0 ; i<=film.actori.length-1 ; i++)
    s = s + film.actori[i] + ',';
    s = s.slice(0, -1);
    console.log('"' + film.titlu + '" a durat ' + film.durata + " minute .Actori: " + s + '.');
}

Afiseaza();