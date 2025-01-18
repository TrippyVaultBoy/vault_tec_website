// Creating map
const map = L.map('map');
map.setView([39.06, -94.61], 4);

// Creating tile layer
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// Custom Vault icon
const customIcon = L.icon({
    iconUrl: './images/vault_icon_blue.png',
    iconSize: [35, 35],
})

// Vault Data
const data = {
    vault_111: {
        coords: [42.469778, -71.354581],
        title: "Vault 111",
    },
    vault_101: {
        coords: [38.9258, -77.1738],
        title: "Vault 101"
    },
    vault_76: {
        coords: [39.6406, -80.5923],
        title: "Vault 76"
    },
    vault_33: {
        coords: [34.008985, -118.493155],
        title: "Vault 33"
    },
    vault_21: {
        coords: [36.135466, -115.151310],
        title: "Vault 21"
    },
    vault_13: {
        coords: [36.57851, -118.29213],
        title: "Vault 13"
    }
}

// Marker Creation Loop
for (let key in data) {

    const vault = data[key];

    L.marker(vault.coords, {
    title: vault.title,
    icon: customIcon
    })
    .bindPopup(`<h2>${vault.title}</h2>`)
    .addTo(map)
}