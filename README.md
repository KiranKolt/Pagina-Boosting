# LoL Boost & Cuentas 🎮

Página web profesional para servicios de **boosting**, **coaching** y **venta de cuentas** de League of Legends.

## 🌐 Demo en Vivo

Visita la página: [https://kirankolt.github.io/Pagina-Boosting/](https://kirankolt.github.io/Pagina-Boosting/)

## 📋 Descripción

Plataforma web moderna y profesional diseñada para ofrecer servicios premium de League of Legends, incluyendo:

- **Servicios de Boosting:** Ranked Solo/Duo, Flex, Wins Boost y Placement Matches
- **Coaching Personalizado:** Sesiones de entrenamiento con jugadores profesionales
- **Venta de Cuentas:** Cuentas verificadas de todos los rangos (Iron a Challenger)

## ✨ Características Principales

### 🎨 Diseño
- ✅ **Tema oscuro** inspirado en la estética de League of Legends
- ✅ **Diseño responsive** optimizado para móvil, tablet y desktop
- ✅ **Animaciones suaves** y transiciones fluidas
- ✅ **Paleta de colores temática:** Turquesa, dorado y tonos oscuros

### 🚀 Funcionalidades
- ✅ **Navegación suave** entre secciones
- ✅ **Menú hamburguesa** para dispositivos móviles
- ✅ **Sistema de filtros** para cuentas (por rango y precio)
- ✅ **Modal interactivo** con detalles de cuentas
- ✅ **Formulario de contacto** con validación
- ✅ **Notificaciones toast** para feedback del usuario
- ✅ **Efectos hover** y animaciones al hacer scroll

### 📦 Secciones

1. **Hero Section:** Presentación principal con llamadas a la acción
2. **Boosting:** 4 servicios de boosting con características y precios
3. **Coaching:** 3 paquetes de coaching (Básico, Premium, Elite)
4. **Venta de Cuentas:** Galería de cuentas con filtros interactivos
5. **Contacto:** Formulario funcional y datos de contacto
6. **Footer:** Información adicional y enlaces

## 📁 Estructura del Proyecto

```
Pagina-Boosting/
│
├── index.html              # Página principal
├── css/
│   └── style.css          # Estilos CSS con variables y responsive
├── js/
│   └── script.js          # JavaScript para funcionalidad interactiva
├── .gitignore             # Archivos ignorados por Git
└── README.md              # Este archivo
```

## 🛠️ Tecnologías Utilizadas

- **HTML5** - Estructura semántica
- **CSS3** - Estilos modernos con variables CSS, Grid y Flexbox
- **JavaScript (Vanilla)** - Funcionalidad interactiva sin frameworks

## 🎨 Personalización

### Cambiar Colores

Edita las variables CSS en `css/style.css`:

```css
:root {
    --color-primary: #0AC8B9;      /* Turquesa principal */
    --color-secondary: #C89B3C;    /* Dorado */
    --color-dark: #0A1428;         /* Fondo oscuro */
    /* ... más variables ... */
}
```

### Modificar Contenido

- **Precios:** Busca `$XX` en `index.html` y reemplaza con valores reales
- **Servicios:** Edita las tarjetas en las secciones correspondientes
- **Cuentas:** Agrega o modifica las tarjetas de cuentas en la sección `#cuentas`
- **Información de contacto:** Actualiza email, Discord y horarios

### Agregar Más Cuentas

Copia y modifica este bloque en `index.html`:

```html
<div class="account-card" data-rank="gold" data-price="low">
    <div class="account-rank gold">Gold I</div>
    <div class="account-image">
        <div class="rank-badge">🥇</div>
    </div>
    <div class="account-info">
        <h3 class="account-title">Cuenta Gold</h3>
        <div class="account-details">
            <p><strong>Rango:</strong> Gold I</p>
            <p><strong>LP:</strong> 95 LP</p>
            <p><strong>Campeones:</strong> 55+ desbloqueados</p>
            <p><strong>Skins:</strong> 12+ skins</p>
            <p><strong>BE:</strong> 8,000</p>
        </div>
        <div class="account-price">$45</div>
        <button class="btn btn-account">Ver Detalles</button>
    </div>
</div>
```

## 🚀 Despliegue

La página está desplegada automáticamente en **GitHub Pages**. Cualquier cambio que hagas en la rama `main` se reflejará automáticamente en 1-2 minutos.

### Actualizar la Página

```bash
git add .
git commit -m "Descripción de los cambios"
git push origin main
```

## 📱 Responsive Design

La página está optimizada para:
- 📱 **Móviles:** < 768px
- 📱 **Tablets:** 768px - 1024px
- 💻 **Desktop:** > 1024px

## 🎯 Próximas Mejoras

- [ ] Integración con sistema de pagos
- [ ] Panel de administración
- [ ] Sistema de autenticación de usuarios
- [ ] Chat en vivo
- [ ] Integración con API de Riot Games
- [ ] Sistema de reviews y calificaciones

## 📄 Licencia

Este proyecto es de uso libre para fines educativos y comerciales.

## 👤 Autor

**KiranKolt**
- GitHub: [@KiranKolt](https://github.com/KiranKolt)

---

⭐ Si te gusta este proyecto, dale una estrella en GitHub!

