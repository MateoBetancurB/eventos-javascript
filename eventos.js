var teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39

};

document.addEventListener("keydown", dibujarTeclado);
var cuadrito = document.getElementById("area-dibujo");
var papel = cuadrito.getContext("2d");
var x = 150;
var y = 150;

dibujarLinea("red", 149, 149, 151, 151, papel);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo) {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 3;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}


function dibujarTeclado(evento) {
    var colorcito = "blue";
    var movimiento = 10;
    switch (evento.keyCode) {
        case teclas.UP:
            dibujarLinea(colorcito, x, y, x, y - movimiento, papel);
            y = y - movimiento;
            break;
        case teclas.DOWN:
            dibujarLinea(colorcito, x, y, x, y + movimiento, papel);
            y = y + movimiento;
            break;
        case teclas.LEFT:
            dibujarLinea(colorcito, x, y, x, -movimiento, y, papel);
            x = x - movimiento;
            break;
        case teclas.RIGHT:
            dibujarLinea(colorcito, x, y, x, +movimiento, y, papel);
            x = x + movimiento;
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