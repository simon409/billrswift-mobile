import React from 'react';
import { StatusBar, Text, View, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import Header from '../Components/Header';
import { textSizes } from '@/constants/Sizes';
import Help from "@/assets/images/help.svg";
import { styles } from '../styles/style';
import ActionRapides from '../Components/ActionRapides';
import FactureSection from '../Components/Facture';
import { ScrollView } from 'react-native-gesture-handler';

const Home = () => {
    return (
        <SafeAreaView style={styles.safeArea}>
            <LinearGradient
                colors={['#E42E45', '#EC9850']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.gradient}
            >
                <StatusBar
                    animated={true}
                    translucent
                    backgroundColor="transparent"
                    barStyle="light-content"
                />
            </LinearGradient>
            <Header>
                <Text style={{ color: '#fff', fontSize: textSizes.large }}>Nexular corp</Text>
                <TouchableOpacity onPress={() => console.log("Help!!!")}>
                    <Help width={24} />
                </TouchableOpacity>
            </Header>
            <ScrollView>
                <View style={styles.contentContainer}>
                    <ActionRapides />
                    <FactureSection />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default Home;
