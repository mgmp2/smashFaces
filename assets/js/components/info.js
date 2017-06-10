'use strict';




const PrintCoder = (station, update)  => {
    const print = $('<section id="coder"></section>');
    const nam = $('<h3>Hola mundo</h3>');
    // const adrss= $('<h6>'+station.address+'</h6>');
    // const district = $('<h6>'+station.district+'</h6>');
    // const icon = $('<i class="fa fa-map" aria-hidden="true"></i>');

    print.append(nam);


    // icon.on('click', (e) => {
    //     e.preventDefault();
         state.selectedCoder = station;
    //     update();
    //     showMap(state.selectedStation.lat, state.selectedStation.long);
    //
    //
    // })
    return print;
}




const reRender = (getValue, result, update) => {
    result.empty();
    if(getValue.length > 0) {

            result.append(PrintCoder(getValue,update));
    } else {
        const output = $('<p> No se encontró el destino a buscar...<p>');
        result.append(output);
    }
};

const Info = (update) => {
    const section = $('<section id="info"></section');
    const container = $('<div class="container"></div>');
    const row = $('<div class="row"></div>');
    const col = $('<div class="col-xs-12"></div>');
    const par = $('<p>Bievenido al juego de Smash Faces, tu misión es poder identificar a todas tus compañeras de clase ingresando para ello su nombre. Tienes 5 oportunidades anes de perder 1 punto y pasar a la siguiente.</p>');
    const colText = $('<div class="col-xs-12 col-sm-2"></div>');
    const parText = ('<p> Elige tu sede: </p>');
    const colChoose = $('<div class="col-xs-12 col-sm-3"></div>');
    const choose = $('<select class="form-control"><option  hidden="hidden">Choose a country</option><option value="peru">Perú</option>  <option value="mexico">México</option> ');
    const result = $('<section id="result"></section>');

    colChoose.append(choose);
    colText.append(parText);
    col.append(par);
    row.append(col);
    row.append(colText);
    row.append(colChoose);
    container.append(row)
    section.append(container);
    section.append(result);

    choose.change( function() {
        // Llamar a otro funcion
        if($(this).val()) {
            const randomNumber = randomNumberCountry(state.coders,  $(this).val());
            reRender(randomNumber, result, update);
        }
    })
    return section;
}
