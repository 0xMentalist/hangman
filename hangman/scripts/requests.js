const startGame = async () => {
    aWord = await fetchPuzzle(3).then((puzzle) => puzzle.puzzle).catch((err)=> console.log(err))
    let firstGame = new Hangman(aWord)
    return firstGame
    }


const fetchPuzzle = async (wordCount) => {
   const data = await fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)      
        if(data.status === 200) {
            return data.json()
        } else {
            throw Error (`Can't get puzzle`)
        }
    }