let calificacion1 = document.getElementById("calificacion1"); 
let calificacion2 = document.getElementById("calificacion2"); 
let calificacion3 = document.getElementById("calificacion3"); 
let calificacion4 = document.getElementById("calificacion4"); 
let calificacion5 = document.getElementById("calificacion5"); 

let btnGraficar = document.getElementById("btnGraficar");



let porcentajeCalificacion1 = document.getElementById("porcentajeCalificacion1")


let boxTextoCalificacion1 = document.getElementById("boxTextoCalificacion1")




btnGraficar.addEventListener("click", function(){


    let calif1 =parseFloat(calificacion1.value)
    let calif2 =parseFloat(calificacion2.value)
    let calif3 =parseFloat(calificacion3.value)
    let calif4 =parseFloat(calificacion4.value)
    let calif5 =parseFloat(calificacion5.value)


    let suma = calif1 + calif2 + calif3 + calif4 + calif5 

    let prom = suma/5; 



    //porcentajes. 

    
    let porcentaje1 = ((calif1 * 100)/suma).toFixed(0)
    let porcentaje2 = ((calif2 * 100)/suma).toFixed(0)
    let porcentaje3 = ((calif3 * 100)/suma).toFixed(0)
    let porcentaje4 = ((calif4 * 100)/suma).toFixed(0)
    let porcentaje5 = ((calif5 * 100)/suma).toFixed(0)

   //alert("los procetajes son: "+porcentaje1+"||"+porcentaje2+"||"+porcentaje3+"||"+porcentaje4+"||"+porcentaje5)


   porcentajeCalificacion1.style.width = (porcentaje1 * 2) + "px";
   
   
   let spanPorcentaje = document.createElement("span")

   boxTextoCalificacion1.appendChild(spanPorcentaje)

   spanPorcentaje.innerHTML =promCalificacion1.toFixed(0) + "%"

   spanPorcentaje.setAttribute("class", "span-porcentaje")




})