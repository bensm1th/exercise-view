import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

const DeleteExercise = (props) => {
    return (
        <View>
            <TouchableOpacity
                onPress={props.onPress}
            >
                <Text>Delete Exercise</Text>
                <Text>{props.title}</Text>
            </TouchableOpacity>
        </View>
    );
}

export { DeleteExercise };