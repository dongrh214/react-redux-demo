import * as actionTypes from '../constants/index'

export function updateName(data) {
    return {
        type: actionTypes.UPDATE_NAME,
        data
    }
}

export function updateAge(data) {
    return {
        type: actionTypes.UPDATE_AGE,
        data
    }
}