let baraja=tarot;

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

const sacaUna = (cartas) => {
    let elegida = cartas.pop();
    elegida.girada = Math.floor(Math.random() * 2);
    
    return elegida
}

const idCarta = (carta) => {
    let id;
    if(carta.palo.charAt(0)=="A"){ id = "m"};
    if(carta.palo.charAt(0)=="B"){ id = "w"};
    if(carta.palo.charAt(0)=="E"){ id = "s"};
    if(carta.palo.charAt(0)=="O"){ id = "p"};
    if(carta.palo.charAt(0)=="C"){ id = "c"};   
    id =  id + carta.valor.toLocaleString('es', {minimumIntegerDigits: 2, useGrouping:false});
   
    return id;
}



const soltar = (e) => {
    e.preventDefault();
    console.log("Suelto el suelte"); 
  
    // get the draggable element
    const id = e.dataTransfer.getData('text/plain');
    const draggable = document.getElementById(id);
    draggable.style = "";
    draggable.style.position = "absolute";
    
    // add it to the drop target
    e.target.appendChild(draggable);

    // display the draggable element
    draggable.classList.remove('hide');
}

function allowDrop(e) {
    e.preventDefault();
    console.log("Permito el suelte"); 
  }
  
 
const presentarMazo = (cartas) => {
    const mazoHTML = document.createElement("div");
    mazoHTML.className = "mazo";
    cartas.forEach(carta => {
        const cartaHTML = document.createElement("div");
        cartaHTML.id = idCarta(carta);
        cartaHTML.className = "carta";
        cartaHTML.draggable = true;
        cartaHTML.girada = Math.floor(Math.random() * 2);
        const img = document.createElement("img");
        img.alt = carta.nombre //Molaría decir si está derecha o invertida   
        //img.src = "img/" + cartaHTML.id  + ".jpg";
        img.src = "img/back.png";
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

barajar(baraja);
let carta = sacaUna(baraja);

console.log(carta.nombre)
if(carta.girada==1){
    console.log(carta.rasgos_girada)
}else{    
    console.log(carta.rasgos_enderezada)
}

presentarMazo(baraja);