import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Center, Box, Column, ScrollView, Text, Heading } from "native-base";
import MasonryList from '@react-native-seoul/masonry-list';

import {useMembers} from "../api/members"
import Logo from '../components/home/logo'
import {MasoryLoading} from '../components/loading'
import MasonryCard from '../components/members/masonry-card'

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
        <Heading onPress={() => navigation.navigate('Home')} mt={2} ml={2} mb={6} size="xl" maxWidth="70%" fontWeight="semibold" color="trueGray.900">NARA Membership Directory</Heading>
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


