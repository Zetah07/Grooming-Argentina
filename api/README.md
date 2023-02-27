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

# newsLetter:
## Get
Para pedir todos los suscriptores a newsLetters:

```
/newsletter
```
Este methodo retornara un array con objetos suscriptores
Ejemplo: 

```
[
	{
		"_id": "63eee76acea11c3999ceb194",
		"fullName": "nombre completo",
		"email": "correo@correo.dominio",
		"createdAt": "2023-02-17T02:33:14.171Z",
		"updatedAt": "2023-02-17T02:33:14.171Z"
	},
	{
		"_id": "63eee797e499babeeb844f58",
		"fullName": "nombre completo 2",
		"email": "correo2@correo2.dominio",
		"createdAt": "2023-02-17T02:33:59.481Z",
		"updatedAt": "2023-02-17T02:33:59.481Z"
	}
]
```

## Post
Para añadir un suscriptor a las newsLetters se sebe pasar por body el nombre completo del suscriptor y el email
Por ejemplo:
```
/newsletter
BODY:
{
	"fullName" : "Nombre completo del usuario",
	"email": "correoUsuario@muestra.com"
}
```
Este respondera con un status 201

## Delete
Para borrar un suscriptor a las  newsLetters se debe pasar por body el email del suscriptor a borrar
Por ejemplo:
```
/newsletter
BODY:
{
	"email": "correoUsuario@muestra.com"
}
```
Este respondera con un status 200 incluso si el correo a borrar no esta registrado

# userStatus

## Get
Para pedir todos los usuarios registrados
```
/userstatus
```

Este respondera con un array de objetos de todos los userStatus y un status 200
Por ejemplo:
```
[
	{
		"_id": "63ed70786fd64d7fe0adebbf",
		"name": "nombre",
		"lastName": "apellido",
		"birthDate": "1970-01-01T00:00:22.222Z",
		"genre": "Masculino",
		"nationality": "Colombia",
		"province": "Antioquia",
		"location": "Medellin",
		"address": "direccion de muestra",
		"document": 11111111,
		"adjDocument": "document path",
		"phone": 22222222,
		"schooling": "Nivel de estudios",
		"profession": "Profesion",
		"email": "correoUsuario@muestra.com",
		"howKnowGrooming": "Como conocio grooming",
		"facebook": "link de facebook",
		"twitter": "link de twitter",
		"instagram": "link de instagram",
		"linkedIn": "link de linkedin",
		"CV": "CV path",
		"status": "pending",
		"howManyHours": 1987,
		"createdAt": "2023-02-15T23:53:28.279Z",
		"updatedAt": "2023-02-16T16:56:32.937Z"
	}
]
```


## Post
Para crear un nuevo userStatus se debe proporcionar toda la informacion del usuario
Esta peticion espera que el body sea tipo "multipart/form-data"  con 3 campos: "userRegister", "CV" ,"adjDocument".
El campo userRegister espera que su contenido sea un JSON con los datos del usuario en registro, mientras que CV y adjDocument espera un archivo tipo PDF.
Ejemplo de peticion con axios:

```
/userstatus

const sampleInfo = {
  "name": "nombres",
  "lastName": "apellidos",
  "birthDate": "1995-12-17T03:24:00",
  "genre": "genero",
  "nationality": "Nacionalidad",
  "province": "Provincia",
  "location": "Medellin",
  "address": "direccion de muestra",
  "document": 11111,
  "phone": 111111,
  "schooling": "Nivel de estudios",
  "profession": "Profesion",
  "email": "correoUsuario@muestra.com",
  "howKnowGrooming": "Como conocio grooming",
  "facebook": "link de facebook",
  "twitter": "link de twitter",
  "instagram": "link de instagram",
  "linkedIn": "link de linkedin",
  "howManyHours": 40
}

const formData = new FormData();
//CV and documentCopy are files
formData.append("CV", CV);
formData.append("documentCopy", documentCopy);
formData.set("userRegister", JSON.stringify(sampleInfo));
axios.post("apiPath/userstatus", formData, {
  headers: {
    "Content-Type": "multipart/form-data",
  },
}).then((res) => {
//Succes code here;
})
.catch((err) => {
//Error code here;
});

```

## Put


# Cursos

