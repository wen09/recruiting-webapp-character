export const UPDATE_ATTRIBUTE_VALUE = 'UPDATE_ATTRIBUTE_VALUE';

export const updateAttributeValue = (index, value) => {
  return {
    type: UPDATE_ATTRIBUTE_VALUE,
    payload: {
      index,
      value,
    },
  };
};