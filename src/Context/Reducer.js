export const initialState = {
    isOnline:true,
    loading:false,
    user: null,
    usersList: []
};

export const actionType = {
    SET_IS_ONLINE: "SET_IS_ONLINE",
    SET_USER: "SET_USER",
    SET_USERS_LIST: "SET_USERS_LIST",
    SET_LOADING:"SET_LOADING",
};

const reducer = (state, action) => {
    // console.log(action);

    switch(action.type) {
        case actionType.SET_IS_ONLINE:
            return {
                ...state,
                isOnline: action.payload
            }
        case actionType.SET_LOADING:
            return {
                ...state,
                loading: action.payload
            }
        case actionType.SET_USER:
            return {
                ...state,
                user: action.payload
            }
        case actionType.SET_USERS_LIST:
            return {
                ...state,
                usersList: action.payload
            }
        default: 
        return state;
    }
}


export default reducer;