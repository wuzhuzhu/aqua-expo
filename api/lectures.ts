import { useQuery } from "react-query";
import axios from "axios";
import { LectureType } from "../types";
import { isDev } from "../utils/helper";
import { API_ENDPOINT } from "../utils/config";

const fetchLectures = async (): Promise<LectureType[]> => {
	const res = await axios.get(`${API_ENDPOINT}/getLectureVideoInfo`);
	return res?.data?.data?.list;
};

const fetchLectureById = async (id: number): Promise<LectureType> => {
	const { data } = await axios.get(`${API_ENDPOINT}/getLectureVideoInfo/${id}`);
	return data;
};

export const useLectures = (): any => useQuery("lectures", fetchLectures);
export const useLecture = (lectureId: number): any =>
	useQuery(["lecture", lectureId], () => fetchLectureById(lectureId));
