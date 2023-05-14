import { ATTRIBUTE_LIST } from '../consts.js';
import { UPDATE_ATTRIBUTE_VALUE } from './actions.js';

const initialState = {
  attributeValues: Array(ATTRIBUTE_LIST.length).fill(0),
  attributeList: ATTRIBUTE_LIST,
};

ATTRIBUTE_LIST.forEach(attribute => {
  initialState[attribute] = 0;
});


const attributeReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_ATTRIBUTE_VALUE:
      const { index, value } = action.payload;
      return {
        ...state,
        attributeValues: state.attributeValues.map((val, i) =>
          i === index ? value : val
        ),
      };
    default:
      return state;
  }
};

export default attributeReducer;
