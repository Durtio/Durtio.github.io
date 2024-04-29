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
const timeSelect = document.getElementById('time');

categorySelect.addEventListener('input', () => {
  const selectedCategory = categorySelect.value;
  const options = serviceSelect.querySelectorAll('option');

  options.forEach((option) => {
    if (option.dataset.category === selectedCategory || option.value === '') {
      option.style.display = 'block';
    } else {
      option.style.display = 'none';
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



// Получаем ссылки на элементы
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

