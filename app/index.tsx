import { Text, View } from "react-native";
import "../global.css"
import CustomButton from "@/components/CustomButton";
import {Container} from "@/components/Container";
import {router} from "expo-router";
import CustomBackground from "@/components/CustomBackground";

export default function Index() {
    return (
        <CustomBackground>
            <Container>
                <View className='w-[200px] m-auto h-[200px] bg-blue-500'/>
                <View className='mt-auto'>
                    <CustomButton title='Login' handlePress={() => {router.navigate('/(auth)/sign-in')}}/>
                    <CustomButton title='Register' containerColor='secondary' containerStyle='mt-4' handlePress={() => {router.navigate('/(auth)/sign-up')}}/>
                </View>
            </Container>
        </CustomBackground>
    );
}