# Trabajo Practico - Backend

_**PUNTO 1 - Lista de Tareas (Backend)**_

Este es el backend de una aplicación de lista de tareas. Proporciona una API RESTful para manejar tareas, utilizando MongoDB Atlas como base de datos en la nube.

## Requisitos Previos

_Asegúrate de tener [Node.js](https://nodejs.org/) instalado en tu máquina._

_Configuración de MongoDB Atlas:_

1. Regístrate en MongoDB Atlas: [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Crea un clúster MongoDB Atlas.
3. Configura tu clúster con la región de alojamiento, el tamaño de la instancia, la configuración de replicación, etc.
4. Obtén la cadena de conexión de tu clúster desde MongoDB Atlas.

## Comenzando 🚀

_Clona el proyecto_
```
git clone https://github.com/kstephantorres/01-lista-de-tareas-be.git
``` 

_Instala las dependencias_

```
cd 01-lista-de-tareas-be
npm install
```

_Crea un archivo `.env` en el directorio raíz del proyecto y configura las variables de entorno necesarias. Ejemplo:_

```
MONGODB_URI=<cadena_de_conexión_de_MongoDB_Atlas>
```

_Para ejecutar el proyecto en un entorno de desarrollo:_
  
```
npm run dev
```

## Despliegue 📦

_[Deploy en Vercel](https://01-lista-de-tareas-be.vercel.app/)_

## Autor ✒️

* **Torres Flores Kevin Stephan** - *Github* - [kstephantorres](https://github.com/kstephantorres)
