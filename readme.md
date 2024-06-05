Comenzando
Para comenzar con este proyecto, clona el repositorio e instala las dependencias necesarias.

instalación:

node version v18.19.1

```
git clone <url_del_repositorio>
```

```
npm install
```


Configuración
La configuración para el entorno de pruebas se almacena en un archivo config.json. Este archivo contiene las siguientes propiedades:

Aquí tienes un ejemplo de un archivo config.json:

```
{
    "sandbox": {
        "urlStart": "https://bkfb-",
        "sandboxNumber": "003"
    },
    "urls": {
      "home": ".dx.commercecloud.salesforce.com/s/sss/home",
      "inicioSesion": ".dx.commercecloud.salesforce.com/s/sss/login.html"
    },
    "credentials": {
      "nombreUsuario": "usuario",
      "contraseña": "contraseña"
    }
}
```
Conforme el proyecto crezca, se añadiran en urls, las que estemos interesados en seguir regresiones visuales.


Ejecución de pruebas

Nos ponemos por ejemplo en la rama develop, se hace un npm run build:data en el proyecto sfcc nos aseguramos que se suban los ficheros 
y hacemos la primera ejecucion del test, este test da como fallo porque crea los primeros snapshot y no tiene con quien compararlos,

una vez creado nos vamos a la rama de desarrollo y mismo proceso ,volvemos a ejecutar los test y esta vez se compararan las capturas iniciales de develop con las capturas iniciales.


ejecutar test:
```
npx playwright test
```

A tener en cuenta que este tipo de pruebas son muy fragiles, por ejemplo a veces no da tiempo a cargar el total de la pagina y esto da como fallo, o a veces por ejemplo una pagina puede tener sliders y mostrar en la captura como diferencias y tambien saltara como fallo