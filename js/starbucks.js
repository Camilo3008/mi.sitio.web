let iceGreen = document.getElementById("iceGreen");

let iceRose = document.getElementById("iceRose");

let icePink = document.getElementById("icePink");

let maincircle = document.getElementById("mainCircle");

let mainImg = document.getElementById("mainImg")

let titleColor = document.getElementById("titleColor")




/* mouseover es como el hover,  */
iceGreen.addEventListener("mouseover", function(){
    maincircle.classList.add("main-circle-green")
    maincircle.classList.remove("main-circle-rose")
    maincircle.classList.remove("main-circle-pink")

    mainImg.setAttribute("src", "img/img1.png")
    /* set atri---  se utiliza para agregar una imagen, NO utilizamos ../ , es como si lo fueramos a llamar directamente de html  */
    titleColor.classList.add("title-color-gree")
    titleColor.classList.remove("title-color-rose")
    titleColor.classList.remove("title-color-pink")


})

iceRose.addEventListener("mouseover", function(){
    maincircle.classList.remove("main-circle-green")
    maincircle.classList.add("main-circle-rose")
    maincircle.classList.remove("main-circle-pink")
    
    mainImg.setAttribute("src", "img/img2.png")

    titleColor.classList.remove("title-color-gree")
    titleColor.classList.add("title-color-rose")
    titleColor.classList.remove("title-color-pink")
})

icePink.addEventListener("mouseover", function(){
    maincircle.classList.remove("main-circle-green")
    maincircle.classList.remove("main-circle-rose")
    maincircle.classList.add("main-circle-pink")

    mainImg.setAttribute("src", "img/img3.png")

    titleColor.classList.remove("title-color-gree")
    titleColor.classList.remove("title-color-rose")
    titleColor.classList.add("title-color-pink")
})