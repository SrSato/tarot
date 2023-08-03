// CONSTANTES

const INICIAL_ARCANOS = "A";
const INICIAL_BASTOS = "B";
const INICIAL_ESPADAS = "E";
const INICIAL_OROS = "O";
const INICIAL_COPAS ="C";

const IMG_ARCANOS = "m";
const IMG_BASTOS = "w";
const IMG_ESPADAS ="s";
const IMG_OROS = "p";
const IMG_COPAS = "c";

const IMG_REVERSO = "back.png"; //La imagen de la parte de atrás de la carta ;)
const RUTA_IMG = "img/"; //Ruta a la carpeta de imágenes
const IMG_EXT = ".jpg";

/** Dado un array nos devuelve el mismo array desordenado.
 *  La idea es que leamos un array con cartas y las desordenemos
 *  para que queden barajaditas. 
 */
const barajar = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));

        //Girada o enderezada?
        array[i].girada = Math.floor(Math.random() * 2);
        array[j].girada = Math.floor(Math.random() * 2);
        const temp = array[i];

        // Swap
        array[i] = array[j];
        array[j] = temp;
    }
    console.log(array);
    return array;
};

/** Saca un elemento del array (carta) y le asigna un valor a la propiedad girada
 *  0 -> Viene enderezada
 *  1 -> Viene girada
 *  Devuelve la carta girada o enderezada ;)
 */
const sacaUna = (cartas) => {
    let elegida = cartas.pop();
    elegida.girada = Math.floor(Math.random() * 2);
    
    return elegida
}

/** Generamos in id para cada carta. Lo haremos según este patrón: x00
 *  Donde x será la incial del palo en inglés y
 *  00 será el valor de cada carta.
 *  Usamos esta notación para hacerla coincidir con los nombres de las
 *  imagenes de cada carta ;)
 */
const idCarta = (carta) => {
    let id;
    if(carta.palo.charAt(0)==INICIAL_ARCANOS){ id = IMG_ARCANOS};
    if(carta.palo.charAt(0)==INICIAL_BASTOS){ id = IMG_BASTOS};
    if(carta.palo.charAt(0)==INICIAL_ESPADAS){ id = IMG_ESPADAS};
    if(carta.palo.charAt(0)==INICIAL_OROS){ id = IMG_OROS};
    if(carta.palo.charAt(0)==INICIAL_COPAS){ id = IMG_COPAS};   
    id =  id + carta.valor.toLocaleString('es', {minimumIntegerDigits: 2, useGrouping:false});
   
    return id;
}

/** Da el resultado de una carta */
const leeCarta = (carta) =>{
    let ordinal = Number(carta.getAttribute("ordinal"));
    let elegida = tarot[ordinal];
    /*let result = `Tu carta es ${elegida.nombre} y viene ${elegida.girada? "girada":"enderezada"}.
    Características generales: ${elegida.girada? elegida.rasgos_girada : elegida.rasgos_enderezada} 
    La respuesta sugerida para esta consulta es: ${elegida.girada? elegida.si_no_girada:elegida.si_no_enderezada}`*/
    let nombre = elegida.nombre;
    let girada = elegida.girada? "del revés" : "del derecho";
    let rasgos = elegida.girada? elegida.rasgos_girada : elegida.rasgos_enderezada;
    let lectura = elegida.girada? elegida.si_no_girada:elegida.si_no_enderezada
    let result = [nombre, girada, rasgos, lectura]
    return result;
}

/** Crea la representación en HTML del mazo de cartas y la añade al elemento objetivo */
const presentarMazo = (cartas, idTargetHTML) => {
    const mazoHTML = document.createElement("div");
    mazoHTML.className = "mazo";
    cartas.forEach(carta => {
        const cartaHTML = document.createElement("div");
        cartaHTML.id = idCarta(carta);
        cartaHTML.setAttribute("ordinal", carta.ordinal); //Marcamos un atributo custom para pasar la ref. en nuestro tarot.
        cartaHTML.classList.add("carta");
        cartaHTML.draggable = true;
        const img = document.createElement("img");
        img.src = RUTA_IMG + cartaHTML.id + IMG_EXT;
        img.classList.add("reverso");
        cartaHTML.classList.add("desconocida");
        img.draggable = false;
        console.log(cartaHTML.girada);        
        carta.girada ? img.classList.add("girada") : img.classList.add("enderezada");
        cartaHTML.appendChild(img);
        cartaHTML.style.transform = `translate(-${0.5*baraja.indexOf(carta)}px, -${0.5*baraja.indexOf(carta)}px)`;       
        cartaHTML.addEventListener("dragstart", (e) => {
            e.dataTransfer.setData("text/plain", e.target.id);   
            console.log("Arrastro");        
        });
        mazoHTML.appendChild(cartaHTML);   
    });
    document.getElementById(idTargetHTML).appendChild(mazoHTML);
}


