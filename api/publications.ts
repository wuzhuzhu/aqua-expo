import { useQuery } from 'react-query';
import axios from 'axios';
import {PublicationType} from '../types'
import {API_ENDPOINT} from '../utils/config'
import {isDev, mock} from '../utils/helper'

function parseData(data: any) : PublicationType[] {
  const parsed = data.map((d: PublicationType) => d)
  return parsed
}

const fetchPublications = async () => {
  let data
  if (isDev) {
    data = await(mock(true, mockData ))
    return data
  } else {
    data = await axios.get(`${API_ENDPOINT}/publications`)
  }
  console.log(data)
  return parseData(data);
};

export const usePublications = (): any => useQuery('members', fetchPublications);


const mockData = [
  {
    "createdAt": "2012-10-06T06:21:34.420Z",
    "title": "Lamborghini Fiesta",
    "author": "Van25",
    "imgUrl": "http://loremflickr.com/640/480",
    "pdfUrl": "http://plaintive-availability.com",
    "id": "1"
  },
  {
    "createdAt": "2009-05-23T03:53:14.617Z",
    "title": "Honda Countach",
    "author": "Judy.Farrell",
    "imgUrl": "http://loremflickr.com/640/480",
    "pdfUrl": "http://shimmering-cliff.com",
    "id": "2"
  },
  {
    "createdAt": "2026-10-26T07:53:31.003Z",
    "title": "Kia CX-9",
    "author": "Baby2",
    "imgUrl": "http://loremflickr.com/640/480",
    "pdfUrl": "http://optimal-testimony.info",
    "id": "3"
  },
  {
    "createdAt": "1993-11-11T11:11:16.827Z",
    "title": "Jeep Challenger",
    "author": "Hermann_Mills77",
    "imgUrl": "http://loremflickr.com/640/480",
    "pdfUrl": "http://shameful-twister.net",
    "id": "4"
  },
  {
    "createdAt": "2092-04-13T14:59:41.469Z",
    "title": "Nissan Impala",
    "author": "Noel_Daniel53",
    "imgUrl": "http://loremflickr.com/640/480",
    "pdfUrl": "https://thorny-indication.info",
    "id": "5"
  },
  {
    "createdAt": "2054-06-05T11:41:52.403Z",
    "title": "Mazda 1",
    "author": "Lindsey_Zemlak",
    "imgUrl": "http://loremflickr.com/640/480",
    "pdfUrl": "http://rosy-prisoner.biz",
    "id": "6"
  },
  {
    "createdAt": "2081-10-28T03:28:08.307Z",
    "title": "Toyota Golf",
    "author": "Daphne70",
    "imgUrl": "http://loremflickr.com/640/480",
    "pdfUrl": "https://triangular-checkroom.org",
    "id": "7"
  },
  {
    "createdAt": "2023-01-18T15:49:18.612Z",
    "title": "Maserati Camry",
    "author": "Janet_Bins63",
    "imgUrl": "http://loremflickr.com/640/480",
    "pdfUrl": "https://excellent-grasshopper.name",
    "id": "8"
  },
  {
    "createdAt": "2027-02-14T04:47:47.157Z",
    "title": "BMW Charger",
    "author": "Orland_Padberg",
    "imgUrl": "http://loremflickr.com/640/480",
    "pdfUrl": "http://indolent-formamide.info",
    "id": "9"
  },
  {
    "createdAt": "2082-02-18T08:04:02.041Z",
    "title": "Nissan PT Cruiser",
    "author": "Aryanna_Jenkins92",
    "imgUrl": "http://loremflickr.com/640/480",
    "pdfUrl": "https://demanding-hire.net",
    "id": "10"
  },
  {
    "createdAt": "2043-05-20T14:59:01.771Z",
    "title": "Nissan Explorer",
    "author": "Jacklyn_Kutch79",
    "imgUrl": "http://loremflickr.com/640/480",
    "pdfUrl": "http://tender-hardware.name",
    "id": "11"
  },
  {
    "createdAt": "2041-06-04T13:23:47.273Z",
    "title": "Toyota Model 3",
    "author": "Brice40",
    "imgUrl": "http://loremflickr.com/640/480",
    "pdfUrl": "https://glorious-fiesta.org",
    "id": "12"
  },
  {
    "createdAt": "2000-10-06T09:07:52.590Z",
    "title": "Aston Martin Corvette",
    "author": "Axel_Sawayn17",
    "imgUrl": "http://loremflickr.com/640/480",
    "pdfUrl": "http://phony-deviance.name",
    "id": "13"
  },
  {
    "createdAt": "2018-06-12T15:28:48.064Z",
    "title": "Land Rover Spyder",
    "author": "Janae_Leffler",
    "imgUrl": "http://loremflickr.com/640/480",
    "pdfUrl": "https://open-thief.org",
    "id": "14"
  },
  {
    "createdAt": "2080-08-27T15:12:17.247Z",
    "title": "Volkswagen F-150",
    "author": "Edwin.Wehner",
    "imgUrl": "http://loremflickr.com/640/480",
    "pdfUrl": "http://trusting-kiwi.com",
    "id": "15"
  },
  {
    "createdAt": "2051-08-13T15:58:40.166Z",
    "title": "Porsche LeBaron",
    "author": "Ardith_Dickens49",
    "imgUrl": "http://loremflickr.com/640/480",
    "pdfUrl": "http://thoughtful-bestseller.biz",
    "id": "16"
  },
  {
    "createdAt": "2044-07-03T10:53:39.674Z",
    "title": "BMW Golf",
    "author": "Eula.Schaden56",
    "imgUrl": "http://loremflickr.com/640/480",
    "pdfUrl": "https://that-tonality.info",
    "id": "17"
  },
  {
    "createdAt": "2072-08-14T01:08:35.866Z",
    "title": "Land Rover ATS",
    "author": "Ellie_Roob56",
    "imgUrl": "http://loremflickr.com/640/480",
    "pdfUrl": "https://kind-simplification.com",
    "id": "18"
  },
  {
    "createdAt": "2002-11-03T06:05:13.256Z",
    "title": "Toyota Impala",
    "author": "Margarete_Collins9",
    "imgUrl": "http://loremflickr.com/640/480",
    "pdfUrl": "https://numb-pathway.com",
    "id": "19"
  },
  {
    "createdAt": "2034-06-04T19:38:50.103Z",
    "title": "Hyundai Grand Caravan",
    "author": "Katrina7",
    "imgUrl": "http://loremflickr.com/640/480",
    "pdfUrl": "https://metallic-knot.biz",
    "id": "20"
  },
  {
    "createdAt": "2096-04-18T03:27:24.992Z",
    "title": "Maserati Jetta",
    "author": "Winnifred57",
    "imgUrl": "http://loremflickr.com/640/480",
    "pdfUrl": "http://energetic-waistband.biz",
    "id": "21"
  },
  {
    "createdAt": "2012-06-11T18:22:07.051Z",
    "title": "Porsche Land Cruiser",
    "author": "Ida.Abbott",
    "imgUrl": "http://loremflickr.com/640/480",
    "pdfUrl": "http://worthless-commission.biz",
    "id": "22"
  },
  {
    "createdAt": "2030-10-09T12:39:35.936Z",
    "title": "Mazda PT Cruiser",
    "author": "Maxie.Schowalter42",
    "imgUrl": "http://loremflickr.com/640/480",
    "pdfUrl": "http://cloudy-copyright.net",
    "id": "23"
  },
  {
    "createdAt": "2046-10-24T12:00:42.933Z",
    "title": "Polestar Grand Cherokee",
    "author": "Kennedy_Beer9",
    "imgUrl": "http://loremflickr.com/640/480",
    "pdfUrl": "http://long-crackers.info",
    "id": "24"
  },
  {
    "createdAt": "1995-09-10T15:32:29.288Z",
    "title": "Cadillac Sentra",
    "author": "Elmo12",
    "imgUrl": "http://loremflickr.com/640/480",
    "pdfUrl": "http://precious-neighbourhood.net",
    "id": "25"
  },
  {
    "createdAt": "2021-09-18T22:01:18.939Z",
    "title": "Bugatti Spyder",
    "author": "Estella.Douglas91",
    "imgUrl": "http://loremflickr.com/640/480",
    "pdfUrl": "https://tinted-indigence.biz",
    "id": "26"
  },
  {
    "createdAt": "2016-03-21T03:01:34.906Z",
    "title": "Bentley Civic",
    "author": "Felicita69",
    "imgUrl": "http://loremflickr.com/640/480",
    "pdfUrl": "http://earnest-canvas.info",
    "id": "27"
  },
  {
    "createdAt": "2032-11-10T08:41:27.753Z",
    "title": "Ferrari Grand Caravan",
    "author": "Elnora45",
    "imgUrl": "http://loremflickr.com/640/480",
    "pdfUrl": "https://compassionate-clapboard.biz",
    "id": "28"
  },
  {
    "createdAt": "2041-01-25T01:06:25.797Z",
    "title": "Honda Aventador",
    "author": "Ludwig_Schinner",
    "imgUrl": "http://loremflickr.com/640/480",
    "pdfUrl": "http://glaring-romaine.net",
    "id": "29"
  },
  {
    "createdAt": "2033-01-04T04:55:07.204Z",
    "title": "Chrysler Camry",
    "author": "Betty.Treutel",
    "imgUrl": "http://loremflickr.com/640/480",
    "pdfUrl": "https://sunny-trombone.info",
    "id": "30"
  },
  {
    "createdAt": "2041-07-19T02:14:39.169Z",
    "title": "Fiat 2",
    "author": "Serenity.Herman10",
    "imgUrl": "http://loremflickr.com/640/480",
    "pdfUrl": "http://powerful-erosion.com",
    "id": "31"
  },
  {
    "createdAt": "2069-08-02T01:05:06.921Z",
    "title": "Dodge Cruze",
    "author": "Velma_Schiller39",
    "imgUrl": "http://loremflickr.com/640/480",
    "pdfUrl": "http://complete-cutlet.org",
    "id": "32"
  },
  {
    "createdAt": "2055-09-28T03:06:09.960Z",
    "title": "Ferrari Prius",
    "author": "Delaney_Kuhlman7",
    "imgUrl": "http://loremflickr.com/640/480",
    "pdfUrl": "https://soupy-gazebo.info",
    "id": "33"
  },
  {
    "createdAt": "1993-04-16T01:37:44.512Z",
    "title": "Chevrolet Beetle",
    "author": "Arno.Langosh",
    "imgUrl": "http://loremflickr.com/640/480",
    "pdfUrl": "https://unequaled-finisher.com",
    "id": "34"
  },
  {
    "createdAt": "2061-10-28T04:50:03.931Z",
    "title": "Mercedes Benz Taurus",
    "author": "Susana20",
    "imgUrl": "http://loremflickr.com/640/480",
    "pdfUrl": "http://corny-obsidian.info",
    "id": "35"
  },
  {
    "createdAt": "1999-08-08T17:42:39.293Z",
    "title": "Chevrolet Prius",
    "author": "Chadrick_Paucek",
    "imgUrl": "http://loremflickr.com/640/480",
    "pdfUrl": "http://plaintive-downforce.info",
    "id": "36"
  },
  {
    "createdAt": "2015-03-06T18:02:58.125Z",
    "title": "Lamborghini Camaro",
    "author": "Noel_Feeney",
    "imgUrl": "http://loremflickr.com/640/480",
    "pdfUrl": "http://burdensome-selling.com",
    "id": "37"
  },
  {
    "createdAt": "2025-08-15T09:09:18.303Z",
    "title": "Toyota Durango",
    "author": "Mayra_Morissette47",
    "imgUrl": "http://loremflickr.com/640/480",
    "pdfUrl": "http://arctic-mom.org",
    "id": "38"
  },
  {
    "createdAt": "2095-11-22T10:20:44.060Z",
    "title": "Ferrari A8",
    "author": "Anne_Dare",
    "imgUrl": "http://loremflickr.com/640/480",
    "pdfUrl": "http://scarce-coincidence.biz",
    "id": "39"
  }
]
