import React, { useEffect, useRef, useState } from 'react';
import { View, Text, Dimensions, TouchableOpacity } from 'react-native';
import CreateFacture from '../../assets/createFacture.svg';
import Swiper from 'react-native-deck-swiper';
import { textSizes } from '@/constants/Sizes';
import AntDesign from '@expo/vector-icons/AntDesign';
import { SwipeableCardStyles } from '../../styles/style';
import Animated, { useSharedValue, useAnimatedStyle, withTiming, Easing } from 'react-native-reanimated';
import { Colors } from '@/constants/Colors';

type CardProps = {
  id: string;
  title: string;
  description: string;
  image: any;
};

const SwipeableCard: React.FC = () => {
  const swiperRef = useRef<Swiper<CardProps>>(null);
  const [isEmpty, setIsEmpty] = useState(false);
  const { height } = Dimensions.get('window');

  const ContainerHeight = useSharedValue(height * 0.8);

  const cards = [
    { id: '1', title: 'Envoyez des factures personnalisées', description: 'Crées, envoyez, recevez votre paiment, recommencez. Créez une facture pour démarrer', image: CreateFacture },
    { id: '2', title: 'Envoyez des factures personnalisées', description: 'Crées, envoyez, recevez votre paiment, recommencez. Créez une facture pour démarrer', image: CreateFacture },
    { id: '3', title: 'Envoyez des factures personnalisées', description: 'Crées, envoyez, recevez votre paiment, recommencez. Créez une facture pour démarrer', image: CreateFacture }
  ];

  useEffect(() => {
    if (isEmpty) {
      ContainerHeight.value = withTiming(height * 0.1, { duration: 1000, easing: Easing.out(Easing.exp) });
    } else {
      ContainerHeight.value = withTiming(height * 0.8, { duration: 1000, easing: Easing.out(Easing.exp) });
    }
  }, [isEmpty]);

  const AnimatedContainerStyle = useAnimatedStyle(() => {
    return {
      height: ContainerHeight.value,
    };
  });

  const handleRecharge = () => {
    setIsEmpty(false);
    swiperRef.current?.jumpToCardIndex(0); // Reset the swiper to the first card
  };

  return (
    <Animated.View style={[SwipeableCardStyles.container, AnimatedContainerStyle]}>
      {isEmpty ? (
        <View style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center', display: 'flex', flexDirection: 'row' }}>
          <Text style={{ fontSize: textSizes.large }}>Pas d'autre cartes, </Text>
          <TouchableOpacity onPress={handleRecharge}>
            <Text style={{ fontSize: textSizes.large, fontWeight: 'bold', color: Colors.light.textColorOrange }}>Recharger</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <Swiper
          ref={swiperRef}
          cards={cards}
          renderCard={(card) => (
            <View style={SwipeableCardStyles.card}>
              <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ fontSize: textSizes.medium }}>FACTURES</Text>
                <TouchableOpacity onPress={() => console.log('Swipping', card.id)}>
                  <AntDesign name="closecircle" size={24} color="#E76936" />
                </TouchableOpacity>
              </View>
              <View style={{ marginTop: 10, justifyContent: 'center', alignItems: 'center', display: 'flex', gap: 20 }}>
                <card.image style={SwipeableCardStyles.image} />
                <Text style={SwipeableCardStyles.title}>{card.title}</Text>
                <Text style={SwipeableCardStyles.description}>{card.description}</Text>
                <TouchableOpacity style={SwipeableCardStyles.Button}>
                  <Text style={SwipeableCardStyles.Text}>Crée une facture</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
          onSwiped={(cardIndex) => console.log('Card swiped', cardIndex)}
          onSwipedAll={() => setIsEmpty(true)}
          cardIndex={0}
          backgroundColor={'#fff'}
          stackSize={3}
          disableTopSwipe
          disableBottomSwipe
        />
      )}
    </Animated.View>
  );
};

export default SwipeableCard;
