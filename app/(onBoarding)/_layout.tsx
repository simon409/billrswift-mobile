import { Stack } from 'expo-router';

const onBoardingLayout = () => {
    return (
        <Stack screenOptions={{headerShown: false}}>
            <Stack.Screen name="index"/>
        </Stack>
    );
}


export default onBoardingLayout;
