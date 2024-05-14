
function cambio(){
    let imagen = document.getElementById("portada");
    imagen.src = "assets/js/pic1.png";
}


var swiper = new Swiper(".mySwiper", {

    slidesPerView: 1,
    spaceBetween: 80,
    grabCursor: true,
    loop: true,
    breakpoints: {
        991: {
            slidesPerView: 3,
        },
        650: {
            slidesPerView: 2,
        }
    }

})