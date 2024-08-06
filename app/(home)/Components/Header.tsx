import React from 'react';
import { StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

interface HeaderProps {
    children: React.ReactNode;
}

const Header = ({ children }: HeaderProps) => {
    return (
        <LinearGradient
            colors={['#E42E45', '#EC9850']}
            start={{ x: 0, y: 0 }} // Starting point of the gradient (left side)
            end={{ x: 1, y: 0 }}   // Ending point of the gradient (right side)
            style={styles.header}
        >
            {/* Header */}
            {children}
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    header: {
        justifyContent: 'space-between',
        paddingHorizontal: 23,
        paddingVertical: 20,
        display: 'flex',
        flexDirection: 'row',
    }
});

export default Header;
