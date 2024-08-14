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

function getFirstInactive() {
    return [...text.children].filter(span => span.classList.length < 1)[0]
}

function getLastActive() {
    const typed = [...text.children].filter(span => span.classList.length > 0)
    return typed[typed.length - 1]
}

makeSentence()

window.addEventListener('keydown', (e) => {
    const first = getFirstInactive()

    if (e.key === 'Backspace') return getLastActive().classList.remove('wrong', 'right')
    if (e.key === first.textContent) first.classList.add('right')
    if (e.key !== first.textContent && e.key !== 'Shift') first.classList.add('wrong')
})
