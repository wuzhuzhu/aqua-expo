import { Box, Button, Text, VStack, SectionList } from "native-base";
import { useNutrient } from "../api/database";
import { MOCK_PDF } from "../constants/Basic";
import { ListCardsLoading } from "../components/common/loading";
import HeaderText from "../components/common/header-text";
import React from "react";
import ScreenHead from "../components/common/screen-head";
import SubHeaderText from "../components/common/sub-header-text";

export default function NutrientScreen({ route, navigation }) {
	const { nutrientId, title } = route.params;
	const { nutrient = {}, isLoading, error } = useNutrient({ nutrientId });
	const mockNutrient = {
		id: "9",
		name: "Proteins",
		descriptions: [
			{
				id: "1",
				title: "Proteins' Thursday",
				linkType: "node",
				link: ["Nutrient", { id: 2 }],
			},
			{
				id: "2",
				title: "Proteins' Weekday",
				linkType: "pdf",
				link: MOCK_PDF,
			},
			{
				id: "3",
				title: "Proteins' Monday",
				linkType: "pdf",
				link: MOCK_PDF,
			},
		],
		classes: [
			{
				id: "1",
				name: "Double tail fishes Class Research",
				description:
					"some description text here, should be very, very, very looog. I don't know much about fishes",
				fishes: [
					{
						id: "1",
						name: "Double tail flag fish",
						linkType: "pdf",
						link: MOCK_PDF, // 目标是pdf，么有页数 https://www.example.com/sample.pdf
					},
					{
						id: "2",
						name: "Double tail bite fish",
						linkType: "pdf",
						link: MOCK_PDF, // 目标是pdf,页数拼接规则 https://www.example.com/sample.pdf#page=1
					},
					{
						id: "3",
						name: "Double tail Brazil fish",
						linkType: "node",
						link: ["Nutrient", { id: 2 }], // 目标是详情，带参数情况
					},
					{
						id: "4",
						name: "Double tail Brazil fish",
						linkType: "node",
						link: ["Nutrients", {}], // 目标是列表，不带参数情况
					},
				],
			},
			{
				id: "2",
				name: "Single-eyes fishes Class",
				description:
					"some description text here, should be very, very, very looog. I don't know much about fishes",
				fishes: [
					{
						id: "1",
						name: "Single tail flag fish",
					},
					{ id: "2", name: "Single Eyes bite fish" },
					{ id: "3", name: "Single Eyes Brazil fish" },
					{ id: "4", name: "Single Eyes Brazil fish" },
					{ id: "5", name: "Single Eyes Brazil fish" },
					{ id: "6", name: "Single Eyes Brazil fish" },
					{ id: "7", name: "Single Eyes Brazil fish" },
					{ id: "8", name: "Single Eyes Brazil fish" },
					{ id: "9", name: "Single Eyes Brazil fish" },
				],
			},
			{
				id: "3",
				name: "Single-eyes fishes Class",
				description:
					"some description text here, should be very, very, very looog. I don't know much about fishes",
				fishes: [
					{
						id: "1",
						name: "Single tail flag fish",
					},
					{ id: "2", name: "Single Eyes bite fish" },
					{ id: "3", name: "Single Eyes Brazil fish" },
					{ id: "4", name: "Single Eyes Brazil fish" },
					{ id: "5", name: "Single Eyes Brazil fish" },
					{ id: "6", name: "Single Eyes Brazil fish" },
					{ id: "7", name: "Single Eyes Brazil fish" },
					{ id: "8", name: "Single Eyes Brazil fish" },
					{ id: "9", name: "Single Eyes Brazil fish" },
				],
			},
			{
				id: "4",
				name: "Single-eyes fishes Class",
				description:
					"some description text here, should be very, very, very looog. I don't know much about fishes",
				fishes: [
					{
						id: "1",
						name: "Single tail flag fish",
					},
					{ id: "2", name: "Single Eyes bite fish" },
					{ id: "3", name: "Single Eyes Brazil fish" },
					{ id: "4", name: "Single Eyes Brazil fish" },
					{ id: "5", name: "Single Eyes Brazil fish" },
					{ id: "6", name: "Single Eyes Brazil fish" },
					{ id: "7", name: "Single Eyes Brazil fish" },
					{ id: "8", name: "Single Eyes Brazil fish" },
					{ id: "9", name: "Single Eyes Brazil fish" },
				],
			},
			{
				id: "5",
				name: "Single-eyes fishes Class",
				description:
					"some description text here, should be very, very, very looog. I don't know much about fishes",
				fishes: [
					{
						id: "1",
						name: "Single tail flag fish",
					},
					{ id: "2", name: "Single Eyes bite fish" },
					{ id: "3", name: "Single Eyes Brazil fish" },
					{ id: "4", name: "Single Eyes Brazil fish" },
					{ id: "5", name: "Single Eyes Brazil fish" },
					{ id: "6", name: "Single Eyes Brazil fish" },
					{ id: "7", name: "Single Eyes Brazil fish" },
					{ id: "8", name: "Single Eyes Brazil fish" },
					{ id: "9", name: "Single Eyes Brazil fish" },
				],
			},
		],
	};

	const { name, details = [] } = nutrient;
	const sections = details.map(classItem => ({
		title: classItem.name,
		data: classItem.categories,
	}));
	debugger

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
						<HeaderText navigation={navigation}>{name}</HeaderText>
					</Box>
				)}
				sections={sections}
				renderItem={({ item }) => {
					return (
						<Button
							alignSelf="flex-start"
							variant="ghost"
							colorScheme="tertiary"
						>
							{item.name}
						</Button>
					);
				}}
				renderSectionHeader={({ section }) => (
					<Button colorScheme="muted">{section.title}</Button>
				)}
			/>
		</VStack>
	);
}
