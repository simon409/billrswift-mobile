import { Colors } from '@/constants/Colors';
import { textSizes } from '@/constants/Sizes';
import { Link } from 'expo-router';
import React, { ReactElement } from 'react'; // Import ReactElement type
import { IconType } from 'react-icons';
import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

interface ButtonProps {
    href: string;
    text: string;
    style: "Filled" | "Outlined";
    Icon: IconType; // Use ReactElement type for Icon
    extraStyle?: ViewStyle | TextStyle; // Optional prop for additional styling
}

const ButtonWithIcon = ({href, text, style, extraStyle, Icon}: ButtonProps) => {
    // Determine the base style based on the "style" prop
    const baseStyle = style === "Filled" ? styles.Button : styles.Button2;

    // Combine base style with extraStyle
    const combinedStyle = [baseStyle, extraStyle];

    return (
        <Link href={href} style={combinedStyle}>
            <Icon />
            {text}
        </Link>
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
        textAlign: 'center',
    },
    Button2: {
        backgroundColor: Colors.light.textColorOrange,
        borderRadius: 10,
        paddingVertical: 10,
        fontSize: textSizes.large,
        color: Colors.light.background,
        textAlign: 'center',
    },
});

export default ButtonWithIcon;
