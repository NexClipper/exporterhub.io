require("dotenv").config();

export const API_SURVER = process.env.REACT_APP_API_URL;
export const SERVICE_URL = process.env.SERVICE_URL;
export const PUBLIC_SERVICE = process.env.REACT_APP_API_STATUS; //- if the PUBLIC_SERVICE is y then "ADMIN" will be remove. or "ADMIN" button will be ok.

export const EXPORTERS_API = `${API_SURVER}/exporter`;
export const EXPORTER_API = `${API_SURVER}/exporter`;
export const CATEGORIES_API = `${API_SURVER}/exporter/categories`;
export const TOKEN_API = `${API_SURVER}/headtoken`;
export const STAR_API = `${API_SURVER}/user/star`;
export const BUCKET_API = `${API_SURVER}/user/bucket`;
export const LOGIN_API = `${API_SURVER}/user/login`;
export const ADMIN_API = `${API_SURVER}/user/admin`;
export const EXPORTER_ADMIN_API = `${API_SURVER}/exporter`;

export const CLIENT_ID = process.env.REACT_APP_API_CLIENT_ID;
export const CLIENT_SECRETS = process.env.REACT_APP_API_CLIENT_SECRETS;
