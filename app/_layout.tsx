import { Stack } from 'expo-router';
import { useFonts, Montserrat_400Regular } from '@expo-google-fonts/montserrat';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { Text as RNText } from 'react-native';
import { AuthProvider } from '@/lib/GlobalProvider';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
    const [fontsLoaded] = useFonts({
        Montserrat_400Regular,
    });

    useEffect(() => {
        if (!fontsLoaded) return;

        SplashScreen.hideAsync();

        // 🧙‍♂️ Глобальний патч для ВСІХ <Text>
        // @ts-ignore
        const oldRender = RNText.render;
        // @ts-ignore
        RNText.render = function (...args) {
            const origin = oldRender.call(this, ...args);
            return {
                ...origin,
                props: {
                    ...origin.props,
                    style: [origin.props.style, { fontFamily: 'Montserrat_400Regular' }],
                },
            };
        };
    }, [fontsLoaded]);

    if (!fontsLoaded) return null;

    return (
        <AuthProvider>
            <Stack screenOptions={{ headerShown: false }} />
        </AuthProvider>
    );
}
