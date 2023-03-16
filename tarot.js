const tarot = [
    {
        "nombre":"El Loco",
        "palo":"Arcanos Mayores",
        "valor":0,
        "rasgos enderezada":"Despreocupación · Ideas originales · Decisiones importantes · Nuevos comienzos · Optimismo",
        "rasgos girada":"Esfuerzo sin fruto · Caos · Falta de implicación · Accidentes e imprevistos · Malas decisiones",
        "pasado enderezada":"Ser original y/o asumir riesgos te ha dado resultado antes. Una nueva forma de hacer te ha permitido crecer.",
        "pasado girada":"La falta de organización o de implicación ya te ha costado tiempo y esfuerzo antes. Un mal juicio de la situación y/o un giro imprevisible te ha lastrado en el pasado.",
        "presente enderezada":"Momento de cambios, pueden parecer lo que no son. Se necesita ponderar los riesgos y costes para tomar una buena decisión.",
        "presente girada":"Esfuerzo que no lleva a ningún sitio, falta de concrección. Se necesita replanteamiento y revisión del entorno (planes y gentes).",
        "futuro enderezada":"Necesidad de movimiento. Pensar de forma diferente, abandonar lo antiguo. Maneras nuevas de conseguir objetivos.",
        "futuro girada":"Momento volátil. Imprevistos, peligro de equivocaciones, recibir malos consejos y engaños. Relaciones temporales, falta de compromiso.",
        "si/no enderezada":"Optimismo, pueden venir decisiones importantes. Duda en positivo. Quizá sacar otra carta complementaría esta tirada.",
        "si/no girada":"Inconsciencia, no está todo sobre la mesa. Duda y advertencia. Saca otra carta, pero ten presente esta.",
        
    },
    {
        "nombre":"El Mago",
        "palo":"Arcanos Mayores",
        "valor":1,
        "rasgos":"Seguridad · Creatividad · Comunicaciones importantes · Habilidad · Talento y competencia",
        "rasgos girada":"Desconfianza · No saber lo que se quiere · Engaños · Incompetencia · Retrasos en los planes",
        "pasado enderezada":"La confianza y la creatividad te ha dado resultado antes. La inteligencia y/o la habilidad te ha permitido crecer.",
        "pasado girada":"Los engaños y que se retrasen tus objetivos han dejado huella antes. Te has fiado de la gente equivocada o que no tenía claras las cosas.",
        "presente enderezada":"Se está dando un cambio o una nueva oportunidad. Para que el momento sea positivo necesitarás implicarte con tus mejores cualidades.",
        "presente girada":"Lo que sea que estás intentando o haciendo se verá retrasado. Algo se está haciendo mal por falta de comunicación.",
        "futuro enderezada":"Mucho a ganar y mucho a perder. Las amistades y relaciones que hayas cultivado influirán, pero debes hacer tu parte de la manera más competente posible.",
        "futuro girada":"Estancamiento y retrasos. Algo o alguien obstaculiza tus avances. Te corresponderá a tí desbloquear la situación.",
        "si/no enderezada":"Necesita tu acción y capacidad, SI.",
        "si/no girada":"No solo depende de tí o de tus habilidades, NO.",        
    },
    {
        "nombre":"La Suma Sacerdotisa",
        "palo":"Arcanos Mayores",
        "valor":2,
        "rasgos":"Feminidad · Estabilidad · Misterio · Comprensión y buen juicio · Intuición",
        "rasgos girada":"Pasividad y desconexión · Celos · Desequilibrio · Mentiras de gente próxima · Planes ocultos",
        "pasado enderezada":"Pasado monótono, has necesitado apoyo y compañia para abrirte a cosas e ideas nuevas. Esto puede seguir en el presente.",
        "pasado girada":"Vienes de vivir en desequilibrio, con relaciones personales tormentosas y poca estabilidad laboral o de ingresos.",
        "presente enderezada":"Pon el foco en tí. Es un momento personal y privado en el que reencontrarte con tu propio yo. Autoconocimiento. Mal momento para socializar o empezar relaciones.",
        "presente girada":"Desafios invisibles, desconocidos o con datos aún no revelados. Es bueno fiarse de la intuición ahora.",
        "futuro enderezada":"Se está en el buen camino, vienen recompensas. Se ha de perseverar. Disciplina y motivación serán nuestras herramientas.",
        "futuro girada":"Tiempo inestable o de bloqueos. Problemas mal planteados o de los que no sabemos todo. Pasividad, pérdida de poder. Necesidad de reevaluar la situación y a nosotros mismos. Probablemente se necesitará ayuda de otros.",
        "si/no enderezada":"Se necesita reflexión. Saca otra carta.",
        "si/no girada":"Se necesita reflexión. Saca otra carta.",       
    },
    {
        "nombre":"La Emperatriz",
        "palo":"Arcanos Mayores",
        "valor":3,
        "rasgos":"Creatividad · Fertilidad · Abundancia · Hedonismo · Energía de lo nuevo",
        "rasgos girada":"Bloqueo creativo · Rutina · Descontento · Necesidad de estar a solas · Falta de empuje",
        "pasado enderezada":"Una oportunidad del pasado te seguirá al presente. Algo que comenzaste tiempo atrás puede materializarse, pero sólo a través de cuidado y esfuerzo constante.",
        "pasado girada":"Una buena oportunidad se ha quedado atrás por falta de empeño, energía o por no llenarte.",
        "presente enderezada":"Algo nuevo e ilusionante empieza para tí. Tus acciones y tu dedicación serán decisivas. Alguien querido necesita de tu ayuda y se te empuja a ayudarle.",
        "presente girada":"Calma chicha. Es un momento para reflexionar y tomar aliento. Ojo con estancarse, acostumbrarse o permitir que se nos suban a las barbas.",
        "futuro enderezada":"Si se cuidan, nuestros planes darán frutos. Es posible que aparezcan nuevas y mejores alternativas. Los cambios serán a mejor. Entre nuevo y viejo, escoge nuevo.",
        "futuro girada":"Demasiado ruido y carga sobre nosotros. No deberemos cargar con errores ajenos. Necesidad de distanciarse de lo material.",
        "si/no enderezada":"Buen camino y empuje. SI",
        "si/no girada":"Cautela, necesidad de amparo. NO.",        
    },
    {
        "nombre":"El Emperador",
        "palo":"Arcanos Mayores",
        "valor":4,
        "rasgos":"Autoridad · Organización · Estabilidad · Protección · Razonamiento y lógica",
        "rasgos girada":"Descontrol · Falta de estructura · Inseguridad · Abuso de poder · Impulsividad",
        "pasado enderezada":"En el pasado has sido capaz de ejercer el control sobre tu vida y establecer una base sólida para tus objetivos futuros.",
        "pasado girada":"En el pasado has tenido dificultades para mantener el control o la estabilidad en tu vida. Este periódo de caos e incertidumbre te ha permitido aprender, crecer y mejorar en lo personal.",
        "presente enderezada":"Estás en un momento de tu vida en el que estás ejerciendo tu poder y liderazgo de manera efectiva, y estás estableciendo una base sólida para tus objetivos futuros.",
        "presente girada":"Puede haber desafíos en tu vida que están afectando tu capacidad para liderar efectivamente y establecer una base sólida para tus objetivos futuros. Es posible que necesites trabajar en tu capacidad para adaptarte al cambio y tomar decisiones más flexibles y equilibradas para superar estos desafíos.",
        "futuro enderezada":"Estás en un camino hacia el éxito y la estabilidad, y estás trabajando arduamente para asegurar tu futuro y establecer una base sólida para tus objetivos futuros.",
        "futuro girada":"Pueden aparecer desafíos en tu camino hacia el éxito y la estabilidad, y es posible que necesites trabajar en tu capacidad para adaptarte al cambio, tomar decisiones más flexibles y equilibradas, y establecer límites saludables en tus relaciones personales para superar estos desafíos.",
        "si/no enderezada":"Estás preparado para enfrentar los desafíos que se presenten. SI",
        "si/no girada":"Falta de control o imposibilidad. NO.",        
    },
    {
        "nombre":"El Hierofante",
        "palo": "Arcanos Mayores",
        "valor":5,
        "rasgos enderezada":"Sabiduría y enseñanza · Espiritualidad · Autoridad (benevolente) · Tradición y conformidad · Aprobación social",
        "rasgos girada":"Rebeldía · Falta de rumbo · Desconexión espiritual · Rechazo de lo impuesto · Necesidad de novedad",
        "pasado enderezada":"Has trabajado duro para mantener tus valores y creencias a lo largo del tiempo, y has logrado encontrar un equilibrio y una armonía en tu vida.",
        "pasado girada":"Has enfrentado desafíos para encontrar la estabilidad y la seguridad en tu vida, y has tenido dificultades para mantener tus valores y creencias a lo largo del tiempo.",
        "presente enderezada":"Estás trabajando para encontrar una mayor armonía y equilibrio en tu vida, y estás buscando formas de mantener tus valores y creencias a lo largo del tiempo. También puede indicar la necesidad de seguir las normas establecidas y las tradiciones, lo que puede limitar tu capacidad para explorar nuevos caminos y tomar decisiones independientes.",
        "presente girada":"Estás experimentando una fase de cambio y transición en tu vida, y necesitas encontrar nuevas formas de expresarte y dar significado a tu vida.",
        "futuro enderezada":"Estás en un camino de crecimiento y evolución personal, y estás en el camino correcto para alcanzar tus objetivos a largo plazo. Puede ser una señal de que estás buscando un mentor o un guía para ayudarte a avanzar.",
        "futuro girada":"Es posible que necesites tomarte un tiempo para reflexionar y explorar tus valores y creencias centrales. Puede ser útil buscar la ayuda de un mentor o un guía espiritual para encontrar tu camino y avanzar hacia tus metas a largo plazo",
        "si/no enderezada":"Estás recibiendo orientación o ayuda de una fuente confiable. Si",
        "si/no girada":"Necesitas guia y consejo externo antes de poder afrontar esto. Por ahora NO.",        
    },
    {
        "nombre": "Los Enamorados",
        "palo": "Arcanos Mayores",
        "valor": 6,
        "rasgos enderezada": "Amor verdadero, elección importante, unión, armonía, compromiso",
        "rasgos girada": "Duda, indecisión, conflicto interno, elección difícil, tentación",
        "pasado enderezada": "Momentos de amor verdadero y elecciones positivas en el pasado.",
        "pasado girada": "Elecciones difíciles y momentos de indecisión en el pasado.",
        "presente enderezada": "Estás enfrentando una elección importante en tu vida, pero el amor verdadero y la armonía te guiarán hacia la decisión correcta.",
        "presente girada": "Estás luchando con una decisión difícil y sientes conflicto interno. Ten cuidado de no ceder a las tentaciones momentáneas.",
        "futuro enderezada": "Una elección importante te espera en el futuro cercano, pero si sigues tu corazón y tomas decisiones basadas en el amor verdadero, alcanzarás la armonía y el compromiso.",
        "futuro girada": "Te enfrentarás a decisiones difíciles en el futuro cercano y es posible que te sientas tentado por opciones que no son las mejores para ti. Asegúrate de sopesar cuidadosamente todas tus opciones antes de decidir.",
        "si/no enderezada": "Sí, si sigues tu corazón y tomas decisiones basadas en el amor verdadero y la armonía.",
        "si/no girada": "No, aún no estás listo para tomar la decisión que estás considerando o tal vez hay una elección mejor que no has considerado aún."
    },
    {
        "nombre": "El Carro",
        "palo": "Arcanos Mayores",
        "valor": 7,
        "rasgos enderezada": "Voluntad, determinación, éxito, control",
        "rasgos girada": "Falta de dirección, falta de control, obstáculos, fracaso",
        "pasado enderezada": "Logros pasados, éxitos en el pasado, tomar el control de la situación",
        "pasado girada": "Fracasos pasados, falta de control en el pasado, falta de dirección",
        "presente enderezada": "Tomando el control de la situación actual, éxito en el presente, dirección clara",
        "presente girada": "Falta de control en el presente, falta de dirección, obstáculos en el camino",
        "futuro enderezada": "Éxito futuro, dirección clara, logro de metas",
        "futuro girada": "Fracaso futuro, falta de dirección, obstáculos en el camino",
        "si/no enderezada": "Sí",
        "si/no girada": "No"
      },
      {
        "nombre": "La Justicia",
        "palo": "Arcanos Mayores",
        "valor": 8,
        "rasgos enderezada": "Verdad, equidad, objetividad, razón, justicia, integridad, equilibrio",
        "rasgos girada": "Desigualdad, deshonestidad, injusticia, falta de equilibrio, engaño, deshonestidad, falta de integridad",
        "pasado enderezada": "El consultante pudo haber vivido un evento importante donde se sintió apoyado y comprendido",
        "pasado girada": "El consultante puede haber tenido un evento donde fue engañado o perjudicado",
        "presente enderezada": "El consultante está enfrentando un problema legal o situación que requiere de justicia y equidad",
        "presente girada": "El consultante puede estar viviendo una situación injusta o engañosa, o está siendo deshonesto en sus acciones",
        "futuro enderezada": "El consultante puede esperar una resolución justa y equitativa a sus problemas, o que se le presentará una oportunidad de ser justo y equitativo",
        "futuro girada": "El consultante puede esperar una resolución injusta o engañosa a sus problemas, o que necesitará hacer frente a las consecuencias de sus acciones deshonestas",
        "si/no enderezada": "La respuesta es probablemente sí, siempre y cuando se sigan los procedimientos adecuados y se actúe con integridad",
        "si/no girada": "La respuesta es probablemente no, ya que puede haber engaño o deshonestidad en la situación actual"
      },
      {
        "nombre": "El Ermitaño",
        "palo": "Arcanos mayores",
        "valor": 9,
        "rasgos enderezada": "Sabiduría, soledad, búsqueda interna, introspección, guía interior.",
        "rasgos girada": "Soledad forzada, aislamiento, negación de la sabiduría interior, aislamiento excesivo, desconexión de la realidad.",
        "pasado enderezada": "Un período de reflexión personal, un viaje introspectivo, sabiduría adquirida a través de la experiencia.",
        "pasado girada": "Un período de soledad dolorosa, una desconexión emocional, falta de dirección en la vida.",
        "presente enderezada": "Estás en un período de búsqueda interna y reflexión, conectándote con tu sabiduría interior y tomando decisiones basadas en ella.",
        "presente girada": "Te sientes solo y aislado, incapaz de encontrar la orientación adecuada en la vida, desconectado de tus valores internos.",
        "futuro enderezada": "Necesitarás buscar respuestas internas y sabiduría para tomar decisiones importantes en el futuro. Confía en tus propios instintos y guía interior.",
        "futuro girada": "Tendrás dificultades para encontrar el camino correcto en la vida y es posible que te sientas abrumado por la soledad y el aislamiento.",
        "si/no enderezada": "Esta carta indica la necesidad de tomar un tiempo para la reflexión y buscar la sabiduría interior antes de tomar una decisión importante. La respuesta puede ser sí, siempre y cuando confíes en tu propio juicio.",
        "si/no girada": "Esta carta puede indicar un período de soledad y desconexión emocional que puede dificultar la toma de decisiones. La respuesta puede ser no, a menos que tomes el tiempo necesario para conectarte contigo mismo y encontrar tu propia guía interna."
    },
    {
        "nombre": "La Rueda de la Fortuna",
        "palo": "Aracanos Mayores",
        "valor": 10,
        "rasgos enderezada": "Cambio, evolución, ciclos, destino, movimiento",
        "rasgos girada": "Cambio negativo, falta de control, obstáculos, destino inevitable",
        "pasado enderezada": "Período de transición, cambio en la dirección de la vida, buena suerte",
        "pasado girada": "Período de caos, falta de dirección, mala suerte",
        "presente enderezada": "Cambio positivo, oportunidades, éxito, buen destino",
        "presente girada": "Cambio negativo, oportunidades perdidas, obstáculos, mala suerte",
        "futuro enderezada": "Cambio positivo, evolución, buen destino, suerte",
        "futuro girada": "Cambio negativo, falta de control, obstáculos, destino inevitable",
        "si/no enderezada": "Respuesta incierta, pero hay una posibilidad de cambio positivo",
        "si/no girada": "Respuesta incierta, pero hay una posibilidad de cambio negativo"
    },      
    {
        "nombre": "La Fuerza",
        "palo": "Arcanos Mayores",
        "valor": 11,
        "rasgos enderezada": "Fortaleza, coraje, dominio propio, autocontrol, confianza en sí mismo",
        "rasgos girada": "Falta de control, debilidad, falta de autoconfianza, inseguridad, falta de voluntad",
        "pasado enderezada": "Superación de obstáculos, demostración de fuerza, logro de metas importantes",
        "pasado girada": "Incapacidad para superar obstáculos, falta de voluntad para alcanzar metas, falta de confianza en uno mismo",
        "presente enderezada": "Capacidad para afrontar desafíos con fortaleza y coraje, autocontrol, confianza en sí mismo",
        "presente girada": "Falta de coraje para afrontar desafíos, falta de autocontrol, inseguridad, miedo",
        "futuro enderezada": "Superación de desafíos, logro de metas importantes, demostración de coraje y fortaleza",
        "futuro girada": "Falta de capacidad para afrontar desafíos, fracaso en lograr metas importantes, falta de coraje y fortaleza",
        "si/no enderezada": "Sí",
        "si/no girada": "No"
    },
    {
        "nombre": "El Colgado",
        "palo": "Arcanos Mayores",
        "valor": 12,
        "rasgos enderezada": "Sacrificio, renuncia, perspectiva diferente, liberación",
        "rasgos girada": "Egoísmo, falta de sacrificio, estancamiento, necesidad de cambio",
        "pasado enderezada": "Has tenido que hacer sacrificios y renuncias para llegar a donde estás ahora",
        "pasado girada": "No has estado dispuesto a hacer sacrificios o has tomado malas decisiones que te han llevado a un estancamiento",
        "presente enderezada": "Estás en un momento de tu vida en el que necesitas hacer sacrificios para lograr tus metas y objetivos",
        "presente girada": "Estás en un momento en el que necesitas un cambio de perspectiva y dejar de ser egoísta para avanzar",
        "futuro enderezada": "En el futuro, tendrás que tomar decisiones difíciles y hacer sacrificios para alcanzar tus metas",
        "futuro girada": "Si no haces cambios importantes en tu vida, te quedarás estancado en el futuro",
        "si/no enderezada": "La respuesta es sí, pero necesitas estar dispuesto a hacer sacrificios",
        "si/no girada": "La respuesta es no, pero necesitas cambiar tu perspectiva y dejar de ser egoísta para avanzar"
    },
    {
        "nombre": "La Muerte",
        "palo": "Arcanos Mayores",
        "valor": 13,
        "rasgos enderezada": "transformación, cambio, fin de ciclos, evolución, renacimiento",
        "rasgos girada": "resistencia al cambio, miedo al fin, estancamiento, resistencia al crecimiento personal, estancamiento",
        "pasado enderezada": "una etapa de cambios importantes que llevaron a la persona a un nuevo capítulo en su vida",
        "pasado girada": "una resistencia a los cambios y miedo a dejar ir lo que ya no sirve, lo que llevó a estancamiento",
        "presente enderezada": "un momento de cambio importante, una transformación que se está llevando a cabo en la vida de la persona",
        "presente girada": "una resistencia al cambio y miedo a enfrentar lo que está por venir, lo que lleva a estancamiento",
        "futuro enderezada": "un cambio importante se avecina, una transformación que llevará a la persona a un nuevo capítulo en su vida",
        "futuro girada": "una resistencia al cambio y miedo a dejar ir lo que ya no sirve, lo que llevará a estancamiento en el futuro",
        "si/no enderezada": "La respuesta puede ser sí, pero es importante estar preparado para los cambios y transformaciones que vendrán",
        "si/no girada": "La respuesta puede ser no debido a la resistencia al cambio y el miedo al fin"
    },
    {
        "nombre": "La Templanza",
        "palo": "Arcanos Mayores",
        "valor": 14,
        "rasgos enderezada": "Balance, autocontrol, adaptabilidad, paciencia, armonía",
        "rasgos girada": "Desequilibrio, falta de autocontrol, impaciencia, rigidez",
        "pasado enderezada": "Has logrado un equilibrio emocional y has sido capaz de adaptarte a las circunstancias",
        "pasado girada": "Has experimentado desequilibrio emocional y falta de adaptación a las circunstancias",
        "presente enderezada": "Estás en un momento de armonía y equilibrio, siendo capaz de adaptarte a las situaciones que se presenten",
        "presente girada": "Puedes estar experimentando desequilibrio emocional y falta de adaptación a las circunstancias actuales",
        "futuro enderezada": "Te espera un futuro de armonía, equilibrio y paciencia, serás capaz de adaptarte a los cambios que se presenten",
        "futuro girada": "Deberás prestar atención a posibles desequilibrios emocionales y trabajar en tu capacidad de adaptación a los cambios",
        "si/no enderezada": "La respuesta es sí, siempre y cuando mantengas un equilibrio emocional y estés dispuesto a adaptarte a las circunstancias",
        "si/no girada": "La respuesta puede ser no si no logras mantener un equilibrio emocional y adaptarte a las circunstancias"
    },
    {
        "nombre": "El Diablo",
        "palo": "Arcanos mayores",
        "valor": 15,
        "rasgos enderezada": "Obsesión, deseo, tentación, materialismo, esclavitud",
        "rasgos girada": "Liberación, superación, romper con lo negativo, enfrentamiento a las adicciones",
        "pasado enderezada": "Había situaciones que generaban tentación o adicción y se cayó en ellas",
        "pasado girada": "Fue posible superar situaciones tentadoras o adictivas en el pasado",
        "presente enderezada": "Hay situaciones que generan tentación o adicción y se está cayendo en ellas",
        "presente girada": "Es posible liberarse de situaciones tentadoras o adictivas en el presente",
        "futuro enderezada": "Habrá situaciones que generen tentación o adicción, es necesario estar alerta",
        "futuro girada": "Será posible superar situaciones tentadoras o adictivas en el futuro",
        "si/no enderezada": "Respuesta negativa, indica posibilidad de caer en tentaciones o adicciones",
        "si/no girada": "Respuesta positiva, indica posibilidad de liberación y superación de tentaciones o adicciones"
    },
    {
        "nombre": "La Torre",
        "palo": "Arcanos Mayores",
        "valor": 16,
        "rasgos enderezada": "Cambio repentino, crisis, destrucción de estructuras inestables.",
        "rasgos girada": "Evacuación de emergencia, caída de planes, desmoronamiento interno.",
        "pasado enderezada": "Ha habido un evento dramático que cambió el rumbo de tu vida.",
        "pasado girada": "Estás tratando de negar o minimizar un evento dramático que cambió el rumbo de tu vida.",
        "presente enderezada": "Estás pasando por un período de gran cambio y ruptura de estructuras obsoletas.",
        "presente girada": "Estás tratando de resistir al cambio y aferrarte a estructuras que ya no funcionan.",
        "futuro enderezada": "Debes estar preparado para grandes cambios y una destrucción de estructuras anticuadas para avanzar en tu camino.",
        "futuro girada": "Debes estar preparado para grandes cambios, pero estás renunciando a tomar medidas para hacer frente a ellos.",
        "si/no enderezada": "No, se acerca una gran interrupción en tu vida que necesitas abordar.",
        "si/no girada": "Sí, estás tratando de evitar un cambio inevitable que necesita suceder."
    },
    {
        "nombre": "La Estrella",
        "palo": "Arcanos Mayores",
        "valor": 17,
        "rasgos enderezada": "Esperanza, inspiración, renovación, optimismo, fe.",
        "rasgos girada": "Desilusión, falta de fe, obstáculos, falta de inspiración, desesperanza.",
        "pasado enderezada": "Momento de renovación, inspiración y esperanza. Se superaron obstáculos y se recuperó la fe en uno mismo.",
        "pasado girada": "Momento de desilusión, falta de fe y obstáculos que impidieron avanzar en el camino.",
        "presente enderezada": "Llegada de una nueva etapa, oportunidades que inspiran y renuevan la esperanza. Sentimiento de optimismo y fe en el futuro.",
        "presente girada": "Desilusión, obstáculos que impiden avanzar, falta de inspiración y fe en el futuro.",
        "futuro enderezada": "Superación de obstáculos, inspiración y renovación que permiten alcanzar los objetivos y realizar los sueños. Éxito, optimismo y fe en el futuro.",
        "futuro girada": "Falta de fe en uno mismo y en el futuro, desilusión y obstáculos que impiden avanzar en el camino hacia los objetivos.",
        "si/no enderezada": "Sí, es una carta de esperanza y optimismo.",
        "si/no girada": "No, hay obstáculos y desilusión que impiden avanzar en el camino."
    },
    {
        "nombre": "La Luna",
        "palo": "Arcanos Mayores",
        "valor": 18,
        "rasgos enderezada": "Intuición, misterio, ilusión, creatividad, secretos.",
        "rasgos girada": "Decepción, desilusión, confusión, ansiedad, inseguridad.",
        "pasado enderezada": "Momentos de incertidumbre y desconcierto en el pasado que ayudaron a desarrollar tu intuición y creatividad.",
        "pasado girada": "Engaños y decepciones en el pasado que han generado inseguridad y confusión en ti.",
        "presente enderezada": "Momento de mayor intuición, creatividad y conexión con lo místico. Puedes descubrir secretos ocultos y tomar decisiones acertadas.",
        "presente girada": "Confusión y engaños en el presente que te impiden tomar decisiones adecuadas y pueden generar ansiedad e inseguridad.",
        "futuro enderezada": "Descubrimiento de nuevos conocimientos y una mayor conexión con lo místico. Confía en tu intuición y creatividad para tomar decisiones acertadas.",
        "futuro girada": "Pérdida de confianza en tus propias capacidades y mayor confusión y ansiedad en el futuro.",
        "si/no enderezada": "Sí, siempre que confíes en tu intuición y creatividad para tomar la decisión correcta.",
        "si/no girada": "No, hay engaños y confusión que impiden tomar una decisión clara y acertada."
    },
    {
        "nombre": "El Sol",
        "palo": "Arcanos Mayores",
        "valor": 19,
        "rasgos enderezada": "Alegría, éxito, realización, optimismo, creatividad, vitalidad",
        "rasgos girada": "Egocentrismo, arrogancia, falta de dirección, egoísmo, exceso de confianza",
        "pasado enderezada": "Has experimentado una etapa de alegría y felicidad en tu vida, en la que te has sentido en plenitud",
        "pasado girada": "Puede que hayas pasado por una etapa de oscuridad y tristeza, y que ahora te cueste ver la luz",
        "presente enderezada": "El Sol te anuncia éxito, realización y felicidad en el presente. Te sientes con energía, vitalidad y entusiasmo para emprender nuevos proyectos",
        "presente girada": "En el presente puedes estar pasando por un momento difícil, en el que te cuesta encontrar la felicidad y la motivación",
        "futuro enderezada": "El Sol indica que en el futuro habrá éxito y realización en tus proyectos. Serás capaz de superar los obstáculos y avanzar con seguridad hacia tus metas",
        "futuro girada": "Puedes estar pasando por un momento de confusión y desorientación en el que no sabes qué camino tomar.",
        "si/no enderezada": "Sí, definitivamente",
        "si/no girada": "Puede que no sea el momento adecuado, necesitas más claridad y energía"
    },
    {
        "nombre": "El Juicio",
        "palo": "Arcanos Mayores",
        "valor": 20,
        "rasgos enderezada": "Renacimiento, cambio, transformación, realización, liberación",
        "rasgos girada": "Miedo al cambio, resistencia al cambio, falta de autoevaluación, autocondena, falta de perdón",
        "pasado enderezada": "Ha llegado a un punto de autoevaluación y ha tomado decisiones importantes para su futuro.",
        "pasado girada": "Ha evitado cambios importantes en su vida y no ha querido enfrentar sus problemas.",
        "presente enderezada": "Es un momento de evaluación y análisis de su vida. Es hora de tomar decisiones importantes para avanzar en su vida.",
        "presente girada": "Puede estar experimentando miedo y resistencia al cambio en su vida, lo que le impide avanzar.",
        "futuro enderezada": "Experimentará una renovación personal y espiritual. Se producirán cambios importantes y positivos en su vida.",
        "futuro girada": "Si continúa evitando los cambios importantes, puede experimentar una crisis personal y emocional.",
        "si/no enderezada": "Sí.",
        "si/no girada": "No."
    },
    {
        "nombre": "El Mundo",
        "palo": "Arcanos Mayores",
        "valor": 21,
        "rasgos enderezada": "Finalización de un ciclo exitoso, plenitud, logro de objetivos, realización, perfección.",
        "rasgos girada": "Estancamiento, incapacidad para avanzar, falta de logros, objetivos no alcanzados, necesidad de cambio.",
        "pasado enderezada": "Has completado exitosamente un proyecto o etapa importante en tu vida.",
        "pasado girada": "Tuviste dificultades para completar un proyecto o etapa importante en el pasado.",
        "presente enderezada": "Estás experimentando una sensación de logro y plenitud en tu vida, y estás listo para enfrentar nuevos desafíos.",
        "presente girada": "Te sientes estancado en tu vida actual, incapaz de avanzar o completar proyectos.",
        "futuro enderezada": "Te espera una época de logros y realización personal, y podrías estar en camino de completar un proyecto importante.",
        "futuro girada": "Podrías experimentar retrasos en la finalización de un proyecto o metas importantes en el futuro cercano.",
        "si/no enderezada": "Sí, tus esfuerzos serán coronados con éxito y te espera una época de plenitud y logros.",
        "si/no girada": "No, es posible que experimentes dificultades para completar proyectos o metas importantes en el futuro cercano."
    },
    {
        "nombre": "As de Bastos",
        "palo": "Bastos",
        "valor": "As",
        "rasgos enderezada": "Nuevos comienzos, oportunidades, creatividad, entusiasmo",
        "rasgos girada": "Falta de dirección, falta de motivación, oportunidades perdidas",
        "pasado enderezada": "Ha tenido éxito en nuevos proyectos y emprendimientos",
        "pasado girada": "Ha experimentado dificultades para comenzar o completar nuevos proyectos",
        "presente enderezada": "Una nueva oportunidad o proyecto creativo está en el horizonte",
        "presente girada": "Puede estar luchando para encontrar una dirección en su vida o trabajo actual",
        "futuro enderezada": "Un nuevo proyecto o empresa será exitoso y gratificante",
        "futuro girada": "Puede experimentar dificultades para comenzar o completar nuevos proyectos en el futuro cercano",
        "si/no enderezada": "Sí",
        "si/no girada": "No"
    },
    {
        "nombre": "Dos de Bastos",
        "palo": "Bastos",
        "valor": 2,
        "rasgos enderezada": "Toma de decisiones, planificación, descubrimiento de nuevas oportunidades",
        "rasgos girada": "Miedo a tomar decisiones, falta de planificación, dificultades para encontrar nuevas oportunidades",
        "pasado enderezada": "Toma de decisiones acertadas, planificación efectiva, oportunidades aprovechadas",
        "pasado girada": "Malas decisiones, falta de planificación, oportunidades perdidas",
        "presente enderezada": "Consideración de opciones, planificación cuidadosa, preparación para nuevas oportunidades",
        "presente girada": "Indecisión, falta de planificación, oportunidades perdidas o desaprovechadas",
        "futuro enderezada": "Toma de decisiones acertadas, éxito en proyectos, descubrimiento de nuevas oportunidades",
        "futuro girada": "Malas decisiones, fracaso en proyectos, dificultades para encontrar nuevas oportunidades",
        "si/no enderezada": "Sí",
        "si/no girada": "Probablemente no"
    },
          
    {
        "nombre": "As de Espadas",
        "palo": "Espadas",
        "valor": "As",
        "rasgos enderezada": "Claridad mental, toma de decisiones, nuevas ideas, nuevos comienzos, victoria",
        "rasgos girada": "Confusión mental, indecisión, retrasos, frustración, derrota",
        "pasado enderezada": "Momento de claridad mental que te permitió tomar decisiones importantes y nuevas ideas que te llevaron al éxito.",
        "pasado girada": "Confusión mental que te llevó a tomar decisiones equivocadas y a perder oportunidades importantes.",
        "presente enderezada": "Tienes claridad mental y estás listo para tomar decisiones importantes que te llevarán a la victoria y nuevos comienzos.",
        "presente girada": "Estás experimentando confusión mental y no estás seguro de qué decisiones tomar, lo que te lleva a retrasos y frustración.",
        "futuro enderezada": "Tendrás una victoria importante y nuevos comienzos gracias a una decisión importante que tomarás con claridad mental.",
        "futuro girada": "Experimentarás una derrota importante debido a una decisión equivocada tomada bajo confusión mental.",
        "si/no enderezada": "Sí",
        "si/no girada": "No"
      }
      
      
      
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
    console.log(carta.rasgos girada)
}else{
    console.log(carta.rasgos)
}
