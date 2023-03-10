const buttons = document.querySelectorAll('.pick');
const scoreEl = document.getElementById('score');
const main = document.getElementById('main');
const selection = document.getElementById('selection');
const reset = document.getElementById('reset');
const user_select = document.getElementById('user_select');
const computer_select = document.getElementById('computer_select');
const winner = document.getElementById('winner');

const modal = document.getElementById('modal');
const openbtn = document.getElementById('open');
const closebtn = document.getElementById('close');

const choices = ['paper','rock','scissors'];

let score = 0;
let userChoice = undefined;

buttons.forEach((button)=>{
    button.addEventListener('click',()=>{
        userChoice= button.getAttribute('data-choice');

        
        checkWinner();
    });

});

reset.addEventListener('click',()=>{
    main.style.display='flex';
    selection.style.display='none'; 

});
openbtn.addEventListener('click',()=>{
    modal.style.display='flex';

});
closebtn.addEventListener('click',()=>{
    modal.style.display='none';
    

});

function checkWinner(){
    const computerChoice = pickRandomChoice();

    // update the view 
    updateSelection(user_select,userChoice);
    updateSelection(computer_select,computerChoice);


    if(userChoice === computerChoice){
        // draw
        winner.innerText='draw';
    }
    else if(
        (userChoice==='paper'&& computerChoice==='rock'|| userChoice==='rock'&& computerChoice==='scissors'||
        userChoice==='scissors'&& computerChoice==='paper')
    ){
        //user won
        updateScore(1);
        winner.innerText='win';
    }
    else{
        // user lost
        updateScore(-1);
        winner.innerText='lost';
    }
    // show the seleciton and hide main
    main.style.display='none';
    selection.style.display= 'flex';
}

function updateScore(value){
    score+= value;
    scoreEl.innerText= score;
}

function pickRandomChoice(){
    return choices[Math.floor(Math.random()* 
        choices.length)];
}

function updateSelection(selectionEl,choice){
    // class reset
    selectionEl.classList.remove('paper');
    selectionEl.classList.remove('rock');
    selectionEl.classList.remove('scissors');

    const img = selectionEl.querySelector('img');

    selectionEl.classList.add(`${choice}`);
    img.src=`./images/icon-${choice}.svg`;
    img.alt = choice;
}