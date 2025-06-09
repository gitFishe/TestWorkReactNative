import React from 'react';
import { View, Text } from 'react-native';
import CustomBackground from "@/components/CustomBackground";
import {Container} from "@/components/Container";
import CustomButton from "@/components/CustomButton";
import {router} from "expo-router";

export default function home () {




    return (
        <CustomBackground>
            <Container>
                <View>
                    <Text>You're loggen in now</Text>
                    <Text>NAME</Text>
                    <Text>Now you can see the ap content!</Text>
                    <CustomButton title='Log Out' handlePress={() => router.navigate('/')} />
                </View>
            </Container>
        </CustomBackground>
    );
};
