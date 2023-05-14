import React from 'react';
import { connect } from 'react-redux';
import { ATTRIBUTE_LIST } from '../../consts.js';
import AttributeItem from '../AttributeItem/AttributeItem.js';
import './AttributeList.css';

function AttributeList(props) {
  const listItems = ATTRIBUTE_LIST.map((attribute, i) => (
    <AttributeItem key={attribute} index={i} text={attribute} />
  ));
  return (
    <div className='attribute-card'>
      <div className='card-title'>Attributes</div>
      <ul>{listItems}</ul>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    attributeValues: state.attributeValues,
    attributeList: state.attributeList
  };
};

export default connect(mapStateToProps)(AttributeList);