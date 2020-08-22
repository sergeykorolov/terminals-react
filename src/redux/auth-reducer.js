const LOGIN = 'LOGIN';

let initialState = {
    isAuth: false,
    avatar: ''
}

const authReducer = (state = initialState, action) => {
    if (action.type === LOGIN) {
        return {...state, isAuth: true, avatar: action.profileData.avatar_url }
    } else {
        return state;
    }
}

export const loginUser = (profileData) => ({type: LOGIN, profileData});

export default authReducer;