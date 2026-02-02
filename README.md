# Exportador de Esquema de Airtable

Este script permite exportar el esquema (la estructura de tablas y campos) de una base de datos de Airtable a un archivo JSON. No exporta los datos de los registros.

## Requisitos

*   [Node.js](https://nodejs.org/) instalado.
*   Un token de API de Airtable con el permiso `schema.bases:read`. Puedes crear uno en [tus opciones de desarrollador de Airtable](https://airtable.com/create/tokens).

## Instalación

1.  **Clona este repositorio:**
    ```bash
    git clone https://github.com/tesaliacomercial-commits/airtable-schema-exporter.git
    cd airtable-schema-exporter
    ```

2.  **Instala las dependencias del proyecto:**
    ```bash
    npm install
    ```

## Configuración

1.  En la raíz del proyecto, crea un archivo llamado `.env`.
    
2.  Abre el archivo `.env` y añade tu token de API de la siguiente manera, reemplazando `key...` con tu token real:
    ```
    AIRTABLE_TOKEN=key...
    ```

## Uso

1.  Abre una terminal en la carpeta del proyecto y ejecuta el siguiente comando:
    ```bash
    node export-schema.js
    ```

2.  El script te pedirá que introduzcas el **ID de la Base** de Airtable que quieres exportar (es el que empieza con `app...`).

3.  Al finalizar, se creará un archivo `.json` en la misma carpeta (por ejemplo, `airtable_schema_app... .json`) que contiene la estructura completa de tu base.
