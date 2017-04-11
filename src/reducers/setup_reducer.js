import * as types from '../actions/types';

const initialState = {
    setupOption: 'left',
    selectedListItem: "",
    modalVisible: false,
    exerciseForm: {
        exerciseName: '',
        exerciseDescription: '',
        exerciseType: '',
        exercisePoints: ''
    },
    exerciseEdit: {
        listVisibility: true,
        moreInfoId: '',
        selectedExercise: {}
    },
    exercises: []
}

const setupReducer = (state = initialState, action = {}) => {
    switch(action.type) {
        case types.SETUP_CHOICE:
            return {
                ...state,
                setupOption: action.payload
            }
        case types.SETUP_LIST_SELECT:
            return {
                ...state,
                selectedListItem: action.payload,
                modalVisible: true
            }
        case types.CLOSE_MODAL:
            return {
                ...state,
                modalVisible: false
            }
        case types.CHANGE_EXERCISE_NAME:
            return {
                ...state,
                exerciseForm: { ...state.exerciseForm, exerciseName: action.payload }
            }    
        case types.CHANGE_EXERCISE_DESCRIPTION:
            return {
                ...state,
                exerciseForm: { ...state.exerciseForm, exerciseDescription: action.payload }
            }
        case types.CHANGE_EXERCISE_TYPE:
            return {
                ...state,
                exerciseForm: { ...state.exerciseForm, exerciseType: action.payload }
            }
        case types.CHANGE_EXERCISE_POINTS:
            return {
                ...state,
                exerciseForm: { ...state.exerciseForm, exercisePoints: action.payload }
            }
        case types.SAVE_EXERCISE_INFO:
            return {
                ...state,
                exerciseForm: initialState.exerciseForm
            }
        case types.TOGGLE_EXERCISE_VISIBILITY:
            return {
                ...state,
                exerciseEdit: { 
                    ...state.exerciseEdit, 
                    listVisibility: !state.exerciseEdit.listVisibility, 
                    selectedExercise: action.payload 
                }
            }
        case types.FETCH_EXERCISES: 
            return {
                ...state,
                exercises: action.payload
            }
        case types.TOGGLE_EDIT_INFO:
            const id = state.exerciseEdit.moreInfoId === action.payload ? '' : action.payload;
            return {
                ...state,
                exerciseEdit: { ...state.exerciseEdit, moreInfoId: id }
            }
        case types.EDIT_EXERCISE_NAME:
            return {
                ...state,
                exerciseEdit: {
                    ...state.exerciseEdit,
                    selectedExercise: {
                        ...state.exerciseEdit.selectedExercise,
                        name: action.payload
                    }
                }
            }
        case types.EDIT_EXERCISE_POINTS:
            return {
                ...state,
                exerciseEdit: {
                    ...state.exerciseEdit,
                    selectedExercise: {
                        ...state.exerciseEdit.selectedExercise,
                        points: action.payload
                    }
                }
            }
        case types.EDIT_EXERCISE_TYPE:
            return {
                ...state,
                exerciseEdit: {
                    ...state.exerciseEdit,
                    selectedExercise: {
                        ...state.exerciseEdit.selectedExercise,
                        type: action.payload
                    }
                }
            }
        case types.EDIT_EXERCISE_DESCRIPTION:
            return {
                ...state,
                exerciseEdit: {
                    ...state.exerciseEdit,
                    selectedExercise: {
                        ...state.exerciseEdit.selectedExercise,
                        description: action.payload
                    }
                }
            }
        default: 
            return state;
    }
}

export default setupReducer;