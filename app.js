let firstGame = new Hangman('testing');

firstGame.renderer();
    
const getInput = document.querySelector('#getGuess');

getInput.addEventListener('keypress', function(e){
e.preventDefault();
firstGame.renderer();
let aGuess = String.fromCharCode(e.charCode);
console.log(aGuess.length);
firstGame.checkGuess(aGuess);
}
)

/*

getPuzzle = function(){
let requestPuzzle = new XMLHttpRequest()
let puzzle
requestPuzzle.open('GET', 'https://puzzle.mead.io/puzzle')
requestPuzzle.send()
requestPuzzle.addEventListener('readystatechange', function(e){
    console.log(e.target.readyState);
        if(e.target.readyState === 4){
        puzzle = JSON.parse(e.target.responseText)
        return puzzle
        }
    })   
}


*/