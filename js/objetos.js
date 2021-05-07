// BEBIDAS
class Bebida {

    constructor(id, marca, descripcion, imagen, precio, stock) {

        this.id = id
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

const tequila = new Bebida(1, 'Corralejo', 'Tequila', 'tequila-corralejo.png', 4500, 10)
const licorNaranja = new Bebida(2, 'Conintreau', 'Licor de naranja', 'licor-naranja-cointreau.png', 4700, 12)
const vodka = new Bebida(3, 'Conintreau', 'Licor de naranja', 'licor-naranja-cointreau.png', 4700, 12)
const licorDurazno = new Bebida(4, 'Amaretto Lazzaroni', 'Licor de durazno', 'Amaretto-licor-durazno.png', 3800, 12)
const granadina = new Bebida(5, 'Cusenier', 'Granadina', 'granadina.png', 223, 15)
const ron = new Bebida(6, 'Diplomatico Mantuano', 'Ron', 'ron.png', 4200, 13)
const vermouth = new Bebida(7, 'Martini Rosso', 'Vermouth', 'martini-rosso.png', 349, 11)
const whisky = new Bebida(8, 'Maker Mark', 'Whisky', 'whisky.png', 4800, 11)
const angostura = new Bebida(9, 'Bitter Angostura', 'Amargo', 'bitter.png', 2900, 9)



// TRAGOS
class Trago {

    constructor(id, nombre, ingredientes, preparacion) {

        this.id = id
        this.nombre = nombre;
        this.ingredientes = ingredientes;
        this.preparacion = preparacion;

    }
}


const margarita = new Trago(1, 'Margarita', [tequila, licorNaranja], 'Coloca el hielo, el tequila, el triple sec y el jugo de limón en una licuadora. Procesa hasta que obtener una consistencia granizada. Toma algunas de las rodajas de lima y frótalas en el borde de los vasos donde servirás las bebidas. En un plato pequeño, añade la sal y pasa cada uno de los bordes de los vasos por la sal. Sirve la bebida y decora con el resto de las rodajas de lima.')
const sexOnTheBeach = new Trago(2, 'Sex on the beach', [vodka, licorDurazno, granadina], 'Colocar 2 medidas de vodka, 4 de jugo de naranja y 1 de licor de durazno en una coctelera y batir. En una Copa de Cóctel Windsor colocar 3 hielos y servir la mezcla. Agregar un dash de granadina y decorar con una rodaja de naranja y una cereza en el borde.')
const mojito = new Trago(3, 'Mojito', [ron], "3.- Parte la lima en 8 trozos y agrégala a cada uno de los vasos en los que prepararás tu mojito (Una lima en cada vaso cada mojito). Con el mortero, machaca bien la lima para sacarle todo el jugo. 2.- Añade dos cucharadas de azúcar, la cantidad de azúcar es un poco a tu gusto. 3.- Coloca unas hojas de hierbabuena en cada vaso de mojito y machaca un poco, lo justo para juntar los sabores, pero sin que se rompan las hojas. Si rompes las hojas te colapsarán la pajita con la que se bebe el mojito. 4.- Añade una buena cantidad de  hielo en el vaso de tu mojito, si es hielo picado mucho mejor. Vierte ron al gusto y, para finalizar, vierte el refresco de lima limón. 5.- Con la cuchara, remueve el jugo de lima con hierbabuena de arriba a abajo. Verás que va cambiando de color. Ya lo tienes listo para disfrutar. 6.- Puedes servirlo con una pajita gruesa.")
const manhattan = new Trago(4, 'Manhattan', [vermouth, whisky, angostura], 'En una cubitera introduce 2 cubitos e hielo y el vermut, la Angostura y el whisky bourbon remueve suave sin agitar.Cóctel Manhattan. En un vaso frío (moja un vaso e introduce en el congelador 15 minutos antes de preparar el cóctel), introduce la cereza. Añade la mezcla del cóctel sobre la cereza. Introduce la cáscara de naranja en la bebida durante unos segundos luego ajusta sobre el borde del vaso o copa.')

