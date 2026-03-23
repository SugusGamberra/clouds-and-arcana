export type CategoriaServicio =
  | 'Tarot y Guía Espiritual'
  | 'Magia Nórdica y Runas'
  | 'El Mundo de los Sueños'
  | 'Rituales y Hechizos de Altar'
  | 'Limpiezas Energéticas';

export interface Servicio {
  id: string;
  nombre: string;
  formato: string;
  precio: number;
  descripcion: string;
  categoria: CategoriaServicio;
  destacado?: boolean;
}
