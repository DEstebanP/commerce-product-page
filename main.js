const burguerMenu = document.querySelector(".burguer-menu");
const menuMobile = document.querySelector(".background-navbar-mobile");
const closeMenuMobile = document.querySelector(".close-menu-mobile");
const cartIcon = document.querySelector(".cart");
const cartContainer = document.querySelector(".cart-box");

const prevBtn = document.getElementById('prevBtn-mobile');
const nextBtn = document.getElementById('nextBtn-mobile');
const carouselContainer = document.querySelector('.product-images-carousel');
const carouselImages = document.querySelectorAll('.product-images-carousel img');

burguerMenu.addEventListener('click', toggleMenuMobile);
closeMenuMobile.addEventListener('click', toggleMenuMobile);
cartIcon.addEventListener('click', toggleCartContainer);

let currentIndex = 0;

function showImage(index) {
    if (index < 0) {
        currentIndex = carouselImages.length - 1;
    } else if (index >= carouselImages.length) {
        currentIndex = 0;
    }
    const offset = -currentIndex*100;
    carouselContainer.style.transform = `translateX(${offset}%)`;
}
prevBtn.addEventListener("click", () => {
    currentIndex--;
    console.log(currentIndex);
    showImage(currentIndex);
});
nextBtn.addEventListener("click", () => {
    currentIndex++;
    showImage(currentIndex);
});
showImage();

function toggleMenuMobile() {
    menuMobile.classList.toggle('inactive');

    if(!cartContainer.classList.contains('inactive')) {
        cartContainer.classList.add('inactive');
    }
}
function toggleCartContainer() {
    cartContainer.classList.toggle('inactive');
}