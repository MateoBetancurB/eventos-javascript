var teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39

};

console.log(teclas);

document.addEventListener("keyup", dibujarTeclado);

function dibujarTeclado(evento) {
    // ejemplo con if
    if (evento.keyCode == teclas.UP) {
        console.log("vamos pa arriba");
    }
    if (evento.keyCode == teclas.DOWN) {
        console.log("vamos pa abajo");
    }
    if (evento.keyCode == teclas.LEFT) {
        console.log("vamos pa izquiera");
    }
    if (evento.keyCode == teclas.RIGHT) {
        console.log("vamos pa derecha");
    }


    // ejemplo con switch
    switch (evento.keyCode) {
        case teclas.UP:
            console.log("arriba");
            break;
        case teclas.DOWN:
            console.log("abajo");
            break;
        default:
            console.log("otra tecla");
            break;
    }
}