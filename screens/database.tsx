import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Heading, FlatList, Box, Button } from "native-base";
import { get } from "lodash";

import { useInfiniteNutrients, useNutrients } from "../api/database";
import {
	ListCardsLoading,
	ListFooter,
	MasoryLoading2,
} from "../components/common/loading";
import ScreenHead from "../components/common/screen-head";
import HeaderText from "../components/common/header-text";
import { useNavigation } from "@react-navigation/native";
import NutrientListItem from "../components/database/nutrient-list-item";
import Animated, {
	FadeInRight,
	useAnimatedScrollHandler,
	useSharedValue,
} from "react-native-reanimated";
import logoImg from "../assets/images/logo.png";
import useOverscollImageStyle from "../hooks/useOverscollImageStyle";
import { useRef, useState } from "react";
import SubHeaderText from "../components/common/sub-header-text";
import BottomTabSpacer from "../components/common/bottom-tab-spacer"
// const AnimatFlatList = Animated.createAnimatedComponent(FlatList);

export default function DatabaseScreen() {
	// TODO: implement search
	// const { searchKey, setSearchKey } = useState("");
	const navigation = useNavigation<ReturnType<useNavigation>>();
	const { overscollImageStyle, scrollHandler, translationY } =
		useOverscollImageStyle();
	const {
		data = {},
		isLoading,
		isRefetching,
		refetch,
		error,
		fetchNextPage,
		hasNextPage,
		isFetching,
		isFetchingNextPage,
		status,
		hasMore,
	} = useInfiniteNutrients();

	const { nutrients } = data;

	// TODO: implement screen head with out scrollview, pass handleScroll to parent components
	if (isLoading) return <ListCardsLoading />;
	return (
		<Box safeAreaTop px={2} flex={1}>
			<Box height={180} position="absolute" right={0} top={-4} opacity={0.35}>
				<Animated.Image
					entering={FadeInRight.duration(800).delay(400)}
					style={[overscollImageStyle, { flex: 1, maxWidth: 280 }]}
					resizeMode="contain"
					source={logoImg}
				/>
			</Box>
			<>
				<HeaderText navigation={navigation} lines={2}>
					Database
				</HeaderText>
				<SubHeaderText>
					for Nutrient and Digestibility and Growth Trails
				</SubHeaderText>
				<Animated.FlatList
					data={nutrients}
					onRefresh={refetch}
					refreshing={isFetchingNextPage}
					onEndReached={() => {
						fetchNextPage();
					}}
					ListFooterComponent={
						<ListFooter {...{ hasMore, isLoading, isFetching, isRefetching }} />
					}
					onEndReachedThreshold={0.5}
					renderItem={({ item: nutrient, index }) => {
						return <NutrientListItem {...{ nutrient }} />;
					}}
					scrollEventThrottle={16}
				/>
			</>
		</Box>
	);
}
