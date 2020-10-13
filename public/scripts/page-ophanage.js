const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}

// create map
const map = L.map('mapid', options).setView([-27.2191478,-49.6498619], 15)


// create and add titleLayer
L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)

// create icon
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58,68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})

//cretae and add market
L.marker([-27.2191478,-49.6498619], { icon })
.addTo(map)

// imge gallery

function selectImage(event) {
    const button = event.currentTarget

    // remover todas as classses .active
    const buttons = document.querySelectorAll(".images button")
    buttons.forEach(removeActiveClass)

    function removeActiveClass (button) {
        button.classList.remove("active")
    }

    // selecionar imagem clicada
    const image = button.children[0]
    const imageContainer = document.querySelector(".orphanage-details > img")
    
    // atualizar o container de imagem
    imageContainer.src = image.src
    
    // adicionar classe .active para o botao clicado
    button.classList.add("active")
}
