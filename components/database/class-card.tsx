import React, {memo} from "react"
import {AspectRatio, Box, Text, Image, Center, Stack, Heading} from "native-base"
import {StyleSheet} from "react-native"
import {useNavigation} from "@react-navigation/native"
import {NativeStackNavigationProp} from "@react-navigation/native-stack"
import {ClassType} from "../../types"
import {COLOR_SCHEME} from "../../constants/Colors"

type IClassCardPropType = {
  navigation: NativeStackNavigationProp<any>;
  children: React.ReactNode;
  class: ClassType
  classesName: string
};

const ClassCard = ({classItem, classesName}: IClassCardPropType) => {
  return <Box
    rounded="lg"
    overflow="hidden"
    borderWidth="1"
    mx={2}
    mb={3}
    borderColor="coolGray.200"
    backgroundColor="gray.50"
  >
    <Box>
      <AspectRatio w="100%" ratio={2.5 / 1}>
        <Image source={{
          uri: classItem?.cover || 'https://via.placeholder.com/480x270?text=No+Image+Yet'
        }} alt="image"/>
      </AspectRatio>
      <Center bg={COLOR_SCHEME.NARA_GREEN} _text={{
        color: "warmGray.50",
        fontWeight: "700",
        fontSize: "xs"
      }} position="absolute" bottom="0" px="3" py="1.5">
        {classesName}
      </Center>
    </Box>
    <Stack space={2} p={4}>
      <Heading size="md" ml="-1">
        {classItem.name}
      </Heading>
      <Text fontSize="sm" color={COLOR_SCHEME.NARA_GREEN} fontWeight="500" ml="-0.5" mt="-1">
        {classItem.subname}
      </Text>
    </Stack>
  </Box>
}

export default memo(ClassCard)
