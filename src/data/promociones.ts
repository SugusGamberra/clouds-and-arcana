export interface PromoMensual {
    mes: number; // 0=Enero, 1=Feb...
    id: number | string;
    nombre: string;
    descripcion: string;
    precio: number;
    stock: number;
}

export const promosEspeciales: PromoMensual[] = [
    {
        mes: 0, //enero
        id: 'apertura-de-caminos',
        nombre: 'Apertura de Caminos "Año Nuevo"',
        descripcion: 'Comienza el año con energía renovada y despeja los obstáculos que puedan llegar en este nuevo año.',
        precio: 8,
        stock: 5
    },
    {
        mes: 0,
        id: 'san-anton',
        nombre: 'Bendición de San Antón para tu mascota',
        descripcion: 'Bendice a tu mascota con la energía de San Antón para protegerla, fortalecer su vínculo contigo y atraer salud y bienestar para ella este 17 de Enero con un escudo espiritual para peluditos.',
        precio: 0,
        stock: 5
    },
    {
        mes: 1,
        id: 'endulzamiento-aura',
        nombre: 'Endulzamiento de Aura "Vibración Rosa"',
        descripcion: 'Refuerza tu aura con la energía de la vibración rosa endulzándola con amor y magnetismo para atraer tu amor.',
        precio: 5,
        stock: 5
    },
    {
        mes: 1,
        id: 'san-valentin',
        nombre: 'Ritual de Amor "San Valentín"',
        descripcion: 'Atrae al amor de tu vida o fortalece tu relación actual.',
        precio: 7,
        stock: 5
    },
    {
        mes: 2,
        id: 'corte-lazos-equinocio',
        nombre: 'Corte de Lazos "Equinocio',
        descripcion: 'Corta los lazos que te atan a personas, situaciones o energías con el poder de las runas y la energía del equinocio de primavera.',
        precio: 10,
        stock: 5
    },
    {
        mes: 2,
        id: 'primavera',
        nombre: 'Equinocio de Primavera "Renacer"',
        descripcion: 'Abre tus caminos con una limpieza total y profunda de lo viejo y estancado.',
        precio: 10,
        stock: 5
    },
    {
        mes: 2,
        id: 'padre',
        nombre: 'Ritual del Roble para honrar a tu padre',
        descripcion: 'Honra a tu padre con la energía del roble con fuerza, sabiduría y protección.',
        precio: 6,
        stock: 5
    },
    {
        mes: 2,
        id: 'perdon-padre',
        nombre: 'Ritual de Perdón para tu padre',
        descripcion: 'Libera resentimientos y sana tu relación con un ritual de perdón.',
        precio: 6,
        stock: 5
    },
    {
        mes: 3, // Abril
        id: 'luna-rosa',
        nombre: 'Activación de brillo "Luna Rosa"',
        descripcion: 'Activa tu brillo personal con la energía de esta luna para atraer amor, prosperidad y destacar en todo lo que hagas.',
        precio: 7,
        stock: 5
    },
    {
        mes: 4,
        id: 'madre',
        nombre: 'Ritual del Sauce para honrar a tu madre',
        descripcion: 'Honra a tu madre con la energía del sauce con compasión, sabiduría y amor.',
        precio: 6,
        stock: 5
    },
    {
        mes: 4,
        id: 'lluvia-de-oro',
        nombre: 'Decreto de Abundancia "Lluvia de Oro"',
        descripcion: 'Atrae la frecuencia del dinero en tu nombre inspirado en la energía de Mayo.',
        precio: 5,
        stock: 5
    },
    {
        mes: 5,
        id: 'san-juan',
        nombre: 'Transmutación de Fuego "San Juan"',
        descripcion: 'Transmuta energías negativas en positivas con el poder del fuego y la energía de San Juan.',
        precio: 10,
        stock: 5
    },
    {
        mes: 6,
        id: 'escudo-astral',
        nombre: 'Sellado de Protección "Escudo Astral"',
        descripcion: 'Obtén un escudo de protección para tu aura y evita los males de ojo, envidias y energías negativas.',
        precio: 8,
        stock: 5
    },
    {
        mes: 6,
        id: 'amistad',
        nombre: 'Nudo de Lealtad "Amistad"',
        descripcion: 'Fortalece tus amistades con un nudo de lealtad que simboliza la unión, confianza y apoyo mutuo.',
        precio: 0,
        stock: 5
    },
    {
        mes: 7,
        id: 'semilla-estelar',
        nombre: 'Manifestación "Semilla Estelar"',
        descripcion: 'Siembra tu intención con la energía de esta luna para manifestar lo que deseas para el resto del año.',
        precio: 7,
        stock: 5
    },
    {
        mes: 7,
        id: 'pachamana',
        nombre: 'Cosecha de Deseos "Pachamana"',
        descripcion: 'Cosecha los frutos de tus deseos sembrados durante todo el año.',
        precio: 7,
        stock: 5
    },
    {
        mes: 8,
        id: 'mente-maestra',
        nombre: 'Claridad y Foco "Mente Maestra"',
        descripcion: 'Aumenta tu claridad mental y enfoque para tomar mejores decisiones y avanzar en tus proyectos.',
        precio: 10,
        stock: 5
    },
    {
        mes: 8,
        id: 'autumn',
        nombre: 'Renovación "Equinocio de Otoño"',
        descripcion: 'Renueva tu energía y abre tus caminos con el poder del equinocio de otoño.',
        precio: 10,
        stock: 5
    },
    {
        mes: 9,
        id: 'portal-samhain',
        nombre: 'Canalización de Guías "Portal de Samhain"',
        descripcion: 'Conéctate con tus guías espirituales y recibe mensajes y orientación con el poder de este portal energético.',
        precio: 12,
        stock: 5
    },
    {
        mes: 9,
        id: 'mascota-asis',
        nombre: 'Refuerzo Energético "San Francisco de Asís" para tu mascota',
        descripcion: 'Refuerza la energía de tu mascota con la bendición de San Francisco de Asís para protegerla y atraer bienestar.',
        precio: 0,
        stock: 5
    },
    {
        mes: 10,
        id: 'santos',
        nombre: 'Paz Ancestral "Día de todos los Santos"',
        descripcion: 'Honra a tus seres queridos que ya no están con nosotros y encuentra paz y sanación con su energía.',
        precio: 6,
        stock: 5
    },
    {
        mes: 10,
        id: 'sanacion-ancestral',
        nombre: 'Limpieza de Linaje "Sanación Ancestral"',
        descripcion: 'Libera y sana las energías heredadas de tu linaje familiar para avanzar con mayor libertad y bienestar.',
        precio: 9,
        stock: 5,
    },
    {
        mes: 11,
        id: 'corona-luz',
        nombre: 'Cierre y Victoria "Corona de Luz"',
        descripcion: 'Cierra el año con una corona de Luz que simboliza la victoria, aprendizaje y crecimiento, asegura que el siguiente año entre con fuerza.',
        precio: 12,
        stock: 5
    },
    {
        mes: 11,
        id: 'yule',
        nombre: 'Renacimiento Yule "Solsticio de Invierno"',
        descripcion: 'Renace con luz para el nuevo ciclo que comienza con el solsticio de invierno.',
        precio: 12,
        stock: 5
    }
];