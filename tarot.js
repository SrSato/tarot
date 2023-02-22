const tarot = [
    {
        "nombre":"El Loco",
        "palo":"arcano",
        "valor":"0",
        "rasgos":"Despreocupación · Ideas originales · Decisiones importantes · Nuevos comienzos · Optimismo",
        "rasgosInv":"Esfuerzo sin fruto · Caos · Falta de implicación · Accidentes e imprevistos · Malas decisiones",
        "pasado":"Ser original y/o asumir riesgos te ha dado resultado antes. Una nueva forma de hacer te ha permitido crecer.",
        "pasado-":"La falta de organización o de implicación ya te ha costado tiempo y esfuerzo antes. Un mal juicio de la situación y/o un giro imprevisible te ha lastrado en el pasado.",
        "presente+":"Momento de cambios, pueden parecer lo que no son. Se necesita ponderar los riesgos y costes para tomar una buena decisión.",
        "presente-":"Esfuerzo que no lleva a ningún sitio, falta de concrección. Se necesita replanteamiento y revisión del entorno (planes y gentes).",
        "futuro+":"Necesidad de movimiento. Pensar de forma diferente, abandonar lo antiguo. Maneras nuevas de conseguir objetivos.",
        "futuro-":"Momento volátil. Imprevistos, peligro de equivocaciones, recibir malos consejos y engaños. Relaciones temporales, falta de compromiso.",
        "si_no+":"Optimismo, pueden venir decisiones importantes. Duda en positivo. Quizá sacar otra carta complementaría esta tirada.",
        "si_no+":"Inconsciencia, no está todo sobre la mesa. Duda y advertencia. Saca otra carta, pero ten presente esta.",
        "invertida":0
    },
    {
        "nombre":"El Mago",
        "palo":"arcano",
        "valor":"1",
        "rasgos":"Seguridad · Creatividad · Comunicaciones importantes · Habilidad · Talento y competencia",
        "rasgosInv":"Desconfianza · No saber lo que se quiere · Engaños · Incompetencia · Retrasos en los planes",
        "pasado":"La confianza y la creatividad te ha dado resultado antes. La inteligencia y/o la habilidad te ha permitido crecer.",
        "pasado-":"Los engaños y que se retrasen tus objetivos han dejado huella antes. Te has fiado de la gente equivocada o que no tenía claras las cosas.",
        "presente+":"Se está dando un cambio o una nueva oportunidad. Para que el momento sea positivo necesitarás implicarte con tus mejores cualidades.",
        "presente-":"Lo que sea que estás intentando o haciendo se verá retrasado. Algo se está haciendo mal por falta de comunicación.",
        "futuro+":"Mucho a ganar y mucho a perder. Las amistades y relaciones que hayas cultivado influirán, pero debes hacer tu parte de la manera más competente posible.",
        "futuro-":"Estancamiento y retrasos. Algo o alguien obstaculiza tus avances. Te corresponderá a tí desbloquear la situación.",
        "si_no+":"Necesita tu acción y capacidad, SI.",
        "si_no-":"No solo depende de tí o de tus habilidades, NO.",
        "invertida":0
    },
    {
        "nombre":"La Suma Sacerdotisa",
        "palo":"arcano",
        "valor":"2",
        "rasgos":"Feminidad · Profundidad · Misterio · Comprensión y buen juicio · Intuición",
        "rasgosInv":"Pasividad y desconexión · Celos · Desequilibrio · Mentiras de gente próxima · Planes ocultos",
        "pasado":"Pasado monótono, has necesitado apoyo y compañia para abrirte a cosas e ideas nuevas. Esto puede seguir en el presente.",
        "pasado-":"Vienes de vivir en desequilibrio, con relaciones personales tormentosas y poca estabilidad laboral o de ingresos.",
        "presente+":"Pon el foco en tí. Es un momento personal y privado en el que reencontrarte con tu propio yo. Autoconocimiento. Mal momento para socializar o empezar relaciones.",
        "presente-":"Desafios invisibles, desconocidos o con datos aún no revelados. Es bueno fiarse de la intuición ahora.",
        "futuro+":"Mucho a ganar y mucho a perder. Las amistades y relaciones que hayas cultivado influirán, pero debes hacer tu parte de la manera más competente posible.",
        "futuro-":"Estancamiento y retrasos. Algo o alguien obstaculiza tus avances. Te corresponderá a tí desbloquear la situación.",
        "si_no+":"Claramente SI.",
        "si_no-":"Claramente NO.",
        "invertida":0
    },
   
];

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
    elegida.invertida = Math.floor(Math.random() * 2);
    
    return elegida
}


barajar(baraja);
let carta = sacaUna(baraja);

console.log(carta.nombre)
if(carta.invertida==1){
    console.log(carta.rasgosInv)
}else{
    console.log(carta.rasgos)
}
