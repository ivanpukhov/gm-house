// Для блока 'sortby'
document.querySelectorAll('.sortby .sortby__item').forEach(item => {
    item.addEventListener('click', function() {
        document.querySelectorAll('.sortby .sortby__item').forEach(el => {
            el.classList.remove('active');
        });
        this.classList.add('active');
    });
});

// Для блока 'quantity'
document.querySelectorAll('.quantity .sortby__item').forEach(item => {
    item.addEventListener('click', function() {
        document.querySelectorAll('.quantity .sortby__item').forEach(el => {
            el.classList.remove('active');
        });
        this.classList.add('active');
    });
});


document.querySelectorAll('.filters__item').forEach(item => {
	item.addEventListener('click', function() {
	  let targetId = this.getAttribute('data-target');
	  let targetElement = document.getElementById(targetId);
  
	  // Проверяем, активен ли уже этот элемент
	  if (this.classList.contains('active')) {
		// Если активен, то скрываем блок и убираем класс active
		targetElement.style.display = 'none';
		this.classList.remove('active');
	  } else {
		// Если не активен, то показываем блок и добавляем класс active
		document.querySelectorAll('.filter-options').forEach(el => el.style.display = 'none'); // Скрываем все блоки
		document.querySelectorAll('.filters__item').forEach(el => el.classList.remove('active')); // Убираем класс active у всех элементов
  
		targetElement.style.display = 'block';
		this.classList.add('active');
	  }
	});
  });
  
  
  document.querySelectorAll('.apply-button').forEach(button => {
	button.addEventListener('click', function() {
	  let optionsBlock = this.closest('.filter-options');
	  let targetSpan = document.querySelector(`.filters__item[data-target="${optionsBlock.id}"] span`);
	  
	  if (optionsBlock.id === 'price-filter') {
		// Обработка фильтра цены
		let priceMin = inputMin.value;
		let priceMax = inputMax.value;
		targetSpan.textContent = `От ${priceMin} до ${priceMax}`;
	  } else {
		// Обработка других фильтров
		let checkboxes = optionsBlock.querySelectorAll('input[type="checkbox"]:checked');
		let selectedValues = Array.from(checkboxes).map(cb => cb.value);
		let displayText = selectedValues.join(', ');
		targetSpan.textContent = selectedValues.length > 0 ? `(${displayText})` : 'Все';
	  }
  
	  optionsBlock.style.display = 'none'; // Скрыть блок опций
	});
  });
  
  
  document.querySelectorAll('.reset-button').forEach(button => {
	button.addEventListener('click', function() {
	  let optionsBlock = this.closest('.filter-options');
	  let checkboxes = optionsBlock.querySelectorAll('input[type="checkbox"]');
	  checkboxes.forEach(cb => cb.checked = false);
  
	  if (optionsBlock.id === 'price-filter') {
		// Сброс фильтра цены
		priceSlider.noUiSlider.reset();
		inputMin.value = priceSlider.noUiSlider.options.range.min;
		inputMax.value = priceSlider.noUiSlider.options.range.max;
	  }
  
	  let targetSpan = document.querySelector(`.filters__item[data-target="${optionsBlock.id}"] span`);
	  targetSpan.textContent = optionsBlock.id === 'price-filter' ? `(Любая)` : '(Любая)';
	  optionsBlock.style.display = 'none'; // Скрыть блок опций
	});
  });
  

  let priceSlider = document.getElementById('price-slider');
  let inputMin = document.getElementById('input-min');
  let inputMax = document.getElementById('input-max');
  
  noUiSlider.create(priceSlider, {
	  start: [50000, 35000000], // Начальные значения
	  connect: true, // Показать диапазон между двумя точками
	  range: {
		  'min': 50000,
		  'max': 35000000
	  }
  });
  
  // Обновить слайдер при изменении значений инпутов
  inputMin.addEventListener('change', function() {
	  priceSlider.noUiSlider.set([this.value, null]);
  });
  
  inputMax.addEventListener('change', function() {
	  priceSlider.noUiSlider.set([null, this.value]);
  });
  
  // Обновить инпуты при изменении слайдера
  priceSlider.noUiSlider.on('update', function (values, handle) {
	  inputMin.value = parseInt(values[0]);
	  inputMax.value = parseInt(values[1]);
  });
  
  // Применить значения при клике на кнопку
  document.querySelector('.apply-button').addEventListener('click', function() {
	document.querySelector('.filters__item[data-target="price-filter"] span').textContent = `От ${inputMin.value} до ${inputMax.value}`;
  });
  


// Получаем элементы
let modal = document.getElementById("filters-modal");
let btn = document.getElementById("show-filters-btn");