## Get
Para pedir todos los cursos:
```
/courses
```
Este respondera con un array de objetos cursos y el numero total de paginas
Por ejemplo:
```
{
	"maxPage": 2,
	"pagedArr": [
		{
			"_id": "63ee8cf344b6ba47bcfafa78",
			"title": "Video muestra1",
			"description": "Nueva description",
			"thumbnail": "https://i.vimeocdn.com/video/693747235-849707dc23c99fc43095504600b1e845aba6e8d0595bd6c9d21e095eb6f903a2-d_390x220",
			"link": "https://vimeo.com/264061964",
			"updatedAt": "2023-02-24T17:33:04.183Z"
		},
		{
			"_id": "63f077d4f992f78b09178998",
			"title": "el curso mas testeado",
			"description": "El fafa3",
			"thumbnail": "https://i.vimeocdn.com/video/701433851-ad4092f190bf9b216606508c1f9f0de896565d49000b0428d162c10e4ba6ce81-d_390x220",
			"link": "https://vimeo.com/266931123",
			"createdAt": "2023-02-18T07:01:40.333Z",
			"updatedAt": "2023-02-24T18:02:04.895Z"
		}
}

```
NOTA: por defecto estos vendran ordenados por fecha de creacion de mas reciente a mas antiguo (descendiente) y paginados de a 6 cursos por pagina

Si se desea ordenar los cursos de manera especifica se debera pasar por query el orden deseado
Este orden siempre sera relacionado a la fecha de creacion
Por ejemplo:
```
/courses?order=descending
/courses?order=ascending
```

Si se desea buscar un curso especifico se debe pasar por params el titulo del curso buscado
Por ejemplo:
```
/courses/curso%20buscado
```

Este retornara el primer curso que coincida en titulo con el enviado
Por ejemplo:
```
{
	"_id": "63eea2b3df81851336708c33",
	"title": "curso buscado",
	"description": "descripcion de muestra",
	"thumbnail": "thumbnail de muestra",
	"link": "link del video",
	"createdAt": "2023-02-16T21:40:03.403Z",
	"updatedAt": "2023-02-16T21:40:03.403Z"
}
```

Si se desea buscar un curso especifico se debe pasar por query el id del curso buscado
Por ejemplo:
```
/courses?id=63ee8cf344b6ba47bcfafa78
```
Este retornara el primer curso que coincida en titulo con el enviado
Por ejemplo:
```
{
	"_id": "63ee8cf344b6ba47bcfafa78",
	"title": "Video muestra1",
	"description": "Nueva description",
	"thumbnail": "https://i.vimeocdn.com/video/693747235-849707dc23c99fc43095504600b1e845aba6e8d0595bd6c9d21e095eb6f903a2-d_390x220",
	"link": "https://vimeo.com/264061964",
	"updatedAt": "2023-02-24T17:33:04.183Z"
}
```
Para el Paginado se pasa por query la propiedad page: con el numero de la pagina y perPage: con cuantos resultados por pagina en caso de no poner pagina por defecto sera la 1 y perPge por defecto sera 6
Ejemplo
```
/courses?page=4&perPage=2
```

```
{
	"maxPage": 5,
	"pagedArr": [
		{
			"_id": "63eea810004aa7ecd2ec383f",
			"title": "el curso mas clonado",
			"description": "El lorem ipsum mas multiplicativo",
			"thumbnail": "https://i.vimeocdn.com/video/697143807-2ff0c588b6209aa7951c64eb7f51e3447fb587763c9cd76d95d01bf9f4feda3b-d_390x220",
			"link": "https://vimeo.com/266448492",
			"createdAt": "2023-02-16T22:02:56.034Z",
			"updatedAt": "2023-02-24T17:59:02.945Z"
		},
		{
			"_id": "63eeac6aaea9166acca8e717",
			"title": "el curso mas testeado",
			"description": "El fafa3",
			"thumbnail": "https://i.vimeocdn.com/video/699388666-55772707637609305cc3c4898d0902a80c4459ae8c654be5397f20ee9eb2cffd-d_390x220",
			"link": "https://vimeo.com/268614303",
			"createdAt": "2023-02-16T22:21:30.817Z",
			"updatedAt": "2023-02-24T18:00:59.026Z"
		}
	]
}
```


## Post

Para crear un nuevo curso se debe enviar por body la informacion del curso
Por ejemplo:
```
/courses
BODY:
{
  "courseSent": {
    "title": "titulo de cursos",
    "description": "descripcion del curso",
    "thumbnail": "thumbnail",
    "link": "link del video"
  }
}
```
Este respondera con un status 201 y el curso creado
Por ejemplo:
```
{
	"title": "titulo de cursos",
    "description": "descripcion del curso",
    "thumbnail": "thumbnail",
    "link": "link del video"
	"_id": "63f077d4f992f78b09178998",
	"createdAt": "2023-02-18T07:01:40.333Z",
	"updatedAt": "2023-02-18T07:01:40.333Z"
}
```

## Put

Para modificar un curso se debe pasar por query el id del curso a cambiar y por body los valores a los que se desean cambiar
Por ejemplo:
```
/courses?id=63eea2b3df81851336708c33
BODY:
{
	"field":"title",
	"newValue": "Nuevo titulo"
}
```

