let library = ['casino', 'ratpack', 'craps', 'roulette', 'blackjack', 'hangover', 'elvis']

let chooseWord = _ => library[Math.floor(Math.random() * library.length)]

let word = chooseWord()

let hiddenWord = []

let guessesRemaining = 15

let wins = 0

function hideWord() {
    for (var i = 0; i < word.length; i++) {
        hiddenWord[i] = '_'
    }
}

function clearAll() {
    wins = 0
    guessesRemaining = 15
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
    guessesRemaining = 15
    playerGuess = []
    word = chooseWord()
    console.log(word)
    hideWord()
    document.querySelector('#hiddenWord').innerHTML = hiddenWord.join(' ')
    document.querySelector('#guessesRemaining').textContent = guessesRemaining
    document.querySelector('#playerGuess').textContent = playerGuess
    document.querySelector('#word').textContent = ''
    document.querySelector('#display').innerHTML = ''
}

clearAll()

// letter parameter is = ekey so this takes e.key and checks it against the word to see if there is a match
// thank you JB!

function findSpot(letter) {
    for (var j = 0; j < word.length; j++) {
        if (word[j] === letter) {
            hiddenWord[j] = letter // if there is a match the letter replaces the underscore in that position
        }
    }
}

document.onkeyup = e => {
    // on keyup the key pressed by user is turned to lower case and added to player guess array
    playerGuess.push(e.key.toLowerCase())
    // the player guess array is refresed on the screen to show latest guess
    document.querySelector('#playerGuess').innerHTML = playerGuess.join(' ')
    // the find spot from above function is run to check if the player guess matches any letters in the word
    findSpot(e.key.toLowerCase())
    // and the hidden word is updated on the screen to show any matched letters
    document.querySelector('#hiddenWord').innerHTML = hiddenWord.join(' ')

    // logic starts here - probably not the most efficient way

    if (hiddenWord.includes('_') && guessesRemaining > 1) {
        guessesRemaining--
        document.querySelector('#guessesRemaining').innerHTML = guessesRemaining
    } else if (!hiddenWord.includes('_') && guessesRemaining > 1) {
        document.querySelector('#word').innerHTML = word
        wins++ // not working for some reason
        document.querySelector('#wins').innerHTML = wins
        switch(word) {
            case 'hangover':
            document.querySelector('#display').innerHTML = "<img src=\./assets/images/hangover.jpg\>"
            break
            case 'blackjack':
            document.querySelector('#display').innerHTML = "<img src=\./assets/images/blackjack.png\>"
            break
            case 'craps':
            document.querySelector('#display').innerHTML = "<img src=\./assets/images/craps2.jpg\>"
            break
            case 'roulette':
            document.querySelector('#display').innerHTML = "<img src=\./assets/images/roulette.jpg\>"
            break
            case 'casino':
            document.querySelector('#display').innerHTML = "<img src=\./assets/images/casino.png\>"
            break
            case 'ratpack':
            document.querySelector('#display').innerHTML = "<img src=\./assets/images/ratpack.jpg\>"
            break
            case 'elvis':
            document.querySelector('#display').innerHTML = "<img src=\./assets/images/elvis.jpg\>"
            break
        }
    } else {
        guessesRemaining--
        document.querySelector('#guessesRemaining').innerHTML = guessesRemaining
        document.querySelector('#word').innerHTML = word
        switch(word) {
            case 'hangover':
            document.querySelector('#display').innerHTML = "<img src=\./assets/images/hangover.jpg\>"
            break
            case 'blackjack':
            document.querySelector('#display').innerHTML = "<img src=\./assets/images/blackjack.png\>"
            break
            case 'craps':
            document.querySelector('#display').innerHTML = "<img src=\./assets/images/craps2.jpg\>"
            break
            case 'roulette':
            document.querySelector('#display').innerHTML = "<img src=\./assets/images/roulette.jpg\>"
            break
            case 'casino':
            document.querySelector('#display').innerHTML = "<img src=\./assets/images/casino.png\>"
            break
            case 'ratpack':
            document.querySelector('#display').innerHTML = "<img src=\./assets/images/ratpack.jpg\>"
            break
            case 'elvis':
            document.querySelector('#display').innerHTML = "<img src=\./assets/images/elvis.jpg\>"
            break
        }
    }
}

// The game isnt totally finished:
// - I haven't been able to limit the keyboard entries to alphabet only - I have the code but for some reason I can't get it to work
// - The player is able to guess the same letter more than once
// - I haven't figured out how to stop the game when the word is guessed or player runs out of guesses