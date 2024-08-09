import { Box } from 'native-base';
import React from 'react';
import { Text, View } from 'react-native';
import { styles } from '../styles/style';
import { textSizes } from '@/constants/Sizes';
import { Colors } from '@/constants/Colors';

const FacturesComponent = () => {
    const Data  = [
        {
            id: 1,
            type: "Encaissements en cours",
            value: 0,
        },
        {
            id: 2,
            type: "Factures en cours",
            value: 0,
        }
    ]
    return (
        <View style={[styles.cardContainer, { gap: 20 }]}>
            <Text style={{ fontSize: textSizes.medium, color: Colors.light.textColorOrange }}>Factures</Text>
            <Box shadow={4} // This will give your card an elevation effect
                backgroundColor="white" // Ensure the background color is set
                borderRadius={10} // Optional: Add border radius for rounded corners
                padding={5} // Optional: Add padding inside the card
                marginBottom={5} // Optional: Add margin at the bottom
                style={{ gap: 10 }} // Optional: Set the width of the card
            >

                {
                    Data.map((item, index) => {
                        return (
                            <View key={index} style={styles.factureCardContainer}>
                                <View style={styles.LineContainer}>
                                    <View style={styles.Line}>
                                        <Text style={styles.LineVariableText}>{item.value}</Text>
                                        <Text style={styles.LineConstText}>{item.type}</Text>
                                    </View>
                                    <View style={styles.Line}>
                                        <Text style={styles.LineConstText}>د.م</Text>
                                        <Text style={styles.LineVariableText}>{item.value}</Text>
                                    </View>
                                </View>
                            </View>
                        )
                })}
            </Box>
        </View>
    );
}

export default FacturesComponent;
