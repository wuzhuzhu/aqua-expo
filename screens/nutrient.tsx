import { Box, Text } from "native-base";
import { useNutrient } from "../api/database";

export default function NutrientScreen() {
	const { nutrients } = useNutrient();
	return (
		<Box safeArea>
			<Text>NutrientScreen</Text>
		</Box>
	);
}
