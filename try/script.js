"use strict";

let input = document.getElementById('input'), // input/output button
  number = document.querySelectorAll('.numbers div'), // number buttons
  resultDisplayed = false; // flag to keep an eye on what output is displayed
  let equiCode = 65;
  let count = 0; 
// adding click handlers to number buttons
for (var i = 0; i <number.length; i++) {
  number[i].addEventListener("click", function(e) {
    count++;
    let j = count;
    // if result is not diplayed, just keep adding
    if (resultDisplayed === false) {
        //   let i = count;
    if(j===0){
        enter.onclick = () => {
            input.innerHTML += 2 ;
            count = 0;
        }
    }
    else if(j<=4 && equiCode<=67){
        const charDisplay = String.fromCharCode(equiCode++);
        enter.onclick = () => {
            input.innerHTML += charDisplay;
            count = 0;
            equiCode = 65;
        }        
    }
    else{
        count = 0;    
        equiCode = 65;
        input.innerHTML += e.target.innerHTML; 
    }
    count++;
  
        // else{
        //     count=0;
        //     equiCode=65;
        // }
    } else {
      // if result is currently displayed and user pressed a number
      // we need clear the input string and add the new input to start the new opration
      resultDisplayed = false;
      input.innerHTML = "";
      input.innerHTML += e.target.innerHTML;
    }
  });
}