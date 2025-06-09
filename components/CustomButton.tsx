import React from 'react';
import { TouchableOpacity, Text, GestureResponderEvent, ViewStyle, TextStyle } from 'react-native';
import { StyleSheet } from 'react-native';

type ButtonProps = {
    title: string;
    handlePress: (event: GestureResponderEvent) => void;
    containerColor?: 'primary' | 'secondary';
    containerStyle?:string;
    isLoading?: boolean;
};

const CustomButton = ({
                                                 title,
                                                 handlePress,
                                                 containerColor = 'primary',
                                                 isLoading = false,
                                                 containerStyle = '',
                                             }:ButtonProps) => {


    const color = containerColor === 'primary' ? 'bg-pink ' : 'bg-gray';
    const shadowStyle = containerColor === 'primary' ? styles.shadowBox : {};

    return (
        <TouchableOpacity
            onPress={handlePress}
            activeOpacity={0.5}
            className={`rounded-xl w-full min-h-[50px] justify-center items-center ${color} ${containerStyle} ${isLoading ? 'opacity-50' : ''}`}
            disabled={isLoading}
            style={shadowStyle}
        >
            <Text className={`text-primary font-psemibold text-white text-[12px] font-bold`}>
                {title}
            </Text>
        </TouchableOpacity>
    );
};


const styles = StyleSheet.create({
    shadowBox: {
        shadowColor: 'rgba(235, 0, 87, 0.5)',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 1,
        shadowRadius: 15,
        elevation: 10,
    },
});


export default CustomButton;
