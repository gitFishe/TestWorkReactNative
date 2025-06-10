import AsyncStorage from '@react-native-async-storage/async-storage';


export const getUser = async (): Promise<object | null> => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
        const json = await response.json();
        return json;
    } catch (error) {
        console.error('get user error:', error);
        return null;
    }
}

export const removeUser = async () => {
    try {
        await AsyncStorage.removeItem('user');
        console.log('user removed')
    } catch (error) {
        console.error('remove user error', error);
    }
};



type createUserProps= {
    email: string;
    password: string;
}

export const createUser = async ({
        email,
        password,
    }:createUserProps) => {

    console.log('user info', email,password)


    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
        const json = await response.json();

        await AsyncStorage.setItem('user', JSON.stringify(json));

        return json;
    } catch(error) {
        console.error('create user error', error);
        return null;
    }
}