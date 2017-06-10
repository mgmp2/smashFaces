'use strict';

const Info = (update) => {
    const section = $('<section id="info"></section');
    const container = $('<div class="container"></div>');
    const row = $('<div class="row"></div>');
    const col = $('<div class="col-xs-12"></div>');
    const par = $('<p>Bievenido al juego de Smash Faces, tu misión es poder identificar a todas tus compañeras de clase ingresando para ello su nombre. Tienes 5 oportunidades anes de perder 1 punto y pasar a la siguiente.</p>');
    const colText = $('<div class="col-xs-12 col-sm-2"></div>');
    const parText = ('<p> Elige tu sede: </p>');
    const colChoose = $('<div class="col-xs-12 col-sm-3"></div>');
    const choose = $('<select class="form-control"><option value="peru">Perú</option>  <option value="chile">Chile</option> ');

    colChoose.append(choose);
    colText.append(parText);
    col.append(par);
    row.append(col);
    row.append(colText);
    row.append(colChoose);
    container.append(row)
    section.append(container);

    choose.change( function() {
        const valor = $(this).val();
        console.log(valor);
        // Llamar a otro valor 
    })
    return section;
}
