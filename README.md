# Legacy Quality API

REST API desarrollada con Node.js, Express y MongoDB para la gestión de inspecciones agrícolas.

## Características

- CRUD completo de inspecciones
- Arquitectura modular
- Autenticación JWT
- Middleware de validación
- Logging HTTP con Morgan
- Variables de entorno
- Persistencia con MongoDB
- Contenedorización con Docker
- Multi-container architecture con Docker Compose

---

# Tecnologías utilizadas

- Node.js
- Express.js
- MongoDB
- Mongoose
- Docker
- Docker Compose
- JWT
- Morgan
- Postman
- Git/GitHub

---

# Arquitectura

```text
Postman
   ↓
Node.js API
   ↓
Docker Container
   ↓
MongoDB Container

# Cómo utilizar la API

---

# 1. Clonar repositorio

```bash
git clone https://github.com/JulioNov-cmd/legacy-quality-api.git
```

---

# 2. Entrar al proyecto

```bash
cd legacy-quality-api
```

---

# 3. Instalar dependencias

```bash
npm install
```

---

# 4. Configurar variables de entorno

Crear archivo `.env`

```env
PORT=3000
MONGO_URI=mongodb://mongo:27017/legacy_quality_db
JWT_SECRET=mySuperSecretKey123
```

---

# 5. Levantar aplicación con Docker

Asegurarse de tener Docker Desktop ejecutándose.

Ejecutar:

```bash
docker compose up --build
```

---

# 6. Verificar contenedores

```bash
docker ps
```

Debe mostrar:

- legacy-quality-api
- mongodb

---

# 7. Probar API

Abrir navegador o Postman:

```text
http://localhost:3000
```

---

# 8. Autenticación JWT

## Login

### Endpoint

```http
POST /auth/login
```

### URL

```text
http://localhost:3000/auth/login
```

### Body

```json
{
  "username": "admin",
  "password": "123456"
}
```

---

# 9. Obtener Token

La API responderá:

```json
{
  "message": "Login exitoso",
  "token": "eyJhbGciOi..."
}
```

Copiar el valor del token.

---

# 10. Consumir rutas protegidas

## Endpoint protegido

```http
GET /inspections
```

---

# 11. Agregar Authorization Header

En Postman:

| KEY | VALUE |
|---|---|
| Authorization | Bearer TU_TOKEN |

Ejemplo:

```text
Bearer eyJhbGciOiJIUzI1Ni...
```

---

# 12. CRUD de inspecciones

## Obtener inspecciones

```http
GET /inspections
```

---

## Crear inspección

```http
POST /inspections
```

Body:

```json
{
  "product": "Mango",
  "temperature": 5,
  "quality": "Premium"
}
```

---

## Actualizar inspección

```http
PUT /inspections/:id
```

---

## Eliminar inspección

```http
DELETE /inspections/:id
```

---

# 13. Detener contenedores

```bash
docker compose down
```

---

# Arquitectura del proyecto

```text
Postman
   ↓
Node.js API
   ↓
Docker Container
   ↓
MongoDB Container
```