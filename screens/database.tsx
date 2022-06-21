import {NativeStackNavigationProp} from "@react-navigation/native-stack"
import {Heading, FlatList, Box, Button} from 'native-base'
import {get} from 'lodash'

import {useNutrients} from "../api/database"
import {ListCardsLoading, MasoryLoading2} from "../components/common/loading"
import ScreenHead from "../components/common/screen-head"
import HeaderText from "../components/common/header-text"
import {useNavigation} from "@react-navigation/native"
import NutrientListItem from "../components/database/nutrient-list-item"
import Animated, {FadeInRight, useAnimatedScrollHandler, useSharedValue} from "react-native-reanimated"
import logoImg from "../assets/images/logo.png"
import useOverscollImageStyle from "../hooks/useOverscollImageStyle"
import {useRef, useState} from "react"
// const AnimatFlatList = Animated.createAnimatedComponent(FlatList);

export default function DatabaseScreen() {
  const navigation = useNavigation<ReturnType<useNavigation>>()
  const {overscollImageStyle, scrollHandler, translationY} = useOverscollImageStyle()
  const {
    data: nutrients = [],
    isLoading,
    isRefetching,
    refetch,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useNutrients();

  // TODO: implement screen head with out scrollview, pass handleScroll to parent components
  if (isLoading) return <ListCardsLoading />;
  return (
    <Box safeAreaTop px={2} flex={1}>
      <Box height={180} position="absolute" right={0} top={-4} opacity={0.35}>
        <Animated.Image entering={FadeInRight.duration(800).delay(400)} style={[overscollImageStyle, { flex: 1, maxWidth: 280 }]} resizeMode="contain" source={logoImg} />
      </Box>
      <>
        <HeaderText navigation={navigation} lines={2}>Database</HeaderText>
        <Heading
          onPress={() => navigation.navigate("Home")}
          mt={-2}
          ml={2}
          mb={6}
          size="md"
          pb={2}
          maxWidth="70%"
          fontWeight="normal"
          color="trueGray.600"
        >for Nutrient and Digestibility and Growth Trails</Heading>
        <Animated.FlatList
          data={nutrients}
          onRefresh={refetch}
          refreshing={isFetchingNextPage}
          onEndReached={fetchNextPage}
          onEndReachedThreshold={0.8}
          onScroll={scrollHandler}
          renderItem={({item: nutrient, index}) => {
            return <NutrientListItem {...{nutrient, translationY}} />
          }}
          scrollEventThrottle={16}
        />
      </>
    </Box>
  )
}
