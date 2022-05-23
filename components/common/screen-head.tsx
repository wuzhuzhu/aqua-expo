import React, {memo} from 'react'
import {Box, Heading} from "native-base"
import Animated, {FadeInDown} from "react-native-reanimated"
import logoImg from "../../assets/images/logo.png"
import MasonryList from "@react-native-seoul/masonry-list"
import MasonryCard from "../lectures/lecture-card"
import useOverscollImageStyle from "../../hooks/useOverscollImageStyle"
import {NativeStackNavigationProp} from "@react-navigation/native-stack"

type IScreenHeadProps = {
  navigation: NativeStackNavigationProp<any>
  children: React.ReactChild
  title: string
}

const ScreenHead = function ({navigation, children, title}: IScreenHeadProps):JSX.Element {
  const {overscollImageStyle, scrollHandler} = useOverscollImageStyle()
  return <Box safeAreaTop px={2} flex={1}>
    <Box height={180} position="absolute" right={0} top={-4} opacity={0.35}>
      <Animated.Image entering={FadeInDown.duration(600).delay(300)} style={[overscollImageStyle, { flex: 1, maxWidth: 280 }]} resizeMode="contain" source={logoImg} />
    </Box>
    <Animated.ScrollView
      contentContainerStyle={{ width: "100%", height: "100%" }}
      showsVerticalScrollIndicator={false}
      onScroll={scrollHandler}
      scrollEventThrottle={15}
    >
      <Heading
        onPress={() => navigation.navigate('Home')}
        mt={2} ml={2} mb={6} size="xl" pb={2} maxWidth="70%" fontWeight="medium" color="trueGray.900"
        // style={{ shadowOffset: { height: 2, width: 2 }, shadowOpacity:0.2, shadowRadius:3 }}
      >{title}</Heading>
      {children}
    </Animated.ScrollView>
  </Box>
}

export default memo(ScreenHead)
