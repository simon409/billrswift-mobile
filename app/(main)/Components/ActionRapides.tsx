import CustomTitle from '@/components/CustomTitle';
import React from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { styles } from '../styles/style';
import Action from './Components/Action';
import { Achat, Client, Devis, Facture, Fournisseur, Payment, Receipt, Scanner } from '@/assets/images';

const ActionRapides = () => {
    return (
        <View style={{ backgroundColor: '#fff', paddingTop: 30, paddingBottom: 10 }}>
            <View style={{ paddingHorizontal: 23 }}>
                <CustomTitle title='Action rapides' titleInBackground='Action' centered={false} />
            </View>
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.scrollContainer}
            >
                <Action Icon={Facture} text='Facture' />
                <Action Icon={Scanner} text='Scanner reçus' />
                <Action Icon={Devis} text='Devis' />
                <Action Icon={Fournisseur} text='Fournisseur' />
                <Action Icon={Client} text='Client' />
                <Action Icon={Achat} text='Paiement entrant' />
                <Action Icon={Payment} text='Achat comptant' />
                <Action Icon={Receipt} text='Reçu de vente' />
            </ScrollView>
        </View>
    );
}

export default ActionRapides;
