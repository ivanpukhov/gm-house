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


document.addEventListener('DOMContentLoaded', () => {
    let cartItems = document.querySelectorAll('.cart__item');
    const carCircle = document.querySelector('.cart__circle');
    const deleteAllButton = document.querySelector('.delete__all');

    const updateCarCircle = () => {
        let totalQuantity = 0;
        cartItems.forEach(item => {
            const quantityInput = item.querySelector('.product__quantity input');
            totalQuantity += parseInt(quantityInput.value) || 0;
        });

        carCircle.textContent = totalQuantity > 0 ? totalQuantity : '';
        carCircle.style.display = totalQuantity > 0 ? 'flex' : 'none';
    };

    const deleteItem = (item) => {
        item.remove();
        cartItems = document.querySelectorAll('.cart__item'); // Обновить список элементов
        updateCarCircle();
    };

    cartItems.forEach(item => {
        const quantityInput = item.querySelector('.product__quantity input');
        const minusButton = item.querySelector('.product__minus');
        const plusButton = item.querySelector('.product__plus');
        const deleteButton = item.querySelector('.product__delete');

        const updateQuantity = (delta) => {
            let newQuantity = parseInt(quantityInput.value) || 0;
            newQuantity += delta;
            if (newQuantity < 1) newQuantity = 1;
            quantityInput.value = newQuantity;
            updateCarCircle();
        };

        updateQuantity(0);

        plusButton.addEventListener('click', () => updateQuantity(1));
        minusButton.addEventListener('click', () => updateQuantity(-1));
        deleteButton.addEventListener('click', () => deleteItem(item));
    });

    deleteAllButton.addEventListener('click', () => {
        document.querySelector('.cart').innerHTML = ''; // Удаляет
		cartItems = document.querySelectorAll('.cart__item'); // Обновить список элементов
		updateCarCircle();
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
  