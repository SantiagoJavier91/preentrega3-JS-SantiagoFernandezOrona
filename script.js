let catalogoBebidas = [
    {id: 1, nombre: "Agua mineral Glaciar 1,5lt - Pack x 6", categoria: "aguas", stock: 250, precio: 1250, rutaImagen: "glaciar-1500ml.jpg"},
    {id: 2, nombre: "Agua mineral Glaciar 2lt - Pack x 6", categoria: "aguas", stock: 500, precio: 1700, rutaImagen: "glaciar-2000ml.jpg"},
    {id: 3, nombre: "Agua mineral Glaciar Bidón 6,3lt - Pack x 2", categoria: "aguas", stock: 150, precio: 1350, rutaImagen: "glaciar-6300ml.jpg"},
    {id: 4, nombre: "Agua mineral Villavicencio 2lt - Pack x 6", categoria: "aguas", stock: 400, precio: 1750, rutaImagen: "villavicencio-2000ml.jpg"},
    {id: 5, nombre: "Agua mineral sin gas Eco 1,5lt - Pack x 6", categoria: "aguas", stock: 300, precio: 1150, rutaImagen: "eco-singas-1500ml.jpg"},
    {id: 6, nombre: "Agua mineral con gas Eco 1,5lt - Pack x 6", categoria: "aguas", stock: 220, precio: 1150, rutaImagen: "eco-congas-1500ml.jpg"},
    {id: 7, nombre: "Agua mineral sin gas Eco 2lt - Pack x 6", categoria: "aguas", stock: 200, precio: 1650, rutaImagen: "eco-singas-2000ml.jpg"},
    {id: 8, nombre: "Pepsi Lata 354ml - Pack x 6", categoria: "gaseosas", stock: 850, precio: 1150, rutaImagen: "pepsi-354ml.jpg"},
    {id: 9, nombre: "Pepsi 1,5lt - Pack x 6", categoria: "gaseosas", stock: 550, precio: 1750, rutaImagen: "pepsi-1500ml.jpg"},
    {id: 10, nombre: "Pepsi 2,25lt - Pack x 6", categoria: "gaseosas", stock: 600, precio: 2850, rutaImagen: "pepsi-2250ml.jpg"},
    {id: 11, nombre: "Pepsi Black Lata 354ml - Pack x 6", categoria: "gaseosas", stock: 650, precio: 1050, rutaImagen: "pepsi-black-354ml.jpg"},
    {id: 12, nombre: "Pepsi Black 1,5lt - Pack x 6", categoria: "gaseosas", stock: 200, precio: 1650, rutaImagen: "pepsi-black-1500ml.jpg"},
    {id: 13, nombre: "Pepsi Black 2,25lt - Pack x 6", categoria: "gaseosas", stock: 300, precio: 2750, rutaImagen: "pepsi-black-2250ml.jpg"},
    {id: 14, nombre: "Seven Up Lata 354ml - Pack x 6", categoria: "gaseosas", stock: 290, precio: 1100, rutaImagen: "sevenup-354ml.jpg"},
    {id: 15, nombre: "Seven Up 1,5lt - Pack x 6", categoria: "gaseosas", stock: 100, precio: 1700, rutaImagen: "sevenup-1500ml.jpg"},
    {id: 16, nombre: "Seven Up 2,25lt - Pack x 6", categoria: "gaseosas", stock: 120, precio: 2800, rutaImagen: "sevenup-2250ml.jpg"},
    {id: 17, nombre: "Mirinda 1,5lt - Pack x 6", categoria: "gaseosas", stock: 100, precio: 1450, rutaImagen: "mirinda-1500ml.jpg"},
    {id: 18, nombre: "Paso de Los Toros Pomelo 1,5lt - Pack x 6", categoria: "gaseosas", stock: 130, precio: 1900, rutaImagen: "pdlt-pomelo-1500ml.jpg"},
    {id: 19, nombre: "Paso de Los Toros Tonica 1,5lt - Pack x 6", categoria: "gaseosas", stock: 260, precio: 1850, rutaImagen: "pdlt-tonica-1500ml.jpg"},
    {id: 20, nombre: "Quilmes Clasica Lata 473ml - Pack x 6", categoria: "cervezas", stock: 250, precio: 1250, rutaImagen: "cerveza-quilmes-clasica-473ml.jpg"},
    {id: 21, nombre: "Quilmes Stout Lata 473ml - Pack x 6", categoria: "cervezas", stock: 650, precio: 1250, rutaImagen: "cerveza-quilmes-stout-473ml.jpg"},
    {id: 22, nombre: "Quilmes Bock Lata 473ml - Pack x 6", categoria: "cervezas", stock: 430, precio: 1250, rutaImagen: "cerveza-quilmes-bock-473ml.jpg"},
    {id: 23, nombre: "Quilmes Red Lager Lata 473ml - Pack x 6", categoria: "cervezas", stock: 350, precio: 1250, rutaImagen: "cerveza-quilmes-redlager-473ml.jpg"},
    {id: 24, nombre: "Stella Artois Lata 473ml - Pack x 6", categoria: "cervezas", stock: 300, precio: 1600, rutaImagen: "cerveza-stella-473ml.jpg"},
    {id: 25, nombre: "Heineken Lata 473ml - Pack x 6", categoria: "cervezas", stock: 470, precio: 1900, rutaImagen: "cerveza-heinken-473ml.jpg"},
    {id: 26, nombre: "Andes Origen Roja Lata 473ml - Pack x 6", categoria: "cervezas", stock: 420, precio: 1700, rutaImagen: "cerveza-andes-roja-473ml.jpg"},
    {id: 27, nombre: "Andes Origen IPA Lata 473ml - Pack x 6", categoria: "cervezas", stock: 230, precio: 1700, rutaImagen: "cerveza-andes-ipa-473ml.jpg"},
    {id: 28, nombre: "Andes Origen Rubia Lata 473ml - Pack x 6", categoria: "cervezas", stock: 130, precio: 1700, rutaImagen: "cerveza-andes-rubia-473ml.jpg"},
    {id: 29, nombre: "Andes Origen Negra Lata 473ml - Pack x 6", categoria: "cervezas", stock: 120, precio: 1700, rutaImagen: "cerveza-andes-negra-473ml.jpg"},
    {id: 30, nombre: "Brahma Lata 473ml - Pack x 6", categoria: "cervezas", stock: 850, precio: 1200, rutaImagen: "cerveza-brahma-473ml.jpg"},
]

