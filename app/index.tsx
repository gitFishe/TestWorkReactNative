import { Text, View } from "react-native";
import "../global.css";
import CustomButton from "@/components/CustomButton";
import { Container } from "@/components/Container";
import { router } from "expo-router";
import CustomBackground from "@/components/CustomBackground";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

import Logo from "../assets/images/logo.svg";

SplashScreen.preventAutoHideAsync();

export default function Index() {
    const [fontsLoaded] = useFonts({
        Geologica: require("../assets/fonts/Montserrat-Regular.ttf"),
    });

    useEffect(() => {
        if (fontsLoaded) {
            SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) return null;

    return (
        <CustomBackground>
            <Container>

                <Logo width={104} height={111} className="m-auto" />
                <View className="mt-auto">
                    <CustomButton
                        title="Login"
                        handlePress={() => {
                            router.navigate("/(auth)/sign-in");
                        }}
                    />
                    <CustomButton
                        title="Register"
                        containerColor="secondary"
                        containerStyle="mt-4"
                        handlePress={() => {
                            router.navigate("/(auth)/sign-up");
                        }}
                    />
                </View>
            </Container>
        </CustomBackground>
    );
}
