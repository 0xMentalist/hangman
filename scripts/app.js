const newGame = async () => {
let firstGame

let randomCount = Math.floor(3 * Math.random() + 1)

const puzzle = await fetchPuzzle(randomCount)

firstGame = new Hangman(puzzle.puzzle)
firstGame.renderer()
getInput.addEventListener('keypress', function(e){
e.preventDefault();
let aGuess = String.fromCharCode(e.charCode);
firstGame.checkGuess(aGuess.toLowerCase());
})

}

const getInput = document.querySelector('#getGuess');
const resetButton = document.querySelector('#reset');
resetButton.addEventListener('click', function(e){
location.reload();
})

newGame();
