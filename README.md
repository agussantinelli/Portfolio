<h1 align="center">🚀 Portfolio - Agus Santinelli</h1>

<div align="center">
    <a href="https://github.com/agussantinelli/Portfolio" target="_blank">
        <img src="https://img.shields.io/badge/💻%20Repo%20Portfolio-Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Portfolio Repo Badge"/>
    </a>
    <a href="https://github.com/agussantinelli" target="_blank">
        <img src="https://img.shields.io/badge/👤%20Contacto-agussantinelli-000000?style=for-the-badge&logo=github&logoColor=white" alt="Contact Badge"/>
    </a>
</div>

<div align="center">
    <img src="https://img.shields.io/badge/Next.js-15+-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js Badge"/>
    <img src="https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript Badge"/>
    <img src="https://img.shields.io/badge/Material%20UI-6-007FFF?style=for-the-badge&logo=mui&logoColor=white" alt="MUI Badge"/>
    <img src="https://img.shields.io/badge/Framer%20Motion-11-F01F7A?style=for-the-badge&logo=framer&logoColor=white" alt="Framer Motion Badge"/>
    <img src="https://img.shields.io/badge/Mode-Dark-0a192f?style=for-the-badge" alt="Dark Mode Badge"/>
</div>

<div align="center">
  <img src="https://img.shields.io/badge/Status-En%20Desarrollo-green?style=for-the-badge" alt="Status Badge">
</div>

<p align="center">
  <b>Bienvenido a mi espacio profesional.</b><br>
  <i>Una vitrina digital diseñada para exhibir proyectos, aptitudes y trayectoria técnica.</i>
</p>

<hr>


<h2 align="left">🎯 Objetivo</h2>
<p>
  El propósito central de este proyecto es consolidar una página web <b>moderna, profesional y de alto rendimiento</b>. Está optimizada para funcionar como una carta de presentación impactante ante reclutadores y colaboradores dentro del ecosistema tecnológico.
</p>

<h2 align="left">🛠️ Stack Tecnológico</h2>

<table>
    <thead>
        <tr>
            <th>Componente</th>
            <th>Tecnología</th>
            <th>Notas</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><strong>Framework</strong></td>
            <td>Next.js 15+ (App Router)</td>
            <td>Generación estática (SSG) para SEO y performance.</td>
        </tr>
        <tr>
            <td><strong>UI Kit</strong></td>
            <td>Material UI (MUI) 6+</td>
            <td>Librería de componentes profesionales y accesibles.</td>
        </tr>
        <tr>
            <td><strong>Estilos</strong></td>
            <td>Emotion / CSS Modules</td>
            <td>Manejo de estilos basado en componentes.</td>
        </tr>
        <tr>
            <td><strong>Animaciones</strong></td>
            <td>Framer Motion</td>
            <td>Interacciones fluidas y transiciones premium.</td>
        </tr>
        <tr>
            <td><strong>Lenguaje</strong></td>
            <td>TypeScript 5</td>
            <td>Tipado estricto para un desarrollo más robusto.</td>
        </tr>
        <tr>
            <td><strong>Despliegue</strong></td>
            <td>GitHub Pages</td>
            <td>Hosting estático confiable y gratuito.</td>
        </tr>
    </tbody>
</table>

<h2 align="left">🚀 Propuesta de Valor</h2>

<table>
    <thead>
        <tr>
            <th>Área</th>
            <th>Característica</th>
            <th>Beneficio</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><strong>Diseño</strong></td>
            <td>Mobile First & Dark Mode</td>
            <td>Navegación impecable en cualquier dispositivo con estética moderna.</td>
        </tr>
        <tr>
            <td><strong>Performance</strong></td>
            <td>Static Rendering</td>
            <td>Carga instantánea y optimización SEO para buscadores.</td>
        </tr>
        <tr>
            <td><strong>Interacción</strong></td>
            <td>Framer Motion</td>
            <td>Feedback visual premium y transiciones suaves entre secciones.</td>
        </tr>
        <tr>
            <td><strong>Contenido</strong></td>
            <td>Showcase Dinámico</td>
            <td>Visualización clara de proyectos con filtrado por tecnologías.</td>
        </tr>
    </tbody>
</table>

<h2 align="left">✅ Roadmap de Desarrollo</h2>
<ul>
    <li>[x] 📱 <b>Diseño Responsivo:</b> Interfaz adaptada a cualquier dispositivo.</li>
    <li>[x] 📂 <b>Showcase de Proyectos:</b> Listado detallado de desarrollos destacados con datos reales.</li>
    <li>[x] 🧠 <b>Skills & Tech:</b> Sección dedicada a aptitudes y stack de herramientas.</li>
    <li>[ ] 📧 <b>Conectividad:</b> Formulario de contacto y enlaces directos a redes sociales. (En curso)</li>
</ul>

<h2 align="left">📦 Instalación</h2>

```bash
# Clonar el repositorio
git clone https://github.com/tuusuario/Portfolio.git

# Entrar al directorio
cd Portfolio

# Instalar dependencias
npm install
```

<h2 align="left">🚀 Cómo Correr la Aplicación</h2>

### Modo Desarrollo
```bash
npm run dev
```
El servidor se levantará en [http://localhost:3000](http://localhost:3000)

### Build de Producción
```bash
# Generar el build estático
npm run build

# El output estará en la carpeta /out
```

### Previsualizar el Build
```bash
# Instalar serve (solo la primera vez)
npm install -g serve

# Servir el build estático
serve out
```

<h2 align="left">📁 Estructura del Proyecto</h2>

```
Portfolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx      # Layout raíz con MUI Provider
│   │   ├── page.tsx        # Página principal
│   │   └── globals.css     # Estilos globales
│   ├── components/
│   │   ├── Hero.tsx        # Sección de presentación
│   │   └── Projects.tsx    # Showcase de proyectos
│   └── theme.ts            # Configuración del tema de MUI
├── next.config.js          # Configuración de Next.js
├── package.json
└── README.md
```

<h2 align="left">🌐 Deployment en GitHub Pages</h2>

Este proyecto está configurado para generar un export estático compatible con GitHub Pages:

1. Hacer push de tus cambios a GitHub
2. Configurar GitHub Actions (workflow incluido próximamente)
3. El sitio se deployará automáticamente en `https://tuusuario.github.io/Portfolio`


<hr>

<p align="center">
  Desarrollado con ❤️ por <b>Agus Santinelli</b>
</p>