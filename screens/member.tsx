import React, { memo } from "react";
import {
	AspectRatio,
	Box,
	Center,
	Column,
	Heading,
	Image,
	Pressable,
	Text,
	ScrollView,
	Button,
} from "native-base";
import { StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { MemberType } from "../types";

type IMemberScreenType = {
	navigation: NativeStackNavigationProp<any>;
	children: React.ReactNode;
	route: { params: MemberType };
};

const MemberScreen = ({ navigation, route }: IMemberScreenType) => {
	const {
		title: name = "",
		url = "",
		img = "",
		description = "",
		type = "",
	} = route?.params;
	const goWebsite = function () {
		navigation.navigate("WebModal", { title: name, url });
	};
	return (
		<Center safeAreaBottom>
			<AspectRatio w="100%" ratio={type === "logo" ? 1 : 2 / 1}>
				<Image
					source={{
						uri: img,
					}}
					mb={4}
					resizeMode="contain"
					alt={name || "img"}
				/>
			</AspectRatio>
			<ScrollView w="100%">
				<Column px={4} space={4} w="100%">
					<Heading color="coolGray.700">{name}</Heading>
					<Text color="coolGray.700" fontSize="md">
						{description}
					</Text>
					{url ? (
						<Button
							variant="outline"
							colorScheme="secondary"
							onPress={() =>
								navigation.navigate("WebModal", { title: name, url })
							}
						>
							<Text>Click to view more..</Text>
						</Button>
					) : null}
				</Column>
			</ScrollView>
		</Center>
	);
};

const styles = StyleSheet.create({
	wrapper: {},
});

export default memo(MemberScreen);
