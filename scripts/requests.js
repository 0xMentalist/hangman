const fetchPuzzle = async (wordCount) => {
   const data = await fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)      
        if(data.status === 200) {
            return data.json()
        } else {
            throw Error (`Can't get puzzle`)
        }
    }
