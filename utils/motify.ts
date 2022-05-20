import {motify} from "moti"
import { Factory } from 'native-base';
import {Box, Center} from "native-base"
import {ImageBackground as IBg} from 'react-native'

export const MotifiedBox = motify(Box)()
export const MotifiedCenter = motify(Center)()

export const ImageBackground = Factory(IBg);
