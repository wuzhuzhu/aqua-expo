import {Box, Column, Flex, Center, Text, Image, Input, AspectRatio, Icon} from 'native-base'
import {MaterialIcons} from "@expo/vector-icons"

import {RootStackScreenProps} from "../types"
import logoImg from '../assets/images/logo.png'
import {windowWidth} from "../utils/helper"
import HomeScreenCard from '../components/home/card-btn'
import {COLOR_SCHEME} from "../constants/Colors"
import {HOMEPAGE_BTNS} from '../constants/Basic'

export default function HomeScreen({navigation}: RootStackScreenProps<'Home'>) {
  console.log(windowWidth)
  return (
    <Box safeArea>
      <Column justifyContent="center" space={4}>
        <Center height="200" mt={4}>
          <Image resizeMode="contain" source={logoImg} flex={1} maxWidth="70%" alt="Picture of a Flower" />
        </Center>
        <Center>
          <Text textAlign="center" maxWidth="60%" color="trueGray.600">Premium Rendered Proteins for Sustainable Aquaculture in the World</Text>
        </Center>
        <Center>
          <Input size="10" w="80%" mt="2" InputLeftElement={<Icon as={<MaterialIcons name="search" />} size={5} ml="2" color="muted.400" />} placeholder="Search For ..." />
        </Center>
        <Center mt={2} mx={2} >
          <Flex direction="row">
            <HomeScreenCard {...HOMEPAGE_BTNS[0]} navigation={navigation} />
            <HomeScreenCard {...HOMEPAGE_BTNS[1]} navigation={navigation} />
          </Flex>
          <Flex direction="row">
            <HomeScreenCard {...HOMEPAGE_BTNS[2]} navigation={navigation} />
            <HomeScreenCard {...HOMEPAGE_BTNS[3]} navigation={navigation} />
          </Flex>
        </Center>
      </Column>

    </Box>
  )
}
