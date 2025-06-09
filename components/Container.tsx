import { SafeAreaView } from 'react-native';

export const Container = ({ children }: { children: React.ReactNode }) => {
    return <SafeAreaView className='flex flex-1 px-[35px] py-[70px] max-w-[1440px] w-full'>{children}</SafeAreaView>;
};