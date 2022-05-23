import React, {memo} from 'react'
import {Box, Heading, Row} from "native-base"
import Animated, {FadeInRight} from "react-native-reanimated"
import logoImg from "../../assets/images/logo.png"
import MasonryList from "@react-native-seoul/masonry-list"
import MasonryCard from "../lectures/lecture-card"
import useOverscollImageStyle from "../../hooks/useOverscollImageStyle"
import {NativeStackNavigationProp} from "@react-navigation/native-stack"

type IScreenHeadProps = {
  navigation: NativeStackNavigationProp<any>
  children: React.ReactChild
}

const ScreenHead = function ({navigation, children, title, customizeContainer}: IScreenHeadProps):JSX.Element {
  const {overscollImageStyle, scrollHandler} = useOverscollImageStyle()
  return <Box safeAreaTop px={2} flex={1}>
    <Box height={180} position="absolute" right={0} top={-4} opacity={0.35}>
      <Animated.Image entering={FadeInRight.duration(800).delay(400)} style={[overscollImageStyle, { flex: 1, maxWidth: 280 }]} resizeMode="contain" source={logoImg} />
    </Box>
    <Animated.ScrollView
      showsVerticalScrollIndicator={false}
      onScroll={scrollHandler}
      scrollEventThrottle={16}
    >
      {children}
    </Animated.ScrollView>
  </Box>
}

export default memo(ScreenHead)
