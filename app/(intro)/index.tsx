import { Dimensions, AppState } from 'react-native';
import { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Logo } from "@/assets/images";
import { SafeAreaView } from 'react-native-safe-area-context';
import LottieView from 'lottie-react-native';
import { useRouter } from 'expo-router';
import styles from './styles/style';

const { width } = Dimensions.get('window');

const Index = () => {
    const router = useRouter();
    const [User, setUser] = useState(4); // Replace with actual user state retrieval logic
    const [appState, setAppState] = useState(AppState.currentState);

    const checkUserAndRedirect = () => {
        setTimeout(() => {
            if (User !== null) {
            console.log("User exists, redirecting to homepage");
            router.replace('/(main)');
            } else {
            console.log("No user found, redirecting to onboarding");
            router.replace('/(onBoarding)');
            }
        }, 2500);
    };

    useEffect(() => {
        // Check user when the component mounts
        checkUserAndRedirect();

        const appStateListener = AppState.addEventListener('change', (nextAppState) => {
            if (appState.match(/inactive|background/) && nextAppState === 'active') {
                checkUserAndRedirect();
            }
            setAppState(nextAppState);
        });

        return () => {
            appStateListener.remove(); // Cleanup the listener on component unmount
        };
    }, [User, appState]);

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
