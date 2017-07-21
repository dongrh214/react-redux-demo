import { combineReducers } from 'redux'

import name from './name'
import age from './age'

const rootReducer = combineReducers({
    personName: name,
    personAge: age
});

export default rootReducer