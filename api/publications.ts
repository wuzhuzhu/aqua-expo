import { useQuery } from "react-query";
import axios from "axios";
import { PublicationType } from "../types";
import { API_ENDPOINT } from "../utils/config";
import { isDev, mock } from "../utils/helper";

function parseData(res: any): PublicationType[] {
	const parsed = res?.data?.data?.list;
	return parsed;
}

const fetchPublications = async () => {
	const res = await axios.get(`${API_ENDPOINT}/getLectureVideoInfo`);
	debugger;
	return parseData(res);
};

export const usePublications = (): any =>
	useQuery("publications", fetchPublications);

const mockData = [
	{
		createdAt: "2012-10-06T06:21:34.420Z",
		title: "Lamborghini Fiesta",
		author: "Van25",
		imgUrl: "http://loremflickr.com/640/480",
		pdfUrl:
			"https://www.vincent.wa.gov.au/Profiles/vincent/Assets/ClientData/Planning_Information_Sheets/Front_Fences_Information_Sheet_-_Final_for_use_-_July_2020.pdf",
		id: "1",
		chapters: [
			{
				title: "Corkery, Heathcote and Bahringer",
				page: 2,
				id: "1",
			},
			{
				title: "Funk - Hudson",
				page: 4,
				id: "2",
			},
			{
				title: "Gleichner, Franecki and Torphy",
				page: 6,
				id: "3",
			},
			{
				title: "Langworth - Lehner",
				page: 8,
				id: "4",
			},
			{
				title: "Zieme LLC",
				page: 9,
				id: "5",
			},
			{
				title: "Gottlieb Inc",
				page: 12,
				id: "6",
			},
			{
				title: "Stiedemann - Boyle",
				page: 22,
				id: "7",
			},
			{
				title: "Carter - Quitzon",
				page: 21,
				id: "8",
			},
			{
				title: "Senger - Bednar",
				page: 12,
				id: "9",
			},
			{
				title: "Lind, Ratke and Funk",
				page: 12,
				id: "10",
			},
			{
				title: "Orn Group",
				page: 2,
				id: "11",
			},
			{
				title: "Zulauf - Nienow",
				page: 3,
				id: "12",
			},
			{
				title: "Armstrong, Jaskolski and Barrows",
				page: 6,
				id: "13",
			},
		],
	},
	{
		createdAt: "2009-05-23T03:53:14.617Z",
		title: "Honda Countach",
		author: "Judy.Farrell",
		imgUrl: "http://loremflickr.com/640/480",
		pdfUrl:
			"https://www.vincent.wa.gov.au/Profiles/vincent/Assets/ClientData/Planning_Information_Sheets/Front_Fences_Information_Sheet_-_Final_for_use_-_July_2020.pdf",
		id: "2",
		chapters: [
			{
				title: "Corkery, Heathcote and Bahringer",
				page: 8170,
				id: "1",
			},
			{
				title: "Funk - Hudson",
				page: 85446,
				id: "2",
			},
			{
				title: "Gleichner, Franecki and Torphy",
				page: 9431,
				id: "3",
			},
			{
				title: "Langworth - Lehner",
				page: 98512,
				id: "4",
			},
			{
				title: "Zieme LLC",
				page: 41149,
				id: "5",
			},
			{
				title: "Gottlieb Inc",
				page: 87205,
				id: "6",
			},
		],
	},
	{
		createdAt: "2026-10-26T07:53:31.003Z",
		title: "Kia CX-9",
		author: "Baby2",
		imgUrl: "http://loremflickr.com/640/480",
		pdfUrl:
			"https://www.vincent.wa.gov.au/Profiles/vincent/Assets/ClientData/Planning_Information_Sheets/Front_Fences_Information_Sheet_-_Final_for_use_-_July_2020.pdf",
		id: "3",
		chapters: [],
	},
	{
		createdAt: "1993-11-11T11:11:16.827Z",
		title: "Jeep Challenger",
		author: "Hermann_Mills77",
		imgUrl: "http://loremflickr.com/640/480",
		pdfUrl:
			"https://www.vincent.wa.gov.au/Profiles/vincent/Assets/ClientData/Planning_Information_Sheets/Front_Fences_Information_Sheet_-_Final_for_use_-_July_2020.pdf",
		id: "4",
		chapters: [
			{
				title: "Corkery, Heathcote and Bahringer",
				page: 1,
				id: "1",
			},
			{
				title: "Funk - Hudson",
				page: 2,
				id: "2",
			},
		],
	},
	{
		createdAt: "2092-04-13T14:59:41.469Z",
		title: "Nissan Impala",
		author: "Noel_Daniel53",
		imgUrl: "http://loremflickr.com/640/480",
		pdfUrl: "https://thorny-indication.info",
		id: "5",
		chapters: [
			{
				title: "Corkery, Heathcote and Bahringer",
				page: 8170,
				id: "1",
			},
			{
				title: "Funk - Hudson",
				page: 85446,
				id: "2",
			},
			{
				title: "Gleichner, Franecki and Torphy",
				page: 9431,
				id: "3",
			},
			{
				title: "Langworth - Lehner",
				page: 98512,
				id: "4",
			},
			{
				title: "Zieme LLC",
				page: 41149,
				id: "5",
			},
			{
				title: "Gottlieb Inc",
				page: 87205,
				id: "6",
			},
			{
				title: "Ullrich, Russel and Schaden",
				page: 24829,
				id: "7",
			},
			{
				title: "Dach, Jerde and Pollich",
				page: 38224,
				id: "8",
			},
			{
				title: "Wyman - Streich",
				page: 33455,
				id: "9",
			},
			{
				title: "Christiansen, Walter and Conroy",
				page: 68976,
				id: "10",
			},
			{
				title: "Thiel Inc",
				page: 61981,
				id: "11",
			},
			{
				title: "Walsh - Walsh",
				page: 22978,
				id: "12",
			},
			{
				title: "Brekke - Konopelski",
				page: 35477,
				id: "13",
			},
			{
				title: "Welch Inc",
				page: 82312,
				id: "14",
			},
			{
				title: "Schamberger LLC",
				page: 943,
				id: "15",
			},
			{
				title: "Jenkins - Buckridge",
				page: 51277,
				id: "16",
			},
			{
				title: "Adams, Zieme and Hoeger",
				page: 90836,
				id: "17",
			},
			{
				title: "Ankunding LLC",
				page: 61873,
				id: "18",
			},
			{
				title: "Block and Sons",
				page: 39488,
				id: "19",
			},
			{
				title: "Murazik - Bayer",
				page: 42447,
				id: "20",
			},
			{
				title: "Jaskolski LLC",
				page: 35229,
				id: "21",
			},
			{
				title: "Satterfield Inc",
				page: 58921,
				id: "22",
			},
			{
				title: "McLaughlin LLC",
				page: 46487,
				id: "23",
			},
			{
				title: "Ferry - Beatty",
				page: 12161,
				id: "24",
			},
			{
				title: "DuBuque LLC",
				page: 37407,
				id: "25",
			},
			{
				title: "Jast, Dibbert and Roob",
				page: 22532,
				id: "26",
			},
			{
				title: "Schultz LLC",
				page: 23701,
				id: "27",
			},
			{
				title: "Bosco LLC",
				page: 55221,
				id: "28",
			},
			{
				title: "Glover - Prosacco",
				page: 17515,
				id: "29",
			},
			{
				title: "Blick - Altenwerth",
				page: 6194,
				id: "30",
			},
			{
				title: "Balistreri, Lowe and Gislason",
				page: 73228,
				id: "31",
			},
			{
				title: "Tillman LLC",
				page: 58582,
				id: "32",
			},
			{
				title: "Wunsch, Schoen and Bartoletti",
				page: 43636,
				id: "33",
			},
			{
				title: "Dicki, Kutch and Jaskolski",
				page: 42047,
				id: "34",
			},
			{
				title: "Herman - Stoltenberg",
				page: 14087,
				id: "35",
			},
			{
				title: "Jones, Oberbrunner and Koelpin",
				page: 29092,
				id: "36",
			},
			{
				title: "Quitzon LLC",
				page: 37325,
				id: "37",
			},
			{
				title: "Feil - Flatley",
				page: 65192,
				id: "38",
			},
			{
				title: "Balistreri Inc",
				page: 13100,
				id: "39",
			},
			{
				title: "Witting, Bergstrom and Abernathy",
				page: 20421,
				id: "40",
			},
		],
	},
	{
		createdAt: "2054-06-05T11:41:52.403Z",
		title: "Mazda 1",
		author: "Lindsey_Zemlak",
		imgUrl: "http://loremflickr.com/640/480",
		pdfUrl: "http://rosy-prisoner.biz",
		id: "6",
	},
	{
		createdAt: "2081-10-28T03:28:08.307Z",
		title: "Toyota Golf",
		author: "Daphne70",
		imgUrl: "http://loremflickr.com/640/480",
		pdfUrl: "https://triangular-checkroom.org",
		id: "7",
	},
	{
		createdAt: "2023-01-18T15:49:18.612Z",
		title: "Maserati Camry",
		author: "Janet_Bins63",
		imgUrl: "http://loremflickr.com/640/480",
		pdfUrl: "https://excellent-grasshopper.name",
		id: "8",
	},
	{
		createdAt: "2027-02-14T04:47:47.157Z",
		title: "BMW Charger",
		author: "Orland_Padberg",
		imgUrl: "http://loremflickr.com/640/480",
		pdfUrl: "http://indolent-formamide.info",
		id: "9",
	},
	{
		createdAt: "2082-02-18T08:04:02.041Z",
		title: "Nissan PT Cruiser",
		author: "Aryanna_Jenkins92",
		imgUrl: "http://loremflickr.com/640/480",
		pdfUrl: "https://demanding-hire.net",
		id: "10",
	},
	{
		createdAt: "2043-05-20T14:59:01.771Z",
		title: "Nissan Explorer",
		author: "Jacklyn_Kutch79",
		imgUrl: "http://loremflickr.com/640/480",
		pdfUrl: "http://tender-hardware.name",
		id: "11",
	},
	{
		createdAt: "2041-06-04T13:23:47.273Z",
		title: "Toyota Model 3",
		author: "Brice40",
		imgUrl: "http://loremflickr.com/640/480",
		pdfUrl: "https://glorious-fiesta.org",
		id: "12",
	},
	{
		createdAt: "2000-10-06T09:07:52.590Z",
		title: "Aston Martin Corvette",
		author: "Axel_Sawayn17",
		imgUrl: "http://loremflickr.com/640/480",
		pdfUrl: "http://phony-deviance.name",
		id: "13",
	},
	{
		createdAt: "2018-06-12T15:28:48.064Z",
		title: "Land Rover Spyder",
		author: "Janae_Leffler",
		imgUrl: "http://loremflickr.com/640/480",
		pdfUrl: "https://open-thief.org",
		id: "14",
	},
	{
		createdAt: "2080-08-27T15:12:17.247Z",
		title: "Volkswagen F-150",
		author: "Edwin.Wehner",
		imgUrl: "http://loremflickr.com/640/480",
		pdfUrl: "http://trusting-kiwi.com",
		id: "15",
	},
	{
		createdAt: "2051-08-13T15:58:40.166Z",
		title: "Porsche LeBaron",
		author: "Ardith_Dickens49",
		imgUrl: "http://loremflickr.com/640/480",
		pdfUrl: "http://thoughtful-bestseller.biz",
		id: "16",
	},
	{
		createdAt: "2044-07-03T10:53:39.674Z",
		title: "BMW Golf",
		author: "Eula.Schaden56",
		imgUrl: "http://loremflickr.com/640/480",
		pdfUrl: "https://that-tonality.info",
		id: "17",
	},
	{
		createdAt: "2072-08-14T01:08:35.866Z",
		title: "Land Rover ATS",
		author: "Ellie_Roob56",
		imgUrl: "http://loremflickr.com/640/480",
		pdfUrl: "https://kind-simplification.com",
		id: "18",
	},
	{
		createdAt: "2002-11-03T06:05:13.256Z",
		title: "Toyota Impala",
		author: "Margarete_Collins9",
		imgUrl: "http://loremflickr.com/640/480",
		pdfUrl: "https://numb-pathway.com",
		id: "19",
	},
	{
		createdAt: "2034-06-04T19:38:50.103Z",
		title: "Hyundai Grand Caravan",
		author: "Katrina7",
		imgUrl: "http://loremflickr.com/640/480",
		pdfUrl: "https://metallic-knot.biz",
		id: "20",
	},
];
