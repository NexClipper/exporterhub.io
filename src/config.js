require("dotenv").config();

export const API_SERVER = process.env.REACT_APP_API_URL;
export const API_SURVER = `${API_SERVER}`;
export const SERVICE_URL = process.env.REACT_APP_SERVICE;
export const CALLBACK_URL = `${SERVICE_URL}/callback`;

export const PUBLIC_SERVICE = process.env.REACT_APP_STATUS; //- if the PUBLIC_SERVICE is y then "ADMIN" will be remove. or "ADMIN" button will be ok.

export const EXPORTERS_API = `${API_SERVER}/exporter`;
export const EXPORTER_API = `${API_SERVER}/exporter`;
export const CATEGORIES_API = `${API_SERVER}/exporter/categories`;
export const TOKEN_API = `${API_SERVER}/headtoken`;
export const STAR_API = `${API_SERVER}/user/star`;
export const BUCKET_API = `${API_SERVER}/user/bucket`;
export const LOGIN_API = `${API_SERVER}/user/login`;
export const ADMIN_API = `${API_SERVER}/user/admin`;
export const EXPORTER_ADMIN_API = `${API_SERVER}/exporter`;

export const CLIENT_ID = process.env.REACT_APP_API_CLIENT_ID;
export const CLIENT_SECRETS = process.env.REACT_APP_API_CLIENT_SECRETS;
