import { createStore, applyMiddleware, compose } from 'redux';

//initial state
const INITIAL_STATE = {
    users: [
        // {
        //     firstName: '',
        //     lastName: '',
        //     dateOfBirth: '',
        //     age: '',
        //     hobby: ''
        // }
    ]
}
//redux dev tools configuration
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//store
export const store = createStore(
    userReducer,
    INITIAL_STATE,
    composeEnhancers(applyMiddleware())

);

//user reducer
function userReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'ADD_USER':
            return {
                ...state,
                users: [...state.users, action.payload]
            }
        default:
            return state;
    }
}

export const addUserAction = (user) => ({
    type: 'ADD_USER',
    payload: user

})