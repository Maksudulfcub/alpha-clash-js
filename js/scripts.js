// const playNow = document.getElementById('home-play-btn').addEventListener('click',function(){
//     const homeScreen = document.getElementById('home-screen');
//     const playGroundScreen = document.getElementById('playground-screen');
//     homeScreen.classList.add('hidden');
//     playGroundScreen.classList.remove('hidden');
// })

function handleKeyboardButtonPressed(event) {
    const playerPressed = event.key;
    console.log('Player pressed', playerPressed);

    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    console.log('Current alphabet is :', expectedAlphabet);

    if (playerPressed === expectedAlphabet) {
        console.log('You get a point');
        const currentScoreElement = document.getElementById('current-score');
        const currentScoreText = currentScoreElement.innerText;
        const currentScore = parseInt(currentScoreText);
        const newScore = currentScore + 1;
        currentScoreElement.innerText = newScore;

        removeBgColorById(expectedAlphabet);
        continueGame();
    }
    else {
        const currentLifeElement = document.getElementById('current-life');
        const currentLifeText = currentLifeElement.innerText;
        const currentLife = parseInt(currentLifeText);
        const newLife = currentLife - 1;
        currentLifeElement.innerText = newLife;
    }
}
document.addEventListener('keyup', handleKeyboardButtonPressed)

function continueGame() {
    const alphabet = getARandomAlphabet();
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    setBgColorById(alphabet);
}

function play() {
    hideElementById('home-screen');
    showElementById('playground-screen');
    continueGame();
}