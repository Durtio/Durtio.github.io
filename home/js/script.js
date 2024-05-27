$(document).ready(function(){
	$('.slider').slick({
		arrows:true,
		slidesToShow:3,
		speed:1000,
		responsive:[
			{
				breakpoint: 1024,
				settings: {
					slidesToShow:1
				}
			},
			{
				breakpoint: 320,
				settings: {
					slidesToShow:1
				}
			}
		]
	});
});

const categorySelect = document.getElementById('category');
const serviceSelect = document.getElementById('service');

categorySelect.addEventListener('change', () => {
  const selectedCategory = categorySelect.value;
  const options = serviceSelect.querySelectorAll('option');
  const services = [ 
    { value: 'Мужская стрижка', text: 'Мужская стрижка', category: 'Стрижки и окрашивания' },
    { value: 'Женская стрижка', text: 'Женская стрижка', category: 'Стрижки и окрашивания' },
    { value: 'Тонирование', text: 'Тонирование', category: 'Стрижки и окрашивания' },
    { value: 'Окрашивание в один тон', text: 'Окрашивание в один тон', category: 'Стрижки и окрашивания' },
    { value: 'Выход из черного', text: 'Выход из черного', category: 'Стрижки и окрашивания' },
    { value: 'Вечерняя прическа любой сложности', text: 'Вечерняя прическа любой сложности', category: 'Стрижки и окрашивания' },
    { value: 'Ламинирование волос', text: 'Ламинирование волос', category: 'Уход волос' },
    { value: 'Экспресс уход для волос', text: 'Экспресс уход для волос', category: 'Уход волос' },
    { value: 'Ботокс для волос', text: 'Ботокс для волос', category: 'Уход волос' },
    { value: 'Биксипластия', text: 'Биксипластия', category: 'Уход волос' },
    { value: 'Лёгкие локоны', text: 'Лёгкие локоны', category: 'Укладки' },
    { value: 'Укладка на брашинг', text: 'Укладка на брашинг', category: 'Укладки' },
    { value: 'Укладка на плойку (щипцы)', text: 'Укладка на плойку (щипцы)', category: 'Укладки' },
    { value: '3D локоны', text: '3D локоны', category: 'Укладки' },
    { value: 'Локоны косы', text: 'Локоны косы', category: 'Укладки' },
    { value: 'Одна косичка', text: 'Одна косичка', category: 'Плетение кос' },
    { value: 'Французская коса', text: 'Французская коса', category: 'Плетение кос' },
    { value: 'Афро косы', text: 'Афро косы', category: 'Плетение кос' },
    { value: 'Афро кудри', text: 'Афро кудри', category: 'Плетение кос' },
    { value: 'Маникюр', text: 'Маникюр', category: 'Маникюр и педикюр' },
    { value: 'Педикюр', text: 'Педикюр', category: 'Маникюр и педикюр' },
    { value: 'Наращивание ногтей', text: 'Наращивание ногтей', category: 'Маникюр и педикюр' },
    { value: 'Брови', text: 'Брови', category: 'Перманентный макияж' },
    { value: 'Губы', text: 'Губы', category: 'Перманентный макияж' },
    { value: 'Межресничка', text: 'Межресничка', category: 'Перманентный макияж' },
    { value: 'Удаление некачественного татуажа', text: 'Удаление некачественного татуажа', category: 'Перманентный макияж' },
    { value: 'Дневной макияж', text: 'Дневной макияж', category: 'Визаж' },
    { value: 'Вечерний макияж', text: 'Вечерний макияж', category: 'Визаж' },
    { value: 'Свадебный макияж', text: 'Свадебный макияж', category: 'Визаж' },
    { value: 'Оформление и окрашивание бровей', text: 'Оформление и окрашивание бровей', category: 'Оформление бровей' },
    { value: 'Коррекция бровей', text: 'Коррекция бровей', category: 'Оформление бровей' },
    { value: 'Удаление бровей воском', text: 'Удаление бровей воском', category: 'Оформление бровей' },
    { value: 'Удаление усиков воском', text: 'Удаление усиков воском', category: 'Оформление бровей' },
    { value: 'Классическое наращивание', text: 'Классическое наращивание', category: 'Наращивание ресниц' },
    { value: '2D', text: '2D', category: 'Наращивание ресниц' },
    { value: '3D', text: '3D', category: 'Наращивание ресниц' },
    { value: '4D', text: '4D', category: 'Наращивание ресниц' },
    { value: '5D', text: '5D', category: 'Наращивание ресниц' },
    { value: 'Гидропилинг', text: 'Гидропилинг', category: 'Косметологические услуги' },
    { value: 'Фруктовый', text: 'Фруктовый', category: 'Косметологические услуги' },
    { value: 'Миндальный', text: 'Миндальный', category: 'Косметологические услуги' },
    { value: 'Азелаиновый', text: 'Азелаиновый', category: 'Косметологические услуги' },
    { value: 'Anti - age Holy Land', text: 'Anti - age Holy Land', category: 'Косметологические услуги' },
    { value: 'Джесснера', text: 'Джесснера', category: 'Косметологические услуги' },
    { value: 'Карбоновый', text: 'Карбоновый', category: 'Косметологические услуги' },
    { value: 'Легкий ферментативный + альгинатная маска', text: 'Легкий ферментативный + альгинатная маска', category: 'Косметологические услуги' },
    { value: 'Ручная пластика лица', text: 'Ручная пластика лица', category: 'Косметологические услуги' },
    { value: 'Классический массаж лица', text: 'Классический массаж лица', category: 'Косметологические услуги' },
    { value: 'Вакуумный массаж лица с RF лифтингом', text: 'Вакуумный массаж лица с RF лифтингом', category: 'Косметологические услуги' },
    { value: 'СПА терапия лица 30 минут', text: 'СПА терапия лица 30 минут', category: 'Косметологические услуги' },
    { value: 'СПА терапия лица 45 минут', text: 'СПА терапия лица 45 минут', category: 'Косметологические услуги' },
    { value: 'СПА терапия лица 60 минут', text: 'СПА терапия лица 60 минут', category: 'Косметологические услуги' },
    { value: 'Чистка лица комбинированная', text: 'Чистка лица комбинированная', category: 'Косметологические услуги' },
    { value: 'Вакуумная чистка', text: 'Вакуумная чистка', category: 'Косметологические услуги' },
    { value: 'Нанонидлинг', text: 'Нанонидлинг', category: 'Косметологические услуги' },
    { value: 'Be Glow эффект тонального крема', text: 'Be Glow эффект тонального крема', category: 'Косметологические услуги' },
    { value: 'Фарфоровая куколка', text: 'Фарфоровая куколка', category: 'Косметологические услуги' },
    { value: 'Фонофорез', text: 'Фонофорез', category: 'Косметологические услуги' },
    { value: 'Криотерапия', text: 'Криотерапия', category: 'Косметологические услуги' },
    { value: 'Любой уход по типу кожи', text: 'Любой уход по типу кожи', category: 'Косметологические услуги' },
    { value: 'Фотоомоложение', text: 'Фотоомоложение', category: 'Косметологические услуги' },
    { value: 'Лазерное лечение акне', text: 'Лазерное лечение акне', category: 'Косметологические услуги' },
    { value: 'Укрепление и осветление сосудистой сетки (купероз)', text: 'Укрепление и осветление сосудистой сетки (купероз)', category: 'Косметологические услуги' },
    { value: 'Осветление и удаление пигментации', text: 'Осветление и удаление пигментации', category: 'Косметологические услуги' },
    { value: 'Микротоковая терапия лица', text: 'Микротоковая терапия лица', category: 'Косметологические услуги' },
    { value: 'Микротоковый массаж всего тела', text: 'Микротоковый массаж всего тела', category: 'Косметологические услуги' },
    { value: 'Бразильский силуэт (попка)', text: 'Бразильский силуэт (попка)', category: 'Косметологические услуги' },
    { value: 'Вакуумный массаж тела с RF лифтингом', text: 'Вакуумный массаж тела с RF лифтингом', category: 'Косметологические услуги' },
    { value: 'Миостимуляция', text: 'Миостимуляция', category: 'Косметологические услуги' },
    { value: 'Обертывание Омолаживающее', text: 'Обертывание Омолаживающее', category: 'Косметологические услуги' },
    { value: 'Обертывание Антицеллюлитное', text: 'Обертывание Антицеллюлитное', category: 'Косметологические услуги' },
    { value: 'Обертывание Детокс', text: 'Обертывание Детокс', category: 'Косметологические услуги' },
    { value: 'Обертывание Лимфодренажное', text: 'Обертывание Лимфодренажное', category: 'Косметологические услуги' },
    { value: 'Вакуумный массаж тела + обертывание', text: 'Вакуумный массаж тела + обертывание', category: 'Косметологические услуги' },
    { value: 'Миостимуляция + обертывание', text: 'Миостимуляция + обертывание', category: 'Косметологические услуги' },
    { value: 'Глубокое бикини + ягодицы', text: 'Глубокое бикини + ягодицы', category: 'Лазерная эпиляция' },
    { value: 'Подмышки', text: 'Подмышки', category: 'Лазерная эпиляция' },
    { value: 'Ноги полностью', text: 'Ноги полностью', category: 'Лазерная эпиляция' },
    { value: 'Ноги до колен', text: 'Ноги до колен', category: 'Лазерная эпиляция' },
    { value: 'Руки до локтей', text: 'Руки до локтей', category: 'Лазерная эпиляция' },
    { value: 'Руки полностью', text: 'Руки полностью', category: 'Лазерная эпиляция' },
    { value: 'Усики', text: 'Усики', category: 'Лазерная эпиляция' },
    { value: 'Баки', text: 'Баки', category: 'Лазерная эпиляция' },
    { value: 'Подбородок', text: 'Подбородок', category: 'Лазерная эпиляция' },
    { value: 'Сэт', text: 'Сэт', category: 'Лазерная эпиляция' }
  ];

  serviceSelect.innerHTML = '';

  function populateSelect(options) {
    options.forEach(option => {
      const opt = document.createElement('option');
      opt.value = option.value;
      opt.textContent = option.text;
      opt.setAttribute('data-category', option.category);
      option.parentNode.removeChild(option);
    });
  }
  populateSelect(services);

  options.forEach((option) => {
    if (option.dataset.category === selectedCategory || option.value === '') {
      option.style.display = 'block';
    } else {
      option.remove();
    }
  });
  serviceSelect.value = '';
});

