import React, {memo} from "react"
import {Box, Heading, Text, VStack, Image, Divider, HStack, Button} from "native-base"
import {StyleSheet} from "react-native"
import {useNavigation} from "@react-navigation/native"
import {NativeStackNavigationProp} from "@react-navigation/native-stack"
import {FishDataAPIType} from "../../types"
import FullWithImage from 'react-native-fullwidth-image'
import {COLOR_SCHEME} from "../../constants/Colors"
import {generatePdfUrl} from "../../utils/helper"

type IResearchCardType = {
  navigation: NativeStackNavigationProp<any>;
  children: React.ReactNode;
  research: FishDataAPIType;
};

const ResearchCard = ({research = {}}) => {
  const {name, type, title, text, data_pic = [], data_table = []} = research
  const navigation = useNavigation()
  return (
    <Box
      backgroundColor="coolGray.50"
      borderWidth={1}
      borderColor="coolGray.100"
      p={4}
      mb={2}
    >
      <Heading color="coolGray.700" fontWeight="semibold" fontSize="lg">
        {name}
      </Heading>
      <Divider my="4"/>
      {type === "pic" &&
          <VStack>
            {
              data_pic.map((pic, index) => {
                return <Box key={`data-pic-${index}`}>
                  <FullWithImage
                    alt={name}
                    source={{
                      uri: pic
                    }}
                  >
                  </FullWithImage>
                </Box>
              })
            }
          </VStack>
        }
      {data_table.length > 0 && <VStack space={2}>
        <Text color='coolGray.700' fontWeight='semibold'>{title}</Text>
        <Text color='coolGray.700'>{text}</Text>
        <HStack flexWrap="wrap" space={3} mt={4}>
          {data_table.map((table, index) => {
            return <Button
              key={`data-table-${index}-${table.id}`}
              onPress={() => {
                console.log(table)
                const path = generatePdfUrl(table)
                navigation.navigate("WebModal", { title: table.name, url: path });
              }}
              colorScheme="secondary"
              variant="outline"
              mb={3}
            >
              <Text color='coolGray.700'>{table.name}
              </Text></Button>
          })}
        </HStack>
      </VStack>}
    </Box>
  )
}

export default memo(ResearchCard)
