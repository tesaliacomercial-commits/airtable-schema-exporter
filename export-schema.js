require('dotenv').config(); // Carga las variables del archivo .env
const axios = require('axios');
const fs = require('fs');
const path = require('path');
const readline = require('readline');

// El token se carga desde el archivo .env local
const TOKEN = process.env.AIRTABLE_TOKEN;

async function exportarEstructuraProfunda() {
    // 1. Validación del Token
    if (!TOKEN) {
        console.error("❌ Error: Falta la credencial AIRTABLE_TOKEN en el archivo .env");
        return;
    }

    // 2. Preguntar por el Base ID
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('❓ Por favor, introduce el ID de la Base de Airtable (empieza con "app"): ', async (baseId) => {
        const BASE_ID = baseId.trim();
        
        // Validación del Base ID introducido
        if (!BASE_ID) {
            console.error("❌ Error: No se introdujo un ID de base.");
            rl.close();
            return;
        }

        console.log(`\n🔄 Conectando a Airtable para obtener la estructura de la base: ${BASE_ID}...`);

        try {
            // 3. Petición a la API de Airtable
            const res = await axios.get(`https://api.airtable.com/v0/meta/bases/${BASE_ID}/tables`, {
                headers: {
                    'Authorization': `Bearer ${TOKEN}`,
                    'Content-Type': 'application/json'
                }
            });

            const data = res.data;

            // 4. Guardar resultado en un archivo
            const filename = `airtable_schema_${BASE_ID}.json`; // Nombre de archivo dinámico
            const filePath = path.join(__dirname, filename);

            fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

            console.log(`\n✅ ¡Éxito! Se han exportado ${data.tables.length} tablas.`);
            console.log(`📂 Archivo guardado en: ${filePath}`);

        } catch (e) {
            // 5. Manejo de errores
            if (e.response) {
                console.error(`\n❌ Error de API (${e.response.status}):`, JSON.stringify(e.response.data, null, 2));
                if (e.response.status === 403) {
                    console.error("💡 Consejo: Verifica que tu Token tenga el scope 'schema.bases:read'.");
                }
                if (e.response.status === 404) {
                    console.error("💡 Consejo: Verifica que el ID de la Base sea correcto y que tu Token tenga acceso a ella.");
                }
            } else {
                console.error("\n❌ Error de conexión:", e.message);
            }
        } finally {
            // 6. Cerrar la interfaz de lectura
            rl.close();
        }
    });
}

exportarEstructuraProfunda();
