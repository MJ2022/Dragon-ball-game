var totalMatch= 0;
var totalWin= 0;
var totalLost= 0;
var totalDraw=0;
const ROCK= "rock";
const PAPER="paper";
const SCISSORS="scissors";
const WIN=0;
const LOST=1;
const TIE= 2;
const resultGame= document.getElementById("resultgame");
const userImg= document.getElementById("userimg");
const machineImg= document.getElementById("machineimg");

let resetBtn= document.getElementById("button");
resetBtn.addEventListener("click",resetScore)

let rockBtn = document.getElementById("rock");
    rockBtn.addEventListener('click',()=>{
        play(ROCK)
    })
    let paperBtn = document.getElementById("paper");
    paperBtn.addEventListener('click',()=>{
        play(PAPER)
    })
    let scissorsBtn = document.getElementById("scissors");
    scissorsBtn.addEventListener('click',()=>{
        play(SCISSORS)
    })

function play(userOption){
    const machineOption = caclMachineOption();
    const result = getResult(userOption,machineOption);

    userImg.src = "Assets/"+userOption+".jpg";
    machineImg.src = "Assets/"+machineOption+".jpg";

    switch(result){
        case TIE:
            resultGame.innerHTML ="WE ARE TIE THIS TIME";
            break;
        case WIN:
            resultGame.innerHTML = "¡¡¡ YOU SAVE THE WORLD SAYAYIN !!!";
            break;
        case LOST:
            resultGame.innerHTML = "YOU ARE REALLY DEAD HAHAHA";
    };

    score(result);
}

function caclMachineOption (){
   const number= Math.floor (Math.random() * 3);

   switch (number) {
    case 0:
        return ROCK;
    case 1:
        return PAPER;
    case 2:
        return SCISSORS;
   }
}

function getResult (userOption,machineOption){
    if (userOption === machineOption){
        return TIE;
    }
    else if (userOption===ROCK){
        if (machineOption===PAPER)
            return LOST;
        if (machineOption === SCISSORS)
            return WIN;
        } 
    else if (userOption===PAPER){
        if (machineOption===ROCK)
            return WIN;
        if (machineOption === SCISSORS)
            return LOST;
    } 
    else if (userOption===SCISSORS){
        if (machineOption===ROCK)
                return LOST;
        if (machineOption === PAPER)
                return WIN;
            } 
}

function score(result){
    if (result === WIN){
        ++totalWin;
    }
    else if (result === LOST){
        ++totalLost;
    }
    else {++totalDraw;  
    }
    ++totalMatch;

    updateStats(totalMatch,totalWin,totalLost,totalDraw)
}

function updateStats(totalMatch,totalWin,totalLost,totalDraw) {
    let Games= document.getElementById("games");
    let Win= document.getElementById("wins");
    let Loses= document.getElementById("loses");
    let Ties= document.getElementById("ties");
    Games.textContent= "Games: " + totalMatch;
    Win.textContent= "Wins: " + totalWin;
    Loses.textContent= "Loses: " + totalLost;
    Ties.textContent= "Ties: " + totalDraw;
}

function resetScore() {
	totalMatch = 0;
	totalWin = 0;
	totalLost = 0;
	totalDraw = 0;
    resultGame.innerHTML=""
	updateStats(totalMatch, totalWin, totalLost, totalDraw);
}




