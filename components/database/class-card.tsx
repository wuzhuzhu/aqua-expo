import React, {memo} from "react"
import {Box, Text} from "native-base"
import {StyleSheet} from "react-native"
import {useNavigation} from "@react-navigation/native"
import {NativeStackNavigationProp} from "@react-navigation/native-stack"
import {ClassType} from "../../types"

type IClassCardPropType = {
  navigation: NativeStackNavigationProp<any>;
  children: React.ReactNode;
  class: ClassType
};

const ClassCard = ({classItem}: IClassCardPropType) => {
  return <Box>
    <Text>{classItem.name}</Text>
  </Box>
}

export default memo(ClassCard)
