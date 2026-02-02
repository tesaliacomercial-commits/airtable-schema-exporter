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

---

# Airtable Schema Exporter (English)

This script allows you to export the schema (the structure of tables and fields) from an Airtable base to a JSON file. It does not export the record data.

## Requirements

*   [Node.js](https://nodejs.org/) installed.
*   An Airtable API token with the `schema.bases:read` scope. You can create one in your [Airtable developer options](https://airtable.com/create/tokens).

## Installation

1.  **Clone this repository:**
    ```bash
    git clone https://github.com/tesaliacomercial-commits/airtable-schema-exporter.git
    cd airtable-schema-exporter
    ```

2.  **Install project dependencies:**
    ```bash
    npm install
    ```

## Configuration

1.  In the project root, create a file named `.env`.

2.  Open the `.env` file and add your API token as follows, replacing `key...` with your actual token:
    ```
    AIRTABLE_TOKEN=key...
    ```

## Usage

1.  Open a terminal in the project folder and run the following command:
    ```bash
    node export-schema.js
    ```

2.  The script will prompt you to enter the **Base ID** of the Airtable base you want to export (the one that starts with `app...`).

3.  Once finished, a `.json` file will be created in the same folder (e.g., `airtable_schema_app... .json`) containing the complete structure of your base.
