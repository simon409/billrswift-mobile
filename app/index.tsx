import { Dimensions, AppState } from 'react-native';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Logo from "../assets/images/LOGO.svg";
import { SafeAreaView } from 'react-native-safe-area-context';
import LottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

const Index = () => {
    const navigation = useNavigation();
    const [User, setUser] = useState(null);
    const [appState, setAppState] = useState(AppState.currentState);

    useEffect(() => {
        const appStateListener = AppState.addEventListener('change', (nextAppState) => {
            if (appState.match(/inactive|background/) && nextAppState === 'active') {
                // App has come to the foreground, check user state
                if (User) {
                    console.log("User exists, redirect to homepage");
                    // navigation.navigate('HomePage'); // Uncomment and replace with actual homepage navigation
                } else {
                    navigation.navigate('onBoarding');
                }
            }
            setAppState(nextAppState);
        });

        return () => {
            appStateListener.remove(); // Cleanup the listener on component unmount
        };
    }, [User, navigation, appState]);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (User) {
                console.log("To be redirected to homepage");
                // navigation.navigate('HomePage'); // Uncomment and replace with actual homepage navigation
            } else {
                navigation.navigate('onBoarding');
            }
        }, 3000); // 3 seconds delay

        return () => clearTimeout(timer); // Cleanup the timer
    }, [navigation, User]);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.logoContainer}>
                <Logo width={width * 0.6} />
            </View>
            <LottieView
                autoPlay
                loop
                style={styles.lottieAnim1}
                source={require('../assets/Lottie/BGOrangeYellow.json')}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E1E489',
        paddingHorizontal: '10%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logoContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },
    lottieAnim1: {
        width: '300%',
        height: height,
        position: 'absolute',
        bottom: -width / 1.2,
        backgroundColor: 'rgba(0, 0, 0, 0)',
        zIndex: -1
    },
});

export default Index;
