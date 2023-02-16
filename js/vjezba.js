let text = " Lorem ispum dolor sit amet";
console.log(text);
var length = text.length
console.log("duljina teksta = " + length);

var wordSit = text.substring(19, 19+3);
console.log(wordSit);

text = text.replace('amet' , 'elit');
console.log(text);

var newText = text + ', consectetur adipiscing elit';
console.log(newText);

text = text.toUpperCase();
console.log(text);

text = text.trim();
console.log(text);

text.charAt(12);
console.log(text.charAt(12));