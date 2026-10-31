# Editor de Vídeo con IA 🎬⚡

Sistema integral de edición y montaje de vídeo profesional asistido por IA (optimizado para **Claude Code**, **Antigravity** y asistentes basados en agentes).

Convierte a tu asistente en un **editor de vídeo experto con criterio propio**: corta silencios, limpia la voz, genera motion graphics programados, subtítulos de énfasis sincronizados y diseño sonoro siguiendo las reglas de retención de audiencia para YouTube y redes sociales, entregando un kit por capas listo para **CapCut** o cualquier editor profesional.

---

## 🚀 Primera Ejecución y Onboarding Automático

Este repositorio está completamente limpio y preparado para un usuario nuevo.

Cuando abras este entorno de trabajo y ejecutes la skill por primera vez (o al escribir `configura mi perfil`), **la skill reconocerá automáticamente que es la primera vez que se ejecuta** e iniciará un flujo interactivo de configuración:

1. **Objetivo y Canal:** Te preguntará qué tipo de contenido creas (YouTube largo, Reels/TikTok/Shorts, VSL, vlogs, tutoriales) y qué tono buscas (cercano, técnico, enérgico, sobrio).
2. **Branding e Identidad Visual:** Configurará tu paleta de colores (roles de Fondo, Texto, Método, Acento), tus tipografías y te indicará cómo añadir tu logo (`logo.png`) y LUTs en `branding/`.
3. **Formatos y Ritmo:** Calibrará la cadencia de cortes, dinámica de zooms y estilo de subtítulos.
4. **Diseño Sonoro:** Establecerá el nivel de presencia de los efectos de sonido y la música.
5. **Generación del Perfil:** Creará y guardará tu `perfil-creador.md` personalizado para que todas las futuras ediciones mantengan una identidad visual y narrativa coherente.

---

## 📁 Estructura del Espacio de Trabajo

```text
├── .claude/
│   └── skills/           # Acceso directo para Claude Code
├── skills/               # Paquete completo con 34 skills especializadas
├── templates/            # Plantillas maestras (perfil, hoja de edición, fichas)
├── branding/             # Tu logo.png, fuentes personalizadas y LUTs (.cube)
├── brutos/               # Tus vídeos originales sin editar (nunca se modifican)
├── recursos/             # B-roll, música y sfx/ (pack de 19 sonidos sintetizados incluido)
├── referencias/          # Vídeos de otros creadores para analizar su estilo
├── proyectos/            # Carpetas de trabajo generadas por cada vídeo
├── motion/               # Motor de gráficos y motion graphics en Remotion (React)
├── .herramientas/        # Scripts de entorno y configuración local
├── .gitignore            # Exclusión de archivos pesados y datos temporales
└── README.md
```

---

## 🛠️ Cómo Funciona el Flujo de Edición

1. **Ingesta:** Coloca tu vídeo grabado en `brutos/`.
2. **Orden de inicio:** Escribe en tu terminal o asistente:
   > *"Edita este vídeo"*
3. **Plan de Edición (Fase 1):** La IA analiza el transcript y redacta un `PLAN.md` segundo a segundo detallando cada corte, cada zoom, cada gráfico animado y cada efecto de sonido con su justificación de retención.
4. **Punto de control:** Revisas y apruebas el plan (o ajustas lo que quieras).
5. **Ejecución automática:** La skill ejecuta las fases:
   - Corte de silencios y tomas falsas.
   - Limpieza y ecualización de voz.
   - Generación de zooms progresivos y dinámicos.
   - Renderizado de motion graphics con el motor Remotion (`motion/`).
   - Generación de subtítulos de impacto y archivo `.srt`.
   - Colocación de efectos de sonido (`sfx/`).
6. **Entrega:** En `proyectos/<nombre>/entrega/` obtienes:
   - El vídeo previo de revisión (`revision.mp4`).
   - Las capas independientes listas para arrastrar a **CapCut** (solo te faltará aplicar tu LUT y música de fondo).

---

## 📦 Ecosistema de Skills Incluidas

El directorio `skills/` contiene una suite completa de habilidades modulares:
* **`editor-video`:** Orquestador principal con criterio de retención y control de calidad.
* **`planificador-video`:** Redacción de escaletas, puntuación de frases clave y mapas de atención.
* **Remotion Suite (`remotion-*`):** 12 skills para renderizado, subtitulado y animación basada en React.
* **HyperFrames Suite:** Gráficos procedurales y tipografía en movimiento.
* **Motion Design Principles:** Reglas de timing, curvas de animación, composición de plano y sincronización con el beat de la música (`beat-sync-editing`).
* **`cut-video` & `video-use`:** Herramientas de transcripción y corte preciso.

---

## 🔒 Privacidad y Ejecución Local

* **100% Local:** No requiere suscripciones a APIs externas ni servicios de terceros. Opera localmente utilizando FFmpeg y Whisper.
* **Cero Telemetría:** Toda analítica o telemetría externa ha sido desactivada por defecto. Ningún dato ni metadato sale de tu equipo.

---

## ⚙️ Requisitos del Sistema

* **Node.js 18+** (para renderizado de motion graphics con Remotion)
* **FFmpeg 6+** (instalado en el PATH del sistema)
* **Python 3.10+** (con `numpy` para cálculo de curvas de cámara y audio)
* **Transcriptor de audio:** Whisper / WhisperX local recomendado
* **CapCut** (o software NLE compatible) para el ensamble final del kit por capas

---

## 📄 Licencia

Distribuido bajo licencia MIT. Consulta el archivo `LICENSE` para más detalles.
