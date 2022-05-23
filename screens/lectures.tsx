import React from "react";
import {NativeStackNavigationProp, NativeStackScreenProps} from "@react-navigation/native-stack"
import {Center, Box, Column, ScrollView, Text, Heading, PresenceTransition, Image} from "native-base"
import MasonryList from '@react-native-seoul/masonry-list';
import Animated, {FadeInDown, useSharedValue, useAnimatedScrollHandler, useAnimatedStyle, useDerivedValue} from 'react-native-reanimated'

import {useLectures} from "../api/lectures"
import {MasoryLoading2} from '../components/common/loading'
import StaggeredList from '../components/common/staggered-list'
import MasonryCard from '../components/lectures/lecture-card'
import logoImg from "../assets/images/logo.png"
import useOverscollImageStyle from "../hooks/useOverscollImageStyle"

export default function LecturesScreen({
  navigation,
}: {
  navigation: NativeStackNavigationProp<any>
}) {
  const {data, isLoading, isSuccess, refetch} = useLectures()
  const {overscollImageStyle, scrollHandler} = useOverscollImageStyle()

  if (isLoading) return <MasoryLoading2 />
  return (
    <Box safeAreaTop px={2}>
      <Box height={180} position="absolute" right={0} top={-4} opacity={0.35}>
        <Animated.Image entering={FadeInDown.duration(600).delay(300)} style={[overscollImageStyle, { flex: 1, maxWidth: 280 }]} resizeMode="contain" source={logoImg} />
      </Box>
      <Animated.ScrollView
        contentContainerStyle={{ width: "100%" }}
        showsVerticalScrollIndicator={false}
        onScroll={scrollHandler}
        scrollEventThrottle={15}
      >
        <Heading
          onPress={() => navigation.navigate('Home')}
          mt={2} ml={2} mb={6} size="xl" pb={2} maxWidth="70%" fontWeight="medium" color="trueGray.900"
          // style={{ shadowOffset: { height: 2, width: 2 }, shadowOpacity:0.2, shadowRadius:3 }}
        >Lecture Videos</Heading>
        <MasonryList
          data={data}
          keyExtractor={(item): string => item.id}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => <MasonryCard {...item} />}
          refreshing={isLoading}
        />
      </Animated.ScrollView>
    </Box>
  );
}


