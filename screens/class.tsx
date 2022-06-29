import {Box, Text} from 'native-base'
import HeaderText from "../components/common/header-text"
import React from "react"
import SubHeaderText from "../components/common/sub-header-text"
import ScreenHead from "../components/common/screen-head"
import {isLoading} from "expo-font"
import {ListCardsLoading} from "../components/common/loading"
import {useClasses} from "../api/database"
import StaggeredList from "../components/common/staggered-list"
import ClassCard from "../components/database/class-card"

export default function ClassesScreen({navigation, route}) {
  const {data = {}, isLoading} = useClasses({id: route?.params?.id})
  const {classes = [], title} = data
  if (isLoading) return <ListCardsLoading />;
  return <ScreenHead navigation={navigation}>
    <HeaderText navigation={navigation}>{route?.params?.title}</HeaderText>
    <StaggeredList>
      {classes && classes.map(classItem => {
        return <ClassCard key={classItem.id} classesName={title} classItem={classItem} />
      })}
    </StaggeredList>
  </ScreenHead>
}
