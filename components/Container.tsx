import { SafeAreaView } from 'react-native';

export const Container = ({ children }: { children: React.ReactNode }) => {
    return <SafeAreaView className='flex flex-1 p-[35px] max-w-[1440px] w-full'>{children}</SafeAreaView>;
};