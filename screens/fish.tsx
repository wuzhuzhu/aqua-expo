import React, {memo} from "react"
import {Box, Text} from "native-base"
import {StyleSheet} from "react-native"
import {useNavigation} from "@react-navigation/native"
import {NativeStackNavigationProp} from "@react-navigation/native-stack"
import {useClasses, useFish} from "../api/database"
import {ListCardsLoading} from "../components/common/loading"
import ScreenHead from "../components/common/screen-head"
import HeaderText from "../components/common/header-text"
import StaggeredList from "../components/common/staggered-list"
import ClassCard from "../components/database/class-card"
import SubHeaderText from "../components/common/sub-header-text"
import {FishAPIType} from "../types"

type IFishesPropsType = {
  navigation: NativeStackNavigationProp<any>;
  children: React.ReactNode;
};

const FishScreen = ({navigation, route}: IFishesPropsType) => {
  const {data = {}, isLoading} = useFish({id: route?.params?.id})
  const {name, subname, cover, data: researches = []} = data
  if (isLoading) return <ListCardsLoading />;
  return <ScreenHead navigation={navigation}>
    <HeaderText navigation={navigation}>{route?.params?.title || name}</HeaderText>
    <SubHeaderText>{subname}</SubHeaderText>
    <StaggeredList>
      {researches && researches.map(research => {
        // return <ResearchCard key={research.id} {...{research}} />
        return <Text key={research.id}>{research.type}: {research.name}</Text>
      })}
    </StaggeredList>
  </ScreenHead>
}

export default memo(FishScreen)
