 

let contenedorPrinc = document.getElementById("contenedorPrinc");
let contenedor = document.getElementById("contenedor");

let contenido = document.getElementById("contenido");
let texto = document.getElementById("texto");
let titulo = document.getElementById("titulo")


contenedorPrinc.addEventListener("click", function(){
    if(contenedor.classList.contains("contenedor-1")){
        contenedor.classList.add("contenedor-2")
        contenedor.classList.remove("contenedor-1")
        contenedorPrinc.classList.add("main-box-on");
        contenedorPrinc.classList.remove("main-box-off");

        contenido.classList.add("contenido-oscuro")
        contenido.classList.remove("contenido")
        texto.classList.add("text-prin-oscuro")
        texto.classList.remove("text-prin")

        titulo.classList.add("titulo-prin-oscuro")
        titulo.classList.remove("titulo-prin")


    }
    else{
        contenedor.classList.remove("contenedor-2")
        contenedor.classList.add("contenedor-1")
        contenedorPrinc.classList.remove("main-box-on");
        contenedorPrinc.classList.add("main-box-off");

        contenido.classList.remove("contenido-oscuro")
        contenido.classList.add("contenido")
        texto.classList.remove("text-prin-oscuro")
        texto.classList.add("text-prin")
        titulo.classList.remove("titulo-prin-oscuro")
        titulo.classList.add("titulo-prin")
    }
}) 
