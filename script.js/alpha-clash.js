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



function play(){
    hideElementId('home-screen');
    showElementById('play-ground')
    continueGame()
}
