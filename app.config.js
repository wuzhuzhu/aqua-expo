const IS_DEV = process.env.APP_VARIANT === "development";

export default {
	expo: {
		name: IS_DEV ? "nara4aqua(dev)" : "nara4aqua",
		slug: "aqua-expo",
		version: "1.0.7",
		orientation: "portrait",
		icon: "./assets/images/icon.png",
		scheme: "myapp",
		userInterfaceStyle: "automatic",
		splash: {
			image: "./assets/images/splash.png",
			resizeMode: "contain",
			backgroundColor: "#ffffff",
		},
		updates: {
			fallbackToCacheTimeout: 0,
		},
		assetBundlePatterns: ["**/*"],
		ios: {
			supportsTablet: true,
			bundleIdentifier: IS_DEV ? "com.nara.aquaexpo-dev" : "com.nara.aquaexpo",
		},
		android: {
			adaptiveIcon: {
				foregroundImage: "./assets/images/adaptive-icon.png",
				backgroundColor: "#ffffff",
			},
			package: IS_DEV ? "com.nara.aquaexpo" : "com.nara.aquaexpo",
		},
		web: {
			favicon: "./assets/images/favicon.png",
		},
		extra: {
			eas: {
				projectId: "f764f0c3-fa7c-49f5-9b9c-20cf94ff024e",
			},
		},
	},
};
