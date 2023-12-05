
class Automovil{
    constructor(marca, modelo, precio, anyo, kilometros, ciudad, imagen){

        this.marca = marca
        this.modelo = modelo
        this.precio = precio
        this.anyo = anyo
        this.kilometros = kilometros
        this.ciudad = ciudad
        this.imagen = imagen
    }

}

let auto1 = new Automovil("Mazda", "Grand Touring Lx", "65.000.000", 2017, 36000, " Usaquen - Bogota D.C", "img/mazda1.webp");  //instanciamos el objeto.  

let auto2 = new Automovil("Mazda", "3 2.0 Grand Touring", "74.000.000", 2018, 40000, "Pitalito-Huila", "img/mazda2.png"  ); 

let auto3 = new Automovil("Mazda", "CX-5 2.0  Mid Fwd", "70.000.000", 2014, 116000, "Pitalito-Huila", "img/mazda4.webp"  ); 


let auto4 = new Automovil("Yamaha", "R6", "75.000.000", 2019, 56000, "Medellin-Antioquia", "img/yamaha1.webp"  ); 

let auto5 = new Automovil("Yamaha", "Mt-09", "47.000.000", 2019, 22000, "Cartagena- ", "img/yamaha2.webp"  ); 



let boxProductos = document.getElementById("boxProductos")


window.addEventListener("keydown", (event) =>{

    let inputBusqueda = document.getElementById("inputBusqueda").value

    if (event.key == "Enter" ){

        boxProductos.innerHTML = "";
        
        let inputBusquedaAux = inputBusqueda.toLowerCase()

        if(inputBusquedaAux == "mazda"){
            cargarAutomovil(auto1)
            cargarAutomovil(auto2)
            cargarAutomovil(auto3)
        }
        else if (inputBusquedaAux == "yamaha"){
            cargarAutomovil(auto4)
            cargarAutomovil(auto5)
        }
    }
})

cargarAutomovil(auto1)
cargarAutomovil(auto2)
cargarAutomovil(auto3)
cargarAutomovil(auto4)
cargarAutomovil(auto5)






function cargarAutomovil ( auto){
        /* Contenedor productos individuales */
    let boxProducto = document.createElement("div")   //creamos un elemento, puede ser cualquier cosa.

    boxProductos.appendChild(boxProducto)         //que tiene de hijo a 
    boxProducto.setAttribute("class", "box-producto")    //atributo y su respecctivo valor,    


    let boxImagen = document.createElement("div")
    boxProducto.appendChild(boxImagen)
    boxImagen.setAttribute("class", "box-imagen")


    let imagenProducto = document.createElement("img")
    boxImagen.appendChild(imagenProducto)
    imagenProducto.setAttribute("src", auto.imagen)
    imagenProducto.setAttribute("class", "img-producto")


    /* informacion */

    let infoProducto = document.createElement("div")
    boxProducto.appendChild(infoProducto)
    infoProducto.setAttribute("class", "box-info-producto")



    /* marca */
    let marcaProducto = document.createElement("label")
    infoProducto.appendChild(marcaProducto)
    /* marcaProducto.setAttribute("class", "info-principal") */
    marcaProducto.setAttribute("class", "marca-producto")

    let nodoMarcaProducto = document.createTextNode(auto.marca + " ") //accedemos al objeto y a la propiedad.  
    marcaProducto.appendChild(nodoMarcaProducto)

    /* modelo */

    let modeloProducto = document.createElement("label")
    infoProducto.appendChild(modeloProducto)
    modeloProducto.setAttribute("class", "modelo-producto")

    let nodoModeloProducto = document.createTextNode(auto.modelo + " ")
    modeloProducto.appendChild(nodoModeloProducto)

    /* precio */

    let precioProducto = document.createElement("label")
    infoProducto.appendChild(precioProducto)
    precioProducto.setAttribute("class", "precio-producto")

    let nodoPrecioProducto = document.createTextNode("$"+auto.precio)
    precioProducto.appendChild(nodoPrecioProducto)


    /* año */

    let anyoProducto = document.createElement("label")
    infoProducto.appendChild(anyoProducto)
    anyoProducto.setAttribute("class", "anyo-producto")

    let nodoAnyoProducto = document.createTextNode(auto.anyo + " · ")
    anyoProducto.appendChild(nodoAnyoProducto)


    /* kilometraje */
    let kilometrajeProducto = document.createElement("label")
    infoProducto.appendChild(kilometrajeProducto)
    kilometrajeProducto.setAttribute("class", "kilometraje")

    let nodoKilometrajeProducto = document.createTextNode(auto.kilometros + "Km" + " · ")
    kilometrajeProducto.appendChild(nodoKilometrajeProducto)


    /* ubicacion */


    let ubicacionProducto = document.createElement("label")
    infoProducto.appendChild(ubicacionProducto)
    ubicacionProducto.setAttribute("class", "ciudad")

    let nodoUbicacionProducto = document.createTextNode(auto.ciudad)
    ubicacionProducto.appendChild(nodoUbicacionProducto)
}







/* 

let boxImagen = document.createElement("img")

boxProducto.appendChild(boxImagen)
boxImagen.setAttribute("src", "img/mazda1.webp")
boxImagen.setAttribute("class", "box-imagen") */