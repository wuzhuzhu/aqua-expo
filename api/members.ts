import { useQuery } from 'react-query';
import axios from 'axios';
import {MemberType} from '../types'

function parseData(data: any) : MemberType[] {
  const parsed = data.map((d: {
    title: any
    thumbnailUrl: any; }) => {
    return {
      ...d,
      name: d.title,
      logo: d.thumbnailUrl
    }
  })
  return parsed
}

const fetchMembers = async () => {
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/albums/1/photos');

  return parseData(data);
};

export const useMembers = (): any => useQuery('posts', fetchMembers);
