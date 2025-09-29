# Headless WordPress + React + Vite + Tailwind + Vercel

![cover](https://head-less-wp.linuseast1wp.hustly.live/wp-content/uploads/2025/09/headless.png)

## 📖 Descripción

Este proyecto es una **demo de arquitectura Headless CMS** usando **WordPress solo como backend** y un frontend moderno en **React + Vite + Tailwind**, desplegado en **Vercel**.

👉 El contenido dinámico se gestiona en **WordPress** con **Advanced Custom Fields (ACF)**, y se consume en el frontend como **JSON vía REST API**.

---

## ⚡ Stack Tecnológico

- 📰 **WordPress (Headless)** — CMS clásico usado únicamente como backend.
- 🎛 **Advanced Custom Fields (ACF)** — campos personalizados para manejar la data.
- 🔌 **REST API** — datos expuestos en formato JSON.
- ⚛ **React + Vite** — frontend moderno y rápido.
- 🎨 **Tailwind CSS** — estilos utility-first para un diseño atractivo.
- ▲ **Vercel** — despliegue serverless con CI/CD desde GitHub.

---

## 🛠 Instalación y uso

### 1. Configuración de WordPress (Headless)

1. Instala WordPress en tu hosting o local (puedes usar Docker o LocalWP).
2. Crea un **theme en blanco** en `wp-content/themes/headless/` con solo 2 archivos:

**`style.css`**
```css
/*
Theme Name: Headless
Theme URI: https://example.com
Author: Tu nombre
Description: Theme vacío para Headless WordPress
Version: 1.0
*/
```
**`index.php`**
```php
<?php
// Theme vacío para modo headless
```
3. Instala WordPress en tu hosting o local (puedes usar Docker o LocalWP).
4. Instala solo el plugin ACF (Advanced Custom Fields).

Importar los campos de ACF
En el admin de WordPress:

Ve a Custom Fields → Herramientas.

Importa el archivo [acf-export-2025-09-29.json](https://head-less-wp.linuseast1wp.hustly.live/wp-content/uploads/2025/09/acf-export-2025-09-29.json)


### 2. Frontend con React + Vite + Tailwind

1. Clona este repo:
```bash
git clone https://github.com/orlandoDe/headless-wp-demo.git
cd headless-wp-demo
```
```bash
npm install
npm run dev
```

Hecho con ❤️ por @orlandoDe