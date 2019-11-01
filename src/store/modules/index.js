import { combineReducers } from 'redux'
import dishesReducer from './dishes';
import uiReducer from './ui';
import formReducer from './form';

const rootReducer = combineReducers({
  dishes: dishesReducer,
  ui: uiReducer,
  form: formReducer,
});


export default rootReducer;
