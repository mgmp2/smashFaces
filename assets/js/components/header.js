'use strict';

const Header = (update) => {
    const header = $('<header class="jumbotron"></header>');
    const titulo = $('<h1 class="text-center">Smash Faces </h1>');
    header.append(titulo);
    return header;
}
