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


    // get the expected key----
    const currentAlphatet = document.getElementById('current-alphabet')
    const targetAlhpabet = currentAlphatet.innerText;
    const expectedAlphabet = targetAlhpabet.toLocaleLowerCase();
    console.log(playerPressed, expectedAlphabet);

    // check matched or not---
    if(playerPressed === expectedAlphabet){
        console.log('achire bhai achi');
        console.log('expected alphabet', expectedAlphabet);
        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    }
    else{
        console.log('ami nai');
    }

}

document.addEventListener('keyup', handlerKeyboardButtonPress);



function play(){
    hideElementId('home-screen');
    showElementById('play-ground')
    continueGame()
}
