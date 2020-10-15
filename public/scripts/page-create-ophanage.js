// create map
const map = L.map('mapid').setView([-27.2191478,-49.6498619], 15)


// create and add titleLayer
L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)

// create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58,68],
    iconAnchor: [29, 68]
})

let marker;

// create and add marker

map.on('click', (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;

    // remove icon 
    marker && map.removeLayer(marker)

    // add icon layer
    marker = L.marker([lat, lng], { icon } )
    .addTo(map)
})

// adicionar o campo fotos


function addPhotoField () {
    // pegar o container de fotos #images
    const container = document.querySelector("#images")
    // peagar o container para dublipcar .new-upload
    const fieldsContainer = document.querySelectorAll(".new-upload")
    // realizar o clone da ultima imagem adicionada
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1]
    .cloneNode(true)
    // verificar se o campo esta vazio, se sim nao adiconar ao conteiner de imagens
    const input = newFieldContainer.children[0]

    if (input.value == ""){
        return
    }
    // limpar o campo antes de adicionar ao cantainer de images
    input.value = ""
    // adicionar o colone ao container de fotos
    container.appendChild(newFieldContainer)
}

function deleteField(event){
    const span = event.currentTarget

    const fieldsContainer = document.querySelectorAll(".new-upload")

    if (fieldsContainer.length < 2) {

        span.parentNode.children[0].value = ""
        return
        
    }

    span.parentNode.remove()
}

// select yes or no

function toggleSelect(event) {
    // pegaro botao clicado
    

    // retirar a classe active dos botos
    document.querySelectorAll(".button-select button")
    .forEach( button => button.classList.remove("active"))
    // colocar a classe active
    const button = event.currentTarget
    button.classList.add("active")

    // atualaizar o meu input hidden com o valor selecionado
    const input = document.querySelector('[name="opening_on_weekends"]')
    
    input.value = button.dataset.value
}





