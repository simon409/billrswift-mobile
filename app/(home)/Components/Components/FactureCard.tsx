import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { factureCardStyles } from '../../styles/style';
import { SvgProps } from 'react-native-svg';

interface FactureCardProps {
    Icon: React.FC<SvgProps>;
    Title: string;
    Content: string;
}

const FactureCard = ({Icon, Title, Content} : FactureCardProps) => {
    return (
        <View style={factureCardStyles.container}>
            <View style={factureCardStyles.IconContainer}>
                <View style={factureCardStyles.Icon}>
                    <Icon />
                </View>
            </View>
            <View style={factureCardStyles.ContentContainer}>
                <Text style={factureCardStyles.cardTitle}>{Title}</Text>
                <Text style={factureCardStyles.cardContent}>{Content}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({})

export default FactureCard;
