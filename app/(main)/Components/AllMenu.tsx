import React from 'react';
import { SectionList, StyleSheet, Text, View } from 'react-native';
import * as Icons from '../assets/MenuIcons/index';
import { textSizes } from '@/constants/Sizes';

const DATA = [
    {
        title: null,
        data: [
            { icon: Icons.Operations, title: "Opérations" },
            { icon: Icons.Chart, title: "Rapport sur le compte de résultat" },
            { icon: Icons.Scanner, title: "Scanner le reçu" },
            { icon: Icons.Facture, title: "Billan (provisoire)" },
            { icon: Icons.Category, title: "Catégories" }
        ]
    },
    {
        title: "Crédit",
        data: [
            { icon: Icons.Client, title: "Clients" },
            { icon: Icons.Devis, title: "Devis" },
            { icon: Icons.Facture, title: "Factures" },
            { icon: Icons.Payment, title: "Paiments entrants" },
            { icon: Icons.Receipt, title: "Reçus de vente" },
            { icon: Icons.Tag, title: "Produits et services" },
            { icon: Icons.Achat, title: "Achat comptant" }
        ]
    },
    {
        title: "Autre",
        data: [
            { icon: Icons.PieceJointe, title: "Pieces jointes" },
            { icon: Icons.CircleHelp, title: "Aide" },
            { icon: Icons.Comment, title: "Envoyer des commentaires" },
            { icon: Icons.SettingFuture, title: "Paramètres du compte Billrswift" },
        ]
    }
];

const AllMenu = () => {
    const renderItem = ({ item }) => {
        return (
            <View style={styles.item}>
                <item.icon width={20} height={20} />
                <Text style={styles.title}>{item.title}</Text>
            </View>
        );
    };

    const renderSectionHeader = ({ section: { title } }) => {
        if (title) {
            return (
                <View style={styles.header}>
                    <Text style={styles.headerText}>{title}</Text>
                </View>
            )
        }
    }

    return (
        <SectionList
            sections={DATA}
            keyExtractor={(item, index) => item.title + index}
            renderItem={renderItem}
            renderSectionHeader={renderSectionHeader}
            contentContainerStyle={styles.container}
        />
    );
};

const styles = StyleSheet.create({
    container: {
        paddingBottom: 80,
        paddingVertical: 10,
        backgroundColor: '#FFFFFF',
    },
    item: {
        paddingVertical: 15,
        paddingHorizontal: 23,
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
    },
    title: {
        fontSize: textSizes.large,
    },
    header: {
        paddingHorizontal: 23,
        paddingVertical: 20,
        backgroundColor: '#F3F3E0'
    },
    headerText: {
        fontSize: textSizes.large,
        fontWeight: 'bold',
    },
});

export default AllMenu;
