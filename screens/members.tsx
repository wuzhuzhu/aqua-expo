import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useBreakpointValue } from "native-base";
import { Center, Box, Column, ScrollView, Text, Heading } from "native-base";
import { useMemo } from 'react'
import { View, Image } from 'react-native'
import MasonryList from '@react-native-seoul/masonry-list';

import {isDev} from '../utils/helper'
import {useMembers} from "../api/members"
import {MemberType} from "../types"
import Logo from '../components/home/logo'
import {MasoryLoading} from '../components/loading'

export default function MembersScreen({
  navigation,
}: {
  navigation: NativeStackScreenProps<any>;
}) {
  const {data, isLoading, isSuccess, refetch} = useMembers()

  if (isLoading) return <MasoryLoading />

  return (
    <Box safeAreaTop>
      <Logo imageMaxWidth="300" height={300*339/562} isAbsolute />
      <ScrollView
        contentContainerStyle={{ width: "100%" }}
        showsVerticalScrollIndicator={false}
      >
        <Heading mt={2} ml={2} mb={6} size="xl" maxWidth="70%" fontWeight="semibold" color="trueGray.900">NARA Membership Directory</Heading>
        <MasonryList
          data={data}
          keyExtractor={(item): string => item.id}
          numColumns={3}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => <MasonryCard {...item} />}
          refreshing={isLoading}
        />
      </ScrollView>
    </Box>
  );
}

function MasonryCard(member: MemberType): JSX.Element {
  const RandomBool = useMemo(() => {
    return Math.random() < 0.5
  }, [])
  const RandomBoolB = Math.random() < 0.5
  const mockUri = RandomBool ? 'https://cdn.dribbble.com/users/24078/screenshots/15522433/media/e92e58ec9d338a234945ae3d3ffd5be3.jpg?compress=1&resize=400x300':
    (RandomBoolB ? 'https://cdn.motor1.com/images/mgl/2RQQg/s3/volkswagen-new-logo.jpg' : 'https://static.mybrandnewlogo.com/images/thumbnail.jpg')
  return <View key={member.id} style={{ flex: 1, margin: 4 }}>
    <Image
      source={{ uri: isDev ? mockUri : member.logo }}
      style={{ height: RandomBool ? 120 : 150, alignSelf: 'stretch' }}
      resizeMode="cover"
    />
  </View>
}
