import { isDev } from "./helper";

export const API_ENDPOINT =
	// "http://10.7.7.110:7001/api/v1"
	//  "http://30.208.211.120:7001/api/v1"
	"https://api.nara4aqua.com/api/v1";

export const PDF_URL_BASE = isDev
	? "https://aqua-expo.vercel.app"
	: "https://aqua-expo.vercel.app"; // TODO: change to production url

// https://api.nara4aqua.com/api/v1/getMembers

// TODO: 实现pdf跳页需要实现web服务器
export const HAS_PDF_WEB = false;
