let iceGreen = document.getElementById("iceGreen");

let iceRose = document.getElementById("iceRose");

let icePink = document.getElementById("icePink");

let maincircle = document.getElementById("mainCircle");

let mainImg = document.getElementById("mainImg")




/* mouseover es como el hover,  */
iceGreen.addEventListener("mouseover", function(){
    maincircle.classList.add("main-circle-green")
    maincircle.classList.remove("main-circle-rose")
    maincircle.classList.remove("main-circle-pink")

    mainImg.setAttribute("src", "img/img1.png")
    /* set atri---  se utiliza para agregar una imagen, NO utilizamos ../ , es como si lo fueramos a llamar directamente de html  */
})

iceRose.addEventListener("mouseover", function(){
    maincircle.classList.remove("main-circle-green")
    maincircle.classList.add("main-circle-rose")
    maincircle.classList.remove("main-circle-pink")
    
    mainImg.setAttribute("src", "img/img2.png")
})

icePink.addEventListener("mouseover", function(){
    maincircle.classList.remove("main-circle-green")
    maincircle.classList.remove("main-circle-rose")
    maincircle.classList.add("main-circle-pink")

    mainImg.setAttribute("src", "img/img3.png")
})