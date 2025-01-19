// Creating map
const map = L.map('map', {
    zoomSnap: 0.5,
    zoomDelta: 0.25,
});
map.setView([39.06, -94.61], 4);

// Creating tile layer
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// Custom Vault icon
const vaultIcon_Blue = L.icon({
    iconUrl: './images/vault_icon_blue.png',
    iconSize: [35, 35],
});

const vaultIcon_Yellow = L.icon({
    iconUrl: './images/vault_icon_yellow.png',
    iconSize: [35, 35],
});

const vtu_icon = L.icon({
    iconUrl: './images/vtu.png',
    iconSize: [35, 35],
});

const demo_vault_blue = L.icon({
    iconUrl: './images/demo_vault_blue.png',
    iconSize: [70, 35],
})

// Vault Data
const data = {
    vault_111: {
        coords: [42.469778, -71.354581],
        title: "Vault 111",
        type: "Fallout Shelter",
        location: "Sanctuary Hills, MA",
        capacity: "35",
        power: "Vault Star Super-reactor",
        directive: "---redacted---",
    },
    vault_101: {
        coords: [38.9258, -77.1738],
        title: "Vault 101",
        type: "Fallout Shelter",
        location: "Springvale, VA",
        capacity: "300",
        power: "General Atomics nuclear power",
        directive: "---redacted---",
    },
    vault_76: {
        coords: [39.6406, -80.5923],
        title: "Vault 76",
        type: "Fallout Shelter",
        location: "Flatwoods, WV",
        capacity: "500",
        power: "Lightlife Geothermal",
        directive: "Reclamation Day",
    },
    vault_33: {
        coords: [34.008985, -118.493155],
        title: "Vault 33",
        type: "Fallout Shelter",
        location: "Santa Monica, CA",
        capacity: "500",
        power: "General Atomics nuclear power",
        directive: "---redactive---",
    },
    vault_21: {
        coords: [36.135466, -115.151310],
        title: "Vault 21",
        type: "Fallout Shelter",
        location: "Las Vegas, NV",
        capacity: "220",
        power: "General Atomics nuclear power",
        directive: "---redacted---",
    },
    vault_13: {
        coords: [36.57851, -118.29213],
        title: "Vault 13",
        type: "Fallout Shelter",
        location: "Mt. Whitney, CA",
        capacity: "500",
        power: "Geothermal",
        directive: "---redacted---",
    }
}

// Marker Creation Loop
for (let key in data) {

    const vault = data[key];

    const marker = L.marker(vault.coords, {
        title: vault.title,
        icon: vaultIcon_Blue
    })
    .bindPopup(`<h2>${vault.title}</h2>`)
    .addTo(map);

    marker.on('click', function() {
        document.getElementById('vault_title').textContent = vault.title;
        document.getElementById('info_grid').innerHTML = `
            <h3>Type:</h3>
            <h3>${vault.type}</h3>
            <h3>Location:</h3>
            <h3>${vault.location}</h3>
            <h3>Capacity:</h3>
            <h3>${vault.capacity}</h3>
            <h3>Power Suppy:</h3>
            <h3>${vault.power}</h3>
            <h3>Directive:</h3>
            <h3>${vault.directive}</h3>
        `;
    });
}

// VTU Marker Creation
const vtu_marker = L.marker([39.635853, -79.954805], {
    title: "Vault-Tec University",
    icon: vtu_icon,
})
.bindPopup(`<h2>Vault-Tec University</h2>`)
.addTo(map);

vtu_marker.on('click', function() {
    document.getElementById('vault_title').textContent = "Vault-Tec University";
    document.getElementById('info_grid').innerHTML = `
        <h3>Type:</h3>
        <h3>Simulation Vault</h3>
        <h3>Location:</h3>
        <h3>Morgantown, WV</h3>
    `;
});

//Demonstration Vault Marker Creation
const demo_marker = L.marker([34.053086, -118.253810], {
    title: "Vault-Tec Headquarters",
    icon: demo_vault_blue,
})
.bindPopup(`<h2>Vault-Tec Headquarters</h2>`)
.addTo(map);

demo_marker.on('click', function() {
    document.getElementById('vault_title').textContent = "Vault-Tec Headquarters";
    document.getElementById('info_grid').innerHTML = `
        <h3>Type:</h3>
        <h3>Demonstration Vault</h3>
        <h3>Location:</h3>
        <h3>Los Angeles, CA</h3>
    `;
});
