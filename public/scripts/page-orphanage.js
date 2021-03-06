const options = {
	dragging: false,
	touchZoom: false,
	doubleClickZoom: false,
	scrollWheelZoom: false,
	zoomControl: false,
};

// get values from html

const lat = document.querySelector("span[data-lat]").dataset.lat;
const lng = document.querySelector("span[data-lng]").dataset.lng;

// Create map
const map = L.map('mapid', options).setView([lat, lng], 12);

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
	popupAnchor: [170, 2],
});

// Create icon
L.marker([lat, lng], { icon: icon }).addTo(map);

// image gallery

function selectImage(event) {
    const button = event.currentTarget

    // remover todas as classes .active
    const buttons = document.querySelectorAll(".images button")
    buttons.forEach((button)=> {
        // function removeActiveClass
        button.classList.remove("active")
    })

    // selecionar a imagem clicada
    const image = button.children[0] /* seleciona a tag img dentro da tag button */
    const imageContainer = document.querySelector(".orphanage-details > img")

    // atualizar o container de imagem (imagem em destaque)
    imageContainer.src = image.src

    // adicionar a classe .active para este botao
    button.classList.add('active')
}
