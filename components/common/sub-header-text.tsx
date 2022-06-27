import React, { memo } from "react";
import { useNavigation } from "@react-navigation/native";
import { Heading } from "native-base";

type SubHeaderTextProps = {
	children: React.ReactChildren | string;
};

const SubHeaderText = function ({ children }: SubHeaderTextProps) {
	const navigation = useNavigation();
	return (
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
		>
			for Nutrient and Digestibility and Growth Trails
		</Heading>
	);
};

export default memo(SubHeaderText);
