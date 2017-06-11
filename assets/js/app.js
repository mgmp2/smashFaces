'use strict';
const render = (root) => { //Permite volver a pintar
    root.empty();       //Primero vaciar
    const wrapper = $('<div class="wrapper"></div>');
    //Append de componentes
    wrapper.append(Header( _ => {
        render(root);
    }));
    if(state.selectedPhoto == null) {
        wrapper.append(Info( _ => {
            render(root);
        }));
    } else {
        // wrapper.append(PrintCoder( _ => {
        //     render(root);
        // }));
    }
    // if(state.selectedStation == null ) {
    //     wrapper.append(Info( _ => {
    //         render(root);
    //     }));
    // }
    // else {
    //     wrapper.append(Game( _ => {
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
    selectedName: null,
    morePoint: null
}



$(_ => {
    getJSON('peru.json', (err, json) => {
        if(err) { return alert(err.message); }
        state.codersPeru = json;
        const root = $('.root');
        render(root);
    })
    getJSON('mexico.json', (err, json) => {
        if(err) { return alert(err.message); }
        state.codersMexico = json;
        const root = $('.root');
        render(root);
    })
})
