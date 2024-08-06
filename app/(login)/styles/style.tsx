import { Colors } from "@/constants/Colors";
import { textSizes } from "@/constants/Sizes";
import { StyleSheet } from "react-native";

const forgotPassStyles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 23,
        paddingVertical: 18,
        backgroundColor: Colors.light.background,
        display: 'flex',
        justifyContent: 'space-between',
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        width: "100%",
    },
    TextInput: {
        fontSize: textSizes.large,
        width: "100%",
        backgroundColor: "#F5F6FA",
        borderRadius: 10,
        paddingHorizontal: 20,
        paddingVertical: 15,
      },
      Button: {
        backgroundColor: Colors.light.textColorOrange,
        marginHorizontal: 20,
        borderRadius: 10,
        paddingVertical: 10,
      },
      Text: {
        fontSize: textSizes.large,
        color: Colors.light.background,
        textAlign: "center",
      },
})

const indexStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      paddingHorizontal: 23,
    },
    backgroundContainer: {
      ...StyleSheet.absoluteFillObject,
      zIndex: 0,
      top: "-100%",
      alignItems: "center",
    },
    lottie: {
      width: "300%",
      height: "100%",
      transform: [{ rotate: "180deg" }],
      marginLeft: "50%",
      backgroundColor: "rgba(0,0,0,0)",
    },
    foregroundContainer: {
      flex: 1,
      zIndex: 1,
    },
    centeredContent: {
      alignItems: "center",
      marginTop: "40%",
      flexDirection: "column",
      gap: 50,
      width: "100%",
    },
    textContainer: {
      width: "100%",
    },
    Title: {
      fontSize: textSizes.xxlarge,
      fontWeight: "bold",
      color: Colors.light.textColorOrange,
      textAlign: "center",
    },
    TiteInBack: {
      fontSize: 50,
      color: Colors.light.textColorOrange,
      letterSpacing: 1,
      textAlign: "center",
      position: "absolute",
      fontWeight: "bold",
      bottom: -5,
      left: 50,
      width: "100%",
      transform: [{ translateX: -50 }],
      zIndex: -1,
      opacity: 0.1,
    },
    inputContainer: {
      width: "100%",
      backgroundColor: Colors.light.inputBackground,
      borderRadius: 10,
      paddingVertical: 10,
      paddingHorizontal: 20,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      gap: 10,
    },
    TextInput: {
      fontSize: textSizes.large,
      width: "80%",
    },

    forgotPasswordContainer: {
      width: "100%",
      alignItems: "flex-end",
    },
    forgotPasswordButton: {
      backgroundColor: "transparent",
      paddingHorizontal: 10,
      paddingVertical: 5,
    },
    forgotPasswordText: {
      color: Colors.light.textColorOrange,
      fontSize: textSizes.small,
    },
    Button: {
      backgroundColor: Colors.light.textColorOrange,
      borderRadius: 10,
      paddingVertical: 10,
    },
    Text: {
      fontSize: textSizes.large,
      color: Colors.light.background,
      textAlign: "center",
    },
    separatorContainer: {
      position: 'relative',
      width: '100%',
      alignItems: 'center',
      marginVertical: 10,
    },
    line: {
      borderBottomColor: "gray",
      borderBottomWidth: StyleSheet.hairlineWidth,
      width: '100%',
    },
    orText: {
      fontSize: textSizes.large,
      lineHeight: 25,
      textAlign: "center",
      position: 'absolute',
      backgroundColor: '#fff', // Ensures the text is visible
      paddingHorizontal: 10,
      top: -13,
      color: 'gray'
    },
    Links:{
      color: Colors.light.textColorOrange,
    }
  });

  const loginWithEmailStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      paddingHorizontal: 23,
    },
    backgroundContainer: {
      ...StyleSheet.absoluteFillObject,
      zIndex: 0,
      top: "-100%",
      alignItems: "center",
    },
    lottie: {
      width: "300%",
      height: "100%",
      transform: [{ rotate: "180deg" }],
      marginLeft: "50%",
      backgroundColor: "rgba(0,0,0,0)",
    },
    foregroundContainer: {
      flex: 1,
      zIndex: 1,
    },
    centeredContent: {
      alignItems: "center",
      marginTop: "40%",
      flexDirection: "column",
      gap: 50,
      width: "100%",
    },
    textContainer: {
      width: "100%",
    },
    Title: {
      fontSize: textSizes.xxlarge,
      fontWeight: "bold",
      color: Colors.light.textColorOrange,
      textAlign: "center",
    },
    TiteInBack: {
      fontSize: 50,
      color: Colors.light.textColorOrange,
      letterSpacing: 1,
      textAlign: "center",
      position: "absolute",
      fontWeight: "bold",
      bottom: -5,
      left: 50,
      width: "100%",
      transform: [{ translateX: -50 }],
      zIndex: -1,
      opacity: 0.1,
    },
    inputContainer: {
      width: "100%",
      backgroundColor: Colors.light.inputBackground,
      borderRadius: 10,
      paddingVertical: 10,
      paddingHorizontal: 20,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      gap: 10,
    },
    TextInput: {
      fontSize: textSizes.large,
      width: "80%",
    },

    forgotPasswordContainer: {
      width: "100%",
      alignItems: "flex-end",
    },
    forgotPasswordButton: {
      backgroundColor: "transparent",
      paddingHorizontal: 10,
      paddingVertical: 5,
    },
    forgotPasswordText: {
      color: Colors.light.textColorOrange,
      fontSize: textSizes.small,
    },
    Button: {
      backgroundColor: Colors.light.textColorOrange,
      borderRadius: 10,
      paddingVertical: 10,
    },
    Text: {
      fontSize: textSizes.large,
      color: Colors.light.background,
      textAlign: "center",
    },
    separatorContainer: {
      position: 'relative',
      width: '100%',
      alignItems: 'center',
      marginVertical: 10,
    },
    line: {
      borderBottomColor: "gray",
      borderBottomWidth: StyleSheet.hairlineWidth,
      width: '100%',
    },
    orText: {
      fontSize: textSizes.large,
      lineHeight: 25,
      textAlign: "center",
      position: 'absolute',
      backgroundColor: '#fff', // Ensures the text is visible
      paddingHorizontal: 10,
      top: -13,
      color: 'gray'
    },
    Links:{
      color: Colors.light.textColorOrange,
    }
  });


  export {forgotPassStyles, indexStyles, loginWithEmailStyles}