import { Dimensions, AppState } from 'react-native';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Logo } from "@/assets/images";
import { SafeAreaView } from 'react-native-safe-area-context';
import LottieView from 'lottie-react-native';
import { useRouter } from 'expo-router';
import styles from './styles/style';

const { width } = Dimensions.get('window');

const Index = () => {
    const router = useRouter();
    const [User, setUser] = useState(null);
    const [appState, setAppState] = useState(AppState.currentState);

    useEffect(() => {
        const appStateListener = AppState.addEventListener('change', (nextAppState) => {
            if (appState.match(/inactive|background/) && nextAppState === 'active') {
                // App has come to the foreground, check user state
                if (User) {
                    console.log("User exists, redirect to homepage");
                    router.replace('home'); // Uncomment and replace with actual homepage navigation
                } else {
                    router.replace('onBoarding');
                }
            }
            setAppState(nextAppState);
        });

        return () => {
            appStateListener.remove(); // Cleanup the listener on component unmount
        };
    }, [User, appState, router]);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (User) {
                console.log("To be redirected to homepage");
                // router.replace('/HomePage'); // Uncomment and replace with actual homepage navigation
            } else {
                router.replace('/(onBoarding)');
            }
        }, 3000); // 3 seconds delay

        return () => clearTimeout(timer); // Cleanup the timer
    }, [router, User]);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.logoContainer}>
                <Logo width={width * 0.6} />
            </View>
            <LottieView
                autoPlay
                loop
                style={styles.lottieAnim1}
                source={require('@/assets/Lottie/BGOrangeYellow.json')}
            />
        </SafeAreaView>
    );
}

export default Index;
