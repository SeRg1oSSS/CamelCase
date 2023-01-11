var str = "camel-cAsE";


str = str.replace(/-|_|,/g," ").replace(/^ +| +$|( ) +/g,"$1");

words = str.split(" ");

for(let i = 1; i < words.length; i++){
    words[i] = words[i].toLowerCase();
}

if(str[0] === str[0].toUpperCase()){
    for(let i = 0; i < words.length; i++){
        words[i] = words[i][0].toUpperCase() + words[i].substr(1);
         str = words.join("");
    }}else{
    for(let i = 0; i < words.length; i++){
        words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }
     words.join('');
     str = words.join('')[0].toLowerCase() + words.join('').substring(1);
}
console.log(str);