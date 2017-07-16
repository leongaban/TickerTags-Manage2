import SET_CURRENT_USER from '../actions/types'
import { isEmpty } from 'ramda'

const initialState = {
    isAuthenticated: false,
    user: {}
};

export const authReducer = (state = initialState, action = {}) => {
	switch(action.type) {
        case "SET_CURRENT_USER":
            return {
            	isAuthenticated: !isEmpty(action.user),
            	user: action.user
            };
            break;
        default: return state;
    }
}