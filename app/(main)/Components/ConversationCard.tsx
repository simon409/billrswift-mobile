import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface ConversationCardProps {
    id: string;
    name: string;
    lastMessage: string;
    lastMessageTime: string;
    unreadMessages: number;
    isSelected: boolean;
    onSelect: (id: string) => void;
}

const ConversationCard = ({id, name, lastMessage, lastMessageTime, unreadMessages, isSelected, onSelect} : ConversationCardProps) => {
    return (
        <TouchableOpacity onPress={()=>onSelect(id)}>
            <Text>{name}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({})

export default ConversationCard;
