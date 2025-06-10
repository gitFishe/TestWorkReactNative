import React from 'react';
import { View, Text } from 'react-native';
import CustomBackground from "@/components/CustomBackground";
import {Container} from "@/components/Container";
import CustomButton from "@/components/CustomButton";
import {router} from "expo-router";
import {ProtectedRoute} from "@/components/ProtectedRoute";
import {useAuth } from "@/lib/GlobalProvider";

export default function Home () {

    const {user, setUser } = useAuth();
    console.log(user)

    const buttonHandlePress = async () => {
        await setUser(null);
    }

    return (
        <ProtectedRoute>
            <CustomBackground bgImage='logo'>
                <Container padding={'pb-[207px]'}>
                    <View className='mt-auto'>
                        <View className='mb-24 flex flex-col items-center'>
                            <Text className='text-lightGray '>You're loggen in now</Text>
                            <Text className='mt-2 text-white font-bold text-[18px]'>{user?.name}</Text>
                            <Text className='mt-[53px] text-white text-[16px]'>Now you can see the ap content!</Text>
                        </View>
                        <CustomButton title='Log Out' handlePress={() => buttonHandlePress()} />
                    </View>
                </Container>
            </CustomBackground>
        </ProtectedRoute>

    );
};
