import React, { memo } from "react";
import { Box } from "native-base";
import { StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type ILoadingType = {
	navigation: NativeStackNavigationProp<any>;
	children: React.ReactNode;
};

const Loading = () => {
	return <Box style={styles.wrapper}></Box>;
};

const styles = StyleSheet.create({
	wrapper: {},
});

export default memo(Loading);
