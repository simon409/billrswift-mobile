import React from 'react';
import { StatusBar, StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import Header from '@/components/Header';
import { textSizes } from '@/constants/Sizes';
import Help from "../assets/images/help.svg";
import CustomTitle from '@/components/CustomTitle';
import Action from '@/components/Action';

import { Facture, Scanner, Devis, Fournisseur, Client, Achat, Payment, Receipt } from '@/assets/images';

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
            <View style={styles.contentContainer}>
                <View style={{backgroundColor: '#fff', paddingTop: 30, paddingBottom: 10}}>
                    <View style={{paddingHorizontal: 23}}>
                        <CustomTitle title='Action rapides' titleInBackground='Action' centered={false} />
                    </View>
                    <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={styles.scrollContainer}
                    >
                        <Action Icon={Facture} text='Facture'/>
                        <Action Icon={Scanner} text='Scanner reçus'/>
                        <Action Icon={Devis} text='Devis'/>
                        <Action Icon={Fournisseur} text='Fournisseur'/>
                        <Action Icon={Client} text='Client'/>
                        <Action Icon={Achat} text='Paiement entrant'/>
                        <Action Icon={Payment} text='Achat comptant'/>
                        <Action Icon={Receipt} text='Reçu de vente'/>
                    </ScrollView>
                </View>
                <View style={{backgroundColor: '#fff', paddingHorizontal: 23, paddingVertical: 30}}>
                    <CustomTitle title='à faire' titleInBackground='à faire' centered={false} />
                    <View>
                        <Text>Facture</Text>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}

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

export default Home;
