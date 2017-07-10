import {combineReducers} from 'redux';
import ActiveReducer from './reducer-active';
import MessageReducer from './reducer-message';
import AllMessagesReducer from './reducer-all-message';


const allReducers = combineReducers({
    videoActive: ActiveReducer,
    posts: MessageReducer,
    messages: AllMessagesReducer,
});

export default allReducers;
