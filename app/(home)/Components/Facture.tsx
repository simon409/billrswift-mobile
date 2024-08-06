import CustomTitle from '@/components/CustomTitle';
import React from 'react';
import { Text, View } from 'react-native';
import FactureCard from './Components/FactureCard';
import { ScrollView } from 'react-native-gesture-handler';
import { Document, Settings, Volte } from './assets';

const FactureSection = () => {
    return (
        <View style={{ backgroundColor: '#fff', paddingHorizontal: 23, paddingVertical: 30 }}>
            <CustomTitle title='à faire' titleInBackground='à faire' centered={false} />
            <View style={{display: 'flex', gap: 5, marginVertical: 15}}>
                <FactureCard Icon={Volte} Title='Consultez vos bénéfices' Content='Consultez vos comptes bancaires et cartes de paiement.'/>
                <FactureCard Icon={Document} Title='Créez votre première facture' Content='Nous vous avertirons dès que votre
facture aura été payée.'/>
                <FactureCard Icon={Settings} Title='Essayez Billrswift sur votre ...' Content='Pour plus de possibilités, passez à un écran plus grand.'/>
            </View>
        </View>
    );
}


export default FactureSection;
