function hideElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function showElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

function setBgColorById (elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-pink-400');
}

function removeBgColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-pink-400');
}

function getARandomAlphabet() {
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');

    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber);

    const alphabet = alphabets[index];
    return alphabet;
}