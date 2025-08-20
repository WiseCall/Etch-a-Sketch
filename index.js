// create 16 divs onto the html
const container = document.querySelector('.container')

for (let i = 0; i < 256; i++) {
    container.innerHTML += `<div class="grid"></div>`
}

const grids = document.querySelectorAll('.grid')
//add a hover effect
grids.forEach(grid => {
    grid.addEventListener('mouseover', function() {
        grid.style.backgroundColor = 'black'
    })
})


