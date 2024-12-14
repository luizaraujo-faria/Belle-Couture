//SLIDESHOW//
//DECLARAÇÃO DE VARIAVEIS//
const slides = document.querySelector('.slides')
const prevButton = document.querySelector('.prev')
const nextButton = document.querySelector('.next')
let currentIndex = 0//VARIAVEL CONTADOR//
const totalSlides = document.querySelectorAll('.slide').length

//FUNÇÃO PARA PASSAR AS IMAGENS DO SLIDESHOW//
function showSlide(index) {
    const slideWidth = document.querySelector('.slide').clientWidth
    slides.style.transform = `translateX(-${index * slideWidth}px)`
}
//FUNÇÃO DE CLICK PARA BOTAO PROXIMO//
nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalSlides
    showSlide(currentIndex)
})
//FUNÇÃO DE CLICK PARA BOTAO VOLTAR//
prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides
    showSlide(currentIndex)
})
//AUTOMATIZAÇÃO DO SLIDESHOW//
setInterval(() => {
    nextButton.click()
},5000)
