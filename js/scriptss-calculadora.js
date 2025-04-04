const pantalla = document.querySelector('.pantalla')

function addNumber(value) {
    if (pantalla.textContent == '0'){
        pantalla.textContent = value 
    } else {
        pantalla.textContent += value
    }
}

function deleteInfo() {
    pantalla.textContent = '0'
}

function evaluaInfo() {
    try{
        pantalla.textContent = eval(pantalla.textContent.replace('x','*' ))
    } catch(error){
        pantalla.textContent = 'ERROR'
    }
}

document.querySelectorAll('.button').forEach( button => {
    button.addEventListener('click', () => {
        const value = button.textContent

        if (value === 'C') {
            deleteInfo()
        } else if (value === '=') {
            evaluaInfo()
        } else{
            addNumber(value)
        }

    })
} )