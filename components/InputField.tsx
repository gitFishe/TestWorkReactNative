import React, {useEffect, useRef, useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, Image, Touchable, TouchableWithoutFeedback} from 'react-native';

type InputFieldProps = {
    title: string;
    placeholder?: string;
    value?: string;
    handleChangeText: (text: string) => void;
};


const InputField = ({
                        title,
                        value,
                        placeholder,
                        handleChangeText,
}:InputFieldProps) => {

    const [showPassword, setShowPassword] = useState(false)
    const [isFocused, setIsFocused] = useState(false);


    const inputRef = useRef<TextInput>(null);


    useEffect(() => {
        if (value?.trim()) {
            setIsFocused(true);
        }
    }, [value]);


    return (
        <TouchableWithoutFeedback onPress={() => inputRef.current?.focus()} className='w-full'>
            <View className={`border  rounded-[8px] h-12 px-5 flex flex-row items-center mb-4 ${isFocused ? 'border-pink' : 'border-lightGray'}`}>
                <View className='w-5 h-5 bg-blue-500 mr-5'/>
                <View className='relative shrink w-full h-full mr-5'>
                    <Text className={`absoluteleft-0 transition-all text-[10px] duration-300 -translate-y-1/2 ${isFocused ? 'text-white top-1/3' : 'text-lightGray top-1/2'}`}>
                        {title}
                    </Text>
                    <TextInput
                        ref={inputRef}
                        className='absolute w-full left-0 top-1/2 text-white font-bold text-[12px] focus:outline-none'
                        value={value}
                        onChangeText={handleChangeText}
                        placeholder={placeholder}
                        secureTextEntry={title === 'Password' && !showPassword}
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => {
                            if (!value) {
                                setIsFocused(false);
                            }
                        }}

                    />
                </View>
                {title === 'Password' && (
                    <TouchableOpacity
                        className='justify-center items-center !w-12 !h-16'
                        onPress={() => setShowPassword(!showPassword)}>
                        {/*<Image*/}
                        {/*    source={!showPassword ? icons.eye : icons.eyeHide}*/}
                        {/*    className='!w-6 !h-6'*/}
                        {/*    resizeMode='contain'*/}
                        {/*/>*/}
                        <View className='w-5 h-5 bg-blue-500'/>
                    </TouchableOpacity>
                )}
            </View>
        </TouchableWithoutFeedback>
    );
};

export default InputField;
