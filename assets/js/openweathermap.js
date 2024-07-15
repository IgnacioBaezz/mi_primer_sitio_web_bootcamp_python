$('#buscar').on('click', function () {
    let ciudad_buscada = $('#ciudad').val().trim();


    if (ciudad_buscada.length > 0) {
        console.log(ciudad_buscada);

        let units = 'metric';
        let lang = 'es';
        let apiid = '18a53acc5a242be26f015cbb9a4591c0';
        let urlOpenWeatherMap = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad_buscada}&lang=${lang}&units=${units}&appid=${apiid}`;

        $.getJSON(urlOpenWeatherMap, function (dataClima) {
            console.log(dataClima);
            let paisCode = dataClima.sys.country;
            let urlRestCountries = `https://restcountries.com/v3.1/alpha/${paisCode}`;

            $.getJSON(urlRestCountries, function (dataPais) {

                let html =
                    `
                    <h4 class="card-title">${dataClima.name}(${dataPais[0].translations.spa.common}): ${dataClima.weather[0].description}</h4>
                    <h4 class="card-title">Temperatura: ${dataClima.main.temp} °C</h4>
                    <h4 class="card-title">Sensacion térmica: ${dataClima.main.feels_like} </h4>
                    <h4 class="card-title">Humedad: ${dataClima.main.humidity} %</h4>
                    <h4 class="card-title">Viento: ${Math.round(dataClima.wind.speed)}km/hr </h4>
                    <h4 class="card-title">Humedad: ${dataClima.main.humidity}</h4>
                    <h4 class="card-title">Coordenadas. ${dataClima.coord.lat}, ${dataClima.coord.lon}</h4>
                    `;
                    $('#info-clima').html(html);

                let img =
                `
                <img src="https://openweathermap.org/img/wn/${dataClima.weather[0].icon}@4x.png" alt="imagen-clima">
                `;
                $('#img-clima').html(img)

            });
        }).fail(function(){
            Swal.fire({
                icon: "error",
                title: "Oops...!",
                text: "La ciudad no fue encontrada, debe estar con Atlantis",
                confirmButtonText: "Ok",
              });
        });
    }
    else {
        Swal.fire("Debes ingresar una ciudad");
    }

});