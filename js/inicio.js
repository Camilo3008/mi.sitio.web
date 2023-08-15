let modoOscuro = document.getElementById("modoOscuro")
let circle = document.getElementById("circle")

let nav = document.getElementById("nav")
let nombre = document.getElementById("nombre")
let modulo1 = document.getElementById("modulo1")
let modulo2 = document.getElementById("modulo2")
let modulo3 = document.getElementById("modulo3")

let boxActividades = document.getElementById("box-actividades")
let titleActividades = document.getElementById("title-actividades")
let act1 = document.getElementById("link-act-1")
let act2 = document.getElementById("link-act-2")
let act3 = document.getElementById("link-act-3")
let act4 = document.getElementById("link-act-4")
let act5 = document.getElementById("link-act-5")
let act6 = document.getElementById("link-act-6")
let act7 = document.getElementById("link-act-7")
let act8 = document.getElementById("link-act-8")
let act9 = document.getElementById("link-act-9")
let act10 = document.getElementById("link-act-10")
let act11 = document.getElementById("link-act-11")
let act12 = document.getElementById("link-act-12")

let bloqueRed1 = document.getElementById("bloque-red-1")
let bloqueRed2 = document.getElementById("bloque-red-2")
let bloqueRed3 = document.getElementById("bloque-red-3")
let red1 = document.getElementById("red-1")
let red2 = document.getElementById("red-2")
let red3 = document.getElementById("red-3")

let boxProyectos = document.getElementById("box-proyectos")
let tituloProyect = document.getElementById("titulo-proyect")
let proyecto1 = document.getElementById("proyecto1")
let proyecto2 = document.getElementById("proyecto2")
let proyecto3 = document.getElementById("proyecto3")
let subtProyecto1 = document.getElementById("SubT-proyecto1")
let subtProyecto2 = document.getElementById("SubT-proyecto2")
let subtProyecto3 = document.getElementById("SubT-proyecto3")

let boton1 = document.getElementById("proyect-boton1")
let boton2 = document.getElementById("proyect-boton2")
let boton3 = document.getElementById("proyect-boton3")


let logoHamburguer =  document.getElementById("logoHamburguer")
let ulmenu = document.getElementById("mainMenu")

logoHamburguer.addEventListener("click", function() {
    if(ulmenu.classList.contains("ul-menu")){
        ulmenu.classList.add("ul-menu-block");
        ulmenu.classList.remove("ul-menu");

        modoOscuro.classList.add("remove-toggle")
        modoOscuro.classList.remove("toggle")

    }
    else{
        ulmenu.classList.remove("ul-menu-block")
        ulmenu.classList.add("ul-menu")

        modoOscuro.classList.remove("remove-toggle")
        modoOscuro.classList.add("toggle")

    }

});


