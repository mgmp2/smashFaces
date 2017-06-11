'use strict';

const randomPhoto = (country) => {
    if(country.toLowerCase() == "peru") {
        let numberPeru = Math.floor(Math.random() * (state.codersPeru.length)) ;
        return "assets/fotos/"+country.toLowerCase()+"/"+state.codersPeru[numberPeru].image;
    }
    else {
        let numberMexico = Math.floor(Math.random() * (state.codersMexico.length))
        return "assets/fotos/"+country.toLowerCase()+"/"+state.codersMexico[numberMexico].image;

    }
}
