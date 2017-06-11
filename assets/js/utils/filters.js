'use strict';

let point = 0;
const randomPhoto = (country) => {
    if(country.toLowerCase() == "peru") {
        let numberPeru = Math.floor(Math.random() * (state.codersPeru.length)) ;
        state.selectedName = state.codersPeru[numberPeru].name;
        return "assets/fotos/"+country.toLowerCase()+"/"+state.codersPeru[numberPeru].image;
    }
    else {
        let numberMexico = Math.floor(Math.random() * (state.codersMexico.length))
        state.selectedName = state.codersMexico[numberMexico].name;
        return "assets/fotos/"+country.toLowerCase()+"/"+state.codersMexico[numberMexico].image;

    }
}
const checkName = (coder, checkCoder) => {
    if (coder.toLowerCase() == checkCoder) {
        point+=5;
        state.morePoint = point;
    } else {
        point--;
        state.morePoint = point;
    }
}
