const newGame = async () => {
let firstGame

const puzzle = await fetchPuzzle(2)

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