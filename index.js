// create 16 divs onto the html
const container = document.querySelector('.container')
const dialog = document.getElementById('dialog-box')
const openSizeDialog = document.getElementById('size-btn')
const closeSizeDialog = document.getElementById('closeSize-btn')
const submitSizeButton = document.getElementById('submitSize-btn')
const eraserButton = document.getElementById('eraser-btn')
const size = document.getElementById('size')
let isDrawing = false
let penColour = 'black'

const init = () => {
    defaultGrid()
    addHoverEffect()
}

function defaultGrid() {
    let grids = ''
    for (let i = 0; i < 256; i++) {
    grids += `<div class="grid"></div>`
}
    container.innerHTML = grids
}
//add a hover effect

function clickState() {
    document.addEventListener('mousedown', () => {
        isDrawing = true
    })
    document.addEventListener('mouseup', () => {
        isDrawing = false
    })
    return isDrawing
}



function addHoverEffect() {
    const grids = document.querySelectorAll('.grid')
    // Change grid color only when mouse is pressed
        grids.forEach(grid => {
            // Prevent default drag behavior
            grid.addEventListener('dragstart', e => e.preventDefault())

            // Colour on click and start drawing
            grid.addEventListener('mousedown', function(e) {
                e.preventDefault()
                isDrawing = true
                grid.style.backgroundColor = 'black'
            })
            // Colour on hover if mouse is pressed
            grid.addEventListener('mouseover', function() {
                if (isDrawing) {
                    grid.style.backgroundColor = 'black'
                }
            })
    })

        // Stop drawing on mouseup anywhere
        document.addEventListener('mouseup', () => {
            isDrawing = false
        })
}

// function eraser() {
//     const grids =document.querySelectorAll('.grid')
    

// }

openSizeDialog.addEventListener('click', function() {
    dialog.showModal()
})

closeSizeDialog.addEventListener('click', function() {
    dialog.close()
})

submitSizeButton.addEventListener('click', function() {
    const newSize = size.value
    let grids = ''
    if (newSize < 1 || newSize > 100) {
    } else {
        container.innerHTML = ''
        for (let i = 0; i < newSize * newSize; i++) {
            grids += `<div class="grid"></div>`
        }
        container.innerHTML = grids
        setCSSgridSize(newSize)
        addHoverEffect()
    }
})


//set the css grid sizes to 640px divided by the new size
function setCSSgridSize(size) {
    const gridSize = 700 / size
    const grids = document.querySelectorAll('.grid')
    grids.forEach(grid => {
        grid.style.width = `${gridSize}px`
        grid.style.height = `${gridSize}px`
        grid.style.flex = `0 0 ${gridSize}px`
    })
}

init()
