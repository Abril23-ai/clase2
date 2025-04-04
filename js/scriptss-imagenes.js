const carusel = document.getElementById('carusel')
const prevBtn = document.getElementById('prevBtn')
const nextBtn = document.getElementById('nextBtn')
const indicador = document.getElementById('indicador')

let caruselIndex = 0
const items = document.querySelectorAll('.carusel-item')
const totalItems = items.length

for (let i = 0; i < totalItems; i++) {
    const dot = document.createElement('div')
    dot.classList.add('indicator')
    if (i === 0) dot.classList.add('active')
    dot.addEventListener('click', () => gotoSlide(i)) 
    indicador.appendChild(dot)
}

function updateIndicators() {
    document.querySelectorAll('.indicator').forEach((indicador, index) => {
        indicador.classList.toggle('active', index === caruselIndex)
    })
}

function gotoSlide(index) {
    caruselIndex = index
    carusel.style.transform = `translateX(-${caruselIndex * 100}%)`
    updateIndicators()
}

function nextSlide() {
    caruselIndex = (caruselIndex + 1) % totalItems
    gotoSlide(caruselIndex)
}

function prevSlide() {
    caruselIndex = (caruselIndex - 1 + totalItems) % totalItems
    gotoSlide(caruselIndex)
}

nextBtn.addEventListener('click', nextSlide)
prevBtn.addEventListener('click', prevSlide)