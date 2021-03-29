require("dotenv").config();

export const API_SURVER = process.env.REACT_APP_API_URL;
export const PUBLIC_SERVICE = process.env.REACT_APP_API_STATUS; //- if the PUBLIC_SERVICE is y then "ADMIN" will be remove. or "ADMIN" button will be ok.
// export const EXPORTERS_API = `${API_SURVER}:8000`;
// export const EXPORTER_API = `${API_SURVER}:8000/exporters`;
// export const CATEGORIES_API = `${API_SURVER}:8000/categories`;
export const EXPORTER_ADMIN_API = `${API_SURVER}:8000/exporter`;
// export const TOKEN_API = `${API_SURVER}:8000/token`;

export const EXPORTERS_API = "http://10.153.4.240:8000/exporter";
export const EXPORTER_API = "http://10.153.4.240:8000/exporter";
export const CATEGORIES_API = "http://10.153.4.240:8000/exporter/categories";
export const TOKEN_API = "http://10.153.4.240:8000/headtoken";
