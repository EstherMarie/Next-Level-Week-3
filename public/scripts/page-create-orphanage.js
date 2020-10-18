// Create map
const map = L.map('mapid').setView([-22.890227, -43.3045401], 12);

// Create and add tileLayer | -22.8087/-43.2248
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	attribution:
		'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

// Create icon
const icon = L.icon({
	iconUrl: '/images/map-marker.svg',
	iconSize: [58, 68],
	iconAnchor: [29, 68],
});

let marker;

// create and add marker
map.on('click', (event) => {
	const lat = event.latlng.lat;
	const lng = event.latlng.lng;

	document.querySelector('[name=lat]').value = lat;
	document.querySelector('[name=lng]').value = lng;

	// remove icon
	marker &&
		map.removeLayer(
			marker
		); /* caso já exista um marker no mapa ele será retirado */

	// add icon layer
	marker = L.marker([lat, lng], { icon }).addTo(map);
});

// adicionar o campo de fotos

function addPhotoField() {
	// pegar o container de fotos #images
	const container = document.querySelector('#images');

	//pegar o container para duplicar .new-image
	const fieldsContainer = document.querySelectorAll('.new-upload');

	// realizar o clone da última imagem adicionada
	const newFieldContainer = fieldsContainer[
		fieldsContainer.length - 1
	].cloneNode(true);

	// verificar se o campo está vazio, se sim, não adicionar ao container de imagens
	const input = newFieldContainer.children[0];

	if (input.value == '') {
		return;
	}
	// limpar o campo antes de adicionar ao container de imagens
	input.value = '';

	// adicionar o clone ao container de #images
	container.appendChild(newFieldContainer);
}

function deleteField(event) {
	const span = event.currentTarget;

	const fieldsContainer = document.querySelectorAll('.new-upload');

	if (fieldsContainer.length <= 1) {
		// limpar o valor do campo
		span.parentNode.children[0].value = '';
		return;
	}

	// deletar o campo
	span.parentNode.remove();
}

// select yes or no

function toggleSelect(event) {
	document
		.querySelectorAll('.button-select button') /* pegar o botão clicado */
		.forEach((button) => button.classList.remove('active')); /* retirar a classe active (dos botões) */

    // colocar a class .active no botão clicado
    const button = event.currentTarget;
    button.classList.add('active');

    // atualizar o input hidden com o valor selecionado
    const input = document.querySelector('[name="open_on_weekends"]');
    
    // verificar se sim ou não
    input.value = button.dataset.value;
}
