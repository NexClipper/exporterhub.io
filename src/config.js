require('dotenv').config();
const env = process.env;

export const API_SURVER = env.API;
export const EXPORTERS_API = `http://${API_SURVER}:8000`;
export const EXPORTER_API = `http://${API_SURVER}:8000/exporters`;
export const CATEGORIES_API = `http://${API_SURVER}:8000/categories`;
export const EXPORTER_ADMIN_API = `http://${API_SURVER}:8000/exporter`;
export const TOKEN_API = `http://${API_SURVER}:8000/token`;
