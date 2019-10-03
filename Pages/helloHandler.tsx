// components/Hello.tsx
import React from 'react';
import {TextInput, StyleSheet, Text, View, TouchableOpacity} from 'react-native';

export interface Props {
    name: string;
    enthusiasmLevel?: number;
}

export const HelloHandler: React.FC<Props> = props => {

    const getExclamationMarks = (numChars: number) => {
        if(numChars !>0){
            return numChars;
        }
    };
    return(<View></View>);
    }