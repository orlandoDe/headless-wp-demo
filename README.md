# Headless WordPress + React + Vite + Tailwind + Vercel

![cover](https://head-less-wp.linuseast1wp.hustly.live/wp-content/uploads/2025/09/headless.png)

## 📖 Descripción

Este proyecto es una **demo de arquitectura Headless CMS** usando **WordPress solo como backend** y un frontend moderno en **React + Vite + Tailwind**, desplegado en **Vercel**.

La idea principal es separar el **CMS** del **frontend**:

- **WordPress** se encarga de gestionar el contenido y exponerlo vía **REST API**.
- **React + Vite** consumen ese contenido y lo renderizan de forma rápida y optimizada.
- **Tailwind CSS** permite diseñar una interfaz atractiva con utilidades listas para usar.
- **Vercel** gestiona el deploy serverless con CI/CD automático desde GitHub.

👉 El contenido dinámico (ejemplo: stack tecnológico, timeline, demo URL) se gestiona en WordPress mediante **ACF (Advanced Custom Fields)**.

---

## ⚡ Stack Tecnológico

- 📰 **WordPress Headless** — CMS clásico pero usado únicamente como API.
- 🎛 **Advanced Custom Fields (ACF)** — para personalizar la información del proyecto.
- 🔌 **REST API** — para consumir el contenido en formato JSON.
- ⚛ **React + Vite** — frontend moderno, rápido y fácil de desplegar.
- 🎨 **Tailwind CSS** — diseño limpio, responsivo y estilizado.
- ▲ **Vercel** — despliegue automático desde GitHub con CI/CD.

---

## 🛠 Instalación y uso

1. Clona este repositorio:

   ```bash
   git clone https://github.com/orlandoDe/headless-wp-demo.git
   cd headless-wp-demo
