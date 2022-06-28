import { isDev } from "./helper";

export const API_ENDPOINT =
	// "http://10.7.7.110:7001/api/v1"
	//  "http://30.208.211.120:7001/api/v1"
	"https://api.nara4aqua.com/api/v1";

export const PDF_URL_BASE = isDev
	? "https://aqua-pdfkit.vercel.app/pdf"
	: "https://aqua-pdfkit.vercel.app/pdf"; // TODO: change to production url

// https://api.nara4aqua.com/api/v1/getMembers

// export const HAS_PDF_WEB = false;

// https://aqua-pdfkit.vercel.app/pdf/https%3A%2F%2Faqua-expo-static.s3.ap-southeast-1.amazonaws.com%2Fairbnb.pdf/5
// https://aqua-pdfkit.vercel.app/pdf/https%3A%2F%2Faqua-oss.s3.us-west-2.amazonaws.com%2F2dc1dfc2e599809d3eeaeb9f1c718a9a.pdf/1
// https://aqua-pdfkit.vercel.app/pdf/https%3A%2F%2Faqua-oss.s3.us-west-2.amazonaws.com%2F2dc1dfc2e599809d3eeaeb9f1c718a9a.pdf/2
