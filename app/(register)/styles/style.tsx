import { Colors } from "@/constants/Colors";
import { textSizes } from "@/constants/Sizes";
import { StyleSheet } from "react-native";

const indexStyles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: Colors.light.background,
        justifyContent: 'space-between',
        position: 'relative',
      },
      backgroundContainer: {
        ...StyleSheet.absoluteFillObject,
        zIndex: -1,
        top: "-120%",
        alignItems: "center",
      },
      lottie: {
        width: "300%",
        height: "100%",
        transform: [{ rotate: "-90deg" }],
        marginLeft: "50%",
        left: "45%",
        backgroundColor: "rgba(0,0,0,0)",
      },
      TextsContainer: {
          display: 'flex',
          flexDirection: 'column',
          gap: 50,
          paddingHorizontal: 23,
          paddingVertical:23
      },
      Title: {
          fontSize: textSizes.xxlarge,
          color: Colors.light.textColorOrange,
          letterSpacing: 1,
          textAlign: 'left',
          fontWeight: 'bold',
      },
      TiteInBack:{
          fontSize: 60,
          color: Colors.light.textColorOrange,
          letterSpacing: 1,
          textAlign: 'left',
          position: 'absolute',
          fontWeight: 'bold',
          bottom: 25,
          left: 0,
          zIndex: -1,
          opacity: 0.1,
      },
      SubTitle: {
          fontSize: textSizes.large,
          color: "#c1c1c1",
      },

      innerContainer: {
        flexGrow: 1,
        paddingHorizontal: 23,
        gap: 30,
        paddingVertical: 18,
        justifyContent: 'space-between',
    },
    LogOutText: {
        color: Colors.light.textColorOrange,
        fontSize: textSizes.medium,
        marginTop: 10,
        paddingHorizontal: 23,
    },
    Card: {
        backgroundColor: Colors.light.background,
        paddingVertical: 23,
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        display: 'flex',
        flexDirection: 'column',
        gap: 20,
    },
    CardText: {
        color: Colors.light.textColorOrange,
        fontSize: textSizes.medium,
        marginTop: 10,
        paddingHorizontal: 23,
    },
    CardInput: {
        backgroundColor: '#F5F6FA',
        paddingVertical: 10,
        paddingHorizontal: 23,
        width: '100%',
        fontSize: textSizes.large,
    },
    Button: {
        backgroundColor: Colors.light.textColorOrange,
        borderRadius: 10,
        paddingVertical: 10,
        marginHorizontal: 23,
        fontSize: textSizes.large,
        color: Colors.light.background,
    },
    TextButton: {
        color: '#fff',
        fontSize: textSizes.large,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    Links:{
        color: Colors.light.textColorOrange,
    },
    inputContainer: {
        width: "100%",
        backgroundColor: Colors.light.inputBackground,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        borderBottomColor: '#CBC9D9',
        borderBottomWidth: 1,
      },
      TextInput: {
        fontSize: textSizes.large,
        width: "80%",
      },
})

const otherInfosStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.light.background,
    },
    innerContainer: {
        flexGrow: 1,
        backgroundColor: "#fff",
        paddingHorizontal: 23,
        gap: 30,
        paddingVertical: 18,
        justifyContent: 'space-between',
    },
    LogOutText: {
        color: Colors.light.textColorOrange,
        fontSize: textSizes.medium,
        marginTop: 10,
        paddingHorizontal: 23,
    },
    Card: {
        backgroundColor: Colors.light.background,
        paddingVertical: 23,
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    CardText: {
        color: Colors.light.textColorOrange,
        fontSize: textSizes.medium,
        marginTop: 10,
        paddingHorizontal: 23,
    },
    CardInput: {
        backgroundColor: '#F5F6FA',
        paddingVertical: 10,
        paddingHorizontal: 23,
        borderBottomColor: '#CBC9D9',
        borderBottomWidth: 1,
    },
    Button: {
        backgroundColor: Colors.light.textColorOrange,
        borderRadius: 10,
        paddingVertical: 10,
        marginHorizontal: 23,
        fontSize: textSizes.large,
        color: Colors.light.background,
    },
    TextButton: {
        color: '#fff',
        fontSize: textSizes.large,
        fontWeight: 'bold',
        textAlign: 'center',
    },
})

const congratsStyles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignContent: 'center',
        paddingHorizontal: 46,
        display: 'flex',
        gap: 30,
    },
    LottieAnim1:{
        width: '80%',
        aspectRatio: 1,
        alignSelf: 'center',
    }
})


export { indexStyles, otherInfosStyles, congratsStyles };