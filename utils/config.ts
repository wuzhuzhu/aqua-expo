import { isDev } from "./helper";

export const API_ENDPOINT = isDev
	? "http://10.7.7.110:7001/api/v1"
	// ? "http://30.208.211.120:7001/api/v1"
	: "https://api.nara4aqua.com/api/v1";

export const PDF_URL_BASE = isDev
	? "http://localhost:3000"
	: "https://www.nara4aqua.com";

// https://api.nara4aqua.com/api/v1/getMembers