// Функция для открытия модального окна
btn.onclick = function() {
    modal.style.display = "block";
	document.body.style.overflow = 'hidden'; // Предотвратить прокрутку основной страницы

}

// Закрыть модальное окно при клике вне его
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
		  document.body.style.overflow = ''; // Вернуть прокрутку

    }
}

let closeButtons = document.querySelectorAll(".modal-close");

// Функция для закрытия модального окна
function closeModal() {
    modal.style.display = "none";
	document.body.style.overflow = ''; // Вернуть прокрутку

}

// Присваиваем функцию закрытия каждой кнопке закрытия
closeButtons.forEach(function(btn){
    btn.onclick = closeModal;
});

// Закрыть модальное окно при клике вне его
window.onclick = function(event) {
    if (event.target == modal) {
        closeModal();
    }
}

let backButton = document.querySelectorAll(".modal-back");

// Получаем элементы, которые нужно скрыть
let filterOptions = document.querySelectorAll(".filter-options");

// Функция для скрытия filter-options
function hideFilterOptions() {
    filterOptions.forEach(function(element) {
        element.style.display = 'none';
    });
}

// Присваиваем функцию скрытия каждой кнопке "назад"
backButton.forEach(function(btn){
    btn.addEventListener('click', hideFilterOptions);
});




let priceSlider2 = document.getElementById('price-slider-2');
let inputMin2 = document.getElementById('input-min-2');
let inputMax2 = document.getElementById('input-max-2');

noUiSlider.create(priceSlider2, {
    start: [50000, 35000000], // Начальные значения для второго ползунка
    connect: true, // Показать диапазон между двумя точками
    range: {
        'min': 50000,
        'max': 35000000
    }
});

// Обновить второй слайдер при изменении значений инпутов
inputMin2.addEventListener('change', function() {
    priceSlider2.noUiSlider.set([this.value, null]);
});

inputMax2.addEventListener('change', function() {
    priceSlider2.noUiSlider.set([null, this.value]);
});

// Обновить инпуты при изменении второго слайдера
priceSlider2.noUiSlider.on('update', function (values, handle) {
    inputMin2.value = parseInt(values[0]);
    inputMax2.value = parseInt(values[1]);
});

document.addEventListener('DOMContentLoaded', function() {
   
// Функция для подсчета и отображения количества отмеченных фильтров
function updateFilterCount() {
    // Найти все чекбоксы в фильтрах
    let checkboxes = document.querySelectorAll('.filter-options input[type="checkbox"]');

    // Подсчет количества отмеченных чекбоксов
    let checkedCount = Array.from(checkboxes).filter(checkbox => checkbox.checked).length;

    // Найти все элементы для отображения количества фильтров
    let filterTriggers = document.querySelectorAll('.filter__trigger');
    // Найти элементы modal__circle
    let modalCircles = document.querySelectorAll('.modal__circle');
	console.log(modalCircles)
    // Обновить текст в каждом элементе и видимость modal__circle
    filterTriggers.forEach(trigger => {
        trigger.textContent = checkedCount > 0 ? `${checkedCount}` : '';
    });

    // Показать или скрыть modal__circle в зависимости от checkedCount
    modalCircles.forEach(circle => {
        circle.style.display = checkedCount > 0 ? 'flex' : 'none';
    });
}

// Добавить обработчики событий на чекбоксы фильтров
document.querySelectorAll('.filter-options input[type="checkbox"]').forEach(checkbox => {
    checkbox.addEventListener('change', updateFilterCount);
});

// Добавить обработчики событий на кнопки сброса фильтров
document.querySelectorAll('.reset-button').forEach(button => {
    button.addEventListener('click', updateFilterCount);
});

});




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







document.addEventListener('DOMContentLoaded', function () {
    const tapbarCatalog = document.querySelector('.tapbar__catalog');
    const headerModal = document.querySelector('.catalog-modal');
    const closeBtn = document.querySelector('.catalog-x');
    const body = document.body;

    tapbarCatalog.addEventListener('click', function() {
        headerModal.style.display = 'block';
        body.classList.add('no-scroll');
    });

    closeBtn.addEventListener('click', function() {
        headerModal.style.display = 'none';
        body.classList.remove('no-scroll');
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
  
let title = document.querySelector('.sortby-mobile__title');
let items = document.querySelectorAll('.sortby-mobile__item');
let selectedSort = document.getElementById('selected-sort');

title.addEventListener('click', function() {
    document.querySelector('.sortby-mobile__block').style.display = 'block';
});

items.forEach(function(item) {
    item.addEventListener('click', function() {
        document.querySelector('.sortby-mobile__item.active')?.classList.remove('active');
        this.classList.add('active');
        selectedSort.textContent = this.textContent;
        document.querySelector('.sortby-mobile__block').style.display = 'none';
    });
});

