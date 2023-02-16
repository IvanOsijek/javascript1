var tablica ="<table border=1>";



for(var i = 1; i<=10; i++) {
    tablica += "<tr><td> Name "+ i+ "</td><td> Rank "+ i+ "</td><td> Class "+ i+ " </td> </tr>"
    console.log("iteracija: " + i);
}

tablica +="</table>"
console.log(tablica);
document.write(tablica);
console.count(tablica);

