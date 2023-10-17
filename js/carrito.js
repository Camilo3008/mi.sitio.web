let boxPlus = document.getElementById("boxPlus");
let boxUnidades = document.getElementById("boxUnidades"); 
let boxMinus = document.getElementById("boxMinus");

boxPlus.addEventListener("click", function(){

    let auxUnidades = parseInt(boxUnidades.innerText);
    if (auxUnidades < 10){
        boxUnidades.innerText = (auxUnidades + 1).toString();  
    };


});

boxMinus.addEventListener("click", function(){

    let auxUnidades = parseInt(boxUnidades.innerText);
    if (auxUnidades > 0){
        boxUnidades.innerText = (auxUnidades - 1).toString();  
    };

});
