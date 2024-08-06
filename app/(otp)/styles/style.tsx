import { Colors } from "@/constants/Colors";
import { textSizes } from "@/constants/Sizes";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 23,
        paddingVertical: 18,
        backgroundColor: Colors.light.background
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        width: "100%",
    },
    input: {
        width: 50,
        textAlign: 'center',
        fontSize: textSizes.large,
        paddingHorizontal: 15,
        paddingVertical: 20,
        backgroundColor: "#F5F6FA",
        borderRadius: 10,
    }
});

export default styles;