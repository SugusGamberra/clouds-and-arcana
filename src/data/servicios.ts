import type { ServicioTarot } from '../types';

export const serviciosTarot: ServicioTarot[] = [
    { 
        id: 'tirada-express', 
        nombre: 'Tirada Express (1 pregunta)', 
        formato: 'Audio + Foto', 
        precio: '5€',
        descripcion: 'Ideal para dudas rápidas y concretas. Recibe una respuesta clara directamente en tu correo.'
    },
    { 
        id: 'consejo-runico', 
        nombre: 'Consejo Rúnico', 
        formato: 'Audio + Foto', 
        precio: '10€',
        descripcion: 'Las antiguas runas vikingas te guían. Un consejo ancestral para desbloquear tu camino actual.'
    },
    { 
        id: 'analisis-sueno', 
        nombre: 'Análisis de Sueño', 
        formato: 'PDF + Audio detallado', 
        precio: '20€',
        descripcion: 'Descifra los mensajes de tu subconsciente. Analizo la simbología espiritual de tus sueños.'
    },
    { 
        id: 'lectura-profunda', 
        nombre: 'Lectura Profunda Tarot', 
        formato: 'Vídeo', 
        precio: '25€',
        descripcion: 'Exploramos pasado, presente y futuro. Una sesión completa para entender tu situación de vida.'
    },
    { 
        id: 'pack-reina-oros', 
        nombre: 'Pack Reina de Oros', 
        formato: 'Vídeo de Tarot y Runas + PDF con guía y rituales', 
        precio: '50€',
        destacado: true,
        descripcion: 'La experiencia mística definitiva. Incluye lectura completa, consejo de runas y un ritual personalizado para tu caso.'
    }
];