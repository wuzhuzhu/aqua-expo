import { useQuery } from 'react-query';
import axios from 'axios';
import {MemberType} from '../types'
import {API_ENDPOINT} from "../utils/config"


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

/*
const fetchMembers = async () => {
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/albums/1/photos');
  return parseData(data);
};
*/


const fetchMembers = async () => {
  const {data} = await axios.get(`${API_ENDPOINT}/getMembers`);
  return data?.data || [];
};

export const useMembers = (): any => useQuery('members', fetchMembers);

const fetchBanners = async () => {
  const {data} = await axios.get(`${API_ENDPOINT}/banners`);
  return data?.data || [];
}

export const useBanners = (): any => useQuery('bannners', fetchBanners);
