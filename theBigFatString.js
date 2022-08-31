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


    /* if (chosen == "1") {
        outputfield.value = inputfield[0].toUpperCase() + inputfield.substring(1).toLowerCase() ||
            inputfield[0].toUpperCase() + inputfield.substring(1, inputfield.indexOf(" ")).toLowerCase();
    } */

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
            outputfield.value = (`${inputfield.indexOf(" ")+1} - ${inputfield.lastIndexOf(" ")-1} = ${inputfield.substring((inputfield.indexOf(" ")+1),inputfield.lastIndexOf(" "))}`);
            break
    }
    /*             
   
    <option value="4"></option>
    <option value="5">5.- If input is a filename: Check if a filename is .png or .jpg</option>
    <option value="6">6.- If input is a password: Hide a password with the correct number of *s</option>
    <option value="7">7.- With any input: Make the third character uppercase</option>
    <option value="8">8.- With any input: Make a character uppercase, if it follows a space or a hyphen</option>
 */
}




//note: parseInt(#formatSelector.options[formatselemmmmm id])
//console.log("name in string", theConst)
//using switch instead of if else statements with cases for the options case 1,2 etc + break so the next case doesnr run inmidiately

//const.substring(o,imputValue.indexOf" ")

//the last item is solfe with for loop

/* array.forEach(element => {

}); */