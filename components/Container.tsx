import { SafeAreaView } from 'react-native';

type ContainerProps = {
    children: React.ReactNode;
    padding?: string;
}

export const Container = ({children,padding}: ContainerProps) => {
    return (
    <SafeAreaView className={`flex flex-1 px-[35px] py-[70px] max-w-[1440px] w-full ${padding} `}>
        {children}
    </SafeAreaView>
    )
};