import { Factory } from 'native-base';
import { Dimensions } from 'react-native';
import {formatDistanceToNow} from "date-fns"

export const mock = (success, mockData, timeout = 600) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(success) {
        resolve(mockData);
      } else {
        reject({message: 'Error'});
      }
    }, timeout);
  });
}

export const checkOdd = (i: number) => i%2 ===0

export function getTimeDistanceStr(timestamp: number): string {
  let timeToNow = 'unknown'
  try {
    (timeToNow = formatDistanceToNow(new Date(timestamp), {addSuffix: true}))
  } catch (e) {
    console.log('计算时间距离出错', e)
  }
  return timeToNow
}

export function swapArray(list, x, y) {
  [ list[y], list[x] ] = [ list[x], list[y] ]
}

export const getImagePlaceHolder = (x: number, y: number) => {return `https://via.placeholder.com/${x}x${y}?text=NARA`}
export const windowWidth = Dimensions.get('window').width;
export const windowHeight = Dimensions.get('window').height;
export const isDev = process.env.NODE_ENV === 'development';
