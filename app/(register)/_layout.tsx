import { Stack } from 'expo-router';
import React from 'react';

const RegisterLayout = () => {
    return (
        <Stack screenOptions={{headerShown: false}}>
            <Stack.Screen name="index" />
            <Stack.Screen name="congrates" />
            <Stack.Screen name="otherInfos" />
        </Stack>
    );
}

export default RegisterLayout;
