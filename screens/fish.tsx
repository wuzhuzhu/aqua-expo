import React, {memo} from "react"
import {AspectRatio, Box, Text, Image} from "native-base"
import {StyleSheet} from "react-native"
import {useNavigation} from "@react-navigation/native"
import Animated from "react-native-reanimated"
import {NativeStackNavigationProp} from "@react-navigation/native-stack"
import {useClass, useFish} from "../api/database"
import {ListCardsLoading} from "../components/common/loading"
import ScreenHead from "../components/common/screen-head"
import HeaderText from "../components/common/header-text"
import StaggeredList from "../components/common/staggered-list"
import ClassCard from "../components/database/class-card"
import SubHeaderText from "../components/common/sub-header-text"
import {FishAPIType} from "../types"
import {windowHeight} from "../utils/helper"
import {ImageBackground} from "../utils/motify"
import ResearchCard from "../components/database/research-card"
import BottomTabSpacer from "../components/common/bottom-tab-spacer"

type IFishesPropsType = {
  navigation: NativeStackNavigationProp<any>;
  children: React.ReactNode;
};

/*const mockData = {
  name: 'Flying Fish',
  subname: 'You never imagine that you will see this fish, but you will see it',
  cover: 'https://assets.answersingenesis.org/img/cms/content/contentnode/header_image/flying-fish-aquatic-flight-instructors.jpg',
  data: [
    {
      id: 1,
      name: 'Why some fish are not able to fly',
      title: 'Why some fish are not able to fly?',
      text: 'its a big question to all scientest. may be in another world, it will be natural to some fish to fly. but in this world, it is not possible to fly.',
      type: 'text',
      data_table: []
    },
    {
      id: 2,
      name: 'some research only have pics',
      title: 'This is the one only have pics',
      type: 'pic',
      data_pic: [
        {
          id: 1,
          cover: 'https://hakaimagazine.com/wp-content/uploads/aquarium-reef-fish-banner.jpg'
        },
        {
          id: 2,
          cover: 'https://hakaimagazine.com/wp-content/uploads/aquarium-reef-fish-banggai-cardinalfish.jpg'
        },
      ]
    },
    {
      id: 3,
      name: 'Why some fish are not able to fly',
      title: 'some fish likes to view some pdfs',
      type: 'text',
      text: 'its a big question to all scientest. may be in another world, it will be natural to some fish to fly. but in this world, it is not possible to fly.',
      data_table: [
        {
          name: 'airbnb 2',
          url: 'https://aqua-oss.s3.us-west-2.amazonaws.com/2dc1dfc2e599809d3eeaeb9f1c718a9a.pdf',
          page: 2
        },
        {
          name: 'airbnb 4',
          url: 'https://aqua-oss.s3.us-west-2.amazonaws.com/2dc1dfc2e599809d3eeaeb9f1c718a9a.pdf',
          page: 4
        },
        {
          name: 'airbnb 2',
          url: 'https://aqua-oss.s3.us-west-2.amazonaws.com/2dc1dfc2e599809d3eeaeb9f1c718a9a.pdf',
          page: 2
        },
        {
          name: 'airbnb 2',
          url: 'https://aqua-oss.s3.us-west-2.amazonaws.com/2dc1dfc2e599809d3eeaeb9f1c718a9a.pdf',
          page: 2
        },
        {
          name: 'airbnb 2',
          url: 'https://aqua-oss.s3.us-west-2.amazonaws.com/2dc1dfc2e599809d3eeaeb9f1c718a9a.pdf',
          page: 2
        },
        {
          name: 'airbnb 2',
          url: 'https://aqua-oss.s3.us-west-2.amazonaws.com/2dc1dfc2e599809d3eeaeb9f1c718a9a.pdf',
          page: 2
        },
        {
          name: 'airbnb 2',
          url: 'https://aqua-oss.s3.us-west-2.amazonaws.com/2dc1dfc2e599809d3eeaeb9f1c718a9a.pdf',
          page: 2
        },
        {
          name: 'airbnb 2',
          url: 'https://aqua-oss.s3.us-west-2.amazonaws.com/2dc1dfc2e599809d3eeaeb9f1c718a9a.pdf',
          page: 2
        },
        {
          name: 'airbnb 2',
          url: 'https://aqua-oss.s3.us-west-2.amazonaws.com/2dc1dfc2e599809d3eeaeb9f1c718a9a.pdf',
          page: 2
        },
        {
          name: 'airbnb 2',
          url: 'https://aqua-oss.s3.us-west-2.amazonaws.com/2dc1dfc2e599809d3eeaeb9f1c718a9a.pdf',
          page: 2
        }
      ]
    },
    {
      id: 4,
      name: 'Why some fish are not able to fly',
      title: 'Why some fish are not able to fly?',
      text: 'its a big question to all scientest. may be in another world, it will be natural to some fish to fly. but in this world, it is not possible to fly.',
      type: 'text',
      data_table: []
    },
    {
      id: 5,
      name: 'Why some fish are not able to fly',
      title: 'Why some fish are not able to fly?',
      text: 'its a big question to all scientest. may be in another world, it will be natural to some fish to fly. but in this world, it is not possible to fly.',
      type: 'text',
      data_table: []
    }

  ]
}*/

const FishScreen = ({navigation, route}: IFishesPropsType) => {
  const {data: fish = {} as FishAPIType, isLoading} = useFish({id: route?.params?.id || 23})

  const {name, subname, cover, data: researches = []} = fish
  if (isLoading) return <ListCardsLoading />;
  return <Box safeAreaBottom>
    <Box>
      <AspectRatio
        ShadowBottomHeight="80"
        w="100%"
        ratio={16/9}
      >
        <Image
          alt={name}
          source={{
            uri: cover
          }}
        >
        </Image>
      </AspectRatio>
     {/* <Box position='absolute' bottom={4} left={4} py={1} px={3} borderRadius={20} backgroundColor='coolGray.50' borderColor='trueGray.200' >
        <Text fontSize='sm' color='coolGray.700'>Todo: Nutrient Info here</Text> // Todo: Nutrient Info here
      </Box>*/}
    </Box>
    <Animated.ScrollView>
      <Box pt={6} px={4} backgroundColor="coolGray.50" mb={2}>
        <Text color={"coolGray.700"}>{subname}</Text>
        <HeaderText size='lg' pb={0} mb={0} ml={0}>{name}</HeaderText>
      </Box>
      <StaggeredList>
        {researches && researches.map(research => {
            return <ResearchCard key={research.id} research={research}/>
          }
        )}
      </StaggeredList>
      <BottomTabSpacer />
    </Animated.ScrollView>
  </Box>
}

export default memo(FishScreen)
