import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Animated, { Easing, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

interface CustomCheckBoxProps {
    IsSelected: boolean;
    OnPress: () => void;
}

const CustomCheckBox = ({IsSelected, OnPress} : CustomCheckBoxProps) => {
    const IndicatorPosition = useSharedValue(2);
    console.log(IsSelected);
    useEffect(() => {
        IndicatorPosition.value = IsSelected ?  withTiming(14, { duration: 200, easing: Easing.out(Easing.exp) }) : withTiming(2, { duration: 200, easing: Easing.out(Easing.exp) });
    }, [IsSelected])

    const IndicatorAnimatedStyle = useAnimatedStyle(() => {
        return {
            top: IndicatorPosition.value
        }
    })

    return (
        <TouchableOpacity onPress={OnPress}>
            <View style={[styles.CheckBox, IsSelected ? {borderColor: '#E76936'} : {borderColor: '#c1c1c1'}]}>
                <Animated.View style={[styles.Indicator, IndicatorAnimatedStyle,
                IsSelected ? {
                    backgroundColor: '#E1E489',
                    borderColor: '#E76936'
                } : {
                    backgroundColor: '#eaeaea',
                    borderColor: '#c1c1c1'
                }]}></Animated.View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    CheckBox: {
        width: 20,
        height: 30,
        borderRadius: 10,
        borderWidth: 2,
    },
    Indicator:{
        width: 10,
        height: 10,
        borderRadius: 10,
        backgroundColor: '#E1E489',
        borderColor: '#E76936',
        borderWidth: 2,
        position: 'absolute',
        left: 3,
    }
})

export default CustomCheckBox;
