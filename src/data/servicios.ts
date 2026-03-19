import type { Servicio } from '../types';

export const servicios: Servicio[] = [
    // --- TAROT Y GUÍA ESPIRITUAL ---
    { 
        id: 'si-o-no', 
        nombre: 'Péndulo de Nubes (Sí o No)', 
        formato: 'Respuesta directa + Foto', 
        precio: 1,
        descripcion: 'Una única carta para darte un SÍ o un NO rotundo a esa duda que te ronda la cabeza. Rápido y sin rodeos.',
        categoria: 'Tarot y Guía Espiritual'
    },
    { 
        id: 'tirada-express', 
        nombre: 'Tirada Express (1 pregunta)', 
        formato: 'Audio + Foto', 
        precio: 5,
        descripcion: 'Ideal para dudas rápidas y concretas. Recibe una respuesta clara directamente en tu correo.',
        categoria: 'Tarot y Guía Espiritual'
    },
    { 
        id: 'sos-examenes', 
        nombre: 'SOS Época de Exámenes', 
        formato: 'Audio motivacional + Foto', 
        precio: 8,
        descripcion: 'Lectura enfocada en darte claridad, calmar los nervios y ver las energías ante un proyecto, entrega o examen importante.',
        categoria: 'Tarot y Guía Espiritual'
    },
    { 
        id: 'guia-espiritual', 
        nombre: 'Mensaje de tu Guía Espiritual', 
        formato: 'Audio + Foto', 
        precio: 12,
        descripcion: 'Para cuando te sientes perdida. ¿Qué necesitas saber hoy? ¿Qué te intenta decir el universo que no estás viendo?',
        categoria: 'Tarot y Guía Espiritual'
    },
    { 
        id: 'vinculos', 
        nombre: 'Tirada de Vínculos y Conexiones', 
        formato: 'Audio detallado + Foto', 
        precio: 15,
        descripcion: 'Enfocada en el amor y las relaciones. Descubre qué pasa con esa persona especial y hacia dónde va el vínculo.',
        categoria: 'Tarot y Guía Espiritual'
    },
    { 
        id: 'lectura-profunda', 
        nombre: 'Lectura Profunda Tarot', 
        formato: 'Vídeo', 
        precio: 25,
        destacado: true,
        descripcion: 'Exploramos pasado, presente y futuro. Una sesión completa para entender tu situación de vida.',
        categoria: 'Tarot y Guía Espiritual'
    },
    { 
        id: 'rueda-año', 
        nombre: 'La Rueda del Año', 
        formato: 'PDF extenso + Fotos', 
        precio: 35,
        destacado: true,
        descripcion: 'Un mapa energético mes a mes desde tu cumpleaños o inicio de año. 12 cartas para guiarte en todo tu ciclo.',
        categoria: 'Tarot y Guía Espiritual'
    },

    // --- MAGIA NÓRDICA Y RUNAS ---
    { 
        id: 'talisman-runico', 
        nombre: 'Talismán Rúnico Digital', 
        formato: 'Imagen descargable', 
        precio: 5,
        descripcion: 'Un sigilo o bindrune personalizado creado con tu energía para usar de fondo de pantalla como protección o atracción.',
        categoria: 'Magia Nórdica y Runas'
    },
    { 
        id: 'consejo-runico', 
        nombre: 'Consejo Rúnico', 
        formato: 'Audio + Foto', 
        precio: 10,
        descripcion: 'Las antiguas runas vikingas te guían. Un consejo ancestral para desbloquear tu camino actual.',
        categoria: 'Magia Nórdica y Runas'
    },
    { 
        id: 'hechizo-vikingo-proteccion', 
        nombre: 'Hechizo Vikingo de Protección', 
        formato: 'Trabajo de altar a distancia', 
        precio: 150,
        descripcion: 'Refuerza tu energía y bloquea influencias negativas utilizando la antigua magia nórdica.',
        categoria: 'Magia Nórdica y Runas'
    },
    { 
        id: 'escudo-tyr', 
        nombre: 'Escudo de Tyr (Justicia y Asuntos Legales)', 
        formato: 'Trabajo de altar a distancia', 
        precio: 150,
        descripcion: 'Favorece resoluciones justas y desbloquea procesos legales o conflictos a través del dios Tyr.',
        categoria: 'Magia Nórdica y Runas'
    },
    { 
        id: 'ritual-freyja', 
        nombre: 'Ritual de Freyja para el Magnetismo', 
        formato: 'Trabajo de altar a distancia', 
        precio: 300,
        destacado: true,
        descripcion: 'Activa tu magnetismo y despierta el deseo trabajando con la energía de la diosa Freyja.',
        categoria: 'Magia Nórdica y Runas'
    },
    { 
        id: 'nudo-nornas', 
        nombre: 'Nudo de las Nornas (Desbloqueo Kármico)', 
        formato: 'Trabajo de altar a distancia', 
        precio: 300,
        destacado: true,
        descripcion: 'Ritual para liberar bloqueos profundos y destrabar los hilos del destino que las Nornas han tejido.',
        categoria: 'Magia Nórdica y Runas'
    },

    // --- EL MUNDO DE LOS SUEÑOS ---
    { 
        id: 'analisis-sueno', 
        nombre: 'Análisis de Sueño', 
        formato: 'PDF + Audio detallado', 
        precio: 20,
        descripcion: 'Descifra los mensajes de tu subconsciente. Analizo la simbología espiritual de tus sueños más profundos.',
        categoria: 'El Mundo de los Sueños'
    },
    { 
        id: 'limpieza-pesadillas', 
        nombre: 'Limpieza de Pesadillas y Bajo Astral', 
        formato: 'Trabajo de altar a distancia', 
        precio: 90,
        destacado: true,
        descripcion: 'Sella tu habitación y limpia tu campo onírico para evitar ataques nocturnos y pesadillas.',
        categoria: 'El Mundo de los Sueños'
    },

    // --- RITUALES Y HECHIZOS DE ALTAR (A DISTANCIA) ---
    { 
        id: 'pack-reina-oros', 
        nombre: 'Pack Reina de Oros', 
        formato: 'Vídeo (Tarot y Runas) + PDF', 
        precio: 50,
        destacado: true,
        descripcion: 'La experiencia mística definitiva. Incluye lectura completa, consejo de runas y un ritual personalizado para tu caso.',
        categoria: 'Rituales y Hechizos de Altar'
    },
    { 
        id: 'ritual-luna-rosa', 
        nombre: 'Ritual Luna Rosa 2026', 
        formato: 'Trabajo de altar a distancia', 
        precio: 66,
        descripcion: 'La Luna del Amor. Energía en Libra para reconciliaciones y nuevas oportunidades sentimentales.',
        categoria: 'Rituales y Hechizos de Altar'
    },
    { 
        id: 'abrecaminos-oro', 
        nombre: 'Abrecaminos de Oro y Miel', 
        formato: 'Trabajo de altar a distancia', 
        precio: 111,
        descripcion: 'Desbloquea, activa y avanza. Ideal para atraer abundancia y destrabar el camino.',
        categoria: 'Rituales y Hechizos de Altar'
    },
    { 
        id: 'corte-lazos', 
        nombre: 'Corte de Lazos Energéticos', 
        formato: 'Trabajo de altar a distancia', 
        precio: 150,
        descripcion: 'Libérate de apegos y vínculos que te atrapan. Ideal para cerrar un ciclo doloroso o alejar la energía de un ex definitivamente.',
        categoria: 'Rituales y Hechizos de Altar'
    },
    { 
        id: 'endulzamiento', 
        nombre: 'Ritual Endulzamiento de Entorno', 
        formato: 'Trabajo de altar a distancia', 
        precio: 150,
        descripcion: 'Suaviza emociones, acerca corazones y armoniza cualquier tipo de ambiente.',
        categoria: 'Rituales y Hechizos de Altar'
    },
    { 
        id: 'ritual-estudios', 
        nombre: 'Ritual de Estudios', 
        formato: 'Trabajo de altar a distancia', 
        precio: 150,
        descripcion: 'Mejora la concentración, el rendimiento y abre los caminos para aprobar esos exámenes difíciles.',
        categoria: 'Rituales y Hechizos de Altar'
    },
    { 
        id: 'reencuentro-amor', 
        nombre: 'Ritual de Reencuentro y Reconciliación Amorosa', 
        formato: 'Trabajo de altar a distancia', 
        precio: 200,
        destacado: true,
        descripcion: 'Para sanar heridas y volver a unir vuestros caminos desde la luz.',
        categoria: 'Rituales y Hechizos de Altar'
    },
    { 
        id: 'union-desbloqueo', 
        nombre: 'Ritual de Unión y Desbloqueo', 
        formato: 'Trabajo de altar a distancia', 
        precio: 300,
        destacado: true,
        descripcion: 'Elimina lo que os separa y fortalece el vínculo de manera profunda.',
        categoria: 'Rituales y Hechizos de Altar'
    },
    { 
        id: 'volteo-energias', 
        nombre: 'Volteo de Energías (Mal de Ojo)', 
        formato: 'Trabajo de altar a distancia', 
        precio: 90,
        destacado: true,
        descripcion: 'Efecto espejo. Protégete de malas energías devolviéndolas a su origen.',
        categoria: 'Rituales y Hechizos de Altar'
    },
    { 
        id: 'destierro-sal-negra', 
        nombre: 'Destierro con Sal Negra y Thurisaz', 
        formato: 'Trabajo de altar a distancia', 
        precio: 300,
        destacado: true,
        descripcion: 'Limpieza y corte de magias potente. Elimina trabajos energéticos y bloqueos externos pesados.',
        categoria: 'Rituales y Hechizos de Altar'
    },

    // --- LIMPIEZAS ENERGÉTICAS ---
    { 
        id: 'equilibrado-chakras', 
        nombre: 'Equilibrado de Chakras y Sellado Áurico', 
        formato: 'Trabajo de altar a distancia', 
        precio: 90,
        descripcion: 'Alineación de puntos energéticos y protección del aura.',
        categoria: 'Limpiezas Energéticas'
    },
    { 
        id: 'limpieza-personal', 
        nombre: 'Limpieza Energética Personal', 
        formato: 'Trabajo de altar a distancia', 
        precio: 150,
        descripcion: 'Renueva tu campo energético y equilibra tu ser para sentirte más ligera.',
        categoria: 'Limpiezas Energéticas'
    },
    { 
        id: 'limpieza-espacios', 
        nombre: 'Limpieza Energética de Espacios', 
        formato: 'Trabajo de altar a distancia', 
        precio: 150,
        descripcion: 'Purifica y armoniza tu hogar o negocio eliminando estancamientos.',
        categoria: 'Limpiezas Energéticas'
    },
    { 
        id: 'limpieza-animales', 
        nombre: 'Limpieza Energética de Animales', 
        formato: 'Trabajo de altar a distancia', 
        precio: 150,
        destacado: true,
        descripcion: 'Protege, limpia y equilibra la energía de tu mascota.',
        categoria: 'Limpiezas Energéticas'
    },
    { 
        id: 'limpieza-magias', 
        nombre: 'Limpieza Energética de Magias (Oscuridad)', 
        formato: 'Trabajo de altar a distancia', 
        precio: 200,
        destacado: true,
        descripcion: 'Protégete de hechizos oscuros y corta de raíz cualquier brujería o entidad.',
        categoria: 'Limpiezas Energéticas'
    }
];