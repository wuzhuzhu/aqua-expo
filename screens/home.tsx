import {
	Box,
	Column,
	Flex,
	Center,
	Text,
	Image,
	Input,
	AspectRatio,
	Icon,
	Pressable,
	ScrollView,
} from "native-base";
import { AnimatePresence, Text as MotiText, MotiView } from "moti";
import { MotifiedText } from "../utils/motify";
import { NBAnimatedText } from "../utils/motify";
import Carousel from "react-native-snap-carousel";
import React, { useEffect, useRef, useState } from "react";

import { useBanners } from "../api/members";
import { HOMEPAGE_BTNS } from "../constants/Basic";
import { RootStackScreenProps } from "../types";
import logoImg from "../assets/images/logo.png";
import HomeScreenCard from "../components/home/card-btn";
import Logo from "../components/home/logo";
import { windowWidth } from "../utils/helper";
import { useNavigation } from "@react-navigation/native";
import {
	Easing,
	useAnimatedStyle,
	useSharedValue,
} from "react-native-reanimated";

type ICarouselType = {
	id: number;
	title: string;
	img: string;
	description?: string;
};

const CarouselItem = function ({
	item,
	index,
	navigation,
}: {
	item: ICarouselType;
	index: number;
}) {
	return (
		<Pressable
			onPress={() =>
				navigation.navigate("Member", {
					...item,
				})
			}
		>
			<AspectRatio w="300" ratio={2 / 1}>
				<Image
					source={{
						uri: item?.img,
					}}
					borderRadius={8}
					alt={item?.title || "img"}
				/>
			</AspectRatio>
			<Box
				position="absolute"
				bottom={0}
				left={0}
				right={0}
				p={1}
				backgroundColor="trueGray.700"
				opacity={75}
				borderRadius="6"
			>
				<Text fontSize="md" color="trueGray.100" numberOfLines={1}>
					{item.title}
				</Text>
			</Box>
		</Pressable>
	);
};

export default function HomeScreen({
	navigation,
}: RootStackScreenProps<"Home">) {
	const carouselRef = useRef(null);
	const [currentIndex, setCurrentIndex] = useState(null as number | null);
	/*const mockBanners = [
    {
      id: 1,
      title: "The expo app launched finally",
      description: "The expo app launched finally, congres everybody!",
      logo: "https://picsum.photos/id/1/640/240",
    },
    {
      id: 2,
      title: "The expo app launched finally2",
      description:
        "The expo app launched finally, congres everybody!, \r\n coaslkdjfljads;lfjsdlf ;asdfjkladsjflkasjdflkjasdlkfjadsjkljl;fdsajlkfjasl;j;;dsaf;ds;afadsf;fddsafdsafdafs",
      logo: "https://source.unsplash.com/random/640x240",
    },
    {
      id: 3,
      title: "The expo app launched finally2",
      description:
        "The expo app launched finally, congres everybody!, \r\n coaslkdjfljads;lfjsdlf ;asdfjkladsjflkasjdflkjasdlkfjadsjkljl;fdsajlkfjasl;j;;dsaf;ds;afadsf;fddsafdsafdafs",
      logo: "https://source.unsplash.com/random/640x300",
    },
  ];*/
	const { data: banners, isLoading } = useBanners();
	return (
		<Box safeArea>
			<Column justifyContent="center" space={4}>
				<Logo imageMaxWidth="70%" mt={4} />
				<Center h={150}>
					{banners ? (
						<MotiView
							from={{ opacity: 0, translateX: 30 }}
							animate={{ opacity: 1, translateX: 0 }}
							transition={{
								type: "timing",
								duration: 400,
								delay: 50,
							}}
						>
							<Carousel
								layout={"default"}
								ref={carouselRef}
								data={banners}
								sliderWidth={375}
								itemWidth={300}
								renderItem={({ item, index }) =>
									CarouselItem({ item, index, navigation })
								}
								onSnapToItem={(index: number) => setCurrentIndex(index)}
							/>
						</MotiView>
					) : (
						<MotifiedText
							from={{
								opacity: 0,
								translateY: 30,
							}}
							animate={{
								opacity: 1,
								translateY: 0,
							}}
							transition={{
								type: "timing",
								duration: 300,
								delay: 50,
							}}
							textAlign="center"
							maxWidth="60%"
							color="trueGray.600"
						>
							Premium Rendered Proteins for Sustainable Aquaculture in the World
						</MotifiedText>
					)}
				</Center>
				<ScrollView>
					<Center mt={2} mx={2}>
						<Flex direction="row">
							<HomeScreenCard {...HOMEPAGE_BTNS[0]} navigation={navigation} />
							<HomeScreenCard {...HOMEPAGE_BTNS[1]} navigation={navigation} />
						</Flex>
						<Flex direction="row">
							<HomeScreenCard {...HOMEPAGE_BTNS[2]} navigation={navigation} />
							<HomeScreenCard {...HOMEPAGE_BTNS[3]} navigation={navigation} />
						</Flex>
					</Center>
				</ScrollView>
			</Column>
		</Box>
	);
}
