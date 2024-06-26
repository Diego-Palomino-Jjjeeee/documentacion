---
sidebar_position: 2
---
# Instalación del Facturador
### Docker | Linux | SSL Externo

## Pasos

1. Para instalar debe ejecutar el script evitando instalar el SSL, le será consultado en el proceso y deberá ingresar "n".

2. Finalizada la instalación debe dirigirse a la ruta de instalación.
    ```bash
    cd/root/facturadorpro31
    ```
    
3. Debe editar el archivo **.env**

    ```bash
    nano .env
    ```
    Dentro del editor ubicar los parámetros y cambiarlos

    | Antes                             | Después                            |
    |-----------------------------------|------------------------------------|
    | `APP_URL=http://${APP_URL_BASE}`    | `APP_URL=https://${APP_URL_BASE}`    |
    | `FORCE_HTTPS=false`                 | `FORCE_HTTPS=true`                   |

4. Una vez finalizado, guarde y salga del editor.

5. Ejecute los siguietes comandos para eliminar la caché de la aplicación. 

    ```bash
    php artisan config:Cache
    ```

6. Con eso habrá completado el lado de la herramienta, en ese momento hasta no tener un SSL configurado no podrá acceder a la herramienta.

:::danger IMPORTANTE:
Recuerde habilitar el puerto 443 para poder tener acceso a la herramienta
:::