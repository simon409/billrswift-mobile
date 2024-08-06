import { Colors } from '@/constants/Colors';
import { textSizes } from '@/constants/Sizes';
import { Href, Link } from 'expo-router';
import React from 'react';
import { StyleSheet, View } from 'react-native';

interface ButtonProps {
    href: Href;
    text: string;
    style: "Filled" | "Outlined";
}


const Button = ({href, text, style} : ButtonProps) => {
    console.log(href, text, style);
    return (
        <Link href={href} style={style === "Filled" ? styles.Button2 : styles.Button}>{text}</Link>
    );
}

const styles = StyleSheet.create({
    Button: {
        backgroundColor: Colors.light.background,
        borderRadius: 10,
        paddingVertical: 10,
        borderColor: Colors.light.textColorOrange,
        borderWidth: 1,
        fontSize: textSizes.large,
        color: Colors.light.textColorOrange,
        textAlign: 'center'
    },
    Button2: {
        backgroundColor: Colors.light.textColorOrange,
        borderRadius: 10,
        paddingVertical: 10,
        fontSize: textSizes.large,
        color: Colors.light.background,
        textAlign: 'center'
    },
})

export default Button;
