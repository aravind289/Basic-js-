console.log("hello")


var color1click = document.getElementById('color1')
var color2click = document.getElementById('color2')
var color3click = document.getElementById('color3')
var noColor = document.getElementById('emptyIt')

var container = document.getElementById('container')

color1click.addEventListener('click', fillColor1)
color2click.addEventListener('click', fillColor2)
color3click.addEventListener('click', fillColor3)
noColor.addEventListener('click', emptyContainer)



if (localStorage.getItem.length == 1) {
    var containerColorHasToBe = localStorage.getItem('containerColor')
    container.style.backgroundColor = containerColorHasToBe
}

function fillColor1() {

    container.style.backgroundColor = getComputedStyle(color1click).backgroundColor
    storeInLs()
}

function fillColor2() {

    container.style.backgroundColor = getComputedStyle(color2click).backgroundColor
    storeInLs()
}

function fillColor3() {

    container.style.backgroundColor = getComputedStyle(color3click).backgroundColor
    storeInLs()
}

function emptyContainer() {
    console.log("hello")
    console.log(container.style.backgroundColor)
    container.style.backgroundColor = "white"
    storeInLs()
}


function storeInLs() {
    var containercolor = container.style.backgroundColor
    localStorage.setItem('containerColor', containercolor)
}