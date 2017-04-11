import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

const CreateWorkout = (props) => {
    return (
        <View>
            <TouchableOpacity
                onPress={props.onPress}
            >
                <Text>CreateWorkout</Text>
                <Text>{props.title}</Text>
            </TouchableOpacity>
        </View>
    );
}

export { CreateWorkout };