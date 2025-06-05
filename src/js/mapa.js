let map = L.map('mapid').setView([-23.5505, -46.6333], 12);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
}).addTo(map);

let marker = L.marker([-23.5505, -46.6333]).addTo(map)
marker.bindPopup("CENTRO").openPopup

//CONTRUINDO A APLICAÇÃO DO MAP DA API


// EVENTO DE CLICK

map.on('click', mapa);

function mapa(e) {
    let lat = e.latlng.lat.toFixed(6);
    let long = e.latlng.lng.toFixed(6);


    // Adiciona o marcador no mapa
    L.marker(e.latlng).addTo(map)
      .bindPopup(`Latitude: ${lat}<br>Longitude: ${long}`).openPopup()

    // Faz a requisição da previsão do tempo para as coordenadas clicadas
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&hourly=precipitation`;

    fetch(url)
  .then(response => response.json())
  .then(data => {
    let vaiChover = false;
    let resultado = "";
    let previsao = document.getElementById("precipitacao");
    let latlong = document.getElementById("latlong");

    // Supondo que 'lat' e 'long' já estejam definidos
    latlong.innerHTML = `Latitude: ${lat} <br> Longitude: ${long}`;

    for (let i = 0; i < 13; i++) {
      const hora = "Daqui_" + [i] + " _horas";
      const chuva = data.hourly.precipitation[i];


      if (chuva > 0) {
        vaiChover = true;
        resultado += `${hora}: ${chuva}mm<br>`;
      }
    }

    if (vaiChover) {
      previsao.innerHTML = `Vai chover nas próximas horas:<br>${resultado}`;
    } else {
      previsao.innerHTML = `Não há previsão de chuva nas próximas 12 horas.`;
    }
  });
}

  // Armazena os pontos clicados
let pontos = [];
let poligono = null;

map.on('click', function(e) {
  const latlng = e.latlng;
  const lat = latlng.lat.toFixed(6);
  const lng = latlng.lng.toFixed(6);

  // Adiciona o marcador
  L.marker(latlng).addTo(map)
    .bindPopup(`Latitude: ${lat}<br>Longitude: ${lng}`)
    .openPopup();

  pontos.push(latlng);


  if (poligono) {
    map.removeLayer(poligono);
  }

  // Se tiver pelo menos 3 pontos, desenha um polígono preenchido
  if (pontos.length > 2) {
    poligono = L.polygon(pontos, {
      color: 'blue',          
      fillColor: 'rgba(255, 30, 0, 0.3)', 
      fillOpacity: 1
    }).addTo(map);
  } else {
    // Enquanto tiver menos de 3 pontos, só mostra como linha
    poligono = L.polyline(pontos, { color: 'blue' }).addTo(map);
  }
});
