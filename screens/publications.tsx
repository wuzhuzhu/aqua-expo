import { Box, Heading, Text, Row } from "native-base";
import React, { useCallback, useState, useMemo } from "react";

import SlideInHint from "../components/common/slide-in-hint";
import StaggeredList from "../components/common/staggered-list";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { MasoryLoading2, EmptyList } from "../components/common/loading";
import ScreenHead from "../components/common/screen-head";
import { usePublications } from "../api/publications";
import PublicationCard from "../components/publication/publication-card";
import { windowWidth, windowHeight, checkOdd } from "../utils/helper";
import HeaderText from "../components/common/header-text";

export default function PublicationsScreen({
	navigation,
}: {
	navigation: NativeStackNavigationProp<any>;
}) {
	const {
		data: publications = [],
		isLoading,
		isSuccess,
		refetch,
	} = usePublications();
	const hasPublication = Array.isArray(publications) && publications.length > 0;

	const themeConstant = 4;
	const pagePadding = 2;
	const columnNum = 2;
	const cardSpace = 2;
	// console.log(windowWidth)
	const wrapperStyle = {
		// bg: "primary.300",
		flexWrap: "wrap",
		alignItems: "flex-start",
		alignContent: "stretch",
	};
	const [expandedIndex, setExpandedIndex] = useState(-1);
	const cardWidth = useMemo(
		() =>
			(windowWidth -
				pagePadding * 2 * themeConstant -
				cardSpace * themeConstant) /
			2,
		[]
	);

	// calculate left card list
	const leftCardList = publications
		.map((p, i) => i)
		.filter((p, j) => {
			if (expandedIndex < 0) {
				// 没有展开卡
				return checkOdd(j);
			} else if (checkOdd(expandedIndex)) {
				// 展开的卡片是偶数
				return j < expandedIndex || (j === expandedIndex && checkOdd(j)) // 展开卡之前的，和靠左的展开卡本身不变
					? checkOdd(j)
					: !checkOdd(j);
			} else {
				// 展开的卡片是奇数
				return checkOdd(j) || expandedIndex === j;
			}
		});
	// console.log(leftCardList)
	// Start Render!
	if (isLoading) return <MasoryLoading2 />;
	return (
		<ScreenHead navigation={navigation}>
			<>
				<HeaderText navigation={navigation}>Publications</HeaderText>
				{hasPublication ? (
					<Row {...wrapperStyle}>
						<StaggeredList>
							{publications.map((p, i) => (
								<PublicationCard
									key={`p-${i}`}
									expandedIndex={expandedIndex}
									setExpandedIndex={setExpandedIndex}
									isLeft={leftCardList.includes(i)}
									cardSpace={cardSpace}
									cardWidth={cardWidth}
									p={p}
									navigation={navigation}
									rank={i}
								/>
							))}
						</StaggeredList>
					</Row>
				) : (
					<EmptyList text="There's No Publication yet." />
				)}
			</>
		</ScreenHead>
	);
}
