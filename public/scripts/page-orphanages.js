// Create map
const map = L.map('mapid').setView([-22.890227,-43.3045401], 12);

// Create and add tileLayer | -22.8087/-43.2248
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

// Create icon
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
});

// create popup overlay 
const popup = L.popup({
    closeButton: false,
    className: 'map-popup',
    minWidth: 240,
    minHeight: 240
}).setContent(
    'Lar da Felicidade <a href="orphanage.html?id=1" class="choose-orphanage"> <img src="./public/images/arrow-white.svg"> </a>'
);

// Create icon
L.marker([-22.890227,-43.3045401], { icon: icon })
    .addTo(map)
    .bindPopup(popup)
