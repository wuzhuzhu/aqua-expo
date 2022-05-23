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
import {windowWidth, windowHeight} from '../utils/helper'

export default function PublicationsScreen({
                                        navigation,
                                      }: {
  navigation: NativeStackNavigationProp<any>
}) {
  const {data: publications, isLoading, isSuccess, refetch} = usePublications()
  const hasPublication = Array.isArray(publications) && publications.length > 0

  const wrapperMarginX = 8
  const columnNum = 2
  const cardSpace = 2
  const wrapperStyle = function(i: number) {
    return {
      bg: "primary.100",
      oddMarginRight: cardSpace,
      flexWrap: "wrap" ,
      alignItems: "flex-start",
      // justifyContent: "space-between",
    }
  }

  const cardWidth = (windowWidth - wrapperMarginX * 2 - cardSpace)/columnNum
  const checkOdd = (i: number) => i%2 ===0

  if (isLoading) return <MasoryLoading2 />
  return (
    <ScreenHead navigation={navigation}>
      <>
      <Heading
        onPress={() => navigation.navigate('Home')}
        mt={2} ml={2} mb={6} size="xl" pb={2} maxWidth="70%" fontWeight="medium" color="trueGray.900"
        // style={{ shadowOffset: { height: 2, width: 2 }, shadowOpacity:0.2, shadowRadius:3 }}
      >Publications</Heading>
      {hasPublication ? <Row {...wrapperStyle}>
        {publications.map((p, i) => <PublicationCard marginRight={checkOdd(i)?cardSpace:0} cardWidth={cardWidth} p={p} key={i} />)}
      </Row> : <EmptyList text="There's No Publication yet." />}
      </>
    </ ScreenHead>
  );
}
