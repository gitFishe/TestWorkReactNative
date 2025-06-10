import React, {createContext, useContext, useEffect, useState, ReactNode,} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';

type User = any;

type AuthContextType = {
    user: User | null;
    setUser: (user: User | null) => Promise<void>;
    isLoading: boolean;
    logout: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (!context) throw new Error('useAuth error');
    return context;
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUserState] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    const setUser = async (user: User | null) => {
        if (user) {
            await AsyncStorage.setItem('user', JSON.stringify(user));
        } else {
            await AsyncStorage.removeItem('user');
        }
        setUserState(user);
    };

    const logout = async () => {
        await setUser(null);
    };

    useEffect(() => {
        const checkUser = async () => {
            try {
                const storedUser = await AsyncStorage.getItem('user');
                if (storedUser) {
                    setUserState(JSON.parse(storedUser));
                }
            } catch (error) {
                console.error('auth error', error);
            } finally {
                setIsLoading(false);
            }
        };

        checkUser();
    }, []);

    return (
        <AuthContext.Provider value={{ user, setUser, isLoading, logout }}>
            {isLoading ? null : children}
        </AuthContext.Provider>
    );
};

