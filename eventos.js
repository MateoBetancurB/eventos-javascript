var teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39

};

document.addEventListener("keyup", dibujarTeclado);
var cuadrito = document.getElementById("area-dibujo");
var papel = cuadrito.getContext("2d");
var x = 150;
var y = 150;

dibujarLinea("red", 100, 100, 200, 200, papel);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo) {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 5;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(yinicial, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}


function dibujarTeclado(evento) {
    switch (evento.keyCode) {
        case teclas.UP:
            console.log("arriba");
            break;
        case teclas.DOWN:
            console.log("abajo");
            break;
        case teclas.LEFT:
            console.log("izquiera");
            break;
        case teclas.RIGHT:
            console.log("derecha");
            break;

    }
}

// function dibujarTeclado(evento) {
//     //     if (evento.keyCode == teclas.UP) {
//     //         console.log("vamos pa arriba");
//     //     }
//     //     if (evento.keyCode == teclas.DOWN) {
//     //         console.log("vamos pa abajo");
//     //     }
//     //     if (evento.keyCode == teclas.LEFT) {
//     //         console.log("vamos pa izquiera");
//     //     }
//     //     if (evento.keyCode == teclas.RIGHT) {
//     //         console.log("vamos pa derecha");
//     //     }
// }