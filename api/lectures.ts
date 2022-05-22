import { useQuery } from 'react-query';
import axios from 'axios';
import {LectureType} from '../types'
import {API_ENDPOINT} from '../utils/config'

const fetchLectures = async (): Promise<LectureType[]> => {
  const { data } = await axios.get(`${API_ENDPOINT}/lectures`);
  return data;
};

const fetchLectureById = async (id): Promise<LectureType> => {
  const { data } = await axios.get(`${API_ENDPOINT}/lectures/${id}`);
  return data;
};

export const useLectures = (): any => useQuery('lectures', fetchLectures);
export const useLecture = (lectureId: number): any => useQuery(['lecture', lectureId], () => fetchLectureById(lectureId))
