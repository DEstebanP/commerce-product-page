const burguerMenu = document.querySelector(".burguer-menu");
const menuMobile = document.querySelector(".background-navbar-mobile");
const closeMenuMobile = document.querySelector(".close-menu-mobile");
const cartIcon = document.querySelector(".cart");
const cartContainer = document.querySelector(".cart-box");

const minusCart = document.getElementById('minus-cart');
const countCart = document.getElementById('cart-count-number');
const plusCart = document.getElementById('plus-cart');
const numberCart = document.querySelector('.number-cart');
const numberCartSpan = document.querySelector('.number-cart span');

const cartBox = document.querySelector('.cart-box');
const addToCartBtn = document.querySelector('.cart-btn');

//Carousel elements
const prevBtn = document.getElementById('prevBtn-mobile');
const nextBtn = document.getElementById('nextBtn-mobile');
const carouselContainer = document.querySelector('.product-images-carousel');
const carouselViewport = document.querySelector(".carousel-viewport");
const carouselImages = document.querySelectorAll('.product-images-carousel img');

burguerMenu.addEventListener('click', toggleMenuMobile);
closeMenuMobile.addEventListener('click', toggleMenuMobile);
cartIcon.addEventListener('click', toggleCartContainer);
minusCart.addEventListener('click', minusCartCount);
plusCart.addEventListener('click', plusCartCount);
addToCartBtn.addEventListener('click', addProductToCart);


/* const imageWidth = carouselImages[0].clientWidth;
let currentIndex = 0;

prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + carouselImages.length) % carouselImages.length;
    updateCarousel();
});
nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % carouselImages.length;
    updateCarousel();
});
function updateCarousel() {
    console.log(currentIndex);
    const offset = currentIndex * imageWidth;
    carouselViewport.scrollLeft = offset;
} */

function toggleMenuMobile() {
    menuMobile.classList.toggle('inactive');

    if(!cartContainer.classList.contains('inactive')) {
        cartContainer.classList.add('inactive');
    }
}
function toggleCartContainer() {
    cartContainer.classList.toggle('inactive');
}

function minusCartCount() {
    if(Number(countCart.innerText) !== 1) {
        const newNumber = Number(countCart.innerText) - 1;
        countCart.innerText = newNumber;
    }
}
function plusCartCount() {
    const newNumber = Number(countCart.innerText) + 1;
    countCart.innerText = newNumber;
}

{/* <div class="product-in-cart">
        <img src="./images/image-product-3-thumbnail.jpg" alt="">
        <p>Fall Limited Edition Sneakers</p>
        p>$125.00 x <span>3</span> <span class="total-price">$375.00</span></p>
        <img class="delete-icon" src="./images/icon-delete.svg" alt="delete">
    </div>
    <button class="checkout-btn btn">Checkout</button> */}
function addProductToCart() {
    // !Delete cart-box text
    cartBox.removeChild(cartBox.children[1]);

    const productPrice = 125.00;

    // layout the cart product
    const productContainer = document.createElement('div');
    productContainer.classList.add('product-in-cart');

    const productImg = document.createElement('img');
    productImg.src = './images/image-product-1-thumbnail.jpg';

    const pText = document.createElement('p');
    pText.innerText = "Fall Limited Edition Sneakers";

    const spanNumber = document.createElement('span');
    spanNumber.innerText = countCart.innerText
    const spanTotalPrice = document.createElement('span');
    spanTotalPrice.classList.add('total-price');
    spanTotalPrice.innerText = "$" + (productPrice * Number(spanNumber.innerText)).toFixed(2);
    const pInfo = document.createElement('p');
    pInfo.appendChild(document.createTextNode("$125.00 x "));
    pInfo.appendChild(spanNumber);
    pInfo.appendChild(document.createTextNode(" "));
    pInfo.appendChild(spanTotalPrice);

    const deleteIcon = document.createElement('img');
    deleteIcon.classList.add('delete-icon');
    deleteIcon.src = './images/icon-delete.svg';

    deleteIcon.addEventListener("click", removeProductCart);

    productContainer.append(productImg, pText, pInfo, deleteIcon);
    cartBox.appendChild(productContainer);
}

function removeProductCart() {
    while (cartBox.children[1]) {
        cartBox.removeChild(cartBox.children[1]);
    }
    const pCart = document.createElement('p');
    pCart.innerText = "Your cart is empty."

    cartBox.children[0].insertAdjacentElement("afterend", pCart)
}