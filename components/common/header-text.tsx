import React, { memo, useEffect } from "react";
import { Heading, Icon, IconButton, Pressable, Row } from "native-base";
import { Feather } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { COLOR_SCHEME } from "../../constants/Colors";
import MaskedView from "@react-native-masked-view/masked-view";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";

type HeaderTextProps = {
	children: React.ReactChildren | string | undefined;
	navigation?: NativeStackNavigationProp<any>;
	size?: "sm" | "md" | "lg" | "xl" | "2xl";
	mb?: number;
	ml?: number;
	pb?: number;
	showGoBack?: boolean;
};

const HeaderText = function ({
	children,
	size = "xl",
	mb = 6,
	ml = 2,
	pb = 2,
	showGoBack = false,
}: HeaderTextProps) {
	const navigation = useNavigation();

	return (
		<Pressable
			onPress={() => {
				showGoBack ? navigation.goBack() : navigation.navigate("Home");
			}}
		>
			<MaskedView
				maskElement={
					<Row alignItems="baseline">
						{showGoBack && (
							<Icon
								as={Feather}
								name="chevron-left"
								color="warmGray.50"
								size="xl"
							/>
						)}
						<Heading
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
					</Row>
				}
			>
				<LinearGradient
					colors={[COLOR_SCHEME.NARA_GREEN, COLOR_SCHEME.NARA_BLUE]}
					end={{ x: 0, y: 0.5 }}
					style={{ height: 70 }}
				/>
			</MaskedView>
		</Pressable>
	);
};

export default memo(HeaderText);
