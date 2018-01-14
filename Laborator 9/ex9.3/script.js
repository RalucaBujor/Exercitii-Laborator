var films= [{titlu:"Wonder Woman",durata:141,actori:["Gal Gadot","Chris Pine","	Connie Nielsen","Robin Wright"] , vizualizat: true},
            {titlu:"Star Wars: Episode VIII - The Last Jedi",durata:152,actori:["Mark Hamill","	Carrie Fisher","Adam Driver","Daisy Ridley"] , vizualizat: false}
           // {titlu:"Logan",durata:137,actori:["Patrick Stewart"] , vizualizat: false}
           // {titlu:"Guardians of the Galaxy Vol. 2",durata:136,actori:["Chris Pratt"] , vizualizat: true}
]
            console.log(films);

function creare(tag,text)
{
var elnou=document.createElement(tag);
var textnou=document.createTextNode(text);
elnou.appendChild(textnou);
return elnou;
}
window.onload=function()
{for(i in films){
var list=document.getElementById("lista");
var el1=creare("li",films[i].titlu);
list.appendChild(el1);
}

}    
