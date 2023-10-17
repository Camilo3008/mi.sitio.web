let boxPlus = document.getElementById("boxPlus");
let boxUnidades = document.getElementById("boxUnidades"); 
let boxMinus = document.getElementById("boxMinus");
let subTotal = document.getElementById("subTotal");

const valorUnidad = 120000; 
const valorUnidadStr = Intl.NumberFormat("de-De").format(valorUnidad);
document.getElementById("precioUnidad").innerHTML = "$" + valorUnidadStr;


boxPlus.addEventListener("click", function(){

    let auxUnidades = parseInt(boxUnidades.innerText);
    if (auxUnidades < 10){
        boxUnidades.innerText = (auxUnidades + 1).toString();  

        let valorSubTotal = parseInt(boxUnidades.innerHTML) * valorUnidad; 

        subTotal.innerHTML = Intl.NumberFormat("de-De").format(valorSubTotal);

        
        if (boxUnidades.innerHTML == 1){
            document.getElementById("cantProducto").innerHTML = boxUnidades.innerHTML + "Producto ";
        
        }else if(boxUnidades.innerHTML >=2){
            document.getElementById("cantProducto").innerHTML = boxUnidades.innerHTML + "Productos";
        }

    };


});

boxMinus.addEventListener("click", function(){

    let auxUnidades = parseInt(boxUnidades.innerText);
    if (auxUnidades > 0){
        boxUnidades.innerText = (auxUnidades - 1).toString();  


        let valorSubTotal = parseInt(boxUnidades.innerHTML) * valorUnidad; 

        subTotal.innerHTML = Intl.NumberFormat("de-De").format(valorSubTotal);

        
        if (boxUnidades.innerHTML == 1){
            document.getElementById("cantProducto").innerHTML = boxUnidades.innerHTML + "Producto ";
        
        }else {
            document.getElementById("cantProducto").innerHTML = boxUnidades.innerHTML + "Productos";
        }

    };

});
