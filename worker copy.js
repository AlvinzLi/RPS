/*
let roller = Math.floor(Math.random()*3)
let customnumber = whole(3)
function whole(limit){
 return Math.floor(Math.random()*limit)
}
console.log(customnumber)
function rock(){
    if(customnumber==0){
        console.log("rock")
    }
}
*/
const displayP = document.querySelector("#playerchoice")
const displayC = document.querySelector("#computerchoice")
const message = document.querySelector("#message")
const playerwinstreak = document.querySelector("#w")
const computerscore = document.querySelector("#computerscore")
const score = document.querySelector("#score")
const playerhighscore = document.querySelector("#playerhigh")
const results = document.querySelector("#results")
const buttons = document.querySelectorAll("button")
let winstreak = 0
let highest_W = 0
let playerselect
let computerselect
let pscore = 0
let cscore = 0
buttons.forEach((button) =>{
    button.addEventListener('click',()=>{
        playerselect = button.id   
        computerselect = getcomputer()
        DISPLAY()
        game()
        
    })
})
function getcomputer(){
    let Cselect;
    let roller = Math.floor(Math.random()*3)+1;
    if(roller==1)Cselect = "rock";
    else if(roller == 2)Cselect = "paper";
    else if (roller ==3)Cselect = "scissors";
    else throw "computer is confused";
    return Cselect; 
}
function game(){
    message.textContent = "keep selecting for wins"
    round(playerselect, computerselect)
    score.textContent = `Player Score: ${pscore}`
    computerscore.textContent = `Computer Score ${cscore}`
    
}
function round(p, c){
    let roundresults
    console.log("player selected",  p)
    console.log("computer selected",  c)
    if(p=="rock"){
        if(c=="rock"){
            roundresults = "TIE both selected rock"
        }
        else if(c=="paper"){
            roundresults = " PLAYER LOSS "
            winstreak = 0
            cscore+=1
        }
        else if(c=="scissors"){
            roundresults = "PLAYER WINS"
            winstreak +=1
            pscore+=1
            if(winstreak > highest_W){
                highest_W = winstreak
            }
        }
        
        
    }
    else if(p=="paper"){
        if(c=="rock"){
            roundresults = "PLAYER WIN"
            winstreak +=1
            pscore+=1
            if(winstreak > highest_W){
                highest_W = winstreak
            }
        }
        else if(c=="paper"){
            roundresults = "TIE both selected paper"
        }
        else if(c=="scissors"){
            roundresults = "PLAYER LOSS"
            winstreak = 0
            cscore+=1
        }
        
        
    }
    else if(p=="scissors"){
        if(c=="rock"){
            roundresults = "PLAYER LOSS"
            winstreak = 0
            cscore+=1
        }
        else if(c=="paper"){
            roundresults = "PLAYER WIN"
            winstreak +=1
            pscore+=1
            if(winstreak > highest_W){
                highest_W = winstreak
            }
        }
        else if(c=="scissors"){
            roundresults = "TIE both selected scissors"

        }
        
        
    }console.log(roundresults)
    results.textContent = roundresults
    playerwinstreak.textContent = ` Player Winstreak = ${winstreak}`
    playerhighscore.textContent = `Player Highest Winstreak = ${highest_W}`
}

function DISPLAY(){
    displayC.textContent = `computer selected ${computerselect}`
    displayP.textContent = `player selected ${playerselect}`
}