'use strict';
const infoPoint = ( update) => {
    const colPoint  = $('<div class="col-xs-12"></div>');
    const nameSede  = $('<span>Sede: '+state.selectedCountry+'</span>');
    const point     = $('<p>Puntos: '+state.morePoint+' puntos</p>');
    const intento     = $('<strong>Intento: '+state.try+' de 5 intentos</strong>');

    colPoint.append(nameSede);
    colPoint.append(point);
    colPoint.append(intento);
    return colPoint;
}
const reRender = (photo, result, update) => {
    console.log(result);
    result.empty();
    if(photo.length > 0) {
            result.append(PrintCoder(photo,update));
    }
};
const reMove = (place, update) => {
    place.empty();
    place.append(infoPoint(update));
}
const Info = (update) => {
    const section   = $('<section></section');
    const container = $('<div class="container"></div>');
    const row       = $('<div class="row" id="info"></div>');
    const col       = $('<div class="col-xs-12"></div>');
    const par       = $('<p>Bievenido al juego de Smash Faces, tu misión es poder identificar a todas tus compañeras de clase ingresando para ello su nombre. Tienes 5 oportunidades antes de perder 1 punto y pasar a la siguiente.</p>');
    const colText   = $('<div class="col-xs-12 col-sm-3"></div>');
    const parText   = ('<strong> Elige tu sede: </strong>');
    const colChoose = $('<div class="col-xs-12 col-sm-3"></div>');
    const choose    = $('<select class="form-control"><option  hidden="hidden">Choose a country</option><option value="Peru">Perú</option>  <option value="Mexico">México</option> ');
    const result    = $('<div class="row"id="result"></div>');

    colChoose.append(choose);
    colText.append(parText);
    col.append(par);
    row.append(col);
    row.append(colText);
    row.append(colChoose);
    container.append(row)
    container.append(result);
    section.append(container);

    choose.change( function() {
        // Llamar a otro funcion
        if($(this).val()) {
            state.selectedCountry = $(this).val();
            state.try = 0 ;
            state.morePoint = 0;
            state.selectedPhoto = randomPhoto(state.selectedCountry);
            reMove( row, update);
            reRender(state.selectedPhoto, result, update);
        }
    })
    return section;
}
