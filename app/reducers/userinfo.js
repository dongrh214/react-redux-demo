import * as actionTypes from '../constants/userinfo'

const initialState = {
    name:100,
    age:0
};

export default function userinfo(state = initialState, action) {
    switch (action.type) {
        // 登录
        case actionTypes.UPDATE_NAME:
            return Object.assign({},state,{name:state.name+1});

        // 修改城市
        case actionTypes.UPDATE_AGE:
            return Object.assign({},state,{age:state.age+1});

        default:
            return state
    }
}