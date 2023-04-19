// CONSTANTES

const INICIAL_ARCANOS = "A";
const INICIAL_BASTOS = "B";
const INICIAL_ESPADAS = "E";
const INICIAL_OROS = "O";
const INICIAL_COPAS ="C";

const IMG_ARCANOS = "m";
const IMG_BASTOS = "b";
const IMG_ESPADAS ="s";
const IMG_OROS = "p";
const IMG_COPAS = "c";

const IMG_REVERSO = "back.png" //La imagen de la parte de atrás de la carta ;)
const RUTA_IMG = "img/" //Ruta a la carpeta de imágenes

/** Dado un array nos devuelve el mismo array desordenado.
 *  La idea es que leamos un array con cartas y las desordenemos
 *  para que queden barajaditas. NO tiene en cuenta si estan derechas
 *  o giradas.
 */
const barajar = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];

        // Swap
        array[i] = array[j];
        array[j] = temp;
    }
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

/** EN PRUEBAS: función para soltar elementos arrastrados */
const soltar = (e) => {
    e.preventDefault();
    console.log("Suelto el suelte"); 
  
    // pilla el elemento arrastrable
    const id = e.dataTransfer.getData('text/plain');
    const draggable = document.getElementById(id);
    draggable.style = "";
    draggable.style.position = "absolute";
    
    // lo enchufa al elemento de destino
    e.target.appendChild(draggable);

    // enseña el elemento
    draggable.classList.remove('hide');
}

/** EN PRUEBAS: función para permitir arrastres*/
function allowDrop(e) {
    e.preventDefault();
    console.log("Permito el suelte"); 
  }
  
 /** Crea la representación en HTML del mazo de cartas y la añade al body */
const presentarMazo = (cartas) => {
    const mazoHTML = document.createElement("div");
    mazoHTML.className = "mazo";
    cartas.forEach(carta => {
        const cartaHTML = document.createElement("div");
        cartaHTML.id = idCarta(carta);
        cartaHTML.className = "carta";
        cartaHTML.draggable = true;
        const img = document.createElement("img");
        img.src = RUTA_IMG + IMG_REVERSO;
        img.className = "anverso";
        img.draggable = false; 
        if (cartaHTML.girada){ img.classList.add("girada")}      
        cartaHTML.appendChild(img);
        cartaHTML.style.transform = `translate(-${0.5*baraja.indexOf(carta)}px, -${0.5*baraja.indexOf(carta)}px)`;       
        cartaHTML.addEventListener("dragstart", (e) => {
            e.dataTransfer.setData("text/plain", e.target.id);   
            console.log("Arrastro");        
        });
        document.getElementById("body").addEventListener('drop', soltar);
        mazoHTML.appendChild(cartaHTML);   
    });
    document.getElementById("body").appendChild(mazoHTML);
}


