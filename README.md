# Prueba técnica - API Node.js + Express

API REST para procesamiento y transformación de cadenas de texto, desarrollada con Node.js y Express.

## Instalación

```bash
pnpm install
```

## Ejecución

Desarrollo:

```bash
pnpm dev
```

Ejecución normal:

```bash
pnpm start
```

Por defecto, la API se ejecuta en:

```text
http://localhost:3000
```

## Endpoints

### POST `/text/process`

Procesa grupos de texto entre paréntesis comenzando por los más internos.

**Request**

```http
POST http://localhost:3000/text/process
Content-Type: application/json
```

```json
{
  "text": "(Hola (Mundo))"
}
```

**Response**

```json
{
  "result": [
    "(Hola (Mundo))",
    "(Hola odnuM)",
    "Mundo aloH"
  ]
}
```

---

### POST `/text/transform`

Realiza:

* Capitalización alternada.
* Reemplazo de vocales.
* Detección de palabras que aparecen una sola vez.

**Request**

```http
POST http://localhost:3000/text/transform
Content-Type: application/json
```

```json
{
  "text": "Hello world! This is a test. Hello again."
}
```

**Response**

```json
{
  "alternating_caps": "HeLlO WoRlD! ThIs Is A TeSt. HeLlO AgAiN.",
  "vowel_replacement": "Hillu wurld! Thos os e tist. Hillu egeon.",
  "unique_words": [
    "world",
    "This",
    "is",
    "a",
    "test",
    "again"
  ]
}
```

Para el reemplazo de vocales se utilizó la regla indicada en el ejercicio:

```text
a → e
e → i
i → o
o → u
u → a
```

## Documentación de la API

Swagger:

- Producción: https://tu-proyecto.vercel.app/api-docs
- Local: http://localhost:3000/api-docs

## Tests

```bash
pnpm test
```

Los tests están implementados con Vitest y Supertest.

## Producción

```text
https://URL-REAL.vercel.app
```
