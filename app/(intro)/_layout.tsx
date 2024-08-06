import { Stack } from 'expo-router';

const IntroLayout = () => {
    return (
        <Stack screenOptions={{headerShown: false}}>
            <Stack.Screen name="index"/>
        </Stack>
    );
}


export default IntroLayout;
