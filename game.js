let userScore = 0;
let computerScore = 0;
const gameuserscore = document.getElementById('userscore');
const gamecomputerscore = document.getElementById('computerscore');
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissor = document.getElementById('scissor');
const gameresult = document.querySelector('.result > p');
let rockaud = document.getElementById('r');
let paperaud = document.getElementById('p');
let scissoraud = document.getElementById('s');


function computerchoices(){
    const choices = ['Rock','Paper','Scissor'];
    const ranNum = Math.floor(Math.random() * 3);
    return choices[ranNum];
}

function win(userchoice,computerchoice){
    userScore++;
    gameuserscore.innerHTML = userScore;
    gamecomputerscore.innerHTML = computerScore;
    gameresult.innerHTML= `${userchoice}(user) beats ${computerchoice}(computer)  YOU WIN !`;
}

function lose(userchoice,computerchoice){
    computerScore++;
    gameuserscore.innerHTML = userScore;
    gamecomputerscore.innerHTML = computerScore;
    gameresult.innerHTML = `${userchoice}(user) loses to ${computerchoice}(computer)  YOU LOSS !`;
}

function draw(userchoice,computerchoice){
    gameuserscore.innerHTML = userScore;
    gamecomputerscore.innerHTML = computerScore;
    gameresult.innerHTML = `ITS DRAW ! `;
}


function game(userchoice){
    const computerchoice = computerchoices();
    switch (userchoice + computerchoice) {
        case 'RockScissor':
        case 'ScissorPaper':
        case 'PaperRock':
        win(userchoice,computerchoice);
        break;
        case 'RockPaper':
        case 'ScissorRock':
        case 'PaperScissor':
        lose(userchoice,computerchoice);
        break;
        case 'RockRock':
        case 'ScissorScissor':   
        case 'PaperPaper':
        draw(userchoice,computerchoice);
        break;
    }
}

function main(){
    rock.addEventListener('click', function(){
        game('Rock');
        rockaud.play();
    });
    paper.addEventListener('click', function(){
        game('Paper');
        paperaud.play();
    });
    scissor.addEventListener('click', function(){
        game('Scissor');
        scissoraud.play();
    });
}

main();

const restartgame = document.getElementById('res');
restartgame.addEventListener('click', function(){
    window.location.reload();
})