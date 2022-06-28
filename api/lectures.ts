import { useQuery } from "react-query";
import axios from "axios";
import { LectureType } from "../types";
import { isDev } from "../utils/helper";
import { API_ENDPOINT } from "../utils/config";

const fetchLectures = async (): Promise<LectureType[]> => {
	console.log("fetchLectures", `${API_ENDPOINT}/lectures`);
	const res = await axios.get(`${API_ENDPOINT}/lectures`);
	return res?.data?.data?.list;
};

const fetchLectureById = async (id: number): Promise<LectureType> => {
	console.log("fetchLectureById", `${API_ENDPOINT}/lecture/${id}`);
	const response = await axios.get(`${API_ENDPOINT}/lecture/${id}`);
	const lecture = response?.data?.data || {};
	console.log("lecture is: ", lecture);
	return lecture;
};

export const useLectures = (): any => useQuery("lectures", fetchLectures);
export const useLecture = (lectureId: number): any =>
	useQuery(["lecture", lectureId], () => fetchLectureById(lectureId));
