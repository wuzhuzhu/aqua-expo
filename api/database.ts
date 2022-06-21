import {useInfiniteQuery} from "react-query"
import axios, {AxiosResponse} from "axios"
import {get, isEmpty} from "lodash"
import {IFetchFunParamType, IListResponseType, NutrientType} from '../types'
import {API_ENDPOINT} from "../utils/config"
import {PAGE_SIZE} from "../constants/Basic"

const fetchNutrients = async ({pageParams = {pageSize: PAGE_SIZE, pageNumber: 1}}: IFetchFunParamType): Promise<NutrientType[]> => {
  // const res = await axios.get(`${API_ENDPOINT}/getNutrients`);
  let url = `${API_ENDPOINT}/nutrients`;
  if (!isEmpty(pageParams)) {
    const {pageSize, pageNumber} = pageParams
    url += `?pageSize=${pageSize}&&pageNumber=${pageNumber}`
  }
  console.log('=====拉取数据中=======', url)
  const res = await axios.get(url);
  return res?.data;
}

export const useNutrients = (): any => useInfiniteQuery("nutrients", fetchNutrients, {
  getNextPageParam: (lastPage, allPages) => {
    const pageNumber: number = (lastPage?.data?.pagination?.pageNumber || 0) + 1
    return {
      pageParams: {
        pageNumber: pageNumber,
        pageSize: PAGE_SIZE
      }
    }
  },
  select: (data) => {
    const currentPageIndex = (data?.pageParams?.pageNumber || 1) - 1
    const nutrients = data?.pages?.[currentPageIndex]?.data?.list || []
    return nutrients
  }
})
