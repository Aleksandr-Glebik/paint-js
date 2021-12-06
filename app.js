const canvas = document.getElementById('jsCanvas')
const ctx = canvas.getContext('2d')
const colors = document.querySelectorAll('.jsColor')
const range = document.getElementById('jsRange')
const mode = document.getElementById('jsMode')

const INITIAL_COLOR = '#2c2c2c'
const CONVAS_SIZE = 700
canvas.height = CONVAS_SIZE
canvas.width = CONVAS_SIZE

ctx.lineWidth = 2.5
ctx.strokeStyle = INITIAL_COLOR
ctx.fillStyle = INITIAL_COLOR
/* ctx.fillStyle = 'red'
ctx.fillRect(0, 0, 700, 700) */

let painting = false
let filling = false

function stopPainting() {
    painting = false
}

function startPainting() {
    painting = true
}

function onMouseMove(event) {
    let x = event.offsetX
    let y = event.offsetY

    if (!painting) {
        ctx.beginPath() // отслеживание стартовой точки
        ctx.moveTo(x, y) // перемещаем стартовую точку в положение курсора мыши
    } else {
        ctx.lineTo(x, y) // видимая линия от стартовой позиции к текущим координатам
        ctx.stroke() // отрисовываем линию

    }
///
}

function onMouseDown(event) {
    // console.log('onMouseDown: ', event);
    painting = true
}

/* function onMouseUp(event) {
    console.log('onMouseUp: ',event);
    stopPainting()
} */

/* function onMouseLeave() {
    stopPainting()
} */

function handleColorClick(event) {
    const color = event.target.style.backgroundColor;
    // console.log(color);
    ctx.strokeStyle = color
    // ctx.fillStyle = ctx.strokeStyle
    ctx.fillStyle = color
}

function handleRangeChange(event) {
    // console.log(event.target.value);
    const rangeValue = event.target.value
    ctx.lineWidth = rangeValue

}

function handleModeClick() {
    if (filling === true) {
        filling = false
        mode.innerText = 'Заливка'
    } else {
        filling = true
        mode.innerText = 'Рисование'
        // ctx.fillStyle = ctx.strokeStyle

    }
}

function handleCanvasClick() {
    if (filling === true) {
        ctx.fillRect(0, 0, CONVAS_SIZE, CONVAS_SIZE)
    }
}

if (canvas) {
    canvas.addEventListener('mousemove', onMouseMove)
    canvas.addEventListener('mousedown', onMouseDown)
    canvas.addEventListener('mouseup', stopPainting)
    canvas.addEventListener('mouseleave', stopPainting)
    canvas.addEventListener('click', handleCanvasClick)

}

// console.log(Array.from(colors));
Array.from(colors).forEach(color => color.addEventListener('click', handleColorClick))

if (range) {
    range.addEventListener('input', handleRangeChange)
}

if (mode) {
    mode.addEventListener('click', handleModeClick)
}