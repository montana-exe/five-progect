const startBtn = document.querySelector('#start')
const screens = document.querySelectorAll('.screen')
const timeEl = document.querySelector('#time')
const levelDifficulty = document.querySelector("#level-difficulty")
const levelButton = document.querySelector('.level-button')
const board = document.querySelector('#board')
const again = document.querySelector('#again')
const home = document.querySelector('#home')

let time = 30
let level = ''
let score = 0
let scoreTarger = 0
let gameStarted = false
let intervalId
let num1 = 0
let num2 = 0

document.addEventListener('keydown', event => {
    if(event.key === 'R' || event.key === 'r' || event.key === 'К' || event.key === 'к'){
        repeatGame()
        startGame()
    }
})

document.addEventListener('keydown', event => {
    console.log(event.key)
})

home.addEventListener('click',()=>{
    screens[0].classList.remove('up')
    screens[1].classList.remove('up')
    repeatGame()
})

again.addEventListener('click',()=>{
    repeatGame()
    startGame()
})

startBtn.addEventListener('click', (event)=>{
    event.preventDefault()
    screens[0].classList.add('up')
})

board.addEventListener('click', event => {
    if (time!==0){
        if(event.target.classList.contains('circle')){
            score++
            event.target.remove()
            createRandomCircle()}
        scoreTarger++
}
})

levelDifficulty.addEventListener('click', (event)=>{
    if(event.target.classList.contains('level-button')){
        level = event.target.textContent
        settingsGame()
        screens[1].classList.add('up')
        if (time===0){
            repeatGame()
        }
        if(!gameStarted){
        startGame()}
    }
})


function startGame(){
    gameStarted = true
    intervalId = setInterval(gameTime, 1000)
    createRandomCircle()
}

function gameTime(){
    if(time===0){
        finishGame()
    }else{
    let current = --time
    if(time<10){
        current=`0${current}`
    }
    setTime(current)
}
}

function setTime(value){
    timeEl.innerHTML = `00:${value}`
}

function finishGame(){
    if(scoreTarger>0){
        scoreTarger=Math.round(score/scoreTarger*100)
    }else{
        scoreTarger=0
    }
    board.innerHTML = `<div class="finish">
    <h1>Score: <span class="primary">${score}</span></h1>
    <p>Accuracy: <span class="primary">${scoreTarger}%</span></p>
    </div>`
    timeEl.parentNode.classList.add('hide')
    again.classList.remove('hide')
    home.classList.remove('hide')
    removeScore()
}

function repeatGame() {
    board.innerHTML = ``;
    timeEl.parentNode.classList.remove('hide');
    again.classList.add('hide');
    home.classList.add('hide');
    time = 30;
    removeScore()
}

function createRandomCircle(){
    const circle = document.createElement('div')
    const size = getRandomNumber(num1, num2)
    const {width, height} = board.getBoundingClientRect()
    const x = getRandomNumber(0,width-size*2)
    const y = getRandomNumber(0,height-size*2)
    circle.classList.add('circle')
    circle.style.width = `${size}px`
    circle.style.height = `${size}px`
    circle.style.top = `${y}px`
    circle.style.left = `${x}px`
    board.append(circle)
}

function getRandomNumber(min,max){
    return Math.round(Math.random()*(max-min)+min)
}

function removeScore(){
    gameStarted = false
    clearInterval(intervalId)
    score = 0
    scoreTarger = 0
}

function settingsGame(){
    if (level==='Easy'){
        num1 = 40
        num2 = 60
    }else if (level==='Medium'){
        num1 = 20
        num2 = 40
    }
    else if (level==='Hard'){
        num1 = 15
        num2 = 30
    }
    else if (level==='Very Hard'){
        num1 = 5
        num2 = 15
    }
}