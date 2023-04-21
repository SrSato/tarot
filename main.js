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
    
    // lee el augurio     
    lectura = leeCarta(draggable);
    pintaLectura(lectura);
    console.log(draggable)
}

const pintaLectura = (lectura) =>{
    elemento = document.getElementsByClassName("lectura")[0];
    titulo = `<h3> Consulta de Sí o No: </h3>`;
    queSalio = `<p> Tu carta es ${lectura[0]} y viene ${lectura[1]}.</p>`;
    queEs = `<p> Rasgos sugeridos: ${lectura[2]} </p>`;
    queDice = `<p> Para esta tirada la carta nos dice... ${lectura[3]} </p>`;
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

