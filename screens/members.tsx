import React from "react";
import {NativeStackNavigationProp, NativeStackScreenProps} from "@react-navigation/native-stack"
import {Center, Box, Column, ScrollView, Text, Heading, PresenceTransition, Image} from "native-base"
import MasonryList from '@react-native-seoul/masonry-list';
import ScreenHead from '../components/common/screen-head'

import {useMembers} from "../api/members"
import {EmptyList, MasoryLoading} from '../components/common/loading'
import MasonryCard from '../components/members/masonry-card'
import useOverscollImageStyle from '../hooks/useOverscollImageStyle'

import {RootTabParamList} from '../types'

export default function MembersScreen({
  navigation,
}: {
  navigation: NativeStackNavigationProp<any>
}) {
  const {data, isLoading, isSuccess, refetch} = useMembers()
  const hasMembers = Array.isArray(data) && data.length > 0
  if (isLoading) return <MasoryLoading />
  return (
    <ScreenHead navigation={navigation}>
      <>
      <Heading
        onPress={() => navigation.navigate('Home')}
        mt={2} ml={2} mb={6} size="xl" pb={2} maxWidth="70%" fontWeight="medium" color="trueGray.900"
      >NARA Members</Heading>
      {hasMembers ? <MasonryList
        data={data}
        keyExtractor={(item): string => item.id}
        numColumns={3}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => <MasonryCard {...item} />}
        refreshing={isLoading}
      /> : <EmptyList text="There's No Member yet." />}
      </>
    </ ScreenHead>
  );
}


