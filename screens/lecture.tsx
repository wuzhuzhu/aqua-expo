import React, { memo, useState, useRef, useMemo, useCallback } from "react";
import {
	LayoutAnimation,
	Platform,
	UIManager,
} from "react-native";
import {
	Box,
	Text,
	AspectRatio,
	Divider,
	Image,
	Heading,
	Stagger,
} from "native-base";
import { Video, AVPlaybackStatusSuccess } from "expo-av";
import { StatusBar } from "expo-status-bar";

import { useLecture } from "../api/lectures";
import { LectureLoading } from "../components/common/loading";
import VideoRow from "../components/lectures/video-list";
import ContolBtn from "../components/lectures/control-btn";
import { COLOR_SCHEME } from "../constants/Colors";
import { ImageBackground, ScrollView } from "../utils/motify";
import { isDev, windowHeight } from "../utils/helper";
import { Feather } from "@expo/vector-icons";
import {
	NativeStackNavigationProp,
	NativeStackScreenProps,
} from "@react-navigation/native-stack";

const showDev = false;

if (
	Platform.OS === "android" &&
	UIManager.setLayoutAnimationEnabledExperimental
) {
	UIManager.setLayoutAnimationEnabledExperimental(true);
}

export default function Lecture({
	route,
	navigation,
}: NativeStackScreenProps<any>): JSX.Element {
	const lectureId = route?.params?.id;
	const [currentIndex, setCurrentIndex] = useState(null as number | null);
	const [status, setStatus] = useState({} as AVPlaybackStatusSuccess);
	const {
		data: lecture,
		isLoading,
		isSuccess,
		refetch,
		isFetching,
	} = useLecture(lectureId);
	const videos = lecture?.videos ? lecture.videos : [];
	const currentVideo = videos[currentIndex];

	const hasSelectedIndex = useMemo(() => !isNaN(currentIndex), [currentIndex]);

	const handleVideoClick = (i: number) => {
		LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);
		setCurrentIndex(i);
	};


	if (isLoading) return <LectureLoading />;
	return (
		<Box flex={1}>
			<StatusBar style={hasSelectedIndex ? "dark" : "light"} />
			<AspectRatio
				maxHeight={0.6 * windowHeight}
				ShadowBottomHeight="80"
				shadowRadius={20}
				shadowOpacity={0.5}
				w="100%"
				ratio={hasSelectedIndex ? 16 / 9 : 4 / 3}
			>
				<ImageBackground
					source={{
						uri: currentVideo?.cover || lecture?.imgUrl
					}}
				>
					<Title isLight title="Youtube Video" />
				</ImageBackground>
			</AspectRatio>
			{showDev && (
				<>
					<Text>on playing: {onPlayingIndex}</Text>
					<Text>
						{currentIndex}:{JSON.stringify(currentVideo)}
					</Text>
				</>
			)}
			<ScrollView px={4} mt={6}>
				<>
					<Title title={lecture?.title} />
					<Divider maxWidth="90%" mt="2" bg={COLOR_SCHEME.NARA_GREEN} />
				</>
				{videos.map((v, i) => {
					return (
						<VideoRow
							key={i}
							v={v}
							i={i}
							handleVideoClick={handleVideoClick}
							currentIndex={currentIndex}
						/>
					);
				})}
			</ScrollView>
			{currentVideo?.id && <ContolBtn video={currentVideo}/>}
		</Box>
	);
}

type ITitleProps = {
	isLight?: boolean;
	title?: string;
};

const Title = memo(function ({
	isLight = false,
	title,
}: ITitleProps): JSX.Element {
	const lightStyles = {
		position: "absolute",
		color: "muted.200",
		size: "sm",
		top: 4,
		right: 4,
		shadow: "2",
		fontWeight: "normal",
	};
	return (
		<Heading
			numberOfLines={1}
			ellipsizeMode="tail"
			color="muted.800"
			fontWeight="semibold"
			size="xl"
			maxWidth="80%"
			{...(isLight ? lightStyles : {})}
		>
			{title}
		</Heading>
	);
});
