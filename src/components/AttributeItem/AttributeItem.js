import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateAttributeValue } from '../../redux/actions.js';
import './AttributeItem.css';

function AttributeItem(props) {
  const { text, index } = props;
  const [num, setNum] = useState(0);
  const [modVal, setModVal] = useState(0);
  const dispatch = useDispatch();



  function calculateModifier() {
    var val = (num - 10) / 2;
    val = val <= 0 ? Math.ceil(val) : Math.floor(val);
    setModVal(val);
  }



  function handleIncrementClick() {
    const newValue = num + 1;
    setNum(newValue);

    dispatch(updateAttributeValue(index, newValue));

  }

  function handleDecrementClick() {
    const newValue = num - 1;
    setNum(newValue);
    dispatch(updateAttributeValue(index, newValue));

  }

  useEffect(() => {
    calculateModifier();
  }, [num]);

  return (
    <div className='attribute-item'>
      <div className='attribute-title'>{text}</div>
      <div className='modifier'>{text} Modifier: {modVal}</div>
      <div className='attribute-value'>Value: {num}</div>
      <button onClick={handleIncrementClick}>+</button>
      <button onClick={handleDecrementClick}>-</button>
    </div>
  );
}

export default AttributeItem;