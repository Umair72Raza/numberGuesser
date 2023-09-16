let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => Math.floor(Math.random()*10);

const getAbsoluteDistance = (num1, num2) => Math.abs(num1 - num2);

function compareGuesses(userGuess, CompGuess, secretTarget){ 
    if(userGuess>9 || userGuess<0){
        alert('Your guess is out of range');
    }
    let userDiff = getAbsoluteDistance(userGuess,secretTarget);
    let compDiff = getAbsoluteDistance(CompGuess,secretTarget);
    if(userDiff < compDiff || userDiff===compDiff){
        return true;
    }
    else{
        return false;
    }
}
//should return true
//console.log(compareGuesses(7, 5, 10));

//should return false
//console.log(compareGuesses(10,15,20));

function updateScore(winner){
    if(winner==='human')
    {
        humanScore +=1;
    }
    else if (winner==='computer'){
        computerScore+=1;
    }
}

function advanceRound(){
    currentRoundNumber+=1;
}

