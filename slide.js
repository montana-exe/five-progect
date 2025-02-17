const upBtn = document.querySelector('.up-button')
const downBtn = document.querySelector('.down-button')
const container = document.querySelector('.container')
const sidebar = document.querySelector('.sidebar')
const mainSlide = document.querySelector('.main-slide')
const slidesCount = mainSlide.querySelectorAll('div').length

let activeSlideIndex = 0

sidebar.style.top = `-${(slidesCount-1)*100}vh`

document.addEventListener('keydown',event =>{
    if(event.key==='ArrowUp'){
        changeSlide('down')
    }else if(event.key==='ArrowDown'){
        changeSlide('up')
    }
})

upBtn.addEventListener('click', () => {
    changeSlide('down')
})

downBtn.addEventListener('click', () => {
    changeSlide('up')
})

function changeSlide(direction){
    if(direction==='up'){
        activeSlideIndex++
        if(activeSlideIndex===slidesCount){
            activeSlideIndex=0
        }
    }else if(direction==='down'){
        activeSlideIndex--
        if(activeSlideIndex<0){
            activeSlideIndex = slidesCount - 1
        }
    }

    const height = container.clientHeight
    mainSlide.style.transform = `translateY(-${activeSlideIndex*height}px)`
    sidebar.style.transform = `translateY(${activeSlideIndex*height}px)`
}