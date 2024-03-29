let baraja=tarot.slice(); //Para mantener el original y trabajar sobre la copia

/** EN PRUEBAS: función para soltar elementos arrastrados */
const soltar = (e) => {
    e.preventDefault();
    console.log("Suelto el suelte"); 
  
    // pilla el elemento arrastrable
    const id = e.dataTransfer.getData('text/plain');
    const draggable = document.getElementById(id);
    draggable.style = "";   
    
    // lo enchufa al elemento de destino
    e.target.appendChild(draggable);

    // enseña el elemento    
    draggable.classList.remove('hide');
    draggable.classList.remove('desconocida');
    e.target.classList.add('poblado')

    // lee el augurio     
    lectura = leeCarta(draggable);
    pintaLectura(lectura);
    console.log(draggable)

    /* Patrón para impedir nuevos arrastres al mismo elemento. Se puede hacer con el drop también.

    // impide que se arrastre nada más encima
    e.target.removeEventListener('dragover',allowDrop)
    
    */
    
}

const pintaLectura = (lectura) =>{
    elemento = document.getElementsByClassName("lectura")[0];
    lista = lectura[2].split(", ");
    listaHTML="";
    lista.forEach(rasgo => {
       listaHTML = listaHTML + `<li> ${rasgo.charAt(0).toUpperCase().concat(rasgo.substr(1))} </li>`
    });     
    titulo = `<h3> ${lectura[0]}</h3> `;
    queSalio = `<h6> ${lectura[1]} trae:</h6>`;
    queEs = `<ul> ${listaHTML} </ul>`;
    queDice = `<h6> Dice que ... </h6> <p>${lectura[3]} </p> <p class="filigrana">✵</p>`;
    elemento.innerHTML = titulo + queSalio + queEs + queDice;
}

/** EN PRUEBAS: función para permitir arrastres*/
function allowDrop(e) {
    e.preventDefault();
    console.log("Permito el suelte"); 
}

const prepararMesa = () => {
    augurios = document.getElementsByClassName("augurio");
    augurios = Array.from(augurios);
    augurios.forEach(augurio => {
        augurio.addEventListener('drop', soltar);
        augurio.addEventListener('dragover', allowDrop);
    });
}


// VAMOS A ELLO...
prepararMesa();
barajar(baraja);
presentarMazo(baraja, "zonaMazo");

