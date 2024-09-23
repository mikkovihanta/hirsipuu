const input = document.querySelector('input')
const output = document.querySelector('output')
const span = document.querySelector('span')

const words = [
"programming",
"javascript",
"database",
"markup",
"framework",
"variable",
"stylesheet",
"library",
"asynchronous",
"hypertext"
]

let randomizedWord =''
let maskedWord = ''
let guessCount = 0;

const newGame = () => {
    const random = Math.floor(Math.random() * words.length)
    randomizedWord = words[random]
    maskedWord ='*'.repeat(randomizedWord.length)
    guessCount = 0;
    output.innerHTML = maskedWord
    span.innerHTML = `${guessCount}`;
}

const win = () => {
    alert(`You have guessed right, the word is ${randomizedWord}. You needed ${guessCount} guesses.`)
    newGame()
}


const replaceFoundChars = (guess) => {
    let found = false;
    for (let i = 0;i<randomizedWord.length;i++){
        const char = randomizedWord.substring(i,i+1)
        if (char === guess) {
            let newString = maskedWord.split('')
            newString.splice(i,1,guess)
            newString = newString.join('')
            maskedWord = newString
            found = true;
        }
    }
    output.innerHTML = maskedWord
    if (found && maskedWord === randomizedWord) {
        win();
    }
 
}

newGame()
input.addEventListener('keypress',(e) => {
    if (e.key === 'Enter') {
        e.preventDefault()

        const guess = input.value
        guessCount++;
        span.innerHTML = `${guessCount}`;

        if (guess.toLocaleUpperCase() === randomizedWord.toLocaleUpperCase()){
            win()
        } else if (guess.length === 1) {
            replaceFoundChars(guess)
        } else {

        }

    input.value=''
    } 
    
})