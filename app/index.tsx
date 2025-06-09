import { Text, View } from "react-native";
import "../global.css"
import CustomButton from "@/components/CustomButton";
import {Container} from "@/components/Container";
import {router} from "expo-router";
import CustomBackground from "@/components/CustomBackground";

// @ts-ignore
import Logo from '../assets/images/logo.svg';


export default function Index() {
    return (
        <CustomBackground>
            <Container>
                <Logo width={104} height={111} className='m-auto'/>
                <View className='mt-auto'>
                    <CustomButton title='Login' handlePress={() => {router.navigate('/(auth)/sign-in')}}/>
                    <CustomButton title='Register' containerColor='secondary' containerStyle='mt-4' handlePress={() => {router.navigate('/(auth)/sign-up')}}/>
                </View>
            </Container>
        </CustomBackground>
    );
}