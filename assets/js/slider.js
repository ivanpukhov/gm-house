let slideIndex = 1;
let slides = document.getElementsByClassName("slider__slide"); // Перемещаем сюда
showSlides(slideIndex);

function moveSlide(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  if (n > slides.length) slideIndex = 1;
  if (n < 1) slideIndex = slides.length;

  Array.from(slides).forEach(slide => slide.style.display = "none");

  let dots = document.getElementsByClassName("dot");
  if (dots.length) {
    Array.from(dots).forEach(dot => dot.classList.remove("dot--active"));
    if (dots[slideIndex - 1]) {
      dots[slideIndex - 1].classList.add("dot--active");
    }
  }

  slides[slideIndex - 1].style.display = "block";
}

// Динамическое создание точек навигации
document.addEventListener("DOMContentLoaded", function() {
  let container = document.querySelector('.slider__dots');
  for (let i = 1; i <= slides.length; i++) {
    let dot = document.createElement("span");
    dot.classList.add("dot");
    dot.onclick = function() { currentSlide(i); };
    container.appendChild(dot);
  }
  currentSlide(slideIndex);

  // Добавление функционала свайпа
  let startTouch = null;

  function handleTouchStart(event) {
    startTouch = event.touches[0].clientX;
  }

  function handleTouchEnd(event) {
    if (!startTouch) return;

    const endTouch = event.changedTouches[0].clientX;
    const touchDifference = startTouch - endTouch;

    if (touchDifference > 50) {
      moveSlide(1);
    } else if (touchDifference < -50) {
      moveSlide(-1);
    }

    startTouch = null;
  }

  Array.from(slides).forEach(slide => {
    slide.addEventListener('touchstart', handleTouchStart, false);
    slide.addEventListener('touchend', handleTouchEnd, false);
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


document.addEventListener('DOMContentLoaded', function () {
    const tapbarItems = document.querySelectorAll('.tapbar__item');
    const headerModal = document.querySelector('.catalog-modal');
    const closeBtn = document.querySelector('.catalog-x');
    const body = document.body;

    tapbarItems.forEach(function(item) {
        item.addEventListener('click', function() {
            // Удаляем класс tapbar__active у всех элементов
            tapbarItems.forEach(function(item) {
                item.classList.remove('tapbar__active');
            });

            // Присваиваем класс tapbar__active элементу, на который кликнули
            item.classList.add('tapbar__active');

            // Показываем модальное окно
            headerModal.style.display = 'block';
            body.style.overflow = 'hidden'; // Блокировка скролла на основной странице
        });
    });

    closeBtn.addEventListener('click', function() {
        // Скрываем модальное окно
        headerModal.style.display = 'none';
        body.style.overflow = 'auto'; // Возобновляем скролл на основной странице

        // Удаляем класс tapbar__active у всех элементов
        tapbarItems.forEach(function(item) {
            item.classList.remove('tapbar__active');
        });
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
  