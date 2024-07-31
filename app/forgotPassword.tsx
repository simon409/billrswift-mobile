import { Colors } from '@/constants/Colors';
import { textSizes } from '@/constants/Sizes';
import { MaterialIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

const ForgotPassword = () => {
    const [EmailAddress, setEmailAddress] = useState<string>("");
    return (
        <SafeAreaView style={styles.container}>
            <View>
                {/* OTP */}
                <View>
                    {/* Header */}
                    <View style={styles.header}>
                        <View style={{ width: "20%" }}>
                            <TouchableOpacity>
                                <MaterialIcons name="keyboard-arrow-left" size={30} color="black" />
                            </TouchableOpacity>
                        </View>
                        <View style={{ width: "60%", justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: textSizes.large }}>Mot de passe oublié</Text>
                        </View>
                        <View style={{ width: "20%" }}></View>
                    </View>
                </View>
                <View style={{ paddingHorizontal: 16, marginTop: 50, display: 'flex', gap: 50 }}>
                    <Text style={{ fontSize: textSizes.medium }}>
                        Entrez <Text style={{ color: Colors.light.textColorOrange }}>votre adresse e-mail</Text> pour réinitialiser votre mot de passe.
                    </Text>
                    <TextInput
                        style={styles.TextInput}
                        placeholder="example@example.com"
                        keyboardType="email-address"
                        autoCapitalize="none"
                        onChangeText={(text) => setEmailAddress(text)}
                        value={EmailAddress}
                        maxLength={9}
                    />
                </View>
            </View>
            <View>
                <TouchableOpacity
                    onPress={() => {
                    console.log("LOGINWEmail");
                    }}
                    style={styles.Button}
                >
                    <Text style={styles.Text}>Se connecter</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
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

export default ForgotPassword;
