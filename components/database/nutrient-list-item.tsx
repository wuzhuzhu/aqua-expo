import {useNavigation} from "@react-navigation/native"
import {NutrientType} from "../../types"
import {Box, Text} from "native-base"

export default function NutrientListItem(nutrient: NutrientType) {
  const navigation = useNavigation();
  const {name} = nutrient
  return (
    <Box>
      <Text>{name}</Text>
    </Box>
  )
}
