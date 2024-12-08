let gameSeq=[];
let userSeq=[];
let btns=["ylw","red","prl","grn"]
let started=false;
let level=0;
let h2=document.querySelector("h2");
document.addEventListener("keypress",function(){
    // console.log("GAME STARTED");
    if(started==false){
        console.log("Game started");
        started = true;
        levelUp();
    }
});

function GameFlash(btn){
    //this was used to access the class made in CSS
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function userFlash(btn){
    //this was used to access the class made in CSS
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}

function levelUp(){
    userSeq=[];
level++;
h2.innerText=`Level ${level}`;
let rnidx=Math.floor(Math.random()*3);
// 
let rclr=btns[rnidx];
let rndbtn=document.querySelector(`.${rclr}`);
gameSeq.push(rclr);
console.log(gameSeq);
GameFlash(rndbtn);
GameFlash(rndbtn);
}

function ans(idx){
    // console.log("curr level",level);
    // let idx=level-1;
    if(userSeq[idx] == gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,1000);
        } 
    }
    else{
        //first it was innertext but usme tags nahi de sakte is,ye we did it as innerHTML
        h2.innerHTML = `GAME OVER !! Your score was <b>${level}</b> <br> Press any key to start again !`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
        document.querySelector("body").style.backgroundColor="white";
        });
        reset();
    }
}


function btnPress(){
    // console.log("BTN WAS PRESSED");
    // let btn=this;
    userFlash(btn);

    userColor=btn.getAttribute("id");
    console.log(userColor);
    userSeq.push(userColor);
    ans(userSeq.length-1);
}
let allbtns=document.querySelectorAll(".btn");
for (btn of allbtns){
btn.addEventListener("click",btnPress);
}


function reset(){
    started=false;
    gameSeq=[];
    level=0;
    userSeq=[];
}