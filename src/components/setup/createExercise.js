import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, TouchableOpacity, StyleSheet, TextInput, Dimensions } from 'react-native';
import { exerciseNameChanged, 
    exerciseTypeChanged, 
    exerciseDescriptionChanged, 
    exercisePointsChanged,
    exerciseInfoSaved
} from '../../actions';
import { Input } from '../foundation/input';
import { CardSection } from '../foundation/cardSection';
import ListTitle from '../foundation/listTitle';

let ScreenHeight = Dimensions.get("window").height;
let ScreenWidth = Dimensions.get("window").width;
let headerHeight = ScreenHeight * .1;

class UnConnectedCreateExercise extends Component {
    constructor(props) {
        super(props);
        this.onExerciseNameChange = this.onExerciseNameChange.bind(this);
        this.onExerciseTypeChange = this.onExerciseTypeChange.bind(this);
        this.onExerciseDescriptionChange = this.onExerciseDescriptionChange.bind(this);
        this.onExercisePointsChange = this.onExercisePointsChange.bind(this);
    }

    onExerciseNameChange(text) {
        this.props.exerciseNameChanged(text);
    }

    onExerciseTypeChange(text) {
        this.props.exerciseTypeChanged(text);
    }

    onExerciseDescriptionChange(text) {
        this.props.exerciseDescriptionChanged(text);
    }

    onExercisePointsChange(text) {
        this.props.exercisePointsChanged(text);
    }

    onSave = () => {
        const formProps = {...this.props.setup.exerciseForm}
        this.props.exerciseInfoSaved(formProps);
        this.props.onPress();
    }

    onBack = () => {
        this.props.onPress();
    }

    render() {
        const { exerciseName, exerciseDescription, exerciseType, exercisePoints } = this.props.setup.exerciseForm;
        return (
            <View style={styles.container}>
                <ListTitle title='CREATE EXERCISE' />
                
                <CardSection>
                    <Input 
                        label="Name"
                        placeholder="Bench Press"
                        value={exerciseName}
                        onChangeText={this.onExerciseNameChange}
                    />
                </CardSection>
                <CardSection>
                    <Input 
                        label="Description"
                        placeholder="Sitting on workout bench with metal bar..."
                        value={exerciseDescription}
                        onChangeText={this.onExerciseDescriptionChange}
                    />
                </CardSection>
                <CardSection>
                    <Input 
                        label="Type"
                        placeholder="Strength"
                        value={exerciseType}
                        onChangeText={this.onExerciseTypeChange}
                    />
                </CardSection>
                <CardSection>
                    <Input 
                        label="Points Value"
                        placeholder="0"
                        value={exercisePoints}
                        onChangeText={this.onExercisePointsChange}
                    />
                </CardSection>
                <CardSection>
                    <TouchableOpacity
                        onPress={this.onSave}
                    >   
                        <Text>Save</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={this.onBack}
                    >   
                        <Text>Back</Text>
                    </TouchableOpacity>
                </CardSection>
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between'
    }
});

const mapStateToProps = (state) => {
    const { setup } = state;
    return {
        setup
    }
}
const CreateExercise = connect(mapStateToProps, { exerciseNameChanged, exerciseTypeChanged, 
    exerciseDescriptionChanged, exerciseInfoSaved,
    exercisePointsChanged })(UnConnectedCreateExercise); 
export { CreateExercise };