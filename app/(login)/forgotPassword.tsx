import { Colors } from '@/constants/Colors';
import { textSizes } from '@/constants/Sizes';
import { MaterialIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { forgotPassStyles } from './styles/style';

const ForgotPassword = () => {
    const [EmailAddress, setEmailAddress] = useState<string>("");
    return (
        <SafeAreaView style={forgotPassStyles.container}>
            <View>
                {/* OTP */}
                <View>
                    {/* Header */}
                    <View style={forgotPassStyles.header}>
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
                        style={forgotPassStyles.TextInput}
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
                    style={forgotPassStyles.Button}
                >
                    <Text style={forgotPassStyles.Text}>Se connecter</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

export default ForgotPassword;