let carritoJSON = JSON.parse(localStorage.getItem("carrito"))
let carrito = []

/*Se crea contenedor para crear tarjetas de cada bebida*/ 
let contenedor = document.getElementById("bebidas")

crearTarjetas(catalogoBebidas)

/*Funcion para crear tarjetas*/
function crearTarjetas(array){
    contenedor.innerHTML = ""
    array.forEach(elemento => {
        let tarjeta = document.createElement("div")
        tarjeta.className = "tarjetaBebida"
        tarjeta.innerHTML = `
         <h4>${elemento.nombre}</h4>
         <img src="images/${elemento.rutaImagen}">
         <h4>$${elemento.precio}</h4>
         <button id=${elemento.id}>AGREGAR AL CARRITO</button>
        `
    contenedor.appendChild(tarjeta)
    let botonAgregarAlCarrito = document.getElementById(elemento.id)
    botonAgregarAlCarrito.addEventListener ("click", agregarAlCarrito)
    })
}

function agregarAlCarrito(e) {
    let bebidaElegida = catalogoBebidas.find(bebida => bebida.id === Number(e.target.id))
    carrito.push({
        id: bebidaElegida.id,
        nombre: bebidaElegida.nombre,
        precio: bebidaElegida.precio
    })
    renderizarCarrito()
    localStorage.setItem("carrito", JSON.stringify(carrito))
}


function renderizarCarrito (){
    let carritoArmado = document.getElementById("carrito")
    carrito.forEach(bebida => {
        carritoArmado.innerHTML += `<p>${bebida.nombre} ${bebida.precio}</p>\n` 
    })
}

/*Funcion para filtrar bebidas por nombre y categoria cuando el usuario escribe*/
function filtrar() {
    let arrayFiltrado = catalogoBebidas.filter(elemento => elemento.nombre.toLowerCase().includes(buscador.value.toLowerCase()) || elemento.categoria.toLowerCase().includes(buscador.value.toLowerCase()))
    crearTarjetas(arrayFiltrado)
}


/*Funcion para filtrar bebidas por categoría (para los botones)*/
function filtrarPorCategoria(e){
    let arrayFiltrado = catalogoBebidas.filter(bebida => bebida.categoria === e.target.value)
    crearTarjetas(arrayFiltrado) 
}

/*Se define buscador*/
let buscador = document.getElementById("buscador")
buscador.addEventListener("input", filtrar)

/*Se definen los botones seteados con las categorias*/
let botonesFiltro = document.getElementsByClassName("filtro")
for (const botonFiltro of botonesFiltro){
    botonFiltro.addEventListener("click", filtrarPorCategoria)
}

/*Se define botón que muestra de nuevo todas las bebidas despues de hacer algun filtro por los otros botones*/
let botonTotal = document.getElementById("todasLasBebidas")
botonTotal.addEventListener("click", () => crearTarjetas(catalogoBebidas))


/*CARRITO
let botonCarrito = document.getElementById("botonCarrito")
botonCarrito.addEventListener("click", cambiarDeEstado)*/




