
const textArea = document.getElementById('text')
const getFullEnglishButton = document.getElementById('full-english')
const stepBackButton = document.getElementById('step-back')
const translateWordButton = document.getElementById('translate-word')
const fullRussianButton = document.getElementById('full-russian')

getFullEnglishButton.addEventListener('click', async (event) => {

    event.preventDefault()

    const response = await fetch('/text')
    const {text} = await response.json()
    textArea.textContent = text
})

translateWordButton.addEventListener('click', async (event) => {

    event.preventDefault()

    console.log('wow');
})


