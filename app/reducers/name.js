import * as actionTypes from '../constants/userinfo'

const initialState = {
    name:100
};

export default function age(state = initialState, action) {
    switch (action.type) {
        // 年龄
        case actionTypes.UPDATE_NAME:
            return Object.assign({},state,{name:state.name+1});
        default:
            return state
    }
}