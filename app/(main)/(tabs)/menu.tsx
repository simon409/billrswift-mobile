import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '../styles/style';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar, Text, TouchableOpacity, View } from 'react-native';
import Header from '../Components/Header';
import { Help, Settings } from '@/assets/images';
import { textSizes } from '@/constants/Sizes';
import MenuRaccourcies from '../Components/MenuRaccourcies';
import AllMenu from '../Components/AllMenu';
import { ScrollView } from 'react-native-gesture-handler';

const Menu = () => {
    const [SelectedIndex, setSelectedIndex] = useState(0)
    return (
        <SafeAreaView style={[styles.safeArea, { backgroundColor: '#F3F3E0' }]}>
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
                <View style={{ display: 'flex', flexDirection: 'row', gap: 10, alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => console.log("Help!!!")}>
                        <Settings width={24} />
                    </TouchableOpacity>
                    <Text style={{ color: '#fff', fontSize: textSizes.large }}>Menu</Text>
                </View>
                <TouchableOpacity onPress={() => console.log("Help!!!")}>
                    <Help width={24} />
                </TouchableOpacity>
            </Header>
            <View style={{ paddingHorizontal: 23, paddingVertical: 30, justifyContent: 'center', display: 'flex', flexDirection: 'row' }}>
                <TouchableOpacity style={{ backgroundColor: SelectedIndex === 0 ? '#E76936' : '#F3F3E0', paddingVertical: 5, borderWidth: 1, borderColor: '#CBC9D9', width: "50%", borderTopLeftRadius: 20, borderBottomLeftRadius: 20, justifyContent: 'center', alignItems: 'center' }} onPress={() => setSelectedIndex(0)}>
                    <Text style={{ fontSize: textSizes.large, fontWeight: 'medium', color: SelectedIndex === 0 ? '#FFFFFF' : '#CBC9D9' }}>Facture</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ backgroundColor: SelectedIndex === 1 ? '#E76936' : '#F3F3E0', paddingVertical: 5, borderWidth: 1, borderColor: '#CBC9D9', width: "50%", borderTopRightRadius: 20, borderBottomRightRadius: 20, justifyContent: 'center', alignItems: 'center' }} onPress={() => setSelectedIndex(1)}>
                    <Text style={{ fontSize: textSizes.large, fontWeight: 'medium', color: SelectedIndex === 1 ? '#FFFFFF' : '#CBC9D9' }}>Devis</Text>
                </TouchableOpacity>
            </View>
            {
                SelectedIndex === 0 ?
                    <MenuRaccourcies /> :
                    <AllMenu />
            }
        </SafeAreaView>
    );
}


export default Menu;
