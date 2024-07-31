import CustomTitle from '@/components/CustomTitle';
import { textSizes } from '@/constants/Sizes';
import LottieView from 'lottie-react-native';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Congrates = () => {
    return (
        <View style={styles.container}>
            {/* Congrates */}
            <LottieView
                autoPlay
                loop
                style={styles.LottieAnim1}
                source={require('../assets/Lottie/validé le compte.json')}
                />
            <CustomTitle title='Félicitation' titleInBackground='Félicitation' centered/>
            <Text style={{textAlign: 'center', fontSize: textSizes.medium}}>Votre compte Billrswift a bien crées</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignContent: 'center',
        paddingHorizontal: 46,
        display: 'flex',
        gap: 30,
    },
    LottieAnim1:{
        width: '80%',
        aspectRatio: 1,
        alignSelf: 'center',
    }
})

export default Congrates;
