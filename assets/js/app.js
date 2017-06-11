'use strict';
const render = (root) => { //Permite volver a pintar
    root.empty();       //Primero vaciar
    const wrapper = $('<div class="wrapper"></div>');
    //Append de componentes
    wrapper.append(Header( _ => {
        render(root);
    }));
    wrapper.append(Info( _ => {
        render(root);
    }));
    // if(state.selectedStation == null ) {
    //     wrapper.append(Search( _ => {
    //         render(root);
    //     }));
    // }
    // else {
    //     wrapper.append(detailsStation( _ => {
    //         render(root);
    // }));
    // }
    root.append(wrapper);
};

// MY OBJECT
const state  = {
    codersPeru: null,
    codersMexico: null,
    selectedPhoto: null,
    selectedCountry: null,
    selectName: null
}



$(_ => {
    getJSON('peru.json', (err, json) => {
        if(err) { return alert(err.message); }
        state.codersPeru = json;
        console.log("Peruana: "+state.codersPeru[3].name);
        console.log("state.codersPeru[3].name ");
        const root = $('.root');
        render(root);
    })
    getJSON('mexico.json', (err, json) => {
        if(err) { return alert(err.message); }
        state.codersMexico = json;
        console.log("Mexicana: "+state.codersMexico[3].name);
        const root = $('.root');
        render(root);
    })
})
