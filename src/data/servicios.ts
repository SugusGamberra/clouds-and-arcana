import type { ServicioTarot } from '../types';

export const serviciosTarot: ServicioTarot[] = [
    { 
        id: 'si-o-no', 
        nombre: 'Péndulo de Nubes (Sí o No)', 
        formato: 'Respuesta directa + Foto', 
        precio: '1€',
        descripcion: 'Una única carta para darte un SÍ o un NO rotundo a esa duda que te ronda la cabeza. Rápido y sin rodeos.'
    },
    { 
        id: 'tirada-express', 
        nombre: 'Tirada Express (1 pregunta)', 
        formato: 'Audio + Foto', 
        precio: '5€',
        descripcion: 'Ideal para dudas rápidas y concretas. Recibe una respuesta clara directamente en tu correo.'
    },
    { 
        id: 'talisman-runico', 
        nombre: 'Talismán Rúnico Digital', 
        formato: 'Imagen descargable', 
        precio: '5€',
        descripcion: 'Un sigilo o bindrune personalizado creado con tu energía para usar de fondo de pantalla como protección o atracción.'
    },
    { 
        id: 'sos-examenes', 
        nombre: 'SOS Época de Exámenes', 
        formato: 'Audio motivacional + Foto', 
        precio: '8€',
        descripcion: 'Lectura enfocada en darte claridad, calmar los nervios y ver las energías ante un proyecto, entrega o examen importante.'
    },
    { 
        id: 'consejo-runico', 
        nombre: 'Consejo Rúnico', 
        formato: 'Audio + Foto', 
        precio: '10€',
        descripcion: 'Las antiguas runas vikingas te guían. Un consejo ancestral para desbloquear tu camino actual.'
    },
    { 
        id: 'guia-espiritual', 
        nombre: 'Mensaje de tu Guía Espiritual', 
        formato: 'Audio + Foto', 
        precio: '12€',
        descripcion: 'Para cuando te sientes perdida. ¿Qué necesitas saber hoy? ¿Qué te intenta decir el universo que no estás viendo?'
    },
    { 
        id: 'vinculos', 
        nombre: 'Tirada de Vínculos y Conexiones', 
        formato: 'Audio detallado + Foto', 
        precio: '15€',
        descripcion: 'Enfocada en el amor y las relaciones. Descubre qué pasa con esa persona especial y hacia dónde va el vínculo.'
    },
    { 
        id: 'analisis-sueno', 
        nombre: 'Análisis de Sueño', 
        formato: 'PDF + Audio detallado', 
        precio: '20€',
        descripcion: 'Descifra los mensajes de tu subconsciente. Analizo la simbología espiritual de tus sueños más profundos.'
    },
    { 
        id: 'lectura-profunda', 
        nombre: 'Lectura Profunda Tarot', 
        formato: 'Vídeo', 
        precio: '25€',
        descripcion: 'Exploramos pasado, presente y futuro. Una sesión completa para entender tu situación de vida.'
    },
    { 
        id: 'rueda-año', 
        nombre: 'La Rueda del Año', 
        formato: 'PDF extenso + Fotos', 
        precio: '35€',
        descripcion: 'Un mapa energético mes a mes desde tu cumpleaños o inicio de año. 12 cartas para guiarte en todo tu ciclo.'
    },
    { 
        id: 'pack-reina-oros', 
        nombre: 'Pack Reina de Oros', 
        formato: 'Vídeo (Tarot y Runas) + PDF', 
        precio: '50€',
        destacado: true,
        descripcion: 'La experiencia mística definitiva. Incluye lectura completa, consejo de runas y un ritual personalizado para tu caso.'
    }
];