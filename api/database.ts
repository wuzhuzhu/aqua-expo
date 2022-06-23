import { useInfiniteQuery, useQuery } from "react-query";
import axios, { AxiosResponse } from "axios";
import { get, isEmpty } from "lodash";
import { IFetchFunParamType, IListResponseType, NutrientType } from "../types";
import { API_ENDPOINT } from "../utils/config";
import { PAGE_SIZE } from "../constants/Basic";
import { UseInfiniteQueryResult } from "react-query/types/react/types";
/*

const fetchNutrients = async ({pageParam: pageNumber = 1}: IFetchFunParamType): Promise<NutrientType[]> => {
  // const res = await axios.get(`${API_ENDPOINT}/getNutrients`);
  let url = `${API_ENDPOINT}/nutrients`;
  // console.log('axios接到fetch指令，获取数据， param：', pageNumber)
  url += `?pageSize=${PAGE_SIZE}&&pageNumber=${pageNumber}`
  // console.log('=====拉取数据中=======', url)
  const res = await axios.get(url);
  return res?.data;
}

export const useNutrients = (): UseInfiniteQueryResult => useInfiniteQuery("nutrients", fetchNutrients, {
  getNextPageParam: (lastPage, allPages) => {
    const pageNumber: number = (lastPage?.data?.pagination?.pageNumber || 0) + 1
    const total: number = lastPage?.data?.pagination?.total || 0
    const hasMore = pageNumber * PAGE_SIZE < total

    // console.log('getNextPageParam启动', pageNumber, total, hasMore)
    return hasMore ? {pageNumber} : void 0
  },
  select: (data) => {
    console.log('enterSelect', data)
    const currentPageIndex = (data?.pageParams?.pageNumber || 1) - 1
    const nutrients = data?.pages?.[currentPageIndex]?.data?.list || []
    return nutrients
  }
})

*/

const fetchPaginatedNutrients = async ({ pageParam = 1 }) => {
	let url = `${API_ENDPOINT}/nutrients`;
	// console.log('axios接到fetch指令，获取数据， param：', pageParam)
	url += `?pageSize=${PAGE_SIZE}&&pageNumber=${pageParam}`;
	// console.log('=====拉取数据中=======', url)
	const { data: page } = await axios.get(url);
	return { page, pageParam };
};

export const useInfiniteNutrients = () => {
	return useInfiniteQuery("nutrients", fetchPaginatedNutrients, {
		getNextPageParam: lastPage => {
			const total = lastPage?.page?.data?.pagination?.total || 0;
			const currentTotal = lastPage.pageParam * PAGE_SIZE;
			const hasMore = total > currentTotal;
			// console.log('getNextPageParam', total, currentTotal, hasMore, lastPage.pageParam)
			return hasMore ? lastPage.pageParam + 1 : void 0;
		},
		onError: (error: Error) => console.error(error),
		select: data => {
			const allPagesArray = [];
			data?.pages
				? data.pages.forEach(fetchResArr =>
						allPagesArray.push(fetchResArr?.page?.data?.list || [])
				  )
				: null;
			const nutrients = allPagesArray.flat();
			return {
				pages: data.pages,
				pageParams: data.pageParams,
				nutrients,
			};
		},
	});
};

export const fetchNutrientById = async (id: string): Promise<NutrientType> => {
	const { data } = await axios.get(`${API_ENDPOINT}/nutrient/${id}`);
	return data;
};

export const useNutrient = (nutrientId: string): any =>
	useQuery(["nutrient", nutrientId], () => fetchNutrientById(nutrientId));
