import CustomTitle from '@/components/CustomTitle';
import { textSizes } from '@/constants/Sizes';
import { useRouter } from 'expo-router';
import LottieView from 'lottie-react-native';
import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { congratsStyles } from './styles/style';

const Congrates = () => {
    const router = useRouter();

    useEffect(() => {
        const timer = setTimeout(() => {
                router.replace('(home)');
        }, 1600); // 3 seconds delay

        return () => clearTimeout(timer); // Cleanup the timer
    }, []);

    return (
        <View style={congratsStyles.container}>
            {/* Congrates */}
            <LottieView
                autoPlay
                loop
                style={congratsStyles.LottieAnim1}
                source={require('@/assets/Lottie/validé le compte.json')}
                />
            <CustomTitle title='Félicitation' titleInBackground='Félicitation' centered/>
            <Text style={{textAlign: 'center', fontSize: textSizes.medium}}>Votre compte Billrswift a bien crées</Text>
        </View>
    );
}

export default Congrates;
