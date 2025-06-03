// Creating map
const map = L.map('map', {
    zoomSnap: 0.5,
    zoomDelta: 0.25,
});
map.setView([39.10, -96.75], 4.5);

// Creating tile layer
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// Custom Vault icon
const vaultIcon_Blue = L.icon({
    iconUrl: './images/markers/vault_icon_blue.png',
    iconSize: [35, 35],
});

const vaultIcon_Yellow = L.icon({
    iconUrl: './images/markers/vault_icon_yellow.png',
    iconSize: [35, 35],
});

const vtu_icon = L.icon({
    iconUrl: './images/markers/vtu.png',
    iconSize: [35, 35],
});

const demo_vault_blue = L.icon({
    iconUrl: './images/markers/demo_vault.png',
    iconSize: [70, 35],
});

const bottles_blue = L.icon({
    iconUrl: './images/markers/bottles_red.png',
    iconSize: [35, 35],
});

const museumIcon = L.icon({
    iconUrl: './images/markers/museum_Yellow.png',
    iconSize: [35, 35],
});

// Vault Data
const data = {
    vault_3: {
        coords: [36.08325, -115.20292],
        title: "Vault 3",
        type: "Fallout Shelter",
        location: "Las Vegas, NV",
    },
    vault_4: {
        coords: [33.9040, -118.1250],
        title: "Vault 4",
        type: "Fallout Shelter",
        location: "Los Angeles, CA",
    },
    vault_8: {
        coords: [40.97251, -117.72237],
        title: "Vault 8",
        type: "Fallout Shelter",
        location: "---classified---",
    },
    vault_11: {
        coords: [35.98676, -114.94291],
        title: "Vault 11",
        type: "Fallout Shelter",
        location: "---classified---",
    },
    vault_12: {
        coords: [35.36571, -119.03961],
        title: "Vault 12",
        type: "Fallout Shelter",
        location: "Bakersfield, CA",
    },
    vault_13: {
        coords: [36.57851, -118.29213],
        title: "Vault 13",
        type: "Fallout Shelter",
        location: "Mt. Whitney, CA",
    },
    vault_15: {
        coords: [36.60439868458732, -116.97377904059536],
        title: "Vault 15",
        type: "Fallout Shelter",
        location: "---classified---",
    },
    vault_17: {
        coords: [34.18539, -118.30112],
        title: "Vault 17",
        type: "Fallout Shelter",
        location: "---classified---",
    },
    vault_19: {
        coords: [36.0313, -115.2833],
        title: "Vault 19",
        type: "Fallout Shelter",
        location: "---classified---",
    },
    vault_21: {
        coords: [36.135466, -115.151310],
        title: "Vault 21",
        type: "Fallout Shelter",
        location: "Las Vegas, NV",
    },
    vault_22: {
        coords: [36.2288, -115.2946],
        title: "Vault 22",
        type: "Fallout Shelter",
        location: "---classified---",
    },
    vault_29: {
        coords: [47.61620, -122.33560],
        title: "Vault 29",
        type: "Fallout Shelter",
        location: "---classified---",
    },
    vault_31: {
        coords: [34.00998, -118.46343],
        title: "Vault 31",
        type: "Fallout Shelter",
        location: "Santa Monica, CA",
    },
    Vault_32: {
        coords: [33.98429, -118.46626],
        title: "Vault 32",
        type: "Fallout Shelter",
        location: "Santa Monica, CA",
    },
    vault_33: {
        coords: [34.008985, -118.493155],
        title: "Vault 33",
        type: "Fallout Shelter",
        location: "Santa Monica, CA",
    },
    vault_34: {
        coords: [36.14009, -115.06831],
        title: "Vault 34",
        type: "Fallout Shelter",
        location: "---classified---",
    },
    vault_51: {
        coords: [39.4081, -80.1851],
        title: "Vault 51",
        type: "Fallout Shelter",
        location: "---classified---",
    },
    vault_63: {
        coords: [38.4880, -78.4479],
        title: "Vault 63",
        type: "Weather Research Facility",
        location: "Shenandoah National Park",
    },
    vault_75: {
        coords: [42.4270005, -71.0703353],
        title: "Vault 75",
        type: "Fallout Shelter",
        location: "Malden, MA",
    },
    vault_76: {
        coords: [39.6406, -80.5923],
        title: "Vault 76",
        type: "Fallout Shelter",
        location: "Flatwoods, WV",
    },
    vault_77: {
        coords: [35.8891, -78.6662],
        title: "Vault 77",
        type: "Fallout Shelter",
        location: "---classified---",
    },
    vault_79: {
        coords: [39.421, -78.580],
        title: "Vault 79",
        type: "---classified---",
        location: "---classified---",
    },
    vault_81: {
        coords: [42.337168394017986, -71.1502482413031],
        title: "Vault 81",
        type: "Fallout Shelter",
        location: "---classified---",
    },
    vault_87: {
        coords: [38.9503, -77.2435],
        title: "Vault 87",
        type: "Fallout Shelter",
        location: "---classified---",
    },
    vault_88: {
        coords: [42.2555, -71.0857],
        title: "Vault 88",
        type: "Fallout Shelter",
        location: "Quincy, MA"
    },
    vault_92: {
        coords: [39.1511, -77.0718],
        title: "Vault 92",
        type: "Fallout Shelter",
        location: "Olney, MA",
    },
    vault_94: {
        coords: [38.38298, -82.54990],
        title: "Vault 94",
        type: "Fallout Shelter",
        location: "---classified---",
    },
    vault_95: {
        coords: [42.2140, -71.3195],
        title: "Vault 95",
        type: "Fallout Shelter",
        location: "Natick, MA",
    },
    vault_96: {
        coords: [38.6389, -79.3350],
        title: "Vault 96",
        type: "Fallout Shelter",
        location: "Spruce Knob, WV",
    },
    vault_101: {
        coords: [38.9258, -77.1738],
        title: "Vault 101",
        type: "Fallout Shelter",
        location: "Springvale, VA",
    },
    vault_106: {
        coords: [38.8969, -77.1082],
        title: "Vault 106",
        type: "Fallout Shelter",
        location: "---classified---",
    },
    vault_108: {
        coords: [38.9920, -77.0210],
        title: "Vault 108",
        type: "Fallout Shelter",
        location: "---classified---",
    },
    vault_111: {
        coords: [42.469778, -71.354581],
        title: "Vault 111",
        type: "Fallout Shelter",
        location: "Sanctuary Hills, MA",
    },
    vault_112: {
        coords: [38.86223, -77.26410],
        title: "Vault 112",
        type: "Fallout Shelter",
        location: "---classified---",
    },
    vault_114: {
        coords: [42.34342, -71.07965],
        title: "Vault 114",
        type: "Fallout Shelter",
        location: "---classified---",
    },
    vault_118: {
        coords: [44.3867, -68.3054],
        title: "Vault 118",
        type: "Fallout Shelter",
        location: "Mount Desert, ME",
    },
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
        `;
    });

    marker.on('mouseover', function() {
        marker.setIcon(vaultIcon_Yellow);
    });
    marker.on('mouseout', function() {
        marker.setIcon(vaultIcon_Blue);
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
        <h3>College Simulation Vault</h3>
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
        <h3>Public demonstration Vault</h3>
        <h3>Location:</h3>
        <h3>Los Angeles, CA</h3>
    `;
});