async function submitForm(event) {
  event.preventDefault(); // отключаем перезагрузку/перенаправление страницы
  try {
  	// Формируем запрос
    const response = await fetch(event.target.action, {
    	method: 'POST',
    	body: new FormData(event.target)
    });
    // проверяем, что ответ есть
    if (!response.ok) throw (`Ошибка при обращении к серверу: ${response.status}`);
    // проверяем, что ответ действительно JSON
    const contentType = response.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
      throw ('Ошибка обработки. Ответ не JSON');
    }
    // обрабатываем запрос
    const json = await response.json();
    if (json.result === "success") {
    	// в случае успеха
    	alert(json.info);
    } else { 
    	// в случае ошибки
    	console.log(json);
    	throw (json.info);
    }
  } catch (error) { // обработка ошибки
    alert(error);
  }
}



// Ссылки на элементы
const openModalBtn = document.getElementById('openModalBtn');
const openModalBtn2 = document.getElementById('openModalBtn2');
const modal = document.getElementById('modale');
const closeBtn = modal.querySelector('.close');

// Функция для открытия модального окна
function openModal() {
  modal.style.display = 'block';
  modal.classList.add('animation');
}

// Функция для закрытия модального окна
function closeModal() {
  modal.style.display = 'none';
  modal.classList.remove('animation');
}

// События для открытия и закрытия модального окна
openModalBtn.addEventListener('click', openModal);
openModalBtn2.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    closeModal();
  }
});

