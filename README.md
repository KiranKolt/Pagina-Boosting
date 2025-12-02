# LoL Boost & Cuentas - Página Web

Página web profesional para servicios de boosting, coaching y venta de cuentas de League of Legends.

## 🚀 Cómo subir a GitHub Pages

### Opción 1: Desde la interfaz de GitHub (Recomendado para principiantes)

1. **Crea un repositorio en GitHub:**
   - Ve a [github.com](https://github.com) e inicia sesión
   - Haz clic en el botón "+" (arriba a la derecha) y selecciona "New repository"
   - Nombra tu repositorio (ej: `lol-boost-cuentas`)
   - Elige si será público o privado
   - **NO** marques "Initialize this repository with a README" (ya tenemos uno)
   - Haz clic en "Create repository"

2. **Sube tus archivos:**
   - En la página del repositorio, verás instrucciones
   - Si es la primera vez, usa estos comandos en tu terminal (desde la carpeta del proyecto):

```bash
git init
git add .
git commit -m "Initial commit: Página de boosting y venta de cuentas"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/TU_REPOSITORIO.git
git push -u origin main
```

   - Reemplaza `TU_USUARIO` y `TU_REPOSITORIO` con tus datos reales

3. **Activa GitHub Pages:**
   - Ve a la pestaña **Settings** de tu repositorio
   - En el menú lateral, busca **Pages**
   - En "Source", selecciona **main** branch
   - Haz clic en **Save**
   - Espera unos minutos y tu página estará disponible en:
     `https://TU_USUARIO.github.io/TU_REPOSITORIO/`

### Opción 2: Si ya tienes un repositorio Git

Si ya tienes un repositorio git inicializado, simplemente ejecuta:

```bash
# Agregar todos los archivos
git add .

# Hacer commit
git commit -m "Agregar página de boosting y venta de cuentas"

# Subir a GitHub (si ya tienes el remote configurado)
git push origin main

# Si no tienes el remote, agrégalo primero:
# git remote add origin https://github.com/TU_USUARIO/TU_REPOSITORIO.git
# git push -u origin main
```

Luego activa GitHub Pages desde Settings > Pages en GitHub.

## 📁 Estructura del Proyecto

```
/
├── index.html          # Página principal
├── css/
│   └── style.css      # Estilos
├── js/
│   └── script.js      # Funcionalidad JavaScript
└── README.md          # Este archivo
```

## ✨ Características

- ✅ Diseño responsive (móvil, tablet, desktop)
- ✅ Tema oscuro estilo League of Legends
- ✅ Sección de Boosting con 4 servicios
- ✅ Sección de Coaching con 3 paquetes
- ✅ Venta de cuentas con filtros interactivos
- ✅ Formulario de contacto funcional
- ✅ Navegación suave entre secciones
- ✅ Animaciones y efectos visuales

## 🎨 Personalización

### Cambiar colores
Edita las variables CSS en `css/style.css`:

```css
:root {
    --color-primary: #0AC8B9;    /* Color principal */
    --color-secondary: #C89B3C;  /* Color secundario */
    --color-gold: #F0E6D2;        /* Color dorado */
    /* ... más colores ... */
}
```

### Modificar contenido
- Edita `index.html` para cambiar textos, precios, servicios, etc.
- Los precios están marcados como `$XX` - reemplázalos con valores reales

## 📝 Notas Importantes

1. **Rutas de archivos:** Asegúrate de que las rutas en `index.html` sean correctas:
   - `css/style.css`
   - `js/script.js`

2. **GitHub Pages:** La página se actualiza automáticamente cuando haces push a la rama `main`

3. **Dominio personalizado:** Si tienes un dominio, puedes configurarlo en Settings > Pages

## 🔧 Solución de Problemas

### La página no carga los estilos
- Verifica que las rutas en `index.html` sean correctas
- Asegúrate de que los archivos CSS y JS estén en las carpetas correctas

### Los cambios no se reflejan
- GitHub Pages puede tardar 1-5 minutos en actualizar
- Limpia la caché del navegador (Ctrl+F5 o Cmd+Shift+R)
- Verifica que hayas hecho push correctamente

### Error 404
- Asegúrate de que el archivo se llame exactamente `index.html`
- Verifica que esté en la raíz del repositorio o en la carpeta configurada en Pages

## 📞 Soporte

Si tienes problemas, verifica:
1. Que todos los archivos estén en el repositorio
2. Que GitHub Pages esté activado en Settings
3. Que estés usando la rama `main` como fuente

---

¡Disfruta de tu nueva página web! 🎮

