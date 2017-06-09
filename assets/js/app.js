'use strict';

const state = {
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
