import { useNavigation } from "@react-navigation/native";
import { NutrientType } from "../../types";
import { Button, Text } from "native-base";
import Animated, {
	LightSpeedInLeft,
	LightSpeedOutRight,
	useAnimatedStyle,
} from "react-native-reanimated";

type INutrientListItemProps = {
	nutrient: NutrientType;
};

export default function NutrientListItem({ nutrient }: INutrientListItemProps) {
	const navigation = useNavigation();

	return (
		<Animated.View>
			<Button
				p={4}
				mb={4}
				mx={2}
				onPress={() =>
					navigation.navigate("Nutrient", {
						nutrientId: nutrient.id,
						title: nutrient.name,
					})
				}
			>
				{nutrient?.name || nutrient?.title}
			</Button>
		</Animated.View>
	);
}
