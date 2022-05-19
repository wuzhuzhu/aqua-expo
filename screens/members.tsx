import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import {Center, Box, Column, ScrollView, Text, Heading, PresenceTransition, Image} from "native-base"
import MasonryList from '@react-native-seoul/masonry-list';
import Animated, {useSharedValue, useAnimatedScrollHandler, useAnimatedStyle, useDerivedValue} from 'react-native-reanimated'

import {useMembers} from "../api/members"
import Logo from '../components/home/logo'
import {MasoryLoading} from '../components/common/loading'
import MasonryCard from '../components/members/masonry-card'
import logoImg from "../assets/images/logo.png"

export default function MembersScreen({
  navigation,
}: {
  navigation: NativeStackScreenProps<any>;
}) {
  const {data, isLoading, isSuccess, refetch} = useMembers()
  const translationY = useSharedValue(0);
  const isScrolledMuch = useSharedValue(false);
  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      translationY.value = event.contentOffset.y;
      if (event.contentOffset.y > 60) {
        isScrolledMuch.value = true
      } else {
        isScrolledMuch.value = false
      }
    },
  });
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: (translationY.value > 0) ? 1 : 1+(-translationY.value/100),
        },
      ],
    };
  });

  if (isLoading) return <MasoryLoading />
  return (
    <Box safeAreaTop>
      <Box height={180} position="absolute" right={0} top={-4} opacity={0.35}>
        <Animated.Image style={animatedStyle} resizeMode="contain" source={logoImg} flex={1} maxWidth={280} alt="NARA Logo" />
      </Box>
      <Animated.ScrollView
        contentContainerStyle={{ width: "100%" }}
        showsVerticalScrollIndicator={false}
        onScroll={scrollHandler}
        scrollEventThrottle={15}
      >
        <Heading
          onPress={() => navigation.navigate('Home')} mt={2} ml={2} mb={6} size="xl" maxWidth="70%" fontWeight="semibold" color="trueGray.900"
          style={{ shadowOffset: { height: 2, width: 2 }, shadowOpacity:0.2, shadowRadius:3 }}
        >NARA Membership Directory</Heading>
        <MasonryList
          data={data}
          keyExtractor={(item): string => item.id}
          numColumns={3}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => <MasonryCard {...item} />}
          refreshing={isLoading}
        />
      </Animated.ScrollView>
    </Box>
  );
}


