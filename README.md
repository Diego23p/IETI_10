# 2.4 API de archivos MongoDB

API de Spring Boot que permite cargar y entregar archivos.

## Codigo de honor:
Debes seguir el Código de honor del ingeniero de sistemas para defender el estándar de integridad académica de la ECI:

* Tus respuestas a tareas, cuestionarios y exámenes deben ser tu propio trabajo (excepto para las tareas que permiten explícitamente la colaboración).

* No puedes compartir tus soluciones de tareas, cuestionarios o exámenes con otra persona a menos que el instructor lo permita explícitamente. Esto incluye cualquier cosa escrita por ti, como también cualquier solución oficial proporcionada por el docente o el monitor del curso.

* No puedes participar en otras actividades que mejorarán de manera deshonesta tus resultados o que mejorarán de manera deshonesta o dañarán los resultados de otras personas.

## Prerrequisitos

### Git

```
> git --version

git version 2.21.0.windows.1
```

### gradle

```
> gradle -version

------------------------------------------------------------
Gradle 6.6.1
------------------------------------------------------------

Build time:   2020-08-25 16:29:12 UTC
Revision:     f2d1fb54a951d8b11d25748e4711bec8d128d7e3

Kotlin:       1.3.72
Groovy:       2.5.12
Ant:          Apache Ant(TM) version 1.10.8 compiled on May 10 2020
JVM:          1.8.0_261 (Oracle Corporation 25.261-b12)
OS:           Windows 10 10.0 amd64
```

### npm

```
> npm -version

6.14.4
```

## Instalación

Para descargar localmente el repositorio se utiliza el comando como sigue:
```
git clone https://github.com/Diego23p/IETI_10.git
```

## Parte 1: implementar una API de carga de archivos

Devolver el archivo lion.jpeg solicitado en el endpoint

![](/img/1.jpg)

Implementar el método ```handleFileUpload``` que retorne la URL del recurso, usando el endpoint ```getFileByName```
```
@CrossOrigin("*")
@PostMapping("/files")
public String handleFileUpload(@RequestParam("file") MultipartFile file, RedirectAttributes redirectAttributes) throws IOException {

    //Stores the file into MongoDB
    gridFsTemplate.store(file.getInputStream(), file.getOriginalFilename(), file.getContentType());
    return "Your file can be found at: http://localhost:8080/api/files/"+file.getOriginalFilename();
}

```

## Parte 2: Integrar el "file uploader" con el proyecto React JS

Cargar el archivo ```galapagos.jpg``` y retornar la URL del recurso almacenado:

![](/img/2.jpg)

Busqueda del recurso por medio del endpoint ```getFileByName``` en el browser

![](/img/3.jpg)

Documento dentro de la colección:

![](/img/4.jpg)

