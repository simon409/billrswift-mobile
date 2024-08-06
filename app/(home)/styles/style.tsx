import { textSizes } from "@/constants/Sizes";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
    },
    gradient: {
        height: 30,
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
    },
    contentContainer: {
        flex: 1,
        backgroundColor: '#F3F3E0',
        gap: 10,
    },
    scrollContainer: {
        flexDirection: 'row',
        marginTop: 20,
        paddingHorizontal: 10
    },
});

const factureCardStyles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        gap: 10
    },
    IconContainer:{
        width: '20%',
        aspectRatio: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

    },
    Icon:{
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,

    },
    ContentContainer:{
        width: '80%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    cardTitle: {
        fontSize: textSizes.medium,
        fontWeight: 'medium',
        color: '#000',
    },
    cardContent: {
        fontSize: textSizes.small,
        color: '#c1c1c1',
    },
});

export { styles, factureCardStyles };