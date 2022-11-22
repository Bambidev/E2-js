const form = document.getElementById('form')
const inputNum = document.getElementById('form__input')
const pizzasContainer = document.getElementById('pizzas__container')
const small = document.getElementById('small')

const pizzas = [
    {
        id: 1,
        nombre: "Napo",
        ingredientes: ['salsa', 'tomate', 'oregano'],
        precio: 1800
    },
    {
        id: 2,
        nombre: "Muzza",
        ingredientes: ['queso', 'salsa'],
        precio: 1400
    },
    {
        id: 3,
        nombre: "Pepperoni",
        ingredientes: ['salsa', 'tomate', 'pepperoni'],
        precio: 1800
    },
    {
        id: 4,
        nombre: "Especial",
        ingredientes: ['salsa', 'tomate', 'oregano', 'huevo'],
        precio: 1900
    },
    {
        id: 5,
        nombre: "margarita",
        ingredientes: ['salsa', 'tomate', 'mozzarella', 'albahaca'],
        precio: 1800
    },
    {
        id: 6,
        nombre: "champiñon",
        ingredientes: ['champiñones', 'oregano', 'quesio'],
        precio: 1600
    }
]

const showError = (mensaje) => {
    small.classList.add('error')
    small.textContent = mensaje
}

const clearError = () => {
    small.classList.remove('error')
    small.textContent = ''
}

const devolverPizza = (nombre, precio) => {
    return pizzasContainer.innerHTML = `
        <h3>Pizza</h3>
        <div id="pizza" class="pizza --color-celeste">
            <div class="left">
                <p>🍕</p>
            </div>
            <div class="separador"></div>
            <div class="right">
                <h2>${nombre}</h2>
                <p>Precio: $${precio}</p>
            </div>
        </div>
        ` 
    }

const clerearResultado = () => {
    return pizzasContainer.innerHTML = `
        <h3>Pizza</h3>
    `
}

const boton = document.getElementById('button').addEventListener('click', (e) =>{
    e.preventDefault()
    
    const idValue = inputNum.value
    const idPizza = parseInt(idValue);

    pizzas.forEach(element => {
        if (idPizza === element.id) {
                devolverPizza(element.nombre, element.precio)
                clearError()
            } else if (idValue == '') {
                showError('no ingresó valor')
                clerearResultado()
            } else if (idPizza > element.id) {
               showError('no existe una pizza con ese ID')
               clerearResultado()
            } else {
                clearError()
            }  
    })
})

        
