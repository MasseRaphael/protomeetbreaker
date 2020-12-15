import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

export default class ButtonStart extends React.Component {
    constructor() {
      super();
    }

    render() {
        var colors = ["#262484", "#eb5674", "#f1b710", "#37b491"]
        var color = colors[Math.floor(Math.random() * Math.floor(4))]
        return(
            <View>
                <TouchableOpacity style={{
                    backgroundColor: "white",
                }}>
                    <Text style={{
                        fontSize: 100,
                        fontWeight: 'bold',
                        color: color,
                    }}>ON</Text>
                    <Text style={{
                        fontSize: 32,
                        fontWeight: 'bold',
                    }}>SE LANCE ?</Text>
                </TouchableOpacity>
            </View>
        );
    }
}