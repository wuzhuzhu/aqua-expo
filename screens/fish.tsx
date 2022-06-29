import React, {memo} from "react"
import {AspectRatio, Box, Text, Image} from "native-base"
import {StyleSheet} from "react-native"
import {useNavigation} from "@react-navigation/native"
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

type IFishesPropsType = {
  navigation: NativeStackNavigationProp<any>;
  children: React.ReactNode;
};

const FishScreen = ({navigation, route}: IFishesPropsType) => {
  const {data = {}, isLoading} = useFish({id: route?.params?.id})
  const mockData = {
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
  }
  const {name, subname, cover, data: researches = []} = mockData
  if (isLoading) return <ListCardsLoading />;
  return <Box>
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

    </Box>

  </Box>
}

export default memo(FishScreen)
