# Gestor de proyectos

Aplicación Next.js con App Router, TypeScript y Tailwind CSS, preparada para desplegarse en Vercel.

## Requisitos

- Node.js 20 o posterior
- PostgreSQL para implementar la persistencia

## Desarrollo

```bash
npm install
npm run dev
```

Abre `http://localhost:3000`.

## Arquitectura prevista

- `src/app`: presentación y route handlers de la API
- `src/components`: componentes reutilizables
- `src/services`: casos de uso y acceso a datos
- `src/models`: tipos y validaciones

## CRUD objetivo

- Proyectos
- Objetivos
- Materiales
- Colaboradores

## Producción

```bash
npm run build
npm start
```
