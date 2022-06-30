import React, { memo } from "react";
import { Heading } from "native-base";
import { LinearGradient } from "expo-linear-gradient";
import { COLOR_SCHEME } from "../../constants/Colors";
import MaskedView from "@react-native-masked-view/masked-view";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type HeaderTextProps = {
	children: React.ReactChildren | string | undefined;
	navigation: NativeStackNavigationProp<any>;
	size?: "sm" | "md" | "lg" | 'xl' | '2xl';
};

const HeaderText = function ({ children, navigation, size = 'xl', mb = 6, ml = 2, pb = 2 }: HeaderTextProps) {
	return (
		<MaskedView
			maskElement={
				<Heading
					onPress={() => navigation.navigate("Home")}
					mt={2}
					ml={ml}
					mb={mb}
					size={size}
					pb={pb}
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
