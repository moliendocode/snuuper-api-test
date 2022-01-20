# Proyecto realizado para el proceso de entrevistas para Snuuper.

Para usar esta aplicación se deben seguir los siguientes pasos:

-   Debes usar una base de datos MongoDB.

-   Instalar dependencias en el root del proyecto.

          yarn

-   En el archivo `.env` se deben configurar los campos **PORT**, **MONGO_URI** y **JWT_SECRET**. Por ejemplo:

          PORT=4000
          MONGO_URI=mongodb://USER:PASSWORD@IP:PORT/
          JWT_SECRET=snuuperbacan

-   Para compilar y ejecutar la aplicación usar:

          yarn start

Una vez seguidos estos pasos se pueden hacer las calls a la API a los siguientes endpoints:

        POST /auth/signin - Crear cuenta
        POST /auth/login - Ingresar
        GET /users - Listar usuarios - Debes estar logeado para usar este endpoint

### Como logear

1. Crear cuenta en `/auth/signin`, indicando **username**, **password** y **email**
2. Ingresar con tu cuenta en `/auth/login`, indicando **username** y **password**. Esto te respondera con un **token**.
3. El **token** que se te entregó debes usarlo como Bearer Token para poder usar el `/users` endpoint.
