import { textSizes } from "@/constants/Sizes";
import { StyleSheet } from "react-native";

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

export default styles;