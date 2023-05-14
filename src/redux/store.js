import { createStore } from 'redux';
import attributeReducer from './reducers';

const store = createStore(attributeReducer);

export default store;
