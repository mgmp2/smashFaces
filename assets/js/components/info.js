'use strict';




const PrintCoder = (station, update)  => {
    const print     = $('<section id="coder"></section>');
    const container = $('<div class="container"></div>');
    const row       = $('<div class="row"></div>');
    const colImg    = $('<div class="col-xs-12 col-sm-6 col-md-5 text-center"></div>');
    const img       = $('<h3>Hola mundo</h3>');
    const colText   = $('<div class="col-xs-12 col-sm-6 col-md-7 bg-black"></div>');
    const label      = $('<label for="nameCoder">Ingresa su nombre</label>');
    const input     = $('<input type="text"  class="form-control" placeholder="Nombre" id="nameCoder"><br>');
    const btn       = $('<button class="btn btn-orange">COMPROBAR</button>')
    // const adrss= $('<h6>'+station.address+'</h6>');
    // const district = $('<h6>'+station.district+'</h6>');
    // const icon = $('<i class="fa fa-map" aria-hidden="true"></i>');
    colText.append(label);
    colText.append(input);
    colText.append(btn);
    colImg.append(img);
    row.append(colImg);
    row.append(colText)
    container.append(row);
    print.append(container);


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
