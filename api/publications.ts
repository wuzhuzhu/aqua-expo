import { useQuery } from 'react-query';
import axios from 'axios';
import {PublicationType} from '../types'

function parseData(data: any) : PublicationType[] {
  const parsed = data.map((d: PublicationType) => d)
  return parsed
}

const fetchPublications = async () => {
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/albums/1/photos');
  return parseData(data);
};

export const usePublications = (): any => useQuery('members', fetchPublications);
