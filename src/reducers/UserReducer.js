const initialState = {
    id: null,
    username: '',
    role: ''
};

export const userReducer = (state=initialState, action) => {

    switch(action.type) {
        case "STORE_USER":
            const user = action.payload;

            state = {
                ...state,
                id: user.id,
                username: user.username,
                role: user.role
            };

            return state;
            break;
        default:
            return state;
    }
};