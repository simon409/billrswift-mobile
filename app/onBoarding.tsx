import { textSizes } from '@/constants/Sizes';
import React, { useState } from 'react';
import { BackHandler, StyleSheet, Text, ToastAndroid, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import SliderIndicator from './Components/SliderIndicator';
import { TouchableOpacity } from 'react-native-gesture-handler';
import SwipingComponent from './Components/SwipingComponent';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { Page1, Page2, Page3, Page4 } from './Pages';

const pages = [
    Page1,
    Page2,
    Page3,
    Page4
];

const OnBoarding = () => {
    const [SliderIndex, setSliderIndex] = useState(0);
    const [backPressCount, setBackPressCount] = useState(0);
    const navigation = useNavigation();

    useFocusEffect(
        React.useCallback(() => {
            const backAction = () => {
                if (backPressCount === 0) {
                    setBackPressCount(1);
                    ToastAndroid.show('Press back again to exit', ToastAndroid.SHORT);

                    setTimeout(() => {
                        setBackPressCount(0);
                    }, 2000); // Reset back press count after 2 seconds
                } else if (backPressCount === 1) {
                    BackHandler.exitApp(); // Exit the app
                }
                return true;
            };

            const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);

            return () => backHandler.remove(); // Cleanup on unmount or when screen is unfocused
        }, [backPressCount])
    );

    const OnDone = () => {
        console.log('Done');
        navigation.navigate('login');
    }

    const OnSkip = () => {
        navigation.navigate('login');
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.Header}>
                <SliderIndicator index={SliderIndex} length={pages.length}/>
                <TouchableOpacity onPress={()=>OnSkip()} style={styles.skipButton}>
                    <Text style={styles.text}>Skip</Text>
                </TouchableOpacity>
            </View>
            <SwipingComponent selectedIndex={SliderIndex} setSelectedIndex={setSliderIndex} pages={pages}/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 46,
    },
    Header: {
        paddingVertical: 20,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    skipButton: {

    },
    text: {
        fontSize: textSizes.small,
        color: 'black',
    }
})

export default OnBoarding;
