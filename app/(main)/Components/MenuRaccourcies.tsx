import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FlatGrid } from 'react-native-super-grid';
import * as Icons from '../assets/MenuIcons/index'

const MenuRaccourcies = () => {
    const [items, setItems] = React.useState([
        { name: 'Opérations', icon: Icons.Operations },
        { name: 'Factures', icon: Icons.Facture },
        { name: 'Scanner le...', icon: Icons.Scanner },
        { name: 'Devis', icon: Icons.Devis },
        { name: 'Fournisseur', icon: Icons.Fournisseur },
        { name: 'Clients', icon: Icons.Client },
        { name: 'Paiements...', icon: Icons.Payment },
        { name: 'Achats cot...', icon: Icons.Achat },
        { name: 'Reçu de v...', icon: Icons.Receipt },
        { name: 'Rapport sur...', icon: Icons.Chart },
        { name: 'Produits et...', icon: Icons.Tag },

    ]);
    return (
        <View style={{ paddingHorizontal: 23, paddingVertical: 30, justifyContent: 'center', width: "100%", height: "100%" }}>
            <FlatGrid
                itemDimension={100}
                data={items}
                style={styles2.gridView}
                // staticDimension={300}
                // fixed
                spacing={10}
                renderItem={({ item }) => (
                    <View style={[styles2.itemContainer, { backgroundColor: '#fff' }]}>
                        <item.icon width={40} height={40} />
                        <Text style={styles2.itemName}>{item.name}</Text>
                    </View>
                )}
            />
        </View>
    );
}

const styles2 = StyleSheet.create({
    gridView: {
      marginBottom: 100,
    },
    itemContainer: {
      justifyContent: 'center',
        alignItems: 'center',
      borderRadius: 15,
      padding: 10,
      aspectRatio: 1,
      gap: 10,
    },
    itemName: {
      fontSize: 16,
      color: '#000',
      fontWeight: '600',
      textAlign: 'center',
    },
  });


export default MenuRaccourcies;
