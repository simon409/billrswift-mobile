import { textSizes } from '@/constants/Sizes';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Header } from 'react-native/Libraries/NewAppScreen';
import SliderIndicator from './Components/SliderIndicator';
import { TouchableOpacity } from 'react-native-gesture-handler';
import SwipingComponent from './Components/SwipingComponent';

import Page1 from './Pages/Page1';
import Page2 from './Pages/Page2';
import { Link, router } from 'expo-router';

const pages = [
    Page1,
    Page2
];

const Index = () => {
    const [SliderIndex, setSliderIndex] = useState(0);

    const OnDone = () => {
        console.log('Done');
        router.push('login');
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.Header}>
                <SliderIndicator index={SliderIndex} length={pages.length}/>
                <Link href='/login' style={styles.skipButton}>
                    <Text style={styles.text}>Skip</Text>
                </Link>
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

export default Index;
