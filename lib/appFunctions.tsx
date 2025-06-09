
type createUserProps= {
    email: string;
    password: string;
}


export const createUser = async ({
        email,
        password,
    }:createUserProps) => {

    console.log('user info', email,password)

    async function getUser(): Promise<object | null> {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
            const json = await response.json();
            return json;
        } catch (error) {
            console.error('Fetch error:', error);
            return null;
        }
    }


    try {
        return await getUser();
    } catch (error) {
        console.error("Error creating user:", error);
        return null
    }
}