let tragoElegido = []
let carrito = []

// BEBIDAS
class Bebida {

    constructor(marca, descripcion, imagen, precio, stock) {

        this.marca = marca;
        this.descripcion = descripcion;
        this.imagen = imagen;
        this.precio = precio;
        this.stock = stock;

        const quitarStock = (cantidadVendida) => {
            this.stock -= cantidadVendida
        }
    }
}

const tequila = new Bebida('Corralejo', 'Tequila', 'tequila-corralejo.png', 4500, 10)
const licorNaranja = new Bebida('Conintreau', 'Licor de naranja', 'licor-naranja-cointreau.png', 4700, 12)
const vodka = new Bebida('Conintreau', 'Licor de naranja', 'licor-naranja-cointreau.png', 4700, 12)
const licorDurazno = new Bebida('Amaretto Lazzaroni', 'Licor de durazno', 'Amaretto-licor-durazno.png', 3800, 12)
const granadina = new Bebida('Cusenier', 'Granadina', 'granadina.png', 223, 15)
const ron = new Bebida('Diplomatico Mantuano', 'Ron', 'ron.png', 4200, 13)
const vermouth = new Bebida('Martini Rosso', 'Vermouth', 'martini-rosso.png', 349, 11)
const whisky = new Bebida('Maker Mark', 'Whisky', 'whisky.png', 4800, 11)
const angostura = new Bebida('Bitter Angostura', 'Amargo', 'bitter.png', 2900, 9)



// TRAGOS
class Trago {

    constructor(nombre, ingredientes, preparacion) {

        this.nombre = nombre;
        this.ingredientes = ingredientes;
        this.preparacion = preparacion;

    }
}


const margarita = new Trago('Margarita', [tequila, licorNaranja], 'Coloca el hielo, el tequila, el triple sec y el jugo de limón en una licuadora. Procesa hasta que obtener una consistencia granizada. Toma algunas de las rodajas de lima y frótalas en el borde de los vasos donde servirás las bebidas. En un plato pequeño, añade la sal y pasa cada uno de los bordes de los vasos por la sal. Sirve la bebida y decora con el resto de las rodajas de lima.')
const sexOnTheBeach = new Trago('Sex on the beach', [vodka, licorDurazno, granadina], 'Colocar 2 medidas de vodka, 4 de jugo de naranja y 1 de licor de durazno en una coctelera y batir. En una Copa de Cóctel Windsor colocar 3 hielos y servir la mezcla. Agregar un dash de granadina y decorar con una rodaja de naranja y una cereza en el borde.')
const mojito = new Trago('Mojito', [ron], "3.- Parte la lima en 8 trozos y agrégala a cada uno de los vasos en los que prepararás tu mojito (Una lima en cada vaso cada mojito). Con el mortero, machaca bien la lima para sacarle todo el jugo. 2.- Añade dos cucharadas de azúcar, la cantidad de azúcar es un poco a tu gusto. 3.- Coloca unas hojas de hierbabuena en cada vaso de mojito y machaca un poco, lo justo para juntar los sabores, pero sin que se rompan las hojas. Si rompes las hojas te colapsarán la pajita con la que se bebe el mojito. 4.- Añade una buena cantidad de  hielo en el vaso de tu mojito, si es hielo picado mucho mejor. Vierte ron al gusto y, para finalizar, vierte el refresco de lima limón. 5.- Con la cuchara, remueve el jugo de lima con hierbabuena de arriba a abajo. Verás que va cambiando de color. Ya lo tienes listo para disfrutar. 6.- Puedes servirlo con una pajita gruesa.")
const manhattan = new Trago('Manhattan', [vermouth, whisky, angostura], 'En una cubitera introduce 2 cubitos e hielo y el vermut, la Angostura y el whisky bourbon remueve suave sin agitar.Cóctel Manhattan. En un vaso frío (moja un vaso e introduce en el congelador 15 minutos antes de preparar el cóctel), introduce la cereza. Añade la mezcla del cóctel sobre la cereza. Introduce la cáscara de naranja en la bebida durante unos segundos luego ajusta sobre el borde del vaso o copa.')



// FUNCIONES

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
    console.log(tragoElegido)

    mostrarTrago()
}

// Comprobar Local Storage
(localStorage.getItem('carrito')) ? carrito = JSON.parse(localStorage.getItem('carrito')): carrito = []
console.log(carrito)
if (carrito != []) {
    cargarCarrito()
}

function mostrarTrago() {
    let ingredientes = tragoElegido.ingredientes;
    let mostrarIngredientes = ''

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
              <a id='restarCantidad'><i class="fas fa-minus"></i></a>
              <input type="text" size="2" id='cantidad${ingrediente.descripcion}' value='0'></input>
              <a id='sumarCantidad'><i class="fas fa-plus"></i></a>
              </p>
              <p class="card-text"><button class="btn btn-success" onclick='agregarCarrito(${JSON.stringify(ingrediente)})'>COMPRAR</button></p>
            </div>
          </div>
        </div>`

    }
    document.getElementById('elaboracion').innerHTML = tragoElegido.preparacion
    document.querySelector('#ingredientes').appendChild(mostrarIngredientes)

}

function agregarCarrito(objetoCarrito) {

    carrito.push(objetoCarrito)
    localStorage.setItem('carrito', JSON.stringify(carrito))
    cargarCarrito()

}

function quitarDelCarrito(producto) {

    let indice = carrito.indexOf(carrito.find(eliminar => eliminar.nombre == producto.nombre))
    carrito.splice(indice, 1)
    localStorage.setItem('carrito', JSON.stringify(carrito))
    let productosCarrito = document.querySelector('.producto')
    productosCarrito.parentNode.removeChild(productosCarrito)
    cargarCarrito()

}

function cargarCarrito() {
    let productosEnCarrito = document.createElement('div')
    productosEnCarrito.innerHTML = ''
    let totalCarrito = 0
    let numeroCarrito = 0

    for (let productoCarrito of carrito) {

        productosEnCarrito = document.createElement('div')
        productosEnCarrito.className = 'card border-success dropdown-item producto'

        productosEnCarrito.innerHTML = `<div class="card-header titulo-card">${productoCarrito.descripcion} ${productoCarrito.marca}
                <div class="btn btn-danger" onclick='quitarDelCarrito(${JSON.stringify(productoCarrito)})'>X</div>
            </div>
            <div class="card-body text-success">
            <h5 class="card-title">Precio x unidad $${productoCarrito.precio}</h5>
            </div>`

        totalCarrito += productoCarrito.precio
        numeroCarrito += 1

    }

    document.querySelector('#carrito').appendChild(productosEnCarrito)
    document.getElementById('numero-carrito').innerHTML = numeroCarrito
    document.getElementById('total-carrito').innerHTML = `Total de la compra $${totalCarrito}`

}