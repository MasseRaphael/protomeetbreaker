import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

export default class ButtonStart extends React.Component {
    constructor() {
      super();
    }

    render() {
        return(
            <View>
                <TouchableOpacity>
                    <Text>On</Text>
                    <Text>Se Lance</Text>
                </TouchableOpacity>
            </View>
        );
    }
}