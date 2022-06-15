import React from "react";
import {
	NativeStackNavigationProp,
	NativeStackScreenProps,
} from "@react-navigation/native-stack";
import {
	Center,
	Box,
	Column,
	ScrollView,
	Text,
	Heading,
	PresenceTransition,
	Image,
} from "native-base";
import MasonryList from "@react-native-seoul/masonry-list";
import MaskedView from "@react-native-masked-view/masked-view";
import { LinearGradient } from "expo-linear-gradient";

import ScreenHead from "../components/common/screen-head";
import HeaderText from "../components/common/header-text";
import { useMembers } from "../api/members";
import { EmptyList, MasoryLoading } from "../components/common/loading";
import MasonryCard from "../components/members/masonry-card";
import { COLOR_SCHEME } from "../constants/Colors";

export default function MembersScreen({
	navigation,
}: {
	navigation: NativeStackNavigationProp<any>;
}) {
	const { data, isLoading, isSuccess, refetch } = useMembers();
	const hasMembers = Array.isArray(data) && data.length > 0;
	if (isLoading) return <MasoryLoading />;
	return (
		<ScreenHead navigation={navigation}>
			<>
				<HeaderText navigation={navigation}>NARA Members</HeaderText>
				{hasMembers ? (
					<MasonryList
						data={data}
						keyExtractor={(item): string => item.id}
						numColumns={3}
						showsVerticalScrollIndicator={false}
						renderItem={({ item }) => <MasonryCard {...item} />}
						refreshing={isLoading}
					/>
				) : (
					<EmptyList text="There's No Member yet." />
				)}
			</>
		</ScreenHead>
	);
}
