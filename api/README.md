# Documentación

## Variables de entorno:
```env
MONGO_DB_URI= connecction String from Atlas
```
# Peticiones:
# Noticias:
## GET:
- Para traer todas :
```news
/news
```
- Para traer una noticia por ID:
```news
/news?id={id}
ejemplo:
/news?id=8888888
```
- Para traer una o más noticias que tengan un título relacionado con el nombre dado:
```news
/news?name={name}
ejemplo:
/news?name=test
```
- Para filtrar por categoria y provincia/Locación:
```news
/news?categoria={categoria}&provinciaOLocacion={categoria}
ejemplo:
/news?categoria=test&provinciaOLocacion=Un+lugar+lejano
```
- Para filtrar solo por categoria:
```news
/news?categoria={categoria}
ejemplo:
/news?categoria=test
```
- Para filtrar solo por provincia o locación:
```news
/news?provinciaOLocacion={provincia o locación}
ejemplo:
/news?categoria=test
```
## POST:
La solicitud se pasa a la ruta principal de noticias:
```news
/news
```
Aquí esta el listado de párametros que son obligatorios y deben pasarse por body:
```news
title: String,
description: String,
img: String,
category: String,
```
Aqui el listado de párametros que son opcionales:
```news
link: String,
provinceOrLocation: String,
```
ejemplo en un JSON:
```
{
    "title": "Noticia",
    "description": "Una descripción de prueba",
    "img": "https:imgDePrueba.jpg",
    "category": "Social",
    "link": "https:noticiadePrueba/",
    "provinceOrLocation": "Argentina",
}
```
## PUT:
Para modificar alguna noticia se debe pasar el id por param a la ruta principal:
```news
/news/{id}
ejemplo:
/news/8888888
```
Se debe pasar por body el o los parametros a modificar (mirar listado de parametros arriba en POST):

Ejemplo de una modificación en un JSON:
```
{
    "description": "Cambio en la descripcioón de prueba",
    "img": "https:otraImagenDePrueba.jpg",
}
```