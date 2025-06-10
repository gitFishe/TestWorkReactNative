import React from 'react';
import { ImageBackground} from 'react-native';
import { StyleSheet } from 'react-native';
import bg from '../assets/images/bg.png';
import bgLogo from '../assets/images/bg-logo.png';

type bgProps = {
    children: React.ReactNode;
    bgImage?: 'logo' | 'default';
}


export default function CustomBackground ({children, bgImage}: bgProps) {
    const selectedBg = bgImage === 'logo' ? bgLogo : bg;

    return (
        <ImageBackground source={selectedBg} style={styles.background}>
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