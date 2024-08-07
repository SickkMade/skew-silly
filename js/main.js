let mainBox = document.querySelector('.box')
let container = document.querySelector('#container')

for(let i = 0; i < 999; i++){
    container.append(mainBox.cloneNode())
}

let skewSliderX = document.querySelector('.skew-sliderx')
let skewSliderY = document.querySelector('.skew-slidery')
let rotSlider = document.querySelector('.rot-slider')
let sizeSlider = document.querySelector('.size-slider')
let x = -10
let y = -5
let rot = 0
let size = 135


skewSliderX.addEventListener('input', event => {
    x = event.target.value
    updateSkew()
})
skewSliderY.addEventListener('input', event => {
    y = event.target.value
    updateSkew()
})
rotSlider.addEventListener('input', event => {
    rot = event.target.value
    updateSkew()
})
sizeSlider.addEventListener('input', event => {
    size = event.target.value
    updateSkew()
})

function updateSkew(){
    container.style.transform = `skew(${x}deg, ${y}deg) rotate(${rot}deg) translate(-50%, -50%) scale(${size}%)`
}

updateSkew()