import React, {useMemo} from "react"
import {motify, MotiPressable} from "moti"
import {Box, Center, Badge, Factory, Heading, Icon, Row, Text} from 'native-base'
import Animated from 'react-native-reanimated';
import {LinearGradient} from 'expo-linear-gradient'
import {Image, ImageBackground as IBg, ScrollView as Sv} from 'react-native'
import {LayoutAnimation} from 'react-native'
import {COLOR_SCHEME} from "../constants/Colors"
import {Feather} from "@expo/vector-icons"

export const MotifiedBox = motify(Box)()
export const MotifiedCenter = motify(Center)()
export const MotifiedText = motify(Text)()

export const MotifiedImageBackground = motify(IBg)()

export const ImageBackground = Factory(IBg);
export const ScrollView = Factory(Sv);
export const NBAnimatedView = Factory(Animated.View);
export const NBAnimatedText = Factory(Animated.Text);

export const AnimatedCenter = Animated.createAnimatedComponent(Center)
export const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient)
