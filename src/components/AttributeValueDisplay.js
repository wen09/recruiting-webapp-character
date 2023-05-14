import { connect } from 'react-redux';

function AttributeValueDisplay(props) {
  const styles = {
    content: {
      border: '10px solid black',
    },
    item: {
      display: 'flex',
      textAlign: 'left',
      margin: 10,
    },
    title: {
      fontWeight: 'bold',
      backgroundColor: 'black',
      color: 'aliceblue',
      padding: 10,
      fontSize: 40,
    },
  };

  const attributeValueList = props.attributeValues.map((val, index) => (
    <div key={index} style={styles.item}>
      <span>{props.attributeList[index]}</span>: {val}
    </div>
  ));

  return (
    <div style={styles.content}>
      <div style={styles.title}>Attribute Values</div>
      {attributeValueList}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    attributeValues: state.attributeValues,
    attributeList: state.attributeList
  };
};

export default connect(mapStateToProps)(AttributeValueDisplay);
