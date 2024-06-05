Comenzando
Para comenzar con este proyecto, clona el repositorio e instala las dependencias necesarias.

Configuración
La configuración para el entorno de pruebas se almacena en un archivo config.json. Este archivo contiene las siguientes propiedades:

sandbox: Este objeto contiene la URL base (urlStart) y el número de la caja de pruebas (sandboxNumber). El número de la caja de pruebas puede ser cualquier número del 001 al 999. La URL completa se construye añadiendo https:// al inicio de la URL base y añadiendo el número de la caja de pruebas al final. Por ejemplo, si tu número de caja de pruebas es 003 y tu URL base es bkfb-, la URL completa será https://bkfb-003.

urls: Este objeto contiene las rutas relativas para las páginas de inicio y de inicio de sesión. Estas rutas se añaden a la URL completa para acceder a las respectivas páginas.

credentials: Este objeto contiene el nombre de usuario y la contraseña para el entorno de pruebas.

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
Ejecución de pruebas

```
npx playwright test
```