Este respondera con el curso actualizado
Por ejemplo:
```
{
	"_id": "63eea2b3df81851336708c33",
	"title": "Nuevo titulo",
	"description": "descripcion del curso",
    "thumbnail": "thumbnail",
    "link": "link del video"
    "createdAt": "2023-02-16T21:37:25.496Z",
	"updatedAt": "2023-02-18T06:56:07.779Z"
}
```

Nota: los campos que se pueden actualizar son los mismo de su creacion (title, description, thumbnail, link)

# Auth

## /login
### post 

Para obtener token de acceso y generar token de refresh se debe pasar por body el usuario y la contraseña:
Por ejemplo:
```
/auth/login
BODY
{
  "username": "usuario",
  "password": "contraseña"
}
```
Y este retornara un accesToken:
```
{
	"accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6NjY2LCJpYXQiOjE2NzY3MDcyMzYsImV4cCI6MTY3NjcwOTAzNn0.fA4k9_OiX9s-Y4jppvHU_NePIedJL29s3y1DyYVy380"
}
```
## /logOut
### Get

Para hacer logOut y borrar el refreshToken
Por ejemplo:
```
/auth/logout
```
Este simplemente retornara un status(204)
## /refrefresh
### Get

Para refrescar el token de acceso
Por ejemplo:
```
/auth/refresh
```
Este devolvera un nuevo accesToken
Por ejemplo
```
{
	"accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6MTc5NzE2LCJpYXQiOjE2NzY1NjY1NTIsImV4cCI6MTY3NjU2ODM1Mn0.CD5c2zDu2gWnv6wHqHfCJ8i93haN2LYPkswO8WbjfQo"
}
```

# User

## Get
Para pedir todos los usuarios
Por ejemplo:
```
/users
```
Este devolvera un array de todos los usuarios
Por ejemplo:
```
[
    {
		"_id": "63efe815d893c5768281142c",
		"username": 11111111,
		"name": "nombre de muestra",
		"rol": "volunteer",
		"createdAt": "2023-02-17T20:48:21.735Z",
		"updatedAt": "2023-02-17T22:07:36.996Z"
	},
	{
		"_id": "63efece001511890baab4f3a",
		"username": 111111112,
		"name": "nombre de muestra",
		"rol": "user",
		"createdAt": "2023-02-17T21:08:48.879Z",
		"updatedAt": "2023-02-17T21:08:48.879Z"
	}
]
```
Para buscar por un atributo especifico es necesario pasar por body un objeto con la propiedad a buscar y que valor se busca
Es poduble buscar por las mismas propiedades que devuelve el metodo Get (_id ,username, name, rol, createdAt, updatedAt)
Por ejemplo:
```
/users
Body
{
    "rol": "user"
}
```
Este retornara un array de objeto que conincidieron con la busqueda 
Por ejemplo:
```
{
	"_id": "63efece001511890baab4f3a",
	"username": 111111112,
	"name": "nombre de muestra",
	"rol": "user",
	"createdAt": "2023-02-17T21:08:48.879Z",
	"updatedAt": "2023-02-17T21:08:48.879Z"
}
```

## Post 
Para crear un nuevo usuario se debe pasar por body la informacion del usuario
Por ejemplo:
```
/users
BODY
{
	"username": "11111",
	"password": "12345678",
	"name": "nombre de muestra",
    "rol": "admin"
}
```
Nota: el rol es opcional y pero por defecto se creara como rol user

Este devolvera un status 201 y un mensaje de confirmacion
Por ejemplo:
```
{
	"messege": "Usuario 11111 creado"
}
```
## Put
Para modificar eu usuario se debe pasar el usuario (numero de documento) y la/las propiedades a cambiar con su respectivo valor
Por ejemplo:
```
/users
BODY
{
	"user": 11111,
	"newPass": "nueva contraseña",
    "rol": "user",
    "name": "cambio de nombre de muestra"
}
```

Este respondera con un estatus 200 y un mensaje de confirmacion
Por ejemplo:
```
{
	"message": "se actualizo la informacion del usuario 11111"
}
```

## Delete
Para borrar un usuario solo se debe pasar el numero de documento

Por ejemplo:
```
/users
BODY
{
	"user": "11111",
}
```
Este respondera con un estatus 200 y un mensaje de confirmacion
Por ejemplo:

```
{
	"message": "Se ha borrado el usuario 11111"
}
```


## Documents

# Get
Para traer un documento se debe especificar cualDocumento y el numero de documento del usuario
Se puede consultar el "CV" o el "adJDocument"
Por ejemplo
```
/documents
BODY
{
	"adjDocument":"1111"
}
```
Este respondera con el archivo buscado