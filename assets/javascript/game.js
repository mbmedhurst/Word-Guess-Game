let library = ['casino', 'ratpack', 'craps', 'gambling', 'bellagio', 'roulette', 'blackjack', 'hangover', 'sportsbook']

let chooseWord = _ => library[Math.floor(Math.random() * library.length)]

let word = chooseWord()

let hiddenWord = []

let guessesRemaining = 10

let wins = 0

function hideWord() {
    for (var i = 0; i < word.length; i++) {
        hiddenWord[i] = '_'
    }
}

function clearAll() {
    wins = 0
    guessesRemaining = 10
    playerGuess = []
    word = chooseWord()
    console.log(word)
    hideWord()
    document.querySelector('#wins').textContent = wins
    document.querySelector('#hiddenWord').innerHTML = hiddenWord.join(' ')
    document.querySelector('#guessesRemaining').textContent = guessesRemaining
    document.querySelector('#playerGuess').textContent = playerGuess
}

function playAgain() {
    guessesRemaining = 10
    playerGuess = []
    word = chooseWord()
    console.log(word)
    hideWord()
    document.querySelector('#hiddenWord').innerHTML = hiddenWord.join(' ')
    document.querySelector('#guessesRemaining').textContent = guessesRemaining
    document.querySelector('#playerGuess').textContent = playerGuess
    document.querySelector('#word').textContent = ''
}

clearAll()

function findSpot(letter) {
    for (var j = 0; j < word.length; j++) {
        if (word[j] === letter) {
            hiddenWord[j] = letter
        }
    }
}

document.onkeyup = e => {
    playerGuess.push(e.key.toLowerCase())
    document.querySelector('#playerGuess').innerHTML = playerGuess.join(' ')
    findSpot(e.key.toLowerCase())
    document.querySelector('#hiddenWord').innerHTML = hiddenWord.join(' ')
    if (hiddenWord.includes('_') && guessesRemaining > 1) {
        guessesRemaining--
        document.querySelector('#guessesRemaining').innerHTML = guessesRemaining
    } else if (!hiddenWord.includes('_') && guessesRemaining > 1) {
        document.querySelector('#word').innerHTML = word
        wins++
    } else {
        guessesRemaining--
        document.querySelector('#guessesRemaining').innerHTML = guessesRemaining
        document.querySelector('#word').innerHTML = word
    }
}



