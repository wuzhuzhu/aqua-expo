import {
	Box,
	Column,
	Flex,
	Center,
	Text,
	Image,
	ImageBackground,
	Input,
	AspectRatio,
	Icon,
	Pressable,
} from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import Carousel from "react-native-snap-carousel";
import React, { useRef, useState } from "react";

import { useBanners } from "../api/members";
import { HOMEPAGE_BTNS } from "../constants/Basic";
import { RootStackScreenProps } from "../types";
import logoImg from "../assets/images/logo.png";
import HomeScreenCard from "../components/home/card-btn";
import Logo from "../components/home/logo";
import { windowWidth } from "../utils/helper";
import { useNavigation } from "@react-navigation/native";

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
				<Center>
					<Text
						onPress={() => navigation.navigate("Modal2")}
						textAlign="center"
						maxWidth="60%"
						color="trueGray.600"
					>
						Premium Rendered Proteins for Sustainable Aquaculture in the World
					</Text>
				</Center>
				<Center>
					{banners && (
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
					)}
				</Center>
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
			</Column>
		</Box>
	);
}
