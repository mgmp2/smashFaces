'use strict';
const render = (root) => { //Permite volver a pintar
    root.empty();       //Primero vaciar
    const wrapper = $('<div class="wrapper"></div>');
    //Append de componentes
    wrapper.append(Header( _ => {
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
    coders: null,
    selectedCoder: null
}



$(_ => {
    getJSON('peru.json', (err, json) => {
        if(err) {
            return alert(err.message);
        }
        state.coders = json;
        const root = $('.root');
        // render(root);
    })
})
