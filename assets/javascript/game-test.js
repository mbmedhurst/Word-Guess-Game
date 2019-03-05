let word = 'catattack'
let hiddenWord = []
let playerGuess = []

function hideWord() {
    for (var i = 0; i < word.length; i++) {
        hiddenWord[i] = '_'
    }
}

function findSpot() {
    for (var j = 0; j < word.length; j++) {
        if (word[j] === letter) {
            hiddenWord[j] = letter
            console.log(hiddenWord)
            document.querySelector('#hiddenWord').innerHTML = hiddenWord.join(' ')
        }
    }
}
document.onkeyup = e => {
    playerGuess.push(e.key.toLowerCase())
    document.querySelector('#playerGuess').innerHTML = playerGuess.join(' ')
    findSpot()
}



console.log(word)
hideWord()
findSpot()
