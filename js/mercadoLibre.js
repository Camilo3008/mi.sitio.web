let mainContent = document.getElementById("mainContent")

let boxProducto = document.createElement("div")   //ingresamos un elemento, puede ser vualquier cosa.




mainContent.appendChild(boxProducto)

boxProducto.setAttribute("class", "box-producto")    //atributo y su respecctivo valor. 



let marcaProducto = document.createElement("label")
mainContent.appendChild(marcaProducto)

let nodoMarcaProducto = document.createTextNode("Mazda")

marcaProducto.appendChild(nodoMarcaProducto)

/* cargar modelo */
/* cx-s */
/* precio */
/* año */
/* kilometraje */






/* Cargar imagen */
let imgProducto = document.createElement("img")

mainContent.appendChild(imgProducto)
imgProducto.setAttribute("src", "img/thumb1.png")






/* 
let marcaProducto = document.createElement("label")
boxProducto.appendChild(marcaProducto)

let nodoMarcaProducto = document.createTextNode("Mazda")
nodoMarcaProducto.setAttribute("class", "parrafo-js")


marcaProducto.appendChild(nodoMarcaProducto)
 */
