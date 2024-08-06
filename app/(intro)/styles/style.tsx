import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get('window');

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

export default styles;