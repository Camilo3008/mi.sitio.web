let boxProductos = document.getElementById("boxProductos")

/* Contenedor productos individuales */
let boxProducto = document.createElement("div")   //creamos un elemento, puede ser cualquier cosa.




boxProductos.appendChild(boxProducto)         //que tiene de hijo a 
boxProducto.setAttribute("class", "box-producto")    //atributo y su respecctivo valor,    


let boxImagen = document.createElement("div")
boxProducto.appendChild(boxImagen)
boxImagen.setAttribute("class", "box-imagen")


let imagenProducto = document.createElement("img")
boxImagen.appendChild(imagenProducto)
imagenProducto.setAttribute("src", "img/mazda1.webp")
imagenProducto.setAttribute("class", "img-producto")


/* informacion */

let infoProducto = document.createElement("div")
boxProducto.appendChild(infoProducto)
infoProducto.setAttribute("class", "box-info-producto")



/* marca */
let marcaProducto = document.createElement("label")
infoProducto.appendChild(marcaProducto)
marcaProducto.setAttribute("class", "info-principal")

let nodoMarcaProducto = document.createTextNode("Mazda ")
marcaProducto.appendChild(nodoMarcaProducto)

/* modelo */

let modeloProducto = document.createElement("label")
infoProducto.appendChild(modeloProducto)
modeloProducto.setAttribute("class", "info-principal")

let nodoModeloProducto = document.createTextNode(" Grand Touring Lx")
modeloProducto.appendChild(nodoModeloProducto)

/* precio */

let precioProducto = document.createElement("label")
infoProducto.appendChild(precioProducto)
precioProducto.setAttribute("class", "precio")

let nodoPrecioProducto = document.createTextNode("$ 65.000.000")
precioProducto.appendChild(nodoPrecioProducto)


/* año */

let añoProducto = document.createElement("label")
infoProducto.appendChild(añoProducto)
añoProducto.setAttribute("class", "info-secundaria")

let nodoAñoProducto = document.createTextNode("2017 °")
añoProducto.appendChild(nodoAñoProducto)


/* kilometraje */
let kilometrajeProducto = document.createElement("label")
infoProducto.appendChild(kilometrajeProducto)
kilometrajeProducto.setAttribute("class", "info-secundaria")

let nodoKilometrajeProducto = document.createTextNode(" 36.000 km °")
kilometrajeProducto.appendChild(nodoKilometrajeProducto)


/* ubicacion */

let ubicacionProducto = document.createElement("label")
infoProducto.appendChild(ubicacionProducto)
ubicacionProducto.setAttribute("class", "info-secundaria")

let nodoUbicacionProducto = document.createTextNode(" Usaquen - Bogota D.C")
ubicacionProducto.appendChild(nodoUbicacionProducto)



/* 

let boxImagen = document.createElement("img")

boxProducto.appendChild(boxImagen)
boxImagen.setAttribute("src", "img/mazda1.webp")
boxImagen.setAttribute("class", "box-imagen") */