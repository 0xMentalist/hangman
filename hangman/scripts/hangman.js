class Hangman {
    constructor(word, guessed = []){
        this.word = word.toLowerCase().split('');
        this.guesses = 10
        this.guessed = guessed
        this.em
        this.status
    }
    getHanged = function(){
        if(this.guesses > 0){
        let displayGame = []
        this.word.forEach((letter) => { 
            if (this.guessed.find((guess) => guess === letter) || letter === ' '){ 
                displayGame.push(letter)
        } 
        else { 
        displayGame.push('*');
      }})
    return displayGame.join('');
        }
        else {
            return this.word.join('');
        }
    }
    renderer = function(){
        let printHere = document.querySelector('#game');
        let gameRender = document.createElement('div');
        let guessesLeft = document.createElement('p');
        let statuses = document.createElement('p');
        let emr = document.createElement('p');
        let alreadyGuessed = document.createElement('p')

        gameRender.setAttribute('class', 'puzzle')

        this.statusCheck()
    
        printHere.innerHTML = ''
        printHere.appendChild(gameRender);

        let letters = this.getHanged().split('')

        letters.forEach((letter) => {
            let gameRenderL = document.createElement('span')
            gameRenderL.textContent = letter
            gameRender.appendChild(gameRenderL);
        })


        
        

        if(this.status !== 'You won!') {
        guessesLeft.textContent = `YOU HAVE ${this.guesses} GUESSES LEFT`
        } else {
            guessesLeft.textContent = ''
        }
        printHere.appendChild(guessesLeft);

    
        emr.textContent = this.em 
        printHere.appendChild(emr);
    
        statuses.textContent = this.status
        printHere.appendChild(statuses);
    
        alreadyGuessed.textContent = this.guessed
        printHere.appendChild(alreadyGuessed);
    }
    checkGuess = function(aGuess){
            if(this.guesses > 0) {
                const lengthCheck = aGuess.length > 1
                const alreadyGuessed = this.guessed.includes(aGuess)
                const badGuess = !this.word.includes(aGuess)
                if (lengthCheck){
                this.em = 'Enter One Guess At A Time!'
                
                }
                else{
                if (alreadyGuessed){
                    this.em = 'Already Guessed'
                    }
                else{
                    this.guessed.push(aGuess)
                    if (badGuess){
                        this.guesses--
                        if(this.guesses !== 0){
                        this.em = 'Guess Again!'
                        } else {
                            this.em = 'Sorry! Out Of Guesses'
                        }
                    }
                    else {
                        this.em = 'Good Job!'
                    }
                }
                this.renderer()
            }
            }
            else{
                this.renderer()
                this.em = 'Sorry! Out Of Guesses'
            }
        }
    statusCheck = function(){
            if (this.guesses <= 0){
                this.status = 'You\'re out of guesses, thanks for Playing'
            }
            else if (!this.getHanged().includes('*')){
                this.status = 'You won!'
                getInput.remove()
            }
            else {
                this.status = ''
            }
}
}