modoOscuro.addEventListener("click", function(){
    if(circle.classList.contains("circle-1")){
        circle.classList.add("circle-2")
        circle.classList.remove("circle-1")
        modoOscuro.classList.add("toggle-on")
        modoOscuro.classList.remove("toggle-off")
        nav.classList.add("nav-mo")
        nav.classList.remove("nav-mc")
        nombre.classList.add("nombre-mo")
        nombre.classList.remove("nombre-mc")
        modulo1.classList.add("link-modulos-mo")
        modulo1.classList.remove("link-modulos-mc")
        modulo2.classList.add("link-modulos-mo")
        modulo2.classList.remove("link-modulos-mc")
        modulo3.classList.add("link-modulos-mo")
        modulo3.classList.remove("link-modulos-mc")
        boxActividades.classList.add("box-actividades-mo")
        boxActividades.classList.remove("box-actividades-mc")
        titleActividades.classList.add("color-T-C-mo")
        titleActividades.classList.remove("color-T-C")
        act1.classList.add("link-act-mo")
        act1.classList.remove("link-act-mc")
        act2.classList.add("link-act-mo")
        act2.classList.remove("link-act-mc")
        act3.classList.add("link-act-mo")
        act3.classList.remove("link-act-mc")
        act4.classList.add("link-act-mo")
        act4.classList.remove("link-act-mc")
        act5.classList.add("link-act-mo")
        act5.classList.remove("link-act-mc")
        act6.classList.add("link-act-mo")
        act6.classList.remove("link-act-mc")
        act7.classList.add("link-act-mo")
        act7.classList.remove("link-act-mc")
        act8.classList.add("link-act-mo")
        act8.classList.remove("link-act-mc")
        act9.classList.add("link-act-mo")
        act9.classList.remove("link-act-mc")
        act10.classList.add("link-act-mo")
        act10.classList.remove("link-act-mc")
        act11.classList.add("link-act-mo")
        act11.classList.remove("link-act-mc")
        act12.classList.add("link-act-mo")
        act12.classList.remove("link-act-mc")
        bloqueRed1.classList.add("bloque-red-mo")
        bloqueRed1.classList.remove("bloque-red")
        bloqueRed2.classList.add("bloque-red-mo")
        bloqueRed2.classList.remove("bloque-red")
        bloqueRed3.classList.add("bloque-red-mo")
        bloqueRed3.classList.remove("bloque-red")
        red1.classList.add("link-redes-mo")
        red1.classList.remove("link-redes")
        red2.classList.add("link-redes-mo")
        red2.classList.remove("link-redes")
        red3.classList.add("link-redes-mo")
        red3.classList.remove("link-redes")

        boxProyectos.classList.add("box-proyectos-mo")
        boxProyectos.classList.remove("box-proyectos-mc")
        tituloProyect.classList.add("titulo-proyect-mo")
        tituloProyect.classList.remove("titulo-proyect-mc")
        proyecto1.classList.add("proyectos-mo")
        proyecto1.classList.remove("proyectos-mc")
        proyecto2.classList.add("proyectos-mo")
        proyecto2.classList.remove("proyectos-mc")
        proyecto3.classList.add("proyectos-mo")
        proyecto3.classList.remove("proyectos-mc")
        subtProyecto1.classList.add("SubT-proyecto-mo")
        subtProyecto1.classList.remove("SubT-proyecto-mc")
        subtProyecto2.classList.add("SubT-proyecto-mo")
        subtProyecto2.classList.remove("SubT-proyecto-mc")
        subtProyecto3.classList.add("SubT-proyecto-mo")
        subtProyecto3.classList.remove("SubT-proyecto-mc")

        boton1.classList.add("proyect-boton-mo")
        boton1.classList.remove("proyect-boton-mc")
        boton2.classList.add("proyect-boton-mo")
        boton2.classList.remove("proyect-boton-mc")
        boton3.classList.add("proyect-boton-mo")
        boton3.classList.remove("proyect-boton-mc")

        logoHamburguer.classList.add("logo-hamburguer-mo")
        logoHamburguer.classList.remove("logo-hamburguer-mc")
        
    }

    else{
        circle.classList.remove("circle-2")
        circle.classList.add("circle-1")
        modoOscuro.classList.remove("toggle-on")
        modoOscuro.classList.add("toggle-off")
        nav.classList.remove("nav-mo")
        nav.classList.add("nav-mc")
        nombre.classList.remove("nombre-mo")
        nombre.classList.add("nombre-mc")
        modulo1.classList.remove("link-modulos-mo")
        modulo1.classList.add("link-modulos-mc")
        modulo2.classList.remove("link-modulos-mo")
        modulo2.classList.add("link-modulos-mc")
        modulo3.classList.remove("link-modulos-mo")
        modulo3.classList.add("link-modulos-mc")
        boxActividades.classList.remove("box-actividades-mo")
        boxActividades.classList.add("box-actividades-mc")
        titleActividades.classList.remove("color-T-C-mo")
        titleActividades.classList.add("color-T-C")
        act1.classList.remove("link-act-mo")
        act1.classList.add("link-act-mc")
        act2.classList.remove("link-act-mo")
        act2.classList.add("link-act-mc")
        act3.classList.remove("link-act-mo")
        act3.classList.add("link-act-mc")
        act4.classList.remove("link-act-mo")
        act4.classList.add("link-act-mc")
        act5.classList.remove("link-act-mo")
        act5.classList.add("link-act-mc")
        act6.classList.remove("link-act-mo")
        act6.classList.add("link-act-mc")
        act7.classList.remove("link-act-mo")
        act7.classList.add("link-act-mc")
        act8.classList.remove("link-act-mo")
        act8.classList.add("link-act-mc")
        act9.classList.remove("link-act-mo")
        act9.classList.add("link-act-mc")
        act10.classList.remove("link-act-mo")
        act10.classList.add("link-act-mc")
        act11.classList.remove("link-act-mo")
        act11.classList.add("link-act-mc")
        act12.classList.remove("link-act-mo")
        act12.classList.add("link-act-mc")
        bloqueRed1.classList.remove("bloque-red-mo")
        bloqueRed1.classList.add("bloque-red")
        bloqueRed2.classList.remove("bloque-red-mo")
        bloqueRed2.classList.add("bloque-red")
        bloqueRed3.classList.remove("bloque-red-mo")
        bloqueRed3.classList.add("bloque-red")
        red1.classList.remove("link-redes-mo")
        red1.classList.add("link-redes")
        red2.classList.remove("link-redes-mo")
        red2.classList.add("link-redes")
        red3.classList.remove("link-redes-mo")
        red3.classList.add("link-redes")


        boxProyectos.classList.remove("box-proyectos-mo")
        boxProyectos.classList.add("box-proyectos-mc")
        tituloProyect.classList.remove("titulo-proyect-mo")
        tituloProyect.classList.add("titulo-proyect-mc")
        proyecto1.classList.remove("proyectos-mo")
        proyecto1.classList.add("proyectos-mc")
        proyecto2.classList.remove("proyectos-mo")
        proyecto2.classList.add("proyectos-mc")
        proyecto3.classList.remove("proyectos-mo")
        proyecto3.classList.add("proyectos-mc")
        subtProyecto1.classList.remove("SubT-proyecto-mo")
        subtProyecto1.classList.add("SubT-proyecto-mc")
        subtProyecto2.classList.remove("SubT-proyecto-mo")
        subtProyecto2.classList.add("SubT-proyecto-mc")
        subtProyecto3.classList.remove("SubT-proyecto-mo")
        subtProyecto3.classList.add("SubT-proyecto-mc")

        boton1.classList.remove("proyect-boton-mo")
        boton1.classList.add("proyect-boton-mc")
        boton2.classList.remove("proyect-boton-mo")
        boton2.classList.add("proyect-boton-mc")
        boton3.classList.remove("proyect-boton-mo")
        boton3.classList.add("proyect-boton-mc")

        logoHamburguer.classList.remove("logo-hamburguer-mo")
        logoHamburguer.classList.add("logo-hamburguer-mc")
    }
})



