
//Elementos do header//

//DECLARAÇÕES DE VARIÁVEIS//
let srchClose = document.querySelector('#srch-close')
let menuClose = document.querySelector('#menu-close')
let body = document.querySelector('body')
let overlay = document.querySelector('.overlay')
let person = document.querySelector('.person')
let personBar = document.querySelector('.person-bar')
let menu = document.querySelector('.menu')
let menuBar = document.querySelector('.menu-bar')
let search = document.querySelector('.search')
let searchScreen = document.querySelector('.search-screen')
let filter = document.querySelector('.filter')
let filterBar = document.querySelector('.filter-bar')

//FUNÇÃO DE CLICK PARA ICONE PERSON//
person.addEventListener('click', () => {
    personBar.classList.toggle('show')
})

//FUNÇÃO DE CLICK PARA ICONE PESQUISA//
search.addEventListener('click', () => {
    searchScreen.classList.add('show')
    overlay.classList.add('show')
    body.classList.add('no-scroll')
})

//FUNÇÃO DE CLICK PARA ICONE CLOSE DA PESQUISA//
srchClose.addEventListener('click', () => {
    searchScreen.classList.remove('show')
    overlay.classList.remove('show')
    body.classList.remove('no-scroll')
})

//FUNÇÃO DE CLICK PARA ICONE MENU//
menu.addEventListener('click', () => {
    menuBar.classList.toggle('show')
    overlay.classList.toggle('show')
    body.classList.toggle('no-scroll')
})
//FUNÇÃO DE CLICK PARA ICONE CLOSE DO MENU//
menuClose.addEventListener('click', () => {
    menuBar.classList.remove('show')
    overlay.classList.remove('show')
    body.classList.remove('no-scroll')
})

//BARRA DE PESQUISA//

//DECLARAÇÕES DE VARIÁVEIS//
const searchInp = document.querySelector('.search-input')
const searchBtn = document.querySelector('.search-btn')
const serachClear = document.querySelector('.search-clear')


const pageMap = {
    "homens": "cathalog.html#male",
    "mulheres": "cathalog.html#female",
    "bolsas": "cathalog.html#bag",
    "relogios": "accessories.html#clock",
    "joias": "accessories.html#jewel",
    "maquiagem": "accessories.html#makeup",
    "fragrancias": "accessories.html#fragrance",
    "menu": "index.html",
    "coleções": "index.html#colection"
}


searchBtn.addEventListener('click', () => {
    const searchTxt = searchInp.value.toLowerCase()
    const pages = pageMap[searchTxt]

    if(pages){
        location.href = pages
    }
    else{
        alert("Item não encontrado!")
    }
})

serachClear.addEventListener('click', () => {
    searchInp.value = ""
    searchInp.focus()
})

//FUNÇÃO DE CLICK PARA ICONE FILTER//
filter.addEventListener('click', () => {
    filterBar.classList.toggle('show')
})
