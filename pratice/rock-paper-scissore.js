

let score = JSON.parse(localStorage.getItem('score')) || {
                win: 0,
                lose:0,
                tie:0
            };
/*
if(score === null){
    score = {
        win: 0,
        lose:0,
        tie:0
    }
}
*/

function function1(playerMove){
    let result = '';
    const computerMove = computerMov();
    if(playerMove === 'rock'){
        if(computerMove === 'rock'){
            result = 'Tie';
        }else if(computerMove === 'paper'){
            result = 'lose';
        }else{
            result = 'win';
        }
    }else if(playerMove === 'paper'){
        if(computerMove === 'paper'){
            result = 'Tie';
        }else if(computerMove === 'scissors'){
            result = 'lose';
        }else{
            result = 'win';
        }
    }else{
        if(computerMove === 'scissors'){
            result = 'Tie';
        }else if(computerMove === 'rock'){
            result = 'lose';
        }else if(result === 'tie'){
            result = 'win';
        }
    }
    document.querySelector('.result').innerHTML = `You ${result}`;
    document.querySelector('.leaderBoard').innerHTML = `You ${playerMove} : Computer ${computerMove}`;

    if(result === 'win'){
        score.win+=1;
    }else if(result === 'lose'){
        score.lose+=1;
    }else{
        score.tie+=1;
    }
    localStorage.setItem('score',JSON.stringify(score));
    document.querySelector('.score-board').innerHTML = `win: ${score.win} , lose: ${score.lose} , Tie: ${score.tie}`;
}

document.querySelector('.resetScore-button').addEventListener('click',()=>{
    score.win = 0;
    score.lose = 0;
    score.tie = 0;
    document.querySelector('.score-board').innerHTML = `win: ${score.win} , lose: ${score.lose} , Tie: ${score.tie}`;
    localStorage.removeItem('score');
});



document.querySelector('.js-rock-button').addEventListener('click',()=>{
    function1('rock');
})

document.querySelector('.js-paper-button').addEventListener('click',()=>{
    function1('paper');
})

document.querySelector('.js-scissors-button').addEventListener('click',()=>{
    function1('scissors');
})

function computerMov(){
    let computerMove = '';
    const randomNumber = Math.random();
    if(randomNumber > 0 && randomNumber <= 1/3){
        computerMove = 'rock';
    }else if(randomNumber > 1/3 && randomNumber <= 2/3){
        computerMove = 'paper';
    }else{
        computerMove = 'scissors';
    }
    return computerMove;
}