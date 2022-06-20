import {NativeStackNavigationProp} from "@react-navigation/native-stack"
import {Heading, FlatList} from 'native-base'

import {useNutrients} from "../api/database"
import {ListCardsLoading, MasoryLoading2} from "../components/common/loading"
import ScreenHead from "../components/common/screen-head"
import HeaderText from "../components/common/header-text"
import {useNavigation} from "@react-navigation/native"
import NutrientListItem from "../components/database/nutrient-list-item"

export default function DatabaseScreen() {
  const navigation = useNavigation<ReturnType<useNavigation>>()
  const {
    data: nutrients = [],
    isLoading,
    isSuccess,
    refetch,
  } = useNutrients();

  // console.warn('===========', nutrients)

  if (isLoading) return <ListCardsLoading />;
  return (
    <ScreenHead navigation={navigation}>
      <>
        <HeaderText navigation={navigation} lines={2}>Database</HeaderText>
        <Heading
          onPress={() => navigation.navigate("Home")}
          mt={-2}
          ml={2}
          mb={6}
          size="md"
          pb={2}
          maxWidth="70%"
          fontWeight="normal"
          color="trueGray.600"
        >for Nutrient and Digestibility and Growth Trails</Heading>
        <FlatList
          data={nutrients}
          renderItem={(item) => {
            return <NutrientListItem nutrient={item} />
          }}
        />
      </>
    </ScreenHead>
  )
}
