import { isDev } from "./helper";

export const API_ENDPOINT = isDev
	? "https://api.nara4aqua.com/api/v1"
	: "https://api.nara4aqua.com/api/v1";

export const PDF_URL_BASE = isDev
	? "http://localhost:3000"
	: "https://www.nara4aqua.com";

// https://api.nara4aqua.com/api/v1/getMembers
