import { Stack } from 'expo-router';

const LoginLayout = () => {
    return (
        <Stack screenOptions={{headerShown: false}}>
            <Stack.Screen name="index"/>
            <Stack.Screen name="loginWithEmail"/>
        </Stack>
    );
}


export default LoginLayout;
