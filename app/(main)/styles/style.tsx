import { Colors } from "@/constants/Colors";
import { textSizes } from "@/constants/Sizes";
import { Dimensions, StyleSheet } from "react-native";
const { width } = Dimensions.get('window');

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
        marginBottom: 80
    },
    scrollContainer: {
        flexDirection: 'row',
        marginTop: 20,
        paddingHorizontal: 10
    },
    cardContainer: {
        backgroundColor: '#fff',
        padding: 23,
        marginBottom: 10,
    },
    cardButton: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15
    },
    IconContainer: {
        backgroundColor: '#F3F3E0',
        padding: 20,
        borderRadius: 15,
        aspectRatio: 1
    },
    cardTitle: {
        fontSize: textSizes.large,
        fontWeight: 'medium',
        color: Colors.light.textColorOrange
    },
    factureCardContainer: {
        display: 'flex'
    },
    LineContainer:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    Line:{
        display: 'flex',
        flexDirection: 'row',
        gap: 5
    },
    LineVariableText:{
        fontSize: textSizes.medium,
        color: Colors.light.textColorOrange
    },
    LineConstText:{
        fontSize: textSizes.medium,
        color: Colors.light.textColorBlack
    }
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
    IconContainer: {
        width: '20%',
        aspectRatio: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

    },
    Icon: {
        borderWidth: 1,
        aspectRatio: 1,
        alignItems: 'center',
        padding: 10,
        borderRadius: 10,

    },
    ContentContainer: {
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

const SwipeableCardStyles = StyleSheet.create({
    container: {
        width: width,
      },
      card: {
        width: "100%", // Adjust width as needed
        height: "75%", // Adjust height as needed
        borderRadius: 10,
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.2,
        shadowRadius: 10,
        elevation: 5,
        padding: 23,

      },
      image: {
        width: '100%',
        height: '90%',
        borderRadius: 10
      },
      title: {
        fontSize: textSizes.xxlarge,
        color: Colors.light.textColorOrange,
        textAlign: 'center'
      },
      description:{
        fontSize: textSizes.medium,
        textAlign: 'center'
      },
    Button: {
        backgroundColor: Colors.light.textColorOrange,
        borderRadius: 10,
        paddingVertical: 10,
        width: '100%',
      },
      Text: {
        fontSize: textSizes.large,
        color: Colors.light.background,
        textAlign: "center",
      },
});

export { styles, factureCardStyles, SwipeableCardStyles };