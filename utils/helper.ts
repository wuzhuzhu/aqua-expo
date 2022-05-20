import { Factory } from 'native-base';
import { Dimensions } from 'react-native';

export const windowWidth = Dimensions.get('window').width;
export const windowHeight = Dimensions.get('window').height;
export const isDev = process.env.NODE_ENV === 'development';

