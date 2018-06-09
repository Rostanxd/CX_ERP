**Proyecto CX_ERP | Solución ERP para empresas**

CX_ERP es una solución erp creada por el grupo CodeXciting para realizar testing con el stack de 
Python 3.4 y Django 2.0.
El fin de este repositorio es poder realizar practicas en conjunto, sobre el control de versiones y 
generación de los modulos del sistema mismo.

El branch _master_ del proyecto se encuentra expuesto en **Heroku** en el siguiente [enlace](https://codexcitingerp.herokuapp.com/accounts/login).

**Tecnologías** <br>

Lo descrito a continuación son las tecnologías utilizadas en la realización del proyecto.

**> Backend:**
> Python 3.4 <br>
> Django 2.0.5 <br>
> django-material 1.2.5 <br>

**> FrontEnd:**
> Bootstrap 4.1 <br>
> MaterializeCSS 1.0 <br>
> JQuery 3.3.1 <br>

<br>

**EJECUTANDO LOCALMENTE**

**Instalando librerias para python.** <br>

El archivo `requirements.txt`, contiene las librerias que necesitaremos en el proyecto.<br>
Al ejecutar la siguiente línea de comando en la raíz del proyecto, las mismas se instalarán de forma 
automática.

`pip install -r requirements.txt`

Al final podemos verificar las librerias utilizando el comando:

`pip freeze`

Una vez descargadas las librerias de python podemos ejecutar `runserver` para levantar el servidor y 
poder ver el proyecto en ejecución.

`python manage.py runserver`
