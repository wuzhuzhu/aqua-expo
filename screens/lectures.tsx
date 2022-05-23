import React from "react";
import {NativeStackNavigationProp, NativeStackScreenProps} from "@react-navigation/native-stack"
import {Center, Box, Column, ScrollView, Text, Heading, PresenceTransition, Image} from "native-base"
import MasonryList from '@react-native-seoul/masonry-list';
import Animated, {FadeInDown, useSharedValue, useAnimatedScrollHandler, useAnimatedStyle, useDerivedValue} from 'react-native-reanimated'

import {useLectures} from "../api/lectures"
import {EmptyList, MasoryLoading2} from '../components/common/loading'
import StaggeredList from '../components/common/staggered-list'
import MasonryCard from '../components/lectures/lecture-card'
import logoImg from "../assets/images/logo.png"
import useOverscollImageStyle from "../hooks/useOverscollImageStyle"
import ScreenHead from '../components/common/screen-head'

export default function LecturesScreen({
  navigation,
}: {
  navigation: NativeStackNavigationProp<any>
}) {
  const {data, isLoading, isSuccess, refetch} = useLectures()
  const hasLecture = Array.isArray(data) && data.length > 0
  if (isLoading) return <MasoryLoading2 />
  return (
    <ScreenHead navigation={navigation} title="Lecture Videos">
      {hasLecture ? <MasonryList
        data={data}
        keyExtractor={(item): string => item.id}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => <MasonryCard {...item} />}
        refreshing={isLoading}
      /> : <EmptyList text="There's No Lecture Yet." />}
    </ScreenHead>
  );
}


