import React, { useRef, useEffect } from 'react';
import { StyleSheet, View, Animated } from 'react-native';

const ProgressBar = ({ progress } : {progress: number}) => {
    const widthAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(widthAnim, {
            toValue: progress,
            duration: 500,
            useNativeDriver: false,
        }).start();
    }, [progress]);

    return (
        <View style={styles.container}>
            <Animated.View style={[styles.progressBar, { width: widthAnim.interpolate({
                inputRange: [0, 100],
                outputRange: ['0%', '100%'],
            }) }]} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 15,
        width: '100%',
        backgroundColor: '#fff',
        borderColor: '#E1E489',
        borderWidth: 1,
        borderRadius: 5,
        overflow: 'hidden',
    },
    progressBar: {
        height: '100%',
        backgroundColor: '#E1E489',
        borderRadius: 5,
    },
});

export default ProgressBar;
