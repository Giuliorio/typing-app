const quote = 'Understand ethical wealth creation is possible; if you secretly despise wealth, it will elude you.'

const text = document.querySelector('.container .text')

function makeCharacter(character) {
    const span = document.createElement('span')
    span.textContent = character

    return span
}

function makeSentence() {
    quote.split('').forEach(character => {
        text.appendChild(makeCharacter(character))
    });
}

makeSentence()