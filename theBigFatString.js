"use strict";
document.addEventListener("DOMContentLoaded", init);



let inputfield;
let outputfield = document.querySelector("#output");
const btn = document.querySelector("#button");

const options = document.querySelector("#dropdown");
let chosen;




function init() {
    btn.addEventListener("click", inputFunt);
}


function inputFunt() {
    inputfield = document.querySelector("#input").value;
    chosen = options.value;

    switch (chosen) {
        case "1":
            chosen === 1;
            //1.- If input is a first name: Make the first character in a name uppercase, and the rest lowercase
            outputfield.value = inputfield[0].toUpperCase() + inputfield.substring(1).toLowerCase() ||
                inputfield[0].toUpperCase() + inputfield.substring(1, inputfield.indexOf(" ")).toLowerCase();
            break
        case "2":
            chosen === 2;
            //2.- If input is a full name: Find the first name
            outputfield.value = inputfield.substring(0, inputfield.indexOf(" "));
            break
        case "3":
            chosen === 3;
            //3.- If input is a full name: Find the length of the first name
            outputfield.value = inputfield.substring(0, inputfield.indexOf(" ")).length;
            break
        case "4":
            chosen === 4;
            //4.- If input is a full name: Find the middle name start and end position, and the middle name itself in a fullname string
            outputfield.value = (`${inputfield.indexOf(" ")+1} - ${inputfield.lastIndexOf(" ")-1} = 
            ${inputfield.substring((inputfield.indexOf(" ")+1),inputfield.lastIndexOf(" "))}`);
            break
        case "5":
            chosen === 5;
            //5.- If input is a filename: Check if a filename is .png or .jpg
            outputfield.value = inputfield.endsWith(`.png`) || inputfield.endsWith(`.jpg`);
            break
        case "6":
            chosen === 6;
            //6.- If input is a password: Hide a password with the correct number of *s
            outputfield.value = ("*").repeat(inputfield.length);
            break
        case "7":
            chosen === 7;
            //7.- With any input: Make the third character uppercase
            outputfield.value = inputfield[3].toUpperCase()
            //1.- If input is a first name: Make the first character in a name uppercase, and the rest lowercase
            outputfield.value = replace(inputfield[2], inputfield[2].toUpperCase());
            //can i use an array method here?
            break
        case "8":
            chosen === 8;
            //8.- With any input: Make a character uppercase, if it follows a space or a hyphen
            //outputfield.value = inputfield.substring(0, inputfield.indexOf(" ")).length;

            break
    }

}




//the last item is solfe with for loop

/* array.forEach(element => {

}); */