
const textArea = document.getElementById('text')
const getFullEnglishButton = document.getElementById('full-english')

getFullEnglishButton.addEventListener('click', async (event) => {

    event.preventDefault()

    const response = await fetch('/text')
    const {text} = await response.json()
    textArea.textContent = text
})