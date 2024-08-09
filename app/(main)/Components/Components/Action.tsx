import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Entypo from '@expo/vector-icons/Entypo';
import { SvgProps } from 'react-native-svg';

interface ActionProps {
    Icon: React.FC<SvgProps>;
    text: string;
}

const Action = ({Icon, text} : ActionProps) => {
    return (
        <TouchableOpacity style={styles.container}>
            <View style={styles.iconContainer}>
                <Icon width={30}/>
                <View style={styles.plusContainer}>
                    <Entypo name="plus" size={15} color="white" />
                </View>
            </View>
            <Text style={{textAlign: 'center'}}>{text}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 100,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        gap: 15,
    },
    iconContainer: {
        width: 80,
        height: 80,
        backgroundColor: '#F3F3E0',
        borderColor: '#DEDDDE',
        borderWidth: 1,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    },
    plusContainer:{
        position: 'absolute',
        bottom: -10,
        backgroundColor: '#E76936',
        width: 20,
        height: 20,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default Action;
