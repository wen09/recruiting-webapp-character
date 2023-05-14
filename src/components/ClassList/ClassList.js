import { useState } from 'react';
import { useSelector } from 'react-redux';
import { ATTRIBUTE_LIST, CLASS_LIST } from '../../consts.js';
import './ClassList.css';

function ClassList() {
  const [selectedClass, setSelectedClass] = useState(null);
  const { attributeValues, attributeList } = useSelector(state => state);

  const handleClick = (className) => {
    setSelectedClass(selectedClass === className ? null : className);
  };

  return (
    <div className='class-card'>
      <div className='card-title'>Class</div>
      {Object.keys(CLASS_LIST).map((className) => {
        const classAttributes = CLASS_LIST[className];
        const hasMinimumValues = attributeList.every(
          (attribute, index) => attributeValues[index] >= classAttributes[attribute]
        );
        const classNameClass = hasMinimumValues ? 'class-name-met' : 'class-name';

        return (
          <div key={className} className={classNameClass}>
            <h3 onClick={() => handleClick(className)}>{className}</h3>
            {selectedClass === className && (
              <ul>
                {Object.entries(CLASS_LIST[className]).map(([attribute, value]) => (
                  <li key={attribute}>
                    <strong>{attribute}:</strong> {value} </li>
                ))}
              </ul>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default ClassList;