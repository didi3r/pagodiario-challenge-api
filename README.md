# PagoDiario API

Code Challenge para PagoDiario con el stack MEAN.

## Dependencias

Se debe de tener un servidor de mongoDB corriendo localmente en el puerto por defecto: `27017`

Para descargar las dependencias:

```
npm install
```

Una vez descargadas, ejecutar los siguientes comandos para hacer el build y levantar el servidor en el puerto `3000`:

```
npm build
npm start
```

La applicacion deberia de estar corriendo en: `http://localhost:3000`.

## Unit Tests

Para ejecutar los unit test, se ejecutan los siguientes comandos:

#### Modelos

Tests relacionados a los modelos de las entidades (User) definidos en los requerimientos:

```
npm test:models
```

#### Controladores

Prueba que cada entidad tenga definidas cada operación CRUD:

```
npm test:routes
```

#### Rutas

Prueba que cada entidad tenga definidos los endpoint/rutas para cada operación CRUD.:

```
npm test:routes
```

#### API

Prueba las api haciendo request HTTP a cada endpoint

```
npm test:api
```