// Across The Stars Marker Creation
const nuka_world_marker = L.marker([42.04031, -72.61351], {
    title: "Nuka World: Across the Stars",
    icon: bottles_blue,
})
.bindPopup(`<h2>Nuka World: Across the Stars</h2>`)
.addTo(map);

nuka_world_marker.on('click', function() {
    document.getElementById('vault_title').textContent = "Nuka World: Across the Stars";
    document.getElementById('info_grid').innerHTML = `
        <h3>Type:</h3>
        <h3>Sponsored amusement park attraction</h3>
        <h3>Location:</h3>
        <h3>Nuka World</h3>
    `;
});

// Vault-Tec's Vault of Tomorrow Marker Creation
const vault_of_tommorow = L.marker([38.888077, -77.019836], {
    title: "Vault-Tec's Vault of Tomorrow",
    icon: museumIcon,
})
.bindPopup(`<h2>Vault-Tec's Vault of Tomorrow</h2>`)
.addTo(map);

vault_of_tommorow.on('click', function() {
    document.getElementById('vault_title').textContent = "Vault-Tec's Vault of Tomorrow";
    document.getElementById('info_grid').innerHTML = `
        <h3>Type:</h3>
        <h3>Sponsored museum exhibit</h3>
        <h3>Location:</h3>
        <h3>Museum of Technology</h3>
    `;
});
