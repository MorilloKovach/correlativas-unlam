# 🎓 Correlativas UNLaM

Una aplicación web interactiva diseñada para ayudar a los estudiantes de la **Universidad Nacional de La Matanza (UNLaM)** a planificar su carrera, visualizar sus materias y organizar sus próximos cuatrimestres de forma inteligente y dinámica.

![Correlativas UNLaM Banner](src/assets/hero.webp)

## 🚀 Características Principales

- **Visualización en Grafo**: Visualizá tu plan de estudios completo como un diagrama de flujo interactivo organizado por años y cuatrimestres (potenciado por React Flow).
- **Gestión de Progreso**: Marcá qué materias ya tenés aprobadas y qué materias estás cursando. El grafo desbloqueará automáticamente las correlativas disponibles.
- **Múltiples Carreras Soportadas**:
  - Ingeniería en Informática
  - Ingeniería Civil
  - Ingeniería Mecánica
  - Ingeniería Electrónica
  - Ingeniería Industrial
  - Arquitectura
  - Abogacía
- **Recomendaciones Inteligentes**: Sistema que evalúa la "dificultad" del semestre que te armaste y te recomienda qué materias clave deberías cursar para destrabar más ramas de la carrera.
- **Modo Invitado & Progreso en la Nube**:
  - Probá la plataforma sin necesidad de registrarte usando el *Modo Invitado* (los datos son efímeros).
  - Iniciá sesión con tu cuenta de Google para guardar tu progreso en la nube de forma segura y acceder desde cualquier dispositivo.
- **Sistema de Amigos**: Agregá a tus compañeros de cursada para ver en qué estado están y ayudarse a planificar cuatrimestres juntos.

## 🛠️ Tecnologías Utilizadas

- **Frontend**: React 18 + TypeScript + Vite
- **Estilos**: Tailwind CSS + Lucide React (Iconos)
- **Visualización de Grafos**: React Flow
- **Backend & Auth**: Firebase (Autenticación con Google y Firestore para base de datos en tiempo real)

## 💻 Desarrollo Local

Para correr este proyecto en tu propia máquina, seguí estos pasos:

### 1. Clonar el repositorio
```bash
git clone https://github.com/TU_USUARIO/correlativas-unlam.git
cd correlativas-unlam
```

### 2. Instalar dependencias
```bash
npm install
```

### 3. Configurar variables de entorno
Creá un archivo `.env` en la raíz del proyecto y agregá tus credenciales de Firebase:
```env
VITE_FIREBASE_API_KEY=tu_api_key
VITE_FIREBASE_AUTH_DOMAIN=tu_dominio.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=tu_project_id
VITE_FIREBASE_STORAGE_BUCKET=tu_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=tu_sender_id
VITE_FIREBASE_APP_ID=tu_app_id
VITE_FIREBASE_MEASUREMENT_ID=tu_measurement_id
```

### 4. Iniciar el servidor de desarrollo
```bash
npm run dev
```
La aplicación estará corriendo en `http://localhost:5173/`.

## 🌐 Despliegue en Vercel

Este proyecto está preparado para ser desplegado fácilmente en [Vercel](https://vercel.com/):
1. Importá el repositorio de GitHub en Vercel.
2. Asegurate de cargar todas las variables del `.env` en la sección **Environment Variables**.
3. ¡Desplegá! 
4. **Importante:** No olvides registrar el nuevo dominio `.vercel.app` en los **Authorized domains** de la sección Authentication en tu consola de Firebase.

## 🤝 Contribuir

¡Las pull requests son bienvenidas! Si sos de otra carrera de la UNLaM y querés sumar tu plan de estudios, o si encontrás algún error de correlatividades, podés clonar el repositorio, agregar los datos en `src/data/carreras` y armar un PR.

## 📝 Licencia

Este es un proyecto comunitario y no oficial, creado por y para estudiantes de la Universidad Nacional de La Matanza.
