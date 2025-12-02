# Comandos para subir a GitHub Pages

## Si es la primera vez (nuevo repositorio):

```bash
# 1. Inicializar git (si no está inicializado)
git init

# 2. Agregar todos los archivos
git add .

# 3. Hacer commit
git commit -m "Initial commit: Página de boosting y venta de cuentas LoL"

# 4. Cambiar a rama main (si es necesario)
git branch -M main

# 5. Agregar el repositorio remoto (REEMPLAZA con tu usuario y repositorio)
git remote add origin https://github.com/TU_USUARIO/TU_REPOSITORIO.git

# 6. Subir los archivos
git push -u origin main
```

## Si ya tienes un repositorio:

```bash
# 1. Agregar archivos
git add .

# 2. Hacer commit
git commit -m "Agregar página de boosting y venta de cuentas"

# 3. Subir cambios
git push origin main
```

## Después de subir:

1. Ve a tu repositorio en GitHub
2. Haz clic en **Settings** (Configuración)
3. En el menú lateral, busca **Pages**
4. En "Source", selecciona **main** branch
5. Haz clic en **Save**
6. Espera 1-2 minutos
7. Tu página estará en: `https://TU_USUARIO.github.io/TU_REPOSITORIO/`

