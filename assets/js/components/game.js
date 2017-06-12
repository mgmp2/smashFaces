'use strict';
    const PrintCoder = (update)  => {
    const print     =  $('<div class="container"></div>');
    const colImg    = $('<div class="col-xs-12 col-sm-6 col-md-5 text-center"></div>');
    const img       = $('<img src="'+state.selectedPhoto+'" class="img-responsive">');
    const colText   = $('<div class="col-xs-12 col-sm-6 col-md-7 bg-black"></div>');
    const label      = $('<label for="nameCoder">Ingresa su nombre</label>');
    const input     = $('<input type="text" class="form-control" placeholder="Nombre" id="nameCoder"><br>');
    const btn       = $('<button class="btn btn-orange">COMPROBAR</button>')

    colText.append(label);
    colText.append(input);
    colText.append(btn);
    colImg.append(img);
    print.append(colImg);
    print.append(colText)

    console.log(state.selectedName);
    btn.on('click', (e) => {
        e.preventDefault();
        checkName(state.selectedName, input);

    })
    return print;
}
