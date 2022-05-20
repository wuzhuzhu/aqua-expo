import { useQuery } from 'react-query';
import axios from 'axios';
import {LectureType} from '../types'
import {API_ENDPOINT} from '../utils/config'

function parseData(data: any) : LectureType[] {
  const parsed = data.map((d: {
    thumbnailUrl: any; }) => {
    return {
      ...d,
      logo: d.thumbnailUrl
    }
  })
  return parsed
}

const fetchLectures = async (): Promise<LectureType[]> => {
  const { data } = await axios.get(`${API_ENDPOINT}lecture`);
  return parseData(data);
};

export const useLectures = (): any => useQuery('lectures', fetchLectures);
