import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, TouchableWithoutFeedback} from 'react-native';
import {Container} from "@/components/Container";
import CustomBackground from "@/components/CustomBackground";
import InputField from "@/components/InputField";
import { StyleSheet } from 'react-native';
import {createUser} from "@/lib/appFunctions";
import {router} from "expo-router";
import CustomButton from "@/components/CustomButton";
import {useAuth} from "@/lib/GlobalProvider";

import ArrowBack from "@/assets/images/arrow-back.svg";
import UserLogin from "@/assets/images/user-login.svg";


export default function signin () {

    const [form, setForm] = useState({
        email: '',
        password: '',
    })

    const [isSubmitting, setIsSubmitting] = useState(false);
    const {user, setUser } = useAuth();

    const submitForm = async () => {

        if (!form.email || !form.password) {
            console.log('please fill up forms');
            return;
        }




        console.log(form)
        setIsSubmitting(true);
        try {
            const result = await createUser(form)
            setUser(result);
            console.log(result)

            router.replace('/home');
        } catch(error) {
            console.error('Error creating profile')
        }


    }


    useEffect(() => {
        if (user) {
            router.replace('/home');
        }
    }, [user]);


    return (
        <CustomBackground>
            <Container>
                <View className='flex flex-col h-full'>
                    <TouchableOpacity className='h-5 w-5 mb-auto' onPress={() => router.back()}>
                        <ArrowBack width={24} height={24}/>
                    </TouchableOpacity>
                    <UserLogin width={100} height={100} className='ml-auto mr-5 mb-[72px]'/>
                    <View className='mb-6'>
                        <Text className='text-lg text-white text-center'>LOGIN</Text>
                        <Text className='text-lightGray mt-2 text-[11px] text-center'>Enter your login password from your account</Text>
                    </View>

                    <InputField
                        title='Email'
                        handleChangeText={(e) => setForm({...form, email: e})}
                    />
                    <InputField
                        title='Password'
                        handleChangeText={(e) => setForm({...form, password: e})}
                    />
                    <TouchableOpacity activeOpacity={0.9}>
                        <Text style={styles.boxShadow} className='text-right mb-4'>Forgot password</Text>
                    </TouchableOpacity>
                    <CustomButton title='login' handlePress={submitForm} isLoading={isSubmitting}/>

                    <View className='flex flex-row mt-24 mx-auto'>
                        <Text className='mr-[8px] text-[11px] text-white'>Don't have an account?</Text>

                        <TouchableOpacity activeOpacity={1} onPress={()=> router.replace('/(auth)/sign-up')}>
                            <Text style={styles.boxShadow} className='text-[11px]'>Sign up</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Container>
        </CustomBackground>
    );
};

const styles = StyleSheet.create({
    boxShadow: {
        color: '#eb0057',
        textDecorationLine:'underline',
        textShadowColor: 'rgba(235, 0, 87, 0.5)',
        textShadowOffset: { width: 0, height: 0 },
        textShadowRadius: 10,
    },
});