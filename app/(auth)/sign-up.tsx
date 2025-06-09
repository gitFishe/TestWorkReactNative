import React, {useState} from 'react';
import {View, Text, TouchableOpacity, TouchableWithoutFeedback} from 'react-native';
import {Container} from "@/components/Container";
import CustomBackground from "@/components/CustomBackground";
import InputField from "@/components/InputField";
import { StyleSheet } from 'react-native';
import {createUser} from "@/lib/appFunctions";
import {router} from "expo-router";
import CustomButton from "@/components/CustomButton";


export default function signin () {

    const [form, setForm] = useState({
        email: '',
        password: '',
    })

    const [isSubmitting, setIsSubmitting] = useState(false);

    const submitForm = async () => {

        if (!form.email || !form.password) {
            console.log('please fill up forms');
            return;
        }




        console.log(form)
        setIsSubmitting(true);
        try {
            const result = await createUser(form)
            console.log(result)

            router.replace('/home');
        } catch(error) {
            console.error('Error creating profile')
        }


    }

    return (
        <CustomBackground>
            <Container>
                <View className='mt-auto'>

                    <View className='w-5 h-5 bg-pink mb-[72px] ml-auto mr-10'></View>

                    <View className='mb-6'>
                        <Text className='text-lg text-white text-center'>SIGN UP</Text>
                        <Text className='text-lightGray mt-2 text-[11px] text-center'>Create your email and password for your account</Text>
                    </View>

                    <InputField
                        title='Email'
                        handleChangeText={(e) => setForm({...form, email: e})}
                    />
                    <InputField
                        title='Password'
                        handleChangeText={(e) => setForm({...form, password: e})}
                    />

                    <CustomButton title='Sign Up' handlePress={submitForm} isLoading={isSubmitting}/>

                    <View className='flex flex-row mt-24 mx-auto'>
                        <Text className='mr-[8px] text-[11px] text-white'>Already have an account?</Text>

                        <TouchableOpacity activeOpacity={1} onPress={()=> router.replace('/(auth)/sign-in')}>
                            <Text style={styles.boxShadow} className='text-[11px]'>Log in</Text>
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