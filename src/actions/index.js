import axios from 'axios';
import * as types from './types';

export const setupChoice = (choice) => {
    return {
        type: types.SETUP_CHOICE,
        payload: choice
    }
}

export const setupListSelect = (choice) => {
    return {
        type: types.SETUP_LIST_SELECT,
        payload: choice
    }
}

export const closeModal = () => {
    return {
        type: types.CLOSE_MODAL,
        payload: {}
    }
}

export const exerciseNameChanged = (text) => {
    return {
        type: types.CHANGE_EXERCISE_NAME,
        payload: text
    }
}

export const exercisePointsChanged = (text) => {
    return {
        type: types.CHANGE_EXERCISE_POINTS,
        payload: text
    }
}

export const exerciseTypeChanged = (text) => {
    return {
        type: types.CHANGE_EXERCISE_TYPE,
        payload: text
    }
}
export const exerciseDescriptionChanged = (text) => {
    return {
        type: types.CHANGE_EXERCISE_DESCRIPTION,
        payload: text
    }
} 

export const exerciseInfoSaved = ({ exerciseName, exerciseDescription, exerciseType, exercisePoints }) => {
    return function(dispatch){
        const exerciseInfoProps = {
            name: exerciseName,
            type: exerciseType,
            description: exerciseDescription,
            points: exercisePoints
        }
        axios.post('http://192.168.1.109:3000/exerciseInfo', exerciseInfoProps)
            .then(response => {
                dispatch({ type: types.SAVE_EXERCISE_INFO, payload: response.data });
            })
            .catch((err) => {
                console.log(err);
            });
        }
}

export const fetchExercises = () => {
    return function(dispatch) {
        axios.get('http://192.168.1.109:3000/exerciseInfo')
            .then(exercises => {
                dispatch({
                    type: types.FETCH_EXERCISES,
                    payload: exercises.data
                });
            })
            .catch(err => console.log(err));
    }
}

export const exerciseEditVisibility = (id) => {
    return function(dispatch) {
        axios.get('http://192.168.1.109:3000/exerciseInfo')
            .then(exercises => {
                const exercise = exercises.data.filter(_exercise => {
                    return _exercise._id === id;
                })[0];
                dispatch({
                    type: types.TOGGLE_EXERCISE_VISIBILITY,
                    payload: exercise
                });
            })
            .catch(err => {
                console.log(err);
            });
    }
}

export const exerciseInfoVisibility = (id) => {
    return {
        type: types.TOGGLE_EDIT_INFO,
        payload: id
    }
}

export const editExerciseText = ({ text, type }) => {
    return {
        type,
        payload: text
    }
}