<div align="center">
  <img src="public/favicon.png" alt="C&A Logo" width="120" />

  # Clouds & Arcana ☁️
  
  <p>
    Portal místico dedicado al negocio <strong>Clouds & Arcana</strong>.<br>
    Estética <em>dreamy & ethereal</em>, lógica robusta en Astro y arquitectura basada en datos.
  </p>

  ![Astro](https://img.shields.io/badge/Astro-BC52EE?style=for-the-badge&logo=astro&logoColor=white)
  ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
  ![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
</div>

<br />

## 🔮 Sobre el Proyecto

**Clouds & Arcana** es una plataforma web diseñada para un negocio de lectura de tarot, runas e interpretación espiritual de sueños. 

El proyecto busca ofrecer un refugio digital: un entorno visualmente relajante (Glassmorphism) donde los usuarios pueden consultar los servicios de la marca, leer el oráculo y recibir un consejo diario interactivo mediante una baraja de tarot programada en TypeScript.

### ✨ Características Principales

* **🎨 Diseño Místico (Glassmorphism):** Interfaz inmersiva inspirada en las nubes, con efectos de desenfoque, bordes suaves y una paleta de colores tierra y rosados (`#cfb4b8`).
* **🃏 Oráculo Interactivo:** Sistema de cartas de tarot funcional con lógica de persistencia en `localStorage` (un mensaje por día) y animaciones 3D de giro.
* **⚡ Rendimiento Extremo:** Construido con **Astro**, logrando una carga instantánea y un SEO optimizado para servicios espirituales.
* **📬 Sistema de Reservas:** Integración dinámica de servicios para facilitar la contratación mediante formularios personalizados.
* **🌙 El Oráculo (Blog):** Sistema de contenidos modular para compartir sabiduría y lecturas de redes sociales.

---

## 🛠️ Stack Tecnológico

Este grimorio digital ha sido construido bajo los estándares modernos de desarrollo web:

| Tecnología | Uso |
| :--- | :--- |
| **Astro 4.x** | Framework de islas para un rendimiento óptimo y carga de JS bajo demanda. |
| **TypeScript** | Tipado estático para una lógica de barajas y servicios libre de errores. |
| **Tailwind CSS** | Estilizado atómico y responsive utilizando variables de color personalizadas. |
| **Iconografía SVG** | Iconos vectoriales personalizados (coronas, lunas, runas) para una carga ultra rápida. |
| **Lucide Icons** | Iconografía complementaria consistente y minimalista. |

---

## 📈 Arquitectura y Escalabilidad

Uno de los pilares de **Clouds & Arcana** es que el contenido es agnóstico a la programación. El diseño sigue el patrón de **Separación de Preocupaciones**:

1. **Datos**: Los servicios, descripciones y el mazo de tarot se gestionan en archivos `.ts` independientes.
2. **Lógica**: El motor de robo de cartas y cálculo de rutas de imágenes es totalmente dinámico.
3. **Contenido**: El blog utiliza Markdown/MDX para una escalabilidad sencilla.

**Ejemplo de flujo de expansión:**
> *¿Quieres añadir un nuevo servicio?* > Basta con añadir un objeto al array en `servicios.ts`. La web generará automáticamente la tarjeta, el precio, la descripción y el enlace de reserva sin tocar el HTML.

---

## 🚀 Instalación en Local

Si quieres desplegar este portal místico en tu entorno de desarrollo:

1.  **Clona el repositorio:**
    ```bash
    git clone https://github.com/sugusgamberra/clouds-arcana.git
    ```

2.  **Instala las dependencias:**
    ```bash
    npm install
    ```

3.  **Inicia el servidor de desarrollo:**
    ```bash
    npm run dev
    ```

4.  **Build de producción:**
    ```bash
    npm run build
    ```

---

<div align="center">
  <p>Hecho con magia, café y la energía del sol de Cádiz</p>
  <p><em>"Lo que está arriba es como lo que está abajo, para realizar el milagro de una sola cosa... y de una buena web."</em></p>
</div>