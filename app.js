const canvas = document.getElementById('jsCanvas')
const ctx = canvas.getContext('2d')
// console.log(ctx);

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

if (canvas) {
    canvas.addEventListener('mousemove', onMouseMove)
    canvas.addEventListener('mousedown', onMouseDown)
    canvas.addEventListener('mouseup', stopPainting)
    canvas.addEventListener('mouseleave', stopPainting)
}