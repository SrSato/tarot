let baraja=tarot;

// VAMOS A ELLO...
barajar(baraja);
let carta = sacaUna(baraja);

console.log(carta.nombre)
if(carta.girada==1){
    console.log(carta.rasgos_girada)
}else{    
    console.log(carta.rasgos_enderezada)
}

presentarMazo(baraja);