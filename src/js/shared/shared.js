
//Elementos do header//

//DECLARAÇÕES DE VARIÁVEIS//
let person = document.querySelector('.person')
let personBar = document.querySelector('.person-bar')

//FUNÇÃO DE CLICK PARA ICONE PERSON//
person.addEventListener('click', () => {
    personBar.classList.toggle('show')
})

//DECLARAÇÕES DE VARIÁVEIS//
let menu = document.querySelector('.menu')
let menuBar = document.querySelector('.menu-bar')
let iClose = document.querySelector('.close')
let body = document.querySelector('body')
let overlay = document.querySelector('.overlay')

//FUNÇÃO DE CLICK PARA ICONE MENU//
menu.addEventListener('click', () => {
    menuBar.classList.add('show')
    overlay.classList.add('show')
    body.classList.add('no-scroll')
})
//FUNÇÃO DE CLICK PARA ICONE CLOSE//
iClose.addEventListener('click', () => {
    menuBar.classList.remove('show')
    overlay.classList.remove('show')
    body.classList.remove('no-scroll')
})