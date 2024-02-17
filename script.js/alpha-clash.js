// function play(){
//    const homeSection = document.getElementById('home-screen');
//    homeSection.classList.add('hidden');


//    const playGroundSection = document.getElementById('play-ground');
//    playGroundSection.classList.remove('hidden')
// }

function continueGame(){
    const alphabet = getRandomAlphabt();
    console.log('Your random alphabet', alphabet);


    // set randomly generated alphabet display


    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

// set background color btn------

setBackgroundColorById(alphabet)

}

function handlerKeyboardButtonPress(event){
    const playerPressed = event.key;
    console.log('Player Pressed', playerPressed);

    // game over with escape----
    if(playerPressed === 'Escape'){
        gameOver();
    }
    // get the expected key----
    const currentAlphatet = document.getElementById('current-alphabet')
    const targetAlhpabet = currentAlphatet.innerText;
    const expectedAlphabet = targetAlhpabet.toLocaleLowerCase();
    console.log(playerPressed, expectedAlphabet);

    // check matched or not---
    if(playerPressed === expectedAlphabet){
        console.log('achire bhai achi');
        console.log('expected alphabet', expectedAlphabet);
        // update score-----
        const currentScoreById = document.getElementById('current-score');
        const currentScoreText = currentScoreById.innerText;
        const currentScore = parseInt(currentScoreText);
        console.log(currentScore);
        // increase score by one-----
        const newScore = currentScore + 1;
        // update score----
        currentScoreById.innerText = newScore;
        
        


        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    }
    else{
        console.log('ami nai');

        // life update----
        const currentLifeById = document.getElementById('current-life')
        const currentLifeText = currentLifeById.innerText;
        const currentLife = parseInt(currentLifeText);
        const life = currentLife - 1;
        currentLifeById.innerText = life;


        if(life === 0){
            gameOver();
        }
    
    }
}

document.addEventListener('keyup', handlerKeyboardButtonPress);



function play(){
    hideElementId('home-screen');
    hideElementId('final-score');
    showElementById('play-ground');

    setTextElementById('current-life', 5)
    setTextElementById('current-score', 0)

    continueGame();
}

function gameOver(){
    hideElementId('play-ground');
    showElementById('final-score');
    // final result----
    const finalResult = document.getElementById('current-score');
    console.log(finalResult);
    setTextElementById('final-result', finalResult.innerText);
    
    const currentTextAlphabet = getElementTextById('current-alphabet')
    // console.log(currentTextAlphabet);
    removeBackgroundColorById(currentTextAlphabet);

}


