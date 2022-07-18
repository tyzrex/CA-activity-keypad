
let count = 0;
let btn0 = document.getElementById("first");
let btn1 = document.getElementById("second");
let btn2 = document.getElementById("third");
let btn3 = document.getElementById("fourth");
let btn4 = document.getElementById("fifth");
let btn5 = document.getElementById("six");
let btn6 = document.getElementById("seven");
let btn7 = document.getElementById("eight");
let btn8 = document.getElementById("nine");
let btn9 = document.getElementById("ten");
let btn10 = document.getElementById("eleven");
let btn11 = document.getElementById("twelve");
let clear = document.getElementById("clr");
let enter = document.getElementById("enter");
let disp = document.getElementById("display");
let eCode = [65,68,71,74,77,80,84,86,90]
btn0.onclick = () =>{
    enter.onclick = () => {
        disp.innerHTML += 1;
    }
}

btn1.onclick = () => {
  let i = count;
    if(i===0){
        enter.onclick = () => {
            disp.innerHTML += 2 ;
            count = 0;
        }
    }
    else if(i<=4 && eCode[0]<=67){
        const charDisplay = String.fromCharCode(eCode[0]++);
        enter.onclick = () => {
            disp.innerHTML += charDisplay;
            count = 0;
            eCode[0] = 65;
        }        
        
    }
    else{
        enter.onclick = () => {
            disp.innerHTML += 2 ;
            count = 0;
            eCode[0] = 65;
        }
        count = 0;
    }
    count++;
};


btn2.onclick = () =>{
    let i = count;
    if(i===0){
        enter.onclick = () => {
            disp.innerHTML += 3 ;
            count = 0;
        }
    }
    else if(i<=4 && eCode[1]<=70){
        const charDisplay = String.fromCharCode(eCode[1]++);
        enter.onclick = () => {
            disp.innerHTML += charDisplay;
            count = 0;
            eCode[1] = 68;
        }        
    }
    else{
        enter.onclick = () => {
            disp.innerHTML += 2 ;
            count = 0;
            eCode[1] = 68;
        }
        count = 0;  
    }
    count++;
    
};

btn3.onclick = () =>{
    let i = count;
    if(i===0){
        enter.onclick = () => {
            disp.innerHTML += 4 ;
            count = 0;
        }
    }
    else if(i<=4 && eCode[1]<=74){
        const charDisplay = String.fromCharCode(eCode[2]++);
        enter.onclick = () => {
            disp.innerHTML += charDisplay;
            count = 0;
            eCode[2] = 71;
        }        
    }
    else{
        enter.onclick = () => {
            disp.innerHTML += 2 ;
            count = 0;
            eCode[2] = 71;
        }
        count = 0;   
    }
    count++;
};

btn4.onclick = () =>{
    let i = count;
    if(i===0){
        enter.onclick = () => {
            disp.innerHTML += 5 ;
            count = 0;
        }
    }
    else if(i<=4 && eCode[1]<=77){
        const charDisplay = String.fromCharCode(eCode[3]++);
        enter.onclick = () => {
            disp.innerHTML += charDisplay;
            count = 0;
            eCode[3] = 74;
        }        
    }
    else{
        enter.onclick = () => {
            disp.innerHTML += 2 ;
            count = 0;
            eCode[3] = 74;
        }
        count = 0;    
    }
    count++;
};

btn5.onclick = () =>{
    let i = count;
    if(i===0){
        enter.onclick = () => {
            disp.innerHTML += 6 ;
            count = 0;
        }
    }
    else if(i<=4 && eCode[1]<=80){
        const charDisplay = String.fromCharCode(eCode[4]++);
        enter.onclick = () => {
            disp.innerHTML += charDisplay;
            count = 0;
            eCode[4] = 77;
        }        
    }
    else{
        enter.onclick = () => {
            disp.innerHTML += 2 ;
            count = 0;
            eCode[4] = 77;
        }
        count = 0;     
    }
    count++;
};


