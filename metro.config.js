const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");
const path = require("path");

// Отримуємо базову конфігурацію Metro
const config = getDefaultConfig(__dirname);

const { assetExts, sourceExts } = config.resolver;

// 🔧 Налаштовуємо трансформер для SVG-файлів
config.transformer = {
	babelTransformerPath: require.resolve("react-native-svg-transformer"),
};

// 🔧 Змінюємо резолвер, щоб обробляв .svg як source
config.resolver = {
	assetExts: assetExts.filter((ext) => ext !== "svg"),
	sourceExts: [...sourceExts, "svg"],
};

// 📦 Обгортаємо конфігурацію з підтримкою NativeWind
module.exports = withNativeWind(config, {
	input: "./global.css", // якщо потрібно (тільки для Web)
});
