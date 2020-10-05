# PagoDiario API

Code Challenge para PagoDiario con el stack MEAN. El código tiene comentarios de las partes que componen la aplicación y del por que se tomaron algunas decisiones.

## Dependencias

Se debe de tener un servidor de mongoDB corriendo localmente en el puerto por defecto: `27017`. O bien, modificar el archivo de configuracion `src/config/dev.js` y apuntarlo a `mongodb+srv://pagodiario:p4g0d14r10@cluster0.vmzhv.mongodb.net/pagodiario-prod` que es la instancia de mongoDB en Mongo Atlas.

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

Prueba que la entidad tenga el modelo definido en el documento de requerimientos:

```
npm test:models
```

#### Controladores

Prueba que la entidad tenga los métodos definidos para cada operación CRUD:

```
npm test:controllers
```

#### Rutas

Prueba que la entidad tenga definidos los endpoint/rutas para cada operación CRUD.:

```
npm test:routes
```

#### API

Prueba la API haciendo requests HTTP a cada endpoint

```
npm test:api
```

## Desplegue

Se desplegó una copia de la aplicación en la plataforma heroku: `https://pagodiario-api.herokuapp.com/api/v1/user`
