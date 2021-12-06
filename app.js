const canvas = document.getElementById('jsCanvas')

let painting = false

function stopPainting() {
    let painting = false
}

function onMouseMove(event) {
    let x = event.offsetX
    let y = event.offsetY

    console.log(x, y);

}

function onMouseDown(event) {
    console.log('onMouseDown: ', event);
    let painting = true
}

function onMouseUp(event) {
    console.log('onMouseUp: ',event);
    stopPainting()
}

/* function onMouseLeave() {
    stopPainting()
} */

if (canvas) {
    canvas.addEventListener('mousemove', onMouseMove)
    canvas.addEventListener('mousedown', onMouseDown)
    canvas.addEventListener('mouseup', onMouseUp)
    canvas.addEventListener('mouseleave', stopPainting)
}