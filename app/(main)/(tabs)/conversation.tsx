import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { ScrollView, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../Components/Header';
import { textSizes } from '@/constants/Sizes';
import { styles } from '../styles/style';
import AntDesign from '@expo/vector-icons/AntDesign';
import { TextInput } from 'react-native-gesture-handler';
import CustomTitle from '@/components/CustomTitle';
import { Colors } from '@/constants/Colors';
import { discussion } from '../DummyData'
import ConversationCard from '../Components/ConversationCard';

const Conversation = () => {

    return (
        <SafeAreaView style={styles.safeArea}>
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
                <TouchableOpacity style={{ justifyContent: 'center' }}>
                    <AntDesign name="left" size={24} color="white" />
                </TouchableOpacity>
                <View style={{
                    flexDirection: 'row',
                    flex: 1,
                    justifyContent: 'center',
                    backgroundColor: 'rgba(0, 0, 0, 0.1)',
                    borderRadius: 15,
                    shadowColor: '#000',
                    elevation: 10,
                }}>

                    <LinearGradient
                        colors={['#E42E45', '#EC9850']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        style={{
                            flexDirection: 'row',
                            flex: 1,
                            justifyContent: 'center',
                            borderRadius: 20,
                            padding: 5,
                            paddingHorizontal: 20,
                        }}
                    >
                        <TextInput
                            placeholder="Search"
                            placeholderTextColor="white"
                            style={{
                                color: 'white',
                                fontSize: textSizes.medium,
                                width: '90%',
                            }}
                        />
                        <TouchableOpacity style={{ justifyContent: 'center' }}>
                            <AntDesign name="search1" size={24} color="white" />
                        </TouchableOpacity>
                    </LinearGradient>

                </View>
            </Header>
            <ScrollView style={{backgroundColor: Colors.light.background}}>
                <View style={{paddingHorizontal: 23, paddingVertical: 40}}>
                    <CustomTitle title="Messages" titleInBackground="Messages" centered={false} />
                    <Text style={{color: "grey", fontSize: textSizes.medium}}>Vous avez 2 nouveaux messages</Text>
                </View>
                <View style={{paddingHorizontal: 23, paddingVertical: 10}}>
                    <ConversationCard id='1' name='test' lastMessage='test last message' lastMessageTime='125' unreadMessages={5} isSelected onSelect={(id)=>console.log(id)}/>
                    <ConversationCard id='2' name='test' lastMessage='test last message' lastMessageTime='125' unreadMessages={5} isSelected = {false} onSelect={(id)=>console.log(id)}/>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default Conversation;
