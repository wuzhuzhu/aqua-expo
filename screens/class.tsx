import {Box, Text} from 'native-base'
import HeaderText from "../components/common/header-text"
import React from "react"
import SubHeaderText from "../components/common/sub-header-text"
import ScreenHead from "../components/common/screen-head"
import {isLoading} from "expo-font"
import {ListCardsLoading} from "../components/common/loading"
import {useClasses} from "../api/database"

export default function ClassScreen({navigation, route}) {
  const {data: classes, isLoading} = useClasses({id: route?.params?.id})
  if (isLoading) return <ListCardsLoading />;
  return <ScreenHead navigation={navigation}>
    <HeaderText navigation={navigation}>{route?.params?.title}</HeaderText>
    <SubHeaderText>
      {classes?.title}
    </SubHeaderText>
  </ScreenHead>
}
