import { Box, Button, Text, VStack, SectionList } from "native-base";
import { useNutrient } from "../api/database";
import { MOCK_PDF } from "../constants/Basic";
import { ListCardsLoading } from "../components/common/loading";
import HeaderText from "../components/common/header-text";
import React, { useCallback } from "react";
import ScreenHead from "../components/common/screen-head";
import SubHeaderText from "../components/common/sub-header-text";
import { useNavigation } from "@react-navigation/native";
import { generatePdfUrl } from "../utils/helper";
import BottomTabSpacer from "../components/common/bottom-tab-spacer";

export default function NutrientScreen({ route, navigation }) {
	const { nutrientId, title } = route.params;
	const { data: nutrient = {}, isLoading, error } = useNutrient({ nutrientId });

	const { name, details = [] } = nutrient;
	const sections = details.map(classItem => ({
		title: classItem.name,
		data: classItem.categories,
	}));

	const onPressNode = useCallback(item => {
		if (item?.link?.url) {
			const path = generatePdfUrl(item?.link || {});
			navigation.navigate("WebModal", { title, url: path });
		}
	}, []);

	const onPressItem = useCallback(item => {
		if (item?.id) {
			navigation.navigate("Classes", { id: item.id, title: item.name });
		}
	}, []);

	if (isLoading) return <ListCardsLoading />;
	return (
		<VStack safeAreaTop>
			<Box flex={1}>
				<ScreenHead navigation={navigation}></ScreenHead>
			</Box>
			<SectionList
				px={4}
				ListHeaderComponent={() => (
					<Box mb={6}>
						<HeaderText showGoBack>{name}</HeaderText>
					</Box>
				)}
				sections={sections}
				renderSectionFooter={() => <Box mb={4} />}
				renderItem={({ item }) => {
					return (
						<Button
							alignSelf="flex-start"
							variant="ghost"
							colorScheme="tertiary"
							onPress={() => {
								onPressItem(item);
							}}
						>
							{item.name}
						</Button>
					);
				}}
				renderSectionHeader={({ section }) => (
					<Button onPress={() => onPressNode(section)} colorScheme="muted">
						{section.title}
					</Button>
				)}
			/>
			<BottomTabSpacer />
		</VStack>
	);
}
