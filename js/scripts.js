// const playNow = document.getElementById('home-play-btn').addEventListener('click',function(){
//     const homeScreen = document.getElementById('home-screen');
//     const playGroundScreen = document.getElementById('playground-screen');
//     homeScreen.classList.add('hidden');
//     playGroundScreen.classList.remove('hidden');
// })

function handleKeyboardButtonPressed(event) {
    const playerPressed = event.key;

    if (playerPressed === 'Escape') {
        gameOver();
    }

    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();;

    if (playerPressed === expectedAlphabet) {
        const currentScore = getTextElementValueById('current-score');
        const updatedScore = currentScore + 1
        setTextElementValueById('current-score', updatedScore);


        // ------------Ignore this method----------------------
        // const currentScoreElement = document.getElementById('current-score');
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreText);
        // const newScore = currentScore + 1;
        // currentScoreElement.innerText = newScore;

        removeBgColorById(expectedAlphabet);
        continueGame();
    }
    else {
        const currentLife = getTextElementValueById('current-life');
        const updatedLife = currentLife - 1;
        setTextElementValueById('current-life', updatedLife);
        if (updatedLife === 0) {
            gameOver();
        }
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
    hideElementById('score-screen');
    showElementById('playground-screen');
    setTextElementValueById('current-life', 5);
    setTextElementValueById('current-score', 0);
    continueGame();
}
function gameOver() {
    hideElementById('playground-screen')
    showElementById('score-screen');

    const lastScore = getTextElementValueById('current-score');
    setTextElementValueById('game-score', lastScore);

    const currentAlphabet = getElementTextById('current-alphabet');
    removeBgColorById(currentAlphabet);
}