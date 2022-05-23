import {Box, Heading, Text, Row} from 'native-base'
import Animated from 'react-native-reanimated'

import StaggeredList from '../components/common/staggered-list'
import {NativeStackNavigationProp} from "@react-navigation/native-stack"
import {MasoryLoading2, EmptyList} from "../components/common/loading"
import ScreenHead from "../components/common/screen-head"
import MasonryList from "@react-native-seoul/masonry-list"
import MasonryCard from "../components/members/masonry-card"
import React from "react"
import {usePublications} from "../api/publications"
import PublicationCard from "../components/publication/publication-card"

export default function PublicationsScreen({
                                        navigation,
                                      }: {
  navigation: NativeStackNavigationProp<any>
}) {
  const {data: publications, isLoading, isSuccess, refetch} = usePublications()
  const hasPublication = Array.isArray(publications) && publications.length > 0

  if (isLoading) return <MasoryLoading2 />
  return (
    <ScreenHead navigation={navigation} title="Publications">
      {hasPublication ? <StaggeredList>
        {publications.map((p, i) => <PublicationCard p={p} key={i} />)}
      </StaggeredList> : <EmptyList text="There's No Publication yet." />}
    </ ScreenHead>
  );
}
