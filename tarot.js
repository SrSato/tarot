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
        "rasgos":"Feminidad · Estabilidad · Misterio · Comprensión y buen juicio · Intuición",
        "rasgosInv":"Pasividad y desconexión · Celos · Desequilibrio · Mentiras de gente próxima · Planes ocultos",
        "pasado":"Pasado monótono, has necesitado apoyo y compañia para abrirte a cosas e ideas nuevas. Esto puede seguir en el presente.",
        "pasado-":"Vienes de vivir en desequilibrio, con relaciones personales tormentosas y poca estabilidad laboral o de ingresos.",
        "presente+":"Pon el foco en tí. Es un momento personal y privado en el que reencontrarte con tu propio yo. Autoconocimiento. Mal momento para socializar o empezar relaciones.",
        "presente-":"Desafios invisibles, desconocidos o con datos aún no revelados. Es bueno fiarse de la intuición ahora.",
        "futuro+":"Se está en el buen camino, vienen recompensas. Se ha de perseverar. Disciplina y motivación serán nuestras herramientas.",
        "futuro-":"Tiempo inestable o de bloqueos. Problemas mal planteados o de los que no sabemos todo. Pasividad, pérdida de poder. Necesidad de reevaluar la situación y a nosotros mismos. Probablemente se necesitará ayuda de otros.",
        "si_no+":"Se necesita reflexión. Saca otra carta.",
        "si_no-":"Se necesita reflexión. Saca otra carta.",
        "invertida":0
    },
    {
        "nombre":"La Emperatriz",
        "palo":"arcano",
        "valor":"3",
        "rasgos":"Creatividad · Fertilidad · Abundancia · Hedonismo · Energía de lo nuevo",
        "rasgosInv":"Bloqueo creativo · Rutina · Descontento · Necesidad de estar a solas · Falta de empuje",
        "pasado":"Una oportunidad del pasado te seguirá al presente. Algo que comenzaste tiempo atrás puede materializarse, pero sólo a través de cuidado y esfuerzo constante.",
        "pasado-":"Una buena oportunidad se ha quedado atrás por falta de empeño, energía o por no llenarte.",
        "presente+":"Algo nuevo e ilusionante empieza para tí. Tus acciones y tu dedicación serán decisivas. Alguien querido necesita de tu ayuda y se te empuja a ayudarle.",
        "presente-":"Calma chicha. Es un momento para reflexionar y tomar aliento. Ojo con estancarse, acostumbrarse o permitir que se nos suban a las barbas.",
        "futuro+":"Si se cuidan, nuestros planes darán frutos. Es posible que aparezcan nuevas y mejores alternativas. Los cambios serán a mejor. Entre nuevo y viejo, escoge nuevo.",
        "futuro-":"Demasiado ruido y carga sobre nosotros. No deberemos cargar con errores ajenos. Necesidad de distanciarse de lo material.",
        "si_no+":"Buen camino y empuje. SI",
        "si_no-":"Cautela, necesidad de amparo. NO.",
        "invertida":0
    },
    {
        "nombre":"El Emperador",
        "palo":"arcano",
        "valor":"4",
        "rasgos":"Autoridad · Organización · Estabilidad · Protección · Razonamiento y lógica",
        "rasgosInv":"Descontrol · Falta de estructura · Inseguridad · Abuso de poder · Impulsividad",
        "pasado":"En el pasado has sido capaz de ejercer el control sobre tu vida y establecer una base sólida para tus objetivos futuros.",
        "pasado-":"En el pasado has tenido dificultades para mantener el control o la estabilidad en tu vida. Este periódo de caos e incertidumbre te ha permitido aprender, crecer y mejorar en lo personal.",
        "presente+":"Estás en un momento de tu vida en el que estás ejerciendo tu poder y liderazgo de manera efectiva, y estás estableciendo una base sólida para tus objetivos futuros.",
        "presente-":"Puede haber desafíos en tu vida que están afectando tu capacidad para liderar efectivamente y establecer una base sólida para tus objetivos futuros. Es posible que necesites trabajar en tu capacidad para adaptarte al cambio y tomar decisiones más flexibles y equilibradas para superar estos desafíos.",
        "futuro+":"Estás en un camino hacia el éxito y la estabilidad, y estás trabajando arduamente para asegurar tu futuro y establecer una base sólida para tus objetivos futuros.",
        "futuro-":"Pueden aparecer desafíos en tu camino hacia el éxito y la estabilidad, y es posible que necesites trabajar en tu capacidad para adaptarte al cambio, tomar decisiones más flexibles y equilibradas, y establecer límites saludables en tus relaciones personales para superar estos desafíos.",
        "si_no+":"Estás preparado para enfrentar los desafíos que se presenten. SI",
        "si_no-":"Falta de control o imposibilidad. NO.",
        "invertida":0
    },
    {
        "nombre":"El Hierofante",
        "palo":"arcano",
        "valor":"5",
        "rasgos":"Sabiduría y enseñanza · Espiritualidad · Autoridad (benevolente) · Tradición y conformidad · Aprobación social",
        "rasgosInv":"Rebeldía · Falta de rumbo · Desconexión espiritual · Rechazo de lo impuesto · Necesidad de novedad",
        "pasado":"Has trabajado duro para mantener tus valores y creencias a lo largo del tiempo, y has logrado encontrar un equilibrio y una armonía en tu vida.",
        "pasado-":"Has enfrentado desafíos para encontrar la estabilidad y la seguridad en tu vida, y has tenido dificultades para mantener tus valores y creencias a lo largo del tiempo.",
        "presente+":"Estás trabajando para encontrar una mayor armonía y equilibrio en tu vida, y estás buscando formas de mantener tus valores y creencias a lo largo del tiempo. También puede indicar la necesidad de seguir las normas establecidas y las tradiciones, lo que puede limitar tu capacidad para explorar nuevos caminos y tomar decisiones independientes.",
        "presente-":"Estás experimentando una fase de cambio y transición en tu vida, y necesitas encontrar nuevas formas de expresarte y dar significado a tu vida.",
        "futuro+":"Estás en un camino de crecimiento y evolución personal, y estás en el camino correcto para alcanzar tus objetivos a largo plazo. Puede ser una señal de que estás buscando un mentor o un guía para ayudarte a avanzar.",
        "futuro-":"Es posible que necesites tomarte un tiempo para reflexionar y explorar tus valores y creencias centrales. Puede ser útil buscar la ayuda de un mentor o un guía espiritual para encontrar tu camino y avanzar hacia tus metas a largo plazo",
        "si_no+":"Estás recibiendo orientación o ayuda de una fuente confiable. Si",
        "si_no-":"Necesitas guia y consejo externo antes de poder afrontar esto. Por ahora NO.",
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
