const urlLocal = './productos.json'
let productos = []
let carrito = JSON.parse(localStorage.getItem("carrito")) || ([])

llamarProductos()
verProductos()


function llamarProductos() {
    fetch(urlLocal)
        .then(response => response.json())
        .then(data => {
            productos = data.productos
            renderizar(productos, contenedor, carrito)
        })
        .catch(mensajeError => contenedor.innerHTML = '<p>¡Ups! Algo no salió como esperábamos</p>')
}

function verProductos() {
    
    let buscador = document.getElementById("buscador")
    buscador.addEventListener("input", () => filtrar())

    let botonCarrito = document.getElementById("botonCarrito")
    botonCarrito.addEventListener("click", mostrarOcultar)

    let botonFinalizarCompra = document.getElementById("finalizarCompra")
    botonFinalizarCompra.addEventListener("click", () => finalizarCompra(carrito))

    llamarProductos()
}

function filtrar() {
    let arrayFiltrado = productos.filter(elemento => elemento.nombre.toLowerCase().includes(buscador.value.toLowerCase()) || elemento.categoria.toLowerCase().includes(buscador.value.toLowerCase()))
    renderizar(arrayFiltrado, contenedor, carrito)
}


function renderizar(productos, contenedor, carrito) {
    contenedor.innerHTML = ""
    productos.forEach(({ nombre, rutaImagen, precio, id }) => {
        let tarjetaProducto = document.createElement("div")
        tarjetaProducto.className = "tarjetaProducto"
        let contenidoTarjeta = `
        <h6>${nombre}</h6>
        <img src="images/${rutaImagen}">
        <h3>$${precio}</h3>
        <button id=${id} type="button" class="btn btn-success">AGREGAR AL CARRITO</i></button>
        `
        tarjetaProducto.innerHTML = contenidoTarjeta
        contenedor.appendChild(tarjetaProducto)
        let botonAgregarAlCarrito = document.getElementById(id)
        botonAgregarAlCarrito.addEventListener("click", () => agregarAlCarrito(productos, id, carrito))
    })
}

function agregarAlCarrito(productos, id, carrito) {
    let productoBuscado = productos.find(producto => producto.id === id)
    let posicionProductoEnCarrito = carrito.findIndex(producto => producto.id === id)
    if (posicionProductoEnCarrito !== -1) {
        carrito[posicionProductoEnCarrito].unidades++
        carrito[posicionProductoEnCarrito].subtotal = carrito[posicionProductoEnCarrito].unidades * carrito[posicionProductoEnCarrito].precioUnitario
    } else {
        carrito.push({
            rutaImagen: productoBuscado.rutaImagen,
            id: productoBuscado.id,
            nombre: productoBuscado.nombre,
            precioUnitario: productoBuscado.precio,
            unidades: 1,
            subtotal: productoBuscado.precio
        })
    }
    tostada(productoBuscado.nombre)
    localStorage.setItem("carrito", JSON.stringify(carrito))
    renderizarCarrito(carrito)
    llamarProductos(productos, carrito)
}

function tostada(nombre) {
    Toastify({
        text: "Agregaste " + nombre + " al carrito!",
        className: "info",
        duration: 1700
    }).showToast()
}


function mostrarOcultar() {
    let padreContenedor = document.getElementById("productosContenedor")
    let carrito = document.getElementById("contenedorCarrito")
    padreContenedor.classList.toggle("oculto")
    carrito.classList.toggle("oculto")
    llamarProductos()
}

function renderizarCarrito(carrito) {
    let total = 0
    let totalProductos = 0
    let carritoFisico = document.getElementById("carrito")
    carritoFisico.classList.add("claseCarrito")
    carritoFisico.innerHTML = ""

    let listaCarrito = document.createElement("ul")
    listaCarrito.classList.add("cart-list")

    carrito.forEach(({ rutaImagen, id, nombre, precioUnitario, unidades, subtotal}) => {
        let elementoDelCarrito = document.createElement("li")
        elementoDelCarrito.classList.add("cart-item")
        elementoDelCarrito.innerHTML += `
            <img class="imgItemCarrito" src="images/${rutaImagen}"></img>
            <h6>ID: ${id}   |   Producto: ${nombre}</h6>
            <h5>Precio: $${precioUnitario}   |   Cantidad: ${unidades}   |   Subtotal: $${subtotal}</h5>
            `
        listaCarrito.appendChild(elementoDelCarrito)
        carritoFisico.appendChild(elementoDelCarrito)
        total += subtotal
        totalProductos += unidades
    })
    carritoFisico.innerHTML += `
    <li class="carritoTotal">Total $${total}</li>`
    llamarProductos()
}


function finalizarCompra() {
    carrito.innerHTML = ""
    localStorage.removeItem("carrito")
    carrito = ([])
    carritoJSON = ([])
    graciasPorSuCompra()
    renderizarCarrito(carrito)
}

function graciasPorSuCompra() {
    Swal.fire(
        '¡Muchas gracias por tu compra!',
        'En breve recibirás un correo con la información detallada de tu pedido',
        'success'
    )
}

  
  


  
  
  
  
 