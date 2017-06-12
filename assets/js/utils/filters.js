'use strict';

let point = 0;
let countTry = 0;
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
    if (coder.toLowerCase() == checkCoder.val().toLowerCase()) {
        point+=5;
        state.morePoint = point;
        $('#info p').text('Puntos: '+state.morePoint+' puntos');
        state.try = 0;
        setTimeout( _ =>{
            $('#result img').attr("src", randomPhoto(state.selectedCountry))
            console.log(state.selectedName);

            }, 2000);
    } else {
        countTry++;
        if(state.try >= 5) {
            point--;
            state.morePoint = point;
            $('#info p').text('Puntos: '+state.morePoint+' puntos');
                state.try = 0;
                setTimeout( _ =>{
                    $('#result img').attr("src", randomPhoto(state.selectedCountry))
                    console.log(state.selectedName);

                    }, 2000);
        }
        state.try= countTry;

    }
    updateData(checkCoder);
}

const updateData = (name) => {
    name.val("");
    name.focus();
    if (state.morePoint  < 0) {
        $('#info p').text('Perdiste');
        $('#result img').attr("src", "")

        setTimeout( _ =>{
            render($('.root'));

            }, 3000);
    }
}
