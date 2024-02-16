function hideElementId(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden')
}



function showElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden')
}

function getRandomAlphabt() {
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');
    // console.log(alphabets);



    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber);



    const alphabet = alphabets[index];
    // console.log( alphabet, index);
    return alphabet;


}


function setBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');
}