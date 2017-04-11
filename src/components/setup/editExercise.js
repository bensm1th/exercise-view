import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { Text, View, TouchableOpacity, Dimensions, StyleSheet, ListView } from 'react-native';
import { Input } from '../foundation/input';
import { CardSection } from '../foundation/cardSection';
import ListTitle from '../foundation/listTitle';
import SmallListItem from '../foundation/listViewExample';
import * as actions from '../../actions';
import * as types from '../../actions/types';

let ScreenHeight = Dimensions.get("window").height;
let ScreenWidth = Dimensions.get("window").width;
let headerHeight = ScreenHeight * .1;

class _EditExercise extends Component {

    constructor(props) {
        super(props);
    }

    changeText = (type, text) => {
        this.props.editExerciseText({ type, text });
    }


    render() {
        const { listVisibility, 
                selectedExercise, 
                selectedExercise: { 
                    name, points, description, type 
                } } = this.props.setup.exerciseEdit;
        return (
            <View>
                <ListTitle title='EDIT EXERCISE' />
                <View>
                    {listVisibility &&
                    <View>
                    <View style={styles.directions}>
                        <Text style={styles.directionsText}>Choose an exercise to edit.</Text>
                    </View>
                    
                        <View style={styles.listContainer}>
                            <SmallListItem />
                        </View>
                    </View>
                    }   
                    {!listVisibility &&
                    <View>
                        <CardSection>
                            <Input 
                                label="Name"
                                value={name}
                                onChangeText={(text) => this.changeText(types.EDIT_EXERCISE_NAME, text)}
                            />
                        </CardSection>
                        <CardSection>
                            <Input 
                                label="Description"
                                value={description}
                                onChangeText={(text) => this.changeText(types.EDIT_EXERCISE_DESCRIPTION, text)}
                            />
                        </CardSection>
                        <CardSection>
                            <Input 
                                label="Type"
                                value={type}
                                onChangeText={(text) => this.changeText(types.EDIT_EXERCISE_TYPE, text)}
                            />
                        </CardSection>
                        <CardSection>
                            <Input 
                                label="Points Value"
                                value={points}
                                onChangeText={(text) => this.changeText(types.EDIT_EXERCISE_POINTS, text)}
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
                    }
                </View>
                <TouchableOpacity
                    onPress={this.props.onPress}
                >
                    <Text>BACK</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    listContainer: {
        width: ScreenWidth * .8,
        marginLeft: ScreenWidth * .1,
        height: ScreenHeight *.5,
    },
    directions: {
        height: ScreenHeight * .08,
        justifyContent: 'center',
        alignItems: 'center'
    },
    directionsText: {
        fontSize: 20
    }
});

const mapStateToProps = (state) => {
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    const { setup } = state;
    return { 
        setup,
        exerciseData: ds.cloneWithRows(setup.exercises)    
    }
}

const EditExercise = connect(mapStateToProps, { ...actions })(_EditExercise);

export { EditExercise };