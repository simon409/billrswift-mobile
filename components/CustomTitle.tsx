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
    return (
        <View style={styles.textContainer}>
            <Text style={[styles.TiteInBack, centered ? {textAlign: 'center'} : {textAlign: 'left'}]}>{titleInBackground}</Text>
            <Text style={[styles.Title, centered ? {textAlign: 'center'} : {textAlign: 'left'}]}>{title}</Text>
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
        opacity: 0.1,
      },
})

export default CustomTitle;
