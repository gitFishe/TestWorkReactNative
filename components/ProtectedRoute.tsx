import React, { useEffect } from 'react';
import { useAuth } from '@/lib/GlobalProvider';
import { useRouter } from 'expo-router';
import { View, Text } from 'react-native';

export const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
    const { user, isLoading } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!isLoading && !user) {
            router.replace('/');
        }
    }, [isLoading, user]);

    if (isLoading || !user) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Loading...</Text>
            </View>
        );
    }

    return <>{children}</>;
};
