import { Colors } from '@/constants/Colors';
import { textSizes } from '@/constants/Sizes';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface CustomTitleProps {
    title: string;
    titleInBackground: string;
    centered: boolean;
}

const CustomTitle = ({title, titleInBackground, centered} : CustomTitleProps) => {
    const capitalizeFirstLetter = (text: string) => {
        if (!text) return text;
        return text.charAt(0).toUpperCase() + text.slice(1);
    };
    return (
        <View style={styles.textContainer}>
            <Text style={[styles.TiteInBack, centered ? {textAlign: 'center'} : {textAlign: 'left'}]}>{capitalizeFirstLetter(titleInBackground)}</Text>
            <Text style={[styles.Title, centered ? {textAlign: 'center'} : {textAlign: 'left'}]}>{capitalizeFirstLetter(title)}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    textContainer: {
        width: "100%",
    },
    Title: {
        fontSize: textSizes.xxlarge,
        fontWeight: "bold",
        color: Colors.light.textColorOrange
      },
      TiteInBack: {
        fontSize: 50,
        color: Colors.light.textColorOrange,
        letterSpacing: 1,
        position: "absolute",
        fontWeight: "bold",
        bottom: -5,
        left: 50,
        width: "100%",
        transform: [{ translateX: -50 }],
        zIndex: -1,
        opacity: 0.1
      },
})

export default CustomTitle;
