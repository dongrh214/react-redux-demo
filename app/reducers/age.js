import * as actionTypes from '../constants/userinfo'

const initialState = {
    age:0
};

export default function userinfo(state = initialState, action) {
    switch (action.type) {
        case actionTypes.UPDATE_AGE:
            return Object.assign({},state,{age:state.age+1});

        default:
            return state
    }
}