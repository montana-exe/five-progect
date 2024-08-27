const board = document.querySelector('#board')
const colors = ['#cc1111','#cc7511','#ccc011','#0eac0e','#0eacac','#110eac','#ac0eac']
const SQUARE_NUMBERS = 30

for(let i = 0; i < SQUARE_NUMBERS**2; i++){
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover',()=> setColor(square))

    square.addEventListener('mouseleave',()=> removeColor(square))

    board.append(square)
}

function setColor(element){
    const color = getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element){
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = `0 0 2px #000`
}

function getRandomColor(){
    const index = Math.floor(Math.random()*colors.length)
    return colors[index]
}