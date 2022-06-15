import React, { memo } from "react";
import { Heading } from "native-base";
import { LinearGradient } from "expo-linear-gradient";
import { COLOR_SCHEME } from "../../constants/Colors";
import MaskedView from "@react-native-masked-view/masked-view";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type HeaderTextProps = {
	children: React.ReactChildren | string;
	navigation: NativeStackNavigationProp<any>;
};

const HeaderText = function ({ children, navigation }: HeaderTextProps) {
	return (
		<MaskedView
			maskElement={
				<Heading
					onPress={() => navigation.navigate("Home")}
					mt={2}
					ml={2}
					mb={6}
					size="xl"
					pb={2}
					maxWidth="70%"
					fontWeight="semibold"
					color="trueGray.900"
				>
					{children}
				</Heading>
			}
		>
			<LinearGradient
				colors={[COLOR_SCHEME.NARA_GREEN, COLOR_SCHEME.NARA_BLUE]}
				end={{ x: 0, y: 0.5 }}
				style={{ height: 70 }}
			/>
		</MaskedView>
	);
};

export default memo(HeaderText);
