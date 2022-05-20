import { useQuery } from 'react-query';
import axios from 'axios';
import {LectureType} from "../types"
import {API_ENDPOINT} from "../utils/config"

const fetchPosts = async () => {
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');
  return data;
};

export const usePosts = (): any => useQuery('posts', fetchPosts);


const fetchLectures = async (): Promise<LectureType[]> => {
  const { data } = await axios.get(`${API_ENDPOINT}/lecture`);
  return data;
};

const fetchLectureById = async (id): Promise<LectureType> => {
  const { data } = await axios.get(`${API_ENDPOINT}/lecture/${id}`);
  return data;
};

export const useLectures = (): any => useQuery('lectures', fetchLectures);
export const useLecture = (): any => useQuery('lectures', fetchLectureById);
