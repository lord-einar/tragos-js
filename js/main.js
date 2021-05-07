let tragoElegido = []
let carrito = []

// FUNCIONES

// Comprobar Local Storage
if (localStorage.getItem('carrito')) {
    carrito = JSON.parse(localStorage.getItem('carrito'))
} else {
    carrito = []
}

if (carrito != []) {
    cargarCarrito()
}

// SELECCIONAR BEBIDA

document.querySelectorAll(".bebidas").forEach(el => {
    el.addEventListener("click", e => {
        const id = e.target.getAttribute("id");
        seleccionarTrago(id);
        document.getElementById('titulo-elaboracion').innerHTML = `Elaboracion de ${id}`
    });
});

function seleccionarTrago(tragos) {

    switch (tragos) {
        case 'Margarita':
            tragoElegido = margarita
            break;
        case 'sex on the beach':
            tragoElegido = sexOnTheBeach
            break;
        case 'mojito':
            tragoElegido = mojito
            break;
        case 'manhattan':
            tragoElegido = manhattan
            break;
        default:
            break;
    }

    mostrarTrago()
}


//MOSTRAR TRAGO SELECCIONADO
function mostrarTrago() {
    let ingredientes = tragoElegido.ingredientes;
    let mostrarIngredientes = ''
    document.querySelector('#ingredientes').innerHTML = ''

    for (let ingrediente of ingredientes) {

        mostrarIngredientes = document.createElement('div')
        mostrarIngredientes.className = 'card mb-3'
        mostrarIngredientes.style.maxWidth = '540px'

        mostrarIngredientes.innerHTML = `<div class="row no-gutters">
          <div class="col mb-4">
            <img class="imagen-bebida" src="./img/${ingrediente.imagen}" alt="...">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${ingrediente.marca}</h5>
              <p class="card-text">${ingrediente.descripcion}</p>
              <p class="card-text">Precio $${ingrediente.precio}</p>
              <p class="card-text">Disponibles: ${ingrediente.stock}</p>
              <label>Cantidad</label>
              <p>
              <a class='${ingrediente.descripcion}' id='restar'><i class="fas fa-minus"></i></a>
              <input type="text" size="2" id='cantidad${ingrediente.descripcion}' value='1'></input>
              <a class='${ingrediente.descripcion}' id='sumar'><i class="fas fa-plus"></i></a>
              </p>
              <p class="card-text"><button class="btn btn-success" id="btn-comprar" ingrediente="${ingrediente.id}">COMPRAR</button></p>
            </div>
          </div>
        </div>`

        document.querySelector('#ingredientes').appendChild(mostrarIngredientes)
    }

    // CAPTURAR COMPRA
    document.querySelectorAll("#btn-comprar").forEach(el => {
        el.addEventListener("click", e => {
            let articuloComprado = e.target.getAttribute("ingrediente");
            let objetoComprado = ingredientes.find(el => el.id == articuloComprado)
            let cantidadComprada = Number(document.getElementById(`cantidad${objetoComprado.descripcion}`).value)
            objetoComprado.cantidad = cantidadComprada
            agregarCarrito(objetoComprado)
        });
    });

    // RESTAR CANTIDAD
    document.querySelectorAll("#restar").forEach(el => {
        el.addEventListener("click", e => {
            const articulo = e.target.parentNode.className;
            cambiarCantidad('restar', articulo)
        });
    });

    //SUMAR CANTIDAD
    document.querySelectorAll("#sumar").forEach(el => {
        el.addEventListener("click", e => {
            const articulo = (e.target.parentNode.className)
            cambiarCantidad('sumar', articulo)
        });
    });

    //CAMBIAR NUMERO DE CANTIDAD COMPRADA
    function cambiarCantidad(operacion, art) {

        let cantidad = Number(document.getElementById(`cantidad${art}`).value)
        console.log('Actual ', cantidad)

        if (operacion == 'restar')
            cantidad = cantidad - 1
        else {
            cantidad = cantidad + 1
        }
        document.getElementById(`cantidad${art}`).value = cantidad

    }

    document.getElementById('elaboracion').innerHTML = tragoElegido.preparacion

}




//AGREGAR ARTICULO AL CARRITO
function agregarCarrito(objetoCarrito) {

    console.log(objetoCarrito)
    carrito.push(objetoCarrito)
    console.log(carrito)
    localStorage.setItem('carrito', JSON.stringify(carrito))
    cargarCarrito()

}

//QUITAR ARTICULO DEL CARRITO
function quitarDelCarrito(id) {

    let removerArt = carrito.indexOf(carrito.find(el => el.id == id))
    carrito.splice(removerArt, 1)
    localStorage.setItem('carrito', JSON.stringify(carrito))
    let productosCarrito = document.querySelector('.producto')
    productosCarrito.parentNode.removeChild(productosCarrito)
    cargarCarrito()

}

//DIBUJAR EL CARRITO
function cargarCarrito() {
    let productosEnCarrito = ''
    document.getElementById('carrito').innerHTML = ''
    let totalCarrito = 0
    let numeroCarrito = 0

    for (let productoCarrito of carrito) {
        let totalProducto = productoCarrito.precio * productoCarrito.cantidad

        productosEnCarrito = document.createElement('div')
        productosEnCarrito.className = 'card border-success dropdown-item producto'

        productosEnCarrito.innerHTML = `<div class="card-header titulo-card">${productoCarrito.descripcion} ${productoCarrito.marca}
                <div class="btn btn-danger remover" id="${productoCarrito.id}" ingrediente="${productoCarrito.descripcion}">X</div>
            </div>
            <div class="card-body text-success">
            <h5 class="card-title">Cantidad  ${productoCarrito.cantidad}</h5>
            <h5 class="card-title">Precio $${totalProducto}</h5>
            </div>`

        totalCarrito += totalProducto
        numeroCarrito += 1

        document.querySelector('#carrito').appendChild(productosEnCarrito)
    }

    document.getElementById('numero-carrito').innerHTML = numeroCarrito
    document.getElementById('total-carrito').innerHTML = `Total de la compra $${totalCarrito}`

    document.querySelectorAll(".remover").forEach(el => {
        el.addEventListener("click", e => {
            quitarDelCarrito(e.target.id)
        });
    });
}