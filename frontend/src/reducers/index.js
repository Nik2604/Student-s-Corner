
import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import app from './app.reducer';
import resume from './resume.reducer';
import tools from './tools.reducer';


export default combineReducers({
    errors: errorReducer,
    app,
  resume,
  tools,
});