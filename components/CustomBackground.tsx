import React from 'react';
import { ImageBackground} from 'react-native';
import { StyleSheet } from 'react-native';
import bg from '../assets/images/bg.png';

type bgProps = {
    children: React.ReactNode;
}

export default function CustomBackground ({children}: bgProps) {
    return (
        <ImageBackground source={bg} style={styles.background}>
            {children}
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    }
})