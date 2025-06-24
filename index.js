let cimg  = document.querySelector(".computerimg img");
let pimg =  document.querySelector(".playerimg img");
let cpoint = document.querySelector(".compPoints");
let ppoint = document.querySelector(".playerPoints");
let options = document.querySelectorAll(".options button");


options.forEach((option)=>{
    option.addEventListener("click",()=>{
        cimg.classList.add("shakecomp");
        pimg.classList.add("shakeplayer");

setTimeout(() => {
cimg.classList.remove("shakecomp");
pimg.classList.remove("shakeplayer");

pimg.src = option.innerHTML+"Player.png";
 let comp =["stone","paper","scissors"];
 let arrayNo = Math.floor(Math.random()*3);
 let compChoice = comp[arrayNo];
 cimg.src = compChoice+"Computer.png";

 let playerPoint = parseInt(ppoint.innerHTML);
 let computerPoint= parseInt(cpoint.innerHTML);

 if(option.innerHTML==="stone"){
    if(compChoice==="paper"){
        cpoint.innerHTML= computerPoint+1;
    }
    else if(compChoice==="scissors"){
        ppoint.innerHTML=playerPoint + 1;
    }
}
    else if(option.innerHTML==="paper"){
        if(compChoice==="scissors"){
            cpoint.innerHTML=computerPoint+1;
        }
        else if(compChoice==="stone"){
            ppoint.innerHTML=playerPoint+1;
        }
    }
    else {
        if(compChoice==="stone"){
            cpoint.innerHTML=computerPoint+1;
        }
        else if(compChoice==="paper"){
            ppoint.innerHTML=playerPoint+1;
        }
    }    
    
 

}, 900);

     
    });
});