btn6.onclick = () =>{
    let k = count;
    if(k===0){
        
        enter.onclick = () => {
            count = 0;
            disp.innerHTML += 7 ;
        }

    }
    else if(k<=5 && eCode[5]<=84){
        const charDisplay = String.fromCharCode(eCode[5]++);
        console.log(charDisplay);
        enter.onclick = () => {
            disp.innerHTML = disp.innerHTML + charDisplay; 
            count = 0;
            eCode[5] = 80;
        }       
        count = 0;

    }
    else{
        enter.onclick = () => {
            disp.innerHTML += 2 ;
            count = 0;
            eCode[5] = 80;
        }
        count = 0;    
    }
    count++;
    console.log(count);
}

console.log(count);

btn7.onclick = () =>{
    let i = count;
    if(i===0){
        enter.onclick = () => {
            disp.innerHTML += 8 ;
            count = 0;
        }
    }
    else if(i<=4 && eCode[6]<=86){
        const charDisplay = String.fromCharCode(eCode[6]++);
        enter.onclick = () => {
            disp.innerHTML += charDisplay;
            count = 0;
            eCode[6] = 84;
        }        
    }
    else{
        enter.onclick = () => {
            disp.innerHTML += 2 ;
            count = 0;
            eCode[6] = 84;
        }
        count = 0;     
    }
    count++;
};

btn8.onclick = () =>{
    let i = count;
    if(i===0){
        enter.onclick = () => {
            disp.innerHTML += 9 ;
            count = 0;
        }
    }
    else if(i<=5 && eCode[7]<=90){
        const charDisplay = String.fromCharCode(eCode[7]++);
        enter.onclick = () => {
            disp.innerHTML += charDisplay;
            count = 0;
            eCode[7] = 87;
        }        
    }
    else{
        enter.onclick = () => {
            disp.innerHTML += 2 ;
            count = 0;
            eCode[7] = 87;
        }
        count = 0;   
    }
    count++;
};

btn9.onclick = () =>{
    enter.onclick = () => {
    disp.innerHTML += "*";}
}

btn10.onclick = () =>{
    enter.onclick = () => {
    disp.innerHTML += 0 ;}
}

btn11.onclick = () =>{
    enter.onclick = () => {
    disp.innerHTML += '#' ;}
}

clr.onclick = () =>{
    disp.innerHTML = "";
}

document.addEventListener("keydown", event => {
    if(event.key==='1')
    btn0.onclick();
  });

document.addEventListener("keydown", event => {
    if(event.key==='2')
    btn1.onclick();
  });


document.addEventListener("keydown", event => {
    if(event.key==='3')
    btn2.onclick();
  });

document.addEventListener("keydown", event => {
    if(event.key==='4')
    btn3.onclick();
  });


document.addEventListener("keydown", event => {
    if(event.key==='5')
    btn4.onclick();
  });

document.addEventListener("keydown", event => {
    if(event.key==='6')
    btn5.onclick();
  });

document.addEventListener("keydown", event => {
    if(event.key==='7')
    btn6.onclick();
  });
  

  document.addEventListener("keydown", event => {
    if(event.key==='8')
    btn7.onclick();
  });

document.addEventListener("keydown", event => {
    if(event.key==='9')
    btn8.onclick();
  });


document.addEventListener("keydown", event => {
    if(event.key==='0')
    btn9.onclick();
  });

  
document.addEventListener("keydown", event => {
    if(event.key==='Enter')
    enter.onclick();
});

document.addEventListener("keydown",event => {
    if(event.key==='c')
        clear.onclick();
})

const burger = document.getElementById("burger");
const menu = document.getElementById("menu");

burger.onclick = () => {
    if(menu.classList.contains("hidden")){
        menu.classList.remove("hidden");
    }
    else{
        menu.classList.add("hidden");
    }
}