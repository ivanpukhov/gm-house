//base

document.addEventListener('DOMContentLoaded', function() {
var catalogButton = document.querySelector('.header__btn-catalog');
var catalog = document.querySelector('.header__catalog');

catalogButton.addEventListener('click', function() {
	catalogButton.classList.toggle('active');
	catalog.classList.toggle('none');
});
});


document.addEventListener('DOMContentLoaded', function () {
const modalCall = document.querySelector('.modal--call');
const headerCalls = document.querySelectorAll('.header__call');
const modalClose = document.querySelector('.modal--call__close');

headerCalls.forEach(headerCall => {
	headerCall.addEventListener('click', function () {
		modalCall.style.display = 'flex';
		document.body.style.overflow = 'hidden'; // Блокировка скролла на основной странице
	});
});

modalClose.addEventListener('click', function () {
	modalCall.style.display = 'none';
	document.body.style.overflow = ''; // Возврат к стандартному скроллу
});
});
//finish-base

document.addEventListener('DOMContentLoaded', (event) => {
// Initial setup
let slides = document.querySelectorAll('.slider-image');
let thumbnails = document.querySelectorAll('.thumbnail');
let dots = document.querySelectorAll('.dot');
let currentIndex = 0;

// Function to change slide
function setCurrentSlide(index) {
	if (index >= slides.length || index < 0) return;
	slides[currentIndex].style.display = 'none'; // Hide the current slide
	dots[currentIndex].classList.remove('active'); // Remove active state from current dot
	thumbnails[currentIndex].classList.remove('active'); // Remove active state from current thumbnail

	slides[index].style.display = 'block'; // Show the new slide
	dots[index].classList.add('active'); // Add active state to new dot
	thumbnails[index].classList.add('active'); // Add active state to new thumbnail
	currentIndex = index;
}

// Set the first slide as visible
setCurrentSlide(0);

// Add click event listeners to thumbnails and dots
thumbnails.forEach((thumbnail, index) => {
	thumbnail.onclick = () => setCurrentSlide(index);
});

dots.forEach((dot, index) => {
	dot.onclick = () => setCurrentSlide(index);
});
});


// Функция для прокрутки thumbnails
function scrollThumbnails(direction) {
const thumbnailsContainer = document.querySelector('.slider-thumbnails');
const scrollAmount = 200; // Количество пикселей на одну прокрутку

if (direction === 'up') {
	thumbnailsContainer.scrollBy({ top: -scrollAmount, behavior: 'smooth' });
} else {
	thumbnailsContainer.scrollBy({ top: scrollAmount, behavior: 'smooth' });
}
}

function openTab(evt, tabName) {
// Получаем все элементы с class="tabcontent" и скрываем их
var tabcontent, tablinks;
tabcontent = document.getElementsByClassName("tabcontent");
for (var i = 0; i < tabcontent.length; i++) {
	tabcontent[i].style.display = "none";
}

// Получаем все элементы с class="tablinks" и удаляем класс "active"
tablinks = document.getElementsByClassName("tablinks");
for (var i = 0; i < tablinks.length; i++) {
	tablinks[i].className = tablinks[i].className.replace(" active", "");
}

// Показываем текущий таб, и добавляем класс "active" на кнопку, которая открыла таб
document.getElementById(tabName).style.display = "block";
evt.currentTarget.className += " active";
}

// По умолчанию открываем первую вкладку
document.addEventListener("DOMContentLoaded", function() {
document.getElementsByClassName("tablinks")[0].click();
});


document.addEventListener('DOMContentLoaded', () => {
const buyButton = document.querySelector('.product__buy');
const quantityBlock = document.querySelector('.product__quantity');
const quantityInput = quantityBlock.querySelector('input');
const minusButton = quantityBlock.querySelector('.product__minus');
const plusButton = quantityBlock.querySelector('.product__plus');
const carCircle = document.querySelector('.cart__circle'); // Selector for the car__circle block

// Function to update quantity and car__circle
const updateQuantity = (newQuantity) => {
	quantityInput.value = newQuantity;
	if (newQuantity > 1) {
		carCircle.style.display = 'flex';
		carCircle.textContent = newQuantity;
	} else {
		carCircle.style.display = 'none';
	}
};

// Set default quantity to 1
updateQuantity(1);

// Show quantity block on 'Buy' click
buyButton.addEventListener('click', () => {
	quantityBlock.style.display = 'flex';
	buyButton.style.display = 'none'
});

// Increase quantity on plus click
plusButton.addEventListener('click', () => {
	updateQuantity(parseInt(quantityInput.value) + 1);
});

// Decrease quantity on minus click
minusButton.addEventListener('click', () => {
	if (parseInt(quantityInput.value) > 1) {
		updateQuantity(parseInt(quantityInput.value) - 1);
	}
});
});




document.addEventListener('DOMContentLoaded', function () {
const tapbarCatalog = document.querySelector('.tapbar__catalog');
const headerModal = document.querySelector('.catalog-modal');
const closeBtn = document.querySelector('.catalog-x');
const body = document.body;

tapbarCatalog.addEventListener('click', function() {
	headerModal.style.display = 'block';
	document.body.style.overflow = 'hidden'; // Возврат к стандартному скроллу
});

closeBtn.addEventListener('click', function() {
	headerModal.style.display = 'none';
	document.body.style.overflow = ''; // Возврат к стандартному скроллу
});
});




document.addEventListener('DOMContentLoaded', function() {
const humButton = document.querySelector('.header__hum');
const headerMenu = document.querySelector('.header__menu');
const humImage = document.querySelector('.hum');
const humXImage = document.querySelector('.hum-x');

humButton.addEventListener('click', function() {
	const isMenuOpen = headerMenu.style.display === 'block';

	headerMenu.style.display = isMenuOpen ? 'none' : 'block';
	humImage.style.display = isMenuOpen ? 'block' : 'none';
	humXImage.style.display = isMenuOpen ? 'none' : 'block';
	document.body.style.overflow = isMenuOpen ? 'auto' : 'hidden';
});
});


document.addEventListener('DOMContentLoaded', (event) => {
    const scrollAmount = 480; // ширина элемента коллекции

    // Функция для прокрутки блока
    function scrollBlock(selector, amount) {
        const block = document.querySelector(selector);
        if (block) {
            block.scrollLeft += amount;
        }
    }

    // Получаем все стрелки вправо и влево
    const rightArrows = document.querySelectorAll('.right-arrow-selector');
    const leftArrows = document.querySelectorAll('.left-arrow-selector');

    // Назначаем обработчики для стрелок вправо
    rightArrows.forEach(arrow => {
        arrow.addEventListener('click', () => {
            const targetSelector = arrow.getAttribute('data-target');
            scrollBlock(targetSelector, scrollAmount);
        });
    });

    // Назначаем обработчики для стрелок влево
    leftArrows.forEach(arrow => {
        arrow.addEventListener('click', () => {
            const targetSelector = arrow.getAttribute('data-target');
            scrollBlock(targetSelector, -scrollAmount);
        });
    });
});