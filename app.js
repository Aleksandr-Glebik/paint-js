const canvas = document.getElementById('jsCanvas')
const ctx = canvas.getContext('2d')
const colors = document.querySelectorAll('.jsColor')
const range = document.getElementById('jsRange')

canvas.height = 700
canvas.width = 700

ctx.lineWidth = 2.5
ctx.strokeStyle = '#2c2c2c'

let painting = false

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
}

function handleRangeChange(event) {
    // console.log(event.target.value);
    const rangeValue = event.target.value
    ctx.lineWidth = rangeValue

}

if (canvas) {
    canvas.addEventListener('mousemove', onMouseMove)
    canvas.addEventListener('mousedown', onMouseDown)
    canvas.addEventListener('mouseup', stopPainting)
    canvas.addEventListener('mouseleave', stopPainting)
}

// console.log(Array.from(colors));
Array.from(colors).forEach(color => color.addEventListener('click', handleColorClick))

if (range) {
    range.addEventListener('input', handleRangeChange)
} else {

